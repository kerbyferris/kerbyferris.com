(ns kerbyferris.views.contact)

(def contact-data
  [{:title "GitHub"
    :content "https://github.com/kerbyferris"}
   {:title "Bandcamp"
    :content "https://kerbyferris.bandcamp.com/"}
   {:title "Instagram" :content "https://www.instagram.com/kerbyferris"}
   ])

(defn contact[]
  [:div#contact
    [:ul [:li.connect
          [:span.basic_box "Email"]
          [:span.comment "kerbyferris[at]gmail.com"]]
     (for [c contact-data]
       ^{:key c} [:li
        [:a.tab_box
         {:href (c :content) :target "_blank"} (c :title)]])]])
