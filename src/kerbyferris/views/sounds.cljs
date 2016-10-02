(ns kerbyferris.views.sounds)

(defn sounds[]
  [:div#sounds
   [:p.basic_box "Play"]
   [:audio
    [:source (:attr "controls")
     {:src "assets/audio/loop.mp3" :type "audio/mpeg"}]]])
