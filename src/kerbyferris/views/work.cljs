(ns kerbyferris.views.work)

(def work-data
  [{:title "selected exhibitions & performances"
    :content "some content"}
   {:title "TELEVISION"
    :content "somee more content"}])

(defn work[]
  [:div#cv
   [:a.download {:href "assets/CV.pdf" :target "_blank"}
    [:span "Download PDF-->"]
    [:img {:src "img/bang.png"}]]
   [:ul work
   (for [work work-data]
     ^{:key work} [:div
       [:li.basic_box (work :title)]
       [:li.box]
       [:li.top-bar (work :content)]])]])
