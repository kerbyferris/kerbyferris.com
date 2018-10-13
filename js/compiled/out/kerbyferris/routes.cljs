(ns kerbyferris.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [goog.history.EventType :as EventType]
            [goog.events :as events]
            [secretary.core :as secretary]
            [kerbyferris.state :refer [state]]
            [kerbyferris.app_data :refer [pages]]))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  (doall
    (for [page pages]
      (defroute (page :route) []
        (swap! state assoc :page (page :render)))))
  (hook-browser-navigation!))

(defmulti current-page #(@state :page))
(for [page pages]
  (defmethod current-page (page :name) [] (page :render)))
