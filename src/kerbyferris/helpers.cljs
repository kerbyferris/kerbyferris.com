(ns kerbyferris.helpers
  (:require [kerbyferris.state :refer [state]]))

(defn is-current-page?[page]
  (= (:page @state) page)) 
