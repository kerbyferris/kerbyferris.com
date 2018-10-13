// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21167 = arguments.length;
var i__21063__auto___21168 = (0);
while(true){
if((i__21063__auto___21168 < len__21062__auto___21167)){
args__21069__auto__.push((arguments[i__21063__auto___21168]));

var G__21169 = (i__21063__auto___21168 + (1));
i__21063__auto___21168 = G__21169;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq21166){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21166));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21171 = arguments.length;
var i__21063__auto___21172 = (0);
while(true){
if((i__21063__auto___21172 < len__21062__auto___21171)){
args__21069__auto__.push((arguments[i__21063__auto___21172]));

var G__21173 = (i__21063__auto___21172 + (1));
i__21063__auto___21172 = G__21173;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq21170){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21170));
});

var g_QMARK__21174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_21175 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21174){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__21174))
,null));
var mkg_21176 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21174,g_21175){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__21174,g_21175))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__21174,g_21175,mkg_21176){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__21174).call(null,x);
});})(g_QMARK__21174,g_21175,mkg_21176))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__21174,g_21175,mkg_21176){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_21176).call(null,gfn);
});})(g_QMARK__21174,g_21175,mkg_21176))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__21174,g_21175,mkg_21176){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_21175).call(null,generator);
});})(g_QMARK__21174,g_21175,mkg_21176))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21138__auto___21194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21138__auto___21194){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21195 = arguments.length;
var i__21063__auto___21196 = (0);
while(true){
if((i__21063__auto___21196 < len__21062__auto___21195)){
args__21069__auto__.push((arguments[i__21063__auto___21196]));

var G__21197 = (i__21063__auto___21196 + (1));
i__21063__auto___21196 = G__21197;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21194))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21194),args);
});})(g__21138__auto___21194))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21138__auto___21194){
return (function (seq21177){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21177));
});})(g__21138__auto___21194))
;


var g__21138__auto___21198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21138__auto___21198){
return (function cljs$spec$impl$gen$list(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21199 = arguments.length;
var i__21063__auto___21200 = (0);
while(true){
if((i__21063__auto___21200 < len__21062__auto___21199)){
args__21069__auto__.push((arguments[i__21063__auto___21200]));

var G__21201 = (i__21063__auto___21200 + (1));
i__21063__auto___21200 = G__21201;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21198))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21198),args);
});})(g__21138__auto___21198))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21138__auto___21198){
return (function (seq21178){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21178));
});})(g__21138__auto___21198))
;


var g__21138__auto___21202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21138__auto___21202){
return (function cljs$spec$impl$gen$map(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21203 = arguments.length;
var i__21063__auto___21204 = (0);
while(true){
if((i__21063__auto___21204 < len__21062__auto___21203)){
args__21069__auto__.push((arguments[i__21063__auto___21204]));

var G__21205 = (i__21063__auto___21204 + (1));
i__21063__auto___21204 = G__21205;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21202))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21202),args);
});})(g__21138__auto___21202))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21138__auto___21202){
return (function (seq21179){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21179));
});})(g__21138__auto___21202))
;


var g__21138__auto___21206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21138__auto___21206){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21207 = arguments.length;
var i__21063__auto___21208 = (0);
while(true){
if((i__21063__auto___21208 < len__21062__auto___21207)){
args__21069__auto__.push((arguments[i__21063__auto___21208]));

var G__21209 = (i__21063__auto___21208 + (1));
i__21063__auto___21208 = G__21209;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21206))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21206),args);
});})(g__21138__auto___21206))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21138__auto___21206){
return (function (seq21180){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21180));
});})(g__21138__auto___21206))
;


var g__21138__auto___21210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21138__auto___21210){
return (function cljs$spec$impl$gen$set(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21211 = arguments.length;
var i__21063__auto___21212 = (0);
while(true){
if((i__21063__auto___21212 < len__21062__auto___21211)){
args__21069__auto__.push((arguments[i__21063__auto___21212]));

var G__21213 = (i__21063__auto___21212 + (1));
i__21063__auto___21212 = G__21213;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21210))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21210),args);
});})(g__21138__auto___21210))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21138__auto___21210){
return (function (seq21181){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21181));
});})(g__21138__auto___21210))
;


var g__21138__auto___21214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21138__auto___21214){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21215 = arguments.length;
var i__21063__auto___21216 = (0);
while(true){
if((i__21063__auto___21216 < len__21062__auto___21215)){
args__21069__auto__.push((arguments[i__21063__auto___21216]));

var G__21217 = (i__21063__auto___21216 + (1));
i__21063__auto___21216 = G__21217;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21214))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21214),args);
});})(g__21138__auto___21214))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21138__auto___21214){
return (function (seq21182){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21182));
});})(g__21138__auto___21214))
;


var g__21138__auto___21218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21138__auto___21218){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21219 = arguments.length;
var i__21063__auto___21220 = (0);
while(true){
if((i__21063__auto___21220 < len__21062__auto___21219)){
args__21069__auto__.push((arguments[i__21063__auto___21220]));

var G__21221 = (i__21063__auto___21220 + (1));
i__21063__auto___21220 = G__21221;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21218))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21218),args);
});})(g__21138__auto___21218))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21138__auto___21218){
return (function (seq21183){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21183));
});})(g__21138__auto___21218))
;


var g__21138__auto___21222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21138__auto___21222){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21223 = arguments.length;
var i__21063__auto___21224 = (0);
while(true){
if((i__21063__auto___21224 < len__21062__auto___21223)){
args__21069__auto__.push((arguments[i__21063__auto___21224]));

var G__21225 = (i__21063__auto___21224 + (1));
i__21063__auto___21224 = G__21225;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21222))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21222),args);
});})(g__21138__auto___21222))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21138__auto___21222){
return (function (seq21184){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21184));
});})(g__21138__auto___21222))
;


var g__21138__auto___21226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21138__auto___21226){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21227 = arguments.length;
var i__21063__auto___21228 = (0);
while(true){
if((i__21063__auto___21228 < len__21062__auto___21227)){
args__21069__auto__.push((arguments[i__21063__auto___21228]));

var G__21229 = (i__21063__auto___21228 + (1));
i__21063__auto___21228 = G__21229;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21226))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21226),args);
});})(g__21138__auto___21226))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21138__auto___21226){
return (function (seq21185){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21185));
});})(g__21138__auto___21226))
;


var g__21138__auto___21230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21138__auto___21230){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21231 = arguments.length;
var i__21063__auto___21232 = (0);
while(true){
if((i__21063__auto___21232 < len__21062__auto___21231)){
args__21069__auto__.push((arguments[i__21063__auto___21232]));

var G__21233 = (i__21063__auto___21232 + (1));
i__21063__auto___21232 = G__21233;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21230))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21230),args);
});})(g__21138__auto___21230))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21138__auto___21230){
return (function (seq21186){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21186));
});})(g__21138__auto___21230))
;


var g__21138__auto___21234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21138__auto___21234){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21235 = arguments.length;
var i__21063__auto___21236 = (0);
while(true){
if((i__21063__auto___21236 < len__21062__auto___21235)){
args__21069__auto__.push((arguments[i__21063__auto___21236]));

var G__21237 = (i__21063__auto___21236 + (1));
i__21063__auto___21236 = G__21237;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21234))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21234),args);
});})(g__21138__auto___21234))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21138__auto___21234){
return (function (seq21187){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21187));
});})(g__21138__auto___21234))
;


var g__21138__auto___21238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21138__auto___21238){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21239 = arguments.length;
var i__21063__auto___21240 = (0);
while(true){
if((i__21063__auto___21240 < len__21062__auto___21239)){
args__21069__auto__.push((arguments[i__21063__auto___21240]));

var G__21241 = (i__21063__auto___21240 + (1));
i__21063__auto___21240 = G__21241;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21238))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21238),args);
});})(g__21138__auto___21238))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21138__auto___21238){
return (function (seq21188){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21188));
});})(g__21138__auto___21238))
;


var g__21138__auto___21242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21138__auto___21242){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21243 = arguments.length;
var i__21063__auto___21244 = (0);
while(true){
if((i__21063__auto___21244 < len__21062__auto___21243)){
args__21069__auto__.push((arguments[i__21063__auto___21244]));

var G__21245 = (i__21063__auto___21244 + (1));
i__21063__auto___21244 = G__21245;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21242))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21242),args);
});})(g__21138__auto___21242))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21138__auto___21242){
return (function (seq21189){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21189));
});})(g__21138__auto___21242))
;


var g__21138__auto___21246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21138__auto___21246){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21247 = arguments.length;
var i__21063__auto___21248 = (0);
while(true){
if((i__21063__auto___21248 < len__21062__auto___21247)){
args__21069__auto__.push((arguments[i__21063__auto___21248]));

var G__21249 = (i__21063__auto___21248 + (1));
i__21063__auto___21248 = G__21249;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21246))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21246),args);
});})(g__21138__auto___21246))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21138__auto___21246){
return (function (seq21190){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21190));
});})(g__21138__auto___21246))
;


var g__21138__auto___21250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21138__auto___21250){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21251 = arguments.length;
var i__21063__auto___21252 = (0);
while(true){
if((i__21063__auto___21252 < len__21062__auto___21251)){
args__21069__auto__.push((arguments[i__21063__auto___21252]));

var G__21253 = (i__21063__auto___21252 + (1));
i__21063__auto___21252 = G__21253;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21250))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21250),args);
});})(g__21138__auto___21250))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21138__auto___21250){
return (function (seq21191){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21191));
});})(g__21138__auto___21250))
;


var g__21138__auto___21254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21138__auto___21254){
return (function cljs$spec$impl$gen$return(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21255 = arguments.length;
var i__21063__auto___21256 = (0);
while(true){
if((i__21063__auto___21256 < len__21062__auto___21255)){
args__21069__auto__.push((arguments[i__21063__auto___21256]));

var G__21257 = (i__21063__auto___21256 + (1));
i__21063__auto___21256 = G__21257;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21254))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21254),args);
});})(g__21138__auto___21254))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21138__auto___21254){
return (function (seq21192){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21192));
});})(g__21138__auto___21254))
;


var g__21138__auto___21258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21138__auto___21258){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21259 = arguments.length;
var i__21063__auto___21260 = (0);
while(true){
if((i__21063__auto___21260 < len__21062__auto___21259)){
args__21069__auto__.push((arguments[i__21063__auto___21260]));

var G__21261 = (i__21063__auto___21260 + (1));
i__21063__auto___21260 = G__21261;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21138__auto___21258))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21138__auto___21258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21138__auto___21258),args);
});})(g__21138__auto___21258))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21138__auto___21258){
return (function (seq21193){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21193));
});})(g__21138__auto___21258))
;

var g__21151__auto___21283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21151__auto___21283){
return (function cljs$spec$impl$gen$any(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21284 = arguments.length;
var i__21063__auto___21285 = (0);
while(true){
if((i__21063__auto___21285 < len__21062__auto___21284)){
args__21069__auto__.push((arguments[i__21063__auto___21285]));

var G__21286 = (i__21063__auto___21285 + (1));
i__21063__auto___21285 = G__21286;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21283))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21283){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21283);
});})(g__21151__auto___21283))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21151__auto___21283){
return (function (seq21262){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21262));
});})(g__21151__auto___21283))
;


var g__21151__auto___21287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21151__auto___21287){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21288 = arguments.length;
var i__21063__auto___21289 = (0);
while(true){
if((i__21063__auto___21289 < len__21062__auto___21288)){
args__21069__auto__.push((arguments[i__21063__auto___21289]));

var G__21290 = (i__21063__auto___21289 + (1));
i__21063__auto___21289 = G__21290;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21287))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21287){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21287);
});})(g__21151__auto___21287))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21151__auto___21287){
return (function (seq21263){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21263));
});})(g__21151__auto___21287))
;


var g__21151__auto___21291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21151__auto___21291){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21292 = arguments.length;
var i__21063__auto___21293 = (0);
while(true){
if((i__21063__auto___21293 < len__21062__auto___21292)){
args__21069__auto__.push((arguments[i__21063__auto___21293]));

var G__21294 = (i__21063__auto___21293 + (1));
i__21063__auto___21293 = G__21294;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21291))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21291){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21291);
});})(g__21151__auto___21291))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21151__auto___21291){
return (function (seq21264){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21264));
});})(g__21151__auto___21291))
;


var g__21151__auto___21295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21151__auto___21295){
return (function cljs$spec$impl$gen$char(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21296 = arguments.length;
var i__21063__auto___21297 = (0);
while(true){
if((i__21063__auto___21297 < len__21062__auto___21296)){
args__21069__auto__.push((arguments[i__21063__auto___21297]));

var G__21298 = (i__21063__auto___21297 + (1));
i__21063__auto___21297 = G__21298;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21295))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21295){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21295);
});})(g__21151__auto___21295))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21151__auto___21295){
return (function (seq21265){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21265));
});})(g__21151__auto___21295))
;


var g__21151__auto___21299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21151__auto___21299){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21300 = arguments.length;
var i__21063__auto___21301 = (0);
while(true){
if((i__21063__auto___21301 < len__21062__auto___21300)){
args__21069__auto__.push((arguments[i__21063__auto___21301]));

var G__21302 = (i__21063__auto___21301 + (1));
i__21063__auto___21301 = G__21302;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21299))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21299){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21299);
});})(g__21151__auto___21299))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21151__auto___21299){
return (function (seq21266){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21266));
});})(g__21151__auto___21299))
;


var g__21151__auto___21303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21151__auto___21303){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21304 = arguments.length;
var i__21063__auto___21305 = (0);
while(true){
if((i__21063__auto___21305 < len__21062__auto___21304)){
args__21069__auto__.push((arguments[i__21063__auto___21305]));

var G__21306 = (i__21063__auto___21305 + (1));
i__21063__auto___21305 = G__21306;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21303))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21303){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21303);
});})(g__21151__auto___21303))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21151__auto___21303){
return (function (seq21267){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21267));
});})(g__21151__auto___21303))
;


var g__21151__auto___21307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21151__auto___21307){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21308 = arguments.length;
var i__21063__auto___21309 = (0);
while(true){
if((i__21063__auto___21309 < len__21062__auto___21308)){
args__21069__auto__.push((arguments[i__21063__auto___21309]));

var G__21310 = (i__21063__auto___21309 + (1));
i__21063__auto___21309 = G__21310;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21307))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21307){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21307);
});})(g__21151__auto___21307))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21151__auto___21307){
return (function (seq21268){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21268));
});})(g__21151__auto___21307))
;


var g__21151__auto___21311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21151__auto___21311){
return (function cljs$spec$impl$gen$double(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21312 = arguments.length;
var i__21063__auto___21313 = (0);
while(true){
if((i__21063__auto___21313 < len__21062__auto___21312)){
args__21069__auto__.push((arguments[i__21063__auto___21313]));

var G__21314 = (i__21063__auto___21313 + (1));
i__21063__auto___21313 = G__21314;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21311))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21311){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21311);
});})(g__21151__auto___21311))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21151__auto___21311){
return (function (seq21269){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21269));
});})(g__21151__auto___21311))
;


var g__21151__auto___21315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21151__auto___21315){
return (function cljs$spec$impl$gen$int(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21316 = arguments.length;
var i__21063__auto___21317 = (0);
while(true){
if((i__21063__auto___21317 < len__21062__auto___21316)){
args__21069__auto__.push((arguments[i__21063__auto___21317]));

var G__21318 = (i__21063__auto___21317 + (1));
i__21063__auto___21317 = G__21318;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21315))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21315){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21315);
});})(g__21151__auto___21315))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21151__auto___21315){
return (function (seq21270){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21270));
});})(g__21151__auto___21315))
;


var g__21151__auto___21319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21151__auto___21319){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21320 = arguments.length;
var i__21063__auto___21321 = (0);
while(true){
if((i__21063__auto___21321 < len__21062__auto___21320)){
args__21069__auto__.push((arguments[i__21063__auto___21321]));

var G__21322 = (i__21063__auto___21321 + (1));
i__21063__auto___21321 = G__21322;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21319))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21319){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21319);
});})(g__21151__auto___21319))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21151__auto___21319){
return (function (seq21271){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21271));
});})(g__21151__auto___21319))
;


var g__21151__auto___21323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21151__auto___21323){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21324 = arguments.length;
var i__21063__auto___21325 = (0);
while(true){
if((i__21063__auto___21325 < len__21062__auto___21324)){
args__21069__auto__.push((arguments[i__21063__auto___21325]));

var G__21326 = (i__21063__auto___21325 + (1));
i__21063__auto___21325 = G__21326;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21323))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21323){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21323);
});})(g__21151__auto___21323))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21151__auto___21323){
return (function (seq21272){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21272));
});})(g__21151__auto___21323))
;


var g__21151__auto___21327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21151__auto___21327){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21328 = arguments.length;
var i__21063__auto___21329 = (0);
while(true){
if((i__21063__auto___21329 < len__21062__auto___21328)){
args__21069__auto__.push((arguments[i__21063__auto___21329]));

var G__21330 = (i__21063__auto___21329 + (1));
i__21063__auto___21329 = G__21330;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21327))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21327){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21327);
});})(g__21151__auto___21327))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21151__auto___21327){
return (function (seq21273){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21273));
});})(g__21151__auto___21327))
;


var g__21151__auto___21331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21151__auto___21331){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21332 = arguments.length;
var i__21063__auto___21333 = (0);
while(true){
if((i__21063__auto___21333 < len__21062__auto___21332)){
args__21069__auto__.push((arguments[i__21063__auto___21333]));

var G__21334 = (i__21063__auto___21333 + (1));
i__21063__auto___21333 = G__21334;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21331))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21331){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21331);
});})(g__21151__auto___21331))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21151__auto___21331){
return (function (seq21274){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21274));
});})(g__21151__auto___21331))
;


var g__21151__auto___21335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21151__auto___21335){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21336 = arguments.length;
var i__21063__auto___21337 = (0);
while(true){
if((i__21063__auto___21337 < len__21062__auto___21336)){
args__21069__auto__.push((arguments[i__21063__auto___21337]));

var G__21338 = (i__21063__auto___21337 + (1));
i__21063__auto___21337 = G__21338;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21335))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21335){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21335);
});})(g__21151__auto___21335))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21151__auto___21335){
return (function (seq21275){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21275));
});})(g__21151__auto___21335))
;


var g__21151__auto___21339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21151__auto___21339){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21340 = arguments.length;
var i__21063__auto___21341 = (0);
while(true){
if((i__21063__auto___21341 < len__21062__auto___21340)){
args__21069__auto__.push((arguments[i__21063__auto___21341]));

var G__21342 = (i__21063__auto___21341 + (1));
i__21063__auto___21341 = G__21342;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21339))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21339){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21339);
});})(g__21151__auto___21339))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21151__auto___21339){
return (function (seq21276){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21276));
});})(g__21151__auto___21339))
;


var g__21151__auto___21343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21151__auto___21343){
return (function cljs$spec$impl$gen$string(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21344 = arguments.length;
var i__21063__auto___21345 = (0);
while(true){
if((i__21063__auto___21345 < len__21062__auto___21344)){
args__21069__auto__.push((arguments[i__21063__auto___21345]));

var G__21346 = (i__21063__auto___21345 + (1));
i__21063__auto___21345 = G__21346;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21343))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21343){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21343);
});})(g__21151__auto___21343))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21151__auto___21343){
return (function (seq21277){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21277));
});})(g__21151__auto___21343))
;


var g__21151__auto___21347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21151__auto___21347){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21348 = arguments.length;
var i__21063__auto___21349 = (0);
while(true){
if((i__21063__auto___21349 < len__21062__auto___21348)){
args__21069__auto__.push((arguments[i__21063__auto___21349]));

var G__21350 = (i__21063__auto___21349 + (1));
i__21063__auto___21349 = G__21350;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21347))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21347){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21347);
});})(g__21151__auto___21347))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21151__auto___21347){
return (function (seq21278){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21278));
});})(g__21151__auto___21347))
;


var g__21151__auto___21351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21151__auto___21351){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21352 = arguments.length;
var i__21063__auto___21353 = (0);
while(true){
if((i__21063__auto___21353 < len__21062__auto___21352)){
args__21069__auto__.push((arguments[i__21063__auto___21353]));

var G__21354 = (i__21063__auto___21353 + (1));
i__21063__auto___21353 = G__21354;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21351))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21351){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21351);
});})(g__21151__auto___21351))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21151__auto___21351){
return (function (seq21279){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21279));
});})(g__21151__auto___21351))
;


var g__21151__auto___21355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21151__auto___21355){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21356 = arguments.length;
var i__21063__auto___21357 = (0);
while(true){
if((i__21063__auto___21357 < len__21062__auto___21356)){
args__21069__auto__.push((arguments[i__21063__auto___21357]));

var G__21358 = (i__21063__auto___21357 + (1));
i__21063__auto___21357 = G__21358;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21355))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21355){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21355);
});})(g__21151__auto___21355))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21151__auto___21355){
return (function (seq21280){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21280));
});})(g__21151__auto___21355))
;


var g__21151__auto___21359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21151__auto___21359){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21360 = arguments.length;
var i__21063__auto___21361 = (0);
while(true){
if((i__21063__auto___21361 < len__21062__auto___21360)){
args__21069__auto__.push((arguments[i__21063__auto___21361]));

var G__21362 = (i__21063__auto___21361 + (1));
i__21063__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21359))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21359){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21359);
});})(g__21151__auto___21359))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21151__auto___21359){
return (function (seq21281){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21281));
});})(g__21151__auto___21359))
;


var g__21151__auto___21363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21151__auto___21363){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21364 = arguments.length;
var i__21063__auto___21365 = (0);
while(true){
if((i__21063__auto___21365 < len__21062__auto___21364)){
args__21069__auto__.push((arguments[i__21063__auto___21365]));

var G__21366 = (i__21063__auto___21365 + (1));
i__21063__auto___21365 = G__21366;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});})(g__21151__auto___21363))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21151__auto___21363){
return (function (args){
return cljs.core.deref.call(null,g__21151__auto___21363);
});})(g__21151__auto___21363))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21151__auto___21363){
return (function (seq21282){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21282));
});})(g__21151__auto___21363))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21069__auto__ = [];
var len__21062__auto___21369 = arguments.length;
var i__21063__auto___21370 = (0);
while(true){
if((i__21063__auto___21370 < len__21062__auto___21369)){
args__21069__auto__.push((arguments[i__21063__auto___21370]));

var G__21371 = (i__21063__auto___21370 + (1));
i__21063__auto___21370 = G__21371;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__21367_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__21367_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq21368){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21368));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__21372_SHARP_){
return (new Date(p1__21372_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1539454390549