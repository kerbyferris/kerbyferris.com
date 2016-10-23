(ns kerbyferris.state
  (:require [reagent.core :as r :refer [atom]]
            [kerbyferris.views.home :refer [home]]))

(def nav-send {:x1 0 :x2 0 :y1 0 :y2 0})
(def nav-return {:x1 0 :x2 0 :y1 0 :y2 0})
(def default-page [home])
(def open-headers #{})

(defonce state
  (r/atom {:page default-page
           :cables {:nav-send nav-send :nav-return nav-return}
           :work {:open-headers open-headers}})) 
