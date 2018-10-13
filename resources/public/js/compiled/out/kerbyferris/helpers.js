// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.helpers');
goog.require('cljs.core');
goog.require('kerbyferris.state');
kerbyferris.helpers.is_current_page_QMARK_ = (function kerbyferris$helpers$is_current_page_QMARK_(page){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kerbyferris.state.state)),page);
});
kerbyferris.helpers.is_open_header_QMARK_ = (function kerbyferris$helpers$is_open_header_QMARK_(header_title){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"open-headers","open-headers",898322656).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"work","work",385770312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kerbyferris.state.state))),header_title);
});
kerbyferris.helpers.update_open_headers_BANG_ = (function kerbyferris$helpers$update_open_headers_BANG_(header_title){
var open_headers = new cljs.core.Keyword(null,"open-headers","open-headers",898322656).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"work","work",385770312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kerbyferris.state.state)));
if(cljs.core.contains_QMARK_.call(null,open_headers,header_title)){
return cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.Keyword(null,"open-headers","open-headers",898322656)], null),cljs.core.disj.call(null,open_headers,header_title));
} else {
return cljs.core.swap_BANG_.call(null,kerbyferris.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.Keyword(null,"open-headers","open-headers",898322656)], null),cljs.core.conj.call(null,open_headers,header_title));
}
});

//# sourceMappingURL=helpers.js.map?rel=1539454392709