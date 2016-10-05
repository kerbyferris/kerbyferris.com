(ns kerbyferris.views.main
  (:require [kerbyferris.state :as state :refer [state]]
            [kerbyferris.views.header :refer [header]]
            [kerbyferris.views.animations :refer [connectors]]
            [kerbyferris.views.footer :refer [footer]]))

(defn page[]
  [:div
   [header]
   [:div.main-container
    [connectors]
    [:div.main.wrapper.clearfix (@state :page)]]
   [footer]])
