(ns kerbyferris.views.contact)

(def contact-data
  [{:title "Soundcloud"
    :content "https://soundcloud.com/pawprincemusic"}
   {:title "GitHub"
    :content "https://github.com/kerbyferris"}
   {:title "LinkedIn"
    :content "http://lnkd.in/bwt7D53"}])

(defn contact[]
  [:div#contact
    [:ul [:li.connect
          [:span.basic_box "Email"]
          [:span.comment "kerbyferris[at]gmail.com"]]
     (for [c contact-data]
       ^{:key c} [:li
        [:a.tab_box
         {:href (c :content) :target "_blank"} (c :title)]])]])
