(ns kerbyferris.views.main
  (:require-macros [dommy.core :refer [sel sel1]])
  (:require [dommy.core :as dommy]
            [kerbyferris.state :as state :refer [state]]
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
            [:div {:style {:display (if (is-current-page?
                                   (:render page)) "block" "none")}}
             (:render page)]))]]
    [footer]])

(js/console.log (sel1 :nav))
