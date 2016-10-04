(ns kerbyferris.core
  (:require-macros [secretary.core :refer [defroute]]
                   [dommy.core :refer [sel sel1]])
  (:import goog.History)
  (:require [secretary.core :as secretary]
            [dommy.core :as dommy]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [reagent.core :as r :refer [atom]]
            [kerbyferris.views.home :refer [home]]
            [kerbyferris.views.sounds :refer [sounds]]
            [kerbyferris.views.work :refer [work]]
            [kerbyferris.views.bio :refer [bio]]
            [kerbyferris.views.contact :refer [contact]]
            [kerbyferris.views.footer :refer [footer]]
            [clojure.string :as cstr]))

(enable-console-print!)

(def pages
  [{:name "home" :render [home] :route "/"}
   {:name "sounds" :render [sounds] :route "/sounds"}
   {:name "work" :render [work] :route "/work"}
   {:name "bio" :render [bio] :route "/bio"}
   {:name "contact" :render [contact] :route "/contact"}]) 

(defonce app-state
  (r/atom {:page [home]
           :line-1-coords {:x1 0 :x2 0 :y1 0 :y2 0}
           :line-2-coords {:x1 0 :x2 0 :y1 0 :y2 0}})) 

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn get-coordinates[selector]
  (let [element (sel1 selector)]
    (if element 
      (dommy/bounding-client-rect element))))

(defn update-cable-coordinates[line-vector from-coords to-coords]
  (for [line line-vector]
      (swap! app-state assoc line
             {:x1 (:left from-coords)
              :x2 (:left to-coords)
              :y2 (:top to-coords)})))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  (doall
    (for [page pages]
      (defroute (page :route) []
        (swap! app-state assoc :page (page :render)))))
  (hook-browser-navigation!))

(defmulti current-page #(@app-state :page))
(for [page pages]
  (defmethod current-page (page :name) [] (page :render)))

(defn is-current-page?[page]
  (= (:page @app-state) page)) 

(defn logo[]
    [:div#logo
     [:a {:href "/"} "kf"]
     [:h1.title.tab_box "Kerby Ferris"]])

(defn nav-link[page]
  (let [page-name (page :name)
        page-id (str page-name "_link")
        page-link (str "#/" page-name)
        page-render (page :render)]
    ^{:key page} [:li [:a {:class (if (is-current-page? page-render) "current")
                           :id page-id
                           :href page-link}
                       [:img {:src "img/bang.png"}]
                       [:span.flag_box (cstr/capitalize page-name)]]]))

(defn nav[]
  (let [nav-link-pages (rest pages)]
    [:nav [:ul
      (doall (for [page nav-link-pages] (nav-link page)))]]))

(defn header[]
  [:div.header-container
   [:header.wrapper.clearfix
    [logo]
    [nav]]])

(defn page[]
  [:div
    [header]
    [:div.main-container
     [:div#connectors
      [:svg
       [:line.first (:line-1-coords @app-state)]
       [:line.second (:line-2-coords @app-state)]]]
     [:div.main.wrapper.clearfix (@app-state :page)]]
    [footer]])

(defn ^:export start[]
  (app-routes)
  (r/render-component [page] (. js/document (getElementById "app"))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(start)
