// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29118){
var map__29143 = p__29118;
var map__29143__$1 = ((((!((map__29143 == null)))?((((map__29143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29143):map__29143);
var m = map__29143__$1;
var n = cljs.core.get.call(null,map__29143__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29145_29167 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29146_29168 = null;
var count__29147_29169 = (0);
var i__29148_29170 = (0);
while(true){
if((i__29148_29170 < count__29147_29169)){
var f_29171 = cljs.core._nth.call(null,chunk__29146_29168,i__29148_29170);
cljs.core.println.call(null,"  ",f_29171);

var G__29172 = seq__29145_29167;
var G__29173 = chunk__29146_29168;
var G__29174 = count__29147_29169;
var G__29175 = (i__29148_29170 + (1));
seq__29145_29167 = G__29172;
chunk__29146_29168 = G__29173;
count__29147_29169 = G__29174;
i__29148_29170 = G__29175;
continue;
} else {
var temp__4657__auto___29176 = cljs.core.seq.call(null,seq__29145_29167);
if(temp__4657__auto___29176){
var seq__29145_29177__$1 = temp__4657__auto___29176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29145_29177__$1)){
var c__20798__auto___29178 = cljs.core.chunk_first.call(null,seq__29145_29177__$1);
var G__29179 = cljs.core.chunk_rest.call(null,seq__29145_29177__$1);
var G__29180 = c__20798__auto___29178;
var G__29181 = cljs.core.count.call(null,c__20798__auto___29178);
var G__29182 = (0);
seq__29145_29167 = G__29179;
chunk__29146_29168 = G__29180;
count__29147_29169 = G__29181;
i__29148_29170 = G__29182;
continue;
} else {
var f_29183 = cljs.core.first.call(null,seq__29145_29177__$1);
cljs.core.println.call(null,"  ",f_29183);

var G__29184 = cljs.core.next.call(null,seq__29145_29177__$1);
var G__29185 = null;
var G__29186 = (0);
var G__29187 = (0);
seq__29145_29167 = G__29184;
chunk__29146_29168 = G__29185;
count__29147_29169 = G__29186;
i__29148_29170 = G__29187;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29188 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19987__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29188);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29188)))?cljs.core.second.call(null,arglists_29188):arglists_29188));
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
var seq__29149_29189 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29150_29190 = null;
var count__29151_29191 = (0);
var i__29152_29192 = (0);
while(true){
if((i__29152_29192 < count__29151_29191)){
var vec__29153_29193 = cljs.core._nth.call(null,chunk__29150_29190,i__29152_29192);
var name_29194 = cljs.core.nth.call(null,vec__29153_29193,(0),null);
var map__29156_29195 = cljs.core.nth.call(null,vec__29153_29193,(1),null);
var map__29156_29196__$1 = ((((!((map__29156_29195 == null)))?((((map__29156_29195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29156_29195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29156_29195):map__29156_29195);
var doc_29197 = cljs.core.get.call(null,map__29156_29196__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29198 = cljs.core.get.call(null,map__29156_29196__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29194);

cljs.core.println.call(null," ",arglists_29198);

if(cljs.core.truth_(doc_29197)){
cljs.core.println.call(null," ",doc_29197);
} else {
}

var G__29199 = seq__29149_29189;
var G__29200 = chunk__29150_29190;
var G__29201 = count__29151_29191;
var G__29202 = (i__29152_29192 + (1));
seq__29149_29189 = G__29199;
chunk__29150_29190 = G__29200;
count__29151_29191 = G__29201;
i__29152_29192 = G__29202;
continue;
} else {
var temp__4657__auto___29203 = cljs.core.seq.call(null,seq__29149_29189);
if(temp__4657__auto___29203){
var seq__29149_29204__$1 = temp__4657__auto___29203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29149_29204__$1)){
var c__20798__auto___29205 = cljs.core.chunk_first.call(null,seq__29149_29204__$1);
var G__29206 = cljs.core.chunk_rest.call(null,seq__29149_29204__$1);
var G__29207 = c__20798__auto___29205;
var G__29208 = cljs.core.count.call(null,c__20798__auto___29205);
var G__29209 = (0);
seq__29149_29189 = G__29206;
chunk__29150_29190 = G__29207;
count__29151_29191 = G__29208;
i__29152_29192 = G__29209;
continue;
} else {
var vec__29158_29210 = cljs.core.first.call(null,seq__29149_29204__$1);
var name_29211 = cljs.core.nth.call(null,vec__29158_29210,(0),null);
var map__29161_29212 = cljs.core.nth.call(null,vec__29158_29210,(1),null);
var map__29161_29213__$1 = ((((!((map__29161_29212 == null)))?((((map__29161_29212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29161_29212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29161_29212):map__29161_29212);
var doc_29214 = cljs.core.get.call(null,map__29161_29213__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29215 = cljs.core.get.call(null,map__29161_29213__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29211);

cljs.core.println.call(null," ",arglists_29215);

if(cljs.core.truth_(doc_29214)){
cljs.core.println.call(null," ",doc_29214);
} else {
}

var G__29216 = cljs.core.next.call(null,seq__29149_29204__$1);
var G__29217 = null;
var G__29218 = (0);
var G__29219 = (0);
seq__29149_29189 = G__29216;
chunk__29150_29190 = G__29217;
count__29151_29191 = G__29218;
i__29152_29192 = G__29219;
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

var seq__29163 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29164 = null;
var count__29165 = (0);
var i__29166 = (0);
while(true){
if((i__29166 < count__29165)){
var role = cljs.core._nth.call(null,chunk__29164,i__29166);
var temp__4657__auto___29220__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29220__$1)){
var spec_29221 = temp__4657__auto___29220__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29221));
} else {
}

var G__29222 = seq__29163;
var G__29223 = chunk__29164;
var G__29224 = count__29165;
var G__29225 = (i__29166 + (1));
seq__29163 = G__29222;
chunk__29164 = G__29223;
count__29165 = G__29224;
i__29166 = G__29225;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29163);
if(temp__4657__auto____$1){
var seq__29163__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29163__$1)){
var c__20798__auto__ = cljs.core.chunk_first.call(null,seq__29163__$1);
var G__29226 = cljs.core.chunk_rest.call(null,seq__29163__$1);
var G__29227 = c__20798__auto__;
var G__29228 = cljs.core.count.call(null,c__20798__auto__);
var G__29229 = (0);
seq__29163 = G__29226;
chunk__29164 = G__29227;
count__29165 = G__29228;
i__29166 = G__29229;
continue;
} else {
var role = cljs.core.first.call(null,seq__29163__$1);
var temp__4657__auto___29230__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29230__$2)){
var spec_29231 = temp__4657__auto___29230__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29231));
} else {
}

var G__29232 = cljs.core.next.call(null,seq__29163__$1);
var G__29233 = null;
var G__29234 = (0);
var G__29235 = (0);
seq__29163 = G__29232;
chunk__29164 = G__29233;
count__29165 = G__29234;
i__29166 = G__29235;
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

//# sourceMappingURL=repl.js.map?rel=1539454396230