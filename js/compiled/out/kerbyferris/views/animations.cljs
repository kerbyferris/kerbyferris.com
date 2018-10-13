(ns kerbyferris.views.animations
  (:require-macros [dommy.core :refer [sel sel1]])
  (:require [dommy.core :as dommy]
            [kerbyferris.state :as state :refer [state]]))

(defn get-coordinates[selector]
  (let [element (sel1 selector)]
    (if element 
      (dommy/bounding-client-rect element))))

(defn update-cable-coordinates[line-vector from-coords to-coords]
  (for [line line-vector]
    (swap! state assoc line
           {:x1 (:left from-coords)
            :x2 (:left to-coords)
            :y2 (:top to-coords)})))

(defn connectors[]
   [:div.main-container
    [:div#connectors
     [:svg
      [:line.first (:line-1 @state)]
      [:line.second (:line-2 @state)]]]])
