(ns kerbyferris.views.sounds)

(defn sounds[]
  [:div#sounds 
    [:p.basic_box "Production Samples:"]
    [:a {:href "https://soundcloud.com/kerbyferris/kerby-ferris-ojai" :class "sc-player"}
     "Ojai"]
    [:a {:href "https://soundcloud.com/kerbyferris/face-challenges" :class "sc-player"}
     "FAce Challenges"]
    [:a {:href "https://soundcloud.com/kerbyferris/its-always-more-beautiful-to" :class "sc-player"}
     "It's Always More Beautiful to Say Hello"]
    [:a {:href "https://soundcloud.com/lavender-mirror/family-of-light-2" :class "sc-player"}
     "Family of Light"]
    [:a {:href "https://soundcloud.com/lavender-mirror/virginia" :class "sc-player"}
     "Virginia"]
    [:a {:href "https://soundcloud.com/lavender-mirror/third-dimensional" :class "sc-player"}
     "Third Dimensional"]
    [:a {:href "https://soundcloud.com/kerbyferris/wild-horses/s-vEPxZ" :class "sc-player"}
     "Wild Horses"]])

