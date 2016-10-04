(ns kerbyferris.views.work)

(def work-data
  [{:title "selected exhibitions & performances"
    :content "<li>some contenta</li>"}
   {:title "TELEVISION"
    :content "<li>some more content</li>"}])

(defn work[]
  [:div#cv
   [:a.download {:href "assets/CV.pdf" :target "_blank"}
    [:span "Download PDF-->"]
    [:img {:src "img/bang.png"}]]
   [:ul.connect work
   (for [work work-data]
     ^{:key work} [:div
       [:li.basic_box.open (work :title)]
       [:li.box
        [:ul.top-bar (work :content)]]])]])
