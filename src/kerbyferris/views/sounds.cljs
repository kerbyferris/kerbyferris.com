(ns kerbyferris.views.sounds
  (:require-macros [dommy.core :refer [sel sel1]])
  (:require [dommy.core :as dommy]
            [kerbyferris.state :as state :refer [state]]))

(defn get-coordinates[selector]
  (let [element (sel1 selector)]
    (if element 
      ;(js/console.log (dommy/bounding-client-rect element))
      (js/console.log "someeehting")
      ;(dommy/bounding-client-rect element)
      )))

(defn sounds[]
  [:div#sounds
   [:p.basic_box "Play"]
   ;[:audio
   ; [:source
   ;  {:src "assets/audio/loop.mp3" :type "audio/mpeg"}]]
   ])
