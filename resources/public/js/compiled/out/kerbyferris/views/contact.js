// Compiled by ClojureScript 1.9.89 {}
goog.provide('kerbyferris.views.contact');
goog.require('cljs.core');
kerbyferris.views.contact.contact_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Instagram",new cljs.core.Keyword(null,"content","content",15833224),"https://www.instagram.com/kerbyanneferris"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Soundcloud",new cljs.core.Keyword(null,"content","content",15833224),"https://soundcloud.com/kerbyferris"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Spotify",new cljs.core.Keyword(null,"content","content",15833224),"https://open.spotify.com/artist/3LdM4CrNwFJzj1ZvEKtBpA?si=mwCLDZ2IQcepPWXWrIeRrg"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"GitHub",new cljs.core.Keyword(null,"content","content",15833224),"https://github.com/kerbyferris"], null)], null);
kerbyferris.views.contact.contact = (function kerbyferris$views$contact$contact(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#contact","div#contact",-703600855),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.connect","li.connect",-842973117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.basic_box","span.basic_box",1292933551),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.comment","span.comment",1132124140),"kerbyferris[at]gmail.com"], null)], null),(function (){var iter__20767__auto__ = (function kerbyferris$views$contact$contact_$_iter__22804(s__22805){
return (new cljs.core.LazySeq(null,(function (){
var s__22805__$1 = s__22805;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22805__$1);
if(temp__4657__auto__){
var s__22805__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22805__$2)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,s__22805__$2);
var size__20766__auto__ = cljs.core.count.call(null,c__20765__auto__);
var b__22807 = cljs.core.chunk_buffer.call(null,size__20766__auto__);
if((function (){var i__22806 = (0);
while(true){
if((i__22806 < size__20766__auto__)){
var c = cljs.core._nth.call(null,c__20765__auto__,i__22806);
cljs.core.chunk_append.call(null,b__22807,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tab_box","a.tab_box",-906327108),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),c.call(null,new cljs.core.Keyword(null,"content","content",15833224)),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),c.call(null,new cljs.core.Keyword(null,"title","title",636505583))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__22808 = (i__22806 + (1));
i__22806 = G__22808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22807),kerbyferris$views$contact$contact_$_iter__22804.call(null,cljs.core.chunk_rest.call(null,s__22805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22807),null);
}
} else {
var c = cljs.core.first.call(null,s__22805__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tab_box","a.tab_box",-906327108),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),c.call(null,new cljs.core.Keyword(null,"content","content",15833224)),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),c.call(null,new cljs.core.Keyword(null,"title","title",636505583))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),kerbyferris$views$contact$contact_$_iter__22804.call(null,cljs.core.rest.call(null,s__22805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20767__auto__.call(null,kerbyferris.views.contact.contact_data);
})()], null)], null);
});

//# sourceMappingURL=contact.js.map?rel=1539456018952