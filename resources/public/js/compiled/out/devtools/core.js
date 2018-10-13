// Compiled by ClojureScript 1.9.89 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
devtools.core.known_features = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858)], null);
devtools.core.default_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779)], null);
devtools.core.feature_groups = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),devtools.core.known_features,new cljs.core.Keyword(null,"default","default",-1987822328),devtools.core.default_features], null);
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__34341 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__34341) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var args34343 = [];
var len__21062__auto___34346 = arguments.length;
var i__21063__auto___34347 = (0);
while(true){
if((i__21063__auto___34347 < len__21062__auto___34346)){
args34343.push((arguments[i__21063__auto___34347]));

var G__34348 = (i__21063__auto___34347 + (1));
i__21063__auto___34347 = G__34348;
continue;
} else {
}
break;
}

var G__34345 = args34343.length;
switch (G__34345) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34343.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.core.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__34351 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__34351) {
case "custom-formatters":
return devtools.custom_formatters.installed_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var args34353 = [];
var len__21062__auto___34356 = arguments.length;
var i__21063__auto___34357 = (0);
while(true){
if((i__21063__auto___34357 < len__21062__auto___34356)){
args34353.push((arguments[i__21063__auto___34357]));

var G__34358 = (i__21063__auto___34357 + (1));
i__21063__auto___34357 = G__34358;
continue;
} else {
}
break;
}

var G__34355 = args34353.length;
switch (G__34355) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34353.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.core.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args34360 = [];
var len__21062__auto___34363 = arguments.length;
var i__21063__auto___34364 = (0);
while(true){
if((i__21063__auto___34364 < len__21062__auto___34363)){
args34360.push((arguments[i__21063__auto___34364]));

var G__34365 = (i__21063__auto___34364 + (1));
i__21063__auto___34364 = G__34365;
continue;
} else {
}
break;
}

var G__34362 = args34360.length;
switch (G__34362) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34360.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.core.feature_groups);
devtools.util.display_banner_if_needed_BANG_.call(null,features,devtools.core.feature_groups);

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),features,devtools.core.is_feature_available_QMARK_,devtools.custom_formatters.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),features,devtools.core.is_feature_available_QMARK_,devtools.sanity_hints.install_BANG_);
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

return devtools.sanity_hints.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str("devtools.core/set-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/enable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/disable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___34368 = arguments.length;
var i__21063__auto___34369 = (0);
while(true){
if((i__21063__auto___34369 < len__21062__auto___34368)){
args__21069__auto__.push((arguments[i__21063__auto___34369]));

var G__34370 = (i__21063__auto___34369 + (1));
i__21063__auto___34369 = G__34370;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/enable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq34367){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34367));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___34372 = arguments.length;
var i__21063__auto___34373 = (0);
while(true){
if((i__21063__auto___34373 < len__21062__auto___34372)){
args__21069__auto__.push((arguments[i__21063__auto___34373]));

var G__34374 = (i__21063__auto___34373 + (1));
i__21063__auto___34373 = G__34374;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/disable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq34371){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34371));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str("devtools.core/single-feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___34376 = arguments.length;
var i__21063__auto___34377 = (0);
while(true){
if((i__21063__auto___34377 < len__21062__auto___34376)){
args__21069__auto__.push((arguments[i__21063__auto___34377]));

var G__34378 = (i__21063__auto___34377 + (1));
i__21063__auto___34377 = G__34378;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((0) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__21070__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq34375){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34375));
});


//# sourceMappingURL=core.js.map?rel=1539454402918