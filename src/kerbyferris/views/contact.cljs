(ns kerbyferris.views.contact)

(def contact-data
  [{:title "Instagram"
    :content "https://www.instagram.com/kerbyanneferris"}
   {:title "Soundcloud"
    :content "https://soundcloud.com/kerbyferris"}
   {:title "Spotify"
    :content "https://open.spotify.com/artist/3LdM4CrNwFJzj1ZvEKtBpA?si=mwCLDZ2IQcepPWXWrIeRrg"}
   {:title "GitHub"
    :content "https://github.com/kerbyferris"}])

(defn contact[]
  [:div#contact
    [:ul [:li.connect
          [:span.basic_box "Email"]
          [:span.comment "kerbyferris[at]gmail.com"]]
     (for [c contact-data]
       ^{:key c} [:li
        [:a.tab_box
         {:href (c :content) :target "_blank"} (c :title)]])]])
