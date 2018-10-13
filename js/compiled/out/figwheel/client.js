// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args31264 = [];
var len__21062__auto___31267 = arguments.length;
var i__21063__auto___31268 = (0);
while(true){
if((i__21063__auto___31268 < len__21062__auto___31267)){
args31264.push((arguments[i__21063__auto___31268]));

var G__31269 = (i__21063__auto___31268 + (1));
i__21063__auto___31268 = G__31269;
continue;
} else {
}
break;
}

var G__31266 = args31264.length;
switch (G__31266) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31264.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21069__auto__ = [];
var len__21062__auto___31272 = arguments.length;
var i__21063__auto___31273 = (0);
while(true){
if((i__21063__auto___31273 < len__21062__auto___31272)){
args__21069__auto__.push((arguments[i__21063__auto___31273]));

var G__31274 = (i__21063__auto___31273 + (1));
i__21063__auto___31273 = G__31274;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31271){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31271));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21069__auto__ = [];
var len__21062__auto___31276 = arguments.length;
var i__21063__auto___31277 = (0);
while(true){
if((i__21063__auto___31277 < len__21062__auto___31276)){
args__21069__auto__.push((arguments[i__21063__auto___31277]));

var G__31278 = (i__21063__auto___31277 + (1));
i__21063__auto___31277 = G__31278;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31275){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31275));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31279 = cljs.core._EQ_;
var expr__31280 = (function (){var or__19987__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31283){if((e31283 instanceof Error)){
var e = e31283;
return false;
} else {
throw e31283;

}
}})();
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31279.call(null,"true",expr__31280))){
return true;
} else {
if(cljs.core.truth_(pred__31279.call(null,"false",expr__31280))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31280)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31285){if((e31285 instanceof Error)){
var e = e31285;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31285;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31286){
var map__31289 = p__31286;
var map__31289__$1 = ((((!((map__31289 == null)))?((((map__31289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);
var message = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19987__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19975__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19975__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19975__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25140__auto___31451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___31451,ch){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___31451,ch){
return (function (state_31420){
var state_val_31421 = (state_31420[(1)]);
if((state_val_31421 === (7))){
var inst_31416 = (state_31420[(2)]);
var state_31420__$1 = state_31420;
var statearr_31422_31452 = state_31420__$1;
(statearr_31422_31452[(2)] = inst_31416);

(statearr_31422_31452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (1))){
var state_31420__$1 = state_31420;
var statearr_31423_31453 = state_31420__$1;
(statearr_31423_31453[(2)] = null);

(statearr_31423_31453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (4))){
var inst_31373 = (state_31420[(7)]);
var inst_31373__$1 = (state_31420[(2)]);
var state_31420__$1 = (function (){var statearr_31424 = state_31420;
(statearr_31424[(7)] = inst_31373__$1);

return statearr_31424;
})();
if(cljs.core.truth_(inst_31373__$1)){
var statearr_31425_31454 = state_31420__$1;
(statearr_31425_31454[(1)] = (5));

} else {
var statearr_31426_31455 = state_31420__$1;
(statearr_31426_31455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (15))){
var inst_31380 = (state_31420[(8)]);
var inst_31395 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31380);
var inst_31396 = cljs.core.first.call(null,inst_31395);
var inst_31397 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31396);
var inst_31398 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31397)].join('');
var inst_31399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31398);
var state_31420__$1 = state_31420;
var statearr_31427_31456 = state_31420__$1;
(statearr_31427_31456[(2)] = inst_31399);

(statearr_31427_31456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (13))){
var inst_31404 = (state_31420[(2)]);
var state_31420__$1 = state_31420;
var statearr_31428_31457 = state_31420__$1;
(statearr_31428_31457[(2)] = inst_31404);

(statearr_31428_31457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (6))){
var state_31420__$1 = state_31420;
var statearr_31429_31458 = state_31420__$1;
(statearr_31429_31458[(2)] = null);

(statearr_31429_31458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (17))){
var inst_31402 = (state_31420[(2)]);
var state_31420__$1 = state_31420;
var statearr_31430_31459 = state_31420__$1;
(statearr_31430_31459[(2)] = inst_31402);

(statearr_31430_31459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (3))){
var inst_31418 = (state_31420[(2)]);
var state_31420__$1 = state_31420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31420__$1,inst_31418);
} else {
if((state_val_31421 === (12))){
var inst_31379 = (state_31420[(9)]);
var inst_31393 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31379,opts);
var state_31420__$1 = state_31420;
if(cljs.core.truth_(inst_31393)){
var statearr_31431_31460 = state_31420__$1;
(statearr_31431_31460[(1)] = (15));

} else {
var statearr_31432_31461 = state_31420__$1;
(statearr_31432_31461[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (2))){
var state_31420__$1 = state_31420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31420__$1,(4),ch);
} else {
if((state_val_31421 === (11))){
var inst_31380 = (state_31420[(8)]);
var inst_31385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31386 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31380);
var inst_31387 = cljs.core.async.timeout.call(null,(1000));
var inst_31388 = [inst_31386,inst_31387];
var inst_31389 = (new cljs.core.PersistentVector(null,2,(5),inst_31385,inst_31388,null));
var state_31420__$1 = state_31420;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31420__$1,(14),inst_31389);
} else {
if((state_val_31421 === (9))){
var inst_31380 = (state_31420[(8)]);
var inst_31406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31407 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31380);
var inst_31408 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31407);
var inst_31409 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31408)].join('');
var inst_31410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31409);
var state_31420__$1 = (function (){var statearr_31433 = state_31420;
(statearr_31433[(10)] = inst_31406);

return statearr_31433;
})();
var statearr_31434_31462 = state_31420__$1;
(statearr_31434_31462[(2)] = inst_31410);

(statearr_31434_31462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (5))){
var inst_31373 = (state_31420[(7)]);
var inst_31375 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31376 = (new cljs.core.PersistentArrayMap(null,2,inst_31375,null));
var inst_31377 = (new cljs.core.PersistentHashSet(null,inst_31376,null));
var inst_31378 = figwheel.client.focus_msgs.call(null,inst_31377,inst_31373);
var inst_31379 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31378);
var inst_31380 = cljs.core.first.call(null,inst_31378);
var inst_31381 = figwheel.client.autoload_QMARK_.call(null);
var state_31420__$1 = (function (){var statearr_31435 = state_31420;
(statearr_31435[(8)] = inst_31380);

(statearr_31435[(9)] = inst_31379);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31381)){
var statearr_31436_31463 = state_31420__$1;
(statearr_31436_31463[(1)] = (8));

} else {
var statearr_31437_31464 = state_31420__$1;
(statearr_31437_31464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (14))){
var inst_31391 = (state_31420[(2)]);
var state_31420__$1 = state_31420;
var statearr_31438_31465 = state_31420__$1;
(statearr_31438_31465[(2)] = inst_31391);

(statearr_31438_31465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (16))){
var state_31420__$1 = state_31420;
var statearr_31439_31466 = state_31420__$1;
(statearr_31439_31466[(2)] = null);

(statearr_31439_31466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (10))){
var inst_31412 = (state_31420[(2)]);
var state_31420__$1 = (function (){var statearr_31440 = state_31420;
(statearr_31440[(11)] = inst_31412);

return statearr_31440;
})();
var statearr_31441_31467 = state_31420__$1;
(statearr_31441_31467[(2)] = null);

(statearr_31441_31467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31421 === (8))){
var inst_31379 = (state_31420[(9)]);
var inst_31383 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31379,opts);
var state_31420__$1 = state_31420;
if(cljs.core.truth_(inst_31383)){
var statearr_31442_31468 = state_31420__$1;
(statearr_31442_31468[(1)] = (11));

} else {
var statearr_31443_31469 = state_31420__$1;
(statearr_31443_31469[(1)] = (12));

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
});})(c__25140__auto___31451,ch))
;
return ((function (switch__25028__auto__,c__25140__auto___31451,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25029__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25029__auto____0 = (function (){
var statearr_31447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31447[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25029__auto__);

(statearr_31447[(1)] = (1));

return statearr_31447;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25029__auto____1 = (function (state_31420){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_31420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e31448){if((e31448 instanceof Object)){
var ex__25032__auto__ = e31448;
var statearr_31449_31470 = state_31420;
(statearr_31449_31470[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31471 = state_31420;
state_31420 = G__31471;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25029__auto__ = function(state_31420){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25029__auto____1.call(this,state_31420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25029__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25029__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___31451,ch))
})();
var state__25142__auto__ = (function (){var statearr_31450 = f__25141__auto__.call(null);
(statearr_31450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___31451);

return statearr_31450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___31451,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31472_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31472_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31475 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31475){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31474){if((e31474 instanceof Error)){
var e = e31474;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31475], null));
} else {
var e = e31474;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31475))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31476){
var map__31485 = p__31476;
var map__31485__$1 = ((((!((map__31485 == null)))?((((map__31485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31485):map__31485);
var opts = map__31485__$1;
var build_id = cljs.core.get.call(null,map__31485__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31485,map__31485__$1,opts,build_id){
return (function (p__31487){
var vec__31488 = p__31487;
var seq__31489 = cljs.core.seq.call(null,vec__31488);
var first__31490 = cljs.core.first.call(null,seq__31489);
var seq__31489__$1 = cljs.core.next.call(null,seq__31489);
var map__31491 = first__31490;
var map__31491__$1 = ((((!((map__31491 == null)))?((((map__31491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31491):map__31491);
var msg = map__31491__$1;
var msg_name = cljs.core.get.call(null,map__31491__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31489__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31488,seq__31489,first__31490,seq__31489__$1,map__31491,map__31491__$1,msg,msg_name,_,map__31485,map__31485__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31488,seq__31489,first__31490,seq__31489__$1,map__31491,map__31491__$1,msg,msg_name,_,map__31485,map__31485__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31485,map__31485__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31499){
var vec__31500 = p__31499;
var seq__31501 = cljs.core.seq.call(null,vec__31500);
var first__31502 = cljs.core.first.call(null,seq__31501);
var seq__31501__$1 = cljs.core.next.call(null,seq__31501);
var map__31503 = first__31502;
var map__31503__$1 = ((((!((map__31503 == null)))?((((map__31503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31503):map__31503);
var msg = map__31503__$1;
var msg_name = cljs.core.get.call(null,map__31503__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31501__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31505){
var map__31517 = p__31505;
var map__31517__$1 = ((((!((map__31517 == null)))?((((map__31517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31517):map__31517);
var on_compile_warning = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31517,map__31517__$1,on_compile_warning,on_compile_fail){
return (function (p__31519){
var vec__31520 = p__31519;
var seq__31521 = cljs.core.seq.call(null,vec__31520);
var first__31522 = cljs.core.first.call(null,seq__31521);
var seq__31521__$1 = cljs.core.next.call(null,seq__31521);
var map__31523 = first__31522;
var map__31523__$1 = ((((!((map__31523 == null)))?((((map__31523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31523):map__31523);
var msg = map__31523__$1;
var msg_name = cljs.core.get.call(null,map__31523__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31521__$1;
var pred__31525 = cljs.core._EQ_;
var expr__31526 = msg_name;
if(cljs.core.truth_(pred__31525.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31526))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31525.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31526))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31517,map__31517__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__,msg_hist,msg_names,msg){
return (function (state_31734){
var state_val_31735 = (state_31734[(1)]);
if((state_val_31735 === (7))){
var inst_31662 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31662)){
var statearr_31736_31782 = state_31734__$1;
(statearr_31736_31782[(1)] = (8));

} else {
var statearr_31737_31783 = state_31734__$1;
(statearr_31737_31783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (20))){
var inst_31728 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31738_31784 = state_31734__$1;
(statearr_31738_31784[(2)] = inst_31728);

(statearr_31738_31784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (27))){
var inst_31724 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31739_31785 = state_31734__$1;
(statearr_31739_31785[(2)] = inst_31724);

(statearr_31739_31785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (1))){
var inst_31655 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31655)){
var statearr_31740_31786 = state_31734__$1;
(statearr_31740_31786[(1)] = (2));

} else {
var statearr_31741_31787 = state_31734__$1;
(statearr_31741_31787[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (24))){
var inst_31726 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31742_31788 = state_31734__$1;
(statearr_31742_31788[(2)] = inst_31726);

(statearr_31742_31788[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (4))){
var inst_31732 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31734__$1,inst_31732);
} else {
if((state_val_31735 === (15))){
var inst_31730 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31743_31789 = state_31734__$1;
(statearr_31743_31789[(2)] = inst_31730);

(statearr_31743_31789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (21))){
var inst_31689 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31744_31790 = state_31734__$1;
(statearr_31744_31790[(2)] = inst_31689);

(statearr_31744_31790[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (31))){
var inst_31713 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31713)){
var statearr_31745_31791 = state_31734__$1;
(statearr_31745_31791[(1)] = (34));

} else {
var statearr_31746_31792 = state_31734__$1;
(statearr_31746_31792[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (32))){
var inst_31722 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31747_31793 = state_31734__$1;
(statearr_31747_31793[(2)] = inst_31722);

(statearr_31747_31793[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (33))){
var inst_31711 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31748_31794 = state_31734__$1;
(statearr_31748_31794[(2)] = inst_31711);

(statearr_31748_31794[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (13))){
var inst_31676 = figwheel.client.heads_up.clear.call(null);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(16),inst_31676);
} else {
if((state_val_31735 === (22))){
var inst_31693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31694 = figwheel.client.heads_up.append_warning_message.call(null,inst_31693);
var state_31734__$1 = state_31734;
var statearr_31749_31795 = state_31734__$1;
(statearr_31749_31795[(2)] = inst_31694);

(statearr_31749_31795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (36))){
var inst_31720 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31750_31796 = state_31734__$1;
(statearr_31750_31796[(2)] = inst_31720);

(statearr_31750_31796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (29))){
var inst_31704 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31751_31797 = state_31734__$1;
(statearr_31751_31797[(2)] = inst_31704);

(statearr_31751_31797[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (6))){
var inst_31657 = (state_31734[(7)]);
var state_31734__$1 = state_31734;
var statearr_31752_31798 = state_31734__$1;
(statearr_31752_31798[(2)] = inst_31657);

(statearr_31752_31798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (28))){
var inst_31700 = (state_31734[(2)]);
var inst_31701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31702 = figwheel.client.heads_up.display_warning.call(null,inst_31701);
var state_31734__$1 = (function (){var statearr_31753 = state_31734;
(statearr_31753[(8)] = inst_31700);

return statearr_31753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(29),inst_31702);
} else {
if((state_val_31735 === (25))){
var inst_31698 = figwheel.client.heads_up.clear.call(null);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(28),inst_31698);
} else {
if((state_val_31735 === (34))){
var inst_31715 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(37),inst_31715);
} else {
if((state_val_31735 === (17))){
var inst_31682 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31754_31799 = state_31734__$1;
(statearr_31754_31799[(2)] = inst_31682);

(statearr_31754_31799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (3))){
var inst_31674 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31674)){
var statearr_31755_31800 = state_31734__$1;
(statearr_31755_31800[(1)] = (13));

} else {
var statearr_31756_31801 = state_31734__$1;
(statearr_31756_31801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (12))){
var inst_31670 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31757_31802 = state_31734__$1;
(statearr_31757_31802[(2)] = inst_31670);

(statearr_31757_31802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (2))){
var inst_31657 = (state_31734[(7)]);
var inst_31657__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31734__$1 = (function (){var statearr_31758 = state_31734;
(statearr_31758[(7)] = inst_31657__$1);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31657__$1)){
var statearr_31759_31803 = state_31734__$1;
(statearr_31759_31803[(1)] = (5));

} else {
var statearr_31760_31804 = state_31734__$1;
(statearr_31760_31804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (23))){
var inst_31696 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31696)){
var statearr_31761_31805 = state_31734__$1;
(statearr_31761_31805[(1)] = (25));

} else {
var statearr_31762_31806 = state_31734__$1;
(statearr_31762_31806[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (35))){
var state_31734__$1 = state_31734;
var statearr_31763_31807 = state_31734__$1;
(statearr_31763_31807[(2)] = null);

(statearr_31763_31807[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (19))){
var inst_31691 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31691)){
var statearr_31764_31808 = state_31734__$1;
(statearr_31764_31808[(1)] = (22));

} else {
var statearr_31765_31809 = state_31734__$1;
(statearr_31765_31809[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (11))){
var inst_31666 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31766_31810 = state_31734__$1;
(statearr_31766_31810[(2)] = inst_31666);

(statearr_31766_31810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (9))){
var inst_31668 = figwheel.client.heads_up.clear.call(null);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(12),inst_31668);
} else {
if((state_val_31735 === (5))){
var inst_31659 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31734__$1 = state_31734;
var statearr_31767_31811 = state_31734__$1;
(statearr_31767_31811[(2)] = inst_31659);

(statearr_31767_31811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (14))){
var inst_31684 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31684)){
var statearr_31768_31812 = state_31734__$1;
(statearr_31768_31812[(1)] = (18));

} else {
var statearr_31769_31813 = state_31734__$1;
(statearr_31769_31813[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (26))){
var inst_31706 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31734__$1 = state_31734;
if(cljs.core.truth_(inst_31706)){
var statearr_31770_31814 = state_31734__$1;
(statearr_31770_31814[(1)] = (30));

} else {
var statearr_31771_31815 = state_31734__$1;
(statearr_31771_31815[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (16))){
var inst_31678 = (state_31734[(2)]);
var inst_31679 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31680 = figwheel.client.heads_up.display_exception.call(null,inst_31679);
var state_31734__$1 = (function (){var statearr_31772 = state_31734;
(statearr_31772[(9)] = inst_31678);

return statearr_31772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(17),inst_31680);
} else {
if((state_val_31735 === (30))){
var inst_31708 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31709 = figwheel.client.heads_up.display_warning.call(null,inst_31708);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(33),inst_31709);
} else {
if((state_val_31735 === (10))){
var inst_31672 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31773_31816 = state_31734__$1;
(statearr_31773_31816[(2)] = inst_31672);

(statearr_31773_31816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (18))){
var inst_31686 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31687 = figwheel.client.heads_up.display_exception.call(null,inst_31686);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(21),inst_31687);
} else {
if((state_val_31735 === (37))){
var inst_31717 = (state_31734[(2)]);
var state_31734__$1 = state_31734;
var statearr_31774_31817 = state_31734__$1;
(statearr_31774_31817[(2)] = inst_31717);

(statearr_31774_31817[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31735 === (8))){
var inst_31664 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31734__$1 = state_31734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31734__$1,(11),inst_31664);
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
});})(c__25140__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25028__auto__,c__25140__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto____0 = (function (){
var statearr_31778 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31778[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto__);

(statearr_31778[(1)] = (1));

return statearr_31778;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto____1 = (function (state_31734){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_31734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e31779){if((e31779 instanceof Object)){
var ex__25032__auto__ = e31779;
var statearr_31780_31818 = state_31734;
(statearr_31780_31818[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31734;
state_31734 = G__31819;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto__ = function(state_31734){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto____1.call(this,state_31734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__,msg_hist,msg_names,msg))
})();
var state__25142__auto__ = (function (){var statearr_31781 = f__25141__auto__.call(null);
(statearr_31781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_31781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__,msg_hist,msg_names,msg))
);

return c__25140__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25140__auto___31882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___31882,ch){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___31882,ch){
return (function (state_31865){
var state_val_31866 = (state_31865[(1)]);
if((state_val_31866 === (1))){
var state_31865__$1 = state_31865;
var statearr_31867_31883 = state_31865__$1;
(statearr_31867_31883[(2)] = null);

(statearr_31867_31883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (2))){
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31865__$1,(4),ch);
} else {
if((state_val_31866 === (3))){
var inst_31863 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31865__$1,inst_31863);
} else {
if((state_val_31866 === (4))){
var inst_31853 = (state_31865[(7)]);
var inst_31853__$1 = (state_31865[(2)]);
var state_31865__$1 = (function (){var statearr_31868 = state_31865;
(statearr_31868[(7)] = inst_31853__$1);

return statearr_31868;
})();
if(cljs.core.truth_(inst_31853__$1)){
var statearr_31869_31884 = state_31865__$1;
(statearr_31869_31884[(1)] = (5));

} else {
var statearr_31870_31885 = state_31865__$1;
(statearr_31870_31885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (5))){
var inst_31853 = (state_31865[(7)]);
var inst_31855 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31853);
var state_31865__$1 = state_31865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31865__$1,(8),inst_31855);
} else {
if((state_val_31866 === (6))){
var state_31865__$1 = state_31865;
var statearr_31871_31886 = state_31865__$1;
(statearr_31871_31886[(2)] = null);

(statearr_31871_31886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (7))){
var inst_31861 = (state_31865[(2)]);
var state_31865__$1 = state_31865;
var statearr_31872_31887 = state_31865__$1;
(statearr_31872_31887[(2)] = inst_31861);

(statearr_31872_31887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31866 === (8))){
var inst_31857 = (state_31865[(2)]);
var state_31865__$1 = (function (){var statearr_31873 = state_31865;
(statearr_31873[(8)] = inst_31857);

return statearr_31873;
})();
var statearr_31874_31888 = state_31865__$1;
(statearr_31874_31888[(2)] = null);

(statearr_31874_31888[(1)] = (2));


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
});})(c__25140__auto___31882,ch))
;
return ((function (switch__25028__auto__,c__25140__auto___31882,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25029__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25029__auto____0 = (function (){
var statearr_31878 = [null,null,null,null,null,null,null,null,null];
(statearr_31878[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25029__auto__);

(statearr_31878[(1)] = (1));

return statearr_31878;
});
var figwheel$client$heads_up_plugin_$_state_machine__25029__auto____1 = (function (state_31865){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_31865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e31879){if((e31879 instanceof Object)){
var ex__25032__auto__ = e31879;
var statearr_31880_31889 = state_31865;
(statearr_31880_31889[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31890 = state_31865;
state_31865 = G__31890;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25029__auto__ = function(state_31865){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25029__auto____1.call(this,state_31865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25029__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25029__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___31882,ch))
})();
var state__25142__auto__ = (function (){var statearr_31881 = f__25141__auto__.call(null);
(statearr_31881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___31882);

return statearr_31881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___31882,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__){
return (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (1))){
var inst_31906 = cljs.core.async.timeout.call(null,(3000));
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31911__$1,(2),inst_31906);
} else {
if((state_val_31912 === (2))){
var inst_31908 = (state_31911[(2)]);
var inst_31909 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31911__$1 = (function (){var statearr_31913 = state_31911;
(statearr_31913[(7)] = inst_31908);

return statearr_31913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31911__$1,inst_31909);
} else {
return null;
}
}
});})(c__25140__auto__))
;
return ((function (switch__25028__auto__,c__25140__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25029__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25029__auto____0 = (function (){
var statearr_31917 = [null,null,null,null,null,null,null,null];
(statearr_31917[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25029__auto__);

(statearr_31917[(1)] = (1));

return statearr_31917;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25029__auto____1 = (function (state_31911){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_31911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e31918){if((e31918 instanceof Object)){
var ex__25032__auto__ = e31918;
var statearr_31919_31921 = state_31911;
(statearr_31919_31921[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31922 = state_31911;
state_31911 = G__31922;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25029__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25029__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25029__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25029__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__))
})();
var state__25142__auto__ = (function (){var statearr_31920 = f__25141__auto__.call(null);
(statearr_31920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_31920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__))
);

return c__25140__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31945){
var state_val_31946 = (state_31945[(1)]);
if((state_val_31946 === (1))){
var inst_31939 = cljs.core.async.timeout.call(null,(2000));
var state_31945__$1 = state_31945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31945__$1,(2),inst_31939);
} else {
if((state_val_31946 === (2))){
var inst_31941 = (state_31945[(2)]);
var inst_31942 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31943 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31942);
var state_31945__$1 = (function (){var statearr_31947 = state_31945;
(statearr_31947[(7)] = inst_31941);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31945__$1,inst_31943);
} else {
return null;
}
}
});})(c__25140__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__25028__auto__,c__25140__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto____0 = (function (){
var statearr_31951 = [null,null,null,null,null,null,null,null];
(statearr_31951[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto__);

(statearr_31951[(1)] = (1));

return statearr_31951;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto____1 = (function (state_31945){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_31945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e31952){if((e31952 instanceof Object)){
var ex__25032__auto__ = e31952;
var statearr_31953_31955 = state_31945;
(statearr_31953_31955[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31956 = state_31945;
state_31945 = G__31956;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto__ = function(state_31945){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto____1.call(this,state_31945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__,figwheel_version,temp__4657__auto__))
})();
var state__25142__auto__ = (function (){var statearr_31954 = f__25141__auto__.call(null);
(statearr_31954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__,figwheel_version,temp__4657__auto__))
);

return c__25140__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31957){
var map__31961 = p__31957;
var map__31961__$1 = ((((!((map__31961 == null)))?((((map__31961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31961):map__31961);
var file = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31963 = "";
var G__31963__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31963),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31963);
var G__31963__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31963__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31963__$1);
if(cljs.core.truth_((function (){var and__19975__auto__ = line;
if(cljs.core.truth_(and__19975__auto__)){
return column;
} else {
return and__19975__auto__;
}
})())){
return [cljs.core.str(G__31963__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31963__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31964){
var map__31971 = p__31964;
var map__31971__$1 = ((((!((map__31971 == null)))?((((map__31971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31971):map__31971);
var ed = map__31971__$1;
var formatted_exception = cljs.core.get.call(null,map__31971__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31971__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31971__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31973_31977 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31974_31978 = null;
var count__31975_31979 = (0);
var i__31976_31980 = (0);
while(true){
if((i__31976_31980 < count__31975_31979)){
var msg_31981 = cljs.core._nth.call(null,chunk__31974_31978,i__31976_31980);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31981);

var G__31982 = seq__31973_31977;
var G__31983 = chunk__31974_31978;
var G__31984 = count__31975_31979;
var G__31985 = (i__31976_31980 + (1));
seq__31973_31977 = G__31982;
chunk__31974_31978 = G__31983;
count__31975_31979 = G__31984;
i__31976_31980 = G__31985;
continue;
} else {
var temp__4657__auto___31986 = cljs.core.seq.call(null,seq__31973_31977);
if(temp__4657__auto___31986){
var seq__31973_31987__$1 = temp__4657__auto___31986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31973_31987__$1)){
var c__20798__auto___31988 = cljs.core.chunk_first.call(null,seq__31973_31987__$1);
var G__31989 = cljs.core.chunk_rest.call(null,seq__31973_31987__$1);
var G__31990 = c__20798__auto___31988;
var G__31991 = cljs.core.count.call(null,c__20798__auto___31988);
var G__31992 = (0);
seq__31973_31977 = G__31989;
chunk__31974_31978 = G__31990;
count__31975_31979 = G__31991;
i__31976_31980 = G__31992;
continue;
} else {
var msg_31993 = cljs.core.first.call(null,seq__31973_31987__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31993);

var G__31994 = cljs.core.next.call(null,seq__31973_31987__$1);
var G__31995 = null;
var G__31996 = (0);
var G__31997 = (0);
seq__31973_31977 = G__31994;
chunk__31974_31978 = G__31995;
count__31975_31979 = G__31996;
i__31976_31980 = G__31997;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31998){
var map__32001 = p__31998;
var map__32001__$1 = ((((!((map__32001 == null)))?((((map__32001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32001):map__32001);
var w = map__32001__$1;
var message = cljs.core.get.call(null,map__32001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19975__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19975__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19975__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32013 = cljs.core.seq.call(null,plugins);
var chunk__32014 = null;
var count__32015 = (0);
var i__32016 = (0);
while(true){
if((i__32016 < count__32015)){
var vec__32017 = cljs.core._nth.call(null,chunk__32014,i__32016);
var k = cljs.core.nth.call(null,vec__32017,(0),null);
var plugin = cljs.core.nth.call(null,vec__32017,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32023 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32013,chunk__32014,count__32015,i__32016,pl_32023,vec__32017,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32023.call(null,msg_hist);
});})(seq__32013,chunk__32014,count__32015,i__32016,pl_32023,vec__32017,k,plugin))
);
} else {
}

var G__32024 = seq__32013;
var G__32025 = chunk__32014;
var G__32026 = count__32015;
var G__32027 = (i__32016 + (1));
seq__32013 = G__32024;
chunk__32014 = G__32025;
count__32015 = G__32026;
i__32016 = G__32027;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32013);
if(temp__4657__auto__){
var seq__32013__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32013__$1)){
var c__20798__auto__ = cljs.core.chunk_first.call(null,seq__32013__$1);
var G__32028 = cljs.core.chunk_rest.call(null,seq__32013__$1);
var G__32029 = c__20798__auto__;
var G__32030 = cljs.core.count.call(null,c__20798__auto__);
var G__32031 = (0);
seq__32013 = G__32028;
chunk__32014 = G__32029;
count__32015 = G__32030;
i__32016 = G__32031;
continue;
} else {
var vec__32020 = cljs.core.first.call(null,seq__32013__$1);
var k = cljs.core.nth.call(null,vec__32020,(0),null);
var plugin = cljs.core.nth.call(null,vec__32020,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32032 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32013,chunk__32014,count__32015,i__32016,pl_32032,vec__32020,k,plugin,seq__32013__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32032.call(null,msg_hist);
});})(seq__32013,chunk__32014,count__32015,i__32016,pl_32032,vec__32020,k,plugin,seq__32013__$1,temp__4657__auto__))
);
} else {
}

var G__32033 = cljs.core.next.call(null,seq__32013__$1);
var G__32034 = null;
var G__32035 = (0);
var G__32036 = (0);
seq__32013 = G__32033;
chunk__32014 = G__32034;
count__32015 = G__32035;
i__32016 = G__32036;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32037 = [];
var len__21062__auto___32044 = arguments.length;
var i__21063__auto___32045 = (0);
while(true){
if((i__21063__auto___32045 < len__21062__auto___32044)){
args32037.push((arguments[i__21063__auto___32045]));

var G__32046 = (i__21063__auto___32045 + (1));
i__21063__auto___32045 = G__32046;
continue;
} else {
}
break;
}

var G__32039 = args32037.length;
switch (G__32039) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32037.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32040_32048 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32041_32049 = null;
var count__32042_32050 = (0);
var i__32043_32051 = (0);
while(true){
if((i__32043_32051 < count__32042_32050)){
var msg_32052 = cljs.core._nth.call(null,chunk__32041_32049,i__32043_32051);
figwheel.client.socket.handle_incoming_message.call(null,msg_32052);

var G__32053 = seq__32040_32048;
var G__32054 = chunk__32041_32049;
var G__32055 = count__32042_32050;
var G__32056 = (i__32043_32051 + (1));
seq__32040_32048 = G__32053;
chunk__32041_32049 = G__32054;
count__32042_32050 = G__32055;
i__32043_32051 = G__32056;
continue;
} else {
var temp__4657__auto___32057 = cljs.core.seq.call(null,seq__32040_32048);
if(temp__4657__auto___32057){
var seq__32040_32058__$1 = temp__4657__auto___32057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32040_32058__$1)){
var c__20798__auto___32059 = cljs.core.chunk_first.call(null,seq__32040_32058__$1);
var G__32060 = cljs.core.chunk_rest.call(null,seq__32040_32058__$1);
var G__32061 = c__20798__auto___32059;
var G__32062 = cljs.core.count.call(null,c__20798__auto___32059);
var G__32063 = (0);
seq__32040_32048 = G__32060;
chunk__32041_32049 = G__32061;
count__32042_32050 = G__32062;
i__32043_32051 = G__32063;
continue;
} else {
var msg_32064 = cljs.core.first.call(null,seq__32040_32058__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32064);

var G__32065 = cljs.core.next.call(null,seq__32040_32058__$1);
var G__32066 = null;
var G__32067 = (0);
var G__32068 = (0);
seq__32040_32048 = G__32065;
chunk__32041_32049 = G__32066;
count__32042_32050 = G__32067;
i__32043_32051 = G__32068;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21069__auto__ = [];
var len__21062__auto___32073 = arguments.length;
var i__21063__auto___32074 = (0);
while(true){
if((i__21063__auto___32074 < len__21062__auto___32073)){
args__21069__auto__.push((arguments[i__21063__auto___32074]));

var G__32075 = (i__21063__auto___32074 + (1));
i__21063__auto___32074 = G__32075;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32070){
var map__32071 = p__32070;
var map__32071__$1 = ((((!((map__32071 == null)))?((((map__32071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32071):map__32071);
var opts = map__32071__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32069){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32069));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32077){if((e32077 instanceof Error)){
var e = e32077;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32077;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32081){
var map__32082 = p__32081;
var map__32082__$1 = ((((!((map__32082 == null)))?((((map__32082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32082):map__32082);
var msg_name = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1539454399440