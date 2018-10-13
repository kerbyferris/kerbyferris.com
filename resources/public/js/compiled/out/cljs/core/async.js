// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25185 = [];
var len__21062__auto___25191 = arguments.length;
var i__21063__auto___25192 = (0);
while(true){
if((i__21063__auto___25192 < len__21062__auto___25191)){
args25185.push((arguments[i__21063__auto___25192]));

var G__25193 = (i__21063__auto___25192 + (1));
i__21063__auto___25192 = G__25193;
continue;
} else {
}
break;
}

var G__25187 = args25185.length;
switch (G__25187) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25185.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25188 = (function (f,blockable,meta25189){
this.f = f;
this.blockable = blockable;
this.meta25189 = meta25189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25190,meta25189__$1){
var self__ = this;
var _25190__$1 = this;
return (new cljs.core.async.t_cljs$core$async25188(self__.f,self__.blockable,meta25189__$1));
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25190){
var self__ = this;
var _25190__$1 = this;
return self__.meta25189;
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25189","meta25189",-1099744750,null)], null);
});

cljs.core.async.t_cljs$core$async25188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25188";

cljs.core.async.t_cljs$core$async25188.cljs$lang$ctorPrWriter = (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async25188");
});

cljs.core.async.__GT_t_cljs$core$async25188 = (function cljs$core$async$__GT_t_cljs$core$async25188(f__$1,blockable__$1,meta25189){
return (new cljs.core.async.t_cljs$core$async25188(f__$1,blockable__$1,meta25189));
});

}

return (new cljs.core.async.t_cljs$core$async25188(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25197 = [];
var len__21062__auto___25200 = arguments.length;
var i__21063__auto___25201 = (0);
while(true){
if((i__21063__auto___25201 < len__21062__auto___25200)){
args25197.push((arguments[i__21063__auto___25201]));

var G__25202 = (i__21063__auto___25201 + (1));
i__21063__auto___25201 = G__25202;
continue;
} else {
}
break;
}

var G__25199 = args25197.length;
switch (G__25199) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25197.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args25204 = [];
var len__21062__auto___25207 = arguments.length;
var i__21063__auto___25208 = (0);
while(true){
if((i__21063__auto___25208 < len__21062__auto___25207)){
args25204.push((arguments[i__21063__auto___25208]));

var G__25209 = (i__21063__auto___25208 + (1));
i__21063__auto___25208 = G__25209;
continue;
} else {
}
break;
}

var G__25206 = args25204.length;
switch (G__25206) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25204.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25211 = [];
var len__21062__auto___25214 = arguments.length;
var i__21063__auto___25215 = (0);
while(true){
if((i__21063__auto___25215 < len__21062__auto___25214)){
args25211.push((arguments[i__21063__auto___25215]));

var G__25216 = (i__21063__auto___25215 + (1));
i__21063__auto___25215 = G__25216;
continue;
} else {
}
break;
}

var G__25213 = args25211.length;
switch (G__25213) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25211.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25218 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25218);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25218,ret){
return (function (){
return fn1.call(null,val_25218);
});})(val_25218,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25219 = [];
var len__21062__auto___25222 = arguments.length;
var i__21063__auto___25223 = (0);
while(true){
if((i__21063__auto___25223 < len__21062__auto___25222)){
args25219.push((arguments[i__21063__auto___25223]));

var G__25224 = (i__21063__auto___25223 + (1));
i__21063__auto___25223 = G__25224;
continue;
} else {
}
break;
}

var G__25221 = args25219.length;
switch (G__25221) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25219.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20902__auto___25226 = n;
var x_25227 = (0);
while(true){
if((x_25227 < n__20902__auto___25226)){
(a[x_25227] = (0));

var G__25228 = (x_25227 + (1));
x_25227 = G__25228;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25229 = (i + (1));
i = G__25229;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25233 = (function (alt_flag,flag,meta25234){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25234 = meta25234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25235,meta25234__$1){
var self__ = this;
var _25235__$1 = this;
return (new cljs.core.async.t_cljs$core$async25233(self__.alt_flag,self__.flag,meta25234__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25235){
var self__ = this;
var _25235__$1 = this;
return self__.meta25234;
});})(flag))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25233.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25234","meta25234",-441748035,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25233";

cljs.core.async.t_cljs$core$async25233.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async25233");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25233 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25233(alt_flag__$1,flag__$1,meta25234){
return (new cljs.core.async.t_cljs$core$async25233(alt_flag__$1,flag__$1,meta25234));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25233(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25239 = (function (alt_handler,flag,cb,meta25240){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25240 = meta25240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25241,meta25240__$1){
var self__ = this;
var _25241__$1 = this;
return (new cljs.core.async.t_cljs$core$async25239(self__.alt_handler,self__.flag,self__.cb,meta25240__$1));
});

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25241){
var self__ = this;
var _25241__$1 = this;
return self__.meta25240;
});

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25240","meta25240",-303298038,null)], null);
});

cljs.core.async.t_cljs$core$async25239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25239";

cljs.core.async.t_cljs$core$async25239.cljs$lang$ctorPrWriter = (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async25239");
});

cljs.core.async.__GT_t_cljs$core$async25239 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25239(alt_handler__$1,flag__$1,cb__$1,meta25240){
return (new cljs.core.async.t_cljs$core$async25239(alt_handler__$1,flag__$1,cb__$1,meta25240));
});

}

return (new cljs.core.async.t_cljs$core$async25239(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25242_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25242_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25243_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25243_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19987__auto__ = wport;
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25244 = (i + (1));
i = G__25244;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19987__auto__ = ret;
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19975__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19975__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19975__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___25250 = arguments.length;
var i__21063__auto___25251 = (0);
while(true){
if((i__21063__auto___25251 < len__21062__auto___25250)){
args__21069__auto__.push((arguments[i__21063__auto___25251]));

var G__25252 = (i__21063__auto___25251 + (1));
i__21063__auto___25251 = G__25252;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((1) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21070__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25247){
var map__25248 = p__25247;
var map__25248__$1 = ((((!((map__25248 == null)))?((((map__25248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25248):map__25248);
var opts = map__25248__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25245){
var G__25246 = cljs.core.first.call(null,seq25245);
var seq25245__$1 = cljs.core.next.call(null,seq25245);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25246,seq25245__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25253 = [];
var len__21062__auto___25303 = arguments.length;
var i__21063__auto___25304 = (0);
while(true){
if((i__21063__auto___25304 < len__21062__auto___25303)){
args25253.push((arguments[i__21063__auto___25304]));

var G__25305 = (i__21063__auto___25304 + (1));
i__21063__auto___25304 = G__25305;
continue;
} else {
}
break;
}

var G__25255 = args25253.length;
switch (G__25255) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25253.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25140__auto___25307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___25307){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___25307){
return (function (state_25279){
var state_val_25280 = (state_25279[(1)]);
if((state_val_25280 === (7))){
var inst_25275 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25281_25308 = state_25279__$1;
(statearr_25281_25308[(2)] = inst_25275);

(statearr_25281_25308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (1))){
var state_25279__$1 = state_25279;
var statearr_25282_25309 = state_25279__$1;
(statearr_25282_25309[(2)] = null);

(statearr_25282_25309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (4))){
var inst_25258 = (state_25279[(7)]);
var inst_25258__$1 = (state_25279[(2)]);
var inst_25259 = (inst_25258__$1 == null);
var state_25279__$1 = (function (){var statearr_25283 = state_25279;
(statearr_25283[(7)] = inst_25258__$1);

return statearr_25283;
})();
if(cljs.core.truth_(inst_25259)){
var statearr_25284_25310 = state_25279__$1;
(statearr_25284_25310[(1)] = (5));

} else {
var statearr_25285_25311 = state_25279__$1;
(statearr_25285_25311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (13))){
var state_25279__$1 = state_25279;
var statearr_25286_25312 = state_25279__$1;
(statearr_25286_25312[(2)] = null);

(statearr_25286_25312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (6))){
var inst_25258 = (state_25279[(7)]);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25279__$1,(11),to,inst_25258);
} else {
if((state_val_25280 === (3))){
var inst_25277 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25279__$1,inst_25277);
} else {
if((state_val_25280 === (12))){
var state_25279__$1 = state_25279;
var statearr_25287_25313 = state_25279__$1;
(statearr_25287_25313[(2)] = null);

(statearr_25287_25313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (2))){
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25279__$1,(4),from);
} else {
if((state_val_25280 === (11))){
var inst_25268 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
if(cljs.core.truth_(inst_25268)){
var statearr_25288_25314 = state_25279__$1;
(statearr_25288_25314[(1)] = (12));

} else {
var statearr_25289_25315 = state_25279__$1;
(statearr_25289_25315[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (9))){
var state_25279__$1 = state_25279;
var statearr_25290_25316 = state_25279__$1;
(statearr_25290_25316[(2)] = null);

(statearr_25290_25316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (5))){
var state_25279__$1 = state_25279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25291_25317 = state_25279__$1;
(statearr_25291_25317[(1)] = (8));

} else {
var statearr_25292_25318 = state_25279__$1;
(statearr_25292_25318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (14))){
var inst_25273 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25293_25319 = state_25279__$1;
(statearr_25293_25319[(2)] = inst_25273);

(statearr_25293_25319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (10))){
var inst_25265 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25294_25320 = state_25279__$1;
(statearr_25294_25320[(2)] = inst_25265);

(statearr_25294_25320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (8))){
var inst_25262 = cljs.core.async.close_BANG_.call(null,to);
var state_25279__$1 = state_25279;
var statearr_25295_25321 = state_25279__$1;
(statearr_25295_25321[(2)] = inst_25262);

(statearr_25295_25321[(1)] = (10));


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
});})(c__25140__auto___25307))
;
return ((function (switch__25028__auto__,c__25140__auto___25307){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_25299 = [null,null,null,null,null,null,null,null];
(statearr_25299[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_25299[(1)] = (1));

return statearr_25299;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_25279){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25300){if((e25300 instanceof Object)){
var ex__25032__auto__ = e25300;
var statearr_25301_25322 = state_25279;
(statearr_25301_25322[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25323 = state_25279;
state_25279 = G__25323;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_25279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_25279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___25307))
})();
var state__25142__auto__ = (function (){var statearr_25302 = f__25141__auto__.call(null);
(statearr_25302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___25307);

return statearr_25302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___25307))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25511){
var vec__25512 = p__25511;
var v = cljs.core.nth.call(null,vec__25512,(0),null);
var p = cljs.core.nth.call(null,vec__25512,(1),null);
var job = vec__25512;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25140__auto___25698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___25698,res,vec__25512,v,p,job,jobs,results){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___25698,res,vec__25512,v,p,job,jobs,results){
return (function (state_25519){
var state_val_25520 = (state_25519[(1)]);
if((state_val_25520 === (1))){
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25519__$1,(2),res,v);
} else {
if((state_val_25520 === (2))){
var inst_25516 = (state_25519[(2)]);
var inst_25517 = cljs.core.async.close_BANG_.call(null,res);
var state_25519__$1 = (function (){var statearr_25521 = state_25519;
(statearr_25521[(7)] = inst_25516);

return statearr_25521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25519__$1,inst_25517);
} else {
return null;
}
}
});})(c__25140__auto___25698,res,vec__25512,v,p,job,jobs,results))
;
return ((function (switch__25028__auto__,c__25140__auto___25698,res,vec__25512,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0 = (function (){
var statearr_25525 = [null,null,null,null,null,null,null,null];
(statearr_25525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__);

(statearr_25525[(1)] = (1));

return statearr_25525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1 = (function (state_25519){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25526){if((e25526 instanceof Object)){
var ex__25032__auto__ = e25526;
var statearr_25527_25699 = state_25519;
(statearr_25527_25699[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25700 = state_25519;
state_25519 = G__25700;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = function(state_25519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1.call(this,state_25519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___25698,res,vec__25512,v,p,job,jobs,results))
})();
var state__25142__auto__ = (function (){var statearr_25528 = f__25141__auto__.call(null);
(statearr_25528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___25698);

return statearr_25528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___25698,res,vec__25512,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25529){
var vec__25530 = p__25529;
var v = cljs.core.nth.call(null,vec__25530,(0),null);
var p = cljs.core.nth.call(null,vec__25530,(1),null);
var job = vec__25530;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20902__auto___25701 = n;
var __25702 = (0);
while(true){
if((__25702 < n__20902__auto___25701)){
var G__25533_25703 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25533_25703) {
case "compute":
var c__25140__auto___25705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25702,c__25140__auto___25705,G__25533_25703,n__20902__auto___25701,jobs,results,process,async){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (__25702,c__25140__auto___25705,G__25533_25703,n__20902__auto___25701,jobs,results,process,async){
return (function (state_25546){
var state_val_25547 = (state_25546[(1)]);
if((state_val_25547 === (1))){
var state_25546__$1 = state_25546;
var statearr_25548_25706 = state_25546__$1;
(statearr_25548_25706[(2)] = null);

(statearr_25548_25706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (2))){
var state_25546__$1 = state_25546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25546__$1,(4),jobs);
} else {
if((state_val_25547 === (3))){
var inst_25544 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25546__$1,inst_25544);
} else {
if((state_val_25547 === (4))){
var inst_25536 = (state_25546[(2)]);
var inst_25537 = process.call(null,inst_25536);
var state_25546__$1 = state_25546;
if(cljs.core.truth_(inst_25537)){
var statearr_25549_25707 = state_25546__$1;
(statearr_25549_25707[(1)] = (5));

} else {
var statearr_25550_25708 = state_25546__$1;
(statearr_25550_25708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (5))){
var state_25546__$1 = state_25546;
var statearr_25551_25709 = state_25546__$1;
(statearr_25551_25709[(2)] = null);

(statearr_25551_25709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (6))){
var state_25546__$1 = state_25546;
var statearr_25552_25710 = state_25546__$1;
(statearr_25552_25710[(2)] = null);

(statearr_25552_25710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25547 === (7))){
var inst_25542 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25553_25711 = state_25546__$1;
(statearr_25553_25711[(2)] = inst_25542);

(statearr_25553_25711[(1)] = (3));


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
});})(__25702,c__25140__auto___25705,G__25533_25703,n__20902__auto___25701,jobs,results,process,async))
;
return ((function (__25702,switch__25028__auto__,c__25140__auto___25705,G__25533_25703,n__20902__auto___25701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0 = (function (){
var statearr_25557 = [null,null,null,null,null,null,null];
(statearr_25557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__);

(statearr_25557[(1)] = (1));

return statearr_25557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1 = (function (state_25546){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25558){if((e25558 instanceof Object)){
var ex__25032__auto__ = e25558;
var statearr_25559_25712 = state_25546;
(statearr_25559_25712[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25713 = state_25546;
state_25546 = G__25713;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = function(state_25546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1.call(this,state_25546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__;
})()
;})(__25702,switch__25028__auto__,c__25140__auto___25705,G__25533_25703,n__20902__auto___25701,jobs,results,process,async))
})();
var state__25142__auto__ = (function (){var statearr_25560 = f__25141__auto__.call(null);
(statearr_25560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___25705);

return statearr_25560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(__25702,c__25140__auto___25705,G__25533_25703,n__20902__auto___25701,jobs,results,process,async))
);


break;
case "async":
var c__25140__auto___25714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25702,c__25140__auto___25714,G__25533_25703,n__20902__auto___25701,jobs,results,process,async){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (__25702,c__25140__auto___25714,G__25533_25703,n__20902__auto___25701,jobs,results,process,async){
return (function (state_25573){
var state_val_25574 = (state_25573[(1)]);
if((state_val_25574 === (1))){
var state_25573__$1 = state_25573;
var statearr_25575_25715 = state_25573__$1;
(statearr_25575_25715[(2)] = null);

(statearr_25575_25715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25574 === (2))){
var state_25573__$1 = state_25573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25573__$1,(4),jobs);
} else {
if((state_val_25574 === (3))){
var inst_25571 = (state_25573[(2)]);
var state_25573__$1 = state_25573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25573__$1,inst_25571);
} else {
if((state_val_25574 === (4))){
var inst_25563 = (state_25573[(2)]);
var inst_25564 = async.call(null,inst_25563);
var state_25573__$1 = state_25573;
if(cljs.core.truth_(inst_25564)){
var statearr_25576_25716 = state_25573__$1;
(statearr_25576_25716[(1)] = (5));

} else {
var statearr_25577_25717 = state_25573__$1;
(statearr_25577_25717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25574 === (5))){
var state_25573__$1 = state_25573;
var statearr_25578_25718 = state_25573__$1;
(statearr_25578_25718[(2)] = null);

(statearr_25578_25718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25574 === (6))){
var state_25573__$1 = state_25573;
var statearr_25579_25719 = state_25573__$1;
(statearr_25579_25719[(2)] = null);

(statearr_25579_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25574 === (7))){
var inst_25569 = (state_25573[(2)]);
var state_25573__$1 = state_25573;
var statearr_25580_25720 = state_25573__$1;
(statearr_25580_25720[(2)] = inst_25569);

(statearr_25580_25720[(1)] = (3));


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
});})(__25702,c__25140__auto___25714,G__25533_25703,n__20902__auto___25701,jobs,results,process,async))
;
return ((function (__25702,switch__25028__auto__,c__25140__auto___25714,G__25533_25703,n__20902__auto___25701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0 = (function (){
var statearr_25584 = [null,null,null,null,null,null,null];
(statearr_25584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__);

(statearr_25584[(1)] = (1));

return statearr_25584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1 = (function (state_25573){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25585){if((e25585 instanceof Object)){
var ex__25032__auto__ = e25585;
var statearr_25586_25721 = state_25573;
(statearr_25586_25721[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25722 = state_25573;
state_25573 = G__25722;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = function(state_25573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1.call(this,state_25573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__;
})()
;})(__25702,switch__25028__auto__,c__25140__auto___25714,G__25533_25703,n__20902__auto___25701,jobs,results,process,async))
})();
var state__25142__auto__ = (function (){var statearr_25587 = f__25141__auto__.call(null);
(statearr_25587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___25714);

return statearr_25587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(__25702,c__25140__auto___25714,G__25533_25703,n__20902__auto___25701,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25723 = (__25702 + (1));
__25702 = G__25723;
continue;
} else {
}
break;
}

var c__25140__auto___25724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___25724,jobs,results,process,async){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___25724,jobs,results,process,async){
return (function (state_25609){
var state_val_25610 = (state_25609[(1)]);
if((state_val_25610 === (1))){
var state_25609__$1 = state_25609;
var statearr_25611_25725 = state_25609__$1;
(statearr_25611_25725[(2)] = null);

(statearr_25611_25725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (2))){
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25609__$1,(4),from);
} else {
if((state_val_25610 === (3))){
var inst_25607 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25609__$1,inst_25607);
} else {
if((state_val_25610 === (4))){
var inst_25590 = (state_25609[(7)]);
var inst_25590__$1 = (state_25609[(2)]);
var inst_25591 = (inst_25590__$1 == null);
var state_25609__$1 = (function (){var statearr_25612 = state_25609;
(statearr_25612[(7)] = inst_25590__$1);

return statearr_25612;
})();
if(cljs.core.truth_(inst_25591)){
var statearr_25613_25726 = state_25609__$1;
(statearr_25613_25726[(1)] = (5));

} else {
var statearr_25614_25727 = state_25609__$1;
(statearr_25614_25727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (5))){
var inst_25593 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25609__$1 = state_25609;
var statearr_25615_25728 = state_25609__$1;
(statearr_25615_25728[(2)] = inst_25593);

(statearr_25615_25728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (6))){
var inst_25595 = (state_25609[(8)]);
var inst_25590 = (state_25609[(7)]);
var inst_25595__$1 = cljs.core.async.chan.call(null,(1));
var inst_25596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25597 = [inst_25590,inst_25595__$1];
var inst_25598 = (new cljs.core.PersistentVector(null,2,(5),inst_25596,inst_25597,null));
var state_25609__$1 = (function (){var statearr_25616 = state_25609;
(statearr_25616[(8)] = inst_25595__$1);

return statearr_25616;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25609__$1,(8),jobs,inst_25598);
} else {
if((state_val_25610 === (7))){
var inst_25605 = (state_25609[(2)]);
var state_25609__$1 = state_25609;
var statearr_25617_25729 = state_25609__$1;
(statearr_25617_25729[(2)] = inst_25605);

(statearr_25617_25729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25610 === (8))){
var inst_25595 = (state_25609[(8)]);
var inst_25600 = (state_25609[(2)]);
var state_25609__$1 = (function (){var statearr_25618 = state_25609;
(statearr_25618[(9)] = inst_25600);

return statearr_25618;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25609__$1,(9),results,inst_25595);
} else {
if((state_val_25610 === (9))){
var inst_25602 = (state_25609[(2)]);
var state_25609__$1 = (function (){var statearr_25619 = state_25609;
(statearr_25619[(10)] = inst_25602);

return statearr_25619;
})();
var statearr_25620_25730 = state_25609__$1;
(statearr_25620_25730[(2)] = null);

(statearr_25620_25730[(1)] = (2));


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
});})(c__25140__auto___25724,jobs,results,process,async))
;
return ((function (switch__25028__auto__,c__25140__auto___25724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0 = (function (){
var statearr_25624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__);

(statearr_25624[(1)] = (1));

return statearr_25624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1 = (function (state_25609){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25625){if((e25625 instanceof Object)){
var ex__25032__auto__ = e25625;
var statearr_25626_25731 = state_25609;
(statearr_25626_25731[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25732 = state_25609;
state_25609 = G__25732;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = function(state_25609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1.call(this,state_25609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___25724,jobs,results,process,async))
})();
var state__25142__auto__ = (function (){var statearr_25627 = f__25141__auto__.call(null);
(statearr_25627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___25724);

return statearr_25627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___25724,jobs,results,process,async))
);


var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__,jobs,results,process,async){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__,jobs,results,process,async){
return (function (state_25665){
var state_val_25666 = (state_25665[(1)]);
if((state_val_25666 === (7))){
var inst_25661 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25667_25733 = state_25665__$1;
(statearr_25667_25733[(2)] = inst_25661);

(statearr_25667_25733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (20))){
var state_25665__$1 = state_25665;
var statearr_25668_25734 = state_25665__$1;
(statearr_25668_25734[(2)] = null);

(statearr_25668_25734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (1))){
var state_25665__$1 = state_25665;
var statearr_25669_25735 = state_25665__$1;
(statearr_25669_25735[(2)] = null);

(statearr_25669_25735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (4))){
var inst_25630 = (state_25665[(7)]);
var inst_25630__$1 = (state_25665[(2)]);
var inst_25631 = (inst_25630__$1 == null);
var state_25665__$1 = (function (){var statearr_25670 = state_25665;
(statearr_25670[(7)] = inst_25630__$1);

return statearr_25670;
})();
if(cljs.core.truth_(inst_25631)){
var statearr_25671_25736 = state_25665__$1;
(statearr_25671_25736[(1)] = (5));

} else {
var statearr_25672_25737 = state_25665__$1;
(statearr_25672_25737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (15))){
var inst_25643 = (state_25665[(8)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25665__$1,(18),to,inst_25643);
} else {
if((state_val_25666 === (21))){
var inst_25656 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25673_25738 = state_25665__$1;
(statearr_25673_25738[(2)] = inst_25656);

(statearr_25673_25738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (13))){
var inst_25658 = (state_25665[(2)]);
var state_25665__$1 = (function (){var statearr_25674 = state_25665;
(statearr_25674[(9)] = inst_25658);

return statearr_25674;
})();
var statearr_25675_25739 = state_25665__$1;
(statearr_25675_25739[(2)] = null);

(statearr_25675_25739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (6))){
var inst_25630 = (state_25665[(7)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25665__$1,(11),inst_25630);
} else {
if((state_val_25666 === (17))){
var inst_25651 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
if(cljs.core.truth_(inst_25651)){
var statearr_25676_25740 = state_25665__$1;
(statearr_25676_25740[(1)] = (19));

} else {
var statearr_25677_25741 = state_25665__$1;
(statearr_25677_25741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (3))){
var inst_25663 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25665__$1,inst_25663);
} else {
if((state_val_25666 === (12))){
var inst_25640 = (state_25665[(10)]);
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25665__$1,(14),inst_25640);
} else {
if((state_val_25666 === (2))){
var state_25665__$1 = state_25665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25665__$1,(4),results);
} else {
if((state_val_25666 === (19))){
var state_25665__$1 = state_25665;
var statearr_25678_25742 = state_25665__$1;
(statearr_25678_25742[(2)] = null);

(statearr_25678_25742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (11))){
var inst_25640 = (state_25665[(2)]);
var state_25665__$1 = (function (){var statearr_25679 = state_25665;
(statearr_25679[(10)] = inst_25640);

return statearr_25679;
})();
var statearr_25680_25743 = state_25665__$1;
(statearr_25680_25743[(2)] = null);

(statearr_25680_25743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (9))){
var state_25665__$1 = state_25665;
var statearr_25681_25744 = state_25665__$1;
(statearr_25681_25744[(2)] = null);

(statearr_25681_25744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (5))){
var state_25665__$1 = state_25665;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25682_25745 = state_25665__$1;
(statearr_25682_25745[(1)] = (8));

} else {
var statearr_25683_25746 = state_25665__$1;
(statearr_25683_25746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (14))){
var inst_25643 = (state_25665[(8)]);
var inst_25645 = (state_25665[(11)]);
var inst_25643__$1 = (state_25665[(2)]);
var inst_25644 = (inst_25643__$1 == null);
var inst_25645__$1 = cljs.core.not.call(null,inst_25644);
var state_25665__$1 = (function (){var statearr_25684 = state_25665;
(statearr_25684[(8)] = inst_25643__$1);

(statearr_25684[(11)] = inst_25645__$1);

return statearr_25684;
})();
if(inst_25645__$1){
var statearr_25685_25747 = state_25665__$1;
(statearr_25685_25747[(1)] = (15));

} else {
var statearr_25686_25748 = state_25665__$1;
(statearr_25686_25748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (16))){
var inst_25645 = (state_25665[(11)]);
var state_25665__$1 = state_25665;
var statearr_25687_25749 = state_25665__$1;
(statearr_25687_25749[(2)] = inst_25645);

(statearr_25687_25749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (10))){
var inst_25637 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25688_25750 = state_25665__$1;
(statearr_25688_25750[(2)] = inst_25637);

(statearr_25688_25750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (18))){
var inst_25648 = (state_25665[(2)]);
var state_25665__$1 = state_25665;
var statearr_25689_25751 = state_25665__$1;
(statearr_25689_25751[(2)] = inst_25648);

(statearr_25689_25751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25666 === (8))){
var inst_25634 = cljs.core.async.close_BANG_.call(null,to);
var state_25665__$1 = state_25665;
var statearr_25690_25752 = state_25665__$1;
(statearr_25690_25752[(2)] = inst_25634);

(statearr_25690_25752[(1)] = (10));


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
});})(c__25140__auto__,jobs,results,process,async))
;
return ((function (switch__25028__auto__,c__25140__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0 = (function (){
var statearr_25694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__);

(statearr_25694[(1)] = (1));

return statearr_25694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1 = (function (state_25665){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25695){if((e25695 instanceof Object)){
var ex__25032__auto__ = e25695;
var statearr_25696_25753 = state_25665;
(statearr_25696_25753[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25754 = state_25665;
state_25665 = G__25754;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__ = function(state_25665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1.call(this,state_25665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25029__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__,jobs,results,process,async))
})();
var state__25142__auto__ = (function (){var statearr_25697 = f__25141__auto__.call(null);
(statearr_25697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_25697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__,jobs,results,process,async))
);

return c__25140__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25755 = [];
var len__21062__auto___25758 = arguments.length;
var i__21063__auto___25759 = (0);
while(true){
if((i__21063__auto___25759 < len__21062__auto___25758)){
args25755.push((arguments[i__21063__auto___25759]));

var G__25760 = (i__21063__auto___25759 + (1));
i__21063__auto___25759 = G__25760;
continue;
} else {
}
break;
}

var G__25757 = args25755.length;
switch (G__25757) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25755.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25762 = [];
var len__21062__auto___25765 = arguments.length;
var i__21063__auto___25766 = (0);
while(true){
if((i__21063__auto___25766 < len__21062__auto___25765)){
args25762.push((arguments[i__21063__auto___25766]));

var G__25767 = (i__21063__auto___25766 + (1));
i__21063__auto___25766 = G__25767;
continue;
} else {
}
break;
}

var G__25764 = args25762.length;
switch (G__25764) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25762.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25769 = [];
var len__21062__auto___25822 = arguments.length;
var i__21063__auto___25823 = (0);
while(true){
if((i__21063__auto___25823 < len__21062__auto___25822)){
args25769.push((arguments[i__21063__auto___25823]));

var G__25824 = (i__21063__auto___25823 + (1));
i__21063__auto___25823 = G__25824;
continue;
} else {
}
break;
}

var G__25771 = args25769.length;
switch (G__25771) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25769.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25140__auto___25826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___25826,tc,fc){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___25826,tc,fc){
return (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (7))){
var inst_25793 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25799_25827 = state_25797__$1;
(statearr_25799_25827[(2)] = inst_25793);

(statearr_25799_25827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (1))){
var state_25797__$1 = state_25797;
var statearr_25800_25828 = state_25797__$1;
(statearr_25800_25828[(2)] = null);

(statearr_25800_25828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (4))){
var inst_25774 = (state_25797[(7)]);
var inst_25774__$1 = (state_25797[(2)]);
var inst_25775 = (inst_25774__$1 == null);
var state_25797__$1 = (function (){var statearr_25801 = state_25797;
(statearr_25801[(7)] = inst_25774__$1);

return statearr_25801;
})();
if(cljs.core.truth_(inst_25775)){
var statearr_25802_25829 = state_25797__$1;
(statearr_25802_25829[(1)] = (5));

} else {
var statearr_25803_25830 = state_25797__$1;
(statearr_25803_25830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (13))){
var state_25797__$1 = state_25797;
var statearr_25804_25831 = state_25797__$1;
(statearr_25804_25831[(2)] = null);

(statearr_25804_25831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (6))){
var inst_25774 = (state_25797[(7)]);
var inst_25780 = p.call(null,inst_25774);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25780)){
var statearr_25805_25832 = state_25797__$1;
(statearr_25805_25832[(1)] = (9));

} else {
var statearr_25806_25833 = state_25797__$1;
(statearr_25806_25833[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (3))){
var inst_25795 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25797__$1,inst_25795);
} else {
if((state_val_25798 === (12))){
var state_25797__$1 = state_25797;
var statearr_25807_25834 = state_25797__$1;
(statearr_25807_25834[(2)] = null);

(statearr_25807_25834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (2))){
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(4),ch);
} else {
if((state_val_25798 === (11))){
var inst_25774 = (state_25797[(7)]);
var inst_25784 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25797__$1,(8),inst_25784,inst_25774);
} else {
if((state_val_25798 === (9))){
var state_25797__$1 = state_25797;
var statearr_25808_25835 = state_25797__$1;
(statearr_25808_25835[(2)] = tc);

(statearr_25808_25835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (5))){
var inst_25777 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25778 = cljs.core.async.close_BANG_.call(null,fc);
var state_25797__$1 = (function (){var statearr_25809 = state_25797;
(statearr_25809[(8)] = inst_25777);

return statearr_25809;
})();
var statearr_25810_25836 = state_25797__$1;
(statearr_25810_25836[(2)] = inst_25778);

(statearr_25810_25836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (14))){
var inst_25791 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25811_25837 = state_25797__$1;
(statearr_25811_25837[(2)] = inst_25791);

(statearr_25811_25837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (10))){
var state_25797__$1 = state_25797;
var statearr_25812_25838 = state_25797__$1;
(statearr_25812_25838[(2)] = fc);

(statearr_25812_25838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (8))){
var inst_25786 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25786)){
var statearr_25813_25839 = state_25797__$1;
(statearr_25813_25839[(1)] = (12));

} else {
var statearr_25814_25840 = state_25797__$1;
(statearr_25814_25840[(1)] = (13));

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
});})(c__25140__auto___25826,tc,fc))
;
return ((function (switch__25028__auto__,c__25140__auto___25826,tc,fc){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_25818 = [null,null,null,null,null,null,null,null,null];
(statearr_25818[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_25818[(1)] = (1));

return statearr_25818;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_25797){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25819){if((e25819 instanceof Object)){
var ex__25032__auto__ = e25819;
var statearr_25820_25841 = state_25797;
(statearr_25820_25841[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25842 = state_25797;
state_25797 = G__25842;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___25826,tc,fc))
})();
var state__25142__auto__ = (function (){var statearr_25821 = f__25141__auto__.call(null);
(statearr_25821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___25826);

return statearr_25821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___25826,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__){
return (function (state_25906){
var state_val_25907 = (state_25906[(1)]);
if((state_val_25907 === (7))){
var inst_25902 = (state_25906[(2)]);
var state_25906__$1 = state_25906;
var statearr_25908_25929 = state_25906__$1;
(statearr_25908_25929[(2)] = inst_25902);

(statearr_25908_25929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25907 === (1))){
var inst_25886 = init;
var state_25906__$1 = (function (){var statearr_25909 = state_25906;
(statearr_25909[(7)] = inst_25886);

return statearr_25909;
})();
var statearr_25910_25930 = state_25906__$1;
(statearr_25910_25930[(2)] = null);

(statearr_25910_25930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25907 === (4))){
var inst_25889 = (state_25906[(8)]);
var inst_25889__$1 = (state_25906[(2)]);
var inst_25890 = (inst_25889__$1 == null);
var state_25906__$1 = (function (){var statearr_25911 = state_25906;
(statearr_25911[(8)] = inst_25889__$1);

return statearr_25911;
})();
if(cljs.core.truth_(inst_25890)){
var statearr_25912_25931 = state_25906__$1;
(statearr_25912_25931[(1)] = (5));

} else {
var statearr_25913_25932 = state_25906__$1;
(statearr_25913_25932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25907 === (6))){
var inst_25886 = (state_25906[(7)]);
var inst_25889 = (state_25906[(8)]);
var inst_25893 = (state_25906[(9)]);
var inst_25893__$1 = f.call(null,inst_25886,inst_25889);
var inst_25894 = cljs.core.reduced_QMARK_.call(null,inst_25893__$1);
var state_25906__$1 = (function (){var statearr_25914 = state_25906;
(statearr_25914[(9)] = inst_25893__$1);

return statearr_25914;
})();
if(inst_25894){
var statearr_25915_25933 = state_25906__$1;
(statearr_25915_25933[(1)] = (8));

} else {
var statearr_25916_25934 = state_25906__$1;
(statearr_25916_25934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25907 === (3))){
var inst_25904 = (state_25906[(2)]);
var state_25906__$1 = state_25906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25906__$1,inst_25904);
} else {
if((state_val_25907 === (2))){
var state_25906__$1 = state_25906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25906__$1,(4),ch);
} else {
if((state_val_25907 === (9))){
var inst_25893 = (state_25906[(9)]);
var inst_25886 = inst_25893;
var state_25906__$1 = (function (){var statearr_25917 = state_25906;
(statearr_25917[(7)] = inst_25886);

return statearr_25917;
})();
var statearr_25918_25935 = state_25906__$1;
(statearr_25918_25935[(2)] = null);

(statearr_25918_25935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25907 === (5))){
var inst_25886 = (state_25906[(7)]);
var state_25906__$1 = state_25906;
var statearr_25919_25936 = state_25906__$1;
(statearr_25919_25936[(2)] = inst_25886);

(statearr_25919_25936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25907 === (10))){
var inst_25900 = (state_25906[(2)]);
var state_25906__$1 = state_25906;
var statearr_25920_25937 = state_25906__$1;
(statearr_25920_25937[(2)] = inst_25900);

(statearr_25920_25937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25907 === (8))){
var inst_25893 = (state_25906[(9)]);
var inst_25896 = cljs.core.deref.call(null,inst_25893);
var state_25906__$1 = state_25906;
var statearr_25921_25938 = state_25906__$1;
(statearr_25921_25938[(2)] = inst_25896);

(statearr_25921_25938[(1)] = (10));


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
});})(c__25140__auto__))
;
return ((function (switch__25028__auto__,c__25140__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25029__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25029__auto____0 = (function (){
var statearr_25925 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25925[(0)] = cljs$core$async$reduce_$_state_machine__25029__auto__);

(statearr_25925[(1)] = (1));

return statearr_25925;
});
var cljs$core$async$reduce_$_state_machine__25029__auto____1 = (function (state_25906){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25926){if((e25926 instanceof Object)){
var ex__25032__auto__ = e25926;
var statearr_25927_25939 = state_25906;
(statearr_25927_25939[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25940 = state_25906;
state_25906 = G__25940;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25029__auto__ = function(state_25906){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25029__auto____1.call(this,state_25906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25029__auto____0;
cljs$core$async$reduce_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25029__auto____1;
return cljs$core$async$reduce_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__))
})();
var state__25142__auto__ = (function (){var statearr_25928 = f__25141__auto__.call(null);
(statearr_25928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_25928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__))
);

return c__25140__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25941 = [];
var len__21062__auto___25993 = arguments.length;
var i__21063__auto___25994 = (0);
while(true){
if((i__21063__auto___25994 < len__21062__auto___25993)){
args25941.push((arguments[i__21063__auto___25994]));

var G__25995 = (i__21063__auto___25994 + (1));
i__21063__auto___25994 = G__25995;
continue;
} else {
}
break;
}

var G__25943 = args25941.length;
switch (G__25943) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25941.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__){
return (function (state_25968){
var state_val_25969 = (state_25968[(1)]);
if((state_val_25969 === (7))){
var inst_25950 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
var statearr_25970_25997 = state_25968__$1;
(statearr_25970_25997[(2)] = inst_25950);

(statearr_25970_25997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (1))){
var inst_25944 = cljs.core.seq.call(null,coll);
var inst_25945 = inst_25944;
var state_25968__$1 = (function (){var statearr_25971 = state_25968;
(statearr_25971[(7)] = inst_25945);

return statearr_25971;
})();
var statearr_25972_25998 = state_25968__$1;
(statearr_25972_25998[(2)] = null);

(statearr_25972_25998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (4))){
var inst_25945 = (state_25968[(7)]);
var inst_25948 = cljs.core.first.call(null,inst_25945);
var state_25968__$1 = state_25968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25968__$1,(7),ch,inst_25948);
} else {
if((state_val_25969 === (13))){
var inst_25962 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
var statearr_25973_25999 = state_25968__$1;
(statearr_25973_25999[(2)] = inst_25962);

(statearr_25973_25999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (6))){
var inst_25953 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
if(cljs.core.truth_(inst_25953)){
var statearr_25974_26000 = state_25968__$1;
(statearr_25974_26000[(1)] = (8));

} else {
var statearr_25975_26001 = state_25968__$1;
(statearr_25975_26001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (3))){
var inst_25966 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25968__$1,inst_25966);
} else {
if((state_val_25969 === (12))){
var state_25968__$1 = state_25968;
var statearr_25976_26002 = state_25968__$1;
(statearr_25976_26002[(2)] = null);

(statearr_25976_26002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (2))){
var inst_25945 = (state_25968[(7)]);
var state_25968__$1 = state_25968;
if(cljs.core.truth_(inst_25945)){
var statearr_25977_26003 = state_25968__$1;
(statearr_25977_26003[(1)] = (4));

} else {
var statearr_25978_26004 = state_25968__$1;
(statearr_25978_26004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (11))){
var inst_25959 = cljs.core.async.close_BANG_.call(null,ch);
var state_25968__$1 = state_25968;
var statearr_25979_26005 = state_25968__$1;
(statearr_25979_26005[(2)] = inst_25959);

(statearr_25979_26005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (9))){
var state_25968__$1 = state_25968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25980_26006 = state_25968__$1;
(statearr_25980_26006[(1)] = (11));

} else {
var statearr_25981_26007 = state_25968__$1;
(statearr_25981_26007[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (5))){
var inst_25945 = (state_25968[(7)]);
var state_25968__$1 = state_25968;
var statearr_25982_26008 = state_25968__$1;
(statearr_25982_26008[(2)] = inst_25945);

(statearr_25982_26008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (10))){
var inst_25964 = (state_25968[(2)]);
var state_25968__$1 = state_25968;
var statearr_25983_26009 = state_25968__$1;
(statearr_25983_26009[(2)] = inst_25964);

(statearr_25983_26009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25969 === (8))){
var inst_25945 = (state_25968[(7)]);
var inst_25955 = cljs.core.next.call(null,inst_25945);
var inst_25945__$1 = inst_25955;
var state_25968__$1 = (function (){var statearr_25984 = state_25968;
(statearr_25984[(7)] = inst_25945__$1);

return statearr_25984;
})();
var statearr_25985_26010 = state_25968__$1;
(statearr_25985_26010[(2)] = null);

(statearr_25985_26010[(1)] = (2));


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
});})(c__25140__auto__))
;
return ((function (switch__25028__auto__,c__25140__auto__){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_25989 = [null,null,null,null,null,null,null,null];
(statearr_25989[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_25989[(1)] = (1));

return statearr_25989;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_25968){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_25968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e25990){if((e25990 instanceof Object)){
var ex__25032__auto__ = e25990;
var statearr_25991_26011 = state_25968;
(statearr_25991_26011[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26012 = state_25968;
state_25968 = G__26012;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_25968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_25968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__))
})();
var state__25142__auto__ = (function (){var statearr_25992 = f__25141__auto__.call(null);
(statearr_25992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_25992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__))
);

return c__25140__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20650__auto__ = (((_ == null))?null:_);
var m__20651__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,_);
} else {
var m__20651__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20651__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m,ch);
} else {
var m__20651__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m);
} else {
var m__20651__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26238 = (function (mult,ch,cs,meta26239){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26239 = meta26239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26240,meta26239__$1){
var self__ = this;
var _26240__$1 = this;
return (new cljs.core.async.t_cljs$core$async26238(self__.mult,self__.ch,self__.cs,meta26239__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26240){
var self__ = this;
var _26240__$1 = this;
return self__.meta26239;
});})(cs))
;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26238.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26239","meta26239",-1391447877,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26238";

cljs.core.async.t_cljs$core$async26238.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async26238");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26238 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26238(mult__$1,ch__$1,cs__$1,meta26239){
return (new cljs.core.async.t_cljs$core$async26238(mult__$1,ch__$1,cs__$1,meta26239));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26238(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25140__auto___26463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___26463,cs,m,dchan,dctr,done){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___26463,cs,m,dchan,dctr,done){
return (function (state_26375){
var state_val_26376 = (state_26375[(1)]);
if((state_val_26376 === (7))){
var inst_26371 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26377_26464 = state_26375__$1;
(statearr_26377_26464[(2)] = inst_26371);

(statearr_26377_26464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (20))){
var inst_26274 = (state_26375[(7)]);
var inst_26286 = cljs.core.first.call(null,inst_26274);
var inst_26287 = cljs.core.nth.call(null,inst_26286,(0),null);
var inst_26288 = cljs.core.nth.call(null,inst_26286,(1),null);
var state_26375__$1 = (function (){var statearr_26378 = state_26375;
(statearr_26378[(8)] = inst_26287);

return statearr_26378;
})();
if(cljs.core.truth_(inst_26288)){
var statearr_26379_26465 = state_26375__$1;
(statearr_26379_26465[(1)] = (22));

} else {
var statearr_26380_26466 = state_26375__$1;
(statearr_26380_26466[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (27))){
var inst_26323 = (state_26375[(9)]);
var inst_26318 = (state_26375[(10)]);
var inst_26316 = (state_26375[(11)]);
var inst_26243 = (state_26375[(12)]);
var inst_26323__$1 = cljs.core._nth.call(null,inst_26316,inst_26318);
var inst_26324 = cljs.core.async.put_BANG_.call(null,inst_26323__$1,inst_26243,done);
var state_26375__$1 = (function (){var statearr_26381 = state_26375;
(statearr_26381[(9)] = inst_26323__$1);

return statearr_26381;
})();
if(cljs.core.truth_(inst_26324)){
var statearr_26382_26467 = state_26375__$1;
(statearr_26382_26467[(1)] = (30));

} else {
var statearr_26383_26468 = state_26375__$1;
(statearr_26383_26468[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (1))){
var state_26375__$1 = state_26375;
var statearr_26384_26469 = state_26375__$1;
(statearr_26384_26469[(2)] = null);

(statearr_26384_26469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (24))){
var inst_26274 = (state_26375[(7)]);
var inst_26293 = (state_26375[(2)]);
var inst_26294 = cljs.core.next.call(null,inst_26274);
var inst_26252 = inst_26294;
var inst_26253 = null;
var inst_26254 = (0);
var inst_26255 = (0);
var state_26375__$1 = (function (){var statearr_26385 = state_26375;
(statearr_26385[(13)] = inst_26252);

(statearr_26385[(14)] = inst_26255);

(statearr_26385[(15)] = inst_26254);

(statearr_26385[(16)] = inst_26293);

(statearr_26385[(17)] = inst_26253);

return statearr_26385;
})();
var statearr_26386_26470 = state_26375__$1;
(statearr_26386_26470[(2)] = null);

(statearr_26386_26470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (39))){
var state_26375__$1 = state_26375;
var statearr_26390_26471 = state_26375__$1;
(statearr_26390_26471[(2)] = null);

(statearr_26390_26471[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (4))){
var inst_26243 = (state_26375[(12)]);
var inst_26243__$1 = (state_26375[(2)]);
var inst_26244 = (inst_26243__$1 == null);
var state_26375__$1 = (function (){var statearr_26391 = state_26375;
(statearr_26391[(12)] = inst_26243__$1);

return statearr_26391;
})();
if(cljs.core.truth_(inst_26244)){
var statearr_26392_26472 = state_26375__$1;
(statearr_26392_26472[(1)] = (5));

} else {
var statearr_26393_26473 = state_26375__$1;
(statearr_26393_26473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (15))){
var inst_26252 = (state_26375[(13)]);
var inst_26255 = (state_26375[(14)]);
var inst_26254 = (state_26375[(15)]);
var inst_26253 = (state_26375[(17)]);
var inst_26270 = (state_26375[(2)]);
var inst_26271 = (inst_26255 + (1));
var tmp26387 = inst_26252;
var tmp26388 = inst_26254;
var tmp26389 = inst_26253;
var inst_26252__$1 = tmp26387;
var inst_26253__$1 = tmp26389;
var inst_26254__$1 = tmp26388;
var inst_26255__$1 = inst_26271;
var state_26375__$1 = (function (){var statearr_26394 = state_26375;
(statearr_26394[(18)] = inst_26270);

(statearr_26394[(13)] = inst_26252__$1);

(statearr_26394[(14)] = inst_26255__$1);

(statearr_26394[(15)] = inst_26254__$1);

(statearr_26394[(17)] = inst_26253__$1);

return statearr_26394;
})();
var statearr_26395_26474 = state_26375__$1;
(statearr_26395_26474[(2)] = null);

(statearr_26395_26474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (21))){
var inst_26297 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26399_26475 = state_26375__$1;
(statearr_26399_26475[(2)] = inst_26297);

(statearr_26399_26475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (31))){
var inst_26323 = (state_26375[(9)]);
var inst_26327 = done.call(null,null);
var inst_26328 = cljs.core.async.untap_STAR_.call(null,m,inst_26323);
var state_26375__$1 = (function (){var statearr_26400 = state_26375;
(statearr_26400[(19)] = inst_26327);

return statearr_26400;
})();
var statearr_26401_26476 = state_26375__$1;
(statearr_26401_26476[(2)] = inst_26328);

(statearr_26401_26476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (32))){
var inst_26315 = (state_26375[(20)]);
var inst_26318 = (state_26375[(10)]);
var inst_26316 = (state_26375[(11)]);
var inst_26317 = (state_26375[(21)]);
var inst_26330 = (state_26375[(2)]);
var inst_26331 = (inst_26318 + (1));
var tmp26396 = inst_26315;
var tmp26397 = inst_26316;
var tmp26398 = inst_26317;
var inst_26315__$1 = tmp26396;
var inst_26316__$1 = tmp26397;
var inst_26317__$1 = tmp26398;
var inst_26318__$1 = inst_26331;
var state_26375__$1 = (function (){var statearr_26402 = state_26375;
(statearr_26402[(20)] = inst_26315__$1);

(statearr_26402[(10)] = inst_26318__$1);

(statearr_26402[(11)] = inst_26316__$1);

(statearr_26402[(21)] = inst_26317__$1);

(statearr_26402[(22)] = inst_26330);

return statearr_26402;
})();
var statearr_26403_26477 = state_26375__$1;
(statearr_26403_26477[(2)] = null);

(statearr_26403_26477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (40))){
var inst_26343 = (state_26375[(23)]);
var inst_26347 = done.call(null,null);
var inst_26348 = cljs.core.async.untap_STAR_.call(null,m,inst_26343);
var state_26375__$1 = (function (){var statearr_26404 = state_26375;
(statearr_26404[(24)] = inst_26347);

return statearr_26404;
})();
var statearr_26405_26478 = state_26375__$1;
(statearr_26405_26478[(2)] = inst_26348);

(statearr_26405_26478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (33))){
var inst_26334 = (state_26375[(25)]);
var inst_26336 = cljs.core.chunked_seq_QMARK_.call(null,inst_26334);
var state_26375__$1 = state_26375;
if(inst_26336){
var statearr_26406_26479 = state_26375__$1;
(statearr_26406_26479[(1)] = (36));

} else {
var statearr_26407_26480 = state_26375__$1;
(statearr_26407_26480[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (13))){
var inst_26264 = (state_26375[(26)]);
var inst_26267 = cljs.core.async.close_BANG_.call(null,inst_26264);
var state_26375__$1 = state_26375;
var statearr_26408_26481 = state_26375__$1;
(statearr_26408_26481[(2)] = inst_26267);

(statearr_26408_26481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (22))){
var inst_26287 = (state_26375[(8)]);
var inst_26290 = cljs.core.async.close_BANG_.call(null,inst_26287);
var state_26375__$1 = state_26375;
var statearr_26409_26482 = state_26375__$1;
(statearr_26409_26482[(2)] = inst_26290);

(statearr_26409_26482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (36))){
var inst_26334 = (state_26375[(25)]);
var inst_26338 = cljs.core.chunk_first.call(null,inst_26334);
var inst_26339 = cljs.core.chunk_rest.call(null,inst_26334);
var inst_26340 = cljs.core.count.call(null,inst_26338);
var inst_26315 = inst_26339;
var inst_26316 = inst_26338;
var inst_26317 = inst_26340;
var inst_26318 = (0);
var state_26375__$1 = (function (){var statearr_26410 = state_26375;
(statearr_26410[(20)] = inst_26315);

(statearr_26410[(10)] = inst_26318);

(statearr_26410[(11)] = inst_26316);

(statearr_26410[(21)] = inst_26317);

return statearr_26410;
})();
var statearr_26411_26483 = state_26375__$1;
(statearr_26411_26483[(2)] = null);

(statearr_26411_26483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (41))){
var inst_26334 = (state_26375[(25)]);
var inst_26350 = (state_26375[(2)]);
var inst_26351 = cljs.core.next.call(null,inst_26334);
var inst_26315 = inst_26351;
var inst_26316 = null;
var inst_26317 = (0);
var inst_26318 = (0);
var state_26375__$1 = (function (){var statearr_26412 = state_26375;
(statearr_26412[(20)] = inst_26315);

(statearr_26412[(27)] = inst_26350);

(statearr_26412[(10)] = inst_26318);

(statearr_26412[(11)] = inst_26316);

(statearr_26412[(21)] = inst_26317);

return statearr_26412;
})();
var statearr_26413_26484 = state_26375__$1;
(statearr_26413_26484[(2)] = null);

(statearr_26413_26484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (43))){
var state_26375__$1 = state_26375;
var statearr_26414_26485 = state_26375__$1;
(statearr_26414_26485[(2)] = null);

(statearr_26414_26485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (29))){
var inst_26359 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26415_26486 = state_26375__$1;
(statearr_26415_26486[(2)] = inst_26359);

(statearr_26415_26486[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (44))){
var inst_26368 = (state_26375[(2)]);
var state_26375__$1 = (function (){var statearr_26416 = state_26375;
(statearr_26416[(28)] = inst_26368);

return statearr_26416;
})();
var statearr_26417_26487 = state_26375__$1;
(statearr_26417_26487[(2)] = null);

(statearr_26417_26487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (6))){
var inst_26307 = (state_26375[(29)]);
var inst_26306 = cljs.core.deref.call(null,cs);
var inst_26307__$1 = cljs.core.keys.call(null,inst_26306);
var inst_26308 = cljs.core.count.call(null,inst_26307__$1);
var inst_26309 = cljs.core.reset_BANG_.call(null,dctr,inst_26308);
var inst_26314 = cljs.core.seq.call(null,inst_26307__$1);
var inst_26315 = inst_26314;
var inst_26316 = null;
var inst_26317 = (0);
var inst_26318 = (0);
var state_26375__$1 = (function (){var statearr_26418 = state_26375;
(statearr_26418[(20)] = inst_26315);

(statearr_26418[(10)] = inst_26318);

(statearr_26418[(11)] = inst_26316);

(statearr_26418[(29)] = inst_26307__$1);

(statearr_26418[(30)] = inst_26309);

(statearr_26418[(21)] = inst_26317);

return statearr_26418;
})();
var statearr_26419_26488 = state_26375__$1;
(statearr_26419_26488[(2)] = null);

(statearr_26419_26488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (28))){
var inst_26334 = (state_26375[(25)]);
var inst_26315 = (state_26375[(20)]);
var inst_26334__$1 = cljs.core.seq.call(null,inst_26315);
var state_26375__$1 = (function (){var statearr_26420 = state_26375;
(statearr_26420[(25)] = inst_26334__$1);

return statearr_26420;
})();
if(inst_26334__$1){
var statearr_26421_26489 = state_26375__$1;
(statearr_26421_26489[(1)] = (33));

} else {
var statearr_26422_26490 = state_26375__$1;
(statearr_26422_26490[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (25))){
var inst_26318 = (state_26375[(10)]);
var inst_26317 = (state_26375[(21)]);
var inst_26320 = (inst_26318 < inst_26317);
var inst_26321 = inst_26320;
var state_26375__$1 = state_26375;
if(cljs.core.truth_(inst_26321)){
var statearr_26423_26491 = state_26375__$1;
(statearr_26423_26491[(1)] = (27));

} else {
var statearr_26424_26492 = state_26375__$1;
(statearr_26424_26492[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (34))){
var state_26375__$1 = state_26375;
var statearr_26425_26493 = state_26375__$1;
(statearr_26425_26493[(2)] = null);

(statearr_26425_26493[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (17))){
var state_26375__$1 = state_26375;
var statearr_26426_26494 = state_26375__$1;
(statearr_26426_26494[(2)] = null);

(statearr_26426_26494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (3))){
var inst_26373 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26375__$1,inst_26373);
} else {
if((state_val_26376 === (12))){
var inst_26302 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26427_26495 = state_26375__$1;
(statearr_26427_26495[(2)] = inst_26302);

(statearr_26427_26495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (2))){
var state_26375__$1 = state_26375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26375__$1,(4),ch);
} else {
if((state_val_26376 === (23))){
var state_26375__$1 = state_26375;
var statearr_26428_26496 = state_26375__$1;
(statearr_26428_26496[(2)] = null);

(statearr_26428_26496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (35))){
var inst_26357 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26429_26497 = state_26375__$1;
(statearr_26429_26497[(2)] = inst_26357);

(statearr_26429_26497[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (19))){
var inst_26274 = (state_26375[(7)]);
var inst_26278 = cljs.core.chunk_first.call(null,inst_26274);
var inst_26279 = cljs.core.chunk_rest.call(null,inst_26274);
var inst_26280 = cljs.core.count.call(null,inst_26278);
var inst_26252 = inst_26279;
var inst_26253 = inst_26278;
var inst_26254 = inst_26280;
var inst_26255 = (0);
var state_26375__$1 = (function (){var statearr_26430 = state_26375;
(statearr_26430[(13)] = inst_26252);

(statearr_26430[(14)] = inst_26255);

(statearr_26430[(15)] = inst_26254);

(statearr_26430[(17)] = inst_26253);

return statearr_26430;
})();
var statearr_26431_26498 = state_26375__$1;
(statearr_26431_26498[(2)] = null);

(statearr_26431_26498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (11))){
var inst_26252 = (state_26375[(13)]);
var inst_26274 = (state_26375[(7)]);
var inst_26274__$1 = cljs.core.seq.call(null,inst_26252);
var state_26375__$1 = (function (){var statearr_26432 = state_26375;
(statearr_26432[(7)] = inst_26274__$1);

return statearr_26432;
})();
if(inst_26274__$1){
var statearr_26433_26499 = state_26375__$1;
(statearr_26433_26499[(1)] = (16));

} else {
var statearr_26434_26500 = state_26375__$1;
(statearr_26434_26500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (9))){
var inst_26304 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26435_26501 = state_26375__$1;
(statearr_26435_26501[(2)] = inst_26304);

(statearr_26435_26501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (5))){
var inst_26250 = cljs.core.deref.call(null,cs);
var inst_26251 = cljs.core.seq.call(null,inst_26250);
var inst_26252 = inst_26251;
var inst_26253 = null;
var inst_26254 = (0);
var inst_26255 = (0);
var state_26375__$1 = (function (){var statearr_26436 = state_26375;
(statearr_26436[(13)] = inst_26252);

(statearr_26436[(14)] = inst_26255);

(statearr_26436[(15)] = inst_26254);

(statearr_26436[(17)] = inst_26253);

return statearr_26436;
})();
var statearr_26437_26502 = state_26375__$1;
(statearr_26437_26502[(2)] = null);

(statearr_26437_26502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (14))){
var state_26375__$1 = state_26375;
var statearr_26438_26503 = state_26375__$1;
(statearr_26438_26503[(2)] = null);

(statearr_26438_26503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (45))){
var inst_26365 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26439_26504 = state_26375__$1;
(statearr_26439_26504[(2)] = inst_26365);

(statearr_26439_26504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (26))){
var inst_26307 = (state_26375[(29)]);
var inst_26361 = (state_26375[(2)]);
var inst_26362 = cljs.core.seq.call(null,inst_26307);
var state_26375__$1 = (function (){var statearr_26440 = state_26375;
(statearr_26440[(31)] = inst_26361);

return statearr_26440;
})();
if(inst_26362){
var statearr_26441_26505 = state_26375__$1;
(statearr_26441_26505[(1)] = (42));

} else {
var statearr_26442_26506 = state_26375__$1;
(statearr_26442_26506[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (16))){
var inst_26274 = (state_26375[(7)]);
var inst_26276 = cljs.core.chunked_seq_QMARK_.call(null,inst_26274);
var state_26375__$1 = state_26375;
if(inst_26276){
var statearr_26443_26507 = state_26375__$1;
(statearr_26443_26507[(1)] = (19));

} else {
var statearr_26444_26508 = state_26375__$1;
(statearr_26444_26508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (38))){
var inst_26354 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26445_26509 = state_26375__$1;
(statearr_26445_26509[(2)] = inst_26354);

(statearr_26445_26509[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (30))){
var state_26375__$1 = state_26375;
var statearr_26446_26510 = state_26375__$1;
(statearr_26446_26510[(2)] = null);

(statearr_26446_26510[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (10))){
var inst_26255 = (state_26375[(14)]);
var inst_26253 = (state_26375[(17)]);
var inst_26263 = cljs.core._nth.call(null,inst_26253,inst_26255);
var inst_26264 = cljs.core.nth.call(null,inst_26263,(0),null);
var inst_26265 = cljs.core.nth.call(null,inst_26263,(1),null);
var state_26375__$1 = (function (){var statearr_26447 = state_26375;
(statearr_26447[(26)] = inst_26264);

return statearr_26447;
})();
if(cljs.core.truth_(inst_26265)){
var statearr_26448_26511 = state_26375__$1;
(statearr_26448_26511[(1)] = (13));

} else {
var statearr_26449_26512 = state_26375__$1;
(statearr_26449_26512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (18))){
var inst_26300 = (state_26375[(2)]);
var state_26375__$1 = state_26375;
var statearr_26450_26513 = state_26375__$1;
(statearr_26450_26513[(2)] = inst_26300);

(statearr_26450_26513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (42))){
var state_26375__$1 = state_26375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26375__$1,(45),dchan);
} else {
if((state_val_26376 === (37))){
var inst_26334 = (state_26375[(25)]);
var inst_26343 = (state_26375[(23)]);
var inst_26243 = (state_26375[(12)]);
var inst_26343__$1 = cljs.core.first.call(null,inst_26334);
var inst_26344 = cljs.core.async.put_BANG_.call(null,inst_26343__$1,inst_26243,done);
var state_26375__$1 = (function (){var statearr_26451 = state_26375;
(statearr_26451[(23)] = inst_26343__$1);

return statearr_26451;
})();
if(cljs.core.truth_(inst_26344)){
var statearr_26452_26514 = state_26375__$1;
(statearr_26452_26514[(1)] = (39));

} else {
var statearr_26453_26515 = state_26375__$1;
(statearr_26453_26515[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26376 === (8))){
var inst_26255 = (state_26375[(14)]);
var inst_26254 = (state_26375[(15)]);
var inst_26257 = (inst_26255 < inst_26254);
var inst_26258 = inst_26257;
var state_26375__$1 = state_26375;
if(cljs.core.truth_(inst_26258)){
var statearr_26454_26516 = state_26375__$1;
(statearr_26454_26516[(1)] = (10));

} else {
var statearr_26455_26517 = state_26375__$1;
(statearr_26455_26517[(1)] = (11));

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
});})(c__25140__auto___26463,cs,m,dchan,dctr,done))
;
return ((function (switch__25028__auto__,c__25140__auto___26463,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25029__auto__ = null;
var cljs$core$async$mult_$_state_machine__25029__auto____0 = (function (){
var statearr_26459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26459[(0)] = cljs$core$async$mult_$_state_machine__25029__auto__);

(statearr_26459[(1)] = (1));

return statearr_26459;
});
var cljs$core$async$mult_$_state_machine__25029__auto____1 = (function (state_26375){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_26375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object)){
var ex__25032__auto__ = e26460;
var statearr_26461_26518 = state_26375;
(statearr_26461_26518[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26519 = state_26375;
state_26375 = G__26519;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25029__auto__ = function(state_26375){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25029__auto____1.call(this,state_26375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25029__auto____0;
cljs$core$async$mult_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25029__auto____1;
return cljs$core$async$mult_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___26463,cs,m,dchan,dctr,done))
})();
var state__25142__auto__ = (function (){var statearr_26462 = f__25141__auto__.call(null);
(statearr_26462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___26463);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___26463,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26520 = [];
var len__21062__auto___26523 = arguments.length;
var i__21063__auto___26524 = (0);
while(true){
if((i__21063__auto___26524 < len__21062__auto___26523)){
args26520.push((arguments[i__21063__auto___26524]));

var G__26525 = (i__21063__auto___26524 + (1));
i__21063__auto___26524 = G__26525;
continue;
} else {
}
break;
}

var G__26522 = args26520.length;
switch (G__26522) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26520.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m,ch);
} else {
var m__20651__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m,ch);
} else {
var m__20651__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m);
} else {
var m__20651__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m,state_map);
} else {
var m__20651__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20650__auto__ = (((m == null))?null:m);
var m__20651__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,m,mode);
} else {
var m__20651__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21069__auto__ = [];
var len__21062__auto___26537 = arguments.length;
var i__21063__auto___26538 = (0);
while(true){
if((i__21063__auto___26538 < len__21062__auto___26537)){
args__21069__auto__.push((arguments[i__21063__auto___26538]));

var G__26539 = (i__21063__auto___26538 + (1));
i__21063__auto___26538 = G__26539;
continue;
} else {
}
break;
}

var argseq__21070__auto__ = ((((3) < args__21069__auto__.length))?(new cljs.core.IndexedSeq(args__21069__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21070__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26531){
var map__26532 = p__26531;
var map__26532__$1 = ((((!((map__26532 == null)))?((((map__26532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26532):map__26532);
var opts = map__26532__$1;
var statearr_26534_26540 = state;
(statearr_26534_26540[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26532,map__26532__$1,opts){
return (function (val){
var statearr_26535_26541 = state;
(statearr_26535_26541[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26532,map__26532__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26536_26542 = state;
(statearr_26536_26542[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26527){
var G__26528 = cljs.core.first.call(null,seq26527);
var seq26527__$1 = cljs.core.next.call(null,seq26527);
var G__26529 = cljs.core.first.call(null,seq26527__$1);
var seq26527__$2 = cljs.core.next.call(null,seq26527__$1);
var G__26530 = cljs.core.first.call(null,seq26527__$2);
var seq26527__$3 = cljs.core.next.call(null,seq26527__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26528,G__26529,G__26530,seq26527__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26708 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26709){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26709 = meta26709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26710,meta26709__$1){
var self__ = this;
var _26710__$1 = this;
return (new cljs.core.async.t_cljs$core$async26708(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26709__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26710){
var self__ = this;
var _26710__$1 = this;
return self__.meta26709;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26709","meta26709",1184628781,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26708";

cljs.core.async.t_cljs$core$async26708.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async26708");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26708 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26708(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26709){
return (new cljs.core.async.t_cljs$core$async26708(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26709));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26708(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25140__auto___26873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___26873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___26873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26810){
var state_val_26811 = (state_26810[(1)]);
if((state_val_26811 === (7))){
var inst_26726 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26812_26874 = state_26810__$1;
(statearr_26812_26874[(2)] = inst_26726);

(statearr_26812_26874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (20))){
var inst_26738 = (state_26810[(7)]);
var state_26810__$1 = state_26810;
var statearr_26813_26875 = state_26810__$1;
(statearr_26813_26875[(2)] = inst_26738);

(statearr_26813_26875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (27))){
var state_26810__$1 = state_26810;
var statearr_26814_26876 = state_26810__$1;
(statearr_26814_26876[(2)] = null);

(statearr_26814_26876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (1))){
var inst_26714 = (state_26810[(8)]);
var inst_26714__$1 = calc_state.call(null);
var inst_26716 = (inst_26714__$1 == null);
var inst_26717 = cljs.core.not.call(null,inst_26716);
var state_26810__$1 = (function (){var statearr_26815 = state_26810;
(statearr_26815[(8)] = inst_26714__$1);

return statearr_26815;
})();
if(inst_26717){
var statearr_26816_26877 = state_26810__$1;
(statearr_26816_26877[(1)] = (2));

} else {
var statearr_26817_26878 = state_26810__$1;
(statearr_26817_26878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (24))){
var inst_26761 = (state_26810[(9)]);
var inst_26770 = (state_26810[(10)]);
var inst_26784 = (state_26810[(11)]);
var inst_26784__$1 = inst_26761.call(null,inst_26770);
var state_26810__$1 = (function (){var statearr_26818 = state_26810;
(statearr_26818[(11)] = inst_26784__$1);

return statearr_26818;
})();
if(cljs.core.truth_(inst_26784__$1)){
var statearr_26819_26879 = state_26810__$1;
(statearr_26819_26879[(1)] = (29));

} else {
var statearr_26820_26880 = state_26810__$1;
(statearr_26820_26880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (4))){
var inst_26729 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26729)){
var statearr_26821_26881 = state_26810__$1;
(statearr_26821_26881[(1)] = (8));

} else {
var statearr_26822_26882 = state_26810__$1;
(statearr_26822_26882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (15))){
var inst_26755 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26755)){
var statearr_26823_26883 = state_26810__$1;
(statearr_26823_26883[(1)] = (19));

} else {
var statearr_26824_26884 = state_26810__$1;
(statearr_26824_26884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (21))){
var inst_26760 = (state_26810[(12)]);
var inst_26760__$1 = (state_26810[(2)]);
var inst_26761 = cljs.core.get.call(null,inst_26760__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26762 = cljs.core.get.call(null,inst_26760__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26763 = cljs.core.get.call(null,inst_26760__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26810__$1 = (function (){var statearr_26825 = state_26810;
(statearr_26825[(12)] = inst_26760__$1);

(statearr_26825[(9)] = inst_26761);

(statearr_26825[(13)] = inst_26762);

return statearr_26825;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26810__$1,(22),inst_26763);
} else {
if((state_val_26811 === (31))){
var inst_26792 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26792)){
var statearr_26826_26885 = state_26810__$1;
(statearr_26826_26885[(1)] = (32));

} else {
var statearr_26827_26886 = state_26810__$1;
(statearr_26827_26886[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (32))){
var inst_26769 = (state_26810[(14)]);
var state_26810__$1 = state_26810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26810__$1,(35),out,inst_26769);
} else {
if((state_val_26811 === (33))){
var inst_26760 = (state_26810[(12)]);
var inst_26738 = inst_26760;
var state_26810__$1 = (function (){var statearr_26828 = state_26810;
(statearr_26828[(7)] = inst_26738);

return statearr_26828;
})();
var statearr_26829_26887 = state_26810__$1;
(statearr_26829_26887[(2)] = null);

(statearr_26829_26887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (13))){
var inst_26738 = (state_26810[(7)]);
var inst_26745 = inst_26738.cljs$lang$protocol_mask$partition0$;
var inst_26746 = (inst_26745 & (64));
var inst_26747 = inst_26738.cljs$core$ISeq$;
var inst_26748 = (inst_26746) || (inst_26747);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26748)){
var statearr_26830_26888 = state_26810__$1;
(statearr_26830_26888[(1)] = (16));

} else {
var statearr_26831_26889 = state_26810__$1;
(statearr_26831_26889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (22))){
var inst_26769 = (state_26810[(14)]);
var inst_26770 = (state_26810[(10)]);
var inst_26768 = (state_26810[(2)]);
var inst_26769__$1 = cljs.core.nth.call(null,inst_26768,(0),null);
var inst_26770__$1 = cljs.core.nth.call(null,inst_26768,(1),null);
var inst_26771 = (inst_26769__$1 == null);
var inst_26772 = cljs.core._EQ_.call(null,inst_26770__$1,change);
var inst_26773 = (inst_26771) || (inst_26772);
var state_26810__$1 = (function (){var statearr_26832 = state_26810;
(statearr_26832[(14)] = inst_26769__$1);

(statearr_26832[(10)] = inst_26770__$1);

return statearr_26832;
})();
if(cljs.core.truth_(inst_26773)){
var statearr_26833_26890 = state_26810__$1;
(statearr_26833_26890[(1)] = (23));

} else {
var statearr_26834_26891 = state_26810__$1;
(statearr_26834_26891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (36))){
var inst_26760 = (state_26810[(12)]);
var inst_26738 = inst_26760;
var state_26810__$1 = (function (){var statearr_26835 = state_26810;
(statearr_26835[(7)] = inst_26738);

return statearr_26835;
})();
var statearr_26836_26892 = state_26810__$1;
(statearr_26836_26892[(2)] = null);

(statearr_26836_26892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (29))){
var inst_26784 = (state_26810[(11)]);
var state_26810__$1 = state_26810;
var statearr_26837_26893 = state_26810__$1;
(statearr_26837_26893[(2)] = inst_26784);

(statearr_26837_26893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (6))){
var state_26810__$1 = state_26810;
var statearr_26838_26894 = state_26810__$1;
(statearr_26838_26894[(2)] = false);

(statearr_26838_26894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (28))){
var inst_26780 = (state_26810[(2)]);
var inst_26781 = calc_state.call(null);
var inst_26738 = inst_26781;
var state_26810__$1 = (function (){var statearr_26839 = state_26810;
(statearr_26839[(15)] = inst_26780);

(statearr_26839[(7)] = inst_26738);

return statearr_26839;
})();
var statearr_26840_26895 = state_26810__$1;
(statearr_26840_26895[(2)] = null);

(statearr_26840_26895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (25))){
var inst_26806 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26841_26896 = state_26810__$1;
(statearr_26841_26896[(2)] = inst_26806);

(statearr_26841_26896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (34))){
var inst_26804 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26842_26897 = state_26810__$1;
(statearr_26842_26897[(2)] = inst_26804);

(statearr_26842_26897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (17))){
var state_26810__$1 = state_26810;
var statearr_26843_26898 = state_26810__$1;
(statearr_26843_26898[(2)] = false);

(statearr_26843_26898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (3))){
var state_26810__$1 = state_26810;
var statearr_26844_26899 = state_26810__$1;
(statearr_26844_26899[(2)] = false);

(statearr_26844_26899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (12))){
var inst_26808 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26810__$1,inst_26808);
} else {
if((state_val_26811 === (2))){
var inst_26714 = (state_26810[(8)]);
var inst_26719 = inst_26714.cljs$lang$protocol_mask$partition0$;
var inst_26720 = (inst_26719 & (64));
var inst_26721 = inst_26714.cljs$core$ISeq$;
var inst_26722 = (inst_26720) || (inst_26721);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26722)){
var statearr_26845_26900 = state_26810__$1;
(statearr_26845_26900[(1)] = (5));

} else {
var statearr_26846_26901 = state_26810__$1;
(statearr_26846_26901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (23))){
var inst_26769 = (state_26810[(14)]);
var inst_26775 = (inst_26769 == null);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26775)){
var statearr_26847_26902 = state_26810__$1;
(statearr_26847_26902[(1)] = (26));

} else {
var statearr_26848_26903 = state_26810__$1;
(statearr_26848_26903[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (35))){
var inst_26795 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26795)){
var statearr_26849_26904 = state_26810__$1;
(statearr_26849_26904[(1)] = (36));

} else {
var statearr_26850_26905 = state_26810__$1;
(statearr_26850_26905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (19))){
var inst_26738 = (state_26810[(7)]);
var inst_26757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26738);
var state_26810__$1 = state_26810;
var statearr_26851_26906 = state_26810__$1;
(statearr_26851_26906[(2)] = inst_26757);

(statearr_26851_26906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (11))){
var inst_26738 = (state_26810[(7)]);
var inst_26742 = (inst_26738 == null);
var inst_26743 = cljs.core.not.call(null,inst_26742);
var state_26810__$1 = state_26810;
if(inst_26743){
var statearr_26852_26907 = state_26810__$1;
(statearr_26852_26907[(1)] = (13));

} else {
var statearr_26853_26908 = state_26810__$1;
(statearr_26853_26908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (9))){
var inst_26714 = (state_26810[(8)]);
var state_26810__$1 = state_26810;
var statearr_26854_26909 = state_26810__$1;
(statearr_26854_26909[(2)] = inst_26714);

(statearr_26854_26909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (5))){
var state_26810__$1 = state_26810;
var statearr_26855_26910 = state_26810__$1;
(statearr_26855_26910[(2)] = true);

(statearr_26855_26910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (14))){
var state_26810__$1 = state_26810;
var statearr_26856_26911 = state_26810__$1;
(statearr_26856_26911[(2)] = false);

(statearr_26856_26911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (26))){
var inst_26770 = (state_26810[(10)]);
var inst_26777 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26770);
var state_26810__$1 = state_26810;
var statearr_26857_26912 = state_26810__$1;
(statearr_26857_26912[(2)] = inst_26777);

(statearr_26857_26912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (16))){
var state_26810__$1 = state_26810;
var statearr_26858_26913 = state_26810__$1;
(statearr_26858_26913[(2)] = true);

(statearr_26858_26913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (38))){
var inst_26800 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26859_26914 = state_26810__$1;
(statearr_26859_26914[(2)] = inst_26800);

(statearr_26859_26914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (30))){
var inst_26761 = (state_26810[(9)]);
var inst_26770 = (state_26810[(10)]);
var inst_26762 = (state_26810[(13)]);
var inst_26787 = cljs.core.empty_QMARK_.call(null,inst_26761);
var inst_26788 = inst_26762.call(null,inst_26770);
var inst_26789 = cljs.core.not.call(null,inst_26788);
var inst_26790 = (inst_26787) && (inst_26789);
var state_26810__$1 = state_26810;
var statearr_26860_26915 = state_26810__$1;
(statearr_26860_26915[(2)] = inst_26790);

(statearr_26860_26915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (10))){
var inst_26714 = (state_26810[(8)]);
var inst_26734 = (state_26810[(2)]);
var inst_26735 = cljs.core.get.call(null,inst_26734,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26736 = cljs.core.get.call(null,inst_26734,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26737 = cljs.core.get.call(null,inst_26734,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26738 = inst_26714;
var state_26810__$1 = (function (){var statearr_26861 = state_26810;
(statearr_26861[(16)] = inst_26737);

(statearr_26861[(7)] = inst_26738);

(statearr_26861[(17)] = inst_26735);

(statearr_26861[(18)] = inst_26736);

return statearr_26861;
})();
var statearr_26862_26916 = state_26810__$1;
(statearr_26862_26916[(2)] = null);

(statearr_26862_26916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (18))){
var inst_26752 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26863_26917 = state_26810__$1;
(statearr_26863_26917[(2)] = inst_26752);

(statearr_26863_26917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (37))){
var state_26810__$1 = state_26810;
var statearr_26864_26918 = state_26810__$1;
(statearr_26864_26918[(2)] = null);

(statearr_26864_26918[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (8))){
var inst_26714 = (state_26810[(8)]);
var inst_26731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26714);
var state_26810__$1 = state_26810;
var statearr_26865_26919 = state_26810__$1;
(statearr_26865_26919[(2)] = inst_26731);

(statearr_26865_26919[(1)] = (10));


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
});})(c__25140__auto___26873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25028__auto__,c__25140__auto___26873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25029__auto__ = null;
var cljs$core$async$mix_$_state_machine__25029__auto____0 = (function (){
var statearr_26869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26869[(0)] = cljs$core$async$mix_$_state_machine__25029__auto__);

(statearr_26869[(1)] = (1));

return statearr_26869;
});
var cljs$core$async$mix_$_state_machine__25029__auto____1 = (function (state_26810){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_26810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e26870){if((e26870 instanceof Object)){
var ex__25032__auto__ = e26870;
var statearr_26871_26920 = state_26810;
(statearr_26871_26920[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26921 = state_26810;
state_26810 = G__26921;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25029__auto__ = function(state_26810){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25029__auto____1.call(this,state_26810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25029__auto____0;
cljs$core$async$mix_$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25029__auto____1;
return cljs$core$async$mix_$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___26873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25142__auto__ = (function (){var statearr_26872 = f__25141__auto__.call(null);
(statearr_26872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___26873);

return statearr_26872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___26873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20650__auto__ = (((p == null))?null:p);
var m__20651__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20651__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20650__auto__ = (((p == null))?null:p);
var m__20651__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,p,v,ch);
} else {
var m__20651__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26922 = [];
var len__21062__auto___26925 = arguments.length;
var i__21063__auto___26926 = (0);
while(true){
if((i__21063__auto___26926 < len__21062__auto___26925)){
args26922.push((arguments[i__21063__auto___26926]));

var G__26927 = (i__21063__auto___26926 + (1));
i__21063__auto___26926 = G__26927;
continue;
} else {
}
break;
}

var G__26924 = args26922.length;
switch (G__26924) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26922.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20650__auto__ = (((p == null))?null:p);
var m__20651__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,p);
} else {
var m__20651__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20650__auto__ = (((p == null))?null:p);
var m__20651__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20650__auto__)]);
if(!((m__20651__auto__ == null))){
return m__20651__auto__.call(null,p,v);
} else {
var m__20651__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20651__auto____$1 == null))){
return m__20651__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26930 = [];
var len__21062__auto___27055 = arguments.length;
var i__21063__auto___27056 = (0);
while(true){
if((i__21063__auto___27056 < len__21062__auto___27055)){
args26930.push((arguments[i__21063__auto___27056]));

var G__27057 = (i__21063__auto___27056 + (1));
i__21063__auto___27056 = G__27057;
continue;
} else {
}
break;
}

var G__26932 = args26930.length;
switch (G__26932) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26930.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19987__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19987__auto__)){
return or__19987__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19987__auto__,mults){
return (function (p1__26929_SHARP_){
if(cljs.core.truth_(p1__26929_SHARP_.call(null,topic))){
return p1__26929_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26929_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19987__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26933 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26934){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26934 = meta26934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26935,meta26934__$1){
var self__ = this;
var _26935__$1 = this;
return (new cljs.core.async.t_cljs$core$async26933(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26934__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26935){
var self__ = this;
var _26935__$1 = this;
return self__.meta26934;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26934","meta26934",-13643692,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26933";

cljs.core.async.t_cljs$core$async26933.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async26933");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26933 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26934){
return (new cljs.core.async.t_cljs$core$async26933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26934));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26933(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25140__auto___27059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27059,mults,ensure_mult,p){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27059,mults,ensure_mult,p){
return (function (state_27007){
var state_val_27008 = (state_27007[(1)]);
if((state_val_27008 === (7))){
var inst_27003 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27009_27060 = state_27007__$1;
(statearr_27009_27060[(2)] = inst_27003);

(statearr_27009_27060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (20))){
var state_27007__$1 = state_27007;
var statearr_27010_27061 = state_27007__$1;
(statearr_27010_27061[(2)] = null);

(statearr_27010_27061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (1))){
var state_27007__$1 = state_27007;
var statearr_27011_27062 = state_27007__$1;
(statearr_27011_27062[(2)] = null);

(statearr_27011_27062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (24))){
var inst_26986 = (state_27007[(7)]);
var inst_26995 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26986);
var state_27007__$1 = state_27007;
var statearr_27012_27063 = state_27007__$1;
(statearr_27012_27063[(2)] = inst_26995);

(statearr_27012_27063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (4))){
var inst_26938 = (state_27007[(8)]);
var inst_26938__$1 = (state_27007[(2)]);
var inst_26939 = (inst_26938__$1 == null);
var state_27007__$1 = (function (){var statearr_27013 = state_27007;
(statearr_27013[(8)] = inst_26938__$1);

return statearr_27013;
})();
if(cljs.core.truth_(inst_26939)){
var statearr_27014_27064 = state_27007__$1;
(statearr_27014_27064[(1)] = (5));

} else {
var statearr_27015_27065 = state_27007__$1;
(statearr_27015_27065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (15))){
var inst_26980 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27016_27066 = state_27007__$1;
(statearr_27016_27066[(2)] = inst_26980);

(statearr_27016_27066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (21))){
var inst_27000 = (state_27007[(2)]);
var state_27007__$1 = (function (){var statearr_27017 = state_27007;
(statearr_27017[(9)] = inst_27000);

return statearr_27017;
})();
var statearr_27018_27067 = state_27007__$1;
(statearr_27018_27067[(2)] = null);

(statearr_27018_27067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (13))){
var inst_26962 = (state_27007[(10)]);
var inst_26964 = cljs.core.chunked_seq_QMARK_.call(null,inst_26962);
var state_27007__$1 = state_27007;
if(inst_26964){
var statearr_27019_27068 = state_27007__$1;
(statearr_27019_27068[(1)] = (16));

} else {
var statearr_27020_27069 = state_27007__$1;
(statearr_27020_27069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (22))){
var inst_26992 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
if(cljs.core.truth_(inst_26992)){
var statearr_27021_27070 = state_27007__$1;
(statearr_27021_27070[(1)] = (23));

} else {
var statearr_27022_27071 = state_27007__$1;
(statearr_27022_27071[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (6))){
var inst_26938 = (state_27007[(8)]);
var inst_26988 = (state_27007[(11)]);
var inst_26986 = (state_27007[(7)]);
var inst_26986__$1 = topic_fn.call(null,inst_26938);
var inst_26987 = cljs.core.deref.call(null,mults);
var inst_26988__$1 = cljs.core.get.call(null,inst_26987,inst_26986__$1);
var state_27007__$1 = (function (){var statearr_27023 = state_27007;
(statearr_27023[(11)] = inst_26988__$1);

(statearr_27023[(7)] = inst_26986__$1);

return statearr_27023;
})();
if(cljs.core.truth_(inst_26988__$1)){
var statearr_27024_27072 = state_27007__$1;
(statearr_27024_27072[(1)] = (19));

} else {
var statearr_27025_27073 = state_27007__$1;
(statearr_27025_27073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (25))){
var inst_26997 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27026_27074 = state_27007__$1;
(statearr_27026_27074[(2)] = inst_26997);

(statearr_27026_27074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (17))){
var inst_26962 = (state_27007[(10)]);
var inst_26971 = cljs.core.first.call(null,inst_26962);
var inst_26972 = cljs.core.async.muxch_STAR_.call(null,inst_26971);
var inst_26973 = cljs.core.async.close_BANG_.call(null,inst_26972);
var inst_26974 = cljs.core.next.call(null,inst_26962);
var inst_26948 = inst_26974;
var inst_26949 = null;
var inst_26950 = (0);
var inst_26951 = (0);
var state_27007__$1 = (function (){var statearr_27027 = state_27007;
(statearr_27027[(12)] = inst_26949);

(statearr_27027[(13)] = inst_26973);

(statearr_27027[(14)] = inst_26951);

(statearr_27027[(15)] = inst_26950);

(statearr_27027[(16)] = inst_26948);

return statearr_27027;
})();
var statearr_27028_27075 = state_27007__$1;
(statearr_27028_27075[(2)] = null);

(statearr_27028_27075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (3))){
var inst_27005 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27007__$1,inst_27005);
} else {
if((state_val_27008 === (12))){
var inst_26982 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27029_27076 = state_27007__$1;
(statearr_27029_27076[(2)] = inst_26982);

(statearr_27029_27076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (2))){
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27007__$1,(4),ch);
} else {
if((state_val_27008 === (23))){
var state_27007__$1 = state_27007;
var statearr_27030_27077 = state_27007__$1;
(statearr_27030_27077[(2)] = null);

(statearr_27030_27077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (19))){
var inst_26938 = (state_27007[(8)]);
var inst_26988 = (state_27007[(11)]);
var inst_26990 = cljs.core.async.muxch_STAR_.call(null,inst_26988);
var state_27007__$1 = state_27007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27007__$1,(22),inst_26990,inst_26938);
} else {
if((state_val_27008 === (11))){
var inst_26962 = (state_27007[(10)]);
var inst_26948 = (state_27007[(16)]);
var inst_26962__$1 = cljs.core.seq.call(null,inst_26948);
var state_27007__$1 = (function (){var statearr_27031 = state_27007;
(statearr_27031[(10)] = inst_26962__$1);

return statearr_27031;
})();
if(inst_26962__$1){
var statearr_27032_27078 = state_27007__$1;
(statearr_27032_27078[(1)] = (13));

} else {
var statearr_27033_27079 = state_27007__$1;
(statearr_27033_27079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (9))){
var inst_26984 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27034_27080 = state_27007__$1;
(statearr_27034_27080[(2)] = inst_26984);

(statearr_27034_27080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (5))){
var inst_26945 = cljs.core.deref.call(null,mults);
var inst_26946 = cljs.core.vals.call(null,inst_26945);
var inst_26947 = cljs.core.seq.call(null,inst_26946);
var inst_26948 = inst_26947;
var inst_26949 = null;
var inst_26950 = (0);
var inst_26951 = (0);
var state_27007__$1 = (function (){var statearr_27035 = state_27007;
(statearr_27035[(12)] = inst_26949);

(statearr_27035[(14)] = inst_26951);

(statearr_27035[(15)] = inst_26950);

(statearr_27035[(16)] = inst_26948);

return statearr_27035;
})();
var statearr_27036_27081 = state_27007__$1;
(statearr_27036_27081[(2)] = null);

(statearr_27036_27081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (14))){
var state_27007__$1 = state_27007;
var statearr_27040_27082 = state_27007__$1;
(statearr_27040_27082[(2)] = null);

(statearr_27040_27082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (16))){
var inst_26962 = (state_27007[(10)]);
var inst_26966 = cljs.core.chunk_first.call(null,inst_26962);
var inst_26967 = cljs.core.chunk_rest.call(null,inst_26962);
var inst_26968 = cljs.core.count.call(null,inst_26966);
var inst_26948 = inst_26967;
var inst_26949 = inst_26966;
var inst_26950 = inst_26968;
var inst_26951 = (0);
var state_27007__$1 = (function (){var statearr_27041 = state_27007;
(statearr_27041[(12)] = inst_26949);

(statearr_27041[(14)] = inst_26951);

(statearr_27041[(15)] = inst_26950);

(statearr_27041[(16)] = inst_26948);

return statearr_27041;
})();
var statearr_27042_27083 = state_27007__$1;
(statearr_27042_27083[(2)] = null);

(statearr_27042_27083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (10))){
var inst_26949 = (state_27007[(12)]);
var inst_26951 = (state_27007[(14)]);
var inst_26950 = (state_27007[(15)]);
var inst_26948 = (state_27007[(16)]);
var inst_26956 = cljs.core._nth.call(null,inst_26949,inst_26951);
var inst_26957 = cljs.core.async.muxch_STAR_.call(null,inst_26956);
var inst_26958 = cljs.core.async.close_BANG_.call(null,inst_26957);
var inst_26959 = (inst_26951 + (1));
var tmp27037 = inst_26949;
var tmp27038 = inst_26950;
var tmp27039 = inst_26948;
var inst_26948__$1 = tmp27039;
var inst_26949__$1 = tmp27037;
var inst_26950__$1 = tmp27038;
var inst_26951__$1 = inst_26959;
var state_27007__$1 = (function (){var statearr_27043 = state_27007;
(statearr_27043[(12)] = inst_26949__$1);

(statearr_27043[(17)] = inst_26958);

(statearr_27043[(14)] = inst_26951__$1);

(statearr_27043[(15)] = inst_26950__$1);

(statearr_27043[(16)] = inst_26948__$1);

return statearr_27043;
})();
var statearr_27044_27084 = state_27007__$1;
(statearr_27044_27084[(2)] = null);

(statearr_27044_27084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (18))){
var inst_26977 = (state_27007[(2)]);
var state_27007__$1 = state_27007;
var statearr_27045_27085 = state_27007__$1;
(statearr_27045_27085[(2)] = inst_26977);

(statearr_27045_27085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27008 === (8))){
var inst_26951 = (state_27007[(14)]);
var inst_26950 = (state_27007[(15)]);
var inst_26953 = (inst_26951 < inst_26950);
var inst_26954 = inst_26953;
var state_27007__$1 = state_27007;
if(cljs.core.truth_(inst_26954)){
var statearr_27046_27086 = state_27007__$1;
(statearr_27046_27086[(1)] = (10));

} else {
var statearr_27047_27087 = state_27007__$1;
(statearr_27047_27087[(1)] = (11));

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
});})(c__25140__auto___27059,mults,ensure_mult,p))
;
return ((function (switch__25028__auto__,c__25140__auto___27059,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27051[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27051[(1)] = (1));

return statearr_27051;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27007){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27052){if((e27052 instanceof Object)){
var ex__25032__auto__ = e27052;
var statearr_27053_27088 = state_27007;
(statearr_27053_27088[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27089 = state_27007;
state_27007 = G__27089;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27059,mults,ensure_mult,p))
})();
var state__25142__auto__ = (function (){var statearr_27054 = f__25141__auto__.call(null);
(statearr_27054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27059);

return statearr_27054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27059,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args27090 = [];
var len__21062__auto___27093 = arguments.length;
var i__21063__auto___27094 = (0);
while(true){
if((i__21063__auto___27094 < len__21062__auto___27093)){
args27090.push((arguments[i__21063__auto___27094]));

var G__27095 = (i__21063__auto___27094 + (1));
i__21063__auto___27094 = G__27095;
continue;
} else {
}
break;
}

var G__27092 = args27090.length;
switch (G__27092) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27090.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args27097 = [];
var len__21062__auto___27100 = arguments.length;
var i__21063__auto___27101 = (0);
while(true){
if((i__21063__auto___27101 < len__21062__auto___27100)){
args27097.push((arguments[i__21063__auto___27101]));

var G__27102 = (i__21063__auto___27101 + (1));
i__21063__auto___27101 = G__27102;
continue;
} else {
}
break;
}

var G__27099 = args27097.length;
switch (G__27099) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27097.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args27104 = [];
var len__21062__auto___27175 = arguments.length;
var i__21063__auto___27176 = (0);
while(true){
if((i__21063__auto___27176 < len__21062__auto___27175)){
args27104.push((arguments[i__21063__auto___27176]));

var G__27177 = (i__21063__auto___27176 + (1));
i__21063__auto___27176 = G__27177;
continue;
} else {
}
break;
}

var G__27106 = args27104.length;
switch (G__27106) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27104.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25140__auto___27179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27179,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27179,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27145){
var state_val_27146 = (state_27145[(1)]);
if((state_val_27146 === (7))){
var state_27145__$1 = state_27145;
var statearr_27147_27180 = state_27145__$1;
(statearr_27147_27180[(2)] = null);

(statearr_27147_27180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (1))){
var state_27145__$1 = state_27145;
var statearr_27148_27181 = state_27145__$1;
(statearr_27148_27181[(2)] = null);

(statearr_27148_27181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (4))){
var inst_27109 = (state_27145[(7)]);
var inst_27111 = (inst_27109 < cnt);
var state_27145__$1 = state_27145;
if(cljs.core.truth_(inst_27111)){
var statearr_27149_27182 = state_27145__$1;
(statearr_27149_27182[(1)] = (6));

} else {
var statearr_27150_27183 = state_27145__$1;
(statearr_27150_27183[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (15))){
var inst_27141 = (state_27145[(2)]);
var state_27145__$1 = state_27145;
var statearr_27151_27184 = state_27145__$1;
(statearr_27151_27184[(2)] = inst_27141);

(statearr_27151_27184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (13))){
var inst_27134 = cljs.core.async.close_BANG_.call(null,out);
var state_27145__$1 = state_27145;
var statearr_27152_27185 = state_27145__$1;
(statearr_27152_27185[(2)] = inst_27134);

(statearr_27152_27185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (6))){
var state_27145__$1 = state_27145;
var statearr_27153_27186 = state_27145__$1;
(statearr_27153_27186[(2)] = null);

(statearr_27153_27186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (3))){
var inst_27143 = (state_27145[(2)]);
var state_27145__$1 = state_27145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27145__$1,inst_27143);
} else {
if((state_val_27146 === (12))){
var inst_27131 = (state_27145[(8)]);
var inst_27131__$1 = (state_27145[(2)]);
var inst_27132 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27131__$1);
var state_27145__$1 = (function (){var statearr_27154 = state_27145;
(statearr_27154[(8)] = inst_27131__$1);

return statearr_27154;
})();
if(cljs.core.truth_(inst_27132)){
var statearr_27155_27187 = state_27145__$1;
(statearr_27155_27187[(1)] = (13));

} else {
var statearr_27156_27188 = state_27145__$1;
(statearr_27156_27188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (2))){
var inst_27108 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27109 = (0);
var state_27145__$1 = (function (){var statearr_27157 = state_27145;
(statearr_27157[(9)] = inst_27108);

(statearr_27157[(7)] = inst_27109);

return statearr_27157;
})();
var statearr_27158_27189 = state_27145__$1;
(statearr_27158_27189[(2)] = null);

(statearr_27158_27189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (11))){
var inst_27109 = (state_27145[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27145,(10),Object,null,(9));
var inst_27118 = chs__$1.call(null,inst_27109);
var inst_27119 = done.call(null,inst_27109);
var inst_27120 = cljs.core.async.take_BANG_.call(null,inst_27118,inst_27119);
var state_27145__$1 = state_27145;
var statearr_27159_27190 = state_27145__$1;
(statearr_27159_27190[(2)] = inst_27120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (9))){
var inst_27109 = (state_27145[(7)]);
var inst_27122 = (state_27145[(2)]);
var inst_27123 = (inst_27109 + (1));
var inst_27109__$1 = inst_27123;
var state_27145__$1 = (function (){var statearr_27160 = state_27145;
(statearr_27160[(7)] = inst_27109__$1);

(statearr_27160[(10)] = inst_27122);

return statearr_27160;
})();
var statearr_27161_27191 = state_27145__$1;
(statearr_27161_27191[(2)] = null);

(statearr_27161_27191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (5))){
var inst_27129 = (state_27145[(2)]);
var state_27145__$1 = (function (){var statearr_27162 = state_27145;
(statearr_27162[(11)] = inst_27129);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27145__$1,(12),dchan);
} else {
if((state_val_27146 === (14))){
var inst_27131 = (state_27145[(8)]);
var inst_27136 = cljs.core.apply.call(null,f,inst_27131);
var state_27145__$1 = state_27145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27145__$1,(16),out,inst_27136);
} else {
if((state_val_27146 === (16))){
var inst_27138 = (state_27145[(2)]);
var state_27145__$1 = (function (){var statearr_27163 = state_27145;
(statearr_27163[(12)] = inst_27138);

return statearr_27163;
})();
var statearr_27164_27192 = state_27145__$1;
(statearr_27164_27192[(2)] = null);

(statearr_27164_27192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (10))){
var inst_27113 = (state_27145[(2)]);
var inst_27114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27145__$1 = (function (){var statearr_27165 = state_27145;
(statearr_27165[(13)] = inst_27113);

return statearr_27165;
})();
var statearr_27166_27193 = state_27145__$1;
(statearr_27166_27193[(2)] = inst_27114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (8))){
var inst_27127 = (state_27145[(2)]);
var state_27145__$1 = state_27145;
var statearr_27167_27194 = state_27145__$1;
(statearr_27167_27194[(2)] = inst_27127);

(statearr_27167_27194[(1)] = (5));


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
});})(c__25140__auto___27179,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25028__auto__,c__25140__auto___27179,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27171[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27171[(1)] = (1));

return statearr_27171;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27145){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27172){if((e27172 instanceof Object)){
var ex__25032__auto__ = e27172;
var statearr_27173_27195 = state_27145;
(statearr_27173_27195[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27196 = state_27145;
state_27145 = G__27196;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27179,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25142__auto__ = (function (){var statearr_27174 = f__25141__auto__.call(null);
(statearr_27174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27179);

return statearr_27174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27179,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27198 = [];
var len__21062__auto___27256 = arguments.length;
var i__21063__auto___27257 = (0);
while(true){
if((i__21063__auto___27257 < len__21062__auto___27256)){
args27198.push((arguments[i__21063__auto___27257]));

var G__27258 = (i__21063__auto___27257 + (1));
i__21063__auto___27257 = G__27258;
continue;
} else {
}
break;
}

var G__27200 = args27198.length;
switch (G__27200) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27198.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25140__auto___27260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27260,out){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27260,out){
return (function (state_27232){
var state_val_27233 = (state_27232[(1)]);
if((state_val_27233 === (7))){
var inst_27212 = (state_27232[(7)]);
var inst_27211 = (state_27232[(8)]);
var inst_27211__$1 = (state_27232[(2)]);
var inst_27212__$1 = cljs.core.nth.call(null,inst_27211__$1,(0),null);
var inst_27213 = cljs.core.nth.call(null,inst_27211__$1,(1),null);
var inst_27214 = (inst_27212__$1 == null);
var state_27232__$1 = (function (){var statearr_27234 = state_27232;
(statearr_27234[(9)] = inst_27213);

(statearr_27234[(7)] = inst_27212__$1);

(statearr_27234[(8)] = inst_27211__$1);

return statearr_27234;
})();
if(cljs.core.truth_(inst_27214)){
var statearr_27235_27261 = state_27232__$1;
(statearr_27235_27261[(1)] = (8));

} else {
var statearr_27236_27262 = state_27232__$1;
(statearr_27236_27262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27233 === (1))){
var inst_27201 = cljs.core.vec.call(null,chs);
var inst_27202 = inst_27201;
var state_27232__$1 = (function (){var statearr_27237 = state_27232;
(statearr_27237[(10)] = inst_27202);

return statearr_27237;
})();
var statearr_27238_27263 = state_27232__$1;
(statearr_27238_27263[(2)] = null);

(statearr_27238_27263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27233 === (4))){
var inst_27202 = (state_27232[(10)]);
var state_27232__$1 = state_27232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27232__$1,(7),inst_27202);
} else {
if((state_val_27233 === (6))){
var inst_27228 = (state_27232[(2)]);
var state_27232__$1 = state_27232;
var statearr_27239_27264 = state_27232__$1;
(statearr_27239_27264[(2)] = inst_27228);

(statearr_27239_27264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27233 === (3))){
var inst_27230 = (state_27232[(2)]);
var state_27232__$1 = state_27232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27232__$1,inst_27230);
} else {
if((state_val_27233 === (2))){
var inst_27202 = (state_27232[(10)]);
var inst_27204 = cljs.core.count.call(null,inst_27202);
var inst_27205 = (inst_27204 > (0));
var state_27232__$1 = state_27232;
if(cljs.core.truth_(inst_27205)){
var statearr_27241_27265 = state_27232__$1;
(statearr_27241_27265[(1)] = (4));

} else {
var statearr_27242_27266 = state_27232__$1;
(statearr_27242_27266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27233 === (11))){
var inst_27202 = (state_27232[(10)]);
var inst_27221 = (state_27232[(2)]);
var tmp27240 = inst_27202;
var inst_27202__$1 = tmp27240;
var state_27232__$1 = (function (){var statearr_27243 = state_27232;
(statearr_27243[(11)] = inst_27221);

(statearr_27243[(10)] = inst_27202__$1);

return statearr_27243;
})();
var statearr_27244_27267 = state_27232__$1;
(statearr_27244_27267[(2)] = null);

(statearr_27244_27267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27233 === (9))){
var inst_27212 = (state_27232[(7)]);
var state_27232__$1 = state_27232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27232__$1,(11),out,inst_27212);
} else {
if((state_val_27233 === (5))){
var inst_27226 = cljs.core.async.close_BANG_.call(null,out);
var state_27232__$1 = state_27232;
var statearr_27245_27268 = state_27232__$1;
(statearr_27245_27268[(2)] = inst_27226);

(statearr_27245_27268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27233 === (10))){
var inst_27224 = (state_27232[(2)]);
var state_27232__$1 = state_27232;
var statearr_27246_27269 = state_27232__$1;
(statearr_27246_27269[(2)] = inst_27224);

(statearr_27246_27269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27233 === (8))){
var inst_27213 = (state_27232[(9)]);
var inst_27212 = (state_27232[(7)]);
var inst_27202 = (state_27232[(10)]);
var inst_27211 = (state_27232[(8)]);
var inst_27216 = (function (){var cs = inst_27202;
var vec__27207 = inst_27211;
var v = inst_27212;
var c = inst_27213;
return ((function (cs,vec__27207,v,c,inst_27213,inst_27212,inst_27202,inst_27211,state_val_27233,c__25140__auto___27260,out){
return (function (p1__27197_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27197_SHARP_);
});
;})(cs,vec__27207,v,c,inst_27213,inst_27212,inst_27202,inst_27211,state_val_27233,c__25140__auto___27260,out))
})();
var inst_27217 = cljs.core.filterv.call(null,inst_27216,inst_27202);
var inst_27202__$1 = inst_27217;
var state_27232__$1 = (function (){var statearr_27247 = state_27232;
(statearr_27247[(10)] = inst_27202__$1);

return statearr_27247;
})();
var statearr_27248_27270 = state_27232__$1;
(statearr_27248_27270[(2)] = null);

(statearr_27248_27270[(1)] = (2));


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
});})(c__25140__auto___27260,out))
;
return ((function (switch__25028__auto__,c__25140__auto___27260,out){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27252[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27252[(1)] = (1));

return statearr_27252;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27232){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27253){if((e27253 instanceof Object)){
var ex__25032__auto__ = e27253;
var statearr_27254_27271 = state_27232;
(statearr_27254_27271[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27272 = state_27232;
state_27232 = G__27272;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27260,out))
})();
var state__25142__auto__ = (function (){var statearr_27255 = f__25141__auto__.call(null);
(statearr_27255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27260);

return statearr_27255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27260,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27273 = [];
var len__21062__auto___27322 = arguments.length;
var i__21063__auto___27323 = (0);
while(true){
if((i__21063__auto___27323 < len__21062__auto___27322)){
args27273.push((arguments[i__21063__auto___27323]));

var G__27324 = (i__21063__auto___27323 + (1));
i__21063__auto___27323 = G__27324;
continue;
} else {
}
break;
}

var G__27275 = args27273.length;
switch (G__27275) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27273.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25140__auto___27326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27326,out){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27326,out){
return (function (state_27299){
var state_val_27300 = (state_27299[(1)]);
if((state_val_27300 === (7))){
var inst_27281 = (state_27299[(7)]);
var inst_27281__$1 = (state_27299[(2)]);
var inst_27282 = (inst_27281__$1 == null);
var inst_27283 = cljs.core.not.call(null,inst_27282);
var state_27299__$1 = (function (){var statearr_27301 = state_27299;
(statearr_27301[(7)] = inst_27281__$1);

return statearr_27301;
})();
if(inst_27283){
var statearr_27302_27327 = state_27299__$1;
(statearr_27302_27327[(1)] = (8));

} else {
var statearr_27303_27328 = state_27299__$1;
(statearr_27303_27328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (1))){
var inst_27276 = (0);
var state_27299__$1 = (function (){var statearr_27304 = state_27299;
(statearr_27304[(8)] = inst_27276);

return statearr_27304;
})();
var statearr_27305_27329 = state_27299__$1;
(statearr_27305_27329[(2)] = null);

(statearr_27305_27329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (4))){
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27299__$1,(7),ch);
} else {
if((state_val_27300 === (6))){
var inst_27294 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27306_27330 = state_27299__$1;
(statearr_27306_27330[(2)] = inst_27294);

(statearr_27306_27330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (3))){
var inst_27296 = (state_27299[(2)]);
var inst_27297 = cljs.core.async.close_BANG_.call(null,out);
var state_27299__$1 = (function (){var statearr_27307 = state_27299;
(statearr_27307[(9)] = inst_27296);

return statearr_27307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27299__$1,inst_27297);
} else {
if((state_val_27300 === (2))){
var inst_27276 = (state_27299[(8)]);
var inst_27278 = (inst_27276 < n);
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27278)){
var statearr_27308_27331 = state_27299__$1;
(statearr_27308_27331[(1)] = (4));

} else {
var statearr_27309_27332 = state_27299__$1;
(statearr_27309_27332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (11))){
var inst_27276 = (state_27299[(8)]);
var inst_27286 = (state_27299[(2)]);
var inst_27287 = (inst_27276 + (1));
var inst_27276__$1 = inst_27287;
var state_27299__$1 = (function (){var statearr_27310 = state_27299;
(statearr_27310[(10)] = inst_27286);

(statearr_27310[(8)] = inst_27276__$1);

return statearr_27310;
})();
var statearr_27311_27333 = state_27299__$1;
(statearr_27311_27333[(2)] = null);

(statearr_27311_27333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (9))){
var state_27299__$1 = state_27299;
var statearr_27312_27334 = state_27299__$1;
(statearr_27312_27334[(2)] = null);

(statearr_27312_27334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (5))){
var state_27299__$1 = state_27299;
var statearr_27313_27335 = state_27299__$1;
(statearr_27313_27335[(2)] = null);

(statearr_27313_27335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (10))){
var inst_27291 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27314_27336 = state_27299__$1;
(statearr_27314_27336[(2)] = inst_27291);

(statearr_27314_27336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (8))){
var inst_27281 = (state_27299[(7)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(11),out,inst_27281);
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
});})(c__25140__auto___27326,out))
;
return ((function (switch__25028__auto__,c__25140__auto___27326,out){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27318[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27318[(1)] = (1));

return statearr_27318;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27299){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27319){if((e27319 instanceof Object)){
var ex__25032__auto__ = e27319;
var statearr_27320_27337 = state_27299;
(statearr_27320_27337[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27338 = state_27299;
state_27299 = G__27338;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27326,out))
})();
var state__25142__auto__ = (function (){var statearr_27321 = f__25141__auto__.call(null);
(statearr_27321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27326);

return statearr_27321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27326,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27346 = (function (map_LT_,f,ch,meta27347){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27347 = meta27347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27348,meta27347__$1){
var self__ = this;
var _27348__$1 = this;
return (new cljs.core.async.t_cljs$core$async27346(self__.map_LT_,self__.f,self__.ch,meta27347__$1));
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27348){
var self__ = this;
var _27348__$1 = this;
return self__.meta27347;
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27349 = (function (map_LT_,f,ch,meta27347,_,fn1,meta27350){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27347 = meta27347;
this._ = _;
this.fn1 = fn1;
this.meta27350 = meta27350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27351,meta27350__$1){
var self__ = this;
var _27351__$1 = this;
return (new cljs.core.async.t_cljs$core$async27349(self__.map_LT_,self__.f,self__.ch,self__.meta27347,self__._,self__.fn1,meta27350__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27351){
var self__ = this;
var _27351__$1 = this;
return self__.meta27350;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27339_SHARP_){
return f1.call(null,(((p1__27339_SHARP_ == null))?null:self__.f.call(null,p1__27339_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27349.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27347","meta27347",-1468013481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27346","cljs.core.async/t_cljs$core$async27346",-1595956107,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27350","meta27350",-241267608,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27349";

cljs.core.async.t_cljs$core$async27349.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async27349");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27349 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27349(map_LT___$1,f__$1,ch__$1,meta27347__$1,___$2,fn1__$1,meta27350){
return (new cljs.core.async.t_cljs$core$async27349(map_LT___$1,f__$1,ch__$1,meta27347__$1,___$2,fn1__$1,meta27350));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27349(self__.map_LT_,self__.f,self__.ch,self__.meta27347,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19975__auto__ = ret;
if(cljs.core.truth_(and__19975__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19975__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27347","meta27347",-1468013481,null)], null);
});

cljs.core.async.t_cljs$core$async27346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27346";

cljs.core.async.t_cljs$core$async27346.cljs$lang$ctorPrWriter = (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async27346");
});

cljs.core.async.__GT_t_cljs$core$async27346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27346(map_LT___$1,f__$1,ch__$1,meta27347){
return (new cljs.core.async.t_cljs$core$async27346(map_LT___$1,f__$1,ch__$1,meta27347));
});

}

return (new cljs.core.async.t_cljs$core$async27346(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27355 = (function (map_GT_,f,ch,meta27356){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27356 = meta27356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27357,meta27356__$1){
var self__ = this;
var _27357__$1 = this;
return (new cljs.core.async.t_cljs$core$async27355(self__.map_GT_,self__.f,self__.ch,meta27356__$1));
});

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27357){
var self__ = this;
var _27357__$1 = this;
return self__.meta27356;
});

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27356","meta27356",-644947427,null)], null);
});

cljs.core.async.t_cljs$core$async27355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27355";

cljs.core.async.t_cljs$core$async27355.cljs$lang$ctorPrWriter = (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async27355");
});

cljs.core.async.__GT_t_cljs$core$async27355 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27355(map_GT___$1,f__$1,ch__$1,meta27356){
return (new cljs.core.async.t_cljs$core$async27355(map_GT___$1,f__$1,ch__$1,meta27356));
});

}

return (new cljs.core.async.t_cljs$core$async27355(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27361 = (function (filter_GT_,p,ch,meta27362){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27362 = meta27362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27363,meta27362__$1){
var self__ = this;
var _27363__$1 = this;
return (new cljs.core.async.t_cljs$core$async27361(self__.filter_GT_,self__.p,self__.ch,meta27362__$1));
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27363){
var self__ = this;
var _27363__$1 = this;
return self__.meta27362;
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27362","meta27362",1465436443,null)], null);
});

cljs.core.async.t_cljs$core$async27361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27361";

cljs.core.async.t_cljs$core$async27361.cljs$lang$ctorPrWriter = (function (this__20593__auto__,writer__20594__auto__,opt__20595__auto__){
return cljs.core._write.call(null,writer__20594__auto__,"cljs.core.async/t_cljs$core$async27361");
});

cljs.core.async.__GT_t_cljs$core$async27361 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27361(filter_GT___$1,p__$1,ch__$1,meta27362){
return (new cljs.core.async.t_cljs$core$async27361(filter_GT___$1,p__$1,ch__$1,meta27362));
});

}

return (new cljs.core.async.t_cljs$core$async27361(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27364 = [];
var len__21062__auto___27408 = arguments.length;
var i__21063__auto___27409 = (0);
while(true){
if((i__21063__auto___27409 < len__21062__auto___27408)){
args27364.push((arguments[i__21063__auto___27409]));

var G__27410 = (i__21063__auto___27409 + (1));
i__21063__auto___27409 = G__27410;
continue;
} else {
}
break;
}

var G__27366 = args27364.length;
switch (G__27366) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27364.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25140__auto___27412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27412,out){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27412,out){
return (function (state_27387){
var state_val_27388 = (state_27387[(1)]);
if((state_val_27388 === (7))){
var inst_27383 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27389_27413 = state_27387__$1;
(statearr_27389_27413[(2)] = inst_27383);

(statearr_27389_27413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (1))){
var state_27387__$1 = state_27387;
var statearr_27390_27414 = state_27387__$1;
(statearr_27390_27414[(2)] = null);

(statearr_27390_27414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (4))){
var inst_27369 = (state_27387[(7)]);
var inst_27369__$1 = (state_27387[(2)]);
var inst_27370 = (inst_27369__$1 == null);
var state_27387__$1 = (function (){var statearr_27391 = state_27387;
(statearr_27391[(7)] = inst_27369__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27370)){
var statearr_27392_27415 = state_27387__$1;
(statearr_27392_27415[(1)] = (5));

} else {
var statearr_27393_27416 = state_27387__$1;
(statearr_27393_27416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (6))){
var inst_27369 = (state_27387[(7)]);
var inst_27374 = p.call(null,inst_27369);
var state_27387__$1 = state_27387;
if(cljs.core.truth_(inst_27374)){
var statearr_27394_27417 = state_27387__$1;
(statearr_27394_27417[(1)] = (8));

} else {
var statearr_27395_27418 = state_27387__$1;
(statearr_27395_27418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (3))){
var inst_27385 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else {
if((state_val_27388 === (2))){
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27387__$1,(4),ch);
} else {
if((state_val_27388 === (11))){
var inst_27377 = (state_27387[(2)]);
var state_27387__$1 = state_27387;
var statearr_27396_27419 = state_27387__$1;
(statearr_27396_27419[(2)] = inst_27377);

(statearr_27396_27419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (9))){
var state_27387__$1 = state_27387;
var statearr_27397_27420 = state_27387__$1;
(statearr_27397_27420[(2)] = null);

(statearr_27397_27420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (5))){
var inst_27372 = cljs.core.async.close_BANG_.call(null,out);
var state_27387__$1 = state_27387;
var statearr_27398_27421 = state_27387__$1;
(statearr_27398_27421[(2)] = inst_27372);

(statearr_27398_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (10))){
var inst_27380 = (state_27387[(2)]);
var state_27387__$1 = (function (){var statearr_27399 = state_27387;
(statearr_27399[(8)] = inst_27380);

return statearr_27399;
})();
var statearr_27400_27422 = state_27387__$1;
(statearr_27400_27422[(2)] = null);

(statearr_27400_27422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27388 === (8))){
var inst_27369 = (state_27387[(7)]);
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27387__$1,(11),out,inst_27369);
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
});})(c__25140__auto___27412,out))
;
return ((function (switch__25028__auto__,c__25140__auto___27412,out){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27404 = [null,null,null,null,null,null,null,null,null];
(statearr_27404[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27404[(1)] = (1));

return statearr_27404;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27387){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27405){if((e27405 instanceof Object)){
var ex__25032__auto__ = e27405;
var statearr_27406_27423 = state_27387;
(statearr_27406_27423[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27424 = state_27387;
state_27387 = G__27424;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27412,out))
})();
var state__25142__auto__ = (function (){var statearr_27407 = f__25141__auto__.call(null);
(statearr_27407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27412);

return statearr_27407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27412,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27425 = [];
var len__21062__auto___27428 = arguments.length;
var i__21063__auto___27429 = (0);
while(true){
if((i__21063__auto___27429 < len__21062__auto___27428)){
args27425.push((arguments[i__21063__auto___27429]));

var G__27430 = (i__21063__auto___27429 + (1));
i__21063__auto___27429 = G__27430;
continue;
} else {
}
break;
}

var G__27427 = args27425.length;
switch (G__27427) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27425.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25140__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto__){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto__){
return (function (state_27597){
var state_val_27598 = (state_27597[(1)]);
if((state_val_27598 === (7))){
var inst_27593 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
var statearr_27599_27640 = state_27597__$1;
(statearr_27599_27640[(2)] = inst_27593);

(statearr_27599_27640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (20))){
var inst_27563 = (state_27597[(7)]);
var inst_27574 = (state_27597[(2)]);
var inst_27575 = cljs.core.next.call(null,inst_27563);
var inst_27549 = inst_27575;
var inst_27550 = null;
var inst_27551 = (0);
var inst_27552 = (0);
var state_27597__$1 = (function (){var statearr_27600 = state_27597;
(statearr_27600[(8)] = inst_27549);

(statearr_27600[(9)] = inst_27551);

(statearr_27600[(10)] = inst_27552);

(statearr_27600[(11)] = inst_27574);

(statearr_27600[(12)] = inst_27550);

return statearr_27600;
})();
var statearr_27601_27641 = state_27597__$1;
(statearr_27601_27641[(2)] = null);

(statearr_27601_27641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (1))){
var state_27597__$1 = state_27597;
var statearr_27602_27642 = state_27597__$1;
(statearr_27602_27642[(2)] = null);

(statearr_27602_27642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (4))){
var inst_27538 = (state_27597[(13)]);
var inst_27538__$1 = (state_27597[(2)]);
var inst_27539 = (inst_27538__$1 == null);
var state_27597__$1 = (function (){var statearr_27603 = state_27597;
(statearr_27603[(13)] = inst_27538__$1);

return statearr_27603;
})();
if(cljs.core.truth_(inst_27539)){
var statearr_27604_27643 = state_27597__$1;
(statearr_27604_27643[(1)] = (5));

} else {
var statearr_27605_27644 = state_27597__$1;
(statearr_27605_27644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (15))){
var state_27597__$1 = state_27597;
var statearr_27609_27645 = state_27597__$1;
(statearr_27609_27645[(2)] = null);

(statearr_27609_27645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (21))){
var state_27597__$1 = state_27597;
var statearr_27610_27646 = state_27597__$1;
(statearr_27610_27646[(2)] = null);

(statearr_27610_27646[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (13))){
var inst_27549 = (state_27597[(8)]);
var inst_27551 = (state_27597[(9)]);
var inst_27552 = (state_27597[(10)]);
var inst_27550 = (state_27597[(12)]);
var inst_27559 = (state_27597[(2)]);
var inst_27560 = (inst_27552 + (1));
var tmp27606 = inst_27549;
var tmp27607 = inst_27551;
var tmp27608 = inst_27550;
var inst_27549__$1 = tmp27606;
var inst_27550__$1 = tmp27608;
var inst_27551__$1 = tmp27607;
var inst_27552__$1 = inst_27560;
var state_27597__$1 = (function (){var statearr_27611 = state_27597;
(statearr_27611[(8)] = inst_27549__$1);

(statearr_27611[(9)] = inst_27551__$1);

(statearr_27611[(10)] = inst_27552__$1);

(statearr_27611[(14)] = inst_27559);

(statearr_27611[(12)] = inst_27550__$1);

return statearr_27611;
})();
var statearr_27612_27647 = state_27597__$1;
(statearr_27612_27647[(2)] = null);

(statearr_27612_27647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (22))){
var state_27597__$1 = state_27597;
var statearr_27613_27648 = state_27597__$1;
(statearr_27613_27648[(2)] = null);

(statearr_27613_27648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (6))){
var inst_27538 = (state_27597[(13)]);
var inst_27547 = f.call(null,inst_27538);
var inst_27548 = cljs.core.seq.call(null,inst_27547);
var inst_27549 = inst_27548;
var inst_27550 = null;
var inst_27551 = (0);
var inst_27552 = (0);
var state_27597__$1 = (function (){var statearr_27614 = state_27597;
(statearr_27614[(8)] = inst_27549);

(statearr_27614[(9)] = inst_27551);

(statearr_27614[(10)] = inst_27552);

(statearr_27614[(12)] = inst_27550);

return statearr_27614;
})();
var statearr_27615_27649 = state_27597__$1;
(statearr_27615_27649[(2)] = null);

(statearr_27615_27649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (17))){
var inst_27563 = (state_27597[(7)]);
var inst_27567 = cljs.core.chunk_first.call(null,inst_27563);
var inst_27568 = cljs.core.chunk_rest.call(null,inst_27563);
var inst_27569 = cljs.core.count.call(null,inst_27567);
var inst_27549 = inst_27568;
var inst_27550 = inst_27567;
var inst_27551 = inst_27569;
var inst_27552 = (0);
var state_27597__$1 = (function (){var statearr_27616 = state_27597;
(statearr_27616[(8)] = inst_27549);

(statearr_27616[(9)] = inst_27551);

(statearr_27616[(10)] = inst_27552);

(statearr_27616[(12)] = inst_27550);

return statearr_27616;
})();
var statearr_27617_27650 = state_27597__$1;
(statearr_27617_27650[(2)] = null);

(statearr_27617_27650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (3))){
var inst_27595 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27597__$1,inst_27595);
} else {
if((state_val_27598 === (12))){
var inst_27583 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
var statearr_27618_27651 = state_27597__$1;
(statearr_27618_27651[(2)] = inst_27583);

(statearr_27618_27651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (2))){
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27597__$1,(4),in$);
} else {
if((state_val_27598 === (23))){
var inst_27591 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
var statearr_27619_27652 = state_27597__$1;
(statearr_27619_27652[(2)] = inst_27591);

(statearr_27619_27652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (19))){
var inst_27578 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
var statearr_27620_27653 = state_27597__$1;
(statearr_27620_27653[(2)] = inst_27578);

(statearr_27620_27653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (11))){
var inst_27549 = (state_27597[(8)]);
var inst_27563 = (state_27597[(7)]);
var inst_27563__$1 = cljs.core.seq.call(null,inst_27549);
var state_27597__$1 = (function (){var statearr_27621 = state_27597;
(statearr_27621[(7)] = inst_27563__$1);

return statearr_27621;
})();
if(inst_27563__$1){
var statearr_27622_27654 = state_27597__$1;
(statearr_27622_27654[(1)] = (14));

} else {
var statearr_27623_27655 = state_27597__$1;
(statearr_27623_27655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (9))){
var inst_27585 = (state_27597[(2)]);
var inst_27586 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27597__$1 = (function (){var statearr_27624 = state_27597;
(statearr_27624[(15)] = inst_27585);

return statearr_27624;
})();
if(cljs.core.truth_(inst_27586)){
var statearr_27625_27656 = state_27597__$1;
(statearr_27625_27656[(1)] = (21));

} else {
var statearr_27626_27657 = state_27597__$1;
(statearr_27626_27657[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (5))){
var inst_27541 = cljs.core.async.close_BANG_.call(null,out);
var state_27597__$1 = state_27597;
var statearr_27627_27658 = state_27597__$1;
(statearr_27627_27658[(2)] = inst_27541);

(statearr_27627_27658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (14))){
var inst_27563 = (state_27597[(7)]);
var inst_27565 = cljs.core.chunked_seq_QMARK_.call(null,inst_27563);
var state_27597__$1 = state_27597;
if(inst_27565){
var statearr_27628_27659 = state_27597__$1;
(statearr_27628_27659[(1)] = (17));

} else {
var statearr_27629_27660 = state_27597__$1;
(statearr_27629_27660[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (16))){
var inst_27581 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
var statearr_27630_27661 = state_27597__$1;
(statearr_27630_27661[(2)] = inst_27581);

(statearr_27630_27661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27598 === (10))){
var inst_27552 = (state_27597[(10)]);
var inst_27550 = (state_27597[(12)]);
var inst_27557 = cljs.core._nth.call(null,inst_27550,inst_27552);
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27597__$1,(13),out,inst_27557);
} else {
if((state_val_27598 === (18))){
var inst_27563 = (state_27597[(7)]);
var inst_27572 = cljs.core.first.call(null,inst_27563);
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27597__$1,(20),out,inst_27572);
} else {
if((state_val_27598 === (8))){
var inst_27551 = (state_27597[(9)]);
var inst_27552 = (state_27597[(10)]);
var inst_27554 = (inst_27552 < inst_27551);
var inst_27555 = inst_27554;
var state_27597__$1 = state_27597;
if(cljs.core.truth_(inst_27555)){
var statearr_27631_27662 = state_27597__$1;
(statearr_27631_27662[(1)] = (10));

} else {
var statearr_27632_27663 = state_27597__$1;
(statearr_27632_27663[(1)] = (11));

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
});})(c__25140__auto__))
;
return ((function (switch__25028__auto__,c__25140__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25029__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25029__auto____0 = (function (){
var statearr_27636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27636[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25029__auto__);

(statearr_27636[(1)] = (1));

return statearr_27636;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25029__auto____1 = (function (state_27597){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27637){if((e27637 instanceof Object)){
var ex__25032__auto__ = e27637;
var statearr_27638_27664 = state_27597;
(statearr_27638_27664[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27665 = state_27597;
state_27597 = G__27665;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25029__auto__ = function(state_27597){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25029__auto____1.call(this,state_27597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25029__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25029__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto__))
})();
var state__25142__auto__ = (function (){var statearr_27639 = f__25141__auto__.call(null);
(statearr_27639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto__);

return statearr_27639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto__))
);

return c__25140__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27666 = [];
var len__21062__auto___27669 = arguments.length;
var i__21063__auto___27670 = (0);
while(true){
if((i__21063__auto___27670 < len__21062__auto___27669)){
args27666.push((arguments[i__21063__auto___27670]));

var G__27671 = (i__21063__auto___27670 + (1));
i__21063__auto___27670 = G__27671;
continue;
} else {
}
break;
}

var G__27668 = args27666.length;
switch (G__27668) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27666.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27673 = [];
var len__21062__auto___27676 = arguments.length;
var i__21063__auto___27677 = (0);
while(true){
if((i__21063__auto___27677 < len__21062__auto___27676)){
args27673.push((arguments[i__21063__auto___27677]));

var G__27678 = (i__21063__auto___27677 + (1));
i__21063__auto___27677 = G__27678;
continue;
} else {
}
break;
}

var G__27675 = args27673.length;
switch (G__27675) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27673.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27680 = [];
var len__21062__auto___27731 = arguments.length;
var i__21063__auto___27732 = (0);
while(true){
if((i__21063__auto___27732 < len__21062__auto___27731)){
args27680.push((arguments[i__21063__auto___27732]));

var G__27733 = (i__21063__auto___27732 + (1));
i__21063__auto___27732 = G__27733;
continue;
} else {
}
break;
}

var G__27682 = args27680.length;
switch (G__27682) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27680.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25140__auto___27735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27735,out){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27735,out){
return (function (state_27706){
var state_val_27707 = (state_27706[(1)]);
if((state_val_27707 === (7))){
var inst_27701 = (state_27706[(2)]);
var state_27706__$1 = state_27706;
var statearr_27708_27736 = state_27706__$1;
(statearr_27708_27736[(2)] = inst_27701);

(statearr_27708_27736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27707 === (1))){
var inst_27683 = null;
var state_27706__$1 = (function (){var statearr_27709 = state_27706;
(statearr_27709[(7)] = inst_27683);

return statearr_27709;
})();
var statearr_27710_27737 = state_27706__$1;
(statearr_27710_27737[(2)] = null);

(statearr_27710_27737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27707 === (4))){
var inst_27686 = (state_27706[(8)]);
var inst_27686__$1 = (state_27706[(2)]);
var inst_27687 = (inst_27686__$1 == null);
var inst_27688 = cljs.core.not.call(null,inst_27687);
var state_27706__$1 = (function (){var statearr_27711 = state_27706;
(statearr_27711[(8)] = inst_27686__$1);

return statearr_27711;
})();
if(inst_27688){
var statearr_27712_27738 = state_27706__$1;
(statearr_27712_27738[(1)] = (5));

} else {
var statearr_27713_27739 = state_27706__$1;
(statearr_27713_27739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27707 === (6))){
var state_27706__$1 = state_27706;
var statearr_27714_27740 = state_27706__$1;
(statearr_27714_27740[(2)] = null);

(statearr_27714_27740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27707 === (3))){
var inst_27703 = (state_27706[(2)]);
var inst_27704 = cljs.core.async.close_BANG_.call(null,out);
var state_27706__$1 = (function (){var statearr_27715 = state_27706;
(statearr_27715[(9)] = inst_27703);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27706__$1,inst_27704);
} else {
if((state_val_27707 === (2))){
var state_27706__$1 = state_27706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27706__$1,(4),ch);
} else {
if((state_val_27707 === (11))){
var inst_27686 = (state_27706[(8)]);
var inst_27695 = (state_27706[(2)]);
var inst_27683 = inst_27686;
var state_27706__$1 = (function (){var statearr_27716 = state_27706;
(statearr_27716[(7)] = inst_27683);

(statearr_27716[(10)] = inst_27695);

return statearr_27716;
})();
var statearr_27717_27741 = state_27706__$1;
(statearr_27717_27741[(2)] = null);

(statearr_27717_27741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27707 === (9))){
var inst_27686 = (state_27706[(8)]);
var state_27706__$1 = state_27706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27706__$1,(11),out,inst_27686);
} else {
if((state_val_27707 === (5))){
var inst_27683 = (state_27706[(7)]);
var inst_27686 = (state_27706[(8)]);
var inst_27690 = cljs.core._EQ_.call(null,inst_27686,inst_27683);
var state_27706__$1 = state_27706;
if(inst_27690){
var statearr_27719_27742 = state_27706__$1;
(statearr_27719_27742[(1)] = (8));

} else {
var statearr_27720_27743 = state_27706__$1;
(statearr_27720_27743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27707 === (10))){
var inst_27698 = (state_27706[(2)]);
var state_27706__$1 = state_27706;
var statearr_27721_27744 = state_27706__$1;
(statearr_27721_27744[(2)] = inst_27698);

(statearr_27721_27744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27707 === (8))){
var inst_27683 = (state_27706[(7)]);
var tmp27718 = inst_27683;
var inst_27683__$1 = tmp27718;
var state_27706__$1 = (function (){var statearr_27722 = state_27706;
(statearr_27722[(7)] = inst_27683__$1);

return statearr_27722;
})();
var statearr_27723_27745 = state_27706__$1;
(statearr_27723_27745[(2)] = null);

(statearr_27723_27745[(1)] = (2));


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
});})(c__25140__auto___27735,out))
;
return ((function (switch__25028__auto__,c__25140__auto___27735,out){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27727[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27727[(1)] = (1));

return statearr_27727;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27706){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27728){if((e27728 instanceof Object)){
var ex__25032__auto__ = e27728;
var statearr_27729_27746 = state_27706;
(statearr_27729_27746[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27747 = state_27706;
state_27706 = G__27747;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27735,out))
})();
var state__25142__auto__ = (function (){var statearr_27730 = f__25141__auto__.call(null);
(statearr_27730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27735);

return statearr_27730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27735,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27748 = [];
var len__21062__auto___27818 = arguments.length;
var i__21063__auto___27819 = (0);
while(true){
if((i__21063__auto___27819 < len__21062__auto___27818)){
args27748.push((arguments[i__21063__auto___27819]));

var G__27820 = (i__21063__auto___27819 + (1));
i__21063__auto___27819 = G__27820;
continue;
} else {
}
break;
}

var G__27750 = args27748.length;
switch (G__27750) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27748.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25140__auto___27822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27822,out){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27822,out){
return (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (7))){
var inst_27784 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27790_27823 = state_27788__$1;
(statearr_27790_27823[(2)] = inst_27784);

(statearr_27790_27823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (1))){
var inst_27751 = (new Array(n));
var inst_27752 = inst_27751;
var inst_27753 = (0);
var state_27788__$1 = (function (){var statearr_27791 = state_27788;
(statearr_27791[(7)] = inst_27753);

(statearr_27791[(8)] = inst_27752);

return statearr_27791;
})();
var statearr_27792_27824 = state_27788__$1;
(statearr_27792_27824[(2)] = null);

(statearr_27792_27824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (4))){
var inst_27756 = (state_27788[(9)]);
var inst_27756__$1 = (state_27788[(2)]);
var inst_27757 = (inst_27756__$1 == null);
var inst_27758 = cljs.core.not.call(null,inst_27757);
var state_27788__$1 = (function (){var statearr_27793 = state_27788;
(statearr_27793[(9)] = inst_27756__$1);

return statearr_27793;
})();
if(inst_27758){
var statearr_27794_27825 = state_27788__$1;
(statearr_27794_27825[(1)] = (5));

} else {
var statearr_27795_27826 = state_27788__$1;
(statearr_27795_27826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (15))){
var inst_27778 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27796_27827 = state_27788__$1;
(statearr_27796_27827[(2)] = inst_27778);

(statearr_27796_27827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (13))){
var state_27788__$1 = state_27788;
var statearr_27797_27828 = state_27788__$1;
(statearr_27797_27828[(2)] = null);

(statearr_27797_27828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (6))){
var inst_27753 = (state_27788[(7)]);
var inst_27774 = (inst_27753 > (0));
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27774)){
var statearr_27798_27829 = state_27788__$1;
(statearr_27798_27829[(1)] = (12));

} else {
var statearr_27799_27830 = state_27788__$1;
(statearr_27799_27830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (3))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (12))){
var inst_27752 = (state_27788[(8)]);
var inst_27776 = cljs.core.vec.call(null,inst_27752);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27788__$1,(15),out,inst_27776);
} else {
if((state_val_27789 === (2))){
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(4),ch);
} else {
if((state_val_27789 === (11))){
var inst_27768 = (state_27788[(2)]);
var inst_27769 = (new Array(n));
var inst_27752 = inst_27769;
var inst_27753 = (0);
var state_27788__$1 = (function (){var statearr_27800 = state_27788;
(statearr_27800[(7)] = inst_27753);

(statearr_27800[(10)] = inst_27768);

(statearr_27800[(8)] = inst_27752);

return statearr_27800;
})();
var statearr_27801_27831 = state_27788__$1;
(statearr_27801_27831[(2)] = null);

(statearr_27801_27831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (9))){
var inst_27752 = (state_27788[(8)]);
var inst_27766 = cljs.core.vec.call(null,inst_27752);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27788__$1,(11),out,inst_27766);
} else {
if((state_val_27789 === (5))){
var inst_27753 = (state_27788[(7)]);
var inst_27756 = (state_27788[(9)]);
var inst_27761 = (state_27788[(11)]);
var inst_27752 = (state_27788[(8)]);
var inst_27760 = (inst_27752[inst_27753] = inst_27756);
var inst_27761__$1 = (inst_27753 + (1));
var inst_27762 = (inst_27761__$1 < n);
var state_27788__$1 = (function (){var statearr_27802 = state_27788;
(statearr_27802[(12)] = inst_27760);

(statearr_27802[(11)] = inst_27761__$1);

return statearr_27802;
})();
if(cljs.core.truth_(inst_27762)){
var statearr_27803_27832 = state_27788__$1;
(statearr_27803_27832[(1)] = (8));

} else {
var statearr_27804_27833 = state_27788__$1;
(statearr_27804_27833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (14))){
var inst_27781 = (state_27788[(2)]);
var inst_27782 = cljs.core.async.close_BANG_.call(null,out);
var state_27788__$1 = (function (){var statearr_27806 = state_27788;
(statearr_27806[(13)] = inst_27781);

return statearr_27806;
})();
var statearr_27807_27834 = state_27788__$1;
(statearr_27807_27834[(2)] = inst_27782);

(statearr_27807_27834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (10))){
var inst_27772 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27808_27835 = state_27788__$1;
(statearr_27808_27835[(2)] = inst_27772);

(statearr_27808_27835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (8))){
var inst_27761 = (state_27788[(11)]);
var inst_27752 = (state_27788[(8)]);
var tmp27805 = inst_27752;
var inst_27752__$1 = tmp27805;
var inst_27753 = inst_27761;
var state_27788__$1 = (function (){var statearr_27809 = state_27788;
(statearr_27809[(7)] = inst_27753);

(statearr_27809[(8)] = inst_27752__$1);

return statearr_27809;
})();
var statearr_27810_27836 = state_27788__$1;
(statearr_27810_27836[(2)] = null);

(statearr_27810_27836[(1)] = (2));


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
});})(c__25140__auto___27822,out))
;
return ((function (switch__25028__auto__,c__25140__auto___27822,out){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27814[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27814[(1)] = (1));

return statearr_27814;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27788){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27815){if((e27815 instanceof Object)){
var ex__25032__auto__ = e27815;
var statearr_27816_27837 = state_27788;
(statearr_27816_27837[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27838 = state_27788;
state_27788 = G__27838;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27822,out))
})();
var state__25142__auto__ = (function (){var statearr_27817 = f__25141__auto__.call(null);
(statearr_27817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27822);

return statearr_27817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27822,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27839 = [];
var len__21062__auto___27913 = arguments.length;
var i__21063__auto___27914 = (0);
while(true){
if((i__21063__auto___27914 < len__21062__auto___27913)){
args27839.push((arguments[i__21063__auto___27914]));

var G__27915 = (i__21063__auto___27914 + (1));
i__21063__auto___27914 = G__27915;
continue;
} else {
}
break;
}

var G__27841 = args27839.length;
switch (G__27841) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27839.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25140__auto___27917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25140__auto___27917,out){
return (function (){
var f__25141__auto__ = (function (){var switch__25028__auto__ = ((function (c__25140__auto___27917,out){
return (function (state_27883){
var state_val_27884 = (state_27883[(1)]);
if((state_val_27884 === (7))){
var inst_27879 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27885_27918 = state_27883__$1;
(statearr_27885_27918[(2)] = inst_27879);

(statearr_27885_27918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (1))){
var inst_27842 = [];
var inst_27843 = inst_27842;
var inst_27844 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27883__$1 = (function (){var statearr_27886 = state_27883;
(statearr_27886[(7)] = inst_27844);

(statearr_27886[(8)] = inst_27843);

return statearr_27886;
})();
var statearr_27887_27919 = state_27883__$1;
(statearr_27887_27919[(2)] = null);

(statearr_27887_27919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (4))){
var inst_27847 = (state_27883[(9)]);
var inst_27847__$1 = (state_27883[(2)]);
var inst_27848 = (inst_27847__$1 == null);
var inst_27849 = cljs.core.not.call(null,inst_27848);
var state_27883__$1 = (function (){var statearr_27888 = state_27883;
(statearr_27888[(9)] = inst_27847__$1);

return statearr_27888;
})();
if(inst_27849){
var statearr_27889_27920 = state_27883__$1;
(statearr_27889_27920[(1)] = (5));

} else {
var statearr_27890_27921 = state_27883__$1;
(statearr_27890_27921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (15))){
var inst_27873 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27891_27922 = state_27883__$1;
(statearr_27891_27922[(2)] = inst_27873);

(statearr_27891_27922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (13))){
var state_27883__$1 = state_27883;
var statearr_27892_27923 = state_27883__$1;
(statearr_27892_27923[(2)] = null);

(statearr_27892_27923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (6))){
var inst_27843 = (state_27883[(8)]);
var inst_27868 = inst_27843.length;
var inst_27869 = (inst_27868 > (0));
var state_27883__$1 = state_27883;
if(cljs.core.truth_(inst_27869)){
var statearr_27893_27924 = state_27883__$1;
(statearr_27893_27924[(1)] = (12));

} else {
var statearr_27894_27925 = state_27883__$1;
(statearr_27894_27925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (3))){
var inst_27881 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27883__$1,inst_27881);
} else {
if((state_val_27884 === (12))){
var inst_27843 = (state_27883[(8)]);
var inst_27871 = cljs.core.vec.call(null,inst_27843);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27883__$1,(15),out,inst_27871);
} else {
if((state_val_27884 === (2))){
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(4),ch);
} else {
if((state_val_27884 === (11))){
var inst_27851 = (state_27883[(10)]);
var inst_27847 = (state_27883[(9)]);
var inst_27861 = (state_27883[(2)]);
var inst_27862 = [];
var inst_27863 = inst_27862.push(inst_27847);
var inst_27843 = inst_27862;
var inst_27844 = inst_27851;
var state_27883__$1 = (function (){var statearr_27895 = state_27883;
(statearr_27895[(7)] = inst_27844);

(statearr_27895[(11)] = inst_27863);

(statearr_27895[(12)] = inst_27861);

(statearr_27895[(8)] = inst_27843);

return statearr_27895;
})();
var statearr_27896_27926 = state_27883__$1;
(statearr_27896_27926[(2)] = null);

(statearr_27896_27926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (9))){
var inst_27843 = (state_27883[(8)]);
var inst_27859 = cljs.core.vec.call(null,inst_27843);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27883__$1,(11),out,inst_27859);
} else {
if((state_val_27884 === (5))){
var inst_27851 = (state_27883[(10)]);
var inst_27847 = (state_27883[(9)]);
var inst_27844 = (state_27883[(7)]);
var inst_27851__$1 = f.call(null,inst_27847);
var inst_27852 = cljs.core._EQ_.call(null,inst_27851__$1,inst_27844);
var inst_27853 = cljs.core.keyword_identical_QMARK_.call(null,inst_27844,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27854 = (inst_27852) || (inst_27853);
var state_27883__$1 = (function (){var statearr_27897 = state_27883;
(statearr_27897[(10)] = inst_27851__$1);

return statearr_27897;
})();
if(cljs.core.truth_(inst_27854)){
var statearr_27898_27927 = state_27883__$1;
(statearr_27898_27927[(1)] = (8));

} else {
var statearr_27899_27928 = state_27883__$1;
(statearr_27899_27928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (14))){
var inst_27876 = (state_27883[(2)]);
var inst_27877 = cljs.core.async.close_BANG_.call(null,out);
var state_27883__$1 = (function (){var statearr_27901 = state_27883;
(statearr_27901[(13)] = inst_27876);

return statearr_27901;
})();
var statearr_27902_27929 = state_27883__$1;
(statearr_27902_27929[(2)] = inst_27877);

(statearr_27902_27929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (10))){
var inst_27866 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27903_27930 = state_27883__$1;
(statearr_27903_27930[(2)] = inst_27866);

(statearr_27903_27930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (8))){
var inst_27851 = (state_27883[(10)]);
var inst_27847 = (state_27883[(9)]);
var inst_27843 = (state_27883[(8)]);
var inst_27856 = inst_27843.push(inst_27847);
var tmp27900 = inst_27843;
var inst_27843__$1 = tmp27900;
var inst_27844 = inst_27851;
var state_27883__$1 = (function (){var statearr_27904 = state_27883;
(statearr_27904[(7)] = inst_27844);

(statearr_27904[(14)] = inst_27856);

(statearr_27904[(8)] = inst_27843__$1);

return statearr_27904;
})();
var statearr_27905_27931 = state_27883__$1;
(statearr_27905_27931[(2)] = null);

(statearr_27905_27931[(1)] = (2));


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
});})(c__25140__auto___27917,out))
;
return ((function (switch__25028__auto__,c__25140__auto___27917,out){
return (function() {
var cljs$core$async$state_machine__25029__auto__ = null;
var cljs$core$async$state_machine__25029__auto____0 = (function (){
var statearr_27909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27909[(0)] = cljs$core$async$state_machine__25029__auto__);

(statearr_27909[(1)] = (1));

return statearr_27909;
});
var cljs$core$async$state_machine__25029__auto____1 = (function (state_27883){
while(true){
var ret_value__25030__auto__ = (function (){try{while(true){
var result__25031__auto__ = switch__25028__auto__.call(null,state_27883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25031__auto__;
}
break;
}
}catch (e27910){if((e27910 instanceof Object)){
var ex__25032__auto__ = e27910;
var statearr_27911_27932 = state_27883;
(statearr_27911_27932[(5)] = ex__25032__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27933 = state_27883;
state_27883 = G__27933;
continue;
} else {
return ret_value__25030__auto__;
}
break;
}
});
cljs$core$async$state_machine__25029__auto__ = function(state_27883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25029__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25029__auto____1.call(this,state_27883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25029__auto____0;
cljs$core$async$state_machine__25029__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25029__auto____1;
return cljs$core$async$state_machine__25029__auto__;
})()
;})(switch__25028__auto__,c__25140__auto___27917,out))
})();
var state__25142__auto__ = (function (){var statearr_27912 = f__25141__auto__.call(null);
(statearr_27912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25140__auto___27917);

return statearr_27912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25142__auto__);
});})(c__25140__auto___27917,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1539454395397