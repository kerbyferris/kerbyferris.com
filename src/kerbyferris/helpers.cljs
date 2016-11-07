(ns kerbyferris.helpers
  (:require-macros [dommy.core :refer [sel sel1]])
  (:require [dommy.core :as dommy]
            [kerbyferris.state :refer [state]]))

(defn is-current-page?[page]
  (= (:page @state) page)) 

(defn is-open-header?[header-title]
  (contains? (:open-headers (:work @state)) header-title))

(defn update-open-headers![header-title]
  (let [open-headers (:open-headers (:work @state))]
    (if (contains? open-headers header-title)
      (swap! state assoc-in [:work :open-headers] (disj open-headers header-title))
      (swap! state assoc-in [:work :open-headers] (conj open-headers header-title)))))

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
