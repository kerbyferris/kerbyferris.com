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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__21175__auto__,writer__21176__auto__,opt__21177__auto__){
return cljs.core._write.call(null,writer__21176__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__21651__auto__ = [];
var len__21644__auto___23722 = arguments.length;
var i__21645__auto___23723 = (0);
while(true){
if((i__21645__auto___23723 < len__21644__auto___23722)){
args__21651__auto__.push((arguments[i__21645__auto___23723]));

var G__23724 = (i__21645__auto___23723 + (1));
i__21645__auto___23723 = G__23724;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq23721){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23721));
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
var args__21651__auto__ = [];
var len__21644__auto___23726 = arguments.length;
var i__21645__auto___23727 = (0);
while(true){
if((i__21645__auto___23727 < len__21644__auto___23726)){
args__21651__auto__.push((arguments[i__21645__auto___23727]));

var G__23728 = (i__21645__auto___23727 + (1));
i__21645__auto___23727 = G__23728;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq23725){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23725));
});

var g_QMARK__23729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_23730 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23729){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23729))
,null));
var mkg_23731 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23729,g_23730){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23729,g_23730))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__23729,g_23730,mkg_23731){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__23729).call(null,x);
});})(g_QMARK__23729,g_23730,mkg_23731))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__23729,g_23730,mkg_23731){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_23731).call(null,gfn);
});})(g_QMARK__23729,g_23730,mkg_23731))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__23729,g_23730,mkg_23731){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_23730).call(null,generator);
});})(g_QMARK__23729,g_23730,mkg_23731))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21720__auto___23749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21720__auto___23749){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23750 = arguments.length;
var i__21645__auto___23751 = (0);
while(true){
if((i__21645__auto___23751 < len__21644__auto___23750)){
args__21651__auto__.push((arguments[i__21645__auto___23751]));

var G__23752 = (i__21645__auto___23751 + (1));
i__21645__auto___23751 = G__23752;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23749))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23749){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23749),args);
});})(g__21720__auto___23749))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21720__auto___23749){
return (function (seq23732){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23732));
});})(g__21720__auto___23749))
;


var g__21720__auto___23753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21720__auto___23753){
return (function cljs$spec$impl$gen$list(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23754 = arguments.length;
var i__21645__auto___23755 = (0);
while(true){
if((i__21645__auto___23755 < len__21644__auto___23754)){
args__21651__auto__.push((arguments[i__21645__auto___23755]));

var G__23756 = (i__21645__auto___23755 + (1));
i__21645__auto___23755 = G__23756;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23753))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23753),args);
});})(g__21720__auto___23753))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21720__auto___23753){
return (function (seq23733){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23733));
});})(g__21720__auto___23753))
;


var g__21720__auto___23757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21720__auto___23757){
return (function cljs$spec$impl$gen$map(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23758 = arguments.length;
var i__21645__auto___23759 = (0);
while(true){
if((i__21645__auto___23759 < len__21644__auto___23758)){
args__21651__auto__.push((arguments[i__21645__auto___23759]));

var G__23760 = (i__21645__auto___23759 + (1));
i__21645__auto___23759 = G__23760;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23757))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23757),args);
});})(g__21720__auto___23757))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21720__auto___23757){
return (function (seq23734){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23734));
});})(g__21720__auto___23757))
;


var g__21720__auto___23761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21720__auto___23761){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23762 = arguments.length;
var i__21645__auto___23763 = (0);
while(true){
if((i__21645__auto___23763 < len__21644__auto___23762)){
args__21651__auto__.push((arguments[i__21645__auto___23763]));

var G__23764 = (i__21645__auto___23763 + (1));
i__21645__auto___23763 = G__23764;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23761))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23761){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23761),args);
});})(g__21720__auto___23761))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21720__auto___23761){
return (function (seq23735){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23735));
});})(g__21720__auto___23761))
;


var g__21720__auto___23765 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21720__auto___23765){
return (function cljs$spec$impl$gen$set(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23766 = arguments.length;
var i__21645__auto___23767 = (0);
while(true){
if((i__21645__auto___23767 < len__21644__auto___23766)){
args__21651__auto__.push((arguments[i__21645__auto___23767]));

var G__23768 = (i__21645__auto___23767 + (1));
i__21645__auto___23767 = G__23768;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23765))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23765){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23765),args);
});})(g__21720__auto___23765))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21720__auto___23765){
return (function (seq23736){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23736));
});})(g__21720__auto___23765))
;


var g__21720__auto___23769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21720__auto___23769){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23770 = arguments.length;
var i__21645__auto___23771 = (0);
while(true){
if((i__21645__auto___23771 < len__21644__auto___23770)){
args__21651__auto__.push((arguments[i__21645__auto___23771]));

var G__23772 = (i__21645__auto___23771 + (1));
i__21645__auto___23771 = G__23772;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23769))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23769){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23769),args);
});})(g__21720__auto___23769))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21720__auto___23769){
return (function (seq23737){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23737));
});})(g__21720__auto___23769))
;


var g__21720__auto___23773 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21720__auto___23773){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23774 = arguments.length;
var i__21645__auto___23775 = (0);
while(true){
if((i__21645__auto___23775 < len__21644__auto___23774)){
args__21651__auto__.push((arguments[i__21645__auto___23775]));

var G__23776 = (i__21645__auto___23775 + (1));
i__21645__auto___23775 = G__23776;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23773))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23773){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23773),args);
});})(g__21720__auto___23773))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21720__auto___23773){
return (function (seq23738){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23738));
});})(g__21720__auto___23773))
;


var g__21720__auto___23777 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21720__auto___23777){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23778 = arguments.length;
var i__21645__auto___23779 = (0);
while(true){
if((i__21645__auto___23779 < len__21644__auto___23778)){
args__21651__auto__.push((arguments[i__21645__auto___23779]));

var G__23780 = (i__21645__auto___23779 + (1));
i__21645__auto___23779 = G__23780;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23777))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23777){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23777),args);
});})(g__21720__auto___23777))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21720__auto___23777){
return (function (seq23739){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23739));
});})(g__21720__auto___23777))
;


var g__21720__auto___23781 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21720__auto___23781){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23782 = arguments.length;
var i__21645__auto___23783 = (0);
while(true){
if((i__21645__auto___23783 < len__21644__auto___23782)){
args__21651__auto__.push((arguments[i__21645__auto___23783]));

var G__23784 = (i__21645__auto___23783 + (1));
i__21645__auto___23783 = G__23784;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23781))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23781){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23781),args);
});})(g__21720__auto___23781))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21720__auto___23781){
return (function (seq23740){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23740));
});})(g__21720__auto___23781))
;


var g__21720__auto___23785 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21720__auto___23785){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23786 = arguments.length;
var i__21645__auto___23787 = (0);
while(true){
if((i__21645__auto___23787 < len__21644__auto___23786)){
args__21651__auto__.push((arguments[i__21645__auto___23787]));

var G__23788 = (i__21645__auto___23787 + (1));
i__21645__auto___23787 = G__23788;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23785))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23785){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23785),args);
});})(g__21720__auto___23785))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21720__auto___23785){
return (function (seq23741){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23741));
});})(g__21720__auto___23785))
;


var g__21720__auto___23789 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21720__auto___23789){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23790 = arguments.length;
var i__21645__auto___23791 = (0);
while(true){
if((i__21645__auto___23791 < len__21644__auto___23790)){
args__21651__auto__.push((arguments[i__21645__auto___23791]));

var G__23792 = (i__21645__auto___23791 + (1));
i__21645__auto___23791 = G__23792;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23789))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23789){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23789),args);
});})(g__21720__auto___23789))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21720__auto___23789){
return (function (seq23742){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23742));
});})(g__21720__auto___23789))
;


var g__21720__auto___23793 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21720__auto___23793){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23794 = arguments.length;
var i__21645__auto___23795 = (0);
while(true){
if((i__21645__auto___23795 < len__21644__auto___23794)){
args__21651__auto__.push((arguments[i__21645__auto___23795]));

var G__23796 = (i__21645__auto___23795 + (1));
i__21645__auto___23795 = G__23796;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23793))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23793){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23793),args);
});})(g__21720__auto___23793))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21720__auto___23793){
return (function (seq23743){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23743));
});})(g__21720__auto___23793))
;


var g__21720__auto___23797 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21720__auto___23797){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23798 = arguments.length;
var i__21645__auto___23799 = (0);
while(true){
if((i__21645__auto___23799 < len__21644__auto___23798)){
args__21651__auto__.push((arguments[i__21645__auto___23799]));

var G__23800 = (i__21645__auto___23799 + (1));
i__21645__auto___23799 = G__23800;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23797))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23797){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23797),args);
});})(g__21720__auto___23797))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21720__auto___23797){
return (function (seq23744){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23744));
});})(g__21720__auto___23797))
;


var g__21720__auto___23801 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21720__auto___23801){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23802 = arguments.length;
var i__21645__auto___23803 = (0);
while(true){
if((i__21645__auto___23803 < len__21644__auto___23802)){
args__21651__auto__.push((arguments[i__21645__auto___23803]));

var G__23804 = (i__21645__auto___23803 + (1));
i__21645__auto___23803 = G__23804;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23801))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23801){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23801),args);
});})(g__21720__auto___23801))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21720__auto___23801){
return (function (seq23745){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23745));
});})(g__21720__auto___23801))
;


var g__21720__auto___23805 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21720__auto___23805){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23806 = arguments.length;
var i__21645__auto___23807 = (0);
while(true){
if((i__21645__auto___23807 < len__21644__auto___23806)){
args__21651__auto__.push((arguments[i__21645__auto___23807]));

var G__23808 = (i__21645__auto___23807 + (1));
i__21645__auto___23807 = G__23808;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23805))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23805){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23805),args);
});})(g__21720__auto___23805))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21720__auto___23805){
return (function (seq23746){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23746));
});})(g__21720__auto___23805))
;


var g__21720__auto___23809 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21720__auto___23809){
return (function cljs$spec$impl$gen$return(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23810 = arguments.length;
var i__21645__auto___23811 = (0);
while(true){
if((i__21645__auto___23811 < len__21644__auto___23810)){
args__21651__auto__.push((arguments[i__21645__auto___23811]));

var G__23812 = (i__21645__auto___23811 + (1));
i__21645__auto___23811 = G__23812;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23809))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23809){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23809),args);
});})(g__21720__auto___23809))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21720__auto___23809){
return (function (seq23747){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23747));
});})(g__21720__auto___23809))
;


var g__21720__auto___23813 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21720__auto___23813){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23814 = arguments.length;
var i__21645__auto___23815 = (0);
while(true){
if((i__21645__auto___23815 < len__21644__auto___23814)){
args__21651__auto__.push((arguments[i__21645__auto___23815]));

var G__23816 = (i__21645__auto___23815 + (1));
i__21645__auto___23815 = G__23816;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21720__auto___23813))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21720__auto___23813){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21720__auto___23813),args);
});})(g__21720__auto___23813))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21720__auto___23813){
return (function (seq23748){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23748));
});})(g__21720__auto___23813))
;

var g__21733__auto___23838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21733__auto___23838){
return (function cljs$spec$impl$gen$any(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23839 = arguments.length;
var i__21645__auto___23840 = (0);
while(true){
if((i__21645__auto___23840 < len__21644__auto___23839)){
args__21651__auto__.push((arguments[i__21645__auto___23840]));

var G__23841 = (i__21645__auto___23840 + (1));
i__21645__auto___23840 = G__23841;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23838))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23838){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23838);
});})(g__21733__auto___23838))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21733__auto___23838){
return (function (seq23817){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23817));
});})(g__21733__auto___23838))
;


var g__21733__auto___23842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21733__auto___23842){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23843 = arguments.length;
var i__21645__auto___23844 = (0);
while(true){
if((i__21645__auto___23844 < len__21644__auto___23843)){
args__21651__auto__.push((arguments[i__21645__auto___23844]));

var G__23845 = (i__21645__auto___23844 + (1));
i__21645__auto___23844 = G__23845;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23842))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23842){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23842);
});})(g__21733__auto___23842))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21733__auto___23842){
return (function (seq23818){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23818));
});})(g__21733__auto___23842))
;


var g__21733__auto___23846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21733__auto___23846){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23847 = arguments.length;
var i__21645__auto___23848 = (0);
while(true){
if((i__21645__auto___23848 < len__21644__auto___23847)){
args__21651__auto__.push((arguments[i__21645__auto___23848]));

var G__23849 = (i__21645__auto___23848 + (1));
i__21645__auto___23848 = G__23849;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23846))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23846){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23846);
});})(g__21733__auto___23846))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21733__auto___23846){
return (function (seq23819){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23819));
});})(g__21733__auto___23846))
;


var g__21733__auto___23850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21733__auto___23850){
return (function cljs$spec$impl$gen$char(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23851 = arguments.length;
var i__21645__auto___23852 = (0);
while(true){
if((i__21645__auto___23852 < len__21644__auto___23851)){
args__21651__auto__.push((arguments[i__21645__auto___23852]));

var G__23853 = (i__21645__auto___23852 + (1));
i__21645__auto___23852 = G__23853;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23850))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23850){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23850);
});})(g__21733__auto___23850))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21733__auto___23850){
return (function (seq23820){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23820));
});})(g__21733__auto___23850))
;


var g__21733__auto___23854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21733__auto___23854){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23855 = arguments.length;
var i__21645__auto___23856 = (0);
while(true){
if((i__21645__auto___23856 < len__21644__auto___23855)){
args__21651__auto__.push((arguments[i__21645__auto___23856]));

var G__23857 = (i__21645__auto___23856 + (1));
i__21645__auto___23856 = G__23857;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23854))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23854){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23854);
});})(g__21733__auto___23854))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21733__auto___23854){
return (function (seq23821){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23821));
});})(g__21733__auto___23854))
;


var g__21733__auto___23858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21733__auto___23858){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23859 = arguments.length;
var i__21645__auto___23860 = (0);
while(true){
if((i__21645__auto___23860 < len__21644__auto___23859)){
args__21651__auto__.push((arguments[i__21645__auto___23860]));

var G__23861 = (i__21645__auto___23860 + (1));
i__21645__auto___23860 = G__23861;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23858))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23858){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23858);
});})(g__21733__auto___23858))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21733__auto___23858){
return (function (seq23822){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23822));
});})(g__21733__auto___23858))
;


var g__21733__auto___23862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21733__auto___23862){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23863 = arguments.length;
var i__21645__auto___23864 = (0);
while(true){
if((i__21645__auto___23864 < len__21644__auto___23863)){
args__21651__auto__.push((arguments[i__21645__auto___23864]));

var G__23865 = (i__21645__auto___23864 + (1));
i__21645__auto___23864 = G__23865;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23862))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23862){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23862);
});})(g__21733__auto___23862))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21733__auto___23862){
return (function (seq23823){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23823));
});})(g__21733__auto___23862))
;


var g__21733__auto___23866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21733__auto___23866){
return (function cljs$spec$impl$gen$double(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23867 = arguments.length;
var i__21645__auto___23868 = (0);
while(true){
if((i__21645__auto___23868 < len__21644__auto___23867)){
args__21651__auto__.push((arguments[i__21645__auto___23868]));

var G__23869 = (i__21645__auto___23868 + (1));
i__21645__auto___23868 = G__23869;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23866))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23866){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23866);
});})(g__21733__auto___23866))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21733__auto___23866){
return (function (seq23824){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23824));
});})(g__21733__auto___23866))
;


var g__21733__auto___23870 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21733__auto___23870){
return (function cljs$spec$impl$gen$int(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23871 = arguments.length;
var i__21645__auto___23872 = (0);
while(true){
if((i__21645__auto___23872 < len__21644__auto___23871)){
args__21651__auto__.push((arguments[i__21645__auto___23872]));

var G__23873 = (i__21645__auto___23872 + (1));
i__21645__auto___23872 = G__23873;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23870))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23870){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23870);
});})(g__21733__auto___23870))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21733__auto___23870){
return (function (seq23825){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23825));
});})(g__21733__auto___23870))
;


var g__21733__auto___23874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21733__auto___23874){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23875 = arguments.length;
var i__21645__auto___23876 = (0);
while(true){
if((i__21645__auto___23876 < len__21644__auto___23875)){
args__21651__auto__.push((arguments[i__21645__auto___23876]));

var G__23877 = (i__21645__auto___23876 + (1));
i__21645__auto___23876 = G__23877;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23874))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23874){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23874);
});})(g__21733__auto___23874))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21733__auto___23874){
return (function (seq23826){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23826));
});})(g__21733__auto___23874))
;


var g__21733__auto___23878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21733__auto___23878){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23879 = arguments.length;
var i__21645__auto___23880 = (0);
while(true){
if((i__21645__auto___23880 < len__21644__auto___23879)){
args__21651__auto__.push((arguments[i__21645__auto___23880]));

var G__23881 = (i__21645__auto___23880 + (1));
i__21645__auto___23880 = G__23881;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23878))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23878){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23878);
});})(g__21733__auto___23878))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21733__auto___23878){
return (function (seq23827){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23827));
});})(g__21733__auto___23878))
;


var g__21733__auto___23882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21733__auto___23882){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23883 = arguments.length;
var i__21645__auto___23884 = (0);
while(true){
if((i__21645__auto___23884 < len__21644__auto___23883)){
args__21651__auto__.push((arguments[i__21645__auto___23884]));

var G__23885 = (i__21645__auto___23884 + (1));
i__21645__auto___23884 = G__23885;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23882))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23882){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23882);
});})(g__21733__auto___23882))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21733__auto___23882){
return (function (seq23828){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23828));
});})(g__21733__auto___23882))
;


var g__21733__auto___23886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21733__auto___23886){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23887 = arguments.length;
var i__21645__auto___23888 = (0);
while(true){
if((i__21645__auto___23888 < len__21644__auto___23887)){
args__21651__auto__.push((arguments[i__21645__auto___23888]));

var G__23889 = (i__21645__auto___23888 + (1));
i__21645__auto___23888 = G__23889;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23886))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23886){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23886);
});})(g__21733__auto___23886))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21733__auto___23886){
return (function (seq23829){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23829));
});})(g__21733__auto___23886))
;


var g__21733__auto___23890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21733__auto___23890){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23891 = arguments.length;
var i__21645__auto___23892 = (0);
while(true){
if((i__21645__auto___23892 < len__21644__auto___23891)){
args__21651__auto__.push((arguments[i__21645__auto___23892]));

var G__23893 = (i__21645__auto___23892 + (1));
i__21645__auto___23892 = G__23893;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23890))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23890){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23890);
});})(g__21733__auto___23890))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21733__auto___23890){
return (function (seq23830){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23830));
});})(g__21733__auto___23890))
;


var g__21733__auto___23894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21733__auto___23894){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23895 = arguments.length;
var i__21645__auto___23896 = (0);
while(true){
if((i__21645__auto___23896 < len__21644__auto___23895)){
args__21651__auto__.push((arguments[i__21645__auto___23896]));

var G__23897 = (i__21645__auto___23896 + (1));
i__21645__auto___23896 = G__23897;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23894))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23894){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23894);
});})(g__21733__auto___23894))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21733__auto___23894){
return (function (seq23831){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23831));
});})(g__21733__auto___23894))
;


var g__21733__auto___23898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21733__auto___23898){
return (function cljs$spec$impl$gen$string(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23899 = arguments.length;
var i__21645__auto___23900 = (0);
while(true){
if((i__21645__auto___23900 < len__21644__auto___23899)){
args__21651__auto__.push((arguments[i__21645__auto___23900]));

var G__23901 = (i__21645__auto___23900 + (1));
i__21645__auto___23900 = G__23901;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23898))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23898){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23898);
});})(g__21733__auto___23898))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21733__auto___23898){
return (function (seq23832){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23832));
});})(g__21733__auto___23898))
;


var g__21733__auto___23902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21733__auto___23902){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23903 = arguments.length;
var i__21645__auto___23904 = (0);
while(true){
if((i__21645__auto___23904 < len__21644__auto___23903)){
args__21651__auto__.push((arguments[i__21645__auto___23904]));

var G__23905 = (i__21645__auto___23904 + (1));
i__21645__auto___23904 = G__23905;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23902))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23902){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23902);
});})(g__21733__auto___23902))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21733__auto___23902){
return (function (seq23833){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23833));
});})(g__21733__auto___23902))
;


var g__21733__auto___23906 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21733__auto___23906){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23907 = arguments.length;
var i__21645__auto___23908 = (0);
while(true){
if((i__21645__auto___23908 < len__21644__auto___23907)){
args__21651__auto__.push((arguments[i__21645__auto___23908]));

var G__23909 = (i__21645__auto___23908 + (1));
i__21645__auto___23908 = G__23909;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23906))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23906){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23906);
});})(g__21733__auto___23906))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21733__auto___23906){
return (function (seq23834){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23834));
});})(g__21733__auto___23906))
;


var g__21733__auto___23910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21733__auto___23910){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23911 = arguments.length;
var i__21645__auto___23912 = (0);
while(true){
if((i__21645__auto___23912 < len__21644__auto___23911)){
args__21651__auto__.push((arguments[i__21645__auto___23912]));

var G__23913 = (i__21645__auto___23912 + (1));
i__21645__auto___23912 = G__23913;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23910))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23910){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23910);
});})(g__21733__auto___23910))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21733__auto___23910){
return (function (seq23835){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23835));
});})(g__21733__auto___23910))
;


var g__21733__auto___23914 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21733__auto___23914){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23915 = arguments.length;
var i__21645__auto___23916 = (0);
while(true){
if((i__21645__auto___23916 < len__21644__auto___23915)){
args__21651__auto__.push((arguments[i__21645__auto___23916]));

var G__23917 = (i__21645__auto___23916 + (1));
i__21645__auto___23916 = G__23917;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23914))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23914){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23914);
});})(g__21733__auto___23914))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21733__auto___23914){
return (function (seq23836){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23836));
});})(g__21733__auto___23914))
;


var g__21733__auto___23918 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21733__auto___23918){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23919 = arguments.length;
var i__21645__auto___23920 = (0);
while(true){
if((i__21645__auto___23920 < len__21644__auto___23919)){
args__21651__auto__.push((arguments[i__21645__auto___23920]));

var G__23921 = (i__21645__auto___23920 + (1));
i__21645__auto___23920 = G__23921;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});})(g__21733__auto___23918))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21733__auto___23918){
return (function (args){
return cljs.core.deref.call(null,g__21733__auto___23918);
});})(g__21733__auto___23918))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21733__auto___23918){
return (function (seq23837){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23837));
});})(g__21733__auto___23918))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21651__auto__ = [];
var len__21644__auto___23924 = arguments.length;
var i__21645__auto___23925 = (0);
while(true){
if((i__21645__auto___23925 < len__21644__auto___23924)){
args__21651__auto__.push((arguments[i__21645__auto___23925]));

var G__23926 = (i__21645__auto___23925 + (1));
i__21645__auto___23925 = G__23926;
continue;
} else {
}
break;
}

var argseq__21652__auto__ = ((((0) < args__21651__auto__.length))?(new cljs.core.IndexedSeq(args__21651__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21652__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__23922_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23922_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq23923){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23923));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__23927_SHARP_){
return (new Date(p1__23927_SHARP_));
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

//# sourceMappingURL=gen.js.map