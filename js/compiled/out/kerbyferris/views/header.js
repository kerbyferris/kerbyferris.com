// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.views.header');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('kerbyferris.state');
goog.require('kerbyferris.app_data');
goog.require('kerbyferris.helpers');
kerbyferris.views.header.logo = (function kerbyferris$views$header$logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#logo","div#logo",1426956221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"kf"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.tab_box","h1.title.tab_box",-1200613884),"Kerby Ferris"], null)], null);
});
kerbyferris.views.header.nav_link = (function kerbyferris$views$header$nav_link(page){
var page_name = page.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
var page_id = [cljs.core.str(page_name),cljs.core.str("_link")].join('');
var page_link = [cljs.core.str("#/"),cljs.core.str(page_name)].join('');
var page_render = page.call(null,new cljs.core.Keyword(null,"render","render",-1408033454));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(kerbyferris.helpers.is_current_page_QMARK_.call(null,page_render))?"current":null),new cljs.core.Keyword(null,"id","id",-1388402092),page_id,new cljs.core.Keyword(null,"href","href",-793805698),page_link], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/bang.png"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flag_box","span.flag_box",-719226358),clojure.string.capitalize.call(null,page_name)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null));
});
kerbyferris.views.header.nav = (function kerbyferris$views$header$nav(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.call(null,(function (){var iter__20767__auto__ = (function kerbyferris$views$header$nav_$_iter__22882(s__22883){
return (new cljs.core.LazySeq(null,(function (){
var s__22883__$1 = s__22883;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22883__$1);
if(temp__4657__auto__){
var s__22883__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22883__$2)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,s__22883__$2);
var size__20766__auto__ = cljs.core.count.call(null,c__20765__auto__);
var b__22885 = cljs.core.chunk_buffer.call(null,size__20766__auto__);
if((function (){var i__22884 = (0);
while(true){
if((i__22884 < size__20766__auto__)){
var page = cljs.core._nth.call(null,c__20765__auto__,i__22884);
cljs.core.chunk_append.call(null,b__22885,kerbyferris.views.header.nav_link.call(null,page));

var G__22886 = (i__22884 + (1));
i__22884 = G__22886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22885),kerbyferris$views$header$nav_$_iter__22882.call(null,cljs.core.chunk_rest.call(null,s__22883__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22885),null);
}
} else {
var page = cljs.core.first.call(null,s__22883__$2);
return cljs.core.cons.call(null,kerbyferris.views.header.nav_link.call(null,page),kerbyferris$views$header$nav_$_iter__22882.call(null,cljs.core.rest.call(null,s__22883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20767__auto__.call(null,kerbyferris.app_data.pages);
})())], null)], null);
});
kerbyferris.views.header.header = (function kerbyferris$views$header$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-container","div.header-container",498757487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.wrapper.clearfix","header.wrapper.clearfix",1148554098),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kerbyferris.views.header.logo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kerbyferris.views.header.nav], null)], null)], null);
});

//# sourceMappingURL=header.js.map?rel=1539456019070