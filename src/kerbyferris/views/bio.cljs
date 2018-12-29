(ns kerbyferris.views.bio)

(def bio-data
  {:title "img/bioPic.jpg"
   :content "Kerby Ferris is an experimental sound artist and coder living in Los Angeles, California."})

(defn bio[]
  [:div#bio
   [:div#bio_image
      [:div.connect
        [:div.image
         [:img {:src (bio-data :title)}]]
        [:div.text.top-bar (bio-data :content)]]]])
