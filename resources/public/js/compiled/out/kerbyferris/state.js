// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('kerbyferris.views.sounds');
kerbyferris.state.nav_send = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),(0)], null);
kerbyferris.state.nav_return = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),(0)], null);
kerbyferris.state.default_page = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kerbyferris.views.sounds.sounds], null);
kerbyferris.state.open_headers = cljs.core.PersistentHashSet.EMPTY;
if(typeof kerbyferris.state.state !== 'undefined'){
} else {
kerbyferris.state.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),kerbyferris.state.default_page,new cljs.core.Keyword(null,"cables","cables",1417933792),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-send","nav-send",1279068980),kerbyferris.state.nav_send,new cljs.core.Keyword(null,"nav-return","nav-return",301736507),kerbyferris.state.nav_return], null),new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-headers","open-headers",898322656),kerbyferris.state.open_headers], null)], null));
}

//# sourceMappingURL=state.js.map?rel=1539454392701