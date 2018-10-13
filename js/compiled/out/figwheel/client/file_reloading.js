// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19987__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19987__auto__){
return or__19987__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19987__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28068_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28068_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28073 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28074 = null;
var count__28075 = (0);
var i__28076 = (0);
while(true){
if((i__28076 < count__28075)){
var n = cljs.core._nth.call(null,chunk__28074,i__28076);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28077 = seq__28073;
var G__28078 = chunk__28074;
var G__28079 = count__28075;
var G__28080 = (i__28076 + (1));
seq__28073 = G__28077;
chunk__28074 = G__28078;
count__28075 = G__28079;
i__28076 = G__28080;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28073);
if(temp__4657__auto__){
var seq__28073__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28073__$1)){
var c__20798__auto__ = cljs.core.chunk_first.call(null,seq__28073__$1);
var G__28081 = cljs.core.chunk_rest.call(null,seq__28073__$1);
var G__28082 = c__20798__auto__;
var G__28083 = cljs.core.count.call(null,c__20798__auto__);
var G__28084 = (0);
seq__28073 = G__28081;
chunk__28074 = G__28082;
count__28075 = G__28083;
i__28076 = G__28084;
continue;
} else {
var n = cljs.core.first.call(null,seq__28073__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28085 = cljs.core.next.call(null,seq__28073__$1);
var G__28086 = null;
var G__28087 = (0);
var G__28088 = (0);
seq__28073 = G__28085;
chunk__28074 = G__28086;
count__28075 = G__28087;
i__28076 = G__28088;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28139_28150 = cljs.core.seq.call(null,deps);
var chunk__28140_28151 = null;
var count__28141_28152 = (0);
var i__28142_28153 = (0);
while(true){
if((i__28142_28153 < count__28141_28152)){
var dep_28154 = cljs.core._nth.call(null,chunk__28140_28151,i__28142_28153);
topo_sort_helper_STAR_.call(null,dep_28154,(depth + (1)),state);

var G__28155 = seq__28139_28150;
var G__28156 = chunk__28140_28151;
var G__28157 = count__28141_28152;
var G__28158 = (i__28142_28153 + (1));
seq__28139_28150 = G__28155;
chunk__28140_28151 = G__28156;
count__28141_28152 = G__28157;
i__28142_28153 = G__28158;
continue;
} else {
var temp__4657__auto___28159 = cljs.core.seq.call(null,seq__28139_28150);
if(temp__4657__auto___28159){
var seq__28139_28160__$1 = temp__4657__auto___28159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28139_28160__$1)){
var c__20798__auto___28161 = cljs.core.chunk_first.call(null,seq__28139_28160__$1);
var G__28162 = cljs.core.chunk_rest.call(null,seq__28139_28160__$1);
var G__28163 = c__20798__auto___28161;
var G__28164 = cljs.core.count.call(null,c__20798__auto___28161);
var G__28165 = (0);
seq__28139_28150 = G__28162;
chunk__28140_28151 = G__28163;
count__28141_28152 = G__28164;
i__28142_28153 = G__28165;
continue;
} else {
var dep_28166 = cljs.core.first.call(null,seq__28139_28160__$1);
topo_sort_helper_STAR_.call(null,dep_28166,(depth + (1)),state);

var G__28167 = cljs.core.next.call(null,seq__28139_28160__$1);
var G__28168 = null;
var G__28169 = (0);
var G__28170 = (0);
seq__28139_28150 = G__28167;
chunk__28140_28151 = G__28168;
count__28141_28152 = G__28169;
i__28142_28153 = G__28170;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28143){
var vec__28147 = p__28143;
var seq__28148 = cljs.core.seq.call(null,vec__28147);
var first__28149 = cljs.core.first.call(null,seq__28148);
var seq__28148__$1 = cljs.core.next.call(null,seq__28148);
var x = first__28149;
var xs = seq__28148__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28147,seq__28148,first__28149,seq__28148__$1,x,xs,get_deps__$1){
return (function (p1__28089_SHARP_){
return clojure.set.difference.call(null,p1__28089_SHARP_,x);
});})(vec__28147,seq__28148,first__28149,seq__28148__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28183 = cljs.core.seq.call(null,provides);
var chunk__28184 = null;
var count__28185 = (0);
var i__28186 = (0);
while(true){
if((i__28186 < count__28185)){
var prov = cljs.core._nth.call(null,chunk__28184,i__28186);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28187_28195 = cljs.core.seq.call(null,requires);
var chunk__28188_28196 = null;
var count__28189_28197 = (0);
var i__28190_28198 = (0);
while(true){
if((i__28190_28198 < count__28189_28197)){
var req_28199 = cljs.core._nth.call(null,chunk__28188_28196,i__28190_28198);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28199,prov);

var G__28200 = seq__28187_28195;
var G__28201 = chunk__28188_28196;
var G__28202 = count__28189_28197;
var G__28203 = (i__28190_28198 + (1));
seq__28187_28195 = G__28200;
chunk__28188_28196 = G__28201;
count__28189_28197 = G__28202;
i__28190_28198 = G__28203;
continue;
} else {
var temp__4657__auto___28204 = cljs.core.seq.call(null,seq__28187_28195);
if(temp__4657__auto___28204){
var seq__28187_28205__$1 = temp__4657__auto___28204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28187_28205__$1)){
var c__20798__auto___28206 = cljs.core.chunk_first.call(null,seq__28187_28205__$1);
var G__28207 = cljs.core.chunk_rest.call(null,seq__28187_28205__$1);
var G__28208 = c__20798__auto___28206;
var G__28209 = cljs.core.count.call(null,c__20798__auto___28206);
var G__28210 = (0);
seq__28187_28195 = G__28207;
chunk__28188_28196 = G__28208;
count__28189_28197 = G__28209;
i__28190_28198 = G__28210;
continue;
} else {
var req_28211 = cljs.core.first.call(null,seq__28187_28205__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28211,prov);

var G__28212 = cljs.core.next.call(null,seq__28187_28205__$1);
var G__28213 = null;
var G__28214 = (0);
var G__28215 = (0);
seq__28187_28195 = G__28212;
chunk__28188_28196 = G__28213;
count__28189_28197 = G__28214;
i__28190_28198 = G__28215;
continue;
}
} else {
}
}
break;
}

var G__28216 = seq__28183;
var G__28217 = chunk__28184;
var G__28218 = count__28185;
var G__28219 = (i__28186 + (1));
seq__28183 = G__28216;
chunk__28184 = G__28217;
count__28185 = G__28218;
i__28186 = G__28219;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28183);
if(temp__4657__auto__){
var seq__28183__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28183__$1)){
var c__20798__auto__ = cljs.core.chunk_first.call(null,seq__28183__$1);
var G__28220 = cljs.core.chunk_rest.call(null,seq__28183__$1);
var G__28221 = c__20798__auto__;
var G__28222 = cljs.core.count.call(null,c__20798__auto__);
var G__28223 = (0);
seq__28183 = G__28220;
chunk__28184 = G__28221;
count__28185 = G__28222;
i__28186 = G__28223;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28183__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28191_28224 = cljs.core.seq.call(null,requires);
var chunk__28192_28225 = null;
var count__28193_28226 = (0);
var i__28194_28227 = (0);
while(true){
if((i__28194_28227 < count__28193_28226)){
var req_28228 = cljs.core._nth.call(null,chunk__28192_28225,i__28194_28227);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28228,prov);

var G__28229 = seq__28191_28224;
var G__28230 = chunk__28192_28225;
var G__28231 = count__28193_28226;
var G__28232 = (i__28194_28227 + (1));
seq__28191_28224 = G__28229;
chunk__28192_28225 = G__28230;
count__28193_28226 = G__28231;
i__28194_28227 = G__28232;
continue;
} else {
var temp__4657__auto___28233__$1 = cljs.core.seq.call(null,seq__28191_28224);
if(temp__4657__auto___28233__$1){
var seq__28191_28234__$1 = temp__4657__auto___28233__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28191_28234__$1)){
var c__20798__auto___28235 = cljs.core.chunk_first.call(null,seq__28191_28234__$1);
var G__28236 = cljs.core.chunk_rest.call(null,seq__28191_28234__$1);
var G__28237 = c__20798__auto___28235;
var G__28238 = cljs.core.count.call(null,c__20798__auto___28235);
var G__28239 = (0);
seq__28191_28224 = G__28236;
chunk__28192_28225 = G__28237;
count__28193_28226 = G__28238;
i__28194_28227 = G__28239;
continue;
} else {
var req_28240 = cljs.core.first.call(null,seq__28191_28234__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28240,prov);

var G__28241 = cljs.core.next.call(null,seq__28191_28234__$1);
var G__28242 = null;
var G__28243 = (0);
var G__28244 = (0);
seq__28191_28224 = G__28241;
chunk__28192_28225 = G__28242;
count__28193_28226 = G__28243;
i__28194_28227 = G__28244;
continue;
}
} else {
}
}
break;
}

var G__28245 = cljs.core.next.call(null,seq__28183__$1);
var G__28246 = null;
var G__28247 = (0);
var G__28248 = (0);
seq__28183 = G__28245;
chunk__28184 = G__28246;
count__28185 = G__28247;
i__28186 = G__28248;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28253_28257 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28254_28258 = null;
var count__28255_28259 = (0);
var i__28256_28260 = (0);
while(true){
if((i__28256_28260 < count__28255_28259)){
var ns_28261 = cljs.core._nth.call(null,chunk__28254_28258,i__28256_28260);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28261);

var G__28262 = seq__28253_28257;
var G__28263 = chunk__28254_28258;
var G__28264 = count__28255_28259;
var G__28265 = (i__28256_28260 + (1));
seq__28253_28257 = G__28262;
chunk__28254_28258 = G__28263;
count__28255_28259 = G__28264;
i__28256_28260 = G__28265;
continue;
} else {
var temp__4657__auto___28266 = cljs.core.seq.call(null,seq__28253_28257);
if(temp__4657__auto___28266){
var seq__28253_28267__$1 = temp__4657__auto___28266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28253_28267__$1)){
var c__20798__auto___28268 = cljs.core.chunk_first.call(null,seq__28253_28267__$1);
var G__28269 = cljs.core.chunk_rest.call(null,seq__28253_28267__$1);
var G__28270 = c__20798__auto___28268;
var G__28271 = cljs.core.count.call(null,c__20798__auto___28268);
var G__28272 = (0);
seq__28253_28257 = G__28269;
chunk__28254_28258 = G__28270;
count__28255_28259 = G__28271;
i__28256_28260 = G__28272;
continue;
} else {
var ns_28273 = cljs.core.first.call(null,seq__28253_28267__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28273);

var G__28274 = cljs.core.next.call(null,seq__28253_28267__$1);
var G__28275 = null;
var G__28276 = (0);
var G__28277 = (0);
seq__28253_28257 = G__28274;
chunk__28254_28258 = G__28275;
count__28255_28259 = G__28276;
i__28256_28260 = G__28277;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19987__auto__ = goog.require__;
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28278__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28279__i = 0, G__28279__a = new Array(arguments.length -  0);
while (G__28279__i < G__28279__a.length) {G__28279__a[G__28279__i] = arguments[G__28279__i + 0]; ++G__28279__i;}
  args = new cljs.core.IndexedSeq(G__28279__a,0);
} 
return G__28278__delegate.call(this,args);};
G__28278.cljs$lang$maxFixedArity = 0;
G__28278.cljs$lang$applyTo = (function (arglist__28280){
var args = cljs.core.seq(arglist__28280);
return G__28278__delegate(args);
});
G__28278.cljs$core$IFn$_invoke$arity$variadic = G__28278__delegate;
return G__28278;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28282 = cljs.core._EQ_;
var expr__28283 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28282.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28283))){
var path_parts = ((function (pred__28282,expr__28283){
return (function (p1__28281_SHARP_){
return clojure.string.split.call(null,p1__28281_SHARP_,/[\/\\]/);
});})(pred__28282,expr__28283))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28282,expr__28283){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28285){if((e28285 instanceof Error)){
var e = e28285;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28285;

}
}})());
});
;})(path_parts,sep,root,pred__28282,expr__28283))
} else {
if(cljs.core.truth_(pred__28282.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28283))){
return ((function (pred__28282,expr__28283){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28282,expr__28283){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28282,expr__28283))
);

return deferred.addErrback(((function (deferred,pred__28282,expr__28283){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28282,expr__28283))
);
});
;})(pred__28282,expr__28283))
} else {
return ((function (pred__28282,expr__28283){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28282,expr__28283))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28286,callback){
var map__28289 = p__28286;
var map__28289__$1 = ((((!((map__28289 == null)))?((((map__28289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28289):map__28289);
var file_msg = map__28289__$1;
var request_url = cljs.core.get.call(null,map__28289__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28289,map__28289__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28289,map__28289__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__){
return (function (state_28313){
var state_val_28314 = (state_28313[(1)]);
if((state_val_28314 === (7))){
var inst_28309 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
var statearr_28315_28335 = state_28313__$1;
(statearr_28315_28335[(2)] = inst_28309);

(statearr_28315_28335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (1))){
var state_28313__$1 = state_28313;
var statearr_28316_28336 = state_28313__$1;
(statearr_28316_28336[(2)] = null);

(statearr_28316_28336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (4))){
var inst_28293 = (state_28313[(7)]);
var inst_28293__$1 = (state_28313[(2)]);
var state_28313__$1 = (function (){var statearr_28317 = state_28313;
(statearr_28317[(7)] = inst_28293__$1);

return statearr_28317;
})();
if(cljs.core.truth_(inst_28293__$1)){
var statearr_28318_28337 = state_28313__$1;
(statearr_28318_28337[(1)] = (5));

} else {
var statearr_28319_28338 = state_28313__$1;
(statearr_28319_28338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (6))){
var state_28313__$1 = state_28313;
var statearr_28320_28339 = state_28313__$1;
(statearr_28320_28339[(2)] = null);

(statearr_28320_28339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (3))){
var inst_28311 = (state_28313[(2)]);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28313__$1,inst_28311);
} else {
if((state_val_28314 === (2))){
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28313__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28314 === (11))){
var inst_28305 = (state_28313[(2)]);
var state_28313__$1 = (function (){var statearr_28321 = state_28313;
(statearr_28321[(8)] = inst_28305);

return statearr_28321;
})();
var statearr_28322_28340 = state_28313__$1;
(statearr_28322_28340[(2)] = null);

(statearr_28322_28340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (9))){
var inst_28297 = (state_28313[(9)]);
var inst_28299 = (state_28313[(10)]);
var inst_28301 = inst_28299.call(null,inst_28297);
var state_28313__$1 = state_28313;
var statearr_28323_28341 = state_28313__$1;
(statearr_28323_28341[(2)] = inst_28301);

(statearr_28323_28341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (5))){
var inst_28293 = (state_28313[(7)]);
var inst_28295 = figwheel.client.file_reloading.blocking_load.call(null,inst_28293);
var state_28313__$1 = state_28313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28313__$1,(8),inst_28295);
} else {
if((state_val_28314 === (10))){
var inst_28297 = (state_28313[(9)]);
var inst_28303 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28297);
var state_28313__$1 = state_28313;
var statearr_28324_28342 = state_28313__$1;
(statearr_28324_28342[(2)] = inst_28303);

(statearr_28324_28342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28314 === (8))){
var inst_28293 = (state_28313[(7)]);
var inst_28299 = (state_28313[(10)]);
var inst_28297 = (state_28313[(2)]);
var inst_28298 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28299__$1 = cljs.core.get.call(null,inst_28298,inst_28293);
var state_28313__$1 = (function (){var statearr_28325 = state_28313;
(statearr_28325[(9)] = inst_28297);

(statearr_28325[(10)] = inst_28299__$1);

return statearr_28325;
})();
if(cljs.core.truth_(inst_28299__$1)){
var statearr_28326_28343 = state_28313__$1;
(statearr_28326_28343[(1)] = (9));

} else {
var statearr_28327_28344 = state_28313__$1;
(statearr_28327_28344[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25140__auto__))
;
return ((function (switch__25028__auto__,c__25140__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25029__auto__ = null;
var figwheel$client$file_reloading$state_machine__25029__auto____0 = (function (){
var statearr_28331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28331[(0)] = figwheel$client$file_reloading$state_machine__25029__auto__);

(statearr_28331[(1)] = (1));

return statearr_28331;
});
var figwheel$client$file_reloading$state_machine__25029__auto____1 = (function (state_28313){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_28313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e28332){if((e28332 instanceof Object)){
var ex__25032__auto__ = e28332;
var statearr_28333_28345 = state_28313;
(statearr_28333_28345[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28346 = state_28313;
state_28313 = G__28346;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25029__auto__ = function(state_28313){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25029__auto____1.call(this,state_28313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25029__auto____0;
figwheel$client$file_reloading$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25029__auto____1;
return figwheel$client$file_reloading$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__))
})();
var state__25142__auto__ = (function (){var statearr_28334 = f__25141__auto__.call(null);
(statearr_28334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_28334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__))
);

return c__25140__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28347,callback){
var map__28350 = p__28347;
var map__28350__$1 = ((((!((map__28350 == null)))?((((map__28350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28350):map__28350);
var file_msg = map__28350__$1;
var namespace = cljs.core.get.call(null,map__28350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28350,map__28350__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28350,map__28350__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28352){
var map__28355 = p__28352;
var map__28355__$1 = ((((!((map__28355 == null)))?((((map__28355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355):map__28355);
var file_msg = map__28355__$1;
var namespace = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19975__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19975__auto__){
var or__19987__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
var or__19987__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19987__auto____$1)){
return or__19987__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19975__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28357,callback){
var map__28360 = p__28357;
var map__28360__$1 = ((((!((map__28360 == null)))?((((map__28360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28360):map__28360);
var file_msg = map__28360__$1;
var request_url = cljs.core.get.call(null,map__28360__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28360__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25140__auto___28464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___28464,out){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___28464,out){
return (function (state_28446){
var state_val_28447 = (state_28446[(1)]);
if((state_val_28447 === (1))){
var inst_28420 = cljs.core.seq.call(null,files);
var inst_28421 = cljs.core.first.call(null,inst_28420);
var inst_28422 = cljs.core.next.call(null,inst_28420);
var inst_28423 = files;
var state_28446__$1 = (function (){var statearr_28448 = state_28446;
(statearr_28448[(7)] = inst_28422);

(statearr_28448[(8)] = inst_28423);

(statearr_28448[(9)] = inst_28421);

return statearr_28448;
})();
var statearr_28449_28465 = state_28446__$1;
(statearr_28449_28465[(2)] = null);

(statearr_28449_28465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (2))){
var inst_28429 = (state_28446[(10)]);
var inst_28423 = (state_28446[(8)]);
var inst_28428 = cljs.core.seq.call(null,inst_28423);
var inst_28429__$1 = cljs.core.first.call(null,inst_28428);
var inst_28430 = cljs.core.next.call(null,inst_28428);
var inst_28431 = (inst_28429__$1 == null);
var inst_28432 = cljs.core.not.call(null,inst_28431);
var state_28446__$1 = (function (){var statearr_28450 = state_28446;
(statearr_28450[(10)] = inst_28429__$1);

(statearr_28450[(11)] = inst_28430);

return statearr_28450;
})();
if(inst_28432){
var statearr_28451_28466 = state_28446__$1;
(statearr_28451_28466[(1)] = (4));

} else {
var statearr_28452_28467 = state_28446__$1;
(statearr_28452_28467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (3))){
var inst_28444 = (state_28446[(2)]);
var state_28446__$1 = state_28446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28446__$1,inst_28444);
} else {
if((state_val_28447 === (4))){
var inst_28429 = (state_28446[(10)]);
var inst_28434 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28429);
var state_28446__$1 = state_28446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28446__$1,(7),inst_28434);
} else {
if((state_val_28447 === (5))){
var inst_28440 = cljs.core.async.close_BANG_.call(null,out);
var state_28446__$1 = state_28446;
var statearr_28453_28468 = state_28446__$1;
(statearr_28453_28468[(2)] = inst_28440);

(statearr_28453_28468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (6))){
var inst_28442 = (state_28446[(2)]);
var state_28446__$1 = state_28446;
var statearr_28454_28469 = state_28446__$1;
(statearr_28454_28469[(2)] = inst_28442);

(statearr_28454_28469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28447 === (7))){
var inst_28430 = (state_28446[(11)]);
var inst_28436 = (state_28446[(2)]);
var inst_28437 = cljs.core.async.put_BANG_.call(null,out,inst_28436);
var inst_28423 = inst_28430;
var state_28446__$1 = (function (){var statearr_28455 = state_28446;
(statearr_28455[(8)] = inst_28423);

(statearr_28455[(12)] = inst_28437);

return statearr_28455;
})();
var statearr_28456_28470 = state_28446__$1;
(statearr_28456_28470[(2)] = null);

(statearr_28456_28470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25140__auto___28464,out))
;
return ((function (switch__25028__auto__,c__25140__auto___28464,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto____0 = (function (){
var statearr_28460 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28460[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto__);

(statearr_28460[(1)] = (1));

return statearr_28460;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto____1 = (function (state_28446){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_28446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e28461){if((e28461 instanceof Object)){
var ex__25032__auto__ = e28461;
var statearr_28462_28471 = state_28446;
(statearr_28462_28471[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28472 = state_28446;
state_28446 = G__28472;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto__ = function(state_28446){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto____1.call(this,state_28446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___28464,out))
})();
var state__25142__auto__ = (function (){var statearr_28463 = f__25141__auto__.call(null);
(statearr_28463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___28464);

return statearr_28463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___28464,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28473,opts){
var map__28477 = p__28473;
var map__28477__$1 = ((((!((map__28477 == null)))?((((map__28477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28477):map__28477);
var eval_body__$1 = cljs.core.get.call(null,map__28477__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19975__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19975__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19975__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28479){var e = e28479;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28480_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28480_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28489){
var vec__28490 = p__28489;
var k = cljs.core.nth.call(null,vec__28490,(0),null);
var v = cljs.core.nth.call(null,vec__28490,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28493){
var vec__28494 = p__28493;
var k = cljs.core.nth.call(null,vec__28494,(0),null);
var v = cljs.core.nth.call(null,vec__28494,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28500,p__28501){
var map__28748 = p__28500;
var map__28748__$1 = ((((!((map__28748 == null)))?((((map__28748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28748):map__28748);
var opts = map__28748__$1;
var before_jsload = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28749 = p__28501;
var map__28749__$1 = ((((!((map__28749 == null)))?((((map__28749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28749):map__28749);
var msg = map__28749__$1;
var files = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28749__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28902){
var state_val_28903 = (state_28902[(1)]);
if((state_val_28903 === (7))){
var inst_28764 = (state_28902[(7)]);
var inst_28765 = (state_28902[(8)]);
var inst_28766 = (state_28902[(9)]);
var inst_28763 = (state_28902[(10)]);
var inst_28771 = cljs.core._nth.call(null,inst_28764,inst_28766);
var inst_28772 = figwheel.client.file_reloading.eval_body.call(null,inst_28771,opts);
var inst_28773 = (inst_28766 + (1));
var tmp28904 = inst_28764;
var tmp28905 = inst_28765;
var tmp28906 = inst_28763;
var inst_28763__$1 = tmp28906;
var inst_28764__$1 = tmp28904;
var inst_28765__$1 = tmp28905;
var inst_28766__$1 = inst_28773;
var state_28902__$1 = (function (){var statearr_28907 = state_28902;
(statearr_28907[(7)] = inst_28764__$1);

(statearr_28907[(8)] = inst_28765__$1);

(statearr_28907[(11)] = inst_28772);

(statearr_28907[(9)] = inst_28766__$1);

(statearr_28907[(10)] = inst_28763__$1);

return statearr_28907;
})();
var statearr_28908_28994 = state_28902__$1;
(statearr_28908_28994[(2)] = null);

(statearr_28908_28994[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (20))){
var inst_28806 = (state_28902[(12)]);
var inst_28814 = figwheel.client.file_reloading.sort_files.call(null,inst_28806);
var state_28902__$1 = state_28902;
var statearr_28909_28995 = state_28902__$1;
(statearr_28909_28995[(2)] = inst_28814);

(statearr_28909_28995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (27))){
var state_28902__$1 = state_28902;
var statearr_28910_28996 = state_28902__$1;
(statearr_28910_28996[(2)] = null);

(statearr_28910_28996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (1))){
var inst_28755 = (state_28902[(13)]);
var inst_28752 = before_jsload.call(null,files);
var inst_28753 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28754 = (function (){return ((function (inst_28755,inst_28752,inst_28753,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28497_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28497_SHARP_);
});
;})(inst_28755,inst_28752,inst_28753,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28755__$1 = cljs.core.filter.call(null,inst_28754,files);
var inst_28756 = cljs.core.not_empty.call(null,inst_28755__$1);
var state_28902__$1 = (function (){var statearr_28911 = state_28902;
(statearr_28911[(14)] = inst_28753);

(statearr_28911[(15)] = inst_28752);

(statearr_28911[(13)] = inst_28755__$1);

return statearr_28911;
})();
if(cljs.core.truth_(inst_28756)){
var statearr_28912_28997 = state_28902__$1;
(statearr_28912_28997[(1)] = (2));

} else {
var statearr_28913_28998 = state_28902__$1;
(statearr_28913_28998[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (24))){
var state_28902__$1 = state_28902;
var statearr_28914_28999 = state_28902__$1;
(statearr_28914_28999[(2)] = null);

(statearr_28914_28999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (39))){
var inst_28856 = (state_28902[(16)]);
var state_28902__$1 = state_28902;
var statearr_28915_29000 = state_28902__$1;
(statearr_28915_29000[(2)] = inst_28856);

(statearr_28915_29000[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (46))){
var inst_28897 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28916_29001 = state_28902__$1;
(statearr_28916_29001[(2)] = inst_28897);

(statearr_28916_29001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (4))){
var inst_28800 = (state_28902[(2)]);
var inst_28801 = cljs.core.List.EMPTY;
var inst_28802 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28801);
var inst_28803 = (function (){return ((function (inst_28800,inst_28801,inst_28802,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28498_SHARP_){
var and__19975__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28498_SHARP_);
if(cljs.core.truth_(and__19975__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28498_SHARP_));
} else {
return and__19975__auto__;
}
});
;})(inst_28800,inst_28801,inst_28802,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28804 = cljs.core.filter.call(null,inst_28803,files);
var inst_28805 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28806 = cljs.core.concat.call(null,inst_28804,inst_28805);
var state_28902__$1 = (function (){var statearr_28917 = state_28902;
(statearr_28917[(17)] = inst_28802);

(statearr_28917[(18)] = inst_28800);

(statearr_28917[(12)] = inst_28806);

return statearr_28917;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28918_29002 = state_28902__$1;
(statearr_28918_29002[(1)] = (16));

} else {
var statearr_28919_29003 = state_28902__$1;
(statearr_28919_29003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (15))){
var inst_28790 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28920_29004 = state_28902__$1;
(statearr_28920_29004[(2)] = inst_28790);

(statearr_28920_29004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (21))){
var inst_28816 = (state_28902[(19)]);
var inst_28816__$1 = (state_28902[(2)]);
var inst_28817 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28816__$1);
var state_28902__$1 = (function (){var statearr_28921 = state_28902;
(statearr_28921[(19)] = inst_28816__$1);

return statearr_28921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28902__$1,(22),inst_28817);
} else {
if((state_val_28903 === (31))){
var inst_28900 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28902__$1,inst_28900);
} else {
if((state_val_28903 === (32))){
var inst_28856 = (state_28902[(16)]);
var inst_28861 = inst_28856.cljs$lang$protocol_mask$partition0$;
var inst_28862 = (inst_28861 & (64));
var inst_28863 = inst_28856.cljs$core$ISeq$;
var inst_28864 = (inst_28862) || (inst_28863);
var state_28902__$1 = state_28902;
if(cljs.core.truth_(inst_28864)){
var statearr_28922_29005 = state_28902__$1;
(statearr_28922_29005[(1)] = (35));

} else {
var statearr_28923_29006 = state_28902__$1;
(statearr_28923_29006[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (40))){
var inst_28877 = (state_28902[(20)]);
var inst_28876 = (state_28902[(2)]);
var inst_28877__$1 = cljs.core.get.call(null,inst_28876,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28878 = cljs.core.get.call(null,inst_28876,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28879 = cljs.core.not_empty.call(null,inst_28877__$1);
var state_28902__$1 = (function (){var statearr_28924 = state_28902;
(statearr_28924[(20)] = inst_28877__$1);

(statearr_28924[(21)] = inst_28878);

return statearr_28924;
})();
if(cljs.core.truth_(inst_28879)){
var statearr_28925_29007 = state_28902__$1;
(statearr_28925_29007[(1)] = (41));

} else {
var statearr_28926_29008 = state_28902__$1;
(statearr_28926_29008[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (33))){
var state_28902__$1 = state_28902;
var statearr_28927_29009 = state_28902__$1;
(statearr_28927_29009[(2)] = false);

(statearr_28927_29009[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (13))){
var inst_28776 = (state_28902[(22)]);
var inst_28780 = cljs.core.chunk_first.call(null,inst_28776);
var inst_28781 = cljs.core.chunk_rest.call(null,inst_28776);
var inst_28782 = cljs.core.count.call(null,inst_28780);
var inst_28763 = inst_28781;
var inst_28764 = inst_28780;
var inst_28765 = inst_28782;
var inst_28766 = (0);
var state_28902__$1 = (function (){var statearr_28928 = state_28902;
(statearr_28928[(7)] = inst_28764);

(statearr_28928[(8)] = inst_28765);

(statearr_28928[(9)] = inst_28766);

(statearr_28928[(10)] = inst_28763);

return statearr_28928;
})();
var statearr_28929_29010 = state_28902__$1;
(statearr_28929_29010[(2)] = null);

(statearr_28929_29010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (22))){
var inst_28816 = (state_28902[(19)]);
var inst_28824 = (state_28902[(23)]);
var inst_28820 = (state_28902[(24)]);
var inst_28819 = (state_28902[(25)]);
var inst_28819__$1 = (state_28902[(2)]);
var inst_28820__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28819__$1);
var inst_28821 = (function (){var all_files = inst_28816;
var res_SINGLEQUOTE_ = inst_28819__$1;
var res = inst_28820__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28816,inst_28824,inst_28820,inst_28819,inst_28819__$1,inst_28820__$1,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28499_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28499_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28816,inst_28824,inst_28820,inst_28819,inst_28819__$1,inst_28820__$1,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28822 = cljs.core.filter.call(null,inst_28821,inst_28819__$1);
var inst_28823 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28824__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28823);
var inst_28825 = cljs.core.not_empty.call(null,inst_28824__$1);
var state_28902__$1 = (function (){var statearr_28930 = state_28902;
(statearr_28930[(26)] = inst_28822);

(statearr_28930[(23)] = inst_28824__$1);

(statearr_28930[(24)] = inst_28820__$1);

(statearr_28930[(25)] = inst_28819__$1);

return statearr_28930;
})();
if(cljs.core.truth_(inst_28825)){
var statearr_28931_29011 = state_28902__$1;
(statearr_28931_29011[(1)] = (23));

} else {
var statearr_28932_29012 = state_28902__$1;
(statearr_28932_29012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (36))){
var state_28902__$1 = state_28902;
var statearr_28933_29013 = state_28902__$1;
(statearr_28933_29013[(2)] = false);

(statearr_28933_29013[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (41))){
var inst_28877 = (state_28902[(20)]);
var inst_28881 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28882 = cljs.core.map.call(null,inst_28881,inst_28877);
var inst_28883 = cljs.core.pr_str.call(null,inst_28882);
var inst_28884 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28883)].join('');
var inst_28885 = figwheel.client.utils.log.call(null,inst_28884);
var state_28902__$1 = state_28902;
var statearr_28934_29014 = state_28902__$1;
(statearr_28934_29014[(2)] = inst_28885);

(statearr_28934_29014[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (43))){
var inst_28878 = (state_28902[(21)]);
var inst_28888 = (state_28902[(2)]);
var inst_28889 = cljs.core.not_empty.call(null,inst_28878);
var state_28902__$1 = (function (){var statearr_28935 = state_28902;
(statearr_28935[(27)] = inst_28888);

return statearr_28935;
})();
if(cljs.core.truth_(inst_28889)){
var statearr_28936_29015 = state_28902__$1;
(statearr_28936_29015[(1)] = (44));

} else {
var statearr_28937_29016 = state_28902__$1;
(statearr_28937_29016[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (29))){
var inst_28816 = (state_28902[(19)]);
var inst_28822 = (state_28902[(26)]);
var inst_28824 = (state_28902[(23)]);
var inst_28820 = (state_28902[(24)]);
var inst_28856 = (state_28902[(16)]);
var inst_28819 = (state_28902[(25)]);
var inst_28852 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28855 = (function (){var all_files = inst_28816;
var res_SINGLEQUOTE_ = inst_28819;
var res = inst_28820;
var files_not_loaded = inst_28822;
var dependencies_that_loaded = inst_28824;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28856,inst_28819,inst_28852,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28854){
var map__28938 = p__28854;
var map__28938__$1 = ((((!((map__28938 == null)))?((((map__28938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28938):map__28938);
var namespace = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28856,inst_28819,inst_28852,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28856__$1 = cljs.core.group_by.call(null,inst_28855,inst_28822);
var inst_28858 = (inst_28856__$1 == null);
var inst_28859 = cljs.core.not.call(null,inst_28858);
var state_28902__$1 = (function (){var statearr_28940 = state_28902;
(statearr_28940[(28)] = inst_28852);

(statearr_28940[(16)] = inst_28856__$1);

return statearr_28940;
})();
if(inst_28859){
var statearr_28941_29017 = state_28902__$1;
(statearr_28941_29017[(1)] = (32));

} else {
var statearr_28942_29018 = state_28902__$1;
(statearr_28942_29018[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (44))){
var inst_28878 = (state_28902[(21)]);
var inst_28891 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28878);
var inst_28892 = cljs.core.pr_str.call(null,inst_28891);
var inst_28893 = [cljs.core.str("not required: "),cljs.core.str(inst_28892)].join('');
var inst_28894 = figwheel.client.utils.log.call(null,inst_28893);
var state_28902__$1 = state_28902;
var statearr_28943_29019 = state_28902__$1;
(statearr_28943_29019[(2)] = inst_28894);

(statearr_28943_29019[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (6))){
var inst_28797 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28944_29020 = state_28902__$1;
(statearr_28944_29020[(2)] = inst_28797);

(statearr_28944_29020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (28))){
var inst_28822 = (state_28902[(26)]);
var inst_28849 = (state_28902[(2)]);
var inst_28850 = cljs.core.not_empty.call(null,inst_28822);
var state_28902__$1 = (function (){var statearr_28945 = state_28902;
(statearr_28945[(29)] = inst_28849);

return statearr_28945;
})();
if(cljs.core.truth_(inst_28850)){
var statearr_28946_29021 = state_28902__$1;
(statearr_28946_29021[(1)] = (29));

} else {
var statearr_28947_29022 = state_28902__$1;
(statearr_28947_29022[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (25))){
var inst_28820 = (state_28902[(24)]);
var inst_28836 = (state_28902[(2)]);
var inst_28837 = cljs.core.not_empty.call(null,inst_28820);
var state_28902__$1 = (function (){var statearr_28948 = state_28902;
(statearr_28948[(30)] = inst_28836);

return statearr_28948;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_28949_29023 = state_28902__$1;
(statearr_28949_29023[(1)] = (26));

} else {
var statearr_28950_29024 = state_28902__$1;
(statearr_28950_29024[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (34))){
var inst_28871 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
if(cljs.core.truth_(inst_28871)){
var statearr_28951_29025 = state_28902__$1;
(statearr_28951_29025[(1)] = (38));

} else {
var statearr_28952_29026 = state_28902__$1;
(statearr_28952_29026[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (17))){
var state_28902__$1 = state_28902;
var statearr_28953_29027 = state_28902__$1;
(statearr_28953_29027[(2)] = recompile_dependents);

(statearr_28953_29027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (3))){
var state_28902__$1 = state_28902;
var statearr_28954_29028 = state_28902__$1;
(statearr_28954_29028[(2)] = null);

(statearr_28954_29028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (12))){
var inst_28793 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28955_29029 = state_28902__$1;
(statearr_28955_29029[(2)] = inst_28793);

(statearr_28955_29029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (2))){
var inst_28755 = (state_28902[(13)]);
var inst_28762 = cljs.core.seq.call(null,inst_28755);
var inst_28763 = inst_28762;
var inst_28764 = null;
var inst_28765 = (0);
var inst_28766 = (0);
var state_28902__$1 = (function (){var statearr_28956 = state_28902;
(statearr_28956[(7)] = inst_28764);

(statearr_28956[(8)] = inst_28765);

(statearr_28956[(9)] = inst_28766);

(statearr_28956[(10)] = inst_28763);

return statearr_28956;
})();
var statearr_28957_29030 = state_28902__$1;
(statearr_28957_29030[(2)] = null);

(statearr_28957_29030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (23))){
var inst_28816 = (state_28902[(19)]);
var inst_28822 = (state_28902[(26)]);
var inst_28824 = (state_28902[(23)]);
var inst_28820 = (state_28902[(24)]);
var inst_28819 = (state_28902[(25)]);
var inst_28827 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28829 = (function (){var all_files = inst_28816;
var res_SINGLEQUOTE_ = inst_28819;
var res = inst_28820;
var files_not_loaded = inst_28822;
var dependencies_that_loaded = inst_28824;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28819,inst_28827,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28828){
var map__28958 = p__28828;
var map__28958__$1 = ((((!((map__28958 == null)))?((((map__28958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28958):map__28958);
var request_url = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28819,inst_28827,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28830 = cljs.core.reverse.call(null,inst_28824);
var inst_28831 = cljs.core.map.call(null,inst_28829,inst_28830);
var inst_28832 = cljs.core.pr_str.call(null,inst_28831);
var inst_28833 = figwheel.client.utils.log.call(null,inst_28832);
var state_28902__$1 = (function (){var statearr_28960 = state_28902;
(statearr_28960[(31)] = inst_28827);

return statearr_28960;
})();
var statearr_28961_29031 = state_28902__$1;
(statearr_28961_29031[(2)] = inst_28833);

(statearr_28961_29031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (35))){
var state_28902__$1 = state_28902;
var statearr_28962_29032 = state_28902__$1;
(statearr_28962_29032[(2)] = true);

(statearr_28962_29032[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (19))){
var inst_28806 = (state_28902[(12)]);
var inst_28812 = figwheel.client.file_reloading.expand_files.call(null,inst_28806);
var state_28902__$1 = state_28902;
var statearr_28963_29033 = state_28902__$1;
(statearr_28963_29033[(2)] = inst_28812);

(statearr_28963_29033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (11))){
var state_28902__$1 = state_28902;
var statearr_28964_29034 = state_28902__$1;
(statearr_28964_29034[(2)] = null);

(statearr_28964_29034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (9))){
var inst_28795 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28965_29035 = state_28902__$1;
(statearr_28965_29035[(2)] = inst_28795);

(statearr_28965_29035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (5))){
var inst_28765 = (state_28902[(8)]);
var inst_28766 = (state_28902[(9)]);
var inst_28768 = (inst_28766 < inst_28765);
var inst_28769 = inst_28768;
var state_28902__$1 = state_28902;
if(cljs.core.truth_(inst_28769)){
var statearr_28966_29036 = state_28902__$1;
(statearr_28966_29036[(1)] = (7));

} else {
var statearr_28967_29037 = state_28902__$1;
(statearr_28967_29037[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (14))){
var inst_28776 = (state_28902[(22)]);
var inst_28785 = cljs.core.first.call(null,inst_28776);
var inst_28786 = figwheel.client.file_reloading.eval_body.call(null,inst_28785,opts);
var inst_28787 = cljs.core.next.call(null,inst_28776);
var inst_28763 = inst_28787;
var inst_28764 = null;
var inst_28765 = (0);
var inst_28766 = (0);
var state_28902__$1 = (function (){var statearr_28968 = state_28902;
(statearr_28968[(7)] = inst_28764);

(statearr_28968[(8)] = inst_28765);

(statearr_28968[(32)] = inst_28786);

(statearr_28968[(9)] = inst_28766);

(statearr_28968[(10)] = inst_28763);

return statearr_28968;
})();
var statearr_28969_29038 = state_28902__$1;
(statearr_28969_29038[(2)] = null);

(statearr_28969_29038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (45))){
var state_28902__$1 = state_28902;
var statearr_28970_29039 = state_28902__$1;
(statearr_28970_29039[(2)] = null);

(statearr_28970_29039[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (26))){
var inst_28816 = (state_28902[(19)]);
var inst_28822 = (state_28902[(26)]);
var inst_28824 = (state_28902[(23)]);
var inst_28820 = (state_28902[(24)]);
var inst_28819 = (state_28902[(25)]);
var inst_28839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28841 = (function (){var all_files = inst_28816;
var res_SINGLEQUOTE_ = inst_28819;
var res = inst_28820;
var files_not_loaded = inst_28822;
var dependencies_that_loaded = inst_28824;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28819,inst_28839,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28840){
var map__28971 = p__28840;
var map__28971__$1 = ((((!((map__28971 == null)))?((((map__28971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28971):map__28971);
var namespace = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28819,inst_28839,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28842 = cljs.core.map.call(null,inst_28841,inst_28820);
var inst_28843 = cljs.core.pr_str.call(null,inst_28842);
var inst_28844 = figwheel.client.utils.log.call(null,inst_28843);
var inst_28845 = (function (){var all_files = inst_28816;
var res_SINGLEQUOTE_ = inst_28819;
var res = inst_28820;
var files_not_loaded = inst_28822;
var dependencies_that_loaded = inst_28824;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28819,inst_28839,inst_28841,inst_28842,inst_28843,inst_28844,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28816,inst_28822,inst_28824,inst_28820,inst_28819,inst_28839,inst_28841,inst_28842,inst_28843,inst_28844,state_val_28903,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28846 = setTimeout(inst_28845,(10));
var state_28902__$1 = (function (){var statearr_28973 = state_28902;
(statearr_28973[(33)] = inst_28844);

(statearr_28973[(34)] = inst_28839);

return statearr_28973;
})();
var statearr_28974_29040 = state_28902__$1;
(statearr_28974_29040[(2)] = inst_28846);

(statearr_28974_29040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (16))){
var state_28902__$1 = state_28902;
var statearr_28975_29041 = state_28902__$1;
(statearr_28975_29041[(2)] = reload_dependents);

(statearr_28975_29041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (38))){
var inst_28856 = (state_28902[(16)]);
var inst_28873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28856);
var state_28902__$1 = state_28902;
var statearr_28976_29042 = state_28902__$1;
(statearr_28976_29042[(2)] = inst_28873);

(statearr_28976_29042[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (30))){
var state_28902__$1 = state_28902;
var statearr_28977_29043 = state_28902__$1;
(statearr_28977_29043[(2)] = null);

(statearr_28977_29043[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (10))){
var inst_28776 = (state_28902[(22)]);
var inst_28778 = cljs.core.chunked_seq_QMARK_.call(null,inst_28776);
var state_28902__$1 = state_28902;
if(inst_28778){
var statearr_28978_29044 = state_28902__$1;
(statearr_28978_29044[(1)] = (13));

} else {
var statearr_28979_29045 = state_28902__$1;
(statearr_28979_29045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (18))){
var inst_28810 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
if(cljs.core.truth_(inst_28810)){
var statearr_28980_29046 = state_28902__$1;
(statearr_28980_29046[(1)] = (19));

} else {
var statearr_28981_29047 = state_28902__$1;
(statearr_28981_29047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (42))){
var state_28902__$1 = state_28902;
var statearr_28982_29048 = state_28902__$1;
(statearr_28982_29048[(2)] = null);

(statearr_28982_29048[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (37))){
var inst_28868 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28983_29049 = state_28902__$1;
(statearr_28983_29049[(2)] = inst_28868);

(statearr_28983_29049[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (8))){
var inst_28776 = (state_28902[(22)]);
var inst_28763 = (state_28902[(10)]);
var inst_28776__$1 = cljs.core.seq.call(null,inst_28763);
var state_28902__$1 = (function (){var statearr_28984 = state_28902;
(statearr_28984[(22)] = inst_28776__$1);

return statearr_28984;
})();
if(inst_28776__$1){
var statearr_28985_29050 = state_28902__$1;
(statearr_28985_29050[(1)] = (10));

} else {
var statearr_28986_29051 = state_28902__$1;
(statearr_28986_29051[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25028__auto__,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto____0 = (function (){
var statearr_28990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28990[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto__);

(statearr_28990[(1)] = (1));

return statearr_28990;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto____1 = (function (state_28902){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_28902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e28991){if((e28991 instanceof Object)){
var ex__25032__auto__ = e28991;
var statearr_28992_29052 = state_28902;
(statearr_28992_29052[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29053 = state_28902;
state_28902 = G__29053;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto__ = function(state_28902){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto____1.call(this,state_28902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25142__auto__ = (function (){var statearr_28993 = f__25141__auto__.call(null);
(statearr_28993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_28993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__,map__28748,map__28748__$1,opts,before_jsload,on_jsload,reload_dependents,map__28749,map__28749__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25140__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29056,link){
var map__29059 = p__29056;
var map__29059__$1 = ((((!((map__29059 == null)))?((((map__29059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29059):map__29059);
var file = cljs.core.get.call(null,map__29059__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29059,map__29059__$1,file){
return (function (p1__29054_SHARP_,p2__29055_SHARP_){
if(cljs.core._EQ_.call(null,p1__29054_SHARP_,p2__29055_SHARP_)){
return p1__29054_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29059,map__29059__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29065){
var map__29066 = p__29065;
var map__29066__$1 = ((((!((map__29066 == null)))?((((map__29066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29066):map__29066);
var match_length = cljs.core.get.call(null,map__29066__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29066__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29061_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29061_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29068 = [];
var len__21062__auto___29071 = arguments.length;
var i__21063__auto___29072 = (0);
while(true){
if((i__21063__auto___29072 < len__21062__auto___29071)){
args29068.push((arguments[i__21063__auto___29072]));

var G__29073 = (i__21063__auto___29072 + (1));
i__21063__auto___29072 = G__29073;
continue;
} else {
}
break;
}

var G__29070 = args29068.length;
switch (G__29070) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29068.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29075_SHARP_,p2__29076_SHARP_){
return cljs.core.assoc.call(null,p1__29075_SHARP_,cljs.core.get.call(null,p2__29076_SHARP_,key),p2__29076_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29077){
var map__29080 = p__29077;
var map__29080__$1 = ((((!((map__29080 == null)))?((((map__29080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29080):map__29080);
var f_data = map__29080__$1;
var file = cljs.core.get.call(null,map__29080__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29082,files_msg){
var map__29089 = p__29082;
var map__29089__$1 = ((((!((map__29089 == null)))?((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29089):map__29089);
var opts = map__29089__$1;
var on_cssload = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29091_29095 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29092_29096 = null;
var count__29093_29097 = (0);
var i__29094_29098 = (0);
while(true){
if((i__29094_29098 < count__29093_29097)){
var f_29099 = cljs.core._nth.call(null,chunk__29092_29096,i__29094_29098);
figwheel.client.file_reloading.reload_css_file.call(null,f_29099);

var G__29100 = seq__29091_29095;
var G__29101 = chunk__29092_29096;
var G__29102 = count__29093_29097;
var G__29103 = (i__29094_29098 + (1));
seq__29091_29095 = G__29100;
chunk__29092_29096 = G__29101;
count__29093_29097 = G__29102;
i__29094_29098 = G__29103;
continue;
} else {
var temp__4657__auto___29104 = cljs.core.seq.call(null,seq__29091_29095);
if(temp__4657__auto___29104){
var seq__29091_29105__$1 = temp__4657__auto___29104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29091_29105__$1)){
var c__20798__auto___29106 = cljs.core.chunk_first.call(null,seq__29091_29105__$1);
var G__29107 = cljs.core.chunk_rest.call(null,seq__29091_29105__$1);
var G__29108 = c__20798__auto___29106;
var G__29109 = cljs.core.count.call(null,c__20798__auto___29106);
var G__29110 = (0);
seq__29091_29095 = G__29107;
chunk__29092_29096 = G__29108;
count__29093_29097 = G__29109;
i__29094_29098 = G__29110;
continue;
} else {
var f_29111 = cljs.core.first.call(null,seq__29091_29105__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29111);

var G__29112 = cljs.core.next.call(null,seq__29091_29105__$1);
var G__29113 = null;
var G__29114 = (0);
var G__29115 = (0);
seq__29091_29095 = G__29112;
chunk__29092_29096 = G__29113;
count__29093_29097 = G__29114;
i__29094_29098 = G__29115;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29089,map__29089__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29089,map__29089__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1539454396141