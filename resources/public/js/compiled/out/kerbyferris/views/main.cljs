(ns kerbyferris.views.main
  (:require [kerbyferris.state :as state :refer [state]]
            [kerbyferris.helpers :refer [is-current-page?]]
            [kerbyferris.views.header :refer [header]]
            [kerbyferris.views.animations :refer [connectors]]
            [kerbyferris.app_data :refer [pages]]
            [kerbyferris.views.footer :refer [footer]]))

(defn page[]
  [:div
    [header]
    [:div.main-container
      [connectors]
      [:div.main.wrapper.clearfix
        (doall
          (for [page pages] ^{:key page}
            [:div {:style
                   {:display (if (is-current-page?
                                   (:render page)) "block" "none")}}
             (:render page)]))]]
    [footer]])
