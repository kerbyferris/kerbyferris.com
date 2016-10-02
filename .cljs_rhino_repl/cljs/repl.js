// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22737){
var map__22762 = p__22737;
var map__22762__$1 = ((((!((map__22762 == null)))?((((map__22762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22762):map__22762);
var m = map__22762__$1;
var n = cljs.core.get.call(null,map__22762__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22764_22786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22765_22787 = null;
var count__22766_22788 = (0);
var i__22767_22789 = (0);
while(true){
if((i__22767_22789 < count__22766_22788)){
var f_22790 = cljs.core._nth.call(null,chunk__22765_22787,i__22767_22789);
cljs.core.println.call(null,"  ",f_22790);

var G__22791 = seq__22764_22786;
var G__22792 = chunk__22765_22787;
var G__22793 = count__22766_22788;
var G__22794 = (i__22767_22789 + (1));
seq__22764_22786 = G__22791;
chunk__22765_22787 = G__22792;
count__22766_22788 = G__22793;
i__22767_22789 = G__22794;
continue;
} else {
var temp__4657__auto___22795 = cljs.core.seq.call(null,seq__22764_22786);
if(temp__4657__auto___22795){
var seq__22764_22796__$1 = temp__4657__auto___22795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22764_22796__$1)){
var c__21380__auto___22797 = cljs.core.chunk_first.call(null,seq__22764_22796__$1);
var G__22798 = cljs.core.chunk_rest.call(null,seq__22764_22796__$1);
var G__22799 = c__21380__auto___22797;
var G__22800 = cljs.core.count.call(null,c__21380__auto___22797);
var G__22801 = (0);
seq__22764_22786 = G__22798;
chunk__22765_22787 = G__22799;
count__22766_22788 = G__22800;
i__22767_22789 = G__22801;
continue;
} else {
var f_22802 = cljs.core.first.call(null,seq__22764_22796__$1);
cljs.core.println.call(null,"  ",f_22802);

var G__22803 = cljs.core.next.call(null,seq__22764_22796__$1);
var G__22804 = null;
var G__22805 = (0);
var G__22806 = (0);
seq__22764_22786 = G__22803;
chunk__22765_22787 = G__22804;
count__22766_22788 = G__22805;
i__22767_22789 = G__22806;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22807 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20569__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20569__auto__)){
return or__20569__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22807);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22807)))?cljs.core.second.call(null,arglists_22807):arglists_22807));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22768_22808 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22769_22809 = null;
var count__22770_22810 = (0);
var i__22771_22811 = (0);
while(true){
if((i__22771_22811 < count__22770_22810)){
var vec__22772_22812 = cljs.core._nth.call(null,chunk__22769_22809,i__22771_22811);
var name_22813 = cljs.core.nth.call(null,vec__22772_22812,(0),null);
var map__22775_22814 = cljs.core.nth.call(null,vec__22772_22812,(1),null);
var map__22775_22815__$1 = ((((!((map__22775_22814 == null)))?((((map__22775_22814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22775_22814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22775_22814):map__22775_22814);
var doc_22816 = cljs.core.get.call(null,map__22775_22815__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22817 = cljs.core.get.call(null,map__22775_22815__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22813);

cljs.core.println.call(null," ",arglists_22817);

if(cljs.core.truth_(doc_22816)){
cljs.core.println.call(null," ",doc_22816);
} else {
}

var G__22818 = seq__22768_22808;
var G__22819 = chunk__22769_22809;
var G__22820 = count__22770_22810;
var G__22821 = (i__22771_22811 + (1));
seq__22768_22808 = G__22818;
chunk__22769_22809 = G__22819;
count__22770_22810 = G__22820;
i__22771_22811 = G__22821;
continue;
} else {
var temp__4657__auto___22822 = cljs.core.seq.call(null,seq__22768_22808);
if(temp__4657__auto___22822){
var seq__22768_22823__$1 = temp__4657__auto___22822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22768_22823__$1)){
var c__21380__auto___22824 = cljs.core.chunk_first.call(null,seq__22768_22823__$1);
var G__22825 = cljs.core.chunk_rest.call(null,seq__22768_22823__$1);
var G__22826 = c__21380__auto___22824;
var G__22827 = cljs.core.count.call(null,c__21380__auto___22824);
var G__22828 = (0);
seq__22768_22808 = G__22825;
chunk__22769_22809 = G__22826;
count__22770_22810 = G__22827;
i__22771_22811 = G__22828;
continue;
} else {
var vec__22777_22829 = cljs.core.first.call(null,seq__22768_22823__$1);
var name_22830 = cljs.core.nth.call(null,vec__22777_22829,(0),null);
var map__22780_22831 = cljs.core.nth.call(null,vec__22777_22829,(1),null);
var map__22780_22832__$1 = ((((!((map__22780_22831 == null)))?((((map__22780_22831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22780_22831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22780_22831):map__22780_22831);
var doc_22833 = cljs.core.get.call(null,map__22780_22832__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22834 = cljs.core.get.call(null,map__22780_22832__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22830);

cljs.core.println.call(null," ",arglists_22834);

if(cljs.core.truth_(doc_22833)){
cljs.core.println.call(null," ",doc_22833);
} else {
}

var G__22835 = cljs.core.next.call(null,seq__22768_22823__$1);
var G__22836 = null;
var G__22837 = (0);
var G__22838 = (0);
seq__22768_22808 = G__22835;
chunk__22769_22809 = G__22836;
count__22770_22810 = G__22837;
i__22771_22811 = G__22838;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__22782 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22783 = null;
var count__22784 = (0);
var i__22785 = (0);
while(true){
if((i__22785 < count__22784)){
var role = cljs.core._nth.call(null,chunk__22783,i__22785);
var temp__4657__auto___22839__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___22839__$1)){
var spec_22840 = temp__4657__auto___22839__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22840));
} else {
}

var G__22841 = seq__22782;
var G__22842 = chunk__22783;
var G__22843 = count__22784;
var G__22844 = (i__22785 + (1));
seq__22782 = G__22841;
chunk__22783 = G__22842;
count__22784 = G__22843;
i__22785 = G__22844;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__22782);
if(temp__4657__auto____$1){
var seq__22782__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22782__$1)){
var c__21380__auto__ = cljs.core.chunk_first.call(null,seq__22782__$1);
var G__22845 = cljs.core.chunk_rest.call(null,seq__22782__$1);
var G__22846 = c__21380__auto__;
var G__22847 = cljs.core.count.call(null,c__21380__auto__);
var G__22848 = (0);
seq__22782 = G__22845;
chunk__22783 = G__22846;
count__22784 = G__22847;
i__22785 = G__22848;
continue;
} else {
var role = cljs.core.first.call(null,seq__22782__$1);
var temp__4657__auto___22849__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___22849__$2)){
var spec_22850 = temp__4657__auto___22849__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22850));
} else {
}

var G__22851 = cljs.core.next.call(null,seq__22782__$1);
var G__22852 = null;
var G__22853 = (0);
var G__22854 = (0);
seq__22782 = G__22851;
chunk__22783 = G__22852;
count__22784 = G__22853;
i__22785 = G__22854;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map