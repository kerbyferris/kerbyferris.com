// Compiled by ClojureScript 1.9.89 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__19987__auto__ = elem.textContent;
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args23367 = [];
var len__21062__auto___23370 = arguments.length;
var i__21063__auto___23371 = (0);
while(true){
if((i__21063__auto___23371 < len__21062__auto___23370)){
args23367.push((arguments[i__21063__auto___23371]));

var G__23372 = (i__21063__auto___23371 + (1));
i__21063__auto___23371 = G__23372;
continue;
} else {
}
break;
}

var G__23369 = args23367.length;
switch (G__23369) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23367.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args23374 = [];
var len__21062__auto___23377 = arguments.length;
var i__21063__auto___23378 = (0);
while(true){
if((i__21063__auto___23378 < len__21062__auto___23377)){
args23374.push((arguments[i__21063__auto___23378]));

var G__23379 = (i__21063__auto___23378 + (1));
i__21063__auto___23378 = G__23379;
continue;
} else {
}
break;
}

var G__23376 = args23374.length;
switch (G__23376) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23374.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args23382 = [];
var len__21062__auto___23385 = arguments.length;
var i__21063__auto___23386 = (0);
while(true){
if((i__21063__auto___23386 < len__21062__auto___23385)){
args23382.push((arguments[i__21063__auto___23386]));

var G__23387 = (i__21063__auto___23386 + (1));
i__21063__auto___23386 = G__23387;
continue;
} else {
}
break;
}

var G__23384 = args23382.length;
switch (G__23384) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23382.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__23381_SHARP_){
return !((p1__23381_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___23401 = arguments.length;
var i__21063__auto___23402 = (0);
while(true){
if((i__21063__auto___23402 < len__21062__auto___23401)){
args__21069__auto__.push((arguments[i__21063__auto___23402]));

var G__23403 = (i__21063__auto___23402 + (1));
i__21063__auto___23402 = G__23403;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((1) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21070__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__23391_23404 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__23392_23405 = null;
var count__23393_23406 = (0);
var i__23394_23407 = (0);
while(true){
if((i__23394_23407 < count__23393_23406)){
var vec__23395_23408 = cljs.core._nth.call(null,chunk__23392_23405,i__23394_23407);
var k_23409 = cljs.core.nth.call(null,vec__23395_23408,(0),null);
var v_23410 = cljs.core.nth.call(null,vec__23395_23408,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_23409),v_23410);

var G__23411 = seq__23391_23404;
var G__23412 = chunk__23392_23405;
var G__23413 = count__23393_23406;
var G__23414 = (i__23394_23407 + (1));
seq__23391_23404 = G__23411;
chunk__23392_23405 = G__23412;
count__23393_23406 = G__23413;
i__23394_23407 = G__23414;
continue;
} else {
var temp__4657__auto___23415 = cljs.core.seq.call(null,seq__23391_23404);
if(temp__4657__auto___23415){
var seq__23391_23416__$1 = temp__4657__auto___23415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23391_23416__$1)){
var c__20798__auto___23417 = cljs.core.chunk_first.call(null,seq__23391_23416__$1);
var G__23418 = cljs.core.chunk_rest.call(null,seq__23391_23416__$1);
var G__23419 = c__20798__auto___23417;
var G__23420 = cljs.core.count.call(null,c__20798__auto___23417);
var G__23421 = (0);
seq__23391_23404 = G__23418;
chunk__23392_23405 = G__23419;
count__23393_23406 = G__23420;
i__23394_23407 = G__23421;
continue;
} else {
var vec__23398_23422 = cljs.core.first.call(null,seq__23391_23416__$1);
var k_23423 = cljs.core.nth.call(null,vec__23398_23422,(0),null);
var v_23424 = cljs.core.nth.call(null,vec__23398_23422,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_23423),v_23424);

var G__23425 = cljs.core.next.call(null,seq__23391_23416__$1);
var G__23426 = null;
var G__23427 = (0);
var G__23428 = (0);
seq__23391_23404 = G__23425;
chunk__23392_23405 = G__23426;
count__23393_23406 = G__23427;
i__23394_23407 = G__23428;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq23389){
var G__23390 = cljs.core.first.call(null,seq23389);
var seq23389__$1 = cljs.core.next.call(null,seq23389);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23390,seq23389__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___23435 = arguments.length;
var i__21063__auto___23436 = (0);
while(true){
if((i__21063__auto___23436 < len__21062__auto___23435)){
args__21069__auto__.push((arguments[i__21063__auto___23436]));

var G__23437 = (i__21063__auto___23436 + (1));
i__21063__auto___23436 = G__23437;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((1) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21070__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__23431_23438 = cljs.core.seq.call(null,keywords);
var chunk__23432_23439 = null;
var count__23433_23440 = (0);
var i__23434_23441 = (0);
while(true){
if((i__23434_23441 < count__23433_23440)){
var kw_23442 = cljs.core._nth.call(null,chunk__23432_23439,i__23434_23441);
style.removeProperty(dommy.utils.as_str.call(null,kw_23442));

var G__23443 = seq__23431_23438;
var G__23444 = chunk__23432_23439;
var G__23445 = count__23433_23440;
var G__23446 = (i__23434_23441 + (1));
seq__23431_23438 = G__23443;
chunk__23432_23439 = G__23444;
count__23433_23440 = G__23445;
i__23434_23441 = G__23446;
continue;
} else {
var temp__4657__auto___23447 = cljs.core.seq.call(null,seq__23431_23438);
if(temp__4657__auto___23447){
var seq__23431_23448__$1 = temp__4657__auto___23447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23431_23448__$1)){
var c__20798__auto___23449 = cljs.core.chunk_first.call(null,seq__23431_23448__$1);
var G__23450 = cljs.core.chunk_rest.call(null,seq__23431_23448__$1);
var G__23451 = c__20798__auto___23449;
var G__23452 = cljs.core.count.call(null,c__20798__auto___23449);
var G__23453 = (0);
seq__23431_23438 = G__23450;
chunk__23432_23439 = G__23451;
count__23433_23440 = G__23452;
i__23434_23441 = G__23453;
continue;
} else {
var kw_23454 = cljs.core.first.call(null,seq__23431_23448__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_23454));

var G__23455 = cljs.core.next.call(null,seq__23431_23448__$1);
var G__23456 = null;
var G__23457 = (0);
var G__23458 = (0);
seq__23431_23438 = G__23455;
chunk__23432_23439 = G__23456;
count__23433_23440 = G__23457;
i__23434_23441 = G__23458;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq23429){
var G__23430 = cljs.core.first.call(null,seq23429);
var seq23429__$1 = cljs.core.next.call(null,seq23429);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23430,seq23429__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___23471 = arguments.length;
var i__21063__auto___23472 = (0);
while(true){
if((i__21063__auto___23472 < len__21062__auto___23471)){
args__21069__auto__.push((arguments[i__21063__auto___23472]));

var G__23473 = (i__21063__auto___23472 + (1));
i__21063__auto___23472 = G__23473;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((1) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21070__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__23461_23474 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__23462_23475 = null;
var count__23463_23476 = (0);
var i__23464_23477 = (0);
while(true){
if((i__23464_23477 < count__23463_23476)){
var vec__23465_23478 = cljs.core._nth.call(null,chunk__23462_23475,i__23464_23477);
var k_23479 = cljs.core.nth.call(null,vec__23465_23478,(0),null);
var v_23480 = cljs.core.nth.call(null,vec__23465_23478,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_23479,[cljs.core.str(v_23480),cljs.core.str("px")].join(''));

var G__23481 = seq__23461_23474;
var G__23482 = chunk__23462_23475;
var G__23483 = count__23463_23476;
var G__23484 = (i__23464_23477 + (1));
seq__23461_23474 = G__23481;
chunk__23462_23475 = G__23482;
count__23463_23476 = G__23483;
i__23464_23477 = G__23484;
continue;
} else {
var temp__4657__auto___23485 = cljs.core.seq.call(null,seq__23461_23474);
if(temp__4657__auto___23485){
var seq__23461_23486__$1 = temp__4657__auto___23485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23461_23486__$1)){
var c__20798__auto___23487 = cljs.core.chunk_first.call(null,seq__23461_23486__$1);
var G__23488 = cljs.core.chunk_rest.call(null,seq__23461_23486__$1);
var G__23489 = c__20798__auto___23487;
var G__23490 = cljs.core.count.call(null,c__20798__auto___23487);
var G__23491 = (0);
seq__23461_23474 = G__23488;
chunk__23462_23475 = G__23489;
count__23463_23476 = G__23490;
i__23464_23477 = G__23491;
continue;
} else {
var vec__23468_23492 = cljs.core.first.call(null,seq__23461_23486__$1);
var k_23493 = cljs.core.nth.call(null,vec__23468_23492,(0),null);
var v_23494 = cljs.core.nth.call(null,vec__23468_23492,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_23493,[cljs.core.str(v_23494),cljs.core.str("px")].join(''));

var G__23495 = cljs.core.next.call(null,seq__23461_23486__$1);
var G__23496 = null;
var G__23497 = (0);
var G__23498 = (0);
seq__23461_23474 = G__23495;
chunk__23462_23475 = G__23496;
count__23463_23476 = G__23497;
i__23464_23477 = G__23498;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq23459){
var G__23460 = cljs.core.first.call(null,seq23459);
var seq23459__$1 = cljs.core.next.call(null,seq23459);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23460,seq23459__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args23499 = [];
var len__21062__auto___23518 = arguments.length;
var i__21063__auto___23519 = (0);
while(true){
if((i__21063__auto___23519 < len__21062__auto___23518)){
args23499.push((arguments[i__21063__auto___23519]));

var G__23520 = (i__21063__auto___23519 + (1));
i__21063__auto___23519 = G__23520;
continue;
} else {
}
break;
}

var G__23505 = args23499.length;
switch (G__23505) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21081__auto__ = (new cljs.core.IndexedSeq(args23499.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21081__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__23506 = elem;
(G__23506[k__$1] = v);

return G__23506;
} else {
var G__23507 = elem;
G__23507.setAttribute(k__$1,v);

return G__23507;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__23508_23522 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__23509_23523 = null;
var count__23510_23524 = (0);
var i__23511_23525 = (0);
while(true){
if((i__23511_23525 < count__23510_23524)){
var vec__23512_23526 = cljs.core._nth.call(null,chunk__23509_23523,i__23511_23525);
var k_23527__$1 = cljs.core.nth.call(null,vec__23512_23526,(0),null);
var v_23528__$1 = cljs.core.nth.call(null,vec__23512_23526,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_23527__$1,v_23528__$1);

var G__23529 = seq__23508_23522;
var G__23530 = chunk__23509_23523;
var G__23531 = count__23510_23524;
var G__23532 = (i__23511_23525 + (1));
seq__23508_23522 = G__23529;
chunk__23509_23523 = G__23530;
count__23510_23524 = G__23531;
i__23511_23525 = G__23532;
continue;
} else {
var temp__4657__auto___23533 = cljs.core.seq.call(null,seq__23508_23522);
if(temp__4657__auto___23533){
var seq__23508_23534__$1 = temp__4657__auto___23533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23508_23534__$1)){
var c__20798__auto___23535 = cljs.core.chunk_first.call(null,seq__23508_23534__$1);
var G__23536 = cljs.core.chunk_rest.call(null,seq__23508_23534__$1);
var G__23537 = c__20798__auto___23535;
var G__23538 = cljs.core.count.call(null,c__20798__auto___23535);
var G__23539 = (0);
seq__23508_23522 = G__23536;
chunk__23509_23523 = G__23537;
count__23510_23524 = G__23538;
i__23511_23525 = G__23539;
continue;
} else {
var vec__23515_23540 = cljs.core.first.call(null,seq__23508_23534__$1);
var k_23541__$1 = cljs.core.nth.call(null,vec__23515_23540,(0),null);
var v_23542__$1 = cljs.core.nth.call(null,vec__23515_23540,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_23541__$1,v_23542__$1);

var G__23543 = cljs.core.next.call(null,seq__23508_23534__$1);
var G__23544 = null;
var G__23545 = (0);
var G__23546 = (0);
seq__23508_23522 = G__23543;
chunk__23509_23523 = G__23544;
count__23510_23524 = G__23545;
i__23511_23525 = G__23546;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq23500){
var G__23501 = cljs.core.first.call(null,seq23500);
var seq23500__$1 = cljs.core.next.call(null,seq23500);
var G__23502 = cljs.core.first.call(null,seq23500__$1);
var seq23500__$2 = cljs.core.next.call(null,seq23500__$1);
var G__23503 = cljs.core.first.call(null,seq23500__$2);
var seq23500__$3 = cljs.core.next.call(null,seq23500__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23501,G__23502,G__23503,seq23500__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args23547 = [];
var len__21062__auto___23557 = arguments.length;
var i__21063__auto___23558 = (0);
while(true){
if((i__21063__auto___23558 < len__21062__auto___23557)){
args23547.push((arguments[i__21063__auto___23558]));

var G__23559 = (i__21063__auto___23558 + (1));
i__21063__auto___23558 = G__23559;
continue;
} else {
}
break;
}

var G__23552 = args23547.length;
switch (G__23552) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21081__auto__ = (new cljs.core.IndexedSeq(args23547.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21081__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_23561__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_23561__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_23561__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__23553_23562 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__23554_23563 = null;
var count__23555_23564 = (0);
var i__23556_23565 = (0);
while(true){
if((i__23556_23565 < count__23555_23564)){
var k_23566__$1 = cljs.core._nth.call(null,chunk__23554_23563,i__23556_23565);
dommy.core.remove_attr_BANG_.call(null,elem,k_23566__$1);

var G__23567 = seq__23553_23562;
var G__23568 = chunk__23554_23563;
var G__23569 = count__23555_23564;
var G__23570 = (i__23556_23565 + (1));
seq__23553_23562 = G__23567;
chunk__23554_23563 = G__23568;
count__23555_23564 = G__23569;
i__23556_23565 = G__23570;
continue;
} else {
var temp__4657__auto___23571 = cljs.core.seq.call(null,seq__23553_23562);
if(temp__4657__auto___23571){
var seq__23553_23572__$1 = temp__4657__auto___23571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23553_23572__$1)){
var c__20798__auto___23573 = cljs.core.chunk_first.call(null,seq__23553_23572__$1);
var G__23574 = cljs.core.chunk_rest.call(null,seq__23553_23572__$1);
var G__23575 = c__20798__auto___23573;
var G__23576 = cljs.core.count.call(null,c__20798__auto___23573);
var G__23577 = (0);
seq__23553_23562 = G__23574;
chunk__23554_23563 = G__23575;
count__23555_23564 = G__23576;
i__23556_23565 = G__23577;
continue;
} else {
var k_23578__$1 = cljs.core.first.call(null,seq__23553_23572__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_23578__$1);

var G__23579 = cljs.core.next.call(null,seq__23553_23572__$1);
var G__23580 = null;
var G__23581 = (0);
var G__23582 = (0);
seq__23553_23562 = G__23579;
chunk__23554_23563 = G__23580;
count__23555_23564 = G__23581;
i__23556_23565 = G__23582;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq23548){
var G__23549 = cljs.core.first.call(null,seq23548);
var seq23548__$1 = cljs.core.next.call(null,seq23548);
var G__23550 = cljs.core.first.call(null,seq23548__$1);
var seq23548__$2 = cljs.core.next.call(null,seq23548__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23549,G__23550,seq23548__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args23583 = [];
var len__21062__auto___23586 = arguments.length;
var i__21063__auto___23587 = (0);
while(true){
if((i__21063__auto___23587 < len__21062__auto___23586)){
args23583.push((arguments[i__21063__auto___23587]));

var G__23588 = (i__21063__auto___23587 + (1));
i__21063__auto___23587 = G__23588;
continue;
} else {
}
break;
}

var G__23585 = args23583.length;
switch (G__23585) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23583.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args23590 = [];
var len__21062__auto___23608 = arguments.length;
var i__21063__auto___23609 = (0);
while(true){
if((i__21063__auto___23609 < len__21062__auto___23608)){
args23590.push((arguments[i__21063__auto___23609]));

var G__23610 = (i__21063__auto___23609 + (1));
i__21063__auto___23609 = G__23610;
continue;
} else {
}
break;
}

var G__23595 = args23590.length;
switch (G__23595) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21081__auto__ = (new cljs.core.IndexedSeq(args23590.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21081__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___23612 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___23612)){
var class_list_23613 = temp__4655__auto___23612;
var seq__23596_23614 = cljs.core.seq.call(null,classes__$1);
var chunk__23597_23615 = null;
var count__23598_23616 = (0);
var i__23599_23617 = (0);
while(true){
if((i__23599_23617 < count__23598_23616)){
var c_23618 = cljs.core._nth.call(null,chunk__23597_23615,i__23599_23617);
class_list_23613.add(c_23618);

var G__23619 = seq__23596_23614;
var G__23620 = chunk__23597_23615;
var G__23621 = count__23598_23616;
var G__23622 = (i__23599_23617 + (1));
seq__23596_23614 = G__23619;
chunk__23597_23615 = G__23620;
count__23598_23616 = G__23621;
i__23599_23617 = G__23622;
continue;
} else {
var temp__4657__auto___23623 = cljs.core.seq.call(null,seq__23596_23614);
if(temp__4657__auto___23623){
var seq__23596_23624__$1 = temp__4657__auto___23623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23596_23624__$1)){
var c__20798__auto___23625 = cljs.core.chunk_first.call(null,seq__23596_23624__$1);
var G__23626 = cljs.core.chunk_rest.call(null,seq__23596_23624__$1);
var G__23627 = c__20798__auto___23625;
var G__23628 = cljs.core.count.call(null,c__20798__auto___23625);
var G__23629 = (0);
seq__23596_23614 = G__23626;
chunk__23597_23615 = G__23627;
count__23598_23616 = G__23628;
i__23599_23617 = G__23629;
continue;
} else {
var c_23630 = cljs.core.first.call(null,seq__23596_23624__$1);
class_list_23613.add(c_23630);

var G__23631 = cljs.core.next.call(null,seq__23596_23624__$1);
var G__23632 = null;
var G__23633 = (0);
var G__23634 = (0);
seq__23596_23614 = G__23631;
chunk__23597_23615 = G__23632;
count__23598_23616 = G__23633;
i__23599_23617 = G__23634;
continue;
}
} else {
}
}
break;
}
} else {
var seq__23600_23635 = cljs.core.seq.call(null,classes__$1);
var chunk__23601_23636 = null;
var count__23602_23637 = (0);
var i__23603_23638 = (0);
while(true){
if((i__23603_23638 < count__23602_23637)){
var c_23639 = cljs.core._nth.call(null,chunk__23601_23636,i__23603_23638);
var class_name_23640 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_23640,c_23639))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_23640 === ""))?c_23639:[cljs.core.str(class_name_23640),cljs.core.str(" "),cljs.core.str(c_23639)].join('')));
}

var G__23641 = seq__23600_23635;
var G__23642 = chunk__23601_23636;
var G__23643 = count__23602_23637;
var G__23644 = (i__23603_23638 + (1));
seq__23600_23635 = G__23641;
chunk__23601_23636 = G__23642;
count__23602_23637 = G__23643;
i__23603_23638 = G__23644;
continue;
} else {
var temp__4657__auto___23645 = cljs.core.seq.call(null,seq__23600_23635);
if(temp__4657__auto___23645){
var seq__23600_23646__$1 = temp__4657__auto___23645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23600_23646__$1)){
var c__20798__auto___23647 = cljs.core.chunk_first.call(null,seq__23600_23646__$1);
var G__23648 = cljs.core.chunk_rest.call(null,seq__23600_23646__$1);
var G__23649 = c__20798__auto___23647;
var G__23650 = cljs.core.count.call(null,c__20798__auto___23647);
var G__23651 = (0);
seq__23600_23635 = G__23648;
chunk__23601_23636 = G__23649;
count__23602_23637 = G__23650;
i__23603_23638 = G__23651;
continue;
} else {
var c_23652 = cljs.core.first.call(null,seq__23600_23646__$1);
var class_name_23653 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_23653,c_23652))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_23653 === ""))?c_23652:[cljs.core.str(class_name_23653),cljs.core.str(" "),cljs.core.str(c_23652)].join('')));
}

var G__23654 = cljs.core.next.call(null,seq__23600_23646__$1);
var G__23655 = null;
var G__23656 = (0);
var G__23657 = (0);
seq__23600_23635 = G__23654;
chunk__23601_23636 = G__23655;
count__23602_23637 = G__23656;
i__23603_23638 = G__23657;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__23604_23658 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__23605_23659 = null;
var count__23606_23660 = (0);
var i__23607_23661 = (0);
while(true){
if((i__23607_23661 < count__23606_23660)){
var c_23662 = cljs.core._nth.call(null,chunk__23605_23659,i__23607_23661);
dommy.core.add_class_BANG_.call(null,elem,c_23662);

var G__23663 = seq__23604_23658;
var G__23664 = chunk__23605_23659;
var G__23665 = count__23606_23660;
var G__23666 = (i__23607_23661 + (1));
seq__23604_23658 = G__23663;
chunk__23605_23659 = G__23664;
count__23606_23660 = G__23665;
i__23607_23661 = G__23666;
continue;
} else {
var temp__4657__auto___23667 = cljs.core.seq.call(null,seq__23604_23658);
if(temp__4657__auto___23667){
var seq__23604_23668__$1 = temp__4657__auto___23667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23604_23668__$1)){
var c__20798__auto___23669 = cljs.core.chunk_first.call(null,seq__23604_23668__$1);
var G__23670 = cljs.core.chunk_rest.call(null,seq__23604_23668__$1);
var G__23671 = c__20798__auto___23669;
var G__23672 = cljs.core.count.call(null,c__20798__auto___23669);
var G__23673 = (0);
seq__23604_23658 = G__23670;
chunk__23605_23659 = G__23671;
count__23606_23660 = G__23672;
i__23607_23661 = G__23673;
continue;
} else {
var c_23674 = cljs.core.first.call(null,seq__23604_23668__$1);
dommy.core.add_class_BANG_.call(null,elem,c_23674);

var G__23675 = cljs.core.next.call(null,seq__23604_23668__$1);
var G__23676 = null;
var G__23677 = (0);
var G__23678 = (0);
seq__23604_23658 = G__23675;
chunk__23605_23659 = G__23676;
count__23606_23660 = G__23677;
i__23607_23661 = G__23678;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq23591){
var G__23592 = cljs.core.first.call(null,seq23591);
var seq23591__$1 = cljs.core.next.call(null,seq23591);
var G__23593 = cljs.core.first.call(null,seq23591__$1);
var seq23591__$2 = cljs.core.next.call(null,seq23591__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23592,G__23593,seq23591__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args23679 = [];
var len__21062__auto___23689 = arguments.length;
var i__21063__auto___23690 = (0);
while(true){
if((i__21063__auto___23690 < len__21062__auto___23689)){
args23679.push((arguments[i__21063__auto___23690]));

var G__23691 = (i__21063__auto___23690 + (1));
i__21063__auto___23690 = G__23691;
continue;
} else {
}
break;
}

var G__23684 = args23679.length;
switch (G__23684) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21081__auto__ = (new cljs.core.IndexedSeq(args23679.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21081__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___23693 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___23693)){
var class_list_23694 = temp__4655__auto___23693;
class_list_23694.remove(c__$1);
} else {
var class_name_23695 = dommy.core.class$.call(null,elem);
var new_class_name_23696 = dommy.utils.remove_class_str.call(null,class_name_23695,c__$1);
if((class_name_23695 === new_class_name_23696)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_23696);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__23685 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__23686 = null;
var count__23687 = (0);
var i__23688 = (0);
while(true){
if((i__23688 < count__23687)){
var c = cljs.core._nth.call(null,chunk__23686,i__23688);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__23697 = seq__23685;
var G__23698 = chunk__23686;
var G__23699 = count__23687;
var G__23700 = (i__23688 + (1));
seq__23685 = G__23697;
chunk__23686 = G__23698;
count__23687 = G__23699;
i__23688 = G__23700;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23685);
if(temp__4657__auto__){
var seq__23685__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23685__$1)){
var c__20798__auto__ = cljs.core.chunk_first.call(null,seq__23685__$1);
var G__23701 = cljs.core.chunk_rest.call(null,seq__23685__$1);
var G__23702 = c__20798__auto__;
var G__23703 = cljs.core.count.call(null,c__20798__auto__);
var G__23704 = (0);
seq__23685 = G__23701;
chunk__23686 = G__23702;
count__23687 = G__23703;
i__23688 = G__23704;
continue;
} else {
var c = cljs.core.first.call(null,seq__23685__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__23705 = cljs.core.next.call(null,seq__23685__$1);
var G__23706 = null;
var G__23707 = (0);
var G__23708 = (0);
seq__23685 = G__23705;
chunk__23686 = G__23706;
count__23687 = G__23707;
i__23688 = G__23708;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq23680){
var G__23681 = cljs.core.first.call(null,seq23680);
var seq23680__$1 = cljs.core.next.call(null,seq23680);
var G__23682 = cljs.core.first.call(null,seq23680__$1);
var seq23680__$2 = cljs.core.next.call(null,seq23680__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23681,G__23682,seq23680__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args23709 = [];
var len__21062__auto___23712 = arguments.length;
var i__21063__auto___23713 = (0);
while(true){
if((i__21063__auto___23713 < len__21062__auto___23712)){
args23709.push((arguments[i__21063__auto___23713]));

var G__23714 = (i__21063__auto___23713 + (1));
i__21063__auto___23713 = G__23714;
continue;
} else {
}
break;
}

var G__23711 = args23709.length;
switch (G__23711) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23709.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___23716 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___23716)){
var class_list_23717 = temp__4655__auto___23716;
class_list_23717.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args23718 = [];
var len__21062__auto___23721 = arguments.length;
var i__21063__auto___23722 = (0);
while(true){
if((i__21063__auto___23722 < len__21062__auto___23721)){
args23718.push((arguments[i__21063__auto___23722]));

var G__23723 = (i__21063__auto___23722 + (1));
i__21063__auto___23722 = G__23723;
continue;
} else {
}
break;
}

var G__23720 = args23718.length;
switch (G__23720) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23718.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args23725 = [];
var len__21062__auto___23728 = arguments.length;
var i__21063__auto___23729 = (0);
while(true){
if((i__21063__auto___23729 < len__21062__auto___23728)){
args23725.push((arguments[i__21063__auto___23729]));

var G__23730 = (i__21063__auto___23729 + (1));
i__21063__auto___23729 = G__23730;
continue;
} else {
}
break;
}

var G__23727 = args23725.length;
switch (G__23727) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23725.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args23732 = [];
var len__21062__auto___23743 = arguments.length;
var i__21063__auto___23744 = (0);
while(true){
if((i__21063__auto___23744 < len__21062__auto___23743)){
args23732.push((arguments[i__21063__auto___23744]));

var G__23745 = (i__21063__auto___23744 + (1));
i__21063__auto___23744 = G__23745;
continue;
} else {
}
break;
}

var G__23737 = args23732.length;
switch (G__23737) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21081__auto__ = (new cljs.core.IndexedSeq(args23732.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21081__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__23738 = parent;
G__23738.appendChild(child);

return G__23738;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__23739_23747 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__23740_23748 = null;
var count__23741_23749 = (0);
var i__23742_23750 = (0);
while(true){
if((i__23742_23750 < count__23741_23749)){
var c_23751 = cljs.core._nth.call(null,chunk__23740_23748,i__23742_23750);
dommy.core.append_BANG_.call(null,parent,c_23751);

var G__23752 = seq__23739_23747;
var G__23753 = chunk__23740_23748;
var G__23754 = count__23741_23749;
var G__23755 = (i__23742_23750 + (1));
seq__23739_23747 = G__23752;
chunk__23740_23748 = G__23753;
count__23741_23749 = G__23754;
i__23742_23750 = G__23755;
continue;
} else {
var temp__4657__auto___23756 = cljs.core.seq.call(null,seq__23739_23747);
if(temp__4657__auto___23756){
var seq__23739_23757__$1 = temp__4657__auto___23756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23739_23757__$1)){
var c__20798__auto___23758 = cljs.core.chunk_first.call(null,seq__23739_23757__$1);
var G__23759 = cljs.core.chunk_rest.call(null,seq__23739_23757__$1);
var G__23760 = c__20798__auto___23758;
var G__23761 = cljs.core.count.call(null,c__20798__auto___23758);
var G__23762 = (0);
seq__23739_23747 = G__23759;
chunk__23740_23748 = G__23760;
count__23741_23749 = G__23761;
i__23742_23750 = G__23762;
continue;
} else {
var c_23763 = cljs.core.first.call(null,seq__23739_23757__$1);
dommy.core.append_BANG_.call(null,parent,c_23763);

var G__23764 = cljs.core.next.call(null,seq__23739_23757__$1);
var G__23765 = null;
var G__23766 = (0);
var G__23767 = (0);
seq__23739_23747 = G__23764;
chunk__23740_23748 = G__23765;
count__23741_23749 = G__23766;
i__23742_23750 = G__23767;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq23733){
var G__23734 = cljs.core.first.call(null,seq23733);
var seq23733__$1 = cljs.core.next.call(null,seq23733);
var G__23735 = cljs.core.first.call(null,seq23733__$1);
var seq23733__$2 = cljs.core.next.call(null,seq23733__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23734,G__23735,seq23733__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args23768 = [];
var len__21062__auto___23779 = arguments.length;
var i__21063__auto___23780 = (0);
while(true){
if((i__21063__auto___23780 < len__21062__auto___23779)){
args23768.push((arguments[i__21063__auto___23780]));

var G__23781 = (i__21063__auto___23780 + (1));
i__21063__auto___23780 = G__23781;
continue;
} else {
}
break;
}

var G__23773 = args23768.length;
switch (G__23773) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21081__auto__ = (new cljs.core.IndexedSeq(args23768.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21081__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__23774 = parent;
G__23774.insertBefore(child,parent.firstChild);

return G__23774;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__23775_23783 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__23776_23784 = null;
var count__23777_23785 = (0);
var i__23778_23786 = (0);
while(true){
if((i__23778_23786 < count__23777_23785)){
var c_23787 = cljs.core._nth.call(null,chunk__23776_23784,i__23778_23786);
dommy.core.prepend_BANG_.call(null,parent,c_23787);

var G__23788 = seq__23775_23783;
var G__23789 = chunk__23776_23784;
var G__23790 = count__23777_23785;
var G__23791 = (i__23778_23786 + (1));
seq__23775_23783 = G__23788;
chunk__23776_23784 = G__23789;
count__23777_23785 = G__23790;
i__23778_23786 = G__23791;
continue;
} else {
var temp__4657__auto___23792 = cljs.core.seq.call(null,seq__23775_23783);
if(temp__4657__auto___23792){
var seq__23775_23793__$1 = temp__4657__auto___23792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23775_23793__$1)){
var c__20798__auto___23794 = cljs.core.chunk_first.call(null,seq__23775_23793__$1);
var G__23795 = cljs.core.chunk_rest.call(null,seq__23775_23793__$1);
var G__23796 = c__20798__auto___23794;
var G__23797 = cljs.core.count.call(null,c__20798__auto___23794);
var G__23798 = (0);
seq__23775_23783 = G__23795;
chunk__23776_23784 = G__23796;
count__23777_23785 = G__23797;
i__23778_23786 = G__23798;
continue;
} else {
var c_23799 = cljs.core.first.call(null,seq__23775_23793__$1);
dommy.core.prepend_BANG_.call(null,parent,c_23799);

var G__23800 = cljs.core.next.call(null,seq__23775_23793__$1);
var G__23801 = null;
var G__23802 = (0);
var G__23803 = (0);
seq__23775_23783 = G__23800;
chunk__23776_23784 = G__23801;
count__23777_23785 = G__23802;
i__23778_23786 = G__23803;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq23769){
var G__23770 = cljs.core.first.call(null,seq23769);
var seq23769__$1 = cljs.core.next.call(null,seq23769);
var G__23771 = cljs.core.first.call(null,seq23769__$1);
var seq23769__$2 = cljs.core.next.call(null,seq23769__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23770,G__23771,seq23769__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___23804 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___23804)){
var next_23805 = temp__4655__auto___23804;
dommy.core.insert_before_BANG_.call(null,elem,next_23805);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args23806 = [];
var len__21062__auto___23810 = arguments.length;
var i__21063__auto___23811 = (0);
while(true){
if((i__21063__auto___23811 < len__21062__auto___23810)){
args23806.push((arguments[i__21063__auto___23811]));

var G__23812 = (i__21063__auto___23811 + (1));
i__21063__auto___23811 = G__23812;
continue;
} else {
}
break;
}

var G__23808 = args23806.length;
switch (G__23808) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23806.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__23809 = p;
G__23809.removeChild(elem);

return G__23809;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23814){
var vec__23815 = p__23814;
var special_mouse_event = cljs.core.nth.call(null,vec__23815,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__23815,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__23815,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__23815,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__19987__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__19975__auto__ = related_target;
if(cljs.core.truth_(and__19975__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__19975__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__23815,special_mouse_event,real_mouse_event))
});})(vec__23815,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__19975__auto__ = selected_target;
if(cljs.core.truth_(and__19975__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__19975__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__19987__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___23821 = arguments.length;
var i__21063__auto___23822 = (0);
while(true){
if((i__21063__auto___23822 < len__21062__auto___23821)){
args__21069__auto__.push((arguments[i__21063__auto___23822]));

var G__23823 = (i__21063__auto___23822 + (1));
i__21063__auto___23822 = G__23823;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((2) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21070__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq23818){
var G__23819 = cljs.core.first.call(null,seq23818);
var seq23818__$1 = cljs.core.next.call(null,seq23818);
var G__23820 = cljs.core.first.call(null,seq23818__$1);
var seq23818__$2 = cljs.core.next.call(null,seq23818__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23819,G__23820,seq23818__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___23863 = arguments.length;
var i__21063__auto___23864 = (0);
while(true){
if((i__21063__auto___23864 < len__21062__auto___23863)){
args__21069__auto__.push((arguments[i__21063__auto___23864]));

var G__23865 = (i__21063__auto___23864 + (1));
i__21063__auto___23864 = G__23865;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((1) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21070__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__23826_23866 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23867 = cljs.core.nth.call(null,vec__23826_23866,(0),null);
var selector_23868 = cljs.core.nth.call(null,vec__23826_23866,(1),null);
var seq__23829_23869 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23836_23870 = null;
var count__23837_23871 = (0);
var i__23838_23872 = (0);
while(true){
if((i__23838_23872 < count__23837_23871)){
var vec__23845_23873 = cljs.core._nth.call(null,chunk__23836_23870,i__23838_23872);
var orig_type_23874 = cljs.core.nth.call(null,vec__23845_23873,(0),null);
var f_23875 = cljs.core.nth.call(null,vec__23845_23873,(1),null);
var seq__23839_23876 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23874,cljs.core.PersistentArrayMap.fromArray([orig_type_23874,cljs.core.identity], true, false)));
var chunk__23841_23877 = null;
var count__23842_23878 = (0);
var i__23843_23879 = (0);
while(true){
if((i__23843_23879 < count__23842_23878)){
var vec__23848_23880 = cljs.core._nth.call(null,chunk__23841_23877,i__23843_23879);
var actual_type_23881 = cljs.core.nth.call(null,vec__23848_23880,(0),null);
var factory_23882 = cljs.core.nth.call(null,vec__23848_23880,(1),null);
var canonical_f_23883 = (cljs.core.truth_(selector_23868)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23867,selector_23868):cljs.core.identity).call(null,factory_23882.call(null,f_23875));
dommy.core.update_event_listeners_BANG_.call(null,elem_23867,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23868,actual_type_23881,f_23875], null),canonical_f_23883);

if(cljs.core.truth_(elem_23867.addEventListener)){
elem_23867.addEventListener(cljs.core.name.call(null,actual_type_23881),canonical_f_23883);
} else {
elem_23867.attachEvent(cljs.core.name.call(null,actual_type_23881),canonical_f_23883);
}

var G__23884 = seq__23839_23876;
var G__23885 = chunk__23841_23877;
var G__23886 = count__23842_23878;
var G__23887 = (i__23843_23879 + (1));
seq__23839_23876 = G__23884;
chunk__23841_23877 = G__23885;
count__23842_23878 = G__23886;
i__23843_23879 = G__23887;
continue;
} else {
var temp__4657__auto___23888 = cljs.core.seq.call(null,seq__23839_23876);
if(temp__4657__auto___23888){
var seq__23839_23889__$1 = temp__4657__auto___23888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23839_23889__$1)){
var c__20798__auto___23890 = cljs.core.chunk_first.call(null,seq__23839_23889__$1);
var G__23891 = cljs.core.chunk_rest.call(null,seq__23839_23889__$1);
var G__23892 = c__20798__auto___23890;
var G__23893 = cljs.core.count.call(null,c__20798__auto___23890);
var G__23894 = (0);
seq__23839_23876 = G__23891;
chunk__23841_23877 = G__23892;
count__23842_23878 = G__23893;
i__23843_23879 = G__23894;
continue;
} else {
var vec__23851_23895 = cljs.core.first.call(null,seq__23839_23889__$1);
var actual_type_23896 = cljs.core.nth.call(null,vec__23851_23895,(0),null);
var factory_23897 = cljs.core.nth.call(null,vec__23851_23895,(1),null);
var canonical_f_23898 = (cljs.core.truth_(selector_23868)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23867,selector_23868):cljs.core.identity).call(null,factory_23897.call(null,f_23875));
dommy.core.update_event_listeners_BANG_.call(null,elem_23867,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23868,actual_type_23896,f_23875], null),canonical_f_23898);

if(cljs.core.truth_(elem_23867.addEventListener)){
elem_23867.addEventListener(cljs.core.name.call(null,actual_type_23896),canonical_f_23898);
} else {
elem_23867.attachEvent(cljs.core.name.call(null,actual_type_23896),canonical_f_23898);
}

var G__23899 = cljs.core.next.call(null,seq__23839_23889__$1);
var G__23900 = null;
var G__23901 = (0);
var G__23902 = (0);
seq__23839_23876 = G__23899;
chunk__23841_23877 = G__23900;
count__23842_23878 = G__23901;
i__23843_23879 = G__23902;
continue;
}
} else {
}
}
break;
}

var G__23903 = seq__23829_23869;
var G__23904 = chunk__23836_23870;
var G__23905 = count__23837_23871;
var G__23906 = (i__23838_23872 + (1));
seq__23829_23869 = G__23903;
chunk__23836_23870 = G__23904;
count__23837_23871 = G__23905;
i__23838_23872 = G__23906;
continue;
} else {
var temp__4657__auto___23907 = cljs.core.seq.call(null,seq__23829_23869);
if(temp__4657__auto___23907){
var seq__23829_23908__$1 = temp__4657__auto___23907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23829_23908__$1)){
var c__20798__auto___23909 = cljs.core.chunk_first.call(null,seq__23829_23908__$1);
var G__23910 = cljs.core.chunk_rest.call(null,seq__23829_23908__$1);
var G__23911 = c__20798__auto___23909;
var G__23912 = cljs.core.count.call(null,c__20798__auto___23909);
var G__23913 = (0);
seq__23829_23869 = G__23910;
chunk__23836_23870 = G__23911;
count__23837_23871 = G__23912;
i__23838_23872 = G__23913;
continue;
} else {
var vec__23854_23914 = cljs.core.first.call(null,seq__23829_23908__$1);
var orig_type_23915 = cljs.core.nth.call(null,vec__23854_23914,(0),null);
var f_23916 = cljs.core.nth.call(null,vec__23854_23914,(1),null);
var seq__23830_23917 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23915,cljs.core.PersistentArrayMap.fromArray([orig_type_23915,cljs.core.identity], true, false)));
var chunk__23832_23918 = null;
var count__23833_23919 = (0);
var i__23834_23920 = (0);
while(true){
if((i__23834_23920 < count__23833_23919)){
var vec__23857_23921 = cljs.core._nth.call(null,chunk__23832_23918,i__23834_23920);
var actual_type_23922 = cljs.core.nth.call(null,vec__23857_23921,(0),null);
var factory_23923 = cljs.core.nth.call(null,vec__23857_23921,(1),null);
var canonical_f_23924 = (cljs.core.truth_(selector_23868)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23867,selector_23868):cljs.core.identity).call(null,factory_23923.call(null,f_23916));
dommy.core.update_event_listeners_BANG_.call(null,elem_23867,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23868,actual_type_23922,f_23916], null),canonical_f_23924);

if(cljs.core.truth_(elem_23867.addEventListener)){
elem_23867.addEventListener(cljs.core.name.call(null,actual_type_23922),canonical_f_23924);
} else {
elem_23867.attachEvent(cljs.core.name.call(null,actual_type_23922),canonical_f_23924);
}

var G__23925 = seq__23830_23917;
var G__23926 = chunk__23832_23918;
var G__23927 = count__23833_23919;
var G__23928 = (i__23834_23920 + (1));
seq__23830_23917 = G__23925;
chunk__23832_23918 = G__23926;
count__23833_23919 = G__23927;
i__23834_23920 = G__23928;
continue;
} else {
var temp__4657__auto___23929__$1 = cljs.core.seq.call(null,seq__23830_23917);
if(temp__4657__auto___23929__$1){
var seq__23830_23930__$1 = temp__4657__auto___23929__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23830_23930__$1)){
var c__20798__auto___23931 = cljs.core.chunk_first.call(null,seq__23830_23930__$1);
var G__23932 = cljs.core.chunk_rest.call(null,seq__23830_23930__$1);
var G__23933 = c__20798__auto___23931;
var G__23934 = cljs.core.count.call(null,c__20798__auto___23931);
var G__23935 = (0);
seq__23830_23917 = G__23932;
chunk__23832_23918 = G__23933;
count__23833_23919 = G__23934;
i__23834_23920 = G__23935;
continue;
} else {
var vec__23860_23936 = cljs.core.first.call(null,seq__23830_23930__$1);
var actual_type_23937 = cljs.core.nth.call(null,vec__23860_23936,(0),null);
var factory_23938 = cljs.core.nth.call(null,vec__23860_23936,(1),null);
var canonical_f_23939 = (cljs.core.truth_(selector_23868)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23867,selector_23868):cljs.core.identity).call(null,factory_23938.call(null,f_23916));
dommy.core.update_event_listeners_BANG_.call(null,elem_23867,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23868,actual_type_23937,f_23916], null),canonical_f_23939);

if(cljs.core.truth_(elem_23867.addEventListener)){
elem_23867.addEventListener(cljs.core.name.call(null,actual_type_23937),canonical_f_23939);
} else {
elem_23867.attachEvent(cljs.core.name.call(null,actual_type_23937),canonical_f_23939);
}

var G__23940 = cljs.core.next.call(null,seq__23830_23930__$1);
var G__23941 = null;
var G__23942 = (0);
var G__23943 = (0);
seq__23830_23917 = G__23940;
chunk__23832_23918 = G__23941;
count__23833_23919 = G__23942;
i__23834_23920 = G__23943;
continue;
}
} else {
}
}
break;
}

var G__23944 = cljs.core.next.call(null,seq__23829_23908__$1);
var G__23945 = null;
var G__23946 = (0);
var G__23947 = (0);
seq__23829_23869 = G__23944;
chunk__23836_23870 = G__23945;
count__23837_23871 = G__23946;
i__23838_23872 = G__23947;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq23824){
var G__23825 = cljs.core.first.call(null,seq23824);
var seq23824__$1 = cljs.core.next.call(null,seq23824);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23825,seq23824__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___23987 = arguments.length;
var i__21063__auto___23988 = (0);
while(true){
if((i__21063__auto___23988 < len__21062__auto___23987)){
args__21069__auto__.push((arguments[i__21063__auto___23988]));

var G__23989 = (i__21063__auto___23988 + (1));
i__21063__auto___23988 = G__23989;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((1) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21070__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__23950_23990 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_23991 = cljs.core.nth.call(null,vec__23950_23990,(0),null);
var selector_23992 = cljs.core.nth.call(null,vec__23950_23990,(1),null);
var seq__23953_23993 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__23960_23994 = null;
var count__23961_23995 = (0);
var i__23962_23996 = (0);
while(true){
if((i__23962_23996 < count__23961_23995)){
var vec__23969_23997 = cljs.core._nth.call(null,chunk__23960_23994,i__23962_23996);
var orig_type_23998 = cljs.core.nth.call(null,vec__23969_23997,(0),null);
var f_23999 = cljs.core.nth.call(null,vec__23969_23997,(1),null);
var seq__23963_24000 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23998,cljs.core.PersistentArrayMap.fromArray([orig_type_23998,cljs.core.identity], true, false)));
var chunk__23965_24001 = null;
var count__23966_24002 = (0);
var i__23967_24003 = (0);
while(true){
if((i__23967_24003 < count__23966_24002)){
var vec__23972_24004 = cljs.core._nth.call(null,chunk__23965_24001,i__23967_24003);
var actual_type_24005 = cljs.core.nth.call(null,vec__23972_24004,(0),null);
var __24006 = cljs.core.nth.call(null,vec__23972_24004,(1),null);
var keys_24007 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23992,actual_type_24005,f_23999], null);
var canonical_f_24008 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23991),keys_24007);
dommy.core.update_event_listeners_BANG_.call(null,elem_23991,dommy.utils.dissoc_in,keys_24007);

if(cljs.core.truth_(elem_23991.removeEventListener)){
elem_23991.removeEventListener(cljs.core.name.call(null,actual_type_24005),canonical_f_24008);
} else {
elem_23991.detachEvent(cljs.core.name.call(null,actual_type_24005),canonical_f_24008);
}

var G__24009 = seq__23963_24000;
var G__24010 = chunk__23965_24001;
var G__24011 = count__23966_24002;
var G__24012 = (i__23967_24003 + (1));
seq__23963_24000 = G__24009;
chunk__23965_24001 = G__24010;
count__23966_24002 = G__24011;
i__23967_24003 = G__24012;
continue;
} else {
var temp__4657__auto___24013 = cljs.core.seq.call(null,seq__23963_24000);
if(temp__4657__auto___24013){
var seq__23963_24014__$1 = temp__4657__auto___24013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23963_24014__$1)){
var c__20798__auto___24015 = cljs.core.chunk_first.call(null,seq__23963_24014__$1);
var G__24016 = cljs.core.chunk_rest.call(null,seq__23963_24014__$1);
var G__24017 = c__20798__auto___24015;
var G__24018 = cljs.core.count.call(null,c__20798__auto___24015);
var G__24019 = (0);
seq__23963_24000 = G__24016;
chunk__23965_24001 = G__24017;
count__23966_24002 = G__24018;
i__23967_24003 = G__24019;
continue;
} else {
var vec__23975_24020 = cljs.core.first.call(null,seq__23963_24014__$1);
var actual_type_24021 = cljs.core.nth.call(null,vec__23975_24020,(0),null);
var __24022 = cljs.core.nth.call(null,vec__23975_24020,(1),null);
var keys_24023 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23992,actual_type_24021,f_23999], null);
var canonical_f_24024 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23991),keys_24023);
dommy.core.update_event_listeners_BANG_.call(null,elem_23991,dommy.utils.dissoc_in,keys_24023);

if(cljs.core.truth_(elem_23991.removeEventListener)){
elem_23991.removeEventListener(cljs.core.name.call(null,actual_type_24021),canonical_f_24024);
} else {
elem_23991.detachEvent(cljs.core.name.call(null,actual_type_24021),canonical_f_24024);
}

var G__24025 = cljs.core.next.call(null,seq__23963_24014__$1);
var G__24026 = null;
var G__24027 = (0);
var G__24028 = (0);
seq__23963_24000 = G__24025;
chunk__23965_24001 = G__24026;
count__23966_24002 = G__24027;
i__23967_24003 = G__24028;
continue;
}
} else {
}
}
break;
}

var G__24029 = seq__23953_23993;
var G__24030 = chunk__23960_23994;
var G__24031 = count__23961_23995;
var G__24032 = (i__23962_23996 + (1));
seq__23953_23993 = G__24029;
chunk__23960_23994 = G__24030;
count__23961_23995 = G__24031;
i__23962_23996 = G__24032;
continue;
} else {
var temp__4657__auto___24033 = cljs.core.seq.call(null,seq__23953_23993);
if(temp__4657__auto___24033){
var seq__23953_24034__$1 = temp__4657__auto___24033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23953_24034__$1)){
var c__20798__auto___24035 = cljs.core.chunk_first.call(null,seq__23953_24034__$1);
var G__24036 = cljs.core.chunk_rest.call(null,seq__23953_24034__$1);
var G__24037 = c__20798__auto___24035;
var G__24038 = cljs.core.count.call(null,c__20798__auto___24035);
var G__24039 = (0);
seq__23953_23993 = G__24036;
chunk__23960_23994 = G__24037;
count__23961_23995 = G__24038;
i__23962_23996 = G__24039;
continue;
} else {
var vec__23978_24040 = cljs.core.first.call(null,seq__23953_24034__$1);
var orig_type_24041 = cljs.core.nth.call(null,vec__23978_24040,(0),null);
var f_24042 = cljs.core.nth.call(null,vec__23978_24040,(1),null);
var seq__23954_24043 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24041,cljs.core.PersistentArrayMap.fromArray([orig_type_24041,cljs.core.identity], true, false)));
var chunk__23956_24044 = null;
var count__23957_24045 = (0);
var i__23958_24046 = (0);
while(true){
if((i__23958_24046 < count__23957_24045)){
var vec__23981_24047 = cljs.core._nth.call(null,chunk__23956_24044,i__23958_24046);
var actual_type_24048 = cljs.core.nth.call(null,vec__23981_24047,(0),null);
var __24049 = cljs.core.nth.call(null,vec__23981_24047,(1),null);
var keys_24050 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23992,actual_type_24048,f_24042], null);
var canonical_f_24051 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23991),keys_24050);
dommy.core.update_event_listeners_BANG_.call(null,elem_23991,dommy.utils.dissoc_in,keys_24050);

if(cljs.core.truth_(elem_23991.removeEventListener)){
elem_23991.removeEventListener(cljs.core.name.call(null,actual_type_24048),canonical_f_24051);
} else {
elem_23991.detachEvent(cljs.core.name.call(null,actual_type_24048),canonical_f_24051);
}

var G__24052 = seq__23954_24043;
var G__24053 = chunk__23956_24044;
var G__24054 = count__23957_24045;
var G__24055 = (i__23958_24046 + (1));
seq__23954_24043 = G__24052;
chunk__23956_24044 = G__24053;
count__23957_24045 = G__24054;
i__23958_24046 = G__24055;
continue;
} else {
var temp__4657__auto___24056__$1 = cljs.core.seq.call(null,seq__23954_24043);
if(temp__4657__auto___24056__$1){
var seq__23954_24057__$1 = temp__4657__auto___24056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23954_24057__$1)){
var c__20798__auto___24058 = cljs.core.chunk_first.call(null,seq__23954_24057__$1);
var G__24059 = cljs.core.chunk_rest.call(null,seq__23954_24057__$1);
var G__24060 = c__20798__auto___24058;
var G__24061 = cljs.core.count.call(null,c__20798__auto___24058);
var G__24062 = (0);
seq__23954_24043 = G__24059;
chunk__23956_24044 = G__24060;
count__23957_24045 = G__24061;
i__23958_24046 = G__24062;
continue;
} else {
var vec__23984_24063 = cljs.core.first.call(null,seq__23954_24057__$1);
var actual_type_24064 = cljs.core.nth.call(null,vec__23984_24063,(0),null);
var __24065 = cljs.core.nth.call(null,vec__23984_24063,(1),null);
var keys_24066 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23992,actual_type_24064,f_24042], null);
var canonical_f_24067 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23991),keys_24066);
dommy.core.update_event_listeners_BANG_.call(null,elem_23991,dommy.utils.dissoc_in,keys_24066);

if(cljs.core.truth_(elem_23991.removeEventListener)){
elem_23991.removeEventListener(cljs.core.name.call(null,actual_type_24064),canonical_f_24067);
} else {
elem_23991.detachEvent(cljs.core.name.call(null,actual_type_24064),canonical_f_24067);
}

var G__24068 = cljs.core.next.call(null,seq__23954_24057__$1);
var G__24069 = null;
var G__24070 = (0);
var G__24071 = (0);
seq__23954_24043 = G__24068;
chunk__23956_24044 = G__24069;
count__23957_24045 = G__24070;
i__23958_24046 = G__24071;
continue;
}
} else {
}
}
break;
}

var G__24072 = cljs.core.next.call(null,seq__23953_24034__$1);
var G__24073 = null;
var G__24074 = (0);
var G__24075 = (0);
seq__23953_23993 = G__24072;
chunk__23960_23994 = G__24073;
count__23961_23995 = G__24074;
i__23962_23996 = G__24075;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq23948){
var G__23949 = cljs.core.first.call(null,seq23948);
var seq23948__$1 = cljs.core.next.call(null,seq23948);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23949,seq23948__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___24091 = arguments.length;
var i__21063__auto___24092 = (0);
while(true){
if((i__21063__auto___24092 < len__21062__auto___24091)){
args__21069__auto__.push((arguments[i__21063__auto___24092]));

var G__24093 = (i__21063__auto___24092 + (1));
i__21063__auto___24092 = G__24093;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((1) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21070__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__24078_24094 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_24095 = cljs.core.nth.call(null,vec__24078_24094,(0),null);
var selector_24096 = cljs.core.nth.call(null,vec__24078_24094,(1),null);
var seq__24081_24097 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__24082_24098 = null;
var count__24083_24099 = (0);
var i__24084_24100 = (0);
while(true){
if((i__24084_24100 < count__24083_24099)){
var vec__24085_24101 = cljs.core._nth.call(null,chunk__24082_24098,i__24084_24100);
var type_24102 = cljs.core.nth.call(null,vec__24085_24101,(0),null);
var f_24103 = cljs.core.nth.call(null,vec__24085_24101,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24102,((function (seq__24081_24097,chunk__24082_24098,count__24083_24099,i__24084_24100,vec__24085_24101,type_24102,f_24103,vec__24078_24094,elem_24095,selector_24096){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24102,dommy$core$this_fn);

return f_24103.call(null,e);
});})(seq__24081_24097,chunk__24082_24098,count__24083_24099,i__24084_24100,vec__24085_24101,type_24102,f_24103,vec__24078_24094,elem_24095,selector_24096))
);

var G__24104 = seq__24081_24097;
var G__24105 = chunk__24082_24098;
var G__24106 = count__24083_24099;
var G__24107 = (i__24084_24100 + (1));
seq__24081_24097 = G__24104;
chunk__24082_24098 = G__24105;
count__24083_24099 = G__24106;
i__24084_24100 = G__24107;
continue;
} else {
var temp__4657__auto___24108 = cljs.core.seq.call(null,seq__24081_24097);
if(temp__4657__auto___24108){
var seq__24081_24109__$1 = temp__4657__auto___24108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24081_24109__$1)){
var c__20798__auto___24110 = cljs.core.chunk_first.call(null,seq__24081_24109__$1);
var G__24111 = cljs.core.chunk_rest.call(null,seq__24081_24109__$1);
var G__24112 = c__20798__auto___24110;
var G__24113 = cljs.core.count.call(null,c__20798__auto___24110);
var G__24114 = (0);
seq__24081_24097 = G__24111;
chunk__24082_24098 = G__24112;
count__24083_24099 = G__24113;
i__24084_24100 = G__24114;
continue;
} else {
var vec__24088_24115 = cljs.core.first.call(null,seq__24081_24109__$1);
var type_24116 = cljs.core.nth.call(null,vec__24088_24115,(0),null);
var f_24117 = cljs.core.nth.call(null,vec__24088_24115,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_24116,((function (seq__24081_24097,chunk__24082_24098,count__24083_24099,i__24084_24100,vec__24088_24115,type_24116,f_24117,seq__24081_24109__$1,temp__4657__auto___24108,vec__24078_24094,elem_24095,selector_24096){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_24116,dommy$core$this_fn);

return f_24117.call(null,e);
});})(seq__24081_24097,chunk__24082_24098,count__24083_24099,i__24084_24100,vec__24088_24115,type_24116,f_24117,seq__24081_24109__$1,temp__4657__auto___24108,vec__24078_24094,elem_24095,selector_24096))
);

var G__24118 = cljs.core.next.call(null,seq__24081_24109__$1);
var G__24119 = null;
var G__24120 = (0);
var G__24121 = (0);
seq__24081_24097 = G__24118;
chunk__24082_24098 = G__24119;
count__24083_24099 = G__24120;
i__24084_24100 = G__24121;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq24076){
var G__24077 = cljs.core.first.call(null,seq24076);
var seq24076__$1 = cljs.core.next.call(null,seq24076);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24077,seq24076__$1);
});


//# sourceMappingURL=core.js.map?rel=1539454393413