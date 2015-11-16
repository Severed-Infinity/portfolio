// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19560 = [];
var len__18406__auto___19566 = arguments.length;
var i__18407__auto___19567 = (0);
while(true){
if((i__18407__auto___19567 < len__18406__auto___19566)){
args19560.push((arguments[i__18407__auto___19567]));

var G__19568 = (i__18407__auto___19567 + (1));
i__18407__auto___19567 = G__19568;
continue;
} else {
}
break;
}

var G__19562 = args19560.length;
switch (G__19562) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19560.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19563 = (function (f,blockable,meta19564){
this.f = f;
this.blockable = blockable;
this.meta19564 = meta19564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19565,meta19564__$1){
var self__ = this;
var _19565__$1 = this;
return (new cljs.core.async.t_cljs$core$async19563(self__.f,self__.blockable,meta19564__$1));
});

cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19565){
var self__ = this;
var _19565__$1 = this;
return self__.meta19564;
});

cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19564","meta19564",-1306881682,null)], null);
});

cljs.core.async.t_cljs$core$async19563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19563";

cljs.core.async.t_cljs$core$async19563.cljs$lang$ctorPrWriter = (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async19563");
});

cljs.core.async.__GT_t_cljs$core$async19563 = (function cljs$core$async$__GT_t_cljs$core$async19563(f__$1,blockable__$1,meta19564){
return (new cljs.core.async.t_cljs$core$async19563(f__$1,blockable__$1,meta19564));
});

}

return (new cljs.core.async.t_cljs$core$async19563(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args19572 = [];
var len__18406__auto___19575 = arguments.length;
var i__18407__auto___19576 = (0);
while(true){
if((i__18407__auto___19576 < len__18406__auto___19575)){
args19572.push((arguments[i__18407__auto___19576]));

var G__19577 = (i__18407__auto___19576 + (1));
i__18407__auto___19576 = G__19577;
continue;
} else {
}
break;
}

var G__19574 = args19572.length;
switch (G__19574) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19572.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args19579 = [];
var len__18406__auto___19582 = arguments.length;
var i__18407__auto___19583 = (0);
while(true){
if((i__18407__auto___19583 < len__18406__auto___19582)){
args19579.push((arguments[i__18407__auto___19583]));

var G__19584 = (i__18407__auto___19583 + (1));
i__18407__auto___19583 = G__19584;
continue;
} else {
}
break;
}

var G__19581 = args19579.length;
switch (G__19581) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19579.length)].join('')));

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
var args19586 = [];
var len__18406__auto___19589 = arguments.length;
var i__18407__auto___19590 = (0);
while(true){
if((i__18407__auto___19590 < len__18406__auto___19589)){
args19586.push((arguments[i__18407__auto___19590]));

var G__19591 = (i__18407__auto___19590 + (1));
i__18407__auto___19590 = G__19591;
continue;
} else {
}
break;
}

var G__19588 = args19586.length;
switch (G__19588) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19586.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19593 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19593);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19593,ret){
return (function (){
return fn1.call(null,val_19593);
});})(val_19593,ret))
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
var args19594 = [];
var len__18406__auto___19597 = arguments.length;
var i__18407__auto___19598 = (0);
while(true){
if((i__18407__auto___19598 < len__18406__auto___19597)){
args19594.push((arguments[i__18407__auto___19598]));

var G__19599 = (i__18407__auto___19598 + (1));
i__18407__auto___19598 = G__19599;
continue;
} else {
}
break;
}

var G__19596 = args19594.length;
switch (G__19596) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19594.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__18251__auto___19601 = n;
var x_19602 = (0);
while(true){
if((x_19602 < n__18251__auto___19601)){
(a[x_19602] = (0));

var G__19603 = (x_19602 + (1));
x_19602 = G__19603;
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

var G__19604 = (i + (1));
i = G__19604;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19608 = (function (alt_flag,flag,meta19609){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19609 = meta19609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19610,meta19609__$1){
var self__ = this;
var _19610__$1 = this;
return (new cljs.core.async.t_cljs$core$async19608(self__.alt_flag,self__.flag,meta19609__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19610){
var self__ = this;
var _19610__$1 = this;
return self__.meta19609;
});})(flag))
;

cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19608.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19609","meta19609",736994712,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19608";

cljs.core.async.t_cljs$core$async19608.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async19608");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19608 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19608(alt_flag__$1,flag__$1,meta19609){
return (new cljs.core.async.t_cljs$core$async19608(alt_flag__$1,flag__$1,meta19609));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19608(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19614 = (function (alt_handler,flag,cb,meta19615){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19615 = meta19615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19616,meta19615__$1){
var self__ = this;
var _19616__$1 = this;
return (new cljs.core.async.t_cljs$core$async19614(self__.alt_handler,self__.flag,self__.cb,meta19615__$1));
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19616){
var self__ = this;
var _19616__$1 = this;
return self__.meta19615;
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19615","meta19615",633383853,null)], null);
});

cljs.core.async.t_cljs$core$async19614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19614";

cljs.core.async.t_cljs$core$async19614.cljs$lang$ctorPrWriter = (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async19614");
});

cljs.core.async.__GT_t_cljs$core$async19614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19614(alt_handler__$1,flag__$1,cb__$1,meta19615){
return (new cljs.core.async.t_cljs$core$async19614(alt_handler__$1,flag__$1,cb__$1,meta19615));
});

}

return (new cljs.core.async.t_cljs$core$async19614(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19617_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19618_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19618_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17348__auto__ = wport;
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19619 = (i + (1));
i = G__19619;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17348__auto__ = ret;
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17336__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17336__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17336__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__18413__auto__ = [];
var len__18406__auto___19625 = arguments.length;
var i__18407__auto___19626 = (0);
while(true){
if((i__18407__auto___19626 < len__18406__auto___19625)){
args__18413__auto__.push((arguments[i__18407__auto___19626]));

var G__19627 = (i__18407__auto___19626 + (1));
i__18407__auto___19626 = G__19627;
continue;
} else {
}
break;
}

var argseq__18414__auto__ = ((((1) < args__18413__auto__.length))?(new cljs.core.IndexedSeq(args__18413__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18414__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19622){
var map__19623 = p__19622;
var map__19623__$1 = ((((!((map__19623 == null)))?((((map__19623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19623):map__19623);
var opts = map__19623__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19620){
var G__19621 = cljs.core.first.call(null,seq19620);
var seq19620__$1 = cljs.core.next.call(null,seq19620);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19621,seq19620__$1);
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
var args19628 = [];
var len__18406__auto___19678 = arguments.length;
var i__18407__auto___19679 = (0);
while(true){
if((i__18407__auto___19679 < len__18406__auto___19678)){
args19628.push((arguments[i__18407__auto___19679]));

var G__19680 = (i__18407__auto___19679 + (1));
i__18407__auto___19679 = G__19680;
continue;
} else {
}
break;
}

var G__19630 = args19628.length;
switch (G__19630) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19628.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19515__auto___19682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___19682){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___19682){
return (function (state_19654){
var state_val_19655 = (state_19654[(1)]);
if((state_val_19655 === (7))){
var inst_19650 = (state_19654[(2)]);
var state_19654__$1 = state_19654;
var statearr_19656_19683 = state_19654__$1;
(statearr_19656_19683[(2)] = inst_19650);

(statearr_19656_19683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (1))){
var state_19654__$1 = state_19654;
var statearr_19657_19684 = state_19654__$1;
(statearr_19657_19684[(2)] = null);

(statearr_19657_19684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (4))){
var inst_19633 = (state_19654[(7)]);
var inst_19633__$1 = (state_19654[(2)]);
var inst_19634 = (inst_19633__$1 == null);
var state_19654__$1 = (function (){var statearr_19658 = state_19654;
(statearr_19658[(7)] = inst_19633__$1);

return statearr_19658;
})();
if(cljs.core.truth_(inst_19634)){
var statearr_19659_19685 = state_19654__$1;
(statearr_19659_19685[(1)] = (5));

} else {
var statearr_19660_19686 = state_19654__$1;
(statearr_19660_19686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (13))){
var state_19654__$1 = state_19654;
var statearr_19661_19687 = state_19654__$1;
(statearr_19661_19687[(2)] = null);

(statearr_19661_19687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (6))){
var inst_19633 = (state_19654[(7)]);
var state_19654__$1 = state_19654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19654__$1,(11),to,inst_19633);
} else {
if((state_val_19655 === (3))){
var inst_19652 = (state_19654[(2)]);
var state_19654__$1 = state_19654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19654__$1,inst_19652);
} else {
if((state_val_19655 === (12))){
var state_19654__$1 = state_19654;
var statearr_19662_19688 = state_19654__$1;
(statearr_19662_19688[(2)] = null);

(statearr_19662_19688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (2))){
var state_19654__$1 = state_19654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19654__$1,(4),from);
} else {
if((state_val_19655 === (11))){
var inst_19643 = (state_19654[(2)]);
var state_19654__$1 = state_19654;
if(cljs.core.truth_(inst_19643)){
var statearr_19663_19689 = state_19654__$1;
(statearr_19663_19689[(1)] = (12));

} else {
var statearr_19664_19690 = state_19654__$1;
(statearr_19664_19690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (9))){
var state_19654__$1 = state_19654;
var statearr_19665_19691 = state_19654__$1;
(statearr_19665_19691[(2)] = null);

(statearr_19665_19691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (5))){
var state_19654__$1 = state_19654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19666_19692 = state_19654__$1;
(statearr_19666_19692[(1)] = (8));

} else {
var statearr_19667_19693 = state_19654__$1;
(statearr_19667_19693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (14))){
var inst_19648 = (state_19654[(2)]);
var state_19654__$1 = state_19654;
var statearr_19668_19694 = state_19654__$1;
(statearr_19668_19694[(2)] = inst_19648);

(statearr_19668_19694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (10))){
var inst_19640 = (state_19654[(2)]);
var state_19654__$1 = state_19654;
var statearr_19669_19695 = state_19654__$1;
(statearr_19669_19695[(2)] = inst_19640);

(statearr_19669_19695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (8))){
var inst_19637 = cljs.core.async.close_BANG_.call(null,to);
var state_19654__$1 = state_19654;
var statearr_19670_19696 = state_19654__$1;
(statearr_19670_19696[(2)] = inst_19637);

(statearr_19670_19696[(1)] = (10));


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
});})(c__19515__auto___19682))
;
return ((function (switch__19403__auto__,c__19515__auto___19682){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_19674 = [null,null,null,null,null,null,null,null];
(statearr_19674[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_19674[(1)] = (1));

return statearr_19674;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_19654){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_19654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e19675){if((e19675 instanceof Object)){
var ex__19407__auto__ = e19675;
var statearr_19676_19697 = state_19654;
(statearr_19676_19697[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19698 = state_19654;
state_19654 = G__19698;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_19654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_19654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___19682))
})();
var state__19517__auto__ = (function (){var statearr_19677 = f__19516__auto__.call(null);
(statearr_19677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___19682);

return statearr_19677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___19682))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19882){
var vec__19883 = p__19882;
var v = cljs.core.nth.call(null,vec__19883,(0),null);
var p = cljs.core.nth.call(null,vec__19883,(1),null);
var job = vec__19883;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19515__auto___20065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___20065,res,vec__19883,v,p,job,jobs,results){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___20065,res,vec__19883,v,p,job,jobs,results){
return (function (state_19888){
var state_val_19889 = (state_19888[(1)]);
if((state_val_19889 === (1))){
var state_19888__$1 = state_19888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19888__$1,(2),res,v);
} else {
if((state_val_19889 === (2))){
var inst_19885 = (state_19888[(2)]);
var inst_19886 = cljs.core.async.close_BANG_.call(null,res);
var state_19888__$1 = (function (){var statearr_19890 = state_19888;
(statearr_19890[(7)] = inst_19885);

return statearr_19890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19888__$1,inst_19886);
} else {
return null;
}
}
});})(c__19515__auto___20065,res,vec__19883,v,p,job,jobs,results))
;
return ((function (switch__19403__auto__,c__19515__auto___20065,res,vec__19883,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0 = (function (){
var statearr_19894 = [null,null,null,null,null,null,null,null];
(statearr_19894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__);

(statearr_19894[(1)] = (1));

return statearr_19894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1 = (function (state_19888){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_19888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e19895){if((e19895 instanceof Object)){
var ex__19407__auto__ = e19895;
var statearr_19896_20066 = state_19888;
(statearr_19896_20066[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20067 = state_19888;
state_19888 = G__20067;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = function(state_19888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1.call(this,state_19888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___20065,res,vec__19883,v,p,job,jobs,results))
})();
var state__19517__auto__ = (function (){var statearr_19897 = f__19516__auto__.call(null);
(statearr_19897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___20065);

return statearr_19897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___20065,res,vec__19883,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19898){
var vec__19899 = p__19898;
var v = cljs.core.nth.call(null,vec__19899,(0),null);
var p = cljs.core.nth.call(null,vec__19899,(1),null);
var job = vec__19899;
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
var n__18251__auto___20068 = n;
var __20069 = (0);
while(true){
if((__20069 < n__18251__auto___20068)){
var G__19900_20070 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19900_20070) {
case "compute":
var c__19515__auto___20072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20069,c__19515__auto___20072,G__19900_20070,n__18251__auto___20068,jobs,results,process,async){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (__20069,c__19515__auto___20072,G__19900_20070,n__18251__auto___20068,jobs,results,process,async){
return (function (state_19913){
var state_val_19914 = (state_19913[(1)]);
if((state_val_19914 === (1))){
var state_19913__$1 = state_19913;
var statearr_19915_20073 = state_19913__$1;
(statearr_19915_20073[(2)] = null);

(statearr_19915_20073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19914 === (2))){
var state_19913__$1 = state_19913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19913__$1,(4),jobs);
} else {
if((state_val_19914 === (3))){
var inst_19911 = (state_19913[(2)]);
var state_19913__$1 = state_19913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19913__$1,inst_19911);
} else {
if((state_val_19914 === (4))){
var inst_19903 = (state_19913[(2)]);
var inst_19904 = process.call(null,inst_19903);
var state_19913__$1 = state_19913;
if(cljs.core.truth_(inst_19904)){
var statearr_19916_20074 = state_19913__$1;
(statearr_19916_20074[(1)] = (5));

} else {
var statearr_19917_20075 = state_19913__$1;
(statearr_19917_20075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19914 === (5))){
var state_19913__$1 = state_19913;
var statearr_19918_20076 = state_19913__$1;
(statearr_19918_20076[(2)] = null);

(statearr_19918_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19914 === (6))){
var state_19913__$1 = state_19913;
var statearr_19919_20077 = state_19913__$1;
(statearr_19919_20077[(2)] = null);

(statearr_19919_20077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19914 === (7))){
var inst_19909 = (state_19913[(2)]);
var state_19913__$1 = state_19913;
var statearr_19920_20078 = state_19913__$1;
(statearr_19920_20078[(2)] = inst_19909);

(statearr_19920_20078[(1)] = (3));


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
});})(__20069,c__19515__auto___20072,G__19900_20070,n__18251__auto___20068,jobs,results,process,async))
;
return ((function (__20069,switch__19403__auto__,c__19515__auto___20072,G__19900_20070,n__18251__auto___20068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0 = (function (){
var statearr_19924 = [null,null,null,null,null,null,null];
(statearr_19924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__);

(statearr_19924[(1)] = (1));

return statearr_19924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1 = (function (state_19913){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_19913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e19925){if((e19925 instanceof Object)){
var ex__19407__auto__ = e19925;
var statearr_19926_20079 = state_19913;
(statearr_19926_20079[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20080 = state_19913;
state_19913 = G__20080;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = function(state_19913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1.call(this,state_19913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__;
})()
;})(__20069,switch__19403__auto__,c__19515__auto___20072,G__19900_20070,n__18251__auto___20068,jobs,results,process,async))
})();
var state__19517__auto__ = (function (){var statearr_19927 = f__19516__auto__.call(null);
(statearr_19927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___20072);

return statearr_19927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(__20069,c__19515__auto___20072,G__19900_20070,n__18251__auto___20068,jobs,results,process,async))
);


break;
case "async":
var c__19515__auto___20081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20069,c__19515__auto___20081,G__19900_20070,n__18251__auto___20068,jobs,results,process,async){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (__20069,c__19515__auto___20081,G__19900_20070,n__18251__auto___20068,jobs,results,process,async){
return (function (state_19940){
var state_val_19941 = (state_19940[(1)]);
if((state_val_19941 === (1))){
var state_19940__$1 = state_19940;
var statearr_19942_20082 = state_19940__$1;
(statearr_19942_20082[(2)] = null);

(statearr_19942_20082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19941 === (2))){
var state_19940__$1 = state_19940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19940__$1,(4),jobs);
} else {
if((state_val_19941 === (3))){
var inst_19938 = (state_19940[(2)]);
var state_19940__$1 = state_19940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19940__$1,inst_19938);
} else {
if((state_val_19941 === (4))){
var inst_19930 = (state_19940[(2)]);
var inst_19931 = async.call(null,inst_19930);
var state_19940__$1 = state_19940;
if(cljs.core.truth_(inst_19931)){
var statearr_19943_20083 = state_19940__$1;
(statearr_19943_20083[(1)] = (5));

} else {
var statearr_19944_20084 = state_19940__$1;
(statearr_19944_20084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19941 === (5))){
var state_19940__$1 = state_19940;
var statearr_19945_20085 = state_19940__$1;
(statearr_19945_20085[(2)] = null);

(statearr_19945_20085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19941 === (6))){
var state_19940__$1 = state_19940;
var statearr_19946_20086 = state_19940__$1;
(statearr_19946_20086[(2)] = null);

(statearr_19946_20086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19941 === (7))){
var inst_19936 = (state_19940[(2)]);
var state_19940__$1 = state_19940;
var statearr_19947_20087 = state_19940__$1;
(statearr_19947_20087[(2)] = inst_19936);

(statearr_19947_20087[(1)] = (3));


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
});})(__20069,c__19515__auto___20081,G__19900_20070,n__18251__auto___20068,jobs,results,process,async))
;
return ((function (__20069,switch__19403__auto__,c__19515__auto___20081,G__19900_20070,n__18251__auto___20068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0 = (function (){
var statearr_19951 = [null,null,null,null,null,null,null];
(statearr_19951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__);

(statearr_19951[(1)] = (1));

return statearr_19951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1 = (function (state_19940){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_19940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e19952){if((e19952 instanceof Object)){
var ex__19407__auto__ = e19952;
var statearr_19953_20088 = state_19940;
(statearr_19953_20088[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20089 = state_19940;
state_19940 = G__20089;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = function(state_19940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1.call(this,state_19940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__;
})()
;})(__20069,switch__19403__auto__,c__19515__auto___20081,G__19900_20070,n__18251__auto___20068,jobs,results,process,async))
})();
var state__19517__auto__ = (function (){var statearr_19954 = f__19516__auto__.call(null);
(statearr_19954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___20081);

return statearr_19954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(__20069,c__19515__auto___20081,G__19900_20070,n__18251__auto___20068,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20090 = (__20069 + (1));
__20069 = G__20090;
continue;
} else {
}
break;
}

var c__19515__auto___20091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___20091,jobs,results,process,async){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___20091,jobs,results,process,async){
return (function (state_19976){
var state_val_19977 = (state_19976[(1)]);
if((state_val_19977 === (1))){
var state_19976__$1 = state_19976;
var statearr_19978_20092 = state_19976__$1;
(statearr_19978_20092[(2)] = null);

(statearr_19978_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19977 === (2))){
var state_19976__$1 = state_19976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19976__$1,(4),from);
} else {
if((state_val_19977 === (3))){
var inst_19974 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19976__$1,inst_19974);
} else {
if((state_val_19977 === (4))){
var inst_19957 = (state_19976[(7)]);
var inst_19957__$1 = (state_19976[(2)]);
var inst_19958 = (inst_19957__$1 == null);
var state_19976__$1 = (function (){var statearr_19979 = state_19976;
(statearr_19979[(7)] = inst_19957__$1);

return statearr_19979;
})();
if(cljs.core.truth_(inst_19958)){
var statearr_19980_20093 = state_19976__$1;
(statearr_19980_20093[(1)] = (5));

} else {
var statearr_19981_20094 = state_19976__$1;
(statearr_19981_20094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19977 === (5))){
var inst_19960 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19976__$1 = state_19976;
var statearr_19982_20095 = state_19976__$1;
(statearr_19982_20095[(2)] = inst_19960);

(statearr_19982_20095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19977 === (6))){
var inst_19957 = (state_19976[(7)]);
var inst_19962 = (state_19976[(8)]);
var inst_19962__$1 = cljs.core.async.chan.call(null,(1));
var inst_19963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19964 = [inst_19957,inst_19962__$1];
var inst_19965 = (new cljs.core.PersistentVector(null,2,(5),inst_19963,inst_19964,null));
var state_19976__$1 = (function (){var statearr_19983 = state_19976;
(statearr_19983[(8)] = inst_19962__$1);

return statearr_19983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19976__$1,(8),jobs,inst_19965);
} else {
if((state_val_19977 === (7))){
var inst_19972 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
var statearr_19984_20096 = state_19976__$1;
(statearr_19984_20096[(2)] = inst_19972);

(statearr_19984_20096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19977 === (8))){
var inst_19962 = (state_19976[(8)]);
var inst_19967 = (state_19976[(2)]);
var state_19976__$1 = (function (){var statearr_19985 = state_19976;
(statearr_19985[(9)] = inst_19967);

return statearr_19985;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19976__$1,(9),results,inst_19962);
} else {
if((state_val_19977 === (9))){
var inst_19969 = (state_19976[(2)]);
var state_19976__$1 = (function (){var statearr_19986 = state_19976;
(statearr_19986[(10)] = inst_19969);

return statearr_19986;
})();
var statearr_19987_20097 = state_19976__$1;
(statearr_19987_20097[(2)] = null);

(statearr_19987_20097[(1)] = (2));


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
});})(c__19515__auto___20091,jobs,results,process,async))
;
return ((function (switch__19403__auto__,c__19515__auto___20091,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0 = (function (){
var statearr_19991 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__);

(statearr_19991[(1)] = (1));

return statearr_19991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1 = (function (state_19976){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_19976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e19992){if((e19992 instanceof Object)){
var ex__19407__auto__ = e19992;
var statearr_19993_20098 = state_19976;
(statearr_19993_20098[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20099 = state_19976;
state_19976 = G__20099;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = function(state_19976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1.call(this,state_19976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___20091,jobs,results,process,async))
})();
var state__19517__auto__ = (function (){var statearr_19994 = f__19516__auto__.call(null);
(statearr_19994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___20091);

return statearr_19994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___20091,jobs,results,process,async))
);


var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__,jobs,results,process,async){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__,jobs,results,process,async){
return (function (state_20032){
var state_val_20033 = (state_20032[(1)]);
if((state_val_20033 === (7))){
var inst_20028 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20034_20100 = state_20032__$1;
(statearr_20034_20100[(2)] = inst_20028);

(statearr_20034_20100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (20))){
var state_20032__$1 = state_20032;
var statearr_20035_20101 = state_20032__$1;
(statearr_20035_20101[(2)] = null);

(statearr_20035_20101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (1))){
var state_20032__$1 = state_20032;
var statearr_20036_20102 = state_20032__$1;
(statearr_20036_20102[(2)] = null);

(statearr_20036_20102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (4))){
var inst_19997 = (state_20032[(7)]);
var inst_19997__$1 = (state_20032[(2)]);
var inst_19998 = (inst_19997__$1 == null);
var state_20032__$1 = (function (){var statearr_20037 = state_20032;
(statearr_20037[(7)] = inst_19997__$1);

return statearr_20037;
})();
if(cljs.core.truth_(inst_19998)){
var statearr_20038_20103 = state_20032__$1;
(statearr_20038_20103[(1)] = (5));

} else {
var statearr_20039_20104 = state_20032__$1;
(statearr_20039_20104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (15))){
var inst_20010 = (state_20032[(8)]);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20032__$1,(18),to,inst_20010);
} else {
if((state_val_20033 === (21))){
var inst_20023 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20040_20105 = state_20032__$1;
(statearr_20040_20105[(2)] = inst_20023);

(statearr_20040_20105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (13))){
var inst_20025 = (state_20032[(2)]);
var state_20032__$1 = (function (){var statearr_20041 = state_20032;
(statearr_20041[(9)] = inst_20025);

return statearr_20041;
})();
var statearr_20042_20106 = state_20032__$1;
(statearr_20042_20106[(2)] = null);

(statearr_20042_20106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (6))){
var inst_19997 = (state_20032[(7)]);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20032__$1,(11),inst_19997);
} else {
if((state_val_20033 === (17))){
var inst_20018 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
if(cljs.core.truth_(inst_20018)){
var statearr_20043_20107 = state_20032__$1;
(statearr_20043_20107[(1)] = (19));

} else {
var statearr_20044_20108 = state_20032__$1;
(statearr_20044_20108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (3))){
var inst_20030 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20032__$1,inst_20030);
} else {
if((state_val_20033 === (12))){
var inst_20007 = (state_20032[(10)]);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20032__$1,(14),inst_20007);
} else {
if((state_val_20033 === (2))){
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20032__$1,(4),results);
} else {
if((state_val_20033 === (19))){
var state_20032__$1 = state_20032;
var statearr_20045_20109 = state_20032__$1;
(statearr_20045_20109[(2)] = null);

(statearr_20045_20109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (11))){
var inst_20007 = (state_20032[(2)]);
var state_20032__$1 = (function (){var statearr_20046 = state_20032;
(statearr_20046[(10)] = inst_20007);

return statearr_20046;
})();
var statearr_20047_20110 = state_20032__$1;
(statearr_20047_20110[(2)] = null);

(statearr_20047_20110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (9))){
var state_20032__$1 = state_20032;
var statearr_20048_20111 = state_20032__$1;
(statearr_20048_20111[(2)] = null);

(statearr_20048_20111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (5))){
var state_20032__$1 = state_20032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20049_20112 = state_20032__$1;
(statearr_20049_20112[(1)] = (8));

} else {
var statearr_20050_20113 = state_20032__$1;
(statearr_20050_20113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (14))){
var inst_20010 = (state_20032[(8)]);
var inst_20012 = (state_20032[(11)]);
var inst_20010__$1 = (state_20032[(2)]);
var inst_20011 = (inst_20010__$1 == null);
var inst_20012__$1 = cljs.core.not.call(null,inst_20011);
var state_20032__$1 = (function (){var statearr_20051 = state_20032;
(statearr_20051[(8)] = inst_20010__$1);

(statearr_20051[(11)] = inst_20012__$1);

return statearr_20051;
})();
if(inst_20012__$1){
var statearr_20052_20114 = state_20032__$1;
(statearr_20052_20114[(1)] = (15));

} else {
var statearr_20053_20115 = state_20032__$1;
(statearr_20053_20115[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (16))){
var inst_20012 = (state_20032[(11)]);
var state_20032__$1 = state_20032;
var statearr_20054_20116 = state_20032__$1;
(statearr_20054_20116[(2)] = inst_20012);

(statearr_20054_20116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (10))){
var inst_20004 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20055_20117 = state_20032__$1;
(statearr_20055_20117[(2)] = inst_20004);

(statearr_20055_20117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (18))){
var inst_20015 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20056_20118 = state_20032__$1;
(statearr_20056_20118[(2)] = inst_20015);

(statearr_20056_20118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (8))){
var inst_20001 = cljs.core.async.close_BANG_.call(null,to);
var state_20032__$1 = state_20032;
var statearr_20057_20119 = state_20032__$1;
(statearr_20057_20119[(2)] = inst_20001);

(statearr_20057_20119[(1)] = (10));


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
});})(c__19515__auto__,jobs,results,process,async))
;
return ((function (switch__19403__auto__,c__19515__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0 = (function (){
var statearr_20061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__);

(statearr_20061[(1)] = (1));

return statearr_20061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1 = (function (state_20032){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_20032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e20062){if((e20062 instanceof Object)){
var ex__19407__auto__ = e20062;
var statearr_20063_20120 = state_20032;
(statearr_20063_20120[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20121 = state_20032;
state_20032 = G__20121;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__ = function(state_20032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1.call(this,state_20032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__,jobs,results,process,async))
})();
var state__19517__auto__ = (function (){var statearr_20064 = f__19516__auto__.call(null);
(statearr_20064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_20064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__,jobs,results,process,async))
);

return c__19515__auto__;
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
var args20122 = [];
var len__18406__auto___20125 = arguments.length;
var i__18407__auto___20126 = (0);
while(true){
if((i__18407__auto___20126 < len__18406__auto___20125)){
args20122.push((arguments[i__18407__auto___20126]));

var G__20127 = (i__18407__auto___20126 + (1));
i__18407__auto___20126 = G__20127;
continue;
} else {
}
break;
}

var G__20124 = args20122.length;
switch (G__20124) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20122.length)].join('')));

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
var args20129 = [];
var len__18406__auto___20132 = arguments.length;
var i__18407__auto___20133 = (0);
while(true){
if((i__18407__auto___20133 < len__18406__auto___20132)){
args20129.push((arguments[i__18407__auto___20133]));

var G__20134 = (i__18407__auto___20133 + (1));
i__18407__auto___20133 = G__20134;
continue;
} else {
}
break;
}

var G__20131 = args20129.length;
switch (G__20131) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20129.length)].join('')));

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
var args20136 = [];
var len__18406__auto___20189 = arguments.length;
var i__18407__auto___20190 = (0);
while(true){
if((i__18407__auto___20190 < len__18406__auto___20189)){
args20136.push((arguments[i__18407__auto___20190]));

var G__20191 = (i__18407__auto___20190 + (1));
i__18407__auto___20190 = G__20191;
continue;
} else {
}
break;
}

var G__20138 = args20136.length;
switch (G__20138) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20136.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19515__auto___20193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___20193,tc,fc){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___20193,tc,fc){
return (function (state_20164){
var state_val_20165 = (state_20164[(1)]);
if((state_val_20165 === (7))){
var inst_20160 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
var statearr_20166_20194 = state_20164__$1;
(statearr_20166_20194[(2)] = inst_20160);

(statearr_20166_20194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (1))){
var state_20164__$1 = state_20164;
var statearr_20167_20195 = state_20164__$1;
(statearr_20167_20195[(2)] = null);

(statearr_20167_20195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (4))){
var inst_20141 = (state_20164[(7)]);
var inst_20141__$1 = (state_20164[(2)]);
var inst_20142 = (inst_20141__$1 == null);
var state_20164__$1 = (function (){var statearr_20168 = state_20164;
(statearr_20168[(7)] = inst_20141__$1);

return statearr_20168;
})();
if(cljs.core.truth_(inst_20142)){
var statearr_20169_20196 = state_20164__$1;
(statearr_20169_20196[(1)] = (5));

} else {
var statearr_20170_20197 = state_20164__$1;
(statearr_20170_20197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (13))){
var state_20164__$1 = state_20164;
var statearr_20171_20198 = state_20164__$1;
(statearr_20171_20198[(2)] = null);

(statearr_20171_20198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (6))){
var inst_20141 = (state_20164[(7)]);
var inst_20147 = p.call(null,inst_20141);
var state_20164__$1 = state_20164;
if(cljs.core.truth_(inst_20147)){
var statearr_20172_20199 = state_20164__$1;
(statearr_20172_20199[(1)] = (9));

} else {
var statearr_20173_20200 = state_20164__$1;
(statearr_20173_20200[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (3))){
var inst_20162 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20164__$1,inst_20162);
} else {
if((state_val_20165 === (12))){
var state_20164__$1 = state_20164;
var statearr_20174_20201 = state_20164__$1;
(statearr_20174_20201[(2)] = null);

(statearr_20174_20201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (2))){
var state_20164__$1 = state_20164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20164__$1,(4),ch);
} else {
if((state_val_20165 === (11))){
var inst_20141 = (state_20164[(7)]);
var inst_20151 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20164__$1,(8),inst_20151,inst_20141);
} else {
if((state_val_20165 === (9))){
var state_20164__$1 = state_20164;
var statearr_20175_20202 = state_20164__$1;
(statearr_20175_20202[(2)] = tc);

(statearr_20175_20202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (5))){
var inst_20144 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20145 = cljs.core.async.close_BANG_.call(null,fc);
var state_20164__$1 = (function (){var statearr_20176 = state_20164;
(statearr_20176[(8)] = inst_20144);

return statearr_20176;
})();
var statearr_20177_20203 = state_20164__$1;
(statearr_20177_20203[(2)] = inst_20145);

(statearr_20177_20203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (14))){
var inst_20158 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
var statearr_20178_20204 = state_20164__$1;
(statearr_20178_20204[(2)] = inst_20158);

(statearr_20178_20204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (10))){
var state_20164__$1 = state_20164;
var statearr_20179_20205 = state_20164__$1;
(statearr_20179_20205[(2)] = fc);

(statearr_20179_20205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20165 === (8))){
var inst_20153 = (state_20164[(2)]);
var state_20164__$1 = state_20164;
if(cljs.core.truth_(inst_20153)){
var statearr_20180_20206 = state_20164__$1;
(statearr_20180_20206[(1)] = (12));

} else {
var statearr_20181_20207 = state_20164__$1;
(statearr_20181_20207[(1)] = (13));

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
});})(c__19515__auto___20193,tc,fc))
;
return ((function (switch__19403__auto__,c__19515__auto___20193,tc,fc){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_20185 = [null,null,null,null,null,null,null,null,null];
(statearr_20185[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_20185[(1)] = (1));

return statearr_20185;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_20164){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_20164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e20186){if((e20186 instanceof Object)){
var ex__19407__auto__ = e20186;
var statearr_20187_20208 = state_20164;
(statearr_20187_20208[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20209 = state_20164;
state_20164 = G__20209;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_20164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_20164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___20193,tc,fc))
})();
var state__19517__auto__ = (function (){var statearr_20188 = f__19516__auto__.call(null);
(statearr_20188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___20193);

return statearr_20188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___20193,tc,fc))
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
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_20273){
var state_val_20274 = (state_20273[(1)]);
if((state_val_20274 === (7))){
var inst_20269 = (state_20273[(2)]);
var state_20273__$1 = state_20273;
var statearr_20275_20296 = state_20273__$1;
(statearr_20275_20296[(2)] = inst_20269);

(statearr_20275_20296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20274 === (1))){
var inst_20253 = init;
var state_20273__$1 = (function (){var statearr_20276 = state_20273;
(statearr_20276[(7)] = inst_20253);

return statearr_20276;
})();
var statearr_20277_20297 = state_20273__$1;
(statearr_20277_20297[(2)] = null);

(statearr_20277_20297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20274 === (4))){
var inst_20256 = (state_20273[(8)]);
var inst_20256__$1 = (state_20273[(2)]);
var inst_20257 = (inst_20256__$1 == null);
var state_20273__$1 = (function (){var statearr_20278 = state_20273;
(statearr_20278[(8)] = inst_20256__$1);

return statearr_20278;
})();
if(cljs.core.truth_(inst_20257)){
var statearr_20279_20298 = state_20273__$1;
(statearr_20279_20298[(1)] = (5));

} else {
var statearr_20280_20299 = state_20273__$1;
(statearr_20280_20299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20274 === (6))){
var inst_20256 = (state_20273[(8)]);
var inst_20253 = (state_20273[(7)]);
var inst_20260 = (state_20273[(9)]);
var inst_20260__$1 = f.call(null,inst_20253,inst_20256);
var inst_20261 = cljs.core.reduced_QMARK_.call(null,inst_20260__$1);
var state_20273__$1 = (function (){var statearr_20281 = state_20273;
(statearr_20281[(9)] = inst_20260__$1);

return statearr_20281;
})();
if(inst_20261){
var statearr_20282_20300 = state_20273__$1;
(statearr_20282_20300[(1)] = (8));

} else {
var statearr_20283_20301 = state_20273__$1;
(statearr_20283_20301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20274 === (3))){
var inst_20271 = (state_20273[(2)]);
var state_20273__$1 = state_20273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20273__$1,inst_20271);
} else {
if((state_val_20274 === (2))){
var state_20273__$1 = state_20273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20273__$1,(4),ch);
} else {
if((state_val_20274 === (9))){
var inst_20260 = (state_20273[(9)]);
var inst_20253 = inst_20260;
var state_20273__$1 = (function (){var statearr_20284 = state_20273;
(statearr_20284[(7)] = inst_20253);

return statearr_20284;
})();
var statearr_20285_20302 = state_20273__$1;
(statearr_20285_20302[(2)] = null);

(statearr_20285_20302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20274 === (5))){
var inst_20253 = (state_20273[(7)]);
var state_20273__$1 = state_20273;
var statearr_20286_20303 = state_20273__$1;
(statearr_20286_20303[(2)] = inst_20253);

(statearr_20286_20303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20274 === (10))){
var inst_20267 = (state_20273[(2)]);
var state_20273__$1 = state_20273;
var statearr_20287_20304 = state_20273__$1;
(statearr_20287_20304[(2)] = inst_20267);

(statearr_20287_20304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20274 === (8))){
var inst_20260 = (state_20273[(9)]);
var inst_20263 = cljs.core.deref.call(null,inst_20260);
var state_20273__$1 = state_20273;
var statearr_20288_20305 = state_20273__$1;
(statearr_20288_20305[(2)] = inst_20263);

(statearr_20288_20305[(1)] = (10));


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
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19404__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19404__auto____0 = (function (){
var statearr_20292 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20292[(0)] = cljs$core$async$reduce_$_state_machine__19404__auto__);

(statearr_20292[(1)] = (1));

return statearr_20292;
});
var cljs$core$async$reduce_$_state_machine__19404__auto____1 = (function (state_20273){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_20273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e20293){if((e20293 instanceof Object)){
var ex__19407__auto__ = e20293;
var statearr_20294_20306 = state_20273;
(statearr_20294_20306[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20307 = state_20273;
state_20273 = G__20307;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19404__auto__ = function(state_20273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19404__auto____1.call(this,state_20273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19404__auto____0;
cljs$core$async$reduce_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19404__auto____1;
return cljs$core$async$reduce_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_20295 = f__19516__auto__.call(null);
(statearr_20295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_20295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
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
var args20308 = [];
var len__18406__auto___20360 = arguments.length;
var i__18407__auto___20361 = (0);
while(true){
if((i__18407__auto___20361 < len__18406__auto___20360)){
args20308.push((arguments[i__18407__auto___20361]));

var G__20362 = (i__18407__auto___20361 + (1));
i__18407__auto___20361 = G__20362;
continue;
} else {
}
break;
}

var G__20310 = args20308.length;
switch (G__20310) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20308.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_20335){
var state_val_20336 = (state_20335[(1)]);
if((state_val_20336 === (7))){
var inst_20317 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
var statearr_20337_20364 = state_20335__$1;
(statearr_20337_20364[(2)] = inst_20317);

(statearr_20337_20364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (1))){
var inst_20311 = cljs.core.seq.call(null,coll);
var inst_20312 = inst_20311;
var state_20335__$1 = (function (){var statearr_20338 = state_20335;
(statearr_20338[(7)] = inst_20312);

return statearr_20338;
})();
var statearr_20339_20365 = state_20335__$1;
(statearr_20339_20365[(2)] = null);

(statearr_20339_20365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (4))){
var inst_20312 = (state_20335[(7)]);
var inst_20315 = cljs.core.first.call(null,inst_20312);
var state_20335__$1 = state_20335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20335__$1,(7),ch,inst_20315);
} else {
if((state_val_20336 === (13))){
var inst_20329 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
var statearr_20340_20366 = state_20335__$1;
(statearr_20340_20366[(2)] = inst_20329);

(statearr_20340_20366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (6))){
var inst_20320 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
if(cljs.core.truth_(inst_20320)){
var statearr_20341_20367 = state_20335__$1;
(statearr_20341_20367[(1)] = (8));

} else {
var statearr_20342_20368 = state_20335__$1;
(statearr_20342_20368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (3))){
var inst_20333 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20335__$1,inst_20333);
} else {
if((state_val_20336 === (12))){
var state_20335__$1 = state_20335;
var statearr_20343_20369 = state_20335__$1;
(statearr_20343_20369[(2)] = null);

(statearr_20343_20369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (2))){
var inst_20312 = (state_20335[(7)]);
var state_20335__$1 = state_20335;
if(cljs.core.truth_(inst_20312)){
var statearr_20344_20370 = state_20335__$1;
(statearr_20344_20370[(1)] = (4));

} else {
var statearr_20345_20371 = state_20335__$1;
(statearr_20345_20371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (11))){
var inst_20326 = cljs.core.async.close_BANG_.call(null,ch);
var state_20335__$1 = state_20335;
var statearr_20346_20372 = state_20335__$1;
(statearr_20346_20372[(2)] = inst_20326);

(statearr_20346_20372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (9))){
var state_20335__$1 = state_20335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20347_20373 = state_20335__$1;
(statearr_20347_20373[(1)] = (11));

} else {
var statearr_20348_20374 = state_20335__$1;
(statearr_20348_20374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (5))){
var inst_20312 = (state_20335[(7)]);
var state_20335__$1 = state_20335;
var statearr_20349_20375 = state_20335__$1;
(statearr_20349_20375[(2)] = inst_20312);

(statearr_20349_20375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (10))){
var inst_20331 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
var statearr_20350_20376 = state_20335__$1;
(statearr_20350_20376[(2)] = inst_20331);

(statearr_20350_20376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (8))){
var inst_20312 = (state_20335[(7)]);
var inst_20322 = cljs.core.next.call(null,inst_20312);
var inst_20312__$1 = inst_20322;
var state_20335__$1 = (function (){var statearr_20351 = state_20335;
(statearr_20351[(7)] = inst_20312__$1);

return statearr_20351;
})();
var statearr_20352_20377 = state_20335__$1;
(statearr_20352_20377[(2)] = null);

(statearr_20352_20377[(1)] = (2));


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
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_20356 = [null,null,null,null,null,null,null,null];
(statearr_20356[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_20356[(1)] = (1));

return statearr_20356;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_20335){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_20335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e20357){if((e20357 instanceof Object)){
var ex__19407__auto__ = e20357;
var statearr_20358_20378 = state_20335;
(statearr_20358_20378[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20379 = state_20335;
state_20335 = G__20379;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_20335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_20335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_20359 = f__19516__auto__.call(null);
(statearr_20359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_20359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
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
var x__18003__auto__ = (((_ == null))?null:_);
var m__18004__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,_);
} else {
var m__18004__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,_);
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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18004__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m,ch);
} else {
var m__18004__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m,ch);
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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m);
} else {
var m__18004__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20601 = (function (mult,ch,cs,meta20602){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20602 = meta20602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20603,meta20602__$1){
var self__ = this;
var _20603__$1 = this;
return (new cljs.core.async.t_cljs$core$async20601(self__.mult,self__.ch,self__.cs,meta20602__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20603){
var self__ = this;
var _20603__$1 = this;
return self__.meta20602;
});})(cs))
;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20601.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20602","meta20602",-1751938630,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20601";

cljs.core.async.t_cljs$core$async20601.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async20601");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20601 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20601(mult__$1,ch__$1,cs__$1,meta20602){
return (new cljs.core.async.t_cljs$core$async20601(mult__$1,ch__$1,cs__$1,meta20602));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20601(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19515__auto___20822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___20822,cs,m,dchan,dctr,done){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___20822,cs,m,dchan,dctr,done){
return (function (state_20734){
var state_val_20735 = (state_20734[(1)]);
if((state_val_20735 === (7))){
var inst_20730 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20736_20823 = state_20734__$1;
(statearr_20736_20823[(2)] = inst_20730);

(statearr_20736_20823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (20))){
var inst_20635 = (state_20734[(7)]);
var inst_20645 = cljs.core.first.call(null,inst_20635);
var inst_20646 = cljs.core.nth.call(null,inst_20645,(0),null);
var inst_20647 = cljs.core.nth.call(null,inst_20645,(1),null);
var state_20734__$1 = (function (){var statearr_20737 = state_20734;
(statearr_20737[(8)] = inst_20646);

return statearr_20737;
})();
if(cljs.core.truth_(inst_20647)){
var statearr_20738_20824 = state_20734__$1;
(statearr_20738_20824[(1)] = (22));

} else {
var statearr_20739_20825 = state_20734__$1;
(statearr_20739_20825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (27))){
var inst_20682 = (state_20734[(9)]);
var inst_20677 = (state_20734[(10)]);
var inst_20675 = (state_20734[(11)]);
var inst_20606 = (state_20734[(12)]);
var inst_20682__$1 = cljs.core._nth.call(null,inst_20675,inst_20677);
var inst_20683 = cljs.core.async.put_BANG_.call(null,inst_20682__$1,inst_20606,done);
var state_20734__$1 = (function (){var statearr_20740 = state_20734;
(statearr_20740[(9)] = inst_20682__$1);

return statearr_20740;
})();
if(cljs.core.truth_(inst_20683)){
var statearr_20741_20826 = state_20734__$1;
(statearr_20741_20826[(1)] = (30));

} else {
var statearr_20742_20827 = state_20734__$1;
(statearr_20742_20827[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (1))){
var state_20734__$1 = state_20734;
var statearr_20743_20828 = state_20734__$1;
(statearr_20743_20828[(2)] = null);

(statearr_20743_20828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (24))){
var inst_20635 = (state_20734[(7)]);
var inst_20652 = (state_20734[(2)]);
var inst_20653 = cljs.core.next.call(null,inst_20635);
var inst_20615 = inst_20653;
var inst_20616 = null;
var inst_20617 = (0);
var inst_20618 = (0);
var state_20734__$1 = (function (){var statearr_20744 = state_20734;
(statearr_20744[(13)] = inst_20617);

(statearr_20744[(14)] = inst_20616);

(statearr_20744[(15)] = inst_20615);

(statearr_20744[(16)] = inst_20618);

(statearr_20744[(17)] = inst_20652);

return statearr_20744;
})();
var statearr_20745_20829 = state_20734__$1;
(statearr_20745_20829[(2)] = null);

(statearr_20745_20829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (39))){
var state_20734__$1 = state_20734;
var statearr_20749_20830 = state_20734__$1;
(statearr_20749_20830[(2)] = null);

(statearr_20749_20830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (4))){
var inst_20606 = (state_20734[(12)]);
var inst_20606__$1 = (state_20734[(2)]);
var inst_20607 = (inst_20606__$1 == null);
var state_20734__$1 = (function (){var statearr_20750 = state_20734;
(statearr_20750[(12)] = inst_20606__$1);

return statearr_20750;
})();
if(cljs.core.truth_(inst_20607)){
var statearr_20751_20831 = state_20734__$1;
(statearr_20751_20831[(1)] = (5));

} else {
var statearr_20752_20832 = state_20734__$1;
(statearr_20752_20832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (15))){
var inst_20617 = (state_20734[(13)]);
var inst_20616 = (state_20734[(14)]);
var inst_20615 = (state_20734[(15)]);
var inst_20618 = (state_20734[(16)]);
var inst_20631 = (state_20734[(2)]);
var inst_20632 = (inst_20618 + (1));
var tmp20746 = inst_20617;
var tmp20747 = inst_20616;
var tmp20748 = inst_20615;
var inst_20615__$1 = tmp20748;
var inst_20616__$1 = tmp20747;
var inst_20617__$1 = tmp20746;
var inst_20618__$1 = inst_20632;
var state_20734__$1 = (function (){var statearr_20753 = state_20734;
(statearr_20753[(18)] = inst_20631);

(statearr_20753[(13)] = inst_20617__$1);

(statearr_20753[(14)] = inst_20616__$1);

(statearr_20753[(15)] = inst_20615__$1);

(statearr_20753[(16)] = inst_20618__$1);

return statearr_20753;
})();
var statearr_20754_20833 = state_20734__$1;
(statearr_20754_20833[(2)] = null);

(statearr_20754_20833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (21))){
var inst_20656 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20758_20834 = state_20734__$1;
(statearr_20758_20834[(2)] = inst_20656);

(statearr_20758_20834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (31))){
var inst_20682 = (state_20734[(9)]);
var inst_20686 = done.call(null,null);
var inst_20687 = cljs.core.async.untap_STAR_.call(null,m,inst_20682);
var state_20734__$1 = (function (){var statearr_20759 = state_20734;
(statearr_20759[(19)] = inst_20686);

return statearr_20759;
})();
var statearr_20760_20835 = state_20734__$1;
(statearr_20760_20835[(2)] = inst_20687);

(statearr_20760_20835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (32))){
var inst_20674 = (state_20734[(20)]);
var inst_20677 = (state_20734[(10)]);
var inst_20675 = (state_20734[(11)]);
var inst_20676 = (state_20734[(21)]);
var inst_20689 = (state_20734[(2)]);
var inst_20690 = (inst_20677 + (1));
var tmp20755 = inst_20674;
var tmp20756 = inst_20675;
var tmp20757 = inst_20676;
var inst_20674__$1 = tmp20755;
var inst_20675__$1 = tmp20756;
var inst_20676__$1 = tmp20757;
var inst_20677__$1 = inst_20690;
var state_20734__$1 = (function (){var statearr_20761 = state_20734;
(statearr_20761[(22)] = inst_20689);

(statearr_20761[(20)] = inst_20674__$1);

(statearr_20761[(10)] = inst_20677__$1);

(statearr_20761[(11)] = inst_20675__$1);

(statearr_20761[(21)] = inst_20676__$1);

return statearr_20761;
})();
var statearr_20762_20836 = state_20734__$1;
(statearr_20762_20836[(2)] = null);

(statearr_20762_20836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (40))){
var inst_20702 = (state_20734[(23)]);
var inst_20706 = done.call(null,null);
var inst_20707 = cljs.core.async.untap_STAR_.call(null,m,inst_20702);
var state_20734__$1 = (function (){var statearr_20763 = state_20734;
(statearr_20763[(24)] = inst_20706);

return statearr_20763;
})();
var statearr_20764_20837 = state_20734__$1;
(statearr_20764_20837[(2)] = inst_20707);

(statearr_20764_20837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (33))){
var inst_20693 = (state_20734[(25)]);
var inst_20695 = cljs.core.chunked_seq_QMARK_.call(null,inst_20693);
var state_20734__$1 = state_20734;
if(inst_20695){
var statearr_20765_20838 = state_20734__$1;
(statearr_20765_20838[(1)] = (36));

} else {
var statearr_20766_20839 = state_20734__$1;
(statearr_20766_20839[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (13))){
var inst_20625 = (state_20734[(26)]);
var inst_20628 = cljs.core.async.close_BANG_.call(null,inst_20625);
var state_20734__$1 = state_20734;
var statearr_20767_20840 = state_20734__$1;
(statearr_20767_20840[(2)] = inst_20628);

(statearr_20767_20840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (22))){
var inst_20646 = (state_20734[(8)]);
var inst_20649 = cljs.core.async.close_BANG_.call(null,inst_20646);
var state_20734__$1 = state_20734;
var statearr_20768_20841 = state_20734__$1;
(statearr_20768_20841[(2)] = inst_20649);

(statearr_20768_20841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (36))){
var inst_20693 = (state_20734[(25)]);
var inst_20697 = cljs.core.chunk_first.call(null,inst_20693);
var inst_20698 = cljs.core.chunk_rest.call(null,inst_20693);
var inst_20699 = cljs.core.count.call(null,inst_20697);
var inst_20674 = inst_20698;
var inst_20675 = inst_20697;
var inst_20676 = inst_20699;
var inst_20677 = (0);
var state_20734__$1 = (function (){var statearr_20769 = state_20734;
(statearr_20769[(20)] = inst_20674);

(statearr_20769[(10)] = inst_20677);

(statearr_20769[(11)] = inst_20675);

(statearr_20769[(21)] = inst_20676);

return statearr_20769;
})();
var statearr_20770_20842 = state_20734__$1;
(statearr_20770_20842[(2)] = null);

(statearr_20770_20842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (41))){
var inst_20693 = (state_20734[(25)]);
var inst_20709 = (state_20734[(2)]);
var inst_20710 = cljs.core.next.call(null,inst_20693);
var inst_20674 = inst_20710;
var inst_20675 = null;
var inst_20676 = (0);
var inst_20677 = (0);
var state_20734__$1 = (function (){var statearr_20771 = state_20734;
(statearr_20771[(20)] = inst_20674);

(statearr_20771[(27)] = inst_20709);

(statearr_20771[(10)] = inst_20677);

(statearr_20771[(11)] = inst_20675);

(statearr_20771[(21)] = inst_20676);

return statearr_20771;
})();
var statearr_20772_20843 = state_20734__$1;
(statearr_20772_20843[(2)] = null);

(statearr_20772_20843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (43))){
var state_20734__$1 = state_20734;
var statearr_20773_20844 = state_20734__$1;
(statearr_20773_20844[(2)] = null);

(statearr_20773_20844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (29))){
var inst_20718 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20774_20845 = state_20734__$1;
(statearr_20774_20845[(2)] = inst_20718);

(statearr_20774_20845[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (44))){
var inst_20727 = (state_20734[(2)]);
var state_20734__$1 = (function (){var statearr_20775 = state_20734;
(statearr_20775[(28)] = inst_20727);

return statearr_20775;
})();
var statearr_20776_20846 = state_20734__$1;
(statearr_20776_20846[(2)] = null);

(statearr_20776_20846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (6))){
var inst_20666 = (state_20734[(29)]);
var inst_20665 = cljs.core.deref.call(null,cs);
var inst_20666__$1 = cljs.core.keys.call(null,inst_20665);
var inst_20667 = cljs.core.count.call(null,inst_20666__$1);
var inst_20668 = cljs.core.reset_BANG_.call(null,dctr,inst_20667);
var inst_20673 = cljs.core.seq.call(null,inst_20666__$1);
var inst_20674 = inst_20673;
var inst_20675 = null;
var inst_20676 = (0);
var inst_20677 = (0);
var state_20734__$1 = (function (){var statearr_20777 = state_20734;
(statearr_20777[(30)] = inst_20668);

(statearr_20777[(20)] = inst_20674);

(statearr_20777[(10)] = inst_20677);

(statearr_20777[(29)] = inst_20666__$1);

(statearr_20777[(11)] = inst_20675);

(statearr_20777[(21)] = inst_20676);

return statearr_20777;
})();
var statearr_20778_20847 = state_20734__$1;
(statearr_20778_20847[(2)] = null);

(statearr_20778_20847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (28))){
var inst_20674 = (state_20734[(20)]);
var inst_20693 = (state_20734[(25)]);
var inst_20693__$1 = cljs.core.seq.call(null,inst_20674);
var state_20734__$1 = (function (){var statearr_20779 = state_20734;
(statearr_20779[(25)] = inst_20693__$1);

return statearr_20779;
})();
if(inst_20693__$1){
var statearr_20780_20848 = state_20734__$1;
(statearr_20780_20848[(1)] = (33));

} else {
var statearr_20781_20849 = state_20734__$1;
(statearr_20781_20849[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (25))){
var inst_20677 = (state_20734[(10)]);
var inst_20676 = (state_20734[(21)]);
var inst_20679 = (inst_20677 < inst_20676);
var inst_20680 = inst_20679;
var state_20734__$1 = state_20734;
if(cljs.core.truth_(inst_20680)){
var statearr_20782_20850 = state_20734__$1;
(statearr_20782_20850[(1)] = (27));

} else {
var statearr_20783_20851 = state_20734__$1;
(statearr_20783_20851[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (34))){
var state_20734__$1 = state_20734;
var statearr_20784_20852 = state_20734__$1;
(statearr_20784_20852[(2)] = null);

(statearr_20784_20852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (17))){
var state_20734__$1 = state_20734;
var statearr_20785_20853 = state_20734__$1;
(statearr_20785_20853[(2)] = null);

(statearr_20785_20853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (3))){
var inst_20732 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20734__$1,inst_20732);
} else {
if((state_val_20735 === (12))){
var inst_20661 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20786_20854 = state_20734__$1;
(statearr_20786_20854[(2)] = inst_20661);

(statearr_20786_20854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (2))){
var state_20734__$1 = state_20734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20734__$1,(4),ch);
} else {
if((state_val_20735 === (23))){
var state_20734__$1 = state_20734;
var statearr_20787_20855 = state_20734__$1;
(statearr_20787_20855[(2)] = null);

(statearr_20787_20855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (35))){
var inst_20716 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20788_20856 = state_20734__$1;
(statearr_20788_20856[(2)] = inst_20716);

(statearr_20788_20856[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (19))){
var inst_20635 = (state_20734[(7)]);
var inst_20639 = cljs.core.chunk_first.call(null,inst_20635);
var inst_20640 = cljs.core.chunk_rest.call(null,inst_20635);
var inst_20641 = cljs.core.count.call(null,inst_20639);
var inst_20615 = inst_20640;
var inst_20616 = inst_20639;
var inst_20617 = inst_20641;
var inst_20618 = (0);
var state_20734__$1 = (function (){var statearr_20789 = state_20734;
(statearr_20789[(13)] = inst_20617);

(statearr_20789[(14)] = inst_20616);

(statearr_20789[(15)] = inst_20615);

(statearr_20789[(16)] = inst_20618);

return statearr_20789;
})();
var statearr_20790_20857 = state_20734__$1;
(statearr_20790_20857[(2)] = null);

(statearr_20790_20857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (11))){
var inst_20635 = (state_20734[(7)]);
var inst_20615 = (state_20734[(15)]);
var inst_20635__$1 = cljs.core.seq.call(null,inst_20615);
var state_20734__$1 = (function (){var statearr_20791 = state_20734;
(statearr_20791[(7)] = inst_20635__$1);

return statearr_20791;
})();
if(inst_20635__$1){
var statearr_20792_20858 = state_20734__$1;
(statearr_20792_20858[(1)] = (16));

} else {
var statearr_20793_20859 = state_20734__$1;
(statearr_20793_20859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (9))){
var inst_20663 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20794_20860 = state_20734__$1;
(statearr_20794_20860[(2)] = inst_20663);

(statearr_20794_20860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (5))){
var inst_20613 = cljs.core.deref.call(null,cs);
var inst_20614 = cljs.core.seq.call(null,inst_20613);
var inst_20615 = inst_20614;
var inst_20616 = null;
var inst_20617 = (0);
var inst_20618 = (0);
var state_20734__$1 = (function (){var statearr_20795 = state_20734;
(statearr_20795[(13)] = inst_20617);

(statearr_20795[(14)] = inst_20616);

(statearr_20795[(15)] = inst_20615);

(statearr_20795[(16)] = inst_20618);

return statearr_20795;
})();
var statearr_20796_20861 = state_20734__$1;
(statearr_20796_20861[(2)] = null);

(statearr_20796_20861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (14))){
var state_20734__$1 = state_20734;
var statearr_20797_20862 = state_20734__$1;
(statearr_20797_20862[(2)] = null);

(statearr_20797_20862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (45))){
var inst_20724 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20798_20863 = state_20734__$1;
(statearr_20798_20863[(2)] = inst_20724);

(statearr_20798_20863[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (26))){
var inst_20666 = (state_20734[(29)]);
var inst_20720 = (state_20734[(2)]);
var inst_20721 = cljs.core.seq.call(null,inst_20666);
var state_20734__$1 = (function (){var statearr_20799 = state_20734;
(statearr_20799[(31)] = inst_20720);

return statearr_20799;
})();
if(inst_20721){
var statearr_20800_20864 = state_20734__$1;
(statearr_20800_20864[(1)] = (42));

} else {
var statearr_20801_20865 = state_20734__$1;
(statearr_20801_20865[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (16))){
var inst_20635 = (state_20734[(7)]);
var inst_20637 = cljs.core.chunked_seq_QMARK_.call(null,inst_20635);
var state_20734__$1 = state_20734;
if(inst_20637){
var statearr_20802_20866 = state_20734__$1;
(statearr_20802_20866[(1)] = (19));

} else {
var statearr_20803_20867 = state_20734__$1;
(statearr_20803_20867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (38))){
var inst_20713 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20804_20868 = state_20734__$1;
(statearr_20804_20868[(2)] = inst_20713);

(statearr_20804_20868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (30))){
var state_20734__$1 = state_20734;
var statearr_20805_20869 = state_20734__$1;
(statearr_20805_20869[(2)] = null);

(statearr_20805_20869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (10))){
var inst_20616 = (state_20734[(14)]);
var inst_20618 = (state_20734[(16)]);
var inst_20624 = cljs.core._nth.call(null,inst_20616,inst_20618);
var inst_20625 = cljs.core.nth.call(null,inst_20624,(0),null);
var inst_20626 = cljs.core.nth.call(null,inst_20624,(1),null);
var state_20734__$1 = (function (){var statearr_20806 = state_20734;
(statearr_20806[(26)] = inst_20625);

return statearr_20806;
})();
if(cljs.core.truth_(inst_20626)){
var statearr_20807_20870 = state_20734__$1;
(statearr_20807_20870[(1)] = (13));

} else {
var statearr_20808_20871 = state_20734__$1;
(statearr_20808_20871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (18))){
var inst_20659 = (state_20734[(2)]);
var state_20734__$1 = state_20734;
var statearr_20809_20872 = state_20734__$1;
(statearr_20809_20872[(2)] = inst_20659);

(statearr_20809_20872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (42))){
var state_20734__$1 = state_20734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20734__$1,(45),dchan);
} else {
if((state_val_20735 === (37))){
var inst_20693 = (state_20734[(25)]);
var inst_20702 = (state_20734[(23)]);
var inst_20606 = (state_20734[(12)]);
var inst_20702__$1 = cljs.core.first.call(null,inst_20693);
var inst_20703 = cljs.core.async.put_BANG_.call(null,inst_20702__$1,inst_20606,done);
var state_20734__$1 = (function (){var statearr_20810 = state_20734;
(statearr_20810[(23)] = inst_20702__$1);

return statearr_20810;
})();
if(cljs.core.truth_(inst_20703)){
var statearr_20811_20873 = state_20734__$1;
(statearr_20811_20873[(1)] = (39));

} else {
var statearr_20812_20874 = state_20734__$1;
(statearr_20812_20874[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20735 === (8))){
var inst_20617 = (state_20734[(13)]);
var inst_20618 = (state_20734[(16)]);
var inst_20620 = (inst_20618 < inst_20617);
var inst_20621 = inst_20620;
var state_20734__$1 = state_20734;
if(cljs.core.truth_(inst_20621)){
var statearr_20813_20875 = state_20734__$1;
(statearr_20813_20875[(1)] = (10));

} else {
var statearr_20814_20876 = state_20734__$1;
(statearr_20814_20876[(1)] = (11));

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
});})(c__19515__auto___20822,cs,m,dchan,dctr,done))
;
return ((function (switch__19403__auto__,c__19515__auto___20822,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19404__auto__ = null;
var cljs$core$async$mult_$_state_machine__19404__auto____0 = (function (){
var statearr_20818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20818[(0)] = cljs$core$async$mult_$_state_machine__19404__auto__);

(statearr_20818[(1)] = (1));

return statearr_20818;
});
var cljs$core$async$mult_$_state_machine__19404__auto____1 = (function (state_20734){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_20734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e20819){if((e20819 instanceof Object)){
var ex__19407__auto__ = e20819;
var statearr_20820_20877 = state_20734;
(statearr_20820_20877[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20878 = state_20734;
state_20734 = G__20878;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19404__auto__ = function(state_20734){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19404__auto____1.call(this,state_20734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19404__auto____0;
cljs$core$async$mult_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19404__auto____1;
return cljs$core$async$mult_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___20822,cs,m,dchan,dctr,done))
})();
var state__19517__auto__ = (function (){var statearr_20821 = f__19516__auto__.call(null);
(statearr_20821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___20822);

return statearr_20821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___20822,cs,m,dchan,dctr,done))
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
var args20879 = [];
var len__18406__auto___20882 = arguments.length;
var i__18407__auto___20883 = (0);
while(true){
if((i__18407__auto___20883 < len__18406__auto___20882)){
args20879.push((arguments[i__18407__auto___20883]));

var G__20884 = (i__18407__auto___20883 + (1));
i__18407__auto___20883 = G__20884;
continue;
} else {
}
break;
}

var G__20881 = args20879.length;
switch (G__20881) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20879.length)].join('')));

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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m,ch);
} else {
var m__18004__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m,ch);
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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m,ch);
} else {
var m__18004__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m,ch);
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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m);
} else {
var m__18004__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m);
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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m,state_map);
} else {
var m__18004__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m,state_map);
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
var x__18003__auto__ = (((m == null))?null:m);
var m__18004__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,m,mode);
} else {
var m__18004__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18413__auto__ = [];
var len__18406__auto___20896 = arguments.length;
var i__18407__auto___20897 = (0);
while(true){
if((i__18407__auto___20897 < len__18406__auto___20896)){
args__18413__auto__.push((arguments[i__18407__auto___20897]));

var G__20898 = (i__18407__auto___20897 + (1));
i__18407__auto___20897 = G__20898;
continue;
} else {
}
break;
}

var argseq__18414__auto__ = ((((3) < args__18413__auto__.length))?(new cljs.core.IndexedSeq(args__18413__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18414__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20890){
var map__20891 = p__20890;
var map__20891__$1 = ((((!((map__20891 == null)))?((((map__20891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20891):map__20891);
var opts = map__20891__$1;
var statearr_20893_20899 = state;
(statearr_20893_20899[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20891,map__20891__$1,opts){
return (function (val){
var statearr_20894_20900 = state;
(statearr_20894_20900[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20891,map__20891__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20895_20901 = state;
(statearr_20895_20901[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20886){
var G__20887 = cljs.core.first.call(null,seq20886);
var seq20886__$1 = cljs.core.next.call(null,seq20886);
var G__20888 = cljs.core.first.call(null,seq20886__$1);
var seq20886__$2 = cljs.core.next.call(null,seq20886__$1);
var G__20889 = cljs.core.first.call(null,seq20886__$2);
var seq20886__$3 = cljs.core.next.call(null,seq20886__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20887,G__20888,G__20889,seq20886__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21065 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21066){
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
this.meta21066 = meta21066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21067,meta21066__$1){
var self__ = this;
var _21067__$1 = this;
return (new cljs.core.async.t_cljs$core$async21065(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21066__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21067){
var self__ = this;
var _21067__$1 = this;
return self__.meta21066;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21066","meta21066",1941662752,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21065";

cljs.core.async.t_cljs$core$async21065.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async21065");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21065 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21065(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21066){
return (new cljs.core.async.t_cljs$core$async21065(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21066));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21065(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19515__auto___21228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___21228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___21228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21165){
var state_val_21166 = (state_21165[(1)]);
if((state_val_21166 === (7))){
var inst_21083 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
var statearr_21167_21230 = state_21165__$1;
(statearr_21167_21230[(2)] = inst_21083);

(statearr_21167_21230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (20))){
var inst_21095 = (state_21165[(7)]);
var state_21165__$1 = state_21165;
var statearr_21168_21231 = state_21165__$1;
(statearr_21168_21231[(2)] = inst_21095);

(statearr_21168_21231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (27))){
var state_21165__$1 = state_21165;
var statearr_21169_21232 = state_21165__$1;
(statearr_21169_21232[(2)] = null);

(statearr_21169_21232[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (1))){
var inst_21071 = (state_21165[(8)]);
var inst_21071__$1 = calc_state.call(null);
var inst_21073 = (inst_21071__$1 == null);
var inst_21074 = cljs.core.not.call(null,inst_21073);
var state_21165__$1 = (function (){var statearr_21170 = state_21165;
(statearr_21170[(8)] = inst_21071__$1);

return statearr_21170;
})();
if(inst_21074){
var statearr_21171_21233 = state_21165__$1;
(statearr_21171_21233[(1)] = (2));

} else {
var statearr_21172_21234 = state_21165__$1;
(statearr_21172_21234[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (24))){
var inst_21139 = (state_21165[(9)]);
var inst_21118 = (state_21165[(10)]);
var inst_21125 = (state_21165[(11)]);
var inst_21139__$1 = inst_21118.call(null,inst_21125);
var state_21165__$1 = (function (){var statearr_21173 = state_21165;
(statearr_21173[(9)] = inst_21139__$1);

return statearr_21173;
})();
if(cljs.core.truth_(inst_21139__$1)){
var statearr_21174_21235 = state_21165__$1;
(statearr_21174_21235[(1)] = (29));

} else {
var statearr_21175_21236 = state_21165__$1;
(statearr_21175_21236[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (4))){
var inst_21086 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
if(cljs.core.truth_(inst_21086)){
var statearr_21176_21237 = state_21165__$1;
(statearr_21176_21237[(1)] = (8));

} else {
var statearr_21177_21238 = state_21165__$1;
(statearr_21177_21238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (15))){
var inst_21112 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
if(cljs.core.truth_(inst_21112)){
var statearr_21178_21239 = state_21165__$1;
(statearr_21178_21239[(1)] = (19));

} else {
var statearr_21179_21240 = state_21165__$1;
(statearr_21179_21240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (21))){
var inst_21117 = (state_21165[(12)]);
var inst_21117__$1 = (state_21165[(2)]);
var inst_21118 = cljs.core.get.call(null,inst_21117__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21119 = cljs.core.get.call(null,inst_21117__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21120 = cljs.core.get.call(null,inst_21117__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21165__$1 = (function (){var statearr_21180 = state_21165;
(statearr_21180[(10)] = inst_21118);

(statearr_21180[(13)] = inst_21119);

(statearr_21180[(12)] = inst_21117__$1);

return statearr_21180;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21165__$1,(22),inst_21120);
} else {
if((state_val_21166 === (31))){
var inst_21147 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
if(cljs.core.truth_(inst_21147)){
var statearr_21181_21241 = state_21165__$1;
(statearr_21181_21241[(1)] = (32));

} else {
var statearr_21182_21242 = state_21165__$1;
(statearr_21182_21242[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (32))){
var inst_21124 = (state_21165[(14)]);
var state_21165__$1 = state_21165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21165__$1,(35),out,inst_21124);
} else {
if((state_val_21166 === (33))){
var inst_21117 = (state_21165[(12)]);
var inst_21095 = inst_21117;
var state_21165__$1 = (function (){var statearr_21183 = state_21165;
(statearr_21183[(7)] = inst_21095);

return statearr_21183;
})();
var statearr_21184_21243 = state_21165__$1;
(statearr_21184_21243[(2)] = null);

(statearr_21184_21243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (13))){
var inst_21095 = (state_21165[(7)]);
var inst_21102 = inst_21095.cljs$lang$protocol_mask$partition0$;
var inst_21103 = (inst_21102 & (64));
var inst_21104 = inst_21095.cljs$core$ISeq$;
var inst_21105 = (inst_21103) || (inst_21104);
var state_21165__$1 = state_21165;
if(cljs.core.truth_(inst_21105)){
var statearr_21185_21244 = state_21165__$1;
(statearr_21185_21244[(1)] = (16));

} else {
var statearr_21186_21245 = state_21165__$1;
(statearr_21186_21245[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (22))){
var inst_21125 = (state_21165[(11)]);
var inst_21124 = (state_21165[(14)]);
var inst_21123 = (state_21165[(2)]);
var inst_21124__$1 = cljs.core.nth.call(null,inst_21123,(0),null);
var inst_21125__$1 = cljs.core.nth.call(null,inst_21123,(1),null);
var inst_21126 = (inst_21124__$1 == null);
var inst_21127 = cljs.core._EQ_.call(null,inst_21125__$1,change);
var inst_21128 = (inst_21126) || (inst_21127);
var state_21165__$1 = (function (){var statearr_21187 = state_21165;
(statearr_21187[(11)] = inst_21125__$1);

(statearr_21187[(14)] = inst_21124__$1);

return statearr_21187;
})();
if(cljs.core.truth_(inst_21128)){
var statearr_21188_21246 = state_21165__$1;
(statearr_21188_21246[(1)] = (23));

} else {
var statearr_21189_21247 = state_21165__$1;
(statearr_21189_21247[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (36))){
var inst_21117 = (state_21165[(12)]);
var inst_21095 = inst_21117;
var state_21165__$1 = (function (){var statearr_21190 = state_21165;
(statearr_21190[(7)] = inst_21095);

return statearr_21190;
})();
var statearr_21191_21248 = state_21165__$1;
(statearr_21191_21248[(2)] = null);

(statearr_21191_21248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (29))){
var inst_21139 = (state_21165[(9)]);
var state_21165__$1 = state_21165;
var statearr_21192_21249 = state_21165__$1;
(statearr_21192_21249[(2)] = inst_21139);

(statearr_21192_21249[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (6))){
var state_21165__$1 = state_21165;
var statearr_21193_21250 = state_21165__$1;
(statearr_21193_21250[(2)] = false);

(statearr_21193_21250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (28))){
var inst_21135 = (state_21165[(2)]);
var inst_21136 = calc_state.call(null);
var inst_21095 = inst_21136;
var state_21165__$1 = (function (){var statearr_21194 = state_21165;
(statearr_21194[(7)] = inst_21095);

(statearr_21194[(15)] = inst_21135);

return statearr_21194;
})();
var statearr_21195_21251 = state_21165__$1;
(statearr_21195_21251[(2)] = null);

(statearr_21195_21251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (25))){
var inst_21161 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
var statearr_21196_21252 = state_21165__$1;
(statearr_21196_21252[(2)] = inst_21161);

(statearr_21196_21252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (34))){
var inst_21159 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
var statearr_21197_21253 = state_21165__$1;
(statearr_21197_21253[(2)] = inst_21159);

(statearr_21197_21253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (17))){
var state_21165__$1 = state_21165;
var statearr_21198_21254 = state_21165__$1;
(statearr_21198_21254[(2)] = false);

(statearr_21198_21254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (3))){
var state_21165__$1 = state_21165;
var statearr_21199_21255 = state_21165__$1;
(statearr_21199_21255[(2)] = false);

(statearr_21199_21255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (12))){
var inst_21163 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21165__$1,inst_21163);
} else {
if((state_val_21166 === (2))){
var inst_21071 = (state_21165[(8)]);
var inst_21076 = inst_21071.cljs$lang$protocol_mask$partition0$;
var inst_21077 = (inst_21076 & (64));
var inst_21078 = inst_21071.cljs$core$ISeq$;
var inst_21079 = (inst_21077) || (inst_21078);
var state_21165__$1 = state_21165;
if(cljs.core.truth_(inst_21079)){
var statearr_21200_21256 = state_21165__$1;
(statearr_21200_21256[(1)] = (5));

} else {
var statearr_21201_21257 = state_21165__$1;
(statearr_21201_21257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (23))){
var inst_21124 = (state_21165[(14)]);
var inst_21130 = (inst_21124 == null);
var state_21165__$1 = state_21165;
if(cljs.core.truth_(inst_21130)){
var statearr_21202_21258 = state_21165__$1;
(statearr_21202_21258[(1)] = (26));

} else {
var statearr_21203_21259 = state_21165__$1;
(statearr_21203_21259[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (35))){
var inst_21150 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
if(cljs.core.truth_(inst_21150)){
var statearr_21204_21260 = state_21165__$1;
(statearr_21204_21260[(1)] = (36));

} else {
var statearr_21205_21261 = state_21165__$1;
(statearr_21205_21261[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (19))){
var inst_21095 = (state_21165[(7)]);
var inst_21114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21095);
var state_21165__$1 = state_21165;
var statearr_21206_21262 = state_21165__$1;
(statearr_21206_21262[(2)] = inst_21114);

(statearr_21206_21262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (11))){
var inst_21095 = (state_21165[(7)]);
var inst_21099 = (inst_21095 == null);
var inst_21100 = cljs.core.not.call(null,inst_21099);
var state_21165__$1 = state_21165;
if(inst_21100){
var statearr_21207_21263 = state_21165__$1;
(statearr_21207_21263[(1)] = (13));

} else {
var statearr_21208_21264 = state_21165__$1;
(statearr_21208_21264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (9))){
var inst_21071 = (state_21165[(8)]);
var state_21165__$1 = state_21165;
var statearr_21209_21265 = state_21165__$1;
(statearr_21209_21265[(2)] = inst_21071);

(statearr_21209_21265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (5))){
var state_21165__$1 = state_21165;
var statearr_21210_21266 = state_21165__$1;
(statearr_21210_21266[(2)] = true);

(statearr_21210_21266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (14))){
var state_21165__$1 = state_21165;
var statearr_21211_21267 = state_21165__$1;
(statearr_21211_21267[(2)] = false);

(statearr_21211_21267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (26))){
var inst_21125 = (state_21165[(11)]);
var inst_21132 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21125);
var state_21165__$1 = state_21165;
var statearr_21212_21268 = state_21165__$1;
(statearr_21212_21268[(2)] = inst_21132);

(statearr_21212_21268[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (16))){
var state_21165__$1 = state_21165;
var statearr_21213_21269 = state_21165__$1;
(statearr_21213_21269[(2)] = true);

(statearr_21213_21269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (38))){
var inst_21155 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
var statearr_21214_21270 = state_21165__$1;
(statearr_21214_21270[(2)] = inst_21155);

(statearr_21214_21270[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (30))){
var inst_21118 = (state_21165[(10)]);
var inst_21125 = (state_21165[(11)]);
var inst_21119 = (state_21165[(13)]);
var inst_21142 = cljs.core.empty_QMARK_.call(null,inst_21118);
var inst_21143 = inst_21119.call(null,inst_21125);
var inst_21144 = cljs.core.not.call(null,inst_21143);
var inst_21145 = (inst_21142) && (inst_21144);
var state_21165__$1 = state_21165;
var statearr_21215_21271 = state_21165__$1;
(statearr_21215_21271[(2)] = inst_21145);

(statearr_21215_21271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (10))){
var inst_21071 = (state_21165[(8)]);
var inst_21091 = (state_21165[(2)]);
var inst_21092 = cljs.core.get.call(null,inst_21091,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21093 = cljs.core.get.call(null,inst_21091,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21094 = cljs.core.get.call(null,inst_21091,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21095 = inst_21071;
var state_21165__$1 = (function (){var statearr_21216 = state_21165;
(statearr_21216[(16)] = inst_21094);

(statearr_21216[(7)] = inst_21095);

(statearr_21216[(17)] = inst_21092);

(statearr_21216[(18)] = inst_21093);

return statearr_21216;
})();
var statearr_21217_21272 = state_21165__$1;
(statearr_21217_21272[(2)] = null);

(statearr_21217_21272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (18))){
var inst_21109 = (state_21165[(2)]);
var state_21165__$1 = state_21165;
var statearr_21218_21273 = state_21165__$1;
(statearr_21218_21273[(2)] = inst_21109);

(statearr_21218_21273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (37))){
var state_21165__$1 = state_21165;
var statearr_21219_21274 = state_21165__$1;
(statearr_21219_21274[(2)] = null);

(statearr_21219_21274[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21166 === (8))){
var inst_21071 = (state_21165[(8)]);
var inst_21088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21071);
var state_21165__$1 = state_21165;
var statearr_21220_21275 = state_21165__$1;
(statearr_21220_21275[(2)] = inst_21088);

(statearr_21220_21275[(1)] = (10));


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
});})(c__19515__auto___21228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19403__auto__,c__19515__auto___21228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19404__auto__ = null;
var cljs$core$async$mix_$_state_machine__19404__auto____0 = (function (){
var statearr_21224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21224[(0)] = cljs$core$async$mix_$_state_machine__19404__auto__);

(statearr_21224[(1)] = (1));

return statearr_21224;
});
var cljs$core$async$mix_$_state_machine__19404__auto____1 = (function (state_21165){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_21165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e21225){if((e21225 instanceof Object)){
var ex__19407__auto__ = e21225;
var statearr_21226_21276 = state_21165;
(statearr_21226_21276[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21277 = state_21165;
state_21165 = G__21277;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19404__auto__ = function(state_21165){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19404__auto____1.call(this,state_21165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19404__auto____0;
cljs$core$async$mix_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19404__auto____1;
return cljs$core$async$mix_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___21228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19517__auto__ = (function (){var statearr_21227 = f__19516__auto__.call(null);
(statearr_21227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___21228);

return statearr_21227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___21228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18003__auto__ = (((p == null))?null:p);
var m__18004__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18004__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__18003__auto__ = (((p == null))?null:p);
var m__18004__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,p,v,ch);
} else {
var m__18004__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21278 = [];
var len__18406__auto___21281 = arguments.length;
var i__18407__auto___21282 = (0);
while(true){
if((i__18407__auto___21282 < len__18406__auto___21281)){
args21278.push((arguments[i__18407__auto___21282]));

var G__21283 = (i__18407__auto___21282 + (1));
i__18407__auto___21282 = G__21283;
continue;
} else {
}
break;
}

var G__21280 = args21278.length;
switch (G__21280) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21278.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18003__auto__ = (((p == null))?null:p);
var m__18004__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,p);
} else {
var m__18004__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,p);
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
var x__18003__auto__ = (((p == null))?null:p);
var m__18004__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18003__auto__)]);
if(!((m__18004__auto__ == null))){
return m__18004__auto__.call(null,p,v);
} else {
var m__18004__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18004__auto____$1 == null))){
return m__18004__auto____$1.call(null,p,v);
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
var args21286 = [];
var len__18406__auto___21411 = arguments.length;
var i__18407__auto___21412 = (0);
while(true){
if((i__18407__auto___21412 < len__18406__auto___21411)){
args21286.push((arguments[i__18407__auto___21412]));

var G__21413 = (i__18407__auto___21412 + (1));
i__18407__auto___21412 = G__21413;
continue;
} else {
}
break;
}

var G__21288 = args21286.length;
switch (G__21288) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21286.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17348__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17348__auto__,mults){
return (function (p1__21285_SHARP_){
if(cljs.core.truth_(p1__21285_SHARP_.call(null,topic))){
return p1__21285_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21285_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17348__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21289 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21290){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21290 = meta21290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21291,meta21290__$1){
var self__ = this;
var _21291__$1 = this;
return (new cljs.core.async.t_cljs$core$async21289(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21290__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21291){
var self__ = this;
var _21291__$1 = this;
return self__.meta21290;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21290","meta21290",2062708232,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21289";

cljs.core.async.t_cljs$core$async21289.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async21289");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21289 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21289(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21290){
return (new cljs.core.async.t_cljs$core$async21289(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21290));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21289(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19515__auto___21415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___21415,mults,ensure_mult,p){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___21415,mults,ensure_mult,p){
return (function (state_21363){
var state_val_21364 = (state_21363[(1)]);
if((state_val_21364 === (7))){
var inst_21359 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
var statearr_21365_21416 = state_21363__$1;
(statearr_21365_21416[(2)] = inst_21359);

(statearr_21365_21416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (20))){
var state_21363__$1 = state_21363;
var statearr_21366_21417 = state_21363__$1;
(statearr_21366_21417[(2)] = null);

(statearr_21366_21417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (1))){
var state_21363__$1 = state_21363;
var statearr_21367_21418 = state_21363__$1;
(statearr_21367_21418[(2)] = null);

(statearr_21367_21418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (24))){
var inst_21342 = (state_21363[(7)]);
var inst_21351 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21342);
var state_21363__$1 = state_21363;
var statearr_21368_21419 = state_21363__$1;
(statearr_21368_21419[(2)] = inst_21351);

(statearr_21368_21419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (4))){
var inst_21294 = (state_21363[(8)]);
var inst_21294__$1 = (state_21363[(2)]);
var inst_21295 = (inst_21294__$1 == null);
var state_21363__$1 = (function (){var statearr_21369 = state_21363;
(statearr_21369[(8)] = inst_21294__$1);

return statearr_21369;
})();
if(cljs.core.truth_(inst_21295)){
var statearr_21370_21420 = state_21363__$1;
(statearr_21370_21420[(1)] = (5));

} else {
var statearr_21371_21421 = state_21363__$1;
(statearr_21371_21421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (15))){
var inst_21336 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
var statearr_21372_21422 = state_21363__$1;
(statearr_21372_21422[(2)] = inst_21336);

(statearr_21372_21422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (21))){
var inst_21356 = (state_21363[(2)]);
var state_21363__$1 = (function (){var statearr_21373 = state_21363;
(statearr_21373[(9)] = inst_21356);

return statearr_21373;
})();
var statearr_21374_21423 = state_21363__$1;
(statearr_21374_21423[(2)] = null);

(statearr_21374_21423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (13))){
var inst_21318 = (state_21363[(10)]);
var inst_21320 = cljs.core.chunked_seq_QMARK_.call(null,inst_21318);
var state_21363__$1 = state_21363;
if(inst_21320){
var statearr_21375_21424 = state_21363__$1;
(statearr_21375_21424[(1)] = (16));

} else {
var statearr_21376_21425 = state_21363__$1;
(statearr_21376_21425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (22))){
var inst_21348 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
if(cljs.core.truth_(inst_21348)){
var statearr_21377_21426 = state_21363__$1;
(statearr_21377_21426[(1)] = (23));

} else {
var statearr_21378_21427 = state_21363__$1;
(statearr_21378_21427[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (6))){
var inst_21342 = (state_21363[(7)]);
var inst_21344 = (state_21363[(11)]);
var inst_21294 = (state_21363[(8)]);
var inst_21342__$1 = topic_fn.call(null,inst_21294);
var inst_21343 = cljs.core.deref.call(null,mults);
var inst_21344__$1 = cljs.core.get.call(null,inst_21343,inst_21342__$1);
var state_21363__$1 = (function (){var statearr_21379 = state_21363;
(statearr_21379[(7)] = inst_21342__$1);

(statearr_21379[(11)] = inst_21344__$1);

return statearr_21379;
})();
if(cljs.core.truth_(inst_21344__$1)){
var statearr_21380_21428 = state_21363__$1;
(statearr_21380_21428[(1)] = (19));

} else {
var statearr_21381_21429 = state_21363__$1;
(statearr_21381_21429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (25))){
var inst_21353 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
var statearr_21382_21430 = state_21363__$1;
(statearr_21382_21430[(2)] = inst_21353);

(statearr_21382_21430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (17))){
var inst_21318 = (state_21363[(10)]);
var inst_21327 = cljs.core.first.call(null,inst_21318);
var inst_21328 = cljs.core.async.muxch_STAR_.call(null,inst_21327);
var inst_21329 = cljs.core.async.close_BANG_.call(null,inst_21328);
var inst_21330 = cljs.core.next.call(null,inst_21318);
var inst_21304 = inst_21330;
var inst_21305 = null;
var inst_21306 = (0);
var inst_21307 = (0);
var state_21363__$1 = (function (){var statearr_21383 = state_21363;
(statearr_21383[(12)] = inst_21305);

(statearr_21383[(13)] = inst_21329);

(statearr_21383[(14)] = inst_21307);

(statearr_21383[(15)] = inst_21304);

(statearr_21383[(16)] = inst_21306);

return statearr_21383;
})();
var statearr_21384_21431 = state_21363__$1;
(statearr_21384_21431[(2)] = null);

(statearr_21384_21431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (3))){
var inst_21361 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21363__$1,inst_21361);
} else {
if((state_val_21364 === (12))){
var inst_21338 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
var statearr_21385_21432 = state_21363__$1;
(statearr_21385_21432[(2)] = inst_21338);

(statearr_21385_21432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (2))){
var state_21363__$1 = state_21363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21363__$1,(4),ch);
} else {
if((state_val_21364 === (23))){
var state_21363__$1 = state_21363;
var statearr_21386_21433 = state_21363__$1;
(statearr_21386_21433[(2)] = null);

(statearr_21386_21433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (19))){
var inst_21344 = (state_21363[(11)]);
var inst_21294 = (state_21363[(8)]);
var inst_21346 = cljs.core.async.muxch_STAR_.call(null,inst_21344);
var state_21363__$1 = state_21363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21363__$1,(22),inst_21346,inst_21294);
} else {
if((state_val_21364 === (11))){
var inst_21304 = (state_21363[(15)]);
var inst_21318 = (state_21363[(10)]);
var inst_21318__$1 = cljs.core.seq.call(null,inst_21304);
var state_21363__$1 = (function (){var statearr_21387 = state_21363;
(statearr_21387[(10)] = inst_21318__$1);

return statearr_21387;
})();
if(inst_21318__$1){
var statearr_21388_21434 = state_21363__$1;
(statearr_21388_21434[(1)] = (13));

} else {
var statearr_21389_21435 = state_21363__$1;
(statearr_21389_21435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (9))){
var inst_21340 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
var statearr_21390_21436 = state_21363__$1;
(statearr_21390_21436[(2)] = inst_21340);

(statearr_21390_21436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (5))){
var inst_21301 = cljs.core.deref.call(null,mults);
var inst_21302 = cljs.core.vals.call(null,inst_21301);
var inst_21303 = cljs.core.seq.call(null,inst_21302);
var inst_21304 = inst_21303;
var inst_21305 = null;
var inst_21306 = (0);
var inst_21307 = (0);
var state_21363__$1 = (function (){var statearr_21391 = state_21363;
(statearr_21391[(12)] = inst_21305);

(statearr_21391[(14)] = inst_21307);

(statearr_21391[(15)] = inst_21304);

(statearr_21391[(16)] = inst_21306);

return statearr_21391;
})();
var statearr_21392_21437 = state_21363__$1;
(statearr_21392_21437[(2)] = null);

(statearr_21392_21437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (14))){
var state_21363__$1 = state_21363;
var statearr_21396_21438 = state_21363__$1;
(statearr_21396_21438[(2)] = null);

(statearr_21396_21438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (16))){
var inst_21318 = (state_21363[(10)]);
var inst_21322 = cljs.core.chunk_first.call(null,inst_21318);
var inst_21323 = cljs.core.chunk_rest.call(null,inst_21318);
var inst_21324 = cljs.core.count.call(null,inst_21322);
var inst_21304 = inst_21323;
var inst_21305 = inst_21322;
var inst_21306 = inst_21324;
var inst_21307 = (0);
var state_21363__$1 = (function (){var statearr_21397 = state_21363;
(statearr_21397[(12)] = inst_21305);

(statearr_21397[(14)] = inst_21307);

(statearr_21397[(15)] = inst_21304);

(statearr_21397[(16)] = inst_21306);

return statearr_21397;
})();
var statearr_21398_21439 = state_21363__$1;
(statearr_21398_21439[(2)] = null);

(statearr_21398_21439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (10))){
var inst_21305 = (state_21363[(12)]);
var inst_21307 = (state_21363[(14)]);
var inst_21304 = (state_21363[(15)]);
var inst_21306 = (state_21363[(16)]);
var inst_21312 = cljs.core._nth.call(null,inst_21305,inst_21307);
var inst_21313 = cljs.core.async.muxch_STAR_.call(null,inst_21312);
var inst_21314 = cljs.core.async.close_BANG_.call(null,inst_21313);
var inst_21315 = (inst_21307 + (1));
var tmp21393 = inst_21305;
var tmp21394 = inst_21304;
var tmp21395 = inst_21306;
var inst_21304__$1 = tmp21394;
var inst_21305__$1 = tmp21393;
var inst_21306__$1 = tmp21395;
var inst_21307__$1 = inst_21315;
var state_21363__$1 = (function (){var statearr_21399 = state_21363;
(statearr_21399[(12)] = inst_21305__$1);

(statearr_21399[(14)] = inst_21307__$1);

(statearr_21399[(17)] = inst_21314);

(statearr_21399[(15)] = inst_21304__$1);

(statearr_21399[(16)] = inst_21306__$1);

return statearr_21399;
})();
var statearr_21400_21440 = state_21363__$1;
(statearr_21400_21440[(2)] = null);

(statearr_21400_21440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (18))){
var inst_21333 = (state_21363[(2)]);
var state_21363__$1 = state_21363;
var statearr_21401_21441 = state_21363__$1;
(statearr_21401_21441[(2)] = inst_21333);

(statearr_21401_21441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21364 === (8))){
var inst_21307 = (state_21363[(14)]);
var inst_21306 = (state_21363[(16)]);
var inst_21309 = (inst_21307 < inst_21306);
var inst_21310 = inst_21309;
var state_21363__$1 = state_21363;
if(cljs.core.truth_(inst_21310)){
var statearr_21402_21442 = state_21363__$1;
(statearr_21402_21442[(1)] = (10));

} else {
var statearr_21403_21443 = state_21363__$1;
(statearr_21403_21443[(1)] = (11));

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
});})(c__19515__auto___21415,mults,ensure_mult,p))
;
return ((function (switch__19403__auto__,c__19515__auto___21415,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_21407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21407[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_21407[(1)] = (1));

return statearr_21407;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_21363){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_21363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e21408){if((e21408 instanceof Object)){
var ex__19407__auto__ = e21408;
var statearr_21409_21444 = state_21363;
(statearr_21409_21444[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21445 = state_21363;
state_21363 = G__21445;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_21363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_21363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___21415,mults,ensure_mult,p))
})();
var state__19517__auto__ = (function (){var statearr_21410 = f__19516__auto__.call(null);
(statearr_21410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___21415);

return statearr_21410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___21415,mults,ensure_mult,p))
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
var args21446 = [];
var len__18406__auto___21449 = arguments.length;
var i__18407__auto___21450 = (0);
while(true){
if((i__18407__auto___21450 < len__18406__auto___21449)){
args21446.push((arguments[i__18407__auto___21450]));

var G__21451 = (i__18407__auto___21450 + (1));
i__18407__auto___21450 = G__21451;
continue;
} else {
}
break;
}

var G__21448 = args21446.length;
switch (G__21448) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21446.length)].join('')));

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
var args21453 = [];
var len__18406__auto___21456 = arguments.length;
var i__18407__auto___21457 = (0);
while(true){
if((i__18407__auto___21457 < len__18406__auto___21456)){
args21453.push((arguments[i__18407__auto___21457]));

var G__21458 = (i__18407__auto___21457 + (1));
i__18407__auto___21457 = G__21458;
continue;
} else {
}
break;
}

var G__21455 = args21453.length;
switch (G__21455) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21453.length)].join('')));

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
var args21460 = [];
var len__18406__auto___21531 = arguments.length;
var i__18407__auto___21532 = (0);
while(true){
if((i__18407__auto___21532 < len__18406__auto___21531)){
args21460.push((arguments[i__18407__auto___21532]));

var G__21533 = (i__18407__auto___21532 + (1));
i__18407__auto___21532 = G__21533;
continue;
} else {
}
break;
}

var G__21462 = args21460.length;
switch (G__21462) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21460.length)].join('')));

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
})(chs__$1, out, cnt, rets, dchan, dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19515__auto___21535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___21535,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___21535,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21501){
var state_val_21502 = (state_21501[(1)]);
if((state_val_21502 === (7))){
var state_21501__$1 = state_21501;
var statearr_21503_21536 = state_21501__$1;
(statearr_21503_21536[(2)] = null);

(statearr_21503_21536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (1))){
var state_21501__$1 = state_21501;
var statearr_21504_21537 = state_21501__$1;
(statearr_21504_21537[(2)] = null);

(statearr_21504_21537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (4))){
var inst_21465 = (state_21501[(7)]);
var inst_21467 = (inst_21465 < cnt);
var state_21501__$1 = state_21501;
if(cljs.core.truth_(inst_21467)){
var statearr_21505_21538 = state_21501__$1;
(statearr_21505_21538[(1)] = (6));

} else {
var statearr_21506_21539 = state_21501__$1;
(statearr_21506_21539[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (15))){
var inst_21497 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21507_21540 = state_21501__$1;
(statearr_21507_21540[(2)] = inst_21497);

(statearr_21507_21540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (13))){
var inst_21490 = cljs.core.async.close_BANG_.call(null,out);
var state_21501__$1 = state_21501;
var statearr_21508_21541 = state_21501__$1;
(statearr_21508_21541[(2)] = inst_21490);

(statearr_21508_21541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (6))){
var state_21501__$1 = state_21501;
var statearr_21509_21542 = state_21501__$1;
(statearr_21509_21542[(2)] = null);

(statearr_21509_21542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (3))){
var inst_21499 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21501__$1,inst_21499);
} else {
if((state_val_21502 === (12))){
var inst_21487 = (state_21501[(8)]);
var inst_21487__$1 = (state_21501[(2)]);
var inst_21488 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21487__$1);
var state_21501__$1 = (function (){var statearr_21510 = state_21501;
(statearr_21510[(8)] = inst_21487__$1);

return statearr_21510;
})();
if(cljs.core.truth_(inst_21488)){
var statearr_21511_21543 = state_21501__$1;
(statearr_21511_21543[(1)] = (13));

} else {
var statearr_21512_21544 = state_21501__$1;
(statearr_21512_21544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (2))){
var inst_21464 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21465 = (0);
var state_21501__$1 = (function (){var statearr_21513 = state_21501;
(statearr_21513[(7)] = inst_21465);

(statearr_21513[(9)] = inst_21464);

return statearr_21513;
})();
var statearr_21514_21545 = state_21501__$1;
(statearr_21514_21545[(2)] = null);

(statearr_21514_21545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (11))){
var inst_21465 = (state_21501[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21501,(10),Object,null,(9));
var inst_21474 = chs__$1.call(null,inst_21465);
var inst_21475 = done.call(null,inst_21465);
var inst_21476 = cljs.core.async.take_BANG_.call(null,inst_21474,inst_21475);
var state_21501__$1 = state_21501;
var statearr_21515_21546 = state_21501__$1;
(statearr_21515_21546[(2)] = inst_21476);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (9))){
var inst_21465 = (state_21501[(7)]);
var inst_21478 = (state_21501[(2)]);
var inst_21479 = (inst_21465 + (1));
var inst_21465__$1 = inst_21479;
var state_21501__$1 = (function (){var statearr_21516 = state_21501;
(statearr_21516[(7)] = inst_21465__$1);

(statearr_21516[(10)] = inst_21478);

return statearr_21516;
})();
var statearr_21517_21547 = state_21501__$1;
(statearr_21517_21547[(2)] = null);

(statearr_21517_21547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (5))){
var inst_21485 = (state_21501[(2)]);
var state_21501__$1 = (function (){var statearr_21518 = state_21501;
(statearr_21518[(11)] = inst_21485);

return statearr_21518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21501__$1,(12),dchan);
} else {
if((state_val_21502 === (14))){
var inst_21487 = (state_21501[(8)]);
var inst_21492 = cljs.core.apply.call(null,f,inst_21487);
var state_21501__$1 = state_21501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21501__$1,(16),out,inst_21492);
} else {
if((state_val_21502 === (16))){
var inst_21494 = (state_21501[(2)]);
var state_21501__$1 = (function (){var statearr_21519 = state_21501;
(statearr_21519[(12)] = inst_21494);

return statearr_21519;
})();
var statearr_21520_21548 = state_21501__$1;
(statearr_21520_21548[(2)] = null);

(statearr_21520_21548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (10))){
var inst_21469 = (state_21501[(2)]);
var inst_21470 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21501__$1 = (function (){var statearr_21521 = state_21501;
(statearr_21521[(13)] = inst_21469);

return statearr_21521;
})();
var statearr_21522_21549 = state_21501__$1;
(statearr_21522_21549[(2)] = inst_21470);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21502 === (8))){
var inst_21483 = (state_21501[(2)]);
var state_21501__$1 = state_21501;
var statearr_21523_21550 = state_21501__$1;
(statearr_21523_21550[(2)] = inst_21483);

(statearr_21523_21550[(1)] = (5));


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
});})(c__19515__auto___21535,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19403__auto__,c__19515__auto___21535,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_21527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21527[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_21527[(1)] = (1));

return statearr_21527;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_21501){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_21501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e21528){if((e21528 instanceof Object)){
var ex__19407__auto__ = e21528;
var statearr_21529_21551 = state_21501;
(statearr_21529_21551[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21552 = state_21501;
state_21501 = G__21552;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_21501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_21501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___21535,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19517__auto__ = (function (){var statearr_21530 = f__19516__auto__.call(null);
(statearr_21530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___21535);

return statearr_21530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___21535,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21554 = [];
var len__18406__auto___21610 = arguments.length;
var i__18407__auto___21611 = (0);
while(true){
if((i__18407__auto___21611 < len__18406__auto___21610)){
args21554.push((arguments[i__18407__auto___21611]));

var G__21612 = (i__18407__auto___21611 + (1));
i__18407__auto___21611 = G__21612;
continue;
} else {
}
break;
}

var G__21556 = args21554.length;
switch (G__21556) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21554.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19515__auto___21614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___21614,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___21614,out){
return (function (state_21586){
var state_val_21587 = (state_21586[(1)]);
if((state_val_21587 === (7))){
var inst_21565 = (state_21586[(7)]);
var inst_21566 = (state_21586[(8)]);
var inst_21565__$1 = (state_21586[(2)]);
var inst_21566__$1 = cljs.core.nth.call(null,inst_21565__$1,(0),null);
var inst_21567 = cljs.core.nth.call(null,inst_21565__$1,(1),null);
var inst_21568 = (inst_21566__$1 == null);
var state_21586__$1 = (function (){var statearr_21588 = state_21586;
(statearr_21588[(7)] = inst_21565__$1);

(statearr_21588[(9)] = inst_21567);

(statearr_21588[(8)] = inst_21566__$1);

return statearr_21588;
})();
if(cljs.core.truth_(inst_21568)){
var statearr_21589_21615 = state_21586__$1;
(statearr_21589_21615[(1)] = (8));

} else {
var statearr_21590_21616 = state_21586__$1;
(statearr_21590_21616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (1))){
var inst_21557 = cljs.core.vec.call(null,chs);
var inst_21558 = inst_21557;
var state_21586__$1 = (function (){var statearr_21591 = state_21586;
(statearr_21591[(10)] = inst_21558);

return statearr_21591;
})();
var statearr_21592_21617 = state_21586__$1;
(statearr_21592_21617[(2)] = null);

(statearr_21592_21617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (4))){
var inst_21558 = (state_21586[(10)]);
var state_21586__$1 = state_21586;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21586__$1,(7),inst_21558);
} else {
if((state_val_21587 === (6))){
var inst_21582 = (state_21586[(2)]);
var state_21586__$1 = state_21586;
var statearr_21593_21618 = state_21586__$1;
(statearr_21593_21618[(2)] = inst_21582);

(statearr_21593_21618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (3))){
var inst_21584 = (state_21586[(2)]);
var state_21586__$1 = state_21586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21586__$1,inst_21584);
} else {
if((state_val_21587 === (2))){
var inst_21558 = (state_21586[(10)]);
var inst_21560 = cljs.core.count.call(null,inst_21558);
var inst_21561 = (inst_21560 > (0));
var state_21586__$1 = state_21586;
if(cljs.core.truth_(inst_21561)){
var statearr_21595_21619 = state_21586__$1;
(statearr_21595_21619[(1)] = (4));

} else {
var statearr_21596_21620 = state_21586__$1;
(statearr_21596_21620[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (11))){
var inst_21558 = (state_21586[(10)]);
var inst_21575 = (state_21586[(2)]);
var tmp21594 = inst_21558;
var inst_21558__$1 = tmp21594;
var state_21586__$1 = (function (){var statearr_21597 = state_21586;
(statearr_21597[(10)] = inst_21558__$1);

(statearr_21597[(11)] = inst_21575);

return statearr_21597;
})();
var statearr_21598_21621 = state_21586__$1;
(statearr_21598_21621[(2)] = null);

(statearr_21598_21621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (9))){
var inst_21566 = (state_21586[(8)]);
var state_21586__$1 = state_21586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21586__$1,(11),out,inst_21566);
} else {
if((state_val_21587 === (5))){
var inst_21580 = cljs.core.async.close_BANG_.call(null,out);
var state_21586__$1 = state_21586;
var statearr_21599_21622 = state_21586__$1;
(statearr_21599_21622[(2)] = inst_21580);

(statearr_21599_21622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (10))){
var inst_21578 = (state_21586[(2)]);
var state_21586__$1 = state_21586;
var statearr_21600_21623 = state_21586__$1;
(statearr_21600_21623[(2)] = inst_21578);

(statearr_21600_21623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (8))){
var inst_21565 = (state_21586[(7)]);
var inst_21558 = (state_21586[(10)]);
var inst_21567 = (state_21586[(9)]);
var inst_21566 = (state_21586[(8)]);
var inst_21570 = (function (){var cs = inst_21558;
var vec__21563 = inst_21565;
var v = inst_21566;
var c = inst_21567;
return ((function (cs,vec__21563,v,c,inst_21565,inst_21558,inst_21567,inst_21566,state_val_21587,c__19515__auto___21614,out){
return (function (p1__21553_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21553_SHARP_);
});
})(cs, vec__21563, v, c, inst_21565, inst_21558, inst_21567, inst_21566, state_val_21587, c__19515__auto___21614, out))
})();
var inst_21571 = cljs.core.filterv.call(null,inst_21570,inst_21558);
var inst_21558__$1 = inst_21571;
var state_21586__$1 = (function (){var statearr_21601 = state_21586;
(statearr_21601[(10)] = inst_21558__$1);

return statearr_21601;
})();
var statearr_21602_21624 = state_21586__$1;
(statearr_21602_21624[(2)] = null);

(statearr_21602_21624[(1)] = (2));


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
});})(c__19515__auto___21614,out))
;
return ((function (switch__19403__auto__,c__19515__auto___21614,out){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_21606 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21606[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_21606[(1)] = (1));

return statearr_21606;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_21586){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_21586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e21607){if((e21607 instanceof Object)){
var ex__19407__auto__ = e21607;
var statearr_21608_21625 = state_21586;
(statearr_21608_21625[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21626 = state_21586;
state_21586 = G__21626;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_21586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_21586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___21614,out))
})();
var state__19517__auto__ = (function (){var statearr_21609 = f__19516__auto__.call(null);
(statearr_21609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___21614);

return statearr_21609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___21614,out))
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
var args21627 = [];
var len__18406__auto___21676 = arguments.length;
var i__18407__auto___21677 = (0);
while(true){
if((i__18407__auto___21677 < len__18406__auto___21676)){
args21627.push((arguments[i__18407__auto___21677]));

var G__21678 = (i__18407__auto___21677 + (1));
i__18407__auto___21677 = G__21678;
continue;
} else {
}
break;
}

var G__21629 = args21627.length;
switch (G__21629) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21627.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19515__auto___21680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___21680,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___21680,out){
return (function (state_21653){
var state_val_21654 = (state_21653[(1)]);
if((state_val_21654 === (7))){
var inst_21635 = (state_21653[(7)]);
var inst_21635__$1 = (state_21653[(2)]);
var inst_21636 = (inst_21635__$1 == null);
var inst_21637 = cljs.core.not.call(null,inst_21636);
var state_21653__$1 = (function (){var statearr_21655 = state_21653;
(statearr_21655[(7)] = inst_21635__$1);

return statearr_21655;
})();
if(inst_21637){
var statearr_21656_21681 = state_21653__$1;
(statearr_21656_21681[(1)] = (8));

} else {
var statearr_21657_21682 = state_21653__$1;
(statearr_21657_21682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (1))){
var inst_21630 = (0);
var state_21653__$1 = (function (){var statearr_21658 = state_21653;
(statearr_21658[(8)] = inst_21630);

return statearr_21658;
})();
var statearr_21659_21683 = state_21653__$1;
(statearr_21659_21683[(2)] = null);

(statearr_21659_21683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (4))){
var state_21653__$1 = state_21653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21653__$1,(7),ch);
} else {
if((state_val_21654 === (6))){
var inst_21648 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
var statearr_21660_21684 = state_21653__$1;
(statearr_21660_21684[(2)] = inst_21648);

(statearr_21660_21684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (3))){
var inst_21650 = (state_21653[(2)]);
var inst_21651 = cljs.core.async.close_BANG_.call(null,out);
var state_21653__$1 = (function (){var statearr_21661 = state_21653;
(statearr_21661[(9)] = inst_21650);

return statearr_21661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21653__$1,inst_21651);
} else {
if((state_val_21654 === (2))){
var inst_21630 = (state_21653[(8)]);
var inst_21632 = (inst_21630 < n);
var state_21653__$1 = state_21653;
if(cljs.core.truth_(inst_21632)){
var statearr_21662_21685 = state_21653__$1;
(statearr_21662_21685[(1)] = (4));

} else {
var statearr_21663_21686 = state_21653__$1;
(statearr_21663_21686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (11))){
var inst_21630 = (state_21653[(8)]);
var inst_21640 = (state_21653[(2)]);
var inst_21641 = (inst_21630 + (1));
var inst_21630__$1 = inst_21641;
var state_21653__$1 = (function (){var statearr_21664 = state_21653;
(statearr_21664[(10)] = inst_21640);

(statearr_21664[(8)] = inst_21630__$1);

return statearr_21664;
})();
var statearr_21665_21687 = state_21653__$1;
(statearr_21665_21687[(2)] = null);

(statearr_21665_21687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (9))){
var state_21653__$1 = state_21653;
var statearr_21666_21688 = state_21653__$1;
(statearr_21666_21688[(2)] = null);

(statearr_21666_21688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (5))){
var state_21653__$1 = state_21653;
var statearr_21667_21689 = state_21653__$1;
(statearr_21667_21689[(2)] = null);

(statearr_21667_21689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (10))){
var inst_21645 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
var statearr_21668_21690 = state_21653__$1;
(statearr_21668_21690[(2)] = inst_21645);

(statearr_21668_21690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (8))){
var inst_21635 = (state_21653[(7)]);
var state_21653__$1 = state_21653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21653__$1,(11),out,inst_21635);
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
});})(c__19515__auto___21680,out))
;
return ((function (switch__19403__auto__,c__19515__auto___21680,out){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_21672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21672[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_21672[(1)] = (1));

return statearr_21672;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_21653){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_21653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e21673){if((e21673 instanceof Object)){
var ex__19407__auto__ = e21673;
var statearr_21674_21691 = state_21653;
(statearr_21674_21691[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21692 = state_21653;
state_21653 = G__21692;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_21653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_21653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___21680,out))
})();
var state__19517__auto__ = (function (){var statearr_21675 = f__19516__auto__.call(null);
(statearr_21675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___21680);

return statearr_21675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___21680,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21700 = (function (map_LT_,f,ch,meta21701){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21701 = meta21701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21702,meta21701__$1){
var self__ = this;
var _21702__$1 = this;
return (new cljs.core.async.t_cljs$core$async21700(self__.map_LT_,self__.f,self__.ch,meta21701__$1));
});

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21702){
var self__ = this;
var _21702__$1 = this;
return self__.meta21701;
});

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21703 = (function (map_LT_,f,ch,meta21701,_,fn1,meta21704){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21701 = meta21701;
this._ = _;
this.fn1 = fn1;
this.meta21704 = meta21704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async21703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21705,meta21704__$1){
var self__ = this;
var _21705__$1 = this;
return (new cljs.core.async.t_cljs$core$async21703(self__.map_LT_,self__.f,self__.ch,self__.meta21701,self__._,self__.fn1,meta21704__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21705){
var self__ = this;
var _21705__$1 = this;
return self__.meta21704;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21703.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21693_SHARP_){
return f1.call(null,(((p1__21693_SHARP_ == null))?null:self__.f.call(null,p1__21693_SHARP_)));
});
})(f1, ___$2, ___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21703.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21701","meta21701",574443769,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21700","cljs.core.async/t_cljs$core$async21700",1408754284,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21704","meta21704",-1176827702,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21703";

cljs.core.async.t_cljs$core$async21703.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async21703");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21703 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21703(map_LT___$1,f__$1,ch__$1,meta21701__$1,___$2,fn1__$1,meta21704){
return (new cljs.core.async.t_cljs$core$async21703(map_LT___$1,f__$1,ch__$1,meta21701__$1,___$2,fn1__$1,meta21704));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21703(self__.map_LT_,self__.f,self__.ch,self__.meta21701,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17336__auto__ = ret;
if(cljs.core.truth_(and__17336__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17336__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21701","meta21701",574443769,null)], null);
});

cljs.core.async.t_cljs$core$async21700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21700";

cljs.core.async.t_cljs$core$async21700.cljs$lang$ctorPrWriter = (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async21700");
});

cljs.core.async.__GT_t_cljs$core$async21700 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21700(map_LT___$1,f__$1,ch__$1,meta21701){
return (new cljs.core.async.t_cljs$core$async21700(map_LT___$1,f__$1,ch__$1,meta21701));
});

}

return (new cljs.core.async.t_cljs$core$async21700(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21709 = (function (map_GT_,f,ch,meta21710){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21710 = meta21710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21711,meta21710__$1){
var self__ = this;
var _21711__$1 = this;
return (new cljs.core.async.t_cljs$core$async21709(self__.map_GT_,self__.f,self__.ch,meta21710__$1));
});

cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21711){
var self__ = this;
var _21711__$1 = this;
return self__.meta21710;
});

cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21710","meta21710",1589755185,null)], null);
});

cljs.core.async.t_cljs$core$async21709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21709";

cljs.core.async.t_cljs$core$async21709.cljs$lang$ctorPrWriter = (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async21709");
});

cljs.core.async.__GT_t_cljs$core$async21709 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21709(map_GT___$1,f__$1,ch__$1,meta21710){
return (new cljs.core.async.t_cljs$core$async21709(map_GT___$1,f__$1,ch__$1,meta21710));
});

}

return (new cljs.core.async.t_cljs$core$async21709(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21715 = (function (filter_GT_,p,ch,meta21716){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21716 = meta21716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});;;;
cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21717,meta21716__$1){
var self__ = this;
var _21717__$1 = this;
return (new cljs.core.async.t_cljs$core$async21715(self__.filter_GT_,self__.p,self__.ch,meta21716__$1));
});

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21717){
var self__ = this;
var _21717__$1 = this;
return self__.meta21716;
});

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21716","meta21716",-993095451,null)], null);
});

cljs.core.async.t_cljs$core$async21715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21715";

cljs.core.async.t_cljs$core$async21715.cljs$lang$ctorPrWriter = (function (this__17946__auto__,writer__17947__auto__,opt__17948__auto__){
return cljs.core._write.call(null,writer__17947__auto__,"cljs.core.async/t_cljs$core$async21715");
});

cljs.core.async.__GT_t_cljs$core$async21715 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21715(filter_GT___$1,p__$1,ch__$1,meta21716){
return (new cljs.core.async.t_cljs$core$async21715(filter_GT___$1,p__$1,ch__$1,meta21716));
});

}

return (new cljs.core.async.t_cljs$core$async21715(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21718 = [];
var len__18406__auto___21762 = arguments.length;
var i__18407__auto___21763 = (0);
while(true){
if((i__18407__auto___21763 < len__18406__auto___21762)){
args21718.push((arguments[i__18407__auto___21763]));

var G__21764 = (i__18407__auto___21763 + (1));
i__18407__auto___21763 = G__21764;
continue;
} else {
}
break;
}

var G__21720 = args21718.length;
switch (G__21720) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21718.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19515__auto___21766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___21766,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___21766,out){
return (function (state_21741){
var state_val_21742 = (state_21741[(1)]);
if((state_val_21742 === (7))){
var inst_21737 = (state_21741[(2)]);
var state_21741__$1 = state_21741;
var statearr_21743_21767 = state_21741__$1;
(statearr_21743_21767[(2)] = inst_21737);

(statearr_21743_21767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (1))){
var state_21741__$1 = state_21741;
var statearr_21744_21768 = state_21741__$1;
(statearr_21744_21768[(2)] = null);

(statearr_21744_21768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (4))){
var inst_21723 = (state_21741[(7)]);
var inst_21723__$1 = (state_21741[(2)]);
var inst_21724 = (inst_21723__$1 == null);
var state_21741__$1 = (function (){var statearr_21745 = state_21741;
(statearr_21745[(7)] = inst_21723__$1);

return statearr_21745;
})();
if(cljs.core.truth_(inst_21724)){
var statearr_21746_21769 = state_21741__$1;
(statearr_21746_21769[(1)] = (5));

} else {
var statearr_21747_21770 = state_21741__$1;
(statearr_21747_21770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (6))){
var inst_21723 = (state_21741[(7)]);
var inst_21728 = p.call(null,inst_21723);
var state_21741__$1 = state_21741;
if(cljs.core.truth_(inst_21728)){
var statearr_21748_21771 = state_21741__$1;
(statearr_21748_21771[(1)] = (8));

} else {
var statearr_21749_21772 = state_21741__$1;
(statearr_21749_21772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (3))){
var inst_21739 = (state_21741[(2)]);
var state_21741__$1 = state_21741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21741__$1,inst_21739);
} else {
if((state_val_21742 === (2))){
var state_21741__$1 = state_21741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21741__$1,(4),ch);
} else {
if((state_val_21742 === (11))){
var inst_21731 = (state_21741[(2)]);
var state_21741__$1 = state_21741;
var statearr_21750_21773 = state_21741__$1;
(statearr_21750_21773[(2)] = inst_21731);

(statearr_21750_21773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (9))){
var state_21741__$1 = state_21741;
var statearr_21751_21774 = state_21741__$1;
(statearr_21751_21774[(2)] = null);

(statearr_21751_21774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (5))){
var inst_21726 = cljs.core.async.close_BANG_.call(null,out);
var state_21741__$1 = state_21741;
var statearr_21752_21775 = state_21741__$1;
(statearr_21752_21775[(2)] = inst_21726);

(statearr_21752_21775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (10))){
var inst_21734 = (state_21741[(2)]);
var state_21741__$1 = (function (){var statearr_21753 = state_21741;
(statearr_21753[(8)] = inst_21734);

return statearr_21753;
})();
var statearr_21754_21776 = state_21741__$1;
(statearr_21754_21776[(2)] = null);

(statearr_21754_21776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21742 === (8))){
var inst_21723 = (state_21741[(7)]);
var state_21741__$1 = state_21741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21741__$1,(11),out,inst_21723);
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
});})(c__19515__auto___21766,out))
;
return ((function (switch__19403__auto__,c__19515__auto___21766,out){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_21758 = [null,null,null,null,null,null,null,null,null];
(statearr_21758[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_21758[(1)] = (1));

return statearr_21758;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_21741){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_21741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e21759){if((e21759 instanceof Object)){
var ex__19407__auto__ = e21759;
var statearr_21760_21777 = state_21741;
(statearr_21760_21777[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21778 = state_21741;
state_21741 = G__21778;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_21741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_21741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___21766,out))
})();
var state__19517__auto__ = (function (){var statearr_21761 = f__19516__auto__.call(null);
(statearr_21761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___21766);

return statearr_21761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___21766,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21779 = [];
var len__18406__auto___21782 = arguments.length;
var i__18407__auto___21783 = (0);
while(true){
if((i__18407__auto___21783 < len__18406__auto___21782)){
args21779.push((arguments[i__18407__auto___21783]));

var G__21784 = (i__18407__auto___21783 + (1));
i__18407__auto___21783 = G__21784;
continue;
} else {
}
break;
}

var G__21781 = args21779.length;
switch (G__21781) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21779.length)].join('')));

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
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_21951){
var state_val_21952 = (state_21951[(1)]);
if((state_val_21952 === (7))){
var inst_21947 = (state_21951[(2)]);
var state_21951__$1 = state_21951;
var statearr_21953_21994 = state_21951__$1;
(statearr_21953_21994[(2)] = inst_21947);

(statearr_21953_21994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (20))){
var inst_21917 = (state_21951[(7)]);
var inst_21928 = (state_21951[(2)]);
var inst_21929 = cljs.core.next.call(null,inst_21917);
var inst_21903 = inst_21929;
var inst_21904 = null;
var inst_21905 = (0);
var inst_21906 = (0);
var state_21951__$1 = (function (){var statearr_21954 = state_21951;
(statearr_21954[(8)] = inst_21904);

(statearr_21954[(9)] = inst_21903);

(statearr_21954[(10)] = inst_21906);

(statearr_21954[(11)] = inst_21905);

(statearr_21954[(12)] = inst_21928);

return statearr_21954;
})();
var statearr_21955_21995 = state_21951__$1;
(statearr_21955_21995[(2)] = null);

(statearr_21955_21995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (1))){
var state_21951__$1 = state_21951;
var statearr_21956_21996 = state_21951__$1;
(statearr_21956_21996[(2)] = null);

(statearr_21956_21996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (4))){
var inst_21892 = (state_21951[(13)]);
var inst_21892__$1 = (state_21951[(2)]);
var inst_21893 = (inst_21892__$1 == null);
var state_21951__$1 = (function (){var statearr_21957 = state_21951;
(statearr_21957[(13)] = inst_21892__$1);

return statearr_21957;
})();
if(cljs.core.truth_(inst_21893)){
var statearr_21958_21997 = state_21951__$1;
(statearr_21958_21997[(1)] = (5));

} else {
var statearr_21959_21998 = state_21951__$1;
(statearr_21959_21998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (15))){
var state_21951__$1 = state_21951;
var statearr_21963_21999 = state_21951__$1;
(statearr_21963_21999[(2)] = null);

(statearr_21963_21999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (21))){
var state_21951__$1 = state_21951;
var statearr_21964_22000 = state_21951__$1;
(statearr_21964_22000[(2)] = null);

(statearr_21964_22000[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (13))){
var inst_21904 = (state_21951[(8)]);
var inst_21903 = (state_21951[(9)]);
var inst_21906 = (state_21951[(10)]);
var inst_21905 = (state_21951[(11)]);
var inst_21913 = (state_21951[(2)]);
var inst_21914 = (inst_21906 + (1));
var tmp21960 = inst_21904;
var tmp21961 = inst_21903;
var tmp21962 = inst_21905;
var inst_21903__$1 = tmp21961;
var inst_21904__$1 = tmp21960;
var inst_21905__$1 = tmp21962;
var inst_21906__$1 = inst_21914;
var state_21951__$1 = (function (){var statearr_21965 = state_21951;
(statearr_21965[(14)] = inst_21913);

(statearr_21965[(8)] = inst_21904__$1);

(statearr_21965[(9)] = inst_21903__$1);

(statearr_21965[(10)] = inst_21906__$1);

(statearr_21965[(11)] = inst_21905__$1);

return statearr_21965;
})();
var statearr_21966_22001 = state_21951__$1;
(statearr_21966_22001[(2)] = null);

(statearr_21966_22001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (22))){
var state_21951__$1 = state_21951;
var statearr_21967_22002 = state_21951__$1;
(statearr_21967_22002[(2)] = null);

(statearr_21967_22002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (6))){
var inst_21892 = (state_21951[(13)]);
var inst_21901 = f.call(null,inst_21892);
var inst_21902 = cljs.core.seq.call(null,inst_21901);
var inst_21903 = inst_21902;
var inst_21904 = null;
var inst_21905 = (0);
var inst_21906 = (0);
var state_21951__$1 = (function (){var statearr_21968 = state_21951;
(statearr_21968[(8)] = inst_21904);

(statearr_21968[(9)] = inst_21903);

(statearr_21968[(10)] = inst_21906);

(statearr_21968[(11)] = inst_21905);

return statearr_21968;
})();
var statearr_21969_22003 = state_21951__$1;
(statearr_21969_22003[(2)] = null);

(statearr_21969_22003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (17))){
var inst_21917 = (state_21951[(7)]);
var inst_21921 = cljs.core.chunk_first.call(null,inst_21917);
var inst_21922 = cljs.core.chunk_rest.call(null,inst_21917);
var inst_21923 = cljs.core.count.call(null,inst_21921);
var inst_21903 = inst_21922;
var inst_21904 = inst_21921;
var inst_21905 = inst_21923;
var inst_21906 = (0);
var state_21951__$1 = (function (){var statearr_21970 = state_21951;
(statearr_21970[(8)] = inst_21904);

(statearr_21970[(9)] = inst_21903);

(statearr_21970[(10)] = inst_21906);

(statearr_21970[(11)] = inst_21905);

return statearr_21970;
})();
var statearr_21971_22004 = state_21951__$1;
(statearr_21971_22004[(2)] = null);

(statearr_21971_22004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (3))){
var inst_21949 = (state_21951[(2)]);
var state_21951__$1 = state_21951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21951__$1,inst_21949);
} else {
if((state_val_21952 === (12))){
var inst_21937 = (state_21951[(2)]);
var state_21951__$1 = state_21951;
var statearr_21972_22005 = state_21951__$1;
(statearr_21972_22005[(2)] = inst_21937);

(statearr_21972_22005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (2))){
var state_21951__$1 = state_21951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21951__$1,(4),in$);
} else {
if((state_val_21952 === (23))){
var inst_21945 = (state_21951[(2)]);
var state_21951__$1 = state_21951;
var statearr_21973_22006 = state_21951__$1;
(statearr_21973_22006[(2)] = inst_21945);

(statearr_21973_22006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (19))){
var inst_21932 = (state_21951[(2)]);
var state_21951__$1 = state_21951;
var statearr_21974_22007 = state_21951__$1;
(statearr_21974_22007[(2)] = inst_21932);

(statearr_21974_22007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (11))){
var inst_21903 = (state_21951[(9)]);
var inst_21917 = (state_21951[(7)]);
var inst_21917__$1 = cljs.core.seq.call(null,inst_21903);
var state_21951__$1 = (function (){var statearr_21975 = state_21951;
(statearr_21975[(7)] = inst_21917__$1);

return statearr_21975;
})();
if(inst_21917__$1){
var statearr_21976_22008 = state_21951__$1;
(statearr_21976_22008[(1)] = (14));

} else {
var statearr_21977_22009 = state_21951__$1;
(statearr_21977_22009[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (9))){
var inst_21939 = (state_21951[(2)]);
var inst_21940 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21951__$1 = (function (){var statearr_21978 = state_21951;
(statearr_21978[(15)] = inst_21939);

return statearr_21978;
})();
if(cljs.core.truth_(inst_21940)){
var statearr_21979_22010 = state_21951__$1;
(statearr_21979_22010[(1)] = (21));

} else {
var statearr_21980_22011 = state_21951__$1;
(statearr_21980_22011[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (5))){
var inst_21895 = cljs.core.async.close_BANG_.call(null,out);
var state_21951__$1 = state_21951;
var statearr_21981_22012 = state_21951__$1;
(statearr_21981_22012[(2)] = inst_21895);

(statearr_21981_22012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (14))){
var inst_21917 = (state_21951[(7)]);
var inst_21919 = cljs.core.chunked_seq_QMARK_.call(null,inst_21917);
var state_21951__$1 = state_21951;
if(inst_21919){
var statearr_21982_22013 = state_21951__$1;
(statearr_21982_22013[(1)] = (17));

} else {
var statearr_21983_22014 = state_21951__$1;
(statearr_21983_22014[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (16))){
var inst_21935 = (state_21951[(2)]);
var state_21951__$1 = state_21951;
var statearr_21984_22015 = state_21951__$1;
(statearr_21984_22015[(2)] = inst_21935);

(statearr_21984_22015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21952 === (10))){
var inst_21904 = (state_21951[(8)]);
var inst_21906 = (state_21951[(10)]);
var inst_21911 = cljs.core._nth.call(null,inst_21904,inst_21906);
var state_21951__$1 = state_21951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21951__$1,(13),out,inst_21911);
} else {
if((state_val_21952 === (18))){
var inst_21917 = (state_21951[(7)]);
var inst_21926 = cljs.core.first.call(null,inst_21917);
var state_21951__$1 = state_21951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21951__$1,(20),out,inst_21926);
} else {
if((state_val_21952 === (8))){
var inst_21906 = (state_21951[(10)]);
var inst_21905 = (state_21951[(11)]);
var inst_21908 = (inst_21906 < inst_21905);
var inst_21909 = inst_21908;
var state_21951__$1 = state_21951;
if(cljs.core.truth_(inst_21909)){
var statearr_21985_22016 = state_21951__$1;
(statearr_21985_22016[(1)] = (10));

} else {
var statearr_21986_22017 = state_21951__$1;
(statearr_21986_22017[(1)] = (11));

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
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19404__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19404__auto____0 = (function (){
var statearr_21990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21990[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19404__auto__);

(statearr_21990[(1)] = (1));

return statearr_21990;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19404__auto____1 = (function (state_21951){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_21951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e21991){if((e21991 instanceof Object)){
var ex__19407__auto__ = e21991;
var statearr_21992_22018 = state_21951;
(statearr_21992_22018[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22019 = state_21951;
state_21951 = G__22019;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19404__auto__ = function(state_21951){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19404__auto____1.call(this,state_21951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19404__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19404__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_21993 = f__19516__auto__.call(null);
(statearr_21993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_21993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22020 = [];
var len__18406__auto___22023 = arguments.length;
var i__18407__auto___22024 = (0);
while(true){
if((i__18407__auto___22024 < len__18406__auto___22023)){
args22020.push((arguments[i__18407__auto___22024]));

var G__22025 = (i__18407__auto___22024 + (1));
i__18407__auto___22024 = G__22025;
continue;
} else {
}
break;
}

var G__22022 = args22020.length;
switch (G__22022) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22020.length)].join('')));

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
var args22027 = [];
var len__18406__auto___22030 = arguments.length;
var i__18407__auto___22031 = (0);
while(true){
if((i__18407__auto___22031 < len__18406__auto___22030)){
args22027.push((arguments[i__18407__auto___22031]));

var G__22032 = (i__18407__auto___22031 + (1));
i__18407__auto___22031 = G__22032;
continue;
} else {
}
break;
}

var G__22029 = args22027.length;
switch (G__22029) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22027.length)].join('')));

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
var args22034 = [];
var len__18406__auto___22085 = arguments.length;
var i__18407__auto___22086 = (0);
while(true){
if((i__18407__auto___22086 < len__18406__auto___22085)){
args22034.push((arguments[i__18407__auto___22086]));

var G__22087 = (i__18407__auto___22086 + (1));
i__18407__auto___22086 = G__22087;
continue;
} else {
}
break;
}

var G__22036 = args22034.length;
switch (G__22036) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22034.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19515__auto___22089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___22089,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___22089,out){
return (function (state_22060){
var state_val_22061 = (state_22060[(1)]);
if((state_val_22061 === (7))){
var inst_22055 = (state_22060[(2)]);
var state_22060__$1 = state_22060;
var statearr_22062_22090 = state_22060__$1;
(statearr_22062_22090[(2)] = inst_22055);

(statearr_22062_22090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (1))){
var inst_22037 = null;
var state_22060__$1 = (function (){var statearr_22063 = state_22060;
(statearr_22063[(7)] = inst_22037);

return statearr_22063;
})();
var statearr_22064_22091 = state_22060__$1;
(statearr_22064_22091[(2)] = null);

(statearr_22064_22091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (4))){
var inst_22040 = (state_22060[(8)]);
var inst_22040__$1 = (state_22060[(2)]);
var inst_22041 = (inst_22040__$1 == null);
var inst_22042 = cljs.core.not.call(null,inst_22041);
var state_22060__$1 = (function (){var statearr_22065 = state_22060;
(statearr_22065[(8)] = inst_22040__$1);

return statearr_22065;
})();
if(inst_22042){
var statearr_22066_22092 = state_22060__$1;
(statearr_22066_22092[(1)] = (5));

} else {
var statearr_22067_22093 = state_22060__$1;
(statearr_22067_22093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (6))){
var state_22060__$1 = state_22060;
var statearr_22068_22094 = state_22060__$1;
(statearr_22068_22094[(2)] = null);

(statearr_22068_22094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (3))){
var inst_22057 = (state_22060[(2)]);
var inst_22058 = cljs.core.async.close_BANG_.call(null,out);
var state_22060__$1 = (function (){var statearr_22069 = state_22060;
(statearr_22069[(9)] = inst_22057);

return statearr_22069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22060__$1,inst_22058);
} else {
if((state_val_22061 === (2))){
var state_22060__$1 = state_22060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22060__$1,(4),ch);
} else {
if((state_val_22061 === (11))){
var inst_22040 = (state_22060[(8)]);
var inst_22049 = (state_22060[(2)]);
var inst_22037 = inst_22040;
var state_22060__$1 = (function (){var statearr_22070 = state_22060;
(statearr_22070[(7)] = inst_22037);

(statearr_22070[(10)] = inst_22049);

return statearr_22070;
})();
var statearr_22071_22095 = state_22060__$1;
(statearr_22071_22095[(2)] = null);

(statearr_22071_22095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (9))){
var inst_22040 = (state_22060[(8)]);
var state_22060__$1 = state_22060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22060__$1,(11),out,inst_22040);
} else {
if((state_val_22061 === (5))){
var inst_22037 = (state_22060[(7)]);
var inst_22040 = (state_22060[(8)]);
var inst_22044 = cljs.core._EQ_.call(null,inst_22040,inst_22037);
var state_22060__$1 = state_22060;
if(inst_22044){
var statearr_22073_22096 = state_22060__$1;
(statearr_22073_22096[(1)] = (8));

} else {
var statearr_22074_22097 = state_22060__$1;
(statearr_22074_22097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (10))){
var inst_22052 = (state_22060[(2)]);
var state_22060__$1 = state_22060;
var statearr_22075_22098 = state_22060__$1;
(statearr_22075_22098[(2)] = inst_22052);

(statearr_22075_22098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22061 === (8))){
var inst_22037 = (state_22060[(7)]);
var tmp22072 = inst_22037;
var inst_22037__$1 = tmp22072;
var state_22060__$1 = (function (){var statearr_22076 = state_22060;
(statearr_22076[(7)] = inst_22037__$1);

return statearr_22076;
})();
var statearr_22077_22099 = state_22060__$1;
(statearr_22077_22099[(2)] = null);

(statearr_22077_22099[(1)] = (2));


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
});})(c__19515__auto___22089,out))
;
return ((function (switch__19403__auto__,c__19515__auto___22089,out){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_22081 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22081[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_22081[(1)] = (1));

return statearr_22081;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_22060){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_22060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e22082){if((e22082 instanceof Object)){
var ex__19407__auto__ = e22082;
var statearr_22083_22100 = state_22060;
(statearr_22083_22100[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22101 = state_22060;
state_22060 = G__22101;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_22060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_22060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___22089,out))
})();
var state__19517__auto__ = (function (){var statearr_22084 = f__19516__auto__.call(null);
(statearr_22084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___22089);

return statearr_22084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___22089,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22102 = [];
var len__18406__auto___22172 = arguments.length;
var i__18407__auto___22173 = (0);
while(true){
if((i__18407__auto___22173 < len__18406__auto___22172)){
args22102.push((arguments[i__18407__auto___22173]));

var G__22174 = (i__18407__auto___22173 + (1));
i__18407__auto___22173 = G__22174;
continue;
} else {
}
break;
}

var G__22104 = args22102.length;
switch (G__22104) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22102.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19515__auto___22176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___22176,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___22176,out){
return (function (state_22142){
var state_val_22143 = (state_22142[(1)]);
if((state_val_22143 === (7))){
var inst_22138 = (state_22142[(2)]);
var state_22142__$1 = state_22142;
var statearr_22144_22177 = state_22142__$1;
(statearr_22144_22177[(2)] = inst_22138);

(statearr_22144_22177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (1))){
var inst_22105 = (new Array(n));
var inst_22106 = inst_22105;
var inst_22107 = (0);
var state_22142__$1 = (function (){var statearr_22145 = state_22142;
(statearr_22145[(7)] = inst_22107);

(statearr_22145[(8)] = inst_22106);

return statearr_22145;
})();
var statearr_22146_22178 = state_22142__$1;
(statearr_22146_22178[(2)] = null);

(statearr_22146_22178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (4))){
var inst_22110 = (state_22142[(9)]);
var inst_22110__$1 = (state_22142[(2)]);
var inst_22111 = (inst_22110__$1 == null);
var inst_22112 = cljs.core.not.call(null,inst_22111);
var state_22142__$1 = (function (){var statearr_22147 = state_22142;
(statearr_22147[(9)] = inst_22110__$1);

return statearr_22147;
})();
if(inst_22112){
var statearr_22148_22179 = state_22142__$1;
(statearr_22148_22179[(1)] = (5));

} else {
var statearr_22149_22180 = state_22142__$1;
(statearr_22149_22180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (15))){
var inst_22132 = (state_22142[(2)]);
var state_22142__$1 = state_22142;
var statearr_22150_22181 = state_22142__$1;
(statearr_22150_22181[(2)] = inst_22132);

(statearr_22150_22181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (13))){
var state_22142__$1 = state_22142;
var statearr_22151_22182 = state_22142__$1;
(statearr_22151_22182[(2)] = null);

(statearr_22151_22182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (6))){
var inst_22107 = (state_22142[(7)]);
var inst_22128 = (inst_22107 > (0));
var state_22142__$1 = state_22142;
if(cljs.core.truth_(inst_22128)){
var statearr_22152_22183 = state_22142__$1;
(statearr_22152_22183[(1)] = (12));

} else {
var statearr_22153_22184 = state_22142__$1;
(statearr_22153_22184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (3))){
var inst_22140 = (state_22142[(2)]);
var state_22142__$1 = state_22142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22142__$1,inst_22140);
} else {
if((state_val_22143 === (12))){
var inst_22106 = (state_22142[(8)]);
var inst_22130 = cljs.core.vec.call(null,inst_22106);
var state_22142__$1 = state_22142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22142__$1,(15),out,inst_22130);
} else {
if((state_val_22143 === (2))){
var state_22142__$1 = state_22142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22142__$1,(4),ch);
} else {
if((state_val_22143 === (11))){
var inst_22122 = (state_22142[(2)]);
var inst_22123 = (new Array(n));
var inst_22106 = inst_22123;
var inst_22107 = (0);
var state_22142__$1 = (function (){var statearr_22154 = state_22142;
(statearr_22154[(7)] = inst_22107);

(statearr_22154[(10)] = inst_22122);

(statearr_22154[(8)] = inst_22106);

return statearr_22154;
})();
var statearr_22155_22185 = state_22142__$1;
(statearr_22155_22185[(2)] = null);

(statearr_22155_22185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (9))){
var inst_22106 = (state_22142[(8)]);
var inst_22120 = cljs.core.vec.call(null,inst_22106);
var state_22142__$1 = state_22142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22142__$1,(11),out,inst_22120);
} else {
if((state_val_22143 === (5))){
var inst_22107 = (state_22142[(7)]);
var inst_22106 = (state_22142[(8)]);
var inst_22115 = (state_22142[(11)]);
var inst_22110 = (state_22142[(9)]);
var inst_22114 = (inst_22106[inst_22107] = inst_22110);
var inst_22115__$1 = (inst_22107 + (1));
var inst_22116 = (inst_22115__$1 < n);
var state_22142__$1 = (function (){var statearr_22156 = state_22142;
(statearr_22156[(11)] = inst_22115__$1);

(statearr_22156[(12)] = inst_22114);

return statearr_22156;
})();
if(cljs.core.truth_(inst_22116)){
var statearr_22157_22186 = state_22142__$1;
(statearr_22157_22186[(1)] = (8));

} else {
var statearr_22158_22187 = state_22142__$1;
(statearr_22158_22187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (14))){
var inst_22135 = (state_22142[(2)]);
var inst_22136 = cljs.core.async.close_BANG_.call(null,out);
var state_22142__$1 = (function (){var statearr_22160 = state_22142;
(statearr_22160[(13)] = inst_22135);

return statearr_22160;
})();
var statearr_22161_22188 = state_22142__$1;
(statearr_22161_22188[(2)] = inst_22136);

(statearr_22161_22188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (10))){
var inst_22126 = (state_22142[(2)]);
var state_22142__$1 = state_22142;
var statearr_22162_22189 = state_22142__$1;
(statearr_22162_22189[(2)] = inst_22126);

(statearr_22162_22189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22143 === (8))){
var inst_22106 = (state_22142[(8)]);
var inst_22115 = (state_22142[(11)]);
var tmp22159 = inst_22106;
var inst_22106__$1 = tmp22159;
var inst_22107 = inst_22115;
var state_22142__$1 = (function (){var statearr_22163 = state_22142;
(statearr_22163[(7)] = inst_22107);

(statearr_22163[(8)] = inst_22106__$1);

return statearr_22163;
})();
var statearr_22164_22190 = state_22142__$1;
(statearr_22164_22190[(2)] = null);

(statearr_22164_22190[(1)] = (2));


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
});})(c__19515__auto___22176,out))
;
return ((function (switch__19403__auto__,c__19515__auto___22176,out){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_22168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22168[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_22168[(1)] = (1));

return statearr_22168;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_22142){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_22142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e22169){if((e22169 instanceof Object)){
var ex__19407__auto__ = e22169;
var statearr_22170_22191 = state_22142;
(statearr_22170_22191[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22192 = state_22142;
state_22142 = G__22192;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_22142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_22142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___22176,out))
})();
var state__19517__auto__ = (function (){var statearr_22171 = f__19516__auto__.call(null);
(statearr_22171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___22176);

return statearr_22171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___22176,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22193 = [];
var len__18406__auto___22267 = arguments.length;
var i__18407__auto___22268 = (0);
while(true){
if((i__18407__auto___22268 < len__18406__auto___22267)){
args22193.push((arguments[i__18407__auto___22268]));

var G__22269 = (i__18407__auto___22268 + (1));
i__18407__auto___22268 = G__22269;
continue;
} else {
}
break;
}

var G__22195 = args22193.length;
switch (G__22195) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22193.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19515__auto___22271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___22271,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___22271,out){
return (function (state_22237){
var state_val_22238 = (state_22237[(1)]);
if((state_val_22238 === (7))){
var inst_22233 = (state_22237[(2)]);
var state_22237__$1 = state_22237;
var statearr_22239_22272 = state_22237__$1;
(statearr_22239_22272[(2)] = inst_22233);

(statearr_22239_22272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (1))){
var inst_22196 = [];
var inst_22197 = inst_22196;
var inst_22198 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22237__$1 = (function (){var statearr_22240 = state_22237;
(statearr_22240[(7)] = inst_22197);

(statearr_22240[(8)] = inst_22198);

return statearr_22240;
})();
var statearr_22241_22273 = state_22237__$1;
(statearr_22241_22273[(2)] = null);

(statearr_22241_22273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (4))){
var inst_22201 = (state_22237[(9)]);
var inst_22201__$1 = (state_22237[(2)]);
var inst_22202 = (inst_22201__$1 == null);
var inst_22203 = cljs.core.not.call(null,inst_22202);
var state_22237__$1 = (function (){var statearr_22242 = state_22237;
(statearr_22242[(9)] = inst_22201__$1);

return statearr_22242;
})();
if(inst_22203){
var statearr_22243_22274 = state_22237__$1;
(statearr_22243_22274[(1)] = (5));

} else {
var statearr_22244_22275 = state_22237__$1;
(statearr_22244_22275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (15))){
var inst_22227 = (state_22237[(2)]);
var state_22237__$1 = state_22237;
var statearr_22245_22276 = state_22237__$1;
(statearr_22245_22276[(2)] = inst_22227);

(statearr_22245_22276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (13))){
var state_22237__$1 = state_22237;
var statearr_22246_22277 = state_22237__$1;
(statearr_22246_22277[(2)] = null);

(statearr_22246_22277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (6))){
var inst_22197 = (state_22237[(7)]);
var inst_22222 = inst_22197.length;
var inst_22223 = (inst_22222 > (0));
var state_22237__$1 = state_22237;
if(cljs.core.truth_(inst_22223)){
var statearr_22247_22278 = state_22237__$1;
(statearr_22247_22278[(1)] = (12));

} else {
var statearr_22248_22279 = state_22237__$1;
(statearr_22248_22279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (3))){
var inst_22235 = (state_22237[(2)]);
var state_22237__$1 = state_22237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22237__$1,inst_22235);
} else {
if((state_val_22238 === (12))){
var inst_22197 = (state_22237[(7)]);
var inst_22225 = cljs.core.vec.call(null,inst_22197);
var state_22237__$1 = state_22237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22237__$1,(15),out,inst_22225);
} else {
if((state_val_22238 === (2))){
var state_22237__$1 = state_22237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22237__$1,(4),ch);
} else {
if((state_val_22238 === (11))){
var inst_22205 = (state_22237[(10)]);
var inst_22201 = (state_22237[(9)]);
var inst_22215 = (state_22237[(2)]);
var inst_22216 = [];
var inst_22217 = inst_22216.push(inst_22201);
var inst_22197 = inst_22216;
var inst_22198 = inst_22205;
var state_22237__$1 = (function (){var statearr_22249 = state_22237;
(statearr_22249[(7)] = inst_22197);

(statearr_22249[(11)] = inst_22215);

(statearr_22249[(8)] = inst_22198);

(statearr_22249[(12)] = inst_22217);

return statearr_22249;
})();
var statearr_22250_22280 = state_22237__$1;
(statearr_22250_22280[(2)] = null);

(statearr_22250_22280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (9))){
var inst_22197 = (state_22237[(7)]);
var inst_22213 = cljs.core.vec.call(null,inst_22197);
var state_22237__$1 = state_22237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22237__$1,(11),out,inst_22213);
} else {
if((state_val_22238 === (5))){
var inst_22205 = (state_22237[(10)]);
var inst_22198 = (state_22237[(8)]);
var inst_22201 = (state_22237[(9)]);
var inst_22205__$1 = f.call(null,inst_22201);
var inst_22206 = cljs.core._EQ_.call(null,inst_22205__$1,inst_22198);
var inst_22207 = cljs.core.keyword_identical_QMARK_.call(null,inst_22198,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22208 = (inst_22206) || (inst_22207);
var state_22237__$1 = (function (){var statearr_22251 = state_22237;
(statearr_22251[(10)] = inst_22205__$1);

return statearr_22251;
})();
if(cljs.core.truth_(inst_22208)){
var statearr_22252_22281 = state_22237__$1;
(statearr_22252_22281[(1)] = (8));

} else {
var statearr_22253_22282 = state_22237__$1;
(statearr_22253_22282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (14))){
var inst_22230 = (state_22237[(2)]);
var inst_22231 = cljs.core.async.close_BANG_.call(null,out);
var state_22237__$1 = (function (){var statearr_22255 = state_22237;
(statearr_22255[(13)] = inst_22230);

return statearr_22255;
})();
var statearr_22256_22283 = state_22237__$1;
(statearr_22256_22283[(2)] = inst_22231);

(statearr_22256_22283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (10))){
var inst_22220 = (state_22237[(2)]);
var state_22237__$1 = state_22237;
var statearr_22257_22284 = state_22237__$1;
(statearr_22257_22284[(2)] = inst_22220);

(statearr_22257_22284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22238 === (8))){
var inst_22205 = (state_22237[(10)]);
var inst_22197 = (state_22237[(7)]);
var inst_22201 = (state_22237[(9)]);
var inst_22210 = inst_22197.push(inst_22201);
var tmp22254 = inst_22197;
var inst_22197__$1 = tmp22254;
var inst_22198 = inst_22205;
var state_22237__$1 = (function (){var statearr_22258 = state_22237;
(statearr_22258[(7)] = inst_22197__$1);

(statearr_22258[(8)] = inst_22198);

(statearr_22258[(14)] = inst_22210);

return statearr_22258;
})();
var statearr_22259_22285 = state_22237__$1;
(statearr_22259_22285[(2)] = null);

(statearr_22259_22285[(1)] = (2));


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
});})(c__19515__auto___22271,out))
;
return ((function (switch__19403__auto__,c__19515__auto___22271,out){
return (function() {
var cljs$core$async$state_machine__19404__auto__ = null;
var cljs$core$async$state_machine__19404__auto____0 = (function (){
var statearr_22263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22263[(0)] = cljs$core$async$state_machine__19404__auto__);

(statearr_22263[(1)] = (1));

return statearr_22263;
});
var cljs$core$async$state_machine__19404__auto____1 = (function (state_22237){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_22237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e22264){if((e22264 instanceof Object)){
var ex__19407__auto__ = e22264;
var statearr_22265_22286 = state_22237;
(statearr_22265_22286[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22287 = state_22237;
state_22237 = G__22287;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
cljs$core$async$state_machine__19404__auto__ = function(state_22237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19404__auto____1.call(this,state_22237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19404__auto____0;
cljs$core$async$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19404__auto____1;
return cljs$core$async$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___22271,out))
})();
var state__19517__auto__ = (function (){var statearr_22266 = f__19516__auto__.call(null);
(statearr_22266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___22271);

return statearr_22266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___22271,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map