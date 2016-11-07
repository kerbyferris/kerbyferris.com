(ns kerbyferris.core
  (:require [reagent.core :as r]
            [kerbyferris.routes :refer [app-routes]]
            [kerbyferris.views.main :as main :refer [page]]
            [kerbyferris.state :as state :refer [state]]))

(enable-console-print!)

(defn ^:export start[]
  (app-routes)
  (r/render-component [page] (. js/document (getElementById "app"))))

(defn on-js-reload []
  ;; optionally touch your state to force rerendering depending on
  ;; your application
  ;; (swap! state update-in [:__figwheel_counter] inc)
)

(start)
