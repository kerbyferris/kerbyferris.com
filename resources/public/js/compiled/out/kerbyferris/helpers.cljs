(ns kerbyferris.helpers
  (:require [kerbyferris.state :refer [state]]))

(defn is-current-page?[page]
  (= (:page @state) page)) 

(defn is-open-header?[header-title]
  (contains? (:open-headers (:work @state)) header-title))

(defn update-open-headers![header-title]
  (let [open-headers (:open-headers (:work @state))]
    (if (contains? open-headers header-title)
      (swap! state assoc-in [:work :open-headers] (disj open-headers header-title))
      (swap! state assoc-in [:work :open-headers] (conj open-headers header-title)))))
