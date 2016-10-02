(ns kerbyferris.views.bio)

(def bio-data
  {:title "img/bioPic.jpg"
   :content "Kerby Ferris is an experimental sound artist and coder focused on performative electronics, interactive non-expert music making practices, and the delight of the unlikely surprise. Born and raised in Portland, Oregon, she has collaborated and performed internationally in the clubs, museums, and community/improvised spaces of North America, Europe and Brazil"})


(defn bio[]
  [:div#bio
   [:div#bio_image
      [:div
        [:div.image
         [:img {:src (bio-data :title)}]]
        [:div.text.top-bar (bio-data :content)]]]])
