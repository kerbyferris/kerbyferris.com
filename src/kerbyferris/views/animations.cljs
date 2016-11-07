(ns kerbyferris.views.animations
  (:require [kerbyferris.state :as state :refer [state]]))

(defn connectors[]
   [:div.main-container
    [:div#connectors
     [:svg
      [:line.first (:nav-send (:cables @state))]
      [:line.second (:nav-return (:cables @state))]]]])
