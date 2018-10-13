// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('kerbyferris.state');
goog.require('kerbyferris.app_data');
kerbyferris.routes.hook_browser_navigation_BANG_ = (function kerbyferris$routes$hook_browser_navigation_BANG_(){
var G__22814 = (new goog.History());
goog.events.listen(G__22814,goog.history.EventType.NAVIGATE,((function (G__22814){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__22814))
);

G__22814.setEnabled(true);

return G__22814;
});
kerbyferris.routes.app_routes = (function kerbyferris$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

cljs.core.doall.call(null,(function (){var iter__20767__auto__ = (function kerbyferris$routes$app_routes_$_iter__22839(s__22840){
return (new cljs.core.LazySeq(null,(function (){
var s__22840__$1 = s__22840;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22840__$1);
if(temp__4657__auto__){
var s__22840__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22840__$2)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,s__22840__$2);
var size__20766__auto__ = cljs.core.count.call(null,c__20765__auto__);
var b__22842 = cljs.core.chunk_buffer.call(null,size__20766__auto__);
if((function (){var i__22841 = (0);
while(true){
if((i__22841 < size__20766__auto__)){
var page = cljs.core._nth.call(null,c__20765__auto__,i__22841);
cljs.core.chunk_append.call(null,b__22842,(function (){var action__21232__auto__ = ((function (i__22841,page,c__20765__auto__,size__20766__auto__,b__22842,s__22840__$2,temp__4657__auto__){
return (function (params__21233__auto__){
if(cljs.core.map_QMARK_.call(null,params__21233__auto__)){
var map__22853 = params__21233__auto__;
var map__22853__$1 = ((((!((map__22853 == null)))?((((map__22853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22853):map__22853);
return cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21233__auto__)){
var vec__22855 = params__21233__auto__;
return cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
} else {
return null;
}
}
});})(i__22841,page,c__20765__auto__,size__20766__auto__,b__22842,s__22840__$2,temp__4657__auto__))
;
secretary.core.add_route_BANG_.call(null,page.call(null,new cljs.core.Keyword(null,"route","route",329891309)),action__21232__auto__);

return ((function (i__22841,action__21232__auto__,page,c__20765__auto__,size__20766__auto__,b__22842,s__22840__$2,temp__4657__auto__){
return (function() { 
var G__22863__delegate = function (args__21231__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,page.call(null,new cljs.core.Keyword(null,"route","route",329891309)),args__21231__auto__);
};
var G__22863 = function (var_args){
var args__21231__auto__ = null;
if (arguments.length > 0) {
var G__22864__i = 0, G__22864__a = new Array(arguments.length -  0);
while (G__22864__i < G__22864__a.length) {G__22864__a[G__22864__i] = arguments[G__22864__i + 0]; ++G__22864__i;}
  args__21231__auto__ = new cljs.core.IndexedSeq(G__22864__a,0);
} 
return G__22863__delegate.call(this,args__21231__auto__);};
G__22863.cljs$lang$maxFixedArity = 0;
G__22863.cljs$lang$applyTo = (function (arglist__22865){
var args__21231__auto__ = cljs.core.seq(arglist__22865);
return G__22863__delegate(args__21231__auto__);
});
G__22863.cljs$core$IFn$_invoke$arity$variadic = G__22863__delegate;
return G__22863;
})()
;
;})(i__22841,action__21232__auto__,page,c__20765__auto__,size__20766__auto__,b__22842,s__22840__$2,temp__4657__auto__))
})());

var G__22866 = (i__22841 + (1));
i__22841 = G__22866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22842),kerbyferris$routes$app_routes_$_iter__22839.call(null,cljs.core.chunk_rest.call(null,s__22840__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22842),null);
}
} else {
var page = cljs.core.first.call(null,s__22840__$2);
return cljs.core.cons.call(null,(function (){var action__21232__auto__ = ((function (page,s__22840__$2,temp__4657__auto__){
return (function (params__21233__auto__){
if(cljs.core.map_QMARK_.call(null,params__21233__auto__)){
var map__22858 = params__21233__auto__;
var map__22858__$1 = ((((!((map__22858 == null)))?((((map__22858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22858):map__22858);
return cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21233__auto__)){
var vec__22860 = params__21233__auto__;
return cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
} else {
return null;
}
}
});})(page,s__22840__$2,temp__4657__auto__))
;
secretary.core.add_route_BANG_.call(null,page.call(null,new cljs.core.Keyword(null,"route","route",329891309)),action__21232__auto__);

return ((function (action__21232__auto__,page,s__22840__$2,temp__4657__auto__){
return (function() { 
var G__22867__delegate = function (args__21231__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,page.call(null,new cljs.core.Keyword(null,"route","route",329891309)),args__21231__auto__);
};
var G__22867 = function (var_args){
var args__21231__auto__ = null;
if (arguments.length > 0) {
var G__22868__i = 0, G__22868__a = new Array(arguments.length -  0);
while (G__22868__i < G__22868__a.length) {G__22868__a[G__22868__i] = arguments[G__22868__i + 0]; ++G__22868__i;}
  args__21231__auto__ = new cljs.core.IndexedSeq(G__22868__a,0);
} 
return G__22867__delegate.call(this,args__21231__auto__);};
G__22867.cljs$lang$maxFixedArity = 0;
G__22867.cljs$lang$applyTo = (function (arglist__22869){
var args__21231__auto__ = cljs.core.seq(arglist__22869);
return G__22867__delegate(args__21231__auto__);
});
G__22867.cljs$core$IFn$_invoke$arity$variadic = G__22867__delegate;
return G__22867;
})()
;
;})(action__21232__auto__,page,s__22840__$2,temp__4657__auto__))
})(),kerbyferris$routes$app_routes_$_iter__22839.call(null,cljs.core.rest.call(null,s__22840__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20767__auto__.call(null,kerbyferris.app_data.pages);
})());

return kerbyferris.routes.hook_browser_navigation_BANG_.call(null);
});
if(typeof kerbyferris.routes.current_page !== 'undefined'){
} else {
kerbyferris.routes.current_page = (function (){var method_table__20912__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20913__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20916__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kerbyferris.routes","current-page"),((function (method_table__20912__auto__,prefer_table__20913__auto__,method_cache__20914__auto__,cached_hierarchy__20915__auto__,hierarchy__20916__auto__){
return (function (){
return cljs.core.deref.call(null,kerbyferris.state.state).call(null,new cljs.core.Keyword(null,"page","page",849072397));
});})(method_table__20912__auto__,prefer_table__20913__auto__,method_cache__20914__auto__,cached_hierarchy__20915__auto__,hierarchy__20916__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20916__auto__,method_table__20912__auto__,prefer_table__20913__auto__,method_cache__20914__auto__,cached_hierarchy__20915__auto__));
})();
}
var iter__20767__auto___22874 = (function kerbyferris$routes$iter__22870(s__22871){
return (new cljs.core.LazySeq(null,(function (){
var s__22871__$1 = s__22871;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22871__$1);
if(temp__4657__auto__){
var s__22871__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22871__$2)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,s__22871__$2);
var size__20766__auto__ = cljs.core.count.call(null,c__20765__auto__);
var b__22873 = cljs.core.chunk_buffer.call(null,size__20766__auto__);
if((function (){var i__22872 = (0);
while(true){
if((i__22872 < size__20766__auto__)){
var page = cljs.core._nth.call(null,c__20765__auto__,i__22872);
cljs.core.chunk_append.call(null,b__22873,cljs.core._add_method.call(null,kerbyferris.routes.current_page,page.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),((function (i__22872,page,c__20765__auto__,size__20766__auto__,b__22873,s__22871__$2,temp__4657__auto__){
return (function (){
return page.call(null,new cljs.core.Keyword(null,"render","render",-1408033454));
});})(i__22872,page,c__20765__auto__,size__20766__auto__,b__22873,s__22871__$2,temp__4657__auto__))
));

var G__22875 = (i__22872 + (1));
i__22872 = G__22875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22873),kerbyferris$routes$iter__22870.call(null,cljs.core.chunk_rest.call(null,s__22871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22873),null);
}
} else {
var page = cljs.core.first.call(null,s__22871__$2);
return cljs.core.cons.call(null,cljs.core._add_method.call(null,kerbyferris.routes.current_page,page.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),((function (page,s__22871__$2,temp__4657__auto__){
return (function (){
return page.call(null,new cljs.core.Keyword(null,"render","render",-1408033454));
});})(page,s__22871__$2,temp__4657__auto__))
),kerbyferris$routes$iter__22870.call(null,cljs.core.rest.call(null,s__22871__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__20767__auto___22874.call(null,kerbyferris.app_data.pages);

//# sourceMappingURL=routes.js.map?rel=1539456019029