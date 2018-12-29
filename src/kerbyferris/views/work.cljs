(ns kerbyferris.views.work
  (:require [kerbyferris.helpers :refer [is-open-header?
                                         update-open-headers!]]
            [kerbyferris.state :as state :refer [state]]))

(defn exhibitions[]
  [:div
    [:li "2013 Allied Media Music Showcase: Museum of Contemporary Art Detroit (Detroid, MI)"]
    [:li "2012 Keep Portland Weird: Centre Pompidou (Paris, France)"]
    [:li "2012 YouJoy, Content Makers Doers Dreamers: Ace Hotel (Portland, OR)"]
    [:li "2011 ValenTINY Idea Night: Yerba Buena Center for the Arts (San Francisco, CA)"]
    [:li "2011 Electrogals - Gals Gone Wired: DISJECTA Contemporary Art Center (Portland, OR)"]
    [:li "2010 Time Based Art Festival: The Works (Portland, OR)"]
    [:li "2007 Viva la Woman: Centro Cultural São Paulo (São Paulo, Brazil)"]])

(defn placements[]
  [:div
    [:li "TELEVISION"]
    [:li.indent "2014"
      [:a {:href "http://www.mylifetime.com/shows/witches-of-east-end/" :target "_blank"}
       "The Witches of East End (Lifetime) Ep207"]]
    [:li.indent "2011"
      [:a {:href "http://abc.go.com/shows/revenge" :target "_blank"} "Revenge (ABC) Ep117"]]
    [:li.indent "2011"
      [:a { :href "http://www.sho.com/sho/the-real-l-word/home" :target "_blank"}
       "The Real L Word (Lifetime) Ep207/Ep208"]]
    [:li "FILM"]
    [:li.indent "2014"
      [:a { :href "http://www.imdb.com/title/tt2870808/" :target "_blank"} "Life Partners"]]
    [:li.indent "2013"
      [:a {:href "http://www.imdb.com/title/tt1858739/" :target "_blank"} "City Baby"]]
    [:li.indent "2013"
      [:a {:href "http://www.imdb.com/title/tt2224073/" :target "_blank"} "Best Friends Forever"]]
    [:li.indent "2012"
      [:a {:href "http://www.imdb.com/title/tt2265265/" :target "_blank"} "Duck Beach to Eternity"]]
    [:li "BRAND IDENTITY:"]
    [:li.indent
      [:a {:href "http://www.thecollectiveshift.com/" :target "_blank"} "The Collective Shift"]
      [:a {:href "http://www.quiksilver.com/" :target "_blank"} "Quicksilver"]
      [:a {:href "http://www.pendleton-usa.com/home.jsp" :target "_blank"} "Pendleton"] 
      [:a {:href "http://www.specialized.com" :target "_blank"} "Specialized"]]])

(defn projects[]
  [:div
    [:li "2012-(present)"
      [:a {:href "https://soundcloud.com/pawprincemusic" :target "_blank"} "Paw Prince Music"]
      "(Portland, OR) -- Explorations of modular musical composition and traditional digital audio production"]
    [:li "2010-(present)"
      [:a {:href "http://lvndrmrrr.tumblr.com/" :target "_blank"} "Lavender Mirror"] ":  New Age Dance (Portland, OR) -- Internationally touring musical collaboration" ]
    [:li "2008-2013"
      [:a {:href "http://loversarelovers.com" :target "_blank"} "Lovers" ] ": Electronic and Synth Pop (Portland, OR) -- Internationally touring musical collaboration "]
    [:li "2006-2008"
      [:a {:href "https://www.youtube.com/watch?v=tUly0xBrw80" :target "_blank"} "Fantasmina"] ": Dance Metal (São Paulo, Brazil) -- Musical collaboration and performance vehicle for  DIY electronic instruments and interfaces."]])

(defn workshops[]
  [:div
    [:li "2014"
      [:a {:href "https://talk.alliedmedia.org/amc2014/sessions/citizen-musician-our-bodies-our-music" :target "_blank"} "Citizen Musician - Our Bodies, Our Music"] "(Detroit, MI) : DIY MIDI trigger presentation and interactive workshop developed for and delivered at Detroit’s Allied Media Conference."]
    [:li "2006-2008 Ladyfest Brasil (São Paulo, Brazil) : Linux and Hardware workshops for interested women and girls of all skill levels and technical backgrounds."]
    [:li "2005 - 2008 Birosca (São Paulo, Brazil) : Technology skill-share collective devoted to educating women of all ages on Free and Open Source technical solutions in the developing world."]])

(defn education[]
  [:div
    [:li "2006 Faculdade Impacta Tecnologia: São Paulo, Brazil (JAVA/PHP certification)"]
    [:li "2002 Portland State University: Portland, OR (B.S. Philosophy, High Honors)"]
    [:li "1994 Pacific Northwest College of Art: Portland, OR (Summer Institute)"]])

(defn press[]
  [:div
    [:li "2013"
      [:a {:href "http://www2.acehotel.com/thinkingcap/"
           :target "_blank"}
       "Ace Hotel: “Thinking Cap : A video series about the creative processes of experimental artists"]]
    [:li "2013"
      [:a {:href "http://www.allmusic.com/album/a-friend-in-the-world-mw0002573328"
           :target "_blank"}
       "All Music Album Review of “Lovers -- A Friend in the World"]]
    [:li "2013 "
      [:a {:href "http://www.afterellen.com/lovers-a-friend-in-the-world-will-leave-you-less-lonely/10/2013/"
           :target "_blank"}
       "Kim Hoffman: “Lovers’ ‘A Friend in the World’ will leave you less lonely"]]
    [:li "2012/2013"
      [:a {:href "http://www.curvemag.com/Curve-Magazine/Web-Articles-2012/Chatting-up-the-Lovers/"
           :target "_blank"}
       "Curve Magazine: Hot Licks"]]
    [:li "2011/2012"
      [:a {:href "http://issuu.com/tomtommagazine/docs/issue5?e=9019077/6335394"
           :target "_blank"}
       "Tom Tom Magazine: Music"]]
    [:li "2010"
      [:a {:href "http://www.zinio.com/www/browse/issue.jsp?skuId=416143140"
           :target "_blank"}
       "Nylon Magazine: On the Road"]]])

(def work-data
  [{:title "SELECTED EXHIBITIONS & PERFOMANCES" :content [exhibitions]}
   {:title "PLACEMENTS" :content [placements]}
   {:title "PROJECTS & COLLABORATIONS" :content [projects]}
   {:title "WORKSHOPS" :content [workshops]}
   {:title "EDUCATION" :content [education]}
   {:title "PRESS" :content [press]}])

(defn work[]
  [:div#work
    [:ul 
     [:li
      [:video
       {:controls true
        :loop true
        :playsinline true
        :type "video/mp4"
        :poster "https://instagram.fden3-1.fna.fbcdn.net/vp/d0b6cbddefdd938becee357512e05672/5C296CB1/t51.2885-15/e35/43595142_481509839027296_6235953730803460662_n.jpg?_nc_ht=instagram.fden3-1.fna.fbcdn.net"
        :src "https://instagram.fden3-1.fna.fbcdn.net/vp/e4b53a244e9e5ab9c44f3c971901c46f/5C28F950/t50.2886-16/44165663_2163277323910803_7924230999175593984_n.mp4?_nc_ht=instagram.fden3-1.fna.fbcdn.net"}]]
     [:li
      [:video
       {:controls true
        :loop true
        :playsinline true
        :type "video/mp4"
        :poster "https://instagram.fden3-1.fna.fbcdn.net/vp/b7d549e43a1b10a4a18b0be776d7f013/5C2979D0/t51.2885-15/e35/42982400_248177655846218_5105470319226478529_n.jpg?_nc_ht=instagram.fden3-1.fna.fbcdn.net"
        :src "https://instagram.fden3-1.fna.fbcdn.net/vp/b2d4e674c9021c77c6066104af0fa6f5/5C29141B/t50.2886-16/43114356_176440779898393_1035183102265131008_n.mp4?_nc_ht=instagram.fden3-1.fna.fbcdn.net"}]]
     [:li
      [:video
       {:controls true
        :loop true
        :playsinline true
        :type "video/mp4"
        :poster "https://instagram.fden3-1.fna.fbcdn.net/vp/e6f9292a93996e8f6e0abfc3ebe30e1f/5C2A0000/t51.2885-15/e35/41905224_306828226773352_4224246491398252888_n.jpg?_nc_ht=instagram.fden3-1.fna.fbcdn.net"
        :src "https://instagram.fden3-1.fna.fbcdn.net/vp/6746e081311d8483bc21188a82ae28c5/5C292CA5/t50.2886-16/42804215_155941835347294_3697190320358817792_n.mp4?_nc_ht=instagram.fden3-1.fna.fbcdn.net"
        }]]


    ]
  ]
)
