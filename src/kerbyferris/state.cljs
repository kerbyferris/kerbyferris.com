(ns kerbyferris.state
  (:require [reagent.core :as r :refer [atom]]
            [kerbyferris.views.sounds :refer [sounds]]))

(def nav-send {:x1 600 :x2 20 :y1 0 :y2 30})
(def nav-return {:x1 600 :x2 50 :y1 0 :y2 60})
(def default-page [sounds])
(def open-headers #{})

(defonce state
  (r/atom {:page default-page
           :cables {:nav-send nav-send :nav-return nav-return}
           :work {:open-headers open-headers}})) 
