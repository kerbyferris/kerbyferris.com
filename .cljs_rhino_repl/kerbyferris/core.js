// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof kerbyferris.core.app_state !== 'undefined'){
} else {
kerbyferris.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Yup"], null));
}
kerbyferris.core.hello_world = (function kerbyferris$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kerbyferris.core.app_state))], null);
});
kerbyferris.core.logo = (function kerbyferris$core$logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#logo","div#logo",1426956221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"kf"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.tab_box","h1.title.tab_box",-1200613884),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1("Kerby Ferris")], null)], null);
});
