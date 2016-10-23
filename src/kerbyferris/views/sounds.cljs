(ns kerbyferris.views.sounds)

(defn sounds[]
  [:div#sounds 
    [:p.basic_box "Production Samples:"]
    [:a {:href "https://soundcloud.com/pawprincemusic/wild-horses/s-vEPxZ" :class "sc-player"}
     "Wild Horses"]
    [:a {:href "https://soundcloud.com/pawprincemusic/tigersquare/s-ksj0I" :class "sc-player"}
     "Tiger Square"]
    [:a {:href "https://soundcloud.com/pawprincemusic/virginia/s-NzFkw" :class "sc-player"}
     "Virginia"]
    [:a {:href "https://soundcloud.com/pawprincemusic/face-challenges-edit/s-028zA" :class "sc-player"}
     "FAce Challenges"]
    [:a {:href "https://soundcloud.com/pawprincemusic/family-of-light/s-hpOiH" :class "sc-player"}
     "Family of Light"]
    [:a {:href "http://soundcloud.com/pawprincemusic/wander-through-the-time-of/s-HgGYE" :class "sc-player"}
     "Wander Through the Time of Hearts"]])
