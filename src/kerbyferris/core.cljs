(ns kerbyferris.core
  (:require [reagent.core :as r :refer [atom]]
            [kerbyferris.views.footer :refer [footer]]
            [kerbyferris.views.sounds :refer [sounds]]
            [kerbyferris.views.work :refer [work]]
            [kerbyferris.views.bio :refer [bio]]
            [kerbyferris.views.contact :refer [contact]]
            [clojure.string :as cstr]
            ))

(enable-console-print!)

(defn home[]
  [:h1 "home"])

(def pages
  [{:name "sounds" :render sounds}
   {:name "work" :render work}
   {:name "bio" :render bio}
   {:name "contact" :render contact}]) 

(defonce app-state (r/atom {:page [home]
                            :current-page "home"})) 

(defn is-current-page?[page]
    (= (@app-state :current-page) page)) 

(defn navigate[page]
  (do
    (js/console.log page)
    (swap! app-state assoc-in [:current-page] (page :name))
    (swap! app-state update-in [:page] (page :render))))

(defn logo[]
    [:div#logo
     [:a {:href "/"} "kf"]
     [:h1.title.tab_box "Kerby Ferris"]])

(defn nav-link[page]
  (let [page-name (page :name)
        page-id (str page-name "_link")
        page-render (page :render)]
    ^{:key page} [:li
                  [:a {:class (if (is-current-page? page-name) "current")
                  :id page-id 
                  :href "#"
                  :on-click #(navigate page)}
      [:img {:src "img/bang.png"}]
      [:span.flag_box (cstr/capitalize page-name)]]]))

(defn nav[]
  [:nav [:ul
    (doall (for [page pages] (nav-link page)))]]) 

(defn header[]
  [:div.header-container
   [:header.wrapper.clearfix
    [logo]
    [nav]]])

(defn page[]
  [:div
    [header]
    [:div.main-container
     [:div#connectors [:svg [:line.first][:line.second]]]
     [:div.main.wrapper.clearfix (@app-state :page)]]
    [footer]])


(defn start[]
  (r/render-component [page] (. js/document (getElementById "app"))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(start)
