// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.views.animations');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('kerbyferris.state');
kerbyferris.views.animations.get_coordinates = (function kerbyferris$views$animations$get_coordinates(selector){
var element = document.querySelector(dommy.core.selector.call(null,selector));
if(cljs.core.truth_(element)){
return dommy.core.bounding_client_rect.call(null,element);
} else {
return null;
}
});
kerbyferris.views.animations.update_cable_coordinates = (function kerbyferris$views$animations$update_cable_coordinates(line_vector,from_coords,to_coords){
var iter__20767__auto__ = (function kerbyferris$views$animations$update_cable_coordinates_$_iter__24128(s__24129){
return (new cljs.core.LazySeq(null,(function (){
var s__24129__$1 = s__24129;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24129__$1);
if(temp__4657__auto__){
var s__24129__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24129__$2)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,s__24129__$2);
var size__20766__auto__ = cljs.core.count.call(null,c__20765__auto__);
var b__24131 = cljs.core.chunk_buffer.call(null,size__20766__auto__);
if((function (){var i__24130 = (0);
while(true){
if((i__24130 < size__20766__auto__)){
var line = cljs.core._nth.call(null,c__20765__auto__,i__24130);
cljs.core.chunk_append.call(null,b__24131,cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc,line,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(from_coords),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(to_coords),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(to_coords)], null)));

var G__24132 = (i__24130 + (1));
i__24130 = G__24132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24131),kerbyferris$views$animations$update_cable_coordinates_$_iter__24128.call(null,cljs.core.chunk_rest.call(null,s__24129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24131),null);
}
} else {
var line = cljs.core.first.call(null,s__24129__$2);
return cljs.core.cons.call(null,cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc,line,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(from_coords),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(to_coords),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(to_coords)], null)),kerbyferris$views$animations$update_cable_coordinates_$_iter__24128.call(null,cljs.core.rest.call(null,s__24129__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20767__auto__.call(null,line_vector);
});
kerbyferris.views.animations.connectors = (function kerbyferris$views$animations$connectors(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-container","div.main-container",1274886367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#connectors","div#connectors",-1945130249),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.first","line.first",-364160345),new cljs.core.Keyword(null,"line-1","line-1",1717875457).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kerbyferris.state.state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line.second","line.second",1556491495),new cljs.core.Keyword(null,"line-2","line-2",1084574220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kerbyferris.state.state))], null)], null)], null)], null);
});

//# sourceMappingURL=animations.js.map?rel=1539454393483