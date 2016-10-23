(ns kerbyferris.views.header
  (:require [clojure.string :refer [capitalize]]
            [kerbyferris.state :as state :refer [state]]
            [kerbyferris.app_data :refer [pages]]
            [kerbyferris.helpers :refer [is-current-page?]]))

(defn logo[]
    [:div#logo
     [:a {:href "/"} "kf"]
     [:h1.title.tab_box "Kerby Ferris"]])

(defn nav-link[page]
  (let [page-name (page :name)
        page-id (str page-name "_link")
        page-link (str "#/" page-name)
        page-render (page :render)]
    ^{:key page}
    [:li
      [:a {:class (if (is-current-page? page-render) "current")
           :id page-id
           :href page-link}
       [:img {:src "img/bang.png"}]
       [:span.flag_box (capitalize page-name)]]]))

(defn nav[]
  [:nav
    [:ul (doall (for [page pages] (nav-link page)))]])

(defn header[]
  [:div.header-container
   [:header.wrapper.clearfix
    [logo]
    [nav]]])
