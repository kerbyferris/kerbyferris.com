(ns kerbyferris.state
  (:require [reagent.core :as r :refer [atom]]
            [kerbyferris.views.home :refer [home]]))

(def line-1 {:x1 0 :x2 0 :y1 0 :y2 0})
(def line-2 {:x1 0 :x2 0 :y1 0 :y2 0})
(def default-page [home])

(defonce state
  (r/atom {:page default-page
           :line-1 line-1 
           :line-2 line-2})) 
