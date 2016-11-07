(ns kerbyferris.app_data
  (:require [kerbyferris.views.home :refer [home]]
            [kerbyferris.views.sounds :refer [sounds]]
            [kerbyferris.views.work :refer [work]]
            [kerbyferris.views.bio :refer [bio]]
            [kerbyferris.views.contact :refer [contact]]))


(def pages
  [{:name "home" :render [home] :route "/"}
   {:name "sounds" :render [sounds] :route "/sounds"}
   {:name "work" :render [work] :route "/work"}
   {:name "bio" :render [bio] :route "/bio"}
   {:name "contact" :render [contact] :route "/contact"}]) 
