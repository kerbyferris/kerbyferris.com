// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.views.main');
goog.require('cljs.core');
goog.require('kerbyferris.state');
goog.require('kerbyferris.helpers');
goog.require('kerbyferris.views.header');
goog.require('kerbyferris.views.animations');
goog.require('kerbyferris.app_data');
goog.require('kerbyferris.views.footer');
kerbyferris.views.main.page = (function kerbyferris$views$main$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kerbyferris.views.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-container","div.main-container",1274886367),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kerbyferris.views.animations.connectors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main.wrapper.clearfix","div.main.wrapper.clearfix",-2071397046),cljs.core.doall.call(null,(function (){var iter__20767__auto__ = (function kerbyferris$views$main$page_$_iter__22893(s__22894){
return (new cljs.core.LazySeq(null,(function (){
var s__22894__$1 = s__22894;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22894__$1);
if(temp__4657__auto__){
var s__22894__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22894__$2)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,s__22894__$2);
var size__20766__auto__ = cljs.core.count.call(null,c__20765__auto__);
var b__22896 = cljs.core.chunk_buffer.call(null,size__20766__auto__);
if((function (){var i__22895 = (0);
while(true){
if((i__22895 < size__20766__auto__)){
var page__$1 = cljs.core._nth.call(null,c__20765__auto__,i__22895);
cljs.core.chunk_append.call(null,b__22896,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(kerbyferris.helpers.is_current_page_QMARK_.call(null,new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(page__$1)))?"block":"none")], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(page__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page__$1], null)));

var G__22897 = (i__22895 + (1));
i__22895 = G__22897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22896),kerbyferris$views$main$page_$_iter__22893.call(null,cljs.core.chunk_rest.call(null,s__22894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22896),null);
}
} else {
var page__$1 = cljs.core.first.call(null,s__22894__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(kerbyferris.helpers.is_current_page_QMARK_.call(null,new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(page__$1)))?"block":"none")], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(page__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page__$1], null)),kerbyferris$views$main$page_$_iter__22893.call(null,cljs.core.rest.call(null,s__22894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20767__auto__.call(null,kerbyferris.app_data.pages);
})())], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kerbyferris.views.footer.footer], null)], null);
});

//# sourceMappingURL=main.js.map?rel=1539456019105