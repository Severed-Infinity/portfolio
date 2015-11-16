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
var args51465 = [];
var len__18249__auto___51471 = arguments.length;
var i__18250__auto___51472 = (0);
while(true){
if((i__18250__auto___51472 < len__18249__auto___51471)){
args51465.push((arguments[i__18250__auto___51472]));

var G__51473 = (i__18250__auto___51472 + (1));
i__18250__auto___51472 = G__51473;
continue;
} else {
}
break;
}

var G__51467 = args51465.length;
switch (G__51467) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51465.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async51468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51468 = (function (f,blockable,meta51469){
this.f = f;
this.blockable = blockable;
this.meta51469 = meta51469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51470,meta51469__$1){
var self__ = this;
var _51470__$1 = this;
return (new cljs.core.async.t_cljs$core$async51468(self__.f,self__.blockable,meta51469__$1));
});

cljs.core.async.t_cljs$core$async51468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51470){
var self__ = this;
var _51470__$1 = this;
return self__.meta51469;
});

cljs.core.async.t_cljs$core$async51468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51469","meta51469",941241550,null)], null);
});

cljs.core.async.t_cljs$core$async51468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51468";

cljs.core.async.t_cljs$core$async51468.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async51468");
});

cljs.core.async.__GT_t_cljs$core$async51468 = (function cljs$core$async$__GT_t_cljs$core$async51468(f__$1,blockable__$1,meta51469){
return (new cljs.core.async.t_cljs$core$async51468(f__$1,blockable__$1,meta51469));
});

}

return (new cljs.core.async.t_cljs$core$async51468(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args51477 = [];
var len__18249__auto___51480 = arguments.length;
var i__18250__auto___51481 = (0);
while(true){
if((i__18250__auto___51481 < len__18249__auto___51480)){
args51477.push((arguments[i__18250__auto___51481]));

var G__51482 = (i__18250__auto___51481 + (1));
i__18250__auto___51481 = G__51482;
continue;
} else {
}
break;
}

var G__51479 = args51477.length;
switch (G__51479) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51477.length)].join('')));

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
var args51484 = [];
var len__18249__auto___51487 = arguments.length;
var i__18250__auto___51488 = (0);
while(true){
if((i__18250__auto___51488 < len__18249__auto___51487)){
args51484.push((arguments[i__18250__auto___51488]));

var G__51489 = (i__18250__auto___51488 + (1));
i__18250__auto___51488 = G__51489;
continue;
} else {
}
break;
}

var G__51486 = args51484.length;
switch (G__51486) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51484.length)].join('')));

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
var args51491 = [];
var len__18249__auto___51494 = arguments.length;
var i__18250__auto___51495 = (0);
while(true){
if((i__18250__auto___51495 < len__18249__auto___51494)){
args51491.push((arguments[i__18250__auto___51495]));

var G__51496 = (i__18250__auto___51495 + (1));
i__18250__auto___51495 = G__51496;
continue;
} else {
}
break;
}

var G__51493 = args51491.length;
switch (G__51493) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51491.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_51498 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_51498);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_51498,ret){
return (function (){
return fn1.call(null,val_51498);
});})(val_51498,ret))
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
var args51499 = [];
var len__18249__auto___51502 = arguments.length;
var i__18250__auto___51503 = (0);
while(true){
if((i__18250__auto___51503 < len__18249__auto___51502)){
args51499.push((arguments[i__18250__auto___51503]));

var G__51504 = (i__18250__auto___51503 + (1));
i__18250__auto___51503 = G__51504;
continue;
} else {
}
break;
}

var G__51501 = args51499.length;
switch (G__51501) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51499.length)].join('')));

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
var n__18094__auto___51506 = n;
var x_51507 = (0);
while(true){
if((x_51507 < n__18094__auto___51506)){
(a[x_51507] = (0));

var G__51508 = (x_51507 + (1));
x_51507 = G__51508;
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

var G__51509 = (i + (1));
i = G__51509;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async51513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51513 = (function (alt_flag,flag,meta51514){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta51514 = meta51514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51515,meta51514__$1){
var self__ = this;
var _51515__$1 = this;
return (new cljs.core.async.t_cljs$core$async51513(self__.alt_flag,self__.flag,meta51514__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51515){
var self__ = this;
var _51515__$1 = this;
return self__.meta51514;
});})(flag))
;

cljs.core.async.t_cljs$core$async51513.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51513.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51514","meta51514",853881523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51513";

cljs.core.async.t_cljs$core$async51513.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async51513");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async51513 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51513(alt_flag__$1,flag__$1,meta51514){
return (new cljs.core.async.t_cljs$core$async51513(alt_flag__$1,flag__$1,meta51514));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51513(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async51519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51519 = (function (alt_handler,flag,cb,meta51520){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta51520 = meta51520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51521,meta51520__$1){
var self__ = this;
var _51521__$1 = this;
return (new cljs.core.async.t_cljs$core$async51519(self__.alt_handler,self__.flag,self__.cb,meta51520__$1));
});

cljs.core.async.t_cljs$core$async51519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51521){
var self__ = this;
var _51521__$1 = this;
return self__.meta51520;
});

cljs.core.async.t_cljs$core$async51519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async51519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51520","meta51520",1884162589,null)], null);
});

cljs.core.async.t_cljs$core$async51519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51519";

cljs.core.async.t_cljs$core$async51519.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async51519");
});

cljs.core.async.__GT_t_cljs$core$async51519 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51519(alt_handler__$1,flag__$1,cb__$1,meta51520){
return (new cljs.core.async.t_cljs$core$async51519(alt_handler__$1,flag__$1,cb__$1,meta51520));
});

}

return (new cljs.core.async.t_cljs$core$async51519(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51522_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51522_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51523_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51523_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17191__auto__ = wport;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return port;
}
})()], null));
} else {
var G__51524 = (i + (1));
i = G__51524;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17191__auto__ = ret;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17179__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17179__auto__;
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
var args__18256__auto__ = [];
var len__18249__auto___51530 = arguments.length;
var i__18250__auto___51531 = (0);
while(true){
if((i__18250__auto___51531 < len__18249__auto___51530)){
args__18256__auto__.push((arguments[i__18250__auto___51531]));

var G__51532 = (i__18250__auto___51531 + (1));
i__18250__auto___51531 = G__51532;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((1) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18257__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51527){
var map__51528 = p__51527;
var map__51528__$1 = ((((!((map__51528 == null)))?((((map__51528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51528):map__51528);
var opts = map__51528__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51525){
var G__51526 = cljs.core.first.call(null,seq51525);
var seq51525__$1 = cljs.core.next.call(null,seq51525);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51526,seq51525__$1);
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
var args51533 = [];
var len__18249__auto___51583 = arguments.length;
var i__18250__auto___51584 = (0);
while(true){
if((i__18250__auto___51584 < len__18249__auto___51583)){
args51533.push((arguments[i__18250__auto___51584]));

var G__51585 = (i__18250__auto___51584 + (1));
i__18250__auto___51584 = G__51585;
continue;
} else {
}
break;
}

var G__51535 = args51533.length;
switch (G__51535) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51533.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19484__auto___51587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___51587){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___51587){
return (function (state_51559){
var state_val_51560 = (state_51559[(1)]);
if((state_val_51560 === (7))){
var inst_51555 = (state_51559[(2)]);
var state_51559__$1 = state_51559;
var statearr_51561_51588 = state_51559__$1;
(statearr_51561_51588[(2)] = inst_51555);

(statearr_51561_51588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (1))){
var state_51559__$1 = state_51559;
var statearr_51562_51589 = state_51559__$1;
(statearr_51562_51589[(2)] = null);

(statearr_51562_51589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (4))){
var inst_51538 = (state_51559[(7)]);
var inst_51538__$1 = (state_51559[(2)]);
var inst_51539 = (inst_51538__$1 == null);
var state_51559__$1 = (function (){var statearr_51563 = state_51559;
(statearr_51563[(7)] = inst_51538__$1);

return statearr_51563;
})();
if(cljs.core.truth_(inst_51539)){
var statearr_51564_51590 = state_51559__$1;
(statearr_51564_51590[(1)] = (5));

} else {
var statearr_51565_51591 = state_51559__$1;
(statearr_51565_51591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (13))){
var state_51559__$1 = state_51559;
var statearr_51566_51592 = state_51559__$1;
(statearr_51566_51592[(2)] = null);

(statearr_51566_51592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (6))){
var inst_51538 = (state_51559[(7)]);
var state_51559__$1 = state_51559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51559__$1,(11),to,inst_51538);
} else {
if((state_val_51560 === (3))){
var inst_51557 = (state_51559[(2)]);
var state_51559__$1 = state_51559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51559__$1,inst_51557);
} else {
if((state_val_51560 === (12))){
var state_51559__$1 = state_51559;
var statearr_51567_51593 = state_51559__$1;
(statearr_51567_51593[(2)] = null);

(statearr_51567_51593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (2))){
var state_51559__$1 = state_51559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51559__$1,(4),from);
} else {
if((state_val_51560 === (11))){
var inst_51548 = (state_51559[(2)]);
var state_51559__$1 = state_51559;
if(cljs.core.truth_(inst_51548)){
var statearr_51568_51594 = state_51559__$1;
(statearr_51568_51594[(1)] = (12));

} else {
var statearr_51569_51595 = state_51559__$1;
(statearr_51569_51595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (9))){
var state_51559__$1 = state_51559;
var statearr_51570_51596 = state_51559__$1;
(statearr_51570_51596[(2)] = null);

(statearr_51570_51596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (5))){
var state_51559__$1 = state_51559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51571_51597 = state_51559__$1;
(statearr_51571_51597[(1)] = (8));

} else {
var statearr_51572_51598 = state_51559__$1;
(statearr_51572_51598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (14))){
var inst_51553 = (state_51559[(2)]);
var state_51559__$1 = state_51559;
var statearr_51573_51599 = state_51559__$1;
(statearr_51573_51599[(2)] = inst_51553);

(statearr_51573_51599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (10))){
var inst_51545 = (state_51559[(2)]);
var state_51559__$1 = state_51559;
var statearr_51574_51600 = state_51559__$1;
(statearr_51574_51600[(2)] = inst_51545);

(statearr_51574_51600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51560 === (8))){
var inst_51542 = cljs.core.async.close_BANG_.call(null,to);
var state_51559__$1 = state_51559;
var statearr_51575_51601 = state_51559__$1;
(statearr_51575_51601[(2)] = inst_51542);

(statearr_51575_51601[(1)] = (10));


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
});})(c__19484__auto___51587))
;
return ((function (switch__19463__auto__,c__19484__auto___51587){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_51579 = [null,null,null,null,null,null,null,null];
(statearr_51579[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_51579[(1)] = (1));

return statearr_51579;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_51559){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_51559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e51580){if((e51580 instanceof Object)){
var ex__19467__auto__ = e51580;
var statearr_51581_51602 = state_51559;
(statearr_51581_51602[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51603 = state_51559;
state_51559 = G__51603;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_51559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_51559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___51587))
})();
var state__19486__auto__ = (function (){var statearr_51582 = f__19485__auto__.call(null);
(statearr_51582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___51587);

return statearr_51582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___51587))
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
return (function (p__51787){
var vec__51788 = p__51787;
var v = cljs.core.nth.call(null,vec__51788,(0),null);
var p = cljs.core.nth.call(null,vec__51788,(1),null);
var job = vec__51788;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19484__auto___51970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___51970,res,vec__51788,v,p,job,jobs,results){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___51970,res,vec__51788,v,p,job,jobs,results){
return (function (state_51793){
var state_val_51794 = (state_51793[(1)]);
if((state_val_51794 === (1))){
var state_51793__$1 = state_51793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51793__$1,(2),res,v);
} else {
if((state_val_51794 === (2))){
var inst_51790 = (state_51793[(2)]);
var inst_51791 = cljs.core.async.close_BANG_.call(null,res);
var state_51793__$1 = (function (){var statearr_51795 = state_51793;
(statearr_51795[(7)] = inst_51790);

return statearr_51795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51793__$1,inst_51791);
} else {
return null;
}
}
});})(c__19484__auto___51970,res,vec__51788,v,p,job,jobs,results))
;
return ((function (switch__19463__auto__,c__19484__auto___51970,res,vec__51788,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0 = (function (){
var statearr_51799 = [null,null,null,null,null,null,null,null];
(statearr_51799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__);

(statearr_51799[(1)] = (1));

return statearr_51799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1 = (function (state_51793){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_51793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e51800){if((e51800 instanceof Object)){
var ex__19467__auto__ = e51800;
var statearr_51801_51971 = state_51793;
(statearr_51801_51971[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51972 = state_51793;
state_51793 = G__51972;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = function(state_51793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1.call(this,state_51793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___51970,res,vec__51788,v,p,job,jobs,results))
})();
var state__19486__auto__ = (function (){var statearr_51802 = f__19485__auto__.call(null);
(statearr_51802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___51970);

return statearr_51802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___51970,res,vec__51788,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51803){
var vec__51804 = p__51803;
var v = cljs.core.nth.call(null,vec__51804,(0),null);
var p = cljs.core.nth.call(null,vec__51804,(1),null);
var job = vec__51804;
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
var n__18094__auto___51973 = n;
var __51974 = (0);
while(true){
if((__51974 < n__18094__auto___51973)){
var G__51805_51975 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__51805_51975) {
case "compute":
var c__19484__auto___51977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51974,c__19484__auto___51977,G__51805_51975,n__18094__auto___51973,jobs,results,process,async){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (__51974,c__19484__auto___51977,G__51805_51975,n__18094__auto___51973,jobs,results,process,async){
return (function (state_51818){
var state_val_51819 = (state_51818[(1)]);
if((state_val_51819 === (1))){
var state_51818__$1 = state_51818;
var statearr_51820_51978 = state_51818__$1;
(statearr_51820_51978[(2)] = null);

(statearr_51820_51978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51819 === (2))){
var state_51818__$1 = state_51818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51818__$1,(4),jobs);
} else {
if((state_val_51819 === (3))){
var inst_51816 = (state_51818[(2)]);
var state_51818__$1 = state_51818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51818__$1,inst_51816);
} else {
if((state_val_51819 === (4))){
var inst_51808 = (state_51818[(2)]);
var inst_51809 = process.call(null,inst_51808);
var state_51818__$1 = state_51818;
if(cljs.core.truth_(inst_51809)){
var statearr_51821_51979 = state_51818__$1;
(statearr_51821_51979[(1)] = (5));

} else {
var statearr_51822_51980 = state_51818__$1;
(statearr_51822_51980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51819 === (5))){
var state_51818__$1 = state_51818;
var statearr_51823_51981 = state_51818__$1;
(statearr_51823_51981[(2)] = null);

(statearr_51823_51981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51819 === (6))){
var state_51818__$1 = state_51818;
var statearr_51824_51982 = state_51818__$1;
(statearr_51824_51982[(2)] = null);

(statearr_51824_51982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51819 === (7))){
var inst_51814 = (state_51818[(2)]);
var state_51818__$1 = state_51818;
var statearr_51825_51983 = state_51818__$1;
(statearr_51825_51983[(2)] = inst_51814);

(statearr_51825_51983[(1)] = (3));


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
});})(__51974,c__19484__auto___51977,G__51805_51975,n__18094__auto___51973,jobs,results,process,async))
;
return ((function (__51974,switch__19463__auto__,c__19484__auto___51977,G__51805_51975,n__18094__auto___51973,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0 = (function (){
var statearr_51829 = [null,null,null,null,null,null,null];
(statearr_51829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__);

(statearr_51829[(1)] = (1));

return statearr_51829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1 = (function (state_51818){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_51818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e51830){if((e51830 instanceof Object)){
var ex__19467__auto__ = e51830;
var statearr_51831_51984 = state_51818;
(statearr_51831_51984[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51985 = state_51818;
state_51818 = G__51985;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = function(state_51818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1.call(this,state_51818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__;
})()
;})(__51974,switch__19463__auto__,c__19484__auto___51977,G__51805_51975,n__18094__auto___51973,jobs,results,process,async))
})();
var state__19486__auto__ = (function (){var statearr_51832 = f__19485__auto__.call(null);
(statearr_51832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___51977);

return statearr_51832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(__51974,c__19484__auto___51977,G__51805_51975,n__18094__auto___51973,jobs,results,process,async))
);


break;
case "async":
var c__19484__auto___51986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51974,c__19484__auto___51986,G__51805_51975,n__18094__auto___51973,jobs,results,process,async){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (__51974,c__19484__auto___51986,G__51805_51975,n__18094__auto___51973,jobs,results,process,async){
return (function (state_51845){
var state_val_51846 = (state_51845[(1)]);
if((state_val_51846 === (1))){
var state_51845__$1 = state_51845;
var statearr_51847_51987 = state_51845__$1;
(statearr_51847_51987[(2)] = null);

(statearr_51847_51987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51846 === (2))){
var state_51845__$1 = state_51845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51845__$1,(4),jobs);
} else {
if((state_val_51846 === (3))){
var inst_51843 = (state_51845[(2)]);
var state_51845__$1 = state_51845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51845__$1,inst_51843);
} else {
if((state_val_51846 === (4))){
var inst_51835 = (state_51845[(2)]);
var inst_51836 = async.call(null,inst_51835);
var state_51845__$1 = state_51845;
if(cljs.core.truth_(inst_51836)){
var statearr_51848_51988 = state_51845__$1;
(statearr_51848_51988[(1)] = (5));

} else {
var statearr_51849_51989 = state_51845__$1;
(statearr_51849_51989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51846 === (5))){
var state_51845__$1 = state_51845;
var statearr_51850_51990 = state_51845__$1;
(statearr_51850_51990[(2)] = null);

(statearr_51850_51990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51846 === (6))){
var state_51845__$1 = state_51845;
var statearr_51851_51991 = state_51845__$1;
(statearr_51851_51991[(2)] = null);

(statearr_51851_51991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51846 === (7))){
var inst_51841 = (state_51845[(2)]);
var state_51845__$1 = state_51845;
var statearr_51852_51992 = state_51845__$1;
(statearr_51852_51992[(2)] = inst_51841);

(statearr_51852_51992[(1)] = (3));


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
});})(__51974,c__19484__auto___51986,G__51805_51975,n__18094__auto___51973,jobs,results,process,async))
;
return ((function (__51974,switch__19463__auto__,c__19484__auto___51986,G__51805_51975,n__18094__auto___51973,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0 = (function (){
var statearr_51856 = [null,null,null,null,null,null,null];
(statearr_51856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__);

(statearr_51856[(1)] = (1));

return statearr_51856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1 = (function (state_51845){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_51845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e51857){if((e51857 instanceof Object)){
var ex__19467__auto__ = e51857;
var statearr_51858_51993 = state_51845;
(statearr_51858_51993[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51994 = state_51845;
state_51845 = G__51994;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = function(state_51845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1.call(this,state_51845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__;
})()
;})(__51974,switch__19463__auto__,c__19484__auto___51986,G__51805_51975,n__18094__auto___51973,jobs,results,process,async))
})();
var state__19486__auto__ = (function (){var statearr_51859 = f__19485__auto__.call(null);
(statearr_51859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___51986);

return statearr_51859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(__51974,c__19484__auto___51986,G__51805_51975,n__18094__auto___51973,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__51995 = (__51974 + (1));
__51974 = G__51995;
continue;
} else {
}
break;
}

var c__19484__auto___51996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___51996,jobs,results,process,async){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___51996,jobs,results,process,async){
return (function (state_51881){
var state_val_51882 = (state_51881[(1)]);
if((state_val_51882 === (1))){
var state_51881__$1 = state_51881;
var statearr_51883_51997 = state_51881__$1;
(statearr_51883_51997[(2)] = null);

(statearr_51883_51997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (2))){
var state_51881__$1 = state_51881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51881__$1,(4),from);
} else {
if((state_val_51882 === (3))){
var inst_51879 = (state_51881[(2)]);
var state_51881__$1 = state_51881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51881__$1,inst_51879);
} else {
if((state_val_51882 === (4))){
var inst_51862 = (state_51881[(7)]);
var inst_51862__$1 = (state_51881[(2)]);
var inst_51863 = (inst_51862__$1 == null);
var state_51881__$1 = (function (){var statearr_51884 = state_51881;
(statearr_51884[(7)] = inst_51862__$1);

return statearr_51884;
})();
if(cljs.core.truth_(inst_51863)){
var statearr_51885_51998 = state_51881__$1;
(statearr_51885_51998[(1)] = (5));

} else {
var statearr_51886_51999 = state_51881__$1;
(statearr_51886_51999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (5))){
var inst_51865 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51881__$1 = state_51881;
var statearr_51887_52000 = state_51881__$1;
(statearr_51887_52000[(2)] = inst_51865);

(statearr_51887_52000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (6))){
var inst_51867 = (state_51881[(8)]);
var inst_51862 = (state_51881[(7)]);
var inst_51867__$1 = cljs.core.async.chan.call(null,(1));
var inst_51868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51869 = [inst_51862,inst_51867__$1];
var inst_51870 = (new cljs.core.PersistentVector(null,2,(5),inst_51868,inst_51869,null));
var state_51881__$1 = (function (){var statearr_51888 = state_51881;
(statearr_51888[(8)] = inst_51867__$1);

return statearr_51888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51881__$1,(8),jobs,inst_51870);
} else {
if((state_val_51882 === (7))){
var inst_51877 = (state_51881[(2)]);
var state_51881__$1 = state_51881;
var statearr_51889_52001 = state_51881__$1;
(statearr_51889_52001[(2)] = inst_51877);

(statearr_51889_52001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (8))){
var inst_51867 = (state_51881[(8)]);
var inst_51872 = (state_51881[(2)]);
var state_51881__$1 = (function (){var statearr_51890 = state_51881;
(statearr_51890[(9)] = inst_51872);

return statearr_51890;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51881__$1,(9),results,inst_51867);
} else {
if((state_val_51882 === (9))){
var inst_51874 = (state_51881[(2)]);
var state_51881__$1 = (function (){var statearr_51891 = state_51881;
(statearr_51891[(10)] = inst_51874);

return statearr_51891;
})();
var statearr_51892_52002 = state_51881__$1;
(statearr_51892_52002[(2)] = null);

(statearr_51892_52002[(1)] = (2));


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
});})(c__19484__auto___51996,jobs,results,process,async))
;
return ((function (switch__19463__auto__,c__19484__auto___51996,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0 = (function (){
var statearr_51896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__);

(statearr_51896[(1)] = (1));

return statearr_51896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1 = (function (state_51881){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_51881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e51897){if((e51897 instanceof Object)){
var ex__19467__auto__ = e51897;
var statearr_51898_52003 = state_51881;
(statearr_51898_52003[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52004 = state_51881;
state_51881 = G__52004;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = function(state_51881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1.call(this,state_51881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___51996,jobs,results,process,async))
})();
var state__19486__auto__ = (function (){var statearr_51899 = f__19485__auto__.call(null);
(statearr_51899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___51996);

return statearr_51899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___51996,jobs,results,process,async))
);


var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__,jobs,results,process,async){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__,jobs,results,process,async){
return (function (state_51937){
var state_val_51938 = (state_51937[(1)]);
if((state_val_51938 === (7))){
var inst_51933 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51939_52005 = state_51937__$1;
(statearr_51939_52005[(2)] = inst_51933);

(statearr_51939_52005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (20))){
var state_51937__$1 = state_51937;
var statearr_51940_52006 = state_51937__$1;
(statearr_51940_52006[(2)] = null);

(statearr_51940_52006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (1))){
var state_51937__$1 = state_51937;
var statearr_51941_52007 = state_51937__$1;
(statearr_51941_52007[(2)] = null);

(statearr_51941_52007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (4))){
var inst_51902 = (state_51937[(7)]);
var inst_51902__$1 = (state_51937[(2)]);
var inst_51903 = (inst_51902__$1 == null);
var state_51937__$1 = (function (){var statearr_51942 = state_51937;
(statearr_51942[(7)] = inst_51902__$1);

return statearr_51942;
})();
if(cljs.core.truth_(inst_51903)){
var statearr_51943_52008 = state_51937__$1;
(statearr_51943_52008[(1)] = (5));

} else {
var statearr_51944_52009 = state_51937__$1;
(statearr_51944_52009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (15))){
var inst_51915 = (state_51937[(8)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51937__$1,(18),to,inst_51915);
} else {
if((state_val_51938 === (21))){
var inst_51928 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51945_52010 = state_51937__$1;
(statearr_51945_52010[(2)] = inst_51928);

(statearr_51945_52010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (13))){
var inst_51930 = (state_51937[(2)]);
var state_51937__$1 = (function (){var statearr_51946 = state_51937;
(statearr_51946[(9)] = inst_51930);

return statearr_51946;
})();
var statearr_51947_52011 = state_51937__$1;
(statearr_51947_52011[(2)] = null);

(statearr_51947_52011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (6))){
var inst_51902 = (state_51937[(7)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51937__$1,(11),inst_51902);
} else {
if((state_val_51938 === (17))){
var inst_51923 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51923)){
var statearr_51948_52012 = state_51937__$1;
(statearr_51948_52012[(1)] = (19));

} else {
var statearr_51949_52013 = state_51937__$1;
(statearr_51949_52013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (3))){
var inst_51935 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51937__$1,inst_51935);
} else {
if((state_val_51938 === (12))){
var inst_51912 = (state_51937[(10)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51937__$1,(14),inst_51912);
} else {
if((state_val_51938 === (2))){
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51937__$1,(4),results);
} else {
if((state_val_51938 === (19))){
var state_51937__$1 = state_51937;
var statearr_51950_52014 = state_51937__$1;
(statearr_51950_52014[(2)] = null);

(statearr_51950_52014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (11))){
var inst_51912 = (state_51937[(2)]);
var state_51937__$1 = (function (){var statearr_51951 = state_51937;
(statearr_51951[(10)] = inst_51912);

return statearr_51951;
})();
var statearr_51952_52015 = state_51937__$1;
(statearr_51952_52015[(2)] = null);

(statearr_51952_52015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (9))){
var state_51937__$1 = state_51937;
var statearr_51953_52016 = state_51937__$1;
(statearr_51953_52016[(2)] = null);

(statearr_51953_52016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (5))){
var state_51937__$1 = state_51937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51954_52017 = state_51937__$1;
(statearr_51954_52017[(1)] = (8));

} else {
var statearr_51955_52018 = state_51937__$1;
(statearr_51955_52018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (14))){
var inst_51915 = (state_51937[(8)]);
var inst_51917 = (state_51937[(11)]);
var inst_51915__$1 = (state_51937[(2)]);
var inst_51916 = (inst_51915__$1 == null);
var inst_51917__$1 = cljs.core.not.call(null,inst_51916);
var state_51937__$1 = (function (){var statearr_51956 = state_51937;
(statearr_51956[(8)] = inst_51915__$1);

(statearr_51956[(11)] = inst_51917__$1);

return statearr_51956;
})();
if(inst_51917__$1){
var statearr_51957_52019 = state_51937__$1;
(statearr_51957_52019[(1)] = (15));

} else {
var statearr_51958_52020 = state_51937__$1;
(statearr_51958_52020[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (16))){
var inst_51917 = (state_51937[(11)]);
var state_51937__$1 = state_51937;
var statearr_51959_52021 = state_51937__$1;
(statearr_51959_52021[(2)] = inst_51917);

(statearr_51959_52021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (10))){
var inst_51909 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51960_52022 = state_51937__$1;
(statearr_51960_52022[(2)] = inst_51909);

(statearr_51960_52022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (18))){
var inst_51920 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51961_52023 = state_51937__$1;
(statearr_51961_52023[(2)] = inst_51920);

(statearr_51961_52023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (8))){
var inst_51906 = cljs.core.async.close_BANG_.call(null,to);
var state_51937__$1 = state_51937;
var statearr_51962_52024 = state_51937__$1;
(statearr_51962_52024[(2)] = inst_51906);

(statearr_51962_52024[(1)] = (10));


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
});})(c__19484__auto__,jobs,results,process,async))
;
return ((function (switch__19463__auto__,c__19484__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0 = (function (){
var statearr_51966 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__);

(statearr_51966[(1)] = (1));

return statearr_51966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1 = (function (state_51937){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_51937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e51967){if((e51967 instanceof Object)){
var ex__19467__auto__ = e51967;
var statearr_51968_52025 = state_51937;
(statearr_51968_52025[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52026 = state_51937;
state_51937 = G__52026;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__ = function(state_51937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1.call(this,state_51937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19464__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__,jobs,results,process,async))
})();
var state__19486__auto__ = (function (){var statearr_51969 = f__19485__auto__.call(null);
(statearr_51969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_51969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__,jobs,results,process,async))
);

return c__19484__auto__;
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
var args52027 = [];
var len__18249__auto___52030 = arguments.length;
var i__18250__auto___52031 = (0);
while(true){
if((i__18250__auto___52031 < len__18249__auto___52030)){
args52027.push((arguments[i__18250__auto___52031]));

var G__52032 = (i__18250__auto___52031 + (1));
i__18250__auto___52031 = G__52032;
continue;
} else {
}
break;
}

var G__52029 = args52027.length;
switch (G__52029) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52027.length)].join('')));

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
var args52034 = [];
var len__18249__auto___52037 = arguments.length;
var i__18250__auto___52038 = (0);
while(true){
if((i__18250__auto___52038 < len__18249__auto___52037)){
args52034.push((arguments[i__18250__auto___52038]));

var G__52039 = (i__18250__auto___52038 + (1));
i__18250__auto___52038 = G__52039;
continue;
} else {
}
break;
}

var G__52036 = args52034.length;
switch (G__52036) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52034.length)].join('')));

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
var args52041 = [];
var len__18249__auto___52094 = arguments.length;
var i__18250__auto___52095 = (0);
while(true){
if((i__18250__auto___52095 < len__18249__auto___52094)){
args52041.push((arguments[i__18250__auto___52095]));

var G__52096 = (i__18250__auto___52095 + (1));
i__18250__auto___52095 = G__52096;
continue;
} else {
}
break;
}

var G__52043 = args52041.length;
switch (G__52043) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52041.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19484__auto___52098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___52098,tc,fc){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___52098,tc,fc){
return (function (state_52069){
var state_val_52070 = (state_52069[(1)]);
if((state_val_52070 === (7))){
var inst_52065 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
var statearr_52071_52099 = state_52069__$1;
(statearr_52071_52099[(2)] = inst_52065);

(statearr_52071_52099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (1))){
var state_52069__$1 = state_52069;
var statearr_52072_52100 = state_52069__$1;
(statearr_52072_52100[(2)] = null);

(statearr_52072_52100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (4))){
var inst_52046 = (state_52069[(7)]);
var inst_52046__$1 = (state_52069[(2)]);
var inst_52047 = (inst_52046__$1 == null);
var state_52069__$1 = (function (){var statearr_52073 = state_52069;
(statearr_52073[(7)] = inst_52046__$1);

return statearr_52073;
})();
if(cljs.core.truth_(inst_52047)){
var statearr_52074_52101 = state_52069__$1;
(statearr_52074_52101[(1)] = (5));

} else {
var statearr_52075_52102 = state_52069__$1;
(statearr_52075_52102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (13))){
var state_52069__$1 = state_52069;
var statearr_52076_52103 = state_52069__$1;
(statearr_52076_52103[(2)] = null);

(statearr_52076_52103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (6))){
var inst_52046 = (state_52069[(7)]);
var inst_52052 = p.call(null,inst_52046);
var state_52069__$1 = state_52069;
if(cljs.core.truth_(inst_52052)){
var statearr_52077_52104 = state_52069__$1;
(statearr_52077_52104[(1)] = (9));

} else {
var statearr_52078_52105 = state_52069__$1;
(statearr_52078_52105[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (3))){
var inst_52067 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52069__$1,inst_52067);
} else {
if((state_val_52070 === (12))){
var state_52069__$1 = state_52069;
var statearr_52079_52106 = state_52069__$1;
(statearr_52079_52106[(2)] = null);

(statearr_52079_52106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (2))){
var state_52069__$1 = state_52069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52069__$1,(4),ch);
} else {
if((state_val_52070 === (11))){
var inst_52046 = (state_52069[(7)]);
var inst_52056 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52069__$1,(8),inst_52056,inst_52046);
} else {
if((state_val_52070 === (9))){
var state_52069__$1 = state_52069;
var statearr_52080_52107 = state_52069__$1;
(statearr_52080_52107[(2)] = tc);

(statearr_52080_52107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (5))){
var inst_52049 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52050 = cljs.core.async.close_BANG_.call(null,fc);
var state_52069__$1 = (function (){var statearr_52081 = state_52069;
(statearr_52081[(8)] = inst_52049);

return statearr_52081;
})();
var statearr_52082_52108 = state_52069__$1;
(statearr_52082_52108[(2)] = inst_52050);

(statearr_52082_52108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (14))){
var inst_52063 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
var statearr_52083_52109 = state_52069__$1;
(statearr_52083_52109[(2)] = inst_52063);

(statearr_52083_52109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (10))){
var state_52069__$1 = state_52069;
var statearr_52084_52110 = state_52069__$1;
(statearr_52084_52110[(2)] = fc);

(statearr_52084_52110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (8))){
var inst_52058 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
if(cljs.core.truth_(inst_52058)){
var statearr_52085_52111 = state_52069__$1;
(statearr_52085_52111[(1)] = (12));

} else {
var statearr_52086_52112 = state_52069__$1;
(statearr_52086_52112[(1)] = (13));

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
});})(c__19484__auto___52098,tc,fc))
;
return ((function (switch__19463__auto__,c__19484__auto___52098,tc,fc){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_52090 = [null,null,null,null,null,null,null,null,null];
(statearr_52090[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_52090[(1)] = (1));

return statearr_52090;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_52069){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_52069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e52091){if((e52091 instanceof Object)){
var ex__19467__auto__ = e52091;
var statearr_52092_52113 = state_52069;
(statearr_52092_52113[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52114 = state_52069;
state_52069 = G__52114;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_52069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_52069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___52098,tc,fc))
})();
var state__19486__auto__ = (function (){var statearr_52093 = f__19485__auto__.call(null);
(statearr_52093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___52098);

return statearr_52093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___52098,tc,fc))
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
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_52178){
var state_val_52179 = (state_52178[(1)]);
if((state_val_52179 === (7))){
var inst_52174 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
var statearr_52180_52201 = state_52178__$1;
(statearr_52180_52201[(2)] = inst_52174);

(statearr_52180_52201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52179 === (1))){
var inst_52158 = init;
var state_52178__$1 = (function (){var statearr_52181 = state_52178;
(statearr_52181[(7)] = inst_52158);

return statearr_52181;
})();
var statearr_52182_52202 = state_52178__$1;
(statearr_52182_52202[(2)] = null);

(statearr_52182_52202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52179 === (4))){
var inst_52161 = (state_52178[(8)]);
var inst_52161__$1 = (state_52178[(2)]);
var inst_52162 = (inst_52161__$1 == null);
var state_52178__$1 = (function (){var statearr_52183 = state_52178;
(statearr_52183[(8)] = inst_52161__$1);

return statearr_52183;
})();
if(cljs.core.truth_(inst_52162)){
var statearr_52184_52203 = state_52178__$1;
(statearr_52184_52203[(1)] = (5));

} else {
var statearr_52185_52204 = state_52178__$1;
(statearr_52185_52204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52179 === (6))){
var inst_52165 = (state_52178[(9)]);
var inst_52158 = (state_52178[(7)]);
var inst_52161 = (state_52178[(8)]);
var inst_52165__$1 = f.call(null,inst_52158,inst_52161);
var inst_52166 = cljs.core.reduced_QMARK_.call(null,inst_52165__$1);
var state_52178__$1 = (function (){var statearr_52186 = state_52178;
(statearr_52186[(9)] = inst_52165__$1);

return statearr_52186;
})();
if(inst_52166){
var statearr_52187_52205 = state_52178__$1;
(statearr_52187_52205[(1)] = (8));

} else {
var statearr_52188_52206 = state_52178__$1;
(statearr_52188_52206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52179 === (3))){
var inst_52176 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52178__$1,inst_52176);
} else {
if((state_val_52179 === (2))){
var state_52178__$1 = state_52178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52178__$1,(4),ch);
} else {
if((state_val_52179 === (9))){
var inst_52165 = (state_52178[(9)]);
var inst_52158 = inst_52165;
var state_52178__$1 = (function (){var statearr_52189 = state_52178;
(statearr_52189[(7)] = inst_52158);

return statearr_52189;
})();
var statearr_52190_52207 = state_52178__$1;
(statearr_52190_52207[(2)] = null);

(statearr_52190_52207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52179 === (5))){
var inst_52158 = (state_52178[(7)]);
var state_52178__$1 = state_52178;
var statearr_52191_52208 = state_52178__$1;
(statearr_52191_52208[(2)] = inst_52158);

(statearr_52191_52208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52179 === (10))){
var inst_52172 = (state_52178[(2)]);
var state_52178__$1 = state_52178;
var statearr_52192_52209 = state_52178__$1;
(statearr_52192_52209[(2)] = inst_52172);

(statearr_52192_52209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52179 === (8))){
var inst_52165 = (state_52178[(9)]);
var inst_52168 = cljs.core.deref.call(null,inst_52165);
var state_52178__$1 = state_52178;
var statearr_52193_52210 = state_52178__$1;
(statearr_52193_52210[(2)] = inst_52168);

(statearr_52193_52210[(1)] = (10));


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
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19464__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19464__auto____0 = (function (){
var statearr_52197 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52197[(0)] = cljs$core$async$reduce_$_state_machine__19464__auto__);

(statearr_52197[(1)] = (1));

return statearr_52197;
});
var cljs$core$async$reduce_$_state_machine__19464__auto____1 = (function (state_52178){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_52178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e52198){if((e52198 instanceof Object)){
var ex__19467__auto__ = e52198;
var statearr_52199_52211 = state_52178;
(statearr_52199_52211[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52212 = state_52178;
state_52178 = G__52212;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19464__auto__ = function(state_52178){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19464__auto____1.call(this,state_52178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19464__auto____0;
cljs$core$async$reduce_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19464__auto____1;
return cljs$core$async$reduce_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_52200 = f__19485__auto__.call(null);
(statearr_52200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_52200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
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
var args52213 = [];
var len__18249__auto___52265 = arguments.length;
var i__18250__auto___52266 = (0);
while(true){
if((i__18250__auto___52266 < len__18249__auto___52265)){
args52213.push((arguments[i__18250__auto___52266]));

var G__52267 = (i__18250__auto___52266 + (1));
i__18250__auto___52266 = G__52267;
continue;
} else {
}
break;
}

var G__52215 = args52213.length;
switch (G__52215) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52213.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_52240){
var state_val_52241 = (state_52240[(1)]);
if((state_val_52241 === (7))){
var inst_52222 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
var statearr_52242_52269 = state_52240__$1;
(statearr_52242_52269[(2)] = inst_52222);

(statearr_52242_52269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (1))){
var inst_52216 = cljs.core.seq.call(null,coll);
var inst_52217 = inst_52216;
var state_52240__$1 = (function (){var statearr_52243 = state_52240;
(statearr_52243[(7)] = inst_52217);

return statearr_52243;
})();
var statearr_52244_52270 = state_52240__$1;
(statearr_52244_52270[(2)] = null);

(statearr_52244_52270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (4))){
var inst_52217 = (state_52240[(7)]);
var inst_52220 = cljs.core.first.call(null,inst_52217);
var state_52240__$1 = state_52240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52240__$1,(7),ch,inst_52220);
} else {
if((state_val_52241 === (13))){
var inst_52234 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
var statearr_52245_52271 = state_52240__$1;
(statearr_52245_52271[(2)] = inst_52234);

(statearr_52245_52271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (6))){
var inst_52225 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
if(cljs.core.truth_(inst_52225)){
var statearr_52246_52272 = state_52240__$1;
(statearr_52246_52272[(1)] = (8));

} else {
var statearr_52247_52273 = state_52240__$1;
(statearr_52247_52273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (3))){
var inst_52238 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52240__$1,inst_52238);
} else {
if((state_val_52241 === (12))){
var state_52240__$1 = state_52240;
var statearr_52248_52274 = state_52240__$1;
(statearr_52248_52274[(2)] = null);

(statearr_52248_52274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (2))){
var inst_52217 = (state_52240[(7)]);
var state_52240__$1 = state_52240;
if(cljs.core.truth_(inst_52217)){
var statearr_52249_52275 = state_52240__$1;
(statearr_52249_52275[(1)] = (4));

} else {
var statearr_52250_52276 = state_52240__$1;
(statearr_52250_52276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (11))){
var inst_52231 = cljs.core.async.close_BANG_.call(null,ch);
var state_52240__$1 = state_52240;
var statearr_52251_52277 = state_52240__$1;
(statearr_52251_52277[(2)] = inst_52231);

(statearr_52251_52277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (9))){
var state_52240__$1 = state_52240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52252_52278 = state_52240__$1;
(statearr_52252_52278[(1)] = (11));

} else {
var statearr_52253_52279 = state_52240__$1;
(statearr_52253_52279[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (5))){
var inst_52217 = (state_52240[(7)]);
var state_52240__$1 = state_52240;
var statearr_52254_52280 = state_52240__$1;
(statearr_52254_52280[(2)] = inst_52217);

(statearr_52254_52280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (10))){
var inst_52236 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
var statearr_52255_52281 = state_52240__$1;
(statearr_52255_52281[(2)] = inst_52236);

(statearr_52255_52281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (8))){
var inst_52217 = (state_52240[(7)]);
var inst_52227 = cljs.core.next.call(null,inst_52217);
var inst_52217__$1 = inst_52227;
var state_52240__$1 = (function (){var statearr_52256 = state_52240;
(statearr_52256[(7)] = inst_52217__$1);

return statearr_52256;
})();
var statearr_52257_52282 = state_52240__$1;
(statearr_52257_52282[(2)] = null);

(statearr_52257_52282[(1)] = (2));


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
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_52261 = [null,null,null,null,null,null,null,null];
(statearr_52261[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_52261[(1)] = (1));

return statearr_52261;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_52240){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_52240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e52262){if((e52262 instanceof Object)){
var ex__19467__auto__ = e52262;
var statearr_52263_52283 = state_52240;
(statearr_52263_52283[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52284 = state_52240;
state_52240 = G__52284;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_52240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_52240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_52264 = f__19485__auto__.call(null);
(statearr_52264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_52264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
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
var x__17846__auto__ = (((_ == null))?null:_);
var m__17847__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,_);
} else {
var m__17847__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,_);
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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17847__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch);
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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m);
} else {
var m__17847__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async52506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52506 = (function (mult,ch,cs,meta52507){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta52507 = meta52507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52508,meta52507__$1){
var self__ = this;
var _52508__$1 = this;
return (new cljs.core.async.t_cljs$core$async52506(self__.mult,self__.ch,self__.cs,meta52507__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52508){
var self__ = this;
var _52508__$1 = this;
return self__.meta52507;
});})(cs))
;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52506.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52506.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52507","meta52507",74419366,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52506";

cljs.core.async.t_cljs$core$async52506.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async52506");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async52506 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52506(mult__$1,ch__$1,cs__$1,meta52507){
return (new cljs.core.async.t_cljs$core$async52506(mult__$1,ch__$1,cs__$1,meta52507));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52506(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19484__auto___52727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___52727,cs,m,dchan,dctr,done){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___52727,cs,m,dchan,dctr,done){
return (function (state_52639){
var state_val_52640 = (state_52639[(1)]);
if((state_val_52640 === (7))){
var inst_52635 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52641_52728 = state_52639__$1;
(statearr_52641_52728[(2)] = inst_52635);

(statearr_52641_52728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (20))){
var inst_52540 = (state_52639[(7)]);
var inst_52550 = cljs.core.first.call(null,inst_52540);
var inst_52551 = cljs.core.nth.call(null,inst_52550,(0),null);
var inst_52552 = cljs.core.nth.call(null,inst_52550,(1),null);
var state_52639__$1 = (function (){var statearr_52642 = state_52639;
(statearr_52642[(8)] = inst_52551);

return statearr_52642;
})();
if(cljs.core.truth_(inst_52552)){
var statearr_52643_52729 = state_52639__$1;
(statearr_52643_52729[(1)] = (22));

} else {
var statearr_52644_52730 = state_52639__$1;
(statearr_52644_52730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (27))){
var inst_52582 = (state_52639[(9)]);
var inst_52511 = (state_52639[(10)]);
var inst_52580 = (state_52639[(11)]);
var inst_52587 = (state_52639[(12)]);
var inst_52587__$1 = cljs.core._nth.call(null,inst_52580,inst_52582);
var inst_52588 = cljs.core.async.put_BANG_.call(null,inst_52587__$1,inst_52511,done);
var state_52639__$1 = (function (){var statearr_52645 = state_52639;
(statearr_52645[(12)] = inst_52587__$1);

return statearr_52645;
})();
if(cljs.core.truth_(inst_52588)){
var statearr_52646_52731 = state_52639__$1;
(statearr_52646_52731[(1)] = (30));

} else {
var statearr_52647_52732 = state_52639__$1;
(statearr_52647_52732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (1))){
var state_52639__$1 = state_52639;
var statearr_52648_52733 = state_52639__$1;
(statearr_52648_52733[(2)] = null);

(statearr_52648_52733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (24))){
var inst_52540 = (state_52639[(7)]);
var inst_52557 = (state_52639[(2)]);
var inst_52558 = cljs.core.next.call(null,inst_52540);
var inst_52520 = inst_52558;
var inst_52521 = null;
var inst_52522 = (0);
var inst_52523 = (0);
var state_52639__$1 = (function (){var statearr_52649 = state_52639;
(statearr_52649[(13)] = inst_52523);

(statearr_52649[(14)] = inst_52522);

(statearr_52649[(15)] = inst_52520);

(statearr_52649[(16)] = inst_52557);

(statearr_52649[(17)] = inst_52521);

return statearr_52649;
})();
var statearr_52650_52734 = state_52639__$1;
(statearr_52650_52734[(2)] = null);

(statearr_52650_52734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (39))){
var state_52639__$1 = state_52639;
var statearr_52654_52735 = state_52639__$1;
(statearr_52654_52735[(2)] = null);

(statearr_52654_52735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (4))){
var inst_52511 = (state_52639[(10)]);
var inst_52511__$1 = (state_52639[(2)]);
var inst_52512 = (inst_52511__$1 == null);
var state_52639__$1 = (function (){var statearr_52655 = state_52639;
(statearr_52655[(10)] = inst_52511__$1);

return statearr_52655;
})();
if(cljs.core.truth_(inst_52512)){
var statearr_52656_52736 = state_52639__$1;
(statearr_52656_52736[(1)] = (5));

} else {
var statearr_52657_52737 = state_52639__$1;
(statearr_52657_52737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (15))){
var inst_52523 = (state_52639[(13)]);
var inst_52522 = (state_52639[(14)]);
var inst_52520 = (state_52639[(15)]);
var inst_52521 = (state_52639[(17)]);
var inst_52536 = (state_52639[(2)]);
var inst_52537 = (inst_52523 + (1));
var tmp52651 = inst_52522;
var tmp52652 = inst_52520;
var tmp52653 = inst_52521;
var inst_52520__$1 = tmp52652;
var inst_52521__$1 = tmp52653;
var inst_52522__$1 = tmp52651;
var inst_52523__$1 = inst_52537;
var state_52639__$1 = (function (){var statearr_52658 = state_52639;
(statearr_52658[(13)] = inst_52523__$1);

(statearr_52658[(18)] = inst_52536);

(statearr_52658[(14)] = inst_52522__$1);

(statearr_52658[(15)] = inst_52520__$1);

(statearr_52658[(17)] = inst_52521__$1);

return statearr_52658;
})();
var statearr_52659_52738 = state_52639__$1;
(statearr_52659_52738[(2)] = null);

(statearr_52659_52738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (21))){
var inst_52561 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52663_52739 = state_52639__$1;
(statearr_52663_52739[(2)] = inst_52561);

(statearr_52663_52739[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (31))){
var inst_52587 = (state_52639[(12)]);
var inst_52591 = done.call(null,null);
var inst_52592 = cljs.core.async.untap_STAR_.call(null,m,inst_52587);
var state_52639__$1 = (function (){var statearr_52664 = state_52639;
(statearr_52664[(19)] = inst_52591);

return statearr_52664;
})();
var statearr_52665_52740 = state_52639__$1;
(statearr_52665_52740[(2)] = inst_52592);

(statearr_52665_52740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (32))){
var inst_52581 = (state_52639[(20)]);
var inst_52582 = (state_52639[(9)]);
var inst_52579 = (state_52639[(21)]);
var inst_52580 = (state_52639[(11)]);
var inst_52594 = (state_52639[(2)]);
var inst_52595 = (inst_52582 + (1));
var tmp52660 = inst_52581;
var tmp52661 = inst_52579;
var tmp52662 = inst_52580;
var inst_52579__$1 = tmp52661;
var inst_52580__$1 = tmp52662;
var inst_52581__$1 = tmp52660;
var inst_52582__$1 = inst_52595;
var state_52639__$1 = (function (){var statearr_52666 = state_52639;
(statearr_52666[(20)] = inst_52581__$1);

(statearr_52666[(22)] = inst_52594);

(statearr_52666[(9)] = inst_52582__$1);

(statearr_52666[(21)] = inst_52579__$1);

(statearr_52666[(11)] = inst_52580__$1);

return statearr_52666;
})();
var statearr_52667_52741 = state_52639__$1;
(statearr_52667_52741[(2)] = null);

(statearr_52667_52741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (40))){
var inst_52607 = (state_52639[(23)]);
var inst_52611 = done.call(null,null);
var inst_52612 = cljs.core.async.untap_STAR_.call(null,m,inst_52607);
var state_52639__$1 = (function (){var statearr_52668 = state_52639;
(statearr_52668[(24)] = inst_52611);

return statearr_52668;
})();
var statearr_52669_52742 = state_52639__$1;
(statearr_52669_52742[(2)] = inst_52612);

(statearr_52669_52742[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (33))){
var inst_52598 = (state_52639[(25)]);
var inst_52600 = cljs.core.chunked_seq_QMARK_.call(null,inst_52598);
var state_52639__$1 = state_52639;
if(inst_52600){
var statearr_52670_52743 = state_52639__$1;
(statearr_52670_52743[(1)] = (36));

} else {
var statearr_52671_52744 = state_52639__$1;
(statearr_52671_52744[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (13))){
var inst_52530 = (state_52639[(26)]);
var inst_52533 = cljs.core.async.close_BANG_.call(null,inst_52530);
var state_52639__$1 = state_52639;
var statearr_52672_52745 = state_52639__$1;
(statearr_52672_52745[(2)] = inst_52533);

(statearr_52672_52745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (22))){
var inst_52551 = (state_52639[(8)]);
var inst_52554 = cljs.core.async.close_BANG_.call(null,inst_52551);
var state_52639__$1 = state_52639;
var statearr_52673_52746 = state_52639__$1;
(statearr_52673_52746[(2)] = inst_52554);

(statearr_52673_52746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (36))){
var inst_52598 = (state_52639[(25)]);
var inst_52602 = cljs.core.chunk_first.call(null,inst_52598);
var inst_52603 = cljs.core.chunk_rest.call(null,inst_52598);
var inst_52604 = cljs.core.count.call(null,inst_52602);
var inst_52579 = inst_52603;
var inst_52580 = inst_52602;
var inst_52581 = inst_52604;
var inst_52582 = (0);
var state_52639__$1 = (function (){var statearr_52674 = state_52639;
(statearr_52674[(20)] = inst_52581);

(statearr_52674[(9)] = inst_52582);

(statearr_52674[(21)] = inst_52579);

(statearr_52674[(11)] = inst_52580);

return statearr_52674;
})();
var statearr_52675_52747 = state_52639__$1;
(statearr_52675_52747[(2)] = null);

(statearr_52675_52747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (41))){
var inst_52598 = (state_52639[(25)]);
var inst_52614 = (state_52639[(2)]);
var inst_52615 = cljs.core.next.call(null,inst_52598);
var inst_52579 = inst_52615;
var inst_52580 = null;
var inst_52581 = (0);
var inst_52582 = (0);
var state_52639__$1 = (function (){var statearr_52676 = state_52639;
(statearr_52676[(20)] = inst_52581);

(statearr_52676[(9)] = inst_52582);

(statearr_52676[(21)] = inst_52579);

(statearr_52676[(27)] = inst_52614);

(statearr_52676[(11)] = inst_52580);

return statearr_52676;
})();
var statearr_52677_52748 = state_52639__$1;
(statearr_52677_52748[(2)] = null);

(statearr_52677_52748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (43))){
var state_52639__$1 = state_52639;
var statearr_52678_52749 = state_52639__$1;
(statearr_52678_52749[(2)] = null);

(statearr_52678_52749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (29))){
var inst_52623 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52679_52750 = state_52639__$1;
(statearr_52679_52750[(2)] = inst_52623);

(statearr_52679_52750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (44))){
var inst_52632 = (state_52639[(2)]);
var state_52639__$1 = (function (){var statearr_52680 = state_52639;
(statearr_52680[(28)] = inst_52632);

return statearr_52680;
})();
var statearr_52681_52751 = state_52639__$1;
(statearr_52681_52751[(2)] = null);

(statearr_52681_52751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (6))){
var inst_52571 = (state_52639[(29)]);
var inst_52570 = cljs.core.deref.call(null,cs);
var inst_52571__$1 = cljs.core.keys.call(null,inst_52570);
var inst_52572 = cljs.core.count.call(null,inst_52571__$1);
var inst_52573 = cljs.core.reset_BANG_.call(null,dctr,inst_52572);
var inst_52578 = cljs.core.seq.call(null,inst_52571__$1);
var inst_52579 = inst_52578;
var inst_52580 = null;
var inst_52581 = (0);
var inst_52582 = (0);
var state_52639__$1 = (function (){var statearr_52682 = state_52639;
(statearr_52682[(30)] = inst_52573);

(statearr_52682[(20)] = inst_52581);

(statearr_52682[(9)] = inst_52582);

(statearr_52682[(21)] = inst_52579);

(statearr_52682[(29)] = inst_52571__$1);

(statearr_52682[(11)] = inst_52580);

return statearr_52682;
})();
var statearr_52683_52752 = state_52639__$1;
(statearr_52683_52752[(2)] = null);

(statearr_52683_52752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (28))){
var inst_52598 = (state_52639[(25)]);
var inst_52579 = (state_52639[(21)]);
var inst_52598__$1 = cljs.core.seq.call(null,inst_52579);
var state_52639__$1 = (function (){var statearr_52684 = state_52639;
(statearr_52684[(25)] = inst_52598__$1);

return statearr_52684;
})();
if(inst_52598__$1){
var statearr_52685_52753 = state_52639__$1;
(statearr_52685_52753[(1)] = (33));

} else {
var statearr_52686_52754 = state_52639__$1;
(statearr_52686_52754[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (25))){
var inst_52581 = (state_52639[(20)]);
var inst_52582 = (state_52639[(9)]);
var inst_52584 = (inst_52582 < inst_52581);
var inst_52585 = inst_52584;
var state_52639__$1 = state_52639;
if(cljs.core.truth_(inst_52585)){
var statearr_52687_52755 = state_52639__$1;
(statearr_52687_52755[(1)] = (27));

} else {
var statearr_52688_52756 = state_52639__$1;
(statearr_52688_52756[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (34))){
var state_52639__$1 = state_52639;
var statearr_52689_52757 = state_52639__$1;
(statearr_52689_52757[(2)] = null);

(statearr_52689_52757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (17))){
var state_52639__$1 = state_52639;
var statearr_52690_52758 = state_52639__$1;
(statearr_52690_52758[(2)] = null);

(statearr_52690_52758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (3))){
var inst_52637 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52639__$1,inst_52637);
} else {
if((state_val_52640 === (12))){
var inst_52566 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52691_52759 = state_52639__$1;
(statearr_52691_52759[(2)] = inst_52566);

(statearr_52691_52759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (2))){
var state_52639__$1 = state_52639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52639__$1,(4),ch);
} else {
if((state_val_52640 === (23))){
var state_52639__$1 = state_52639;
var statearr_52692_52760 = state_52639__$1;
(statearr_52692_52760[(2)] = null);

(statearr_52692_52760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (35))){
var inst_52621 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52693_52761 = state_52639__$1;
(statearr_52693_52761[(2)] = inst_52621);

(statearr_52693_52761[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (19))){
var inst_52540 = (state_52639[(7)]);
var inst_52544 = cljs.core.chunk_first.call(null,inst_52540);
var inst_52545 = cljs.core.chunk_rest.call(null,inst_52540);
var inst_52546 = cljs.core.count.call(null,inst_52544);
var inst_52520 = inst_52545;
var inst_52521 = inst_52544;
var inst_52522 = inst_52546;
var inst_52523 = (0);
var state_52639__$1 = (function (){var statearr_52694 = state_52639;
(statearr_52694[(13)] = inst_52523);

(statearr_52694[(14)] = inst_52522);

(statearr_52694[(15)] = inst_52520);

(statearr_52694[(17)] = inst_52521);

return statearr_52694;
})();
var statearr_52695_52762 = state_52639__$1;
(statearr_52695_52762[(2)] = null);

(statearr_52695_52762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (11))){
var inst_52520 = (state_52639[(15)]);
var inst_52540 = (state_52639[(7)]);
var inst_52540__$1 = cljs.core.seq.call(null,inst_52520);
var state_52639__$1 = (function (){var statearr_52696 = state_52639;
(statearr_52696[(7)] = inst_52540__$1);

return statearr_52696;
})();
if(inst_52540__$1){
var statearr_52697_52763 = state_52639__$1;
(statearr_52697_52763[(1)] = (16));

} else {
var statearr_52698_52764 = state_52639__$1;
(statearr_52698_52764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (9))){
var inst_52568 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52699_52765 = state_52639__$1;
(statearr_52699_52765[(2)] = inst_52568);

(statearr_52699_52765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (5))){
var inst_52518 = cljs.core.deref.call(null,cs);
var inst_52519 = cljs.core.seq.call(null,inst_52518);
var inst_52520 = inst_52519;
var inst_52521 = null;
var inst_52522 = (0);
var inst_52523 = (0);
var state_52639__$1 = (function (){var statearr_52700 = state_52639;
(statearr_52700[(13)] = inst_52523);

(statearr_52700[(14)] = inst_52522);

(statearr_52700[(15)] = inst_52520);

(statearr_52700[(17)] = inst_52521);

return statearr_52700;
})();
var statearr_52701_52766 = state_52639__$1;
(statearr_52701_52766[(2)] = null);

(statearr_52701_52766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (14))){
var state_52639__$1 = state_52639;
var statearr_52702_52767 = state_52639__$1;
(statearr_52702_52767[(2)] = null);

(statearr_52702_52767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (45))){
var inst_52629 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52703_52768 = state_52639__$1;
(statearr_52703_52768[(2)] = inst_52629);

(statearr_52703_52768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (26))){
var inst_52571 = (state_52639[(29)]);
var inst_52625 = (state_52639[(2)]);
var inst_52626 = cljs.core.seq.call(null,inst_52571);
var state_52639__$1 = (function (){var statearr_52704 = state_52639;
(statearr_52704[(31)] = inst_52625);

return statearr_52704;
})();
if(inst_52626){
var statearr_52705_52769 = state_52639__$1;
(statearr_52705_52769[(1)] = (42));

} else {
var statearr_52706_52770 = state_52639__$1;
(statearr_52706_52770[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (16))){
var inst_52540 = (state_52639[(7)]);
var inst_52542 = cljs.core.chunked_seq_QMARK_.call(null,inst_52540);
var state_52639__$1 = state_52639;
if(inst_52542){
var statearr_52707_52771 = state_52639__$1;
(statearr_52707_52771[(1)] = (19));

} else {
var statearr_52708_52772 = state_52639__$1;
(statearr_52708_52772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (38))){
var inst_52618 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52709_52773 = state_52639__$1;
(statearr_52709_52773[(2)] = inst_52618);

(statearr_52709_52773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (30))){
var state_52639__$1 = state_52639;
var statearr_52710_52774 = state_52639__$1;
(statearr_52710_52774[(2)] = null);

(statearr_52710_52774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (10))){
var inst_52523 = (state_52639[(13)]);
var inst_52521 = (state_52639[(17)]);
var inst_52529 = cljs.core._nth.call(null,inst_52521,inst_52523);
var inst_52530 = cljs.core.nth.call(null,inst_52529,(0),null);
var inst_52531 = cljs.core.nth.call(null,inst_52529,(1),null);
var state_52639__$1 = (function (){var statearr_52711 = state_52639;
(statearr_52711[(26)] = inst_52530);

return statearr_52711;
})();
if(cljs.core.truth_(inst_52531)){
var statearr_52712_52775 = state_52639__$1;
(statearr_52712_52775[(1)] = (13));

} else {
var statearr_52713_52776 = state_52639__$1;
(statearr_52713_52776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (18))){
var inst_52564 = (state_52639[(2)]);
var state_52639__$1 = state_52639;
var statearr_52714_52777 = state_52639__$1;
(statearr_52714_52777[(2)] = inst_52564);

(statearr_52714_52777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (42))){
var state_52639__$1 = state_52639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52639__$1,(45),dchan);
} else {
if((state_val_52640 === (37))){
var inst_52607 = (state_52639[(23)]);
var inst_52598 = (state_52639[(25)]);
var inst_52511 = (state_52639[(10)]);
var inst_52607__$1 = cljs.core.first.call(null,inst_52598);
var inst_52608 = cljs.core.async.put_BANG_.call(null,inst_52607__$1,inst_52511,done);
var state_52639__$1 = (function (){var statearr_52715 = state_52639;
(statearr_52715[(23)] = inst_52607__$1);

return statearr_52715;
})();
if(cljs.core.truth_(inst_52608)){
var statearr_52716_52778 = state_52639__$1;
(statearr_52716_52778[(1)] = (39));

} else {
var statearr_52717_52779 = state_52639__$1;
(statearr_52717_52779[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (8))){
var inst_52523 = (state_52639[(13)]);
var inst_52522 = (state_52639[(14)]);
var inst_52525 = (inst_52523 < inst_52522);
var inst_52526 = inst_52525;
var state_52639__$1 = state_52639;
if(cljs.core.truth_(inst_52526)){
var statearr_52718_52780 = state_52639__$1;
(statearr_52718_52780[(1)] = (10));

} else {
var statearr_52719_52781 = state_52639__$1;
(statearr_52719_52781[(1)] = (11));

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
});})(c__19484__auto___52727,cs,m,dchan,dctr,done))
;
return ((function (switch__19463__auto__,c__19484__auto___52727,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19464__auto__ = null;
var cljs$core$async$mult_$_state_machine__19464__auto____0 = (function (){
var statearr_52723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52723[(0)] = cljs$core$async$mult_$_state_machine__19464__auto__);

(statearr_52723[(1)] = (1));

return statearr_52723;
});
var cljs$core$async$mult_$_state_machine__19464__auto____1 = (function (state_52639){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_52639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e52724){if((e52724 instanceof Object)){
var ex__19467__auto__ = e52724;
var statearr_52725_52782 = state_52639;
(statearr_52725_52782[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52783 = state_52639;
state_52639 = G__52783;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19464__auto__ = function(state_52639){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19464__auto____1.call(this,state_52639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19464__auto____0;
cljs$core$async$mult_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19464__auto____1;
return cljs$core$async$mult_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___52727,cs,m,dchan,dctr,done))
})();
var state__19486__auto__ = (function (){var statearr_52726 = f__19485__auto__.call(null);
(statearr_52726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___52727);

return statearr_52726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___52727,cs,m,dchan,dctr,done))
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
var args52784 = [];
var len__18249__auto___52787 = arguments.length;
var i__18250__auto___52788 = (0);
while(true){
if((i__18250__auto___52788 < len__18249__auto___52787)){
args52784.push((arguments[i__18250__auto___52788]));

var G__52789 = (i__18250__auto___52788 + (1));
i__18250__auto___52788 = G__52789;
continue;
} else {
}
break;
}

var G__52786 = args52784.length;
switch (G__52786) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52784.length)].join('')));

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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch);
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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch);
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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m);
} else {
var m__17847__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m);
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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,state_map);
} else {
var m__17847__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,state_map);
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
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,mode);
} else {
var m__17847__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18256__auto__ = [];
var len__18249__auto___52801 = arguments.length;
var i__18250__auto___52802 = (0);
while(true){
if((i__18250__auto___52802 < len__18249__auto___52801)){
args__18256__auto__.push((arguments[i__18250__auto___52802]));

var G__52803 = (i__18250__auto___52802 + (1));
i__18250__auto___52802 = G__52803;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((3) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18257__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52795){
var map__52796 = p__52795;
var map__52796__$1 = ((((!((map__52796 == null)))?((((map__52796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52796):map__52796);
var opts = map__52796__$1;
var statearr_52798_52804 = state;
(statearr_52798_52804[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__52796,map__52796__$1,opts){
return (function (val){
var statearr_52799_52805 = state;
(statearr_52799_52805[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__52796,map__52796__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_52800_52806 = state;
(statearr_52800_52806[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52791){
var G__52792 = cljs.core.first.call(null,seq52791);
var seq52791__$1 = cljs.core.next.call(null,seq52791);
var G__52793 = cljs.core.first.call(null,seq52791__$1);
var seq52791__$2 = cljs.core.next.call(null,seq52791__$1);
var G__52794 = cljs.core.first.call(null,seq52791__$2);
var seq52791__$3 = cljs.core.next.call(null,seq52791__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52792,G__52793,G__52794,seq52791__$3);
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
if(typeof cljs.core.async.t_cljs$core$async52970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52970 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52971){
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
this.meta52971 = meta52971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52972,meta52971__$1){
var self__ = this;
var _52972__$1 = this;
return (new cljs.core.async.t_cljs$core$async52970(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52971__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52972){
var self__ = this;
var _52972__$1 = this;
return self__.meta52971;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async52970.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52971","meta52971",466960104,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52970";

cljs.core.async.t_cljs$core$async52970.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async52970");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async52970 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52970(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52971){
return (new cljs.core.async.t_cljs$core$async52970(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52971));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52970(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19484__auto___53133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___53133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___53133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53070){
var state_val_53071 = (state_53070[(1)]);
if((state_val_53071 === (7))){
var inst_52988 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
var statearr_53072_53134 = state_53070__$1;
(statearr_53072_53134[(2)] = inst_52988);

(statearr_53072_53134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (20))){
var inst_53000 = (state_53070[(7)]);
var state_53070__$1 = state_53070;
var statearr_53073_53135 = state_53070__$1;
(statearr_53073_53135[(2)] = inst_53000);

(statearr_53073_53135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (27))){
var state_53070__$1 = state_53070;
var statearr_53074_53136 = state_53070__$1;
(statearr_53074_53136[(2)] = null);

(statearr_53074_53136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (1))){
var inst_52976 = (state_53070[(8)]);
var inst_52976__$1 = calc_state.call(null);
var inst_52978 = (inst_52976__$1 == null);
var inst_52979 = cljs.core.not.call(null,inst_52978);
var state_53070__$1 = (function (){var statearr_53075 = state_53070;
(statearr_53075[(8)] = inst_52976__$1);

return statearr_53075;
})();
if(inst_52979){
var statearr_53076_53137 = state_53070__$1;
(statearr_53076_53137[(1)] = (2));

} else {
var statearr_53077_53138 = state_53070__$1;
(statearr_53077_53138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (24))){
var inst_53030 = (state_53070[(9)]);
var inst_53023 = (state_53070[(10)]);
var inst_53044 = (state_53070[(11)]);
var inst_53044__$1 = inst_53023.call(null,inst_53030);
var state_53070__$1 = (function (){var statearr_53078 = state_53070;
(statearr_53078[(11)] = inst_53044__$1);

return statearr_53078;
})();
if(cljs.core.truth_(inst_53044__$1)){
var statearr_53079_53139 = state_53070__$1;
(statearr_53079_53139[(1)] = (29));

} else {
var statearr_53080_53140 = state_53070__$1;
(statearr_53080_53140[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (4))){
var inst_52991 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
if(cljs.core.truth_(inst_52991)){
var statearr_53081_53141 = state_53070__$1;
(statearr_53081_53141[(1)] = (8));

} else {
var statearr_53082_53142 = state_53070__$1;
(statearr_53082_53142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (15))){
var inst_53017 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
if(cljs.core.truth_(inst_53017)){
var statearr_53083_53143 = state_53070__$1;
(statearr_53083_53143[(1)] = (19));

} else {
var statearr_53084_53144 = state_53070__$1;
(statearr_53084_53144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (21))){
var inst_53022 = (state_53070[(12)]);
var inst_53022__$1 = (state_53070[(2)]);
var inst_53023 = cljs.core.get.call(null,inst_53022__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53024 = cljs.core.get.call(null,inst_53022__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53025 = cljs.core.get.call(null,inst_53022__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53070__$1 = (function (){var statearr_53085 = state_53070;
(statearr_53085[(12)] = inst_53022__$1);

(statearr_53085[(10)] = inst_53023);

(statearr_53085[(13)] = inst_53024);

return statearr_53085;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53070__$1,(22),inst_53025);
} else {
if((state_val_53071 === (31))){
var inst_53052 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
if(cljs.core.truth_(inst_53052)){
var statearr_53086_53145 = state_53070__$1;
(statearr_53086_53145[(1)] = (32));

} else {
var statearr_53087_53146 = state_53070__$1;
(statearr_53087_53146[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (32))){
var inst_53029 = (state_53070[(14)]);
var state_53070__$1 = state_53070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53070__$1,(35),out,inst_53029);
} else {
if((state_val_53071 === (33))){
var inst_53022 = (state_53070[(12)]);
var inst_53000 = inst_53022;
var state_53070__$1 = (function (){var statearr_53088 = state_53070;
(statearr_53088[(7)] = inst_53000);

return statearr_53088;
})();
var statearr_53089_53147 = state_53070__$1;
(statearr_53089_53147[(2)] = null);

(statearr_53089_53147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (13))){
var inst_53000 = (state_53070[(7)]);
var inst_53007 = inst_53000.cljs$lang$protocol_mask$partition0$;
var inst_53008 = (inst_53007 & (64));
var inst_53009 = inst_53000.cljs$core$ISeq$;
var inst_53010 = (inst_53008) || (inst_53009);
var state_53070__$1 = state_53070;
if(cljs.core.truth_(inst_53010)){
var statearr_53090_53148 = state_53070__$1;
(statearr_53090_53148[(1)] = (16));

} else {
var statearr_53091_53149 = state_53070__$1;
(statearr_53091_53149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (22))){
var inst_53029 = (state_53070[(14)]);
var inst_53030 = (state_53070[(9)]);
var inst_53028 = (state_53070[(2)]);
var inst_53029__$1 = cljs.core.nth.call(null,inst_53028,(0),null);
var inst_53030__$1 = cljs.core.nth.call(null,inst_53028,(1),null);
var inst_53031 = (inst_53029__$1 == null);
var inst_53032 = cljs.core._EQ_.call(null,inst_53030__$1,change);
var inst_53033 = (inst_53031) || (inst_53032);
var state_53070__$1 = (function (){var statearr_53092 = state_53070;
(statearr_53092[(14)] = inst_53029__$1);

(statearr_53092[(9)] = inst_53030__$1);

return statearr_53092;
})();
if(cljs.core.truth_(inst_53033)){
var statearr_53093_53150 = state_53070__$1;
(statearr_53093_53150[(1)] = (23));

} else {
var statearr_53094_53151 = state_53070__$1;
(statearr_53094_53151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (36))){
var inst_53022 = (state_53070[(12)]);
var inst_53000 = inst_53022;
var state_53070__$1 = (function (){var statearr_53095 = state_53070;
(statearr_53095[(7)] = inst_53000);

return statearr_53095;
})();
var statearr_53096_53152 = state_53070__$1;
(statearr_53096_53152[(2)] = null);

(statearr_53096_53152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (29))){
var inst_53044 = (state_53070[(11)]);
var state_53070__$1 = state_53070;
var statearr_53097_53153 = state_53070__$1;
(statearr_53097_53153[(2)] = inst_53044);

(statearr_53097_53153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (6))){
var state_53070__$1 = state_53070;
var statearr_53098_53154 = state_53070__$1;
(statearr_53098_53154[(2)] = false);

(statearr_53098_53154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (28))){
var inst_53040 = (state_53070[(2)]);
var inst_53041 = calc_state.call(null);
var inst_53000 = inst_53041;
var state_53070__$1 = (function (){var statearr_53099 = state_53070;
(statearr_53099[(15)] = inst_53040);

(statearr_53099[(7)] = inst_53000);

return statearr_53099;
})();
var statearr_53100_53155 = state_53070__$1;
(statearr_53100_53155[(2)] = null);

(statearr_53100_53155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (25))){
var inst_53066 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
var statearr_53101_53156 = state_53070__$1;
(statearr_53101_53156[(2)] = inst_53066);

(statearr_53101_53156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (34))){
var inst_53064 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
var statearr_53102_53157 = state_53070__$1;
(statearr_53102_53157[(2)] = inst_53064);

(statearr_53102_53157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (17))){
var state_53070__$1 = state_53070;
var statearr_53103_53158 = state_53070__$1;
(statearr_53103_53158[(2)] = false);

(statearr_53103_53158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (3))){
var state_53070__$1 = state_53070;
var statearr_53104_53159 = state_53070__$1;
(statearr_53104_53159[(2)] = false);

(statearr_53104_53159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (12))){
var inst_53068 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53070__$1,inst_53068);
} else {
if((state_val_53071 === (2))){
var inst_52976 = (state_53070[(8)]);
var inst_52981 = inst_52976.cljs$lang$protocol_mask$partition0$;
var inst_52982 = (inst_52981 & (64));
var inst_52983 = inst_52976.cljs$core$ISeq$;
var inst_52984 = (inst_52982) || (inst_52983);
var state_53070__$1 = state_53070;
if(cljs.core.truth_(inst_52984)){
var statearr_53105_53160 = state_53070__$1;
(statearr_53105_53160[(1)] = (5));

} else {
var statearr_53106_53161 = state_53070__$1;
(statearr_53106_53161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (23))){
var inst_53029 = (state_53070[(14)]);
var inst_53035 = (inst_53029 == null);
var state_53070__$1 = state_53070;
if(cljs.core.truth_(inst_53035)){
var statearr_53107_53162 = state_53070__$1;
(statearr_53107_53162[(1)] = (26));

} else {
var statearr_53108_53163 = state_53070__$1;
(statearr_53108_53163[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (35))){
var inst_53055 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
if(cljs.core.truth_(inst_53055)){
var statearr_53109_53164 = state_53070__$1;
(statearr_53109_53164[(1)] = (36));

} else {
var statearr_53110_53165 = state_53070__$1;
(statearr_53110_53165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (19))){
var inst_53000 = (state_53070[(7)]);
var inst_53019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53000);
var state_53070__$1 = state_53070;
var statearr_53111_53166 = state_53070__$1;
(statearr_53111_53166[(2)] = inst_53019);

(statearr_53111_53166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (11))){
var inst_53000 = (state_53070[(7)]);
var inst_53004 = (inst_53000 == null);
var inst_53005 = cljs.core.not.call(null,inst_53004);
var state_53070__$1 = state_53070;
if(inst_53005){
var statearr_53112_53167 = state_53070__$1;
(statearr_53112_53167[(1)] = (13));

} else {
var statearr_53113_53168 = state_53070__$1;
(statearr_53113_53168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (9))){
var inst_52976 = (state_53070[(8)]);
var state_53070__$1 = state_53070;
var statearr_53114_53169 = state_53070__$1;
(statearr_53114_53169[(2)] = inst_52976);

(statearr_53114_53169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (5))){
var state_53070__$1 = state_53070;
var statearr_53115_53170 = state_53070__$1;
(statearr_53115_53170[(2)] = true);

(statearr_53115_53170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (14))){
var state_53070__$1 = state_53070;
var statearr_53116_53171 = state_53070__$1;
(statearr_53116_53171[(2)] = false);

(statearr_53116_53171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (26))){
var inst_53030 = (state_53070[(9)]);
var inst_53037 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53030);
var state_53070__$1 = state_53070;
var statearr_53117_53172 = state_53070__$1;
(statearr_53117_53172[(2)] = inst_53037);

(statearr_53117_53172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (16))){
var state_53070__$1 = state_53070;
var statearr_53118_53173 = state_53070__$1;
(statearr_53118_53173[(2)] = true);

(statearr_53118_53173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (38))){
var inst_53060 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
var statearr_53119_53174 = state_53070__$1;
(statearr_53119_53174[(2)] = inst_53060);

(statearr_53119_53174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (30))){
var inst_53030 = (state_53070[(9)]);
var inst_53023 = (state_53070[(10)]);
var inst_53024 = (state_53070[(13)]);
var inst_53047 = cljs.core.empty_QMARK_.call(null,inst_53023);
var inst_53048 = inst_53024.call(null,inst_53030);
var inst_53049 = cljs.core.not.call(null,inst_53048);
var inst_53050 = (inst_53047) && (inst_53049);
var state_53070__$1 = state_53070;
var statearr_53120_53175 = state_53070__$1;
(statearr_53120_53175[(2)] = inst_53050);

(statearr_53120_53175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (10))){
var inst_52976 = (state_53070[(8)]);
var inst_52996 = (state_53070[(2)]);
var inst_52997 = cljs.core.get.call(null,inst_52996,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52998 = cljs.core.get.call(null,inst_52996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52999 = cljs.core.get.call(null,inst_52996,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53000 = inst_52976;
var state_53070__$1 = (function (){var statearr_53121 = state_53070;
(statearr_53121[(16)] = inst_52997);

(statearr_53121[(7)] = inst_53000);

(statearr_53121[(17)] = inst_52998);

(statearr_53121[(18)] = inst_52999);

return statearr_53121;
})();
var statearr_53122_53176 = state_53070__$1;
(statearr_53122_53176[(2)] = null);

(statearr_53122_53176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (18))){
var inst_53014 = (state_53070[(2)]);
var state_53070__$1 = state_53070;
var statearr_53123_53177 = state_53070__$1;
(statearr_53123_53177[(2)] = inst_53014);

(statearr_53123_53177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (37))){
var state_53070__$1 = state_53070;
var statearr_53124_53178 = state_53070__$1;
(statearr_53124_53178[(2)] = null);

(statearr_53124_53178[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53071 === (8))){
var inst_52976 = (state_53070[(8)]);
var inst_52993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52976);
var state_53070__$1 = state_53070;
var statearr_53125_53179 = state_53070__$1;
(statearr_53125_53179[(2)] = inst_52993);

(statearr_53125_53179[(1)] = (10));


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
});})(c__19484__auto___53133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19463__auto__,c__19484__auto___53133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19464__auto__ = null;
var cljs$core$async$mix_$_state_machine__19464__auto____0 = (function (){
var statearr_53129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53129[(0)] = cljs$core$async$mix_$_state_machine__19464__auto__);

(statearr_53129[(1)] = (1));

return statearr_53129;
});
var cljs$core$async$mix_$_state_machine__19464__auto____1 = (function (state_53070){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53130){if((e53130 instanceof Object)){
var ex__19467__auto__ = e53130;
var statearr_53131_53180 = state_53070;
(statearr_53131_53180[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53181 = state_53070;
state_53070 = G__53181;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19464__auto__ = function(state_53070){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19464__auto____1.call(this,state_53070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19464__auto____0;
cljs$core$async$mix_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19464__auto____1;
return cljs$core$async$mix_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___53133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19486__auto__ = (function (){var statearr_53132 = f__19485__auto__.call(null);
(statearr_53132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___53133);

return statearr_53132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___53133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17847__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p,v,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args53182 = [];
var len__18249__auto___53185 = arguments.length;
var i__18250__auto___53186 = (0);
while(true){
if((i__18250__auto___53186 < len__18249__auto___53185)){
args53182.push((arguments[i__18250__auto___53186]));

var G__53187 = (i__18250__auto___53186 + (1));
i__18250__auto___53186 = G__53187;
continue;
} else {
}
break;
}

var G__53184 = args53182.length;
switch (G__53184) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53182.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p);
} else {
var m__17847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p);
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
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p,v);
} else {
var m__17847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p,v);
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
var args53190 = [];
var len__18249__auto___53315 = arguments.length;
var i__18250__auto___53316 = (0);
while(true){
if((i__18250__auto___53316 < len__18249__auto___53315)){
args53190.push((arguments[i__18250__auto___53316]));

var G__53317 = (i__18250__auto___53316 + (1));
i__18250__auto___53316 = G__53317;
continue;
} else {
}
break;
}

var G__53192 = args53190.length;
switch (G__53192) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53190.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17191__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17191__auto__,mults){
return (function (p1__53189_SHARP_){
if(cljs.core.truth_(p1__53189_SHARP_.call(null,topic))){
return p1__53189_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53189_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17191__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async53193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53193 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53194){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53194 = meta53194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53195,meta53194__$1){
var self__ = this;
var _53195__$1 = this;
return (new cljs.core.async.t_cljs$core$async53193(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53194__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53195){
var self__ = this;
var _53195__$1 = this;
return self__.meta53194;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53193.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53194","meta53194",-2065959956,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53193";

cljs.core.async.t_cljs$core$async53193.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async53193");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async53193 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53194){
return (new cljs.core.async.t_cljs$core$async53193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53194));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53193(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19484__auto___53319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___53319,mults,ensure_mult,p){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___53319,mults,ensure_mult,p){
return (function (state_53267){
var state_val_53268 = (state_53267[(1)]);
if((state_val_53268 === (7))){
var inst_53263 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
var statearr_53269_53320 = state_53267__$1;
(statearr_53269_53320[(2)] = inst_53263);

(statearr_53269_53320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (20))){
var state_53267__$1 = state_53267;
var statearr_53270_53321 = state_53267__$1;
(statearr_53270_53321[(2)] = null);

(statearr_53270_53321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (1))){
var state_53267__$1 = state_53267;
var statearr_53271_53322 = state_53267__$1;
(statearr_53271_53322[(2)] = null);

(statearr_53271_53322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (24))){
var inst_53246 = (state_53267[(7)]);
var inst_53255 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53246);
var state_53267__$1 = state_53267;
var statearr_53272_53323 = state_53267__$1;
(statearr_53272_53323[(2)] = inst_53255);

(statearr_53272_53323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (4))){
var inst_53198 = (state_53267[(8)]);
var inst_53198__$1 = (state_53267[(2)]);
var inst_53199 = (inst_53198__$1 == null);
var state_53267__$1 = (function (){var statearr_53273 = state_53267;
(statearr_53273[(8)] = inst_53198__$1);

return statearr_53273;
})();
if(cljs.core.truth_(inst_53199)){
var statearr_53274_53324 = state_53267__$1;
(statearr_53274_53324[(1)] = (5));

} else {
var statearr_53275_53325 = state_53267__$1;
(statearr_53275_53325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (15))){
var inst_53240 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
var statearr_53276_53326 = state_53267__$1;
(statearr_53276_53326[(2)] = inst_53240);

(statearr_53276_53326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (21))){
var inst_53260 = (state_53267[(2)]);
var state_53267__$1 = (function (){var statearr_53277 = state_53267;
(statearr_53277[(9)] = inst_53260);

return statearr_53277;
})();
var statearr_53278_53327 = state_53267__$1;
(statearr_53278_53327[(2)] = null);

(statearr_53278_53327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (13))){
var inst_53222 = (state_53267[(10)]);
var inst_53224 = cljs.core.chunked_seq_QMARK_.call(null,inst_53222);
var state_53267__$1 = state_53267;
if(inst_53224){
var statearr_53279_53328 = state_53267__$1;
(statearr_53279_53328[(1)] = (16));

} else {
var statearr_53280_53329 = state_53267__$1;
(statearr_53280_53329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (22))){
var inst_53252 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
if(cljs.core.truth_(inst_53252)){
var statearr_53281_53330 = state_53267__$1;
(statearr_53281_53330[(1)] = (23));

} else {
var statearr_53282_53331 = state_53267__$1;
(statearr_53282_53331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (6))){
var inst_53198 = (state_53267[(8)]);
var inst_53248 = (state_53267[(11)]);
var inst_53246 = (state_53267[(7)]);
var inst_53246__$1 = topic_fn.call(null,inst_53198);
var inst_53247 = cljs.core.deref.call(null,mults);
var inst_53248__$1 = cljs.core.get.call(null,inst_53247,inst_53246__$1);
var state_53267__$1 = (function (){var statearr_53283 = state_53267;
(statearr_53283[(11)] = inst_53248__$1);

(statearr_53283[(7)] = inst_53246__$1);

return statearr_53283;
})();
if(cljs.core.truth_(inst_53248__$1)){
var statearr_53284_53332 = state_53267__$1;
(statearr_53284_53332[(1)] = (19));

} else {
var statearr_53285_53333 = state_53267__$1;
(statearr_53285_53333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (25))){
var inst_53257 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
var statearr_53286_53334 = state_53267__$1;
(statearr_53286_53334[(2)] = inst_53257);

(statearr_53286_53334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (17))){
var inst_53222 = (state_53267[(10)]);
var inst_53231 = cljs.core.first.call(null,inst_53222);
var inst_53232 = cljs.core.async.muxch_STAR_.call(null,inst_53231);
var inst_53233 = cljs.core.async.close_BANG_.call(null,inst_53232);
var inst_53234 = cljs.core.next.call(null,inst_53222);
var inst_53208 = inst_53234;
var inst_53209 = null;
var inst_53210 = (0);
var inst_53211 = (0);
var state_53267__$1 = (function (){var statearr_53287 = state_53267;
(statearr_53287[(12)] = inst_53208);

(statearr_53287[(13)] = inst_53210);

(statearr_53287[(14)] = inst_53211);

(statearr_53287[(15)] = inst_53209);

(statearr_53287[(16)] = inst_53233);

return statearr_53287;
})();
var statearr_53288_53335 = state_53267__$1;
(statearr_53288_53335[(2)] = null);

(statearr_53288_53335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (3))){
var inst_53265 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53267__$1,inst_53265);
} else {
if((state_val_53268 === (12))){
var inst_53242 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
var statearr_53289_53336 = state_53267__$1;
(statearr_53289_53336[(2)] = inst_53242);

(statearr_53289_53336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (2))){
var state_53267__$1 = state_53267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53267__$1,(4),ch);
} else {
if((state_val_53268 === (23))){
var state_53267__$1 = state_53267;
var statearr_53290_53337 = state_53267__$1;
(statearr_53290_53337[(2)] = null);

(statearr_53290_53337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (19))){
var inst_53198 = (state_53267[(8)]);
var inst_53248 = (state_53267[(11)]);
var inst_53250 = cljs.core.async.muxch_STAR_.call(null,inst_53248);
var state_53267__$1 = state_53267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53267__$1,(22),inst_53250,inst_53198);
} else {
if((state_val_53268 === (11))){
var inst_53222 = (state_53267[(10)]);
var inst_53208 = (state_53267[(12)]);
var inst_53222__$1 = cljs.core.seq.call(null,inst_53208);
var state_53267__$1 = (function (){var statearr_53291 = state_53267;
(statearr_53291[(10)] = inst_53222__$1);

return statearr_53291;
})();
if(inst_53222__$1){
var statearr_53292_53338 = state_53267__$1;
(statearr_53292_53338[(1)] = (13));

} else {
var statearr_53293_53339 = state_53267__$1;
(statearr_53293_53339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (9))){
var inst_53244 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
var statearr_53294_53340 = state_53267__$1;
(statearr_53294_53340[(2)] = inst_53244);

(statearr_53294_53340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (5))){
var inst_53205 = cljs.core.deref.call(null,mults);
var inst_53206 = cljs.core.vals.call(null,inst_53205);
var inst_53207 = cljs.core.seq.call(null,inst_53206);
var inst_53208 = inst_53207;
var inst_53209 = null;
var inst_53210 = (0);
var inst_53211 = (0);
var state_53267__$1 = (function (){var statearr_53295 = state_53267;
(statearr_53295[(12)] = inst_53208);

(statearr_53295[(13)] = inst_53210);

(statearr_53295[(14)] = inst_53211);

(statearr_53295[(15)] = inst_53209);

return statearr_53295;
})();
var statearr_53296_53341 = state_53267__$1;
(statearr_53296_53341[(2)] = null);

(statearr_53296_53341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (14))){
var state_53267__$1 = state_53267;
var statearr_53300_53342 = state_53267__$1;
(statearr_53300_53342[(2)] = null);

(statearr_53300_53342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (16))){
var inst_53222 = (state_53267[(10)]);
var inst_53226 = cljs.core.chunk_first.call(null,inst_53222);
var inst_53227 = cljs.core.chunk_rest.call(null,inst_53222);
var inst_53228 = cljs.core.count.call(null,inst_53226);
var inst_53208 = inst_53227;
var inst_53209 = inst_53226;
var inst_53210 = inst_53228;
var inst_53211 = (0);
var state_53267__$1 = (function (){var statearr_53301 = state_53267;
(statearr_53301[(12)] = inst_53208);

(statearr_53301[(13)] = inst_53210);

(statearr_53301[(14)] = inst_53211);

(statearr_53301[(15)] = inst_53209);

return statearr_53301;
})();
var statearr_53302_53343 = state_53267__$1;
(statearr_53302_53343[(2)] = null);

(statearr_53302_53343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (10))){
var inst_53208 = (state_53267[(12)]);
var inst_53210 = (state_53267[(13)]);
var inst_53211 = (state_53267[(14)]);
var inst_53209 = (state_53267[(15)]);
var inst_53216 = cljs.core._nth.call(null,inst_53209,inst_53211);
var inst_53217 = cljs.core.async.muxch_STAR_.call(null,inst_53216);
var inst_53218 = cljs.core.async.close_BANG_.call(null,inst_53217);
var inst_53219 = (inst_53211 + (1));
var tmp53297 = inst_53208;
var tmp53298 = inst_53210;
var tmp53299 = inst_53209;
var inst_53208__$1 = tmp53297;
var inst_53209__$1 = tmp53299;
var inst_53210__$1 = tmp53298;
var inst_53211__$1 = inst_53219;
var state_53267__$1 = (function (){var statearr_53303 = state_53267;
(statearr_53303[(17)] = inst_53218);

(statearr_53303[(12)] = inst_53208__$1);

(statearr_53303[(13)] = inst_53210__$1);

(statearr_53303[(14)] = inst_53211__$1);

(statearr_53303[(15)] = inst_53209__$1);

return statearr_53303;
})();
var statearr_53304_53344 = state_53267__$1;
(statearr_53304_53344[(2)] = null);

(statearr_53304_53344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (18))){
var inst_53237 = (state_53267[(2)]);
var state_53267__$1 = state_53267;
var statearr_53305_53345 = state_53267__$1;
(statearr_53305_53345[(2)] = inst_53237);

(statearr_53305_53345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53268 === (8))){
var inst_53210 = (state_53267[(13)]);
var inst_53211 = (state_53267[(14)]);
var inst_53213 = (inst_53211 < inst_53210);
var inst_53214 = inst_53213;
var state_53267__$1 = state_53267;
if(cljs.core.truth_(inst_53214)){
var statearr_53306_53346 = state_53267__$1;
(statearr_53306_53346[(1)] = (10));

} else {
var statearr_53307_53347 = state_53267__$1;
(statearr_53307_53347[(1)] = (11));

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
});})(c__19484__auto___53319,mults,ensure_mult,p))
;
return ((function (switch__19463__auto__,c__19484__auto___53319,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_53311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53311[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_53311[(1)] = (1));

return statearr_53311;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_53267){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53312){if((e53312 instanceof Object)){
var ex__19467__auto__ = e53312;
var statearr_53313_53348 = state_53267;
(statearr_53313_53348[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53349 = state_53267;
state_53267 = G__53349;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_53267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_53267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___53319,mults,ensure_mult,p))
})();
var state__19486__auto__ = (function (){var statearr_53314 = f__19485__auto__.call(null);
(statearr_53314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___53319);

return statearr_53314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___53319,mults,ensure_mult,p))
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
var args53350 = [];
var len__18249__auto___53353 = arguments.length;
var i__18250__auto___53354 = (0);
while(true){
if((i__18250__auto___53354 < len__18249__auto___53353)){
args53350.push((arguments[i__18250__auto___53354]));

var G__53355 = (i__18250__auto___53354 + (1));
i__18250__auto___53354 = G__53355;
continue;
} else {
}
break;
}

var G__53352 = args53350.length;
switch (G__53352) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53350.length)].join('')));

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
var args53357 = [];
var len__18249__auto___53360 = arguments.length;
var i__18250__auto___53361 = (0);
while(true){
if((i__18250__auto___53361 < len__18249__auto___53360)){
args53357.push((arguments[i__18250__auto___53361]));

var G__53362 = (i__18250__auto___53361 + (1));
i__18250__auto___53361 = G__53362;
continue;
} else {
}
break;
}

var G__53359 = args53357.length;
switch (G__53359) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53357.length)].join('')));

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
var args53364 = [];
var len__18249__auto___53435 = arguments.length;
var i__18250__auto___53436 = (0);
while(true){
if((i__18250__auto___53436 < len__18249__auto___53435)){
args53364.push((arguments[i__18250__auto___53436]));

var G__53437 = (i__18250__auto___53436 + (1));
i__18250__auto___53436 = G__53437;
continue;
} else {
}
break;
}

var G__53366 = args53364.length;
switch (G__53366) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53364.length)].join('')));

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
var c__19484__auto___53439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___53439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___53439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53405){
var state_val_53406 = (state_53405[(1)]);
if((state_val_53406 === (7))){
var state_53405__$1 = state_53405;
var statearr_53407_53440 = state_53405__$1;
(statearr_53407_53440[(2)] = null);

(statearr_53407_53440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (1))){
var state_53405__$1 = state_53405;
var statearr_53408_53441 = state_53405__$1;
(statearr_53408_53441[(2)] = null);

(statearr_53408_53441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (4))){
var inst_53369 = (state_53405[(7)]);
var inst_53371 = (inst_53369 < cnt);
var state_53405__$1 = state_53405;
if(cljs.core.truth_(inst_53371)){
var statearr_53409_53442 = state_53405__$1;
(statearr_53409_53442[(1)] = (6));

} else {
var statearr_53410_53443 = state_53405__$1;
(statearr_53410_53443[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (15))){
var inst_53401 = (state_53405[(2)]);
var state_53405__$1 = state_53405;
var statearr_53411_53444 = state_53405__$1;
(statearr_53411_53444[(2)] = inst_53401);

(statearr_53411_53444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (13))){
var inst_53394 = cljs.core.async.close_BANG_.call(null,out);
var state_53405__$1 = state_53405;
var statearr_53412_53445 = state_53405__$1;
(statearr_53412_53445[(2)] = inst_53394);

(statearr_53412_53445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (6))){
var state_53405__$1 = state_53405;
var statearr_53413_53446 = state_53405__$1;
(statearr_53413_53446[(2)] = null);

(statearr_53413_53446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (3))){
var inst_53403 = (state_53405[(2)]);
var state_53405__$1 = state_53405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53405__$1,inst_53403);
} else {
if((state_val_53406 === (12))){
var inst_53391 = (state_53405[(8)]);
var inst_53391__$1 = (state_53405[(2)]);
var inst_53392 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53391__$1);
var state_53405__$1 = (function (){var statearr_53414 = state_53405;
(statearr_53414[(8)] = inst_53391__$1);

return statearr_53414;
})();
if(cljs.core.truth_(inst_53392)){
var statearr_53415_53447 = state_53405__$1;
(statearr_53415_53447[(1)] = (13));

} else {
var statearr_53416_53448 = state_53405__$1;
(statearr_53416_53448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (2))){
var inst_53368 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53369 = (0);
var state_53405__$1 = (function (){var statearr_53417 = state_53405;
(statearr_53417[(7)] = inst_53369);

(statearr_53417[(9)] = inst_53368);

return statearr_53417;
})();
var statearr_53418_53449 = state_53405__$1;
(statearr_53418_53449[(2)] = null);

(statearr_53418_53449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (11))){
var inst_53369 = (state_53405[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53405,(10),Object,null,(9));
var inst_53378 = chs__$1.call(null,inst_53369);
var inst_53379 = done.call(null,inst_53369);
var inst_53380 = cljs.core.async.take_BANG_.call(null,inst_53378,inst_53379);
var state_53405__$1 = state_53405;
var statearr_53419_53450 = state_53405__$1;
(statearr_53419_53450[(2)] = inst_53380);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (9))){
var inst_53369 = (state_53405[(7)]);
var inst_53382 = (state_53405[(2)]);
var inst_53383 = (inst_53369 + (1));
var inst_53369__$1 = inst_53383;
var state_53405__$1 = (function (){var statearr_53420 = state_53405;
(statearr_53420[(7)] = inst_53369__$1);

(statearr_53420[(10)] = inst_53382);

return statearr_53420;
})();
var statearr_53421_53451 = state_53405__$1;
(statearr_53421_53451[(2)] = null);

(statearr_53421_53451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (5))){
var inst_53389 = (state_53405[(2)]);
var state_53405__$1 = (function (){var statearr_53422 = state_53405;
(statearr_53422[(11)] = inst_53389);

return statearr_53422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53405__$1,(12),dchan);
} else {
if((state_val_53406 === (14))){
var inst_53391 = (state_53405[(8)]);
var inst_53396 = cljs.core.apply.call(null,f,inst_53391);
var state_53405__$1 = state_53405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53405__$1,(16),out,inst_53396);
} else {
if((state_val_53406 === (16))){
var inst_53398 = (state_53405[(2)]);
var state_53405__$1 = (function (){var statearr_53423 = state_53405;
(statearr_53423[(12)] = inst_53398);

return statearr_53423;
})();
var statearr_53424_53452 = state_53405__$1;
(statearr_53424_53452[(2)] = null);

(statearr_53424_53452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (10))){
var inst_53373 = (state_53405[(2)]);
var inst_53374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_53405__$1 = (function (){var statearr_53425 = state_53405;
(statearr_53425[(13)] = inst_53373);

return statearr_53425;
})();
var statearr_53426_53453 = state_53405__$1;
(statearr_53426_53453[(2)] = inst_53374);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53406 === (8))){
var inst_53387 = (state_53405[(2)]);
var state_53405__$1 = state_53405;
var statearr_53427_53454 = state_53405__$1;
(statearr_53427_53454[(2)] = inst_53387);

(statearr_53427_53454[(1)] = (5));


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
});})(c__19484__auto___53439,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19463__auto__,c__19484__auto___53439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_53431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53431[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_53431[(1)] = (1));

return statearr_53431;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_53405){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53432){if((e53432 instanceof Object)){
var ex__19467__auto__ = e53432;
var statearr_53433_53455 = state_53405;
(statearr_53433_53455[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53456 = state_53405;
state_53405 = G__53456;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_53405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_53405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___53439,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19486__auto__ = (function (){var statearr_53434 = f__19485__auto__.call(null);
(statearr_53434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___53439);

return statearr_53434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___53439,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args53458 = [];
var len__18249__auto___53514 = arguments.length;
var i__18250__auto___53515 = (0);
while(true){
if((i__18250__auto___53515 < len__18249__auto___53514)){
args53458.push((arguments[i__18250__auto___53515]));

var G__53516 = (i__18250__auto___53515 + (1));
i__18250__auto___53515 = G__53516;
continue;
} else {
}
break;
}

var G__53460 = args53458.length;
switch (G__53460) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53458.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19484__auto___53518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___53518,out){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___53518,out){
return (function (state_53490){
var state_val_53491 = (state_53490[(1)]);
if((state_val_53491 === (7))){
var inst_53470 = (state_53490[(7)]);
var inst_53469 = (state_53490[(8)]);
var inst_53469__$1 = (state_53490[(2)]);
var inst_53470__$1 = cljs.core.nth.call(null,inst_53469__$1,(0),null);
var inst_53471 = cljs.core.nth.call(null,inst_53469__$1,(1),null);
var inst_53472 = (inst_53470__$1 == null);
var state_53490__$1 = (function (){var statearr_53492 = state_53490;
(statearr_53492[(7)] = inst_53470__$1);

(statearr_53492[(8)] = inst_53469__$1);

(statearr_53492[(9)] = inst_53471);

return statearr_53492;
})();
if(cljs.core.truth_(inst_53472)){
var statearr_53493_53519 = state_53490__$1;
(statearr_53493_53519[(1)] = (8));

} else {
var statearr_53494_53520 = state_53490__$1;
(statearr_53494_53520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (1))){
var inst_53461 = cljs.core.vec.call(null,chs);
var inst_53462 = inst_53461;
var state_53490__$1 = (function (){var statearr_53495 = state_53490;
(statearr_53495[(10)] = inst_53462);

return statearr_53495;
})();
var statearr_53496_53521 = state_53490__$1;
(statearr_53496_53521[(2)] = null);

(statearr_53496_53521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (4))){
var inst_53462 = (state_53490[(10)]);
var state_53490__$1 = state_53490;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53490__$1,(7),inst_53462);
} else {
if((state_val_53491 === (6))){
var inst_53486 = (state_53490[(2)]);
var state_53490__$1 = state_53490;
var statearr_53497_53522 = state_53490__$1;
(statearr_53497_53522[(2)] = inst_53486);

(statearr_53497_53522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (3))){
var inst_53488 = (state_53490[(2)]);
var state_53490__$1 = state_53490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53490__$1,inst_53488);
} else {
if((state_val_53491 === (2))){
var inst_53462 = (state_53490[(10)]);
var inst_53464 = cljs.core.count.call(null,inst_53462);
var inst_53465 = (inst_53464 > (0));
var state_53490__$1 = state_53490;
if(cljs.core.truth_(inst_53465)){
var statearr_53499_53523 = state_53490__$1;
(statearr_53499_53523[(1)] = (4));

} else {
var statearr_53500_53524 = state_53490__$1;
(statearr_53500_53524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (11))){
var inst_53462 = (state_53490[(10)]);
var inst_53479 = (state_53490[(2)]);
var tmp53498 = inst_53462;
var inst_53462__$1 = tmp53498;
var state_53490__$1 = (function (){var statearr_53501 = state_53490;
(statearr_53501[(10)] = inst_53462__$1);

(statearr_53501[(11)] = inst_53479);

return statearr_53501;
})();
var statearr_53502_53525 = state_53490__$1;
(statearr_53502_53525[(2)] = null);

(statearr_53502_53525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (9))){
var inst_53470 = (state_53490[(7)]);
var state_53490__$1 = state_53490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53490__$1,(11),out,inst_53470);
} else {
if((state_val_53491 === (5))){
var inst_53484 = cljs.core.async.close_BANG_.call(null,out);
var state_53490__$1 = state_53490;
var statearr_53503_53526 = state_53490__$1;
(statearr_53503_53526[(2)] = inst_53484);

(statearr_53503_53526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (10))){
var inst_53482 = (state_53490[(2)]);
var state_53490__$1 = state_53490;
var statearr_53504_53527 = state_53490__$1;
(statearr_53504_53527[(2)] = inst_53482);

(statearr_53504_53527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (8))){
var inst_53462 = (state_53490[(10)]);
var inst_53470 = (state_53490[(7)]);
var inst_53469 = (state_53490[(8)]);
var inst_53471 = (state_53490[(9)]);
var inst_53474 = (function (){var cs = inst_53462;
var vec__53467 = inst_53469;
var v = inst_53470;
var c = inst_53471;
return ((function (cs,vec__53467,v,c,inst_53462,inst_53470,inst_53469,inst_53471,state_val_53491,c__19484__auto___53518,out){
return (function (p1__53457_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__53457_SHARP_);
});
})(cs, vec__53467, v, c, inst_53462, inst_53470, inst_53469, inst_53471, state_val_53491, c__19484__auto___53518, out))
})();
var inst_53475 = cljs.core.filterv.call(null,inst_53474,inst_53462);
var inst_53462__$1 = inst_53475;
var state_53490__$1 = (function (){var statearr_53505 = state_53490;
(statearr_53505[(10)] = inst_53462__$1);

return statearr_53505;
})();
var statearr_53506_53528 = state_53490__$1;
(statearr_53506_53528[(2)] = null);

(statearr_53506_53528[(1)] = (2));


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
});})(c__19484__auto___53518,out))
;
return ((function (switch__19463__auto__,c__19484__auto___53518,out){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_53510 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53510[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_53510[(1)] = (1));

return statearr_53510;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_53490){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53511){if((e53511 instanceof Object)){
var ex__19467__auto__ = e53511;
var statearr_53512_53529 = state_53490;
(statearr_53512_53529[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53530 = state_53490;
state_53490 = G__53530;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_53490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_53490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___53518,out))
})();
var state__19486__auto__ = (function (){var statearr_53513 = f__19485__auto__.call(null);
(statearr_53513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___53518);

return statearr_53513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___53518,out))
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
var args53531 = [];
var len__18249__auto___53580 = arguments.length;
var i__18250__auto___53581 = (0);
while(true){
if((i__18250__auto___53581 < len__18249__auto___53580)){
args53531.push((arguments[i__18250__auto___53581]));

var G__53582 = (i__18250__auto___53581 + (1));
i__18250__auto___53581 = G__53582;
continue;
} else {
}
break;
}

var G__53533 = args53531.length;
switch (G__53533) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53531.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19484__auto___53584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___53584,out){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___53584,out){
return (function (state_53557){
var state_val_53558 = (state_53557[(1)]);
if((state_val_53558 === (7))){
var inst_53539 = (state_53557[(7)]);
var inst_53539__$1 = (state_53557[(2)]);
var inst_53540 = (inst_53539__$1 == null);
var inst_53541 = cljs.core.not.call(null,inst_53540);
var state_53557__$1 = (function (){var statearr_53559 = state_53557;
(statearr_53559[(7)] = inst_53539__$1);

return statearr_53559;
})();
if(inst_53541){
var statearr_53560_53585 = state_53557__$1;
(statearr_53560_53585[(1)] = (8));

} else {
var statearr_53561_53586 = state_53557__$1;
(statearr_53561_53586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (1))){
var inst_53534 = (0);
var state_53557__$1 = (function (){var statearr_53562 = state_53557;
(statearr_53562[(8)] = inst_53534);

return statearr_53562;
})();
var statearr_53563_53587 = state_53557__$1;
(statearr_53563_53587[(2)] = null);

(statearr_53563_53587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (4))){
var state_53557__$1 = state_53557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53557__$1,(7),ch);
} else {
if((state_val_53558 === (6))){
var inst_53552 = (state_53557[(2)]);
var state_53557__$1 = state_53557;
var statearr_53564_53588 = state_53557__$1;
(statearr_53564_53588[(2)] = inst_53552);

(statearr_53564_53588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (3))){
var inst_53554 = (state_53557[(2)]);
var inst_53555 = cljs.core.async.close_BANG_.call(null,out);
var state_53557__$1 = (function (){var statearr_53565 = state_53557;
(statearr_53565[(9)] = inst_53554);

return statearr_53565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53557__$1,inst_53555);
} else {
if((state_val_53558 === (2))){
var inst_53534 = (state_53557[(8)]);
var inst_53536 = (inst_53534 < n);
var state_53557__$1 = state_53557;
if(cljs.core.truth_(inst_53536)){
var statearr_53566_53589 = state_53557__$1;
(statearr_53566_53589[(1)] = (4));

} else {
var statearr_53567_53590 = state_53557__$1;
(statearr_53567_53590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (11))){
var inst_53534 = (state_53557[(8)]);
var inst_53544 = (state_53557[(2)]);
var inst_53545 = (inst_53534 + (1));
var inst_53534__$1 = inst_53545;
var state_53557__$1 = (function (){var statearr_53568 = state_53557;
(statearr_53568[(10)] = inst_53544);

(statearr_53568[(8)] = inst_53534__$1);

return statearr_53568;
})();
var statearr_53569_53591 = state_53557__$1;
(statearr_53569_53591[(2)] = null);

(statearr_53569_53591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (9))){
var state_53557__$1 = state_53557;
var statearr_53570_53592 = state_53557__$1;
(statearr_53570_53592[(2)] = null);

(statearr_53570_53592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (5))){
var state_53557__$1 = state_53557;
var statearr_53571_53593 = state_53557__$1;
(statearr_53571_53593[(2)] = null);

(statearr_53571_53593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (10))){
var inst_53549 = (state_53557[(2)]);
var state_53557__$1 = state_53557;
var statearr_53572_53594 = state_53557__$1;
(statearr_53572_53594[(2)] = inst_53549);

(statearr_53572_53594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (8))){
var inst_53539 = (state_53557[(7)]);
var state_53557__$1 = state_53557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53557__$1,(11),out,inst_53539);
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
});})(c__19484__auto___53584,out))
;
return ((function (switch__19463__auto__,c__19484__auto___53584,out){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_53576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53576[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_53576[(1)] = (1));

return statearr_53576;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_53557){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53577){if((e53577 instanceof Object)){
var ex__19467__auto__ = e53577;
var statearr_53578_53595 = state_53557;
(statearr_53578_53595[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53596 = state_53557;
state_53557 = G__53596;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_53557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_53557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___53584,out))
})();
var state__19486__auto__ = (function (){var statearr_53579 = f__19485__auto__.call(null);
(statearr_53579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___53584);

return statearr_53579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___53584,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53604 = (function (map_LT_,f,ch,meta53605){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta53605 = meta53605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53606,meta53605__$1){
var self__ = this;
var _53606__$1 = this;
return (new cljs.core.async.t_cljs$core$async53604(self__.map_LT_,self__.f,self__.ch,meta53605__$1));
});

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53606){
var self__ = this;
var _53606__$1 = this;
return self__.meta53605;
});

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async53607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53607 = (function (map_LT_,f,ch,meta53605,_,fn1,meta53608){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta53605 = meta53605;
this._ = _;
this.fn1 = fn1;
this.meta53608 = meta53608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53609,meta53608__$1){
var self__ = this;
var _53609__$1 = this;
return (new cljs.core.async.t_cljs$core$async53607(self__.map_LT_,self__.f,self__.ch,self__.meta53605,self__._,self__.fn1,meta53608__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53609){
var self__ = this;
var _53609__$1 = this;
return self__.meta53608;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async53607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53597_SHARP_){
return f1.call(null,(((p1__53597_SHARP_ == null))?null:self__.f.call(null,p1__53597_SHARP_)));
});
})(f1, ___$2, ___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53607.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53605","meta53605",1791908941,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53604","cljs.core.async/t_cljs$core$async53604",-1162896917,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53608","meta53608",-377392548,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53607";

cljs.core.async.t_cljs$core$async53607.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async53607");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async53607 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53607(map_LT___$1,f__$1,ch__$1,meta53605__$1,___$2,fn1__$1,meta53608){
return (new cljs.core.async.t_cljs$core$async53607(map_LT___$1,f__$1,ch__$1,meta53605__$1,___$2,fn1__$1,meta53608));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53607(self__.map_LT_,self__.f,self__.ch,self__.meta53605,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17179__auto__ = ret;
if(cljs.core.truth_(and__17179__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17179__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53605","meta53605",1791908941,null)], null);
});

cljs.core.async.t_cljs$core$async53604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53604";

cljs.core.async.t_cljs$core$async53604.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async53604");
});

cljs.core.async.__GT_t_cljs$core$async53604 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53604(map_LT___$1,f__$1,ch__$1,meta53605){
return (new cljs.core.async.t_cljs$core$async53604(map_LT___$1,f__$1,ch__$1,meta53605));
});

}

return (new cljs.core.async.t_cljs$core$async53604(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53613 = (function (map_GT_,f,ch,meta53614){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta53614 = meta53614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53615,meta53614__$1){
var self__ = this;
var _53615__$1 = this;
return (new cljs.core.async.t_cljs$core$async53613(self__.map_GT_,self__.f,self__.ch,meta53614__$1));
});

cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53615){
var self__ = this;
var _53615__$1 = this;
return self__.meta53614;
});

cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async53613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53614","meta53614",-786705035,null)], null);
});

cljs.core.async.t_cljs$core$async53613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53613";

cljs.core.async.t_cljs$core$async53613.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async53613");
});

cljs.core.async.__GT_t_cljs$core$async53613 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53613(map_GT___$1,f__$1,ch__$1,meta53614){
return (new cljs.core.async.t_cljs$core$async53613(map_GT___$1,f__$1,ch__$1,meta53614));
});

}

return (new cljs.core.async.t_cljs$core$async53613(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async53619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53619 = (function (filter_GT_,p,ch,meta53620){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta53620 = meta53620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53621,meta53620__$1){
var self__ = this;
var _53621__$1 = this;
return (new cljs.core.async.t_cljs$core$async53619(self__.filter_GT_,self__.p,self__.ch,meta53620__$1));
});

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53621){
var self__ = this;
var _53621__$1 = this;
return self__.meta53620;
});

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53620","meta53620",595118893,null)], null);
});

cljs.core.async.t_cljs$core$async53619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53619";

cljs.core.async.t_cljs$core$async53619.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async53619");
});

cljs.core.async.__GT_t_cljs$core$async53619 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53619(filter_GT___$1,p__$1,ch__$1,meta53620){
return (new cljs.core.async.t_cljs$core$async53619(filter_GT___$1,p__$1,ch__$1,meta53620));
});

}

return (new cljs.core.async.t_cljs$core$async53619(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args53622 = [];
var len__18249__auto___53666 = arguments.length;
var i__18250__auto___53667 = (0);
while(true){
if((i__18250__auto___53667 < len__18249__auto___53666)){
args53622.push((arguments[i__18250__auto___53667]));

var G__53668 = (i__18250__auto___53667 + (1));
i__18250__auto___53667 = G__53668;
continue;
} else {
}
break;
}

var G__53624 = args53622.length;
switch (G__53624) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53622.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19484__auto___53670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___53670,out){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___53670,out){
return (function (state_53645){
var state_val_53646 = (state_53645[(1)]);
if((state_val_53646 === (7))){
var inst_53641 = (state_53645[(2)]);
var state_53645__$1 = state_53645;
var statearr_53647_53671 = state_53645__$1;
(statearr_53647_53671[(2)] = inst_53641);

(statearr_53647_53671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (1))){
var state_53645__$1 = state_53645;
var statearr_53648_53672 = state_53645__$1;
(statearr_53648_53672[(2)] = null);

(statearr_53648_53672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (4))){
var inst_53627 = (state_53645[(7)]);
var inst_53627__$1 = (state_53645[(2)]);
var inst_53628 = (inst_53627__$1 == null);
var state_53645__$1 = (function (){var statearr_53649 = state_53645;
(statearr_53649[(7)] = inst_53627__$1);

return statearr_53649;
})();
if(cljs.core.truth_(inst_53628)){
var statearr_53650_53673 = state_53645__$1;
(statearr_53650_53673[(1)] = (5));

} else {
var statearr_53651_53674 = state_53645__$1;
(statearr_53651_53674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (6))){
var inst_53627 = (state_53645[(7)]);
var inst_53632 = p.call(null,inst_53627);
var state_53645__$1 = state_53645;
if(cljs.core.truth_(inst_53632)){
var statearr_53652_53675 = state_53645__$1;
(statearr_53652_53675[(1)] = (8));

} else {
var statearr_53653_53676 = state_53645__$1;
(statearr_53653_53676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (3))){
var inst_53643 = (state_53645[(2)]);
var state_53645__$1 = state_53645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53645__$1,inst_53643);
} else {
if((state_val_53646 === (2))){
var state_53645__$1 = state_53645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53645__$1,(4),ch);
} else {
if((state_val_53646 === (11))){
var inst_53635 = (state_53645[(2)]);
var state_53645__$1 = state_53645;
var statearr_53654_53677 = state_53645__$1;
(statearr_53654_53677[(2)] = inst_53635);

(statearr_53654_53677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (9))){
var state_53645__$1 = state_53645;
var statearr_53655_53678 = state_53645__$1;
(statearr_53655_53678[(2)] = null);

(statearr_53655_53678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (5))){
var inst_53630 = cljs.core.async.close_BANG_.call(null,out);
var state_53645__$1 = state_53645;
var statearr_53656_53679 = state_53645__$1;
(statearr_53656_53679[(2)] = inst_53630);

(statearr_53656_53679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (10))){
var inst_53638 = (state_53645[(2)]);
var state_53645__$1 = (function (){var statearr_53657 = state_53645;
(statearr_53657[(8)] = inst_53638);

return statearr_53657;
})();
var statearr_53658_53680 = state_53645__$1;
(statearr_53658_53680[(2)] = null);

(statearr_53658_53680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53646 === (8))){
var inst_53627 = (state_53645[(7)]);
var state_53645__$1 = state_53645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53645__$1,(11),out,inst_53627);
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
});})(c__19484__auto___53670,out))
;
return ((function (switch__19463__auto__,c__19484__auto___53670,out){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_53662 = [null,null,null,null,null,null,null,null,null];
(statearr_53662[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_53662[(1)] = (1));

return statearr_53662;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_53645){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53663){if((e53663 instanceof Object)){
var ex__19467__auto__ = e53663;
var statearr_53664_53681 = state_53645;
(statearr_53664_53681[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53682 = state_53645;
state_53645 = G__53682;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_53645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_53645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___53670,out))
})();
var state__19486__auto__ = (function (){var statearr_53665 = f__19485__auto__.call(null);
(statearr_53665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___53670);

return statearr_53665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___53670,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args53683 = [];
var len__18249__auto___53686 = arguments.length;
var i__18250__auto___53687 = (0);
while(true){
if((i__18250__auto___53687 < len__18249__auto___53686)){
args53683.push((arguments[i__18250__auto___53687]));

var G__53688 = (i__18250__auto___53687 + (1));
i__18250__auto___53687 = G__53688;
continue;
} else {
}
break;
}

var G__53685 = args53683.length;
switch (G__53685) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53683.length)].join('')));

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
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_53855){
var state_val_53856 = (state_53855[(1)]);
if((state_val_53856 === (7))){
var inst_53851 = (state_53855[(2)]);
var state_53855__$1 = state_53855;
var statearr_53857_53898 = state_53855__$1;
(statearr_53857_53898[(2)] = inst_53851);

(statearr_53857_53898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (20))){
var inst_53821 = (state_53855[(7)]);
var inst_53832 = (state_53855[(2)]);
var inst_53833 = cljs.core.next.call(null,inst_53821);
var inst_53807 = inst_53833;
var inst_53808 = null;
var inst_53809 = (0);
var inst_53810 = (0);
var state_53855__$1 = (function (){var statearr_53858 = state_53855;
(statearr_53858[(8)] = inst_53807);

(statearr_53858[(9)] = inst_53832);

(statearr_53858[(10)] = inst_53808);

(statearr_53858[(11)] = inst_53810);

(statearr_53858[(12)] = inst_53809);

return statearr_53858;
})();
var statearr_53859_53899 = state_53855__$1;
(statearr_53859_53899[(2)] = null);

(statearr_53859_53899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (1))){
var state_53855__$1 = state_53855;
var statearr_53860_53900 = state_53855__$1;
(statearr_53860_53900[(2)] = null);

(statearr_53860_53900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (4))){
var inst_53796 = (state_53855[(13)]);
var inst_53796__$1 = (state_53855[(2)]);
var inst_53797 = (inst_53796__$1 == null);
var state_53855__$1 = (function (){var statearr_53861 = state_53855;
(statearr_53861[(13)] = inst_53796__$1);

return statearr_53861;
})();
if(cljs.core.truth_(inst_53797)){
var statearr_53862_53901 = state_53855__$1;
(statearr_53862_53901[(1)] = (5));

} else {
var statearr_53863_53902 = state_53855__$1;
(statearr_53863_53902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (15))){
var state_53855__$1 = state_53855;
var statearr_53867_53903 = state_53855__$1;
(statearr_53867_53903[(2)] = null);

(statearr_53867_53903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (21))){
var state_53855__$1 = state_53855;
var statearr_53868_53904 = state_53855__$1;
(statearr_53868_53904[(2)] = null);

(statearr_53868_53904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (13))){
var inst_53807 = (state_53855[(8)]);
var inst_53808 = (state_53855[(10)]);
var inst_53810 = (state_53855[(11)]);
var inst_53809 = (state_53855[(12)]);
var inst_53817 = (state_53855[(2)]);
var inst_53818 = (inst_53810 + (1));
var tmp53864 = inst_53807;
var tmp53865 = inst_53808;
var tmp53866 = inst_53809;
var inst_53807__$1 = tmp53864;
var inst_53808__$1 = tmp53865;
var inst_53809__$1 = tmp53866;
var inst_53810__$1 = inst_53818;
var state_53855__$1 = (function (){var statearr_53869 = state_53855;
(statearr_53869[(14)] = inst_53817);

(statearr_53869[(8)] = inst_53807__$1);

(statearr_53869[(10)] = inst_53808__$1);

(statearr_53869[(11)] = inst_53810__$1);

(statearr_53869[(12)] = inst_53809__$1);

return statearr_53869;
})();
var statearr_53870_53905 = state_53855__$1;
(statearr_53870_53905[(2)] = null);

(statearr_53870_53905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (22))){
var state_53855__$1 = state_53855;
var statearr_53871_53906 = state_53855__$1;
(statearr_53871_53906[(2)] = null);

(statearr_53871_53906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (6))){
var inst_53796 = (state_53855[(13)]);
var inst_53805 = f.call(null,inst_53796);
var inst_53806 = cljs.core.seq.call(null,inst_53805);
var inst_53807 = inst_53806;
var inst_53808 = null;
var inst_53809 = (0);
var inst_53810 = (0);
var state_53855__$1 = (function (){var statearr_53872 = state_53855;
(statearr_53872[(8)] = inst_53807);

(statearr_53872[(10)] = inst_53808);

(statearr_53872[(11)] = inst_53810);

(statearr_53872[(12)] = inst_53809);

return statearr_53872;
})();
var statearr_53873_53907 = state_53855__$1;
(statearr_53873_53907[(2)] = null);

(statearr_53873_53907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (17))){
var inst_53821 = (state_53855[(7)]);
var inst_53825 = cljs.core.chunk_first.call(null,inst_53821);
var inst_53826 = cljs.core.chunk_rest.call(null,inst_53821);
var inst_53827 = cljs.core.count.call(null,inst_53825);
var inst_53807 = inst_53826;
var inst_53808 = inst_53825;
var inst_53809 = inst_53827;
var inst_53810 = (0);
var state_53855__$1 = (function (){var statearr_53874 = state_53855;
(statearr_53874[(8)] = inst_53807);

(statearr_53874[(10)] = inst_53808);

(statearr_53874[(11)] = inst_53810);

(statearr_53874[(12)] = inst_53809);

return statearr_53874;
})();
var statearr_53875_53908 = state_53855__$1;
(statearr_53875_53908[(2)] = null);

(statearr_53875_53908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (3))){
var inst_53853 = (state_53855[(2)]);
var state_53855__$1 = state_53855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53855__$1,inst_53853);
} else {
if((state_val_53856 === (12))){
var inst_53841 = (state_53855[(2)]);
var state_53855__$1 = state_53855;
var statearr_53876_53909 = state_53855__$1;
(statearr_53876_53909[(2)] = inst_53841);

(statearr_53876_53909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (2))){
var state_53855__$1 = state_53855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53855__$1,(4),in$);
} else {
if((state_val_53856 === (23))){
var inst_53849 = (state_53855[(2)]);
var state_53855__$1 = state_53855;
var statearr_53877_53910 = state_53855__$1;
(statearr_53877_53910[(2)] = inst_53849);

(statearr_53877_53910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (19))){
var inst_53836 = (state_53855[(2)]);
var state_53855__$1 = state_53855;
var statearr_53878_53911 = state_53855__$1;
(statearr_53878_53911[(2)] = inst_53836);

(statearr_53878_53911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (11))){
var inst_53821 = (state_53855[(7)]);
var inst_53807 = (state_53855[(8)]);
var inst_53821__$1 = cljs.core.seq.call(null,inst_53807);
var state_53855__$1 = (function (){var statearr_53879 = state_53855;
(statearr_53879[(7)] = inst_53821__$1);

return statearr_53879;
})();
if(inst_53821__$1){
var statearr_53880_53912 = state_53855__$1;
(statearr_53880_53912[(1)] = (14));

} else {
var statearr_53881_53913 = state_53855__$1;
(statearr_53881_53913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (9))){
var inst_53843 = (state_53855[(2)]);
var inst_53844 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_53855__$1 = (function (){var statearr_53882 = state_53855;
(statearr_53882[(15)] = inst_53843);

return statearr_53882;
})();
if(cljs.core.truth_(inst_53844)){
var statearr_53883_53914 = state_53855__$1;
(statearr_53883_53914[(1)] = (21));

} else {
var statearr_53884_53915 = state_53855__$1;
(statearr_53884_53915[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (5))){
var inst_53799 = cljs.core.async.close_BANG_.call(null,out);
var state_53855__$1 = state_53855;
var statearr_53885_53916 = state_53855__$1;
(statearr_53885_53916[(2)] = inst_53799);

(statearr_53885_53916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (14))){
var inst_53821 = (state_53855[(7)]);
var inst_53823 = cljs.core.chunked_seq_QMARK_.call(null,inst_53821);
var state_53855__$1 = state_53855;
if(inst_53823){
var statearr_53886_53917 = state_53855__$1;
(statearr_53886_53917[(1)] = (17));

} else {
var statearr_53887_53918 = state_53855__$1;
(statearr_53887_53918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (16))){
var inst_53839 = (state_53855[(2)]);
var state_53855__$1 = state_53855;
var statearr_53888_53919 = state_53855__$1;
(statearr_53888_53919[(2)] = inst_53839);

(statearr_53888_53919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53856 === (10))){
var inst_53808 = (state_53855[(10)]);
var inst_53810 = (state_53855[(11)]);
var inst_53815 = cljs.core._nth.call(null,inst_53808,inst_53810);
var state_53855__$1 = state_53855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53855__$1,(13),out,inst_53815);
} else {
if((state_val_53856 === (18))){
var inst_53821 = (state_53855[(7)]);
var inst_53830 = cljs.core.first.call(null,inst_53821);
var state_53855__$1 = state_53855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53855__$1,(20),out,inst_53830);
} else {
if((state_val_53856 === (8))){
var inst_53810 = (state_53855[(11)]);
var inst_53809 = (state_53855[(12)]);
var inst_53812 = (inst_53810 < inst_53809);
var inst_53813 = inst_53812;
var state_53855__$1 = state_53855;
if(cljs.core.truth_(inst_53813)){
var statearr_53889_53920 = state_53855__$1;
(statearr_53889_53920[(1)] = (10));

} else {
var statearr_53890_53921 = state_53855__$1;
(statearr_53890_53921[(1)] = (11));

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
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19464__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19464__auto____0 = (function (){
var statearr_53894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53894[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19464__auto__);

(statearr_53894[(1)] = (1));

return statearr_53894;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19464__auto____1 = (function (state_53855){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53895){if((e53895 instanceof Object)){
var ex__19467__auto__ = e53895;
var statearr_53896_53922 = state_53855;
(statearr_53896_53922[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53923 = state_53855;
state_53855 = G__53923;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19464__auto__ = function(state_53855){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19464__auto____1.call(this,state_53855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19464__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19464__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_53897 = f__19485__auto__.call(null);
(statearr_53897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_53897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args53924 = [];
var len__18249__auto___53927 = arguments.length;
var i__18250__auto___53928 = (0);
while(true){
if((i__18250__auto___53928 < len__18249__auto___53927)){
args53924.push((arguments[i__18250__auto___53928]));

var G__53929 = (i__18250__auto___53928 + (1));
i__18250__auto___53928 = G__53929;
continue;
} else {
}
break;
}

var G__53926 = args53924.length;
switch (G__53926) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53924.length)].join('')));

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
var args53931 = [];
var len__18249__auto___53934 = arguments.length;
var i__18250__auto___53935 = (0);
while(true){
if((i__18250__auto___53935 < len__18249__auto___53934)){
args53931.push((arguments[i__18250__auto___53935]));

var G__53936 = (i__18250__auto___53935 + (1));
i__18250__auto___53935 = G__53936;
continue;
} else {
}
break;
}

var G__53933 = args53931.length;
switch (G__53933) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53931.length)].join('')));

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
var args53938 = [];
var len__18249__auto___53989 = arguments.length;
var i__18250__auto___53990 = (0);
while(true){
if((i__18250__auto___53990 < len__18249__auto___53989)){
args53938.push((arguments[i__18250__auto___53990]));

var G__53991 = (i__18250__auto___53990 + (1));
i__18250__auto___53990 = G__53991;
continue;
} else {
}
break;
}

var G__53940 = args53938.length;
switch (G__53940) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53938.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19484__auto___53993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___53993,out){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___53993,out){
return (function (state_53964){
var state_val_53965 = (state_53964[(1)]);
if((state_val_53965 === (7))){
var inst_53959 = (state_53964[(2)]);
var state_53964__$1 = state_53964;
var statearr_53966_53994 = state_53964__$1;
(statearr_53966_53994[(2)] = inst_53959);

(statearr_53966_53994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (1))){
var inst_53941 = null;
var state_53964__$1 = (function (){var statearr_53967 = state_53964;
(statearr_53967[(7)] = inst_53941);

return statearr_53967;
})();
var statearr_53968_53995 = state_53964__$1;
(statearr_53968_53995[(2)] = null);

(statearr_53968_53995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (4))){
var inst_53944 = (state_53964[(8)]);
var inst_53944__$1 = (state_53964[(2)]);
var inst_53945 = (inst_53944__$1 == null);
var inst_53946 = cljs.core.not.call(null,inst_53945);
var state_53964__$1 = (function (){var statearr_53969 = state_53964;
(statearr_53969[(8)] = inst_53944__$1);

return statearr_53969;
})();
if(inst_53946){
var statearr_53970_53996 = state_53964__$1;
(statearr_53970_53996[(1)] = (5));

} else {
var statearr_53971_53997 = state_53964__$1;
(statearr_53971_53997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (6))){
var state_53964__$1 = state_53964;
var statearr_53972_53998 = state_53964__$1;
(statearr_53972_53998[(2)] = null);

(statearr_53972_53998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (3))){
var inst_53961 = (state_53964[(2)]);
var inst_53962 = cljs.core.async.close_BANG_.call(null,out);
var state_53964__$1 = (function (){var statearr_53973 = state_53964;
(statearr_53973[(9)] = inst_53961);

return statearr_53973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53964__$1,inst_53962);
} else {
if((state_val_53965 === (2))){
var state_53964__$1 = state_53964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53964__$1,(4),ch);
} else {
if((state_val_53965 === (11))){
var inst_53944 = (state_53964[(8)]);
var inst_53953 = (state_53964[(2)]);
var inst_53941 = inst_53944;
var state_53964__$1 = (function (){var statearr_53974 = state_53964;
(statearr_53974[(7)] = inst_53941);

(statearr_53974[(10)] = inst_53953);

return statearr_53974;
})();
var statearr_53975_53999 = state_53964__$1;
(statearr_53975_53999[(2)] = null);

(statearr_53975_53999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (9))){
var inst_53944 = (state_53964[(8)]);
var state_53964__$1 = state_53964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53964__$1,(11),out,inst_53944);
} else {
if((state_val_53965 === (5))){
var inst_53941 = (state_53964[(7)]);
var inst_53944 = (state_53964[(8)]);
var inst_53948 = cljs.core._EQ_.call(null,inst_53944,inst_53941);
var state_53964__$1 = state_53964;
if(inst_53948){
var statearr_53977_54000 = state_53964__$1;
(statearr_53977_54000[(1)] = (8));

} else {
var statearr_53978_54001 = state_53964__$1;
(statearr_53978_54001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (10))){
var inst_53956 = (state_53964[(2)]);
var state_53964__$1 = state_53964;
var statearr_53979_54002 = state_53964__$1;
(statearr_53979_54002[(2)] = inst_53956);

(statearr_53979_54002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (8))){
var inst_53941 = (state_53964[(7)]);
var tmp53976 = inst_53941;
var inst_53941__$1 = tmp53976;
var state_53964__$1 = (function (){var statearr_53980 = state_53964;
(statearr_53980[(7)] = inst_53941__$1);

return statearr_53980;
})();
var statearr_53981_54003 = state_53964__$1;
(statearr_53981_54003[(2)] = null);

(statearr_53981_54003[(1)] = (2));


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
});})(c__19484__auto___53993,out))
;
return ((function (switch__19463__auto__,c__19484__auto___53993,out){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_53985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53985[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_53985[(1)] = (1));

return statearr_53985;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_53964){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_53964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e53986){if((e53986 instanceof Object)){
var ex__19467__auto__ = e53986;
var statearr_53987_54004 = state_53964;
(statearr_53987_54004[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54005 = state_53964;
state_53964 = G__54005;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_53964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_53964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___53993,out))
})();
var state__19486__auto__ = (function (){var statearr_53988 = f__19485__auto__.call(null);
(statearr_53988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___53993);

return statearr_53988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___53993,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args54006 = [];
var len__18249__auto___54076 = arguments.length;
var i__18250__auto___54077 = (0);
while(true){
if((i__18250__auto___54077 < len__18249__auto___54076)){
args54006.push((arguments[i__18250__auto___54077]));

var G__54078 = (i__18250__auto___54077 + (1));
i__18250__auto___54077 = G__54078;
continue;
} else {
}
break;
}

var G__54008 = args54006.length;
switch (G__54008) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54006.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19484__auto___54080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___54080,out){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___54080,out){
return (function (state_54046){
var state_val_54047 = (state_54046[(1)]);
if((state_val_54047 === (7))){
var inst_54042 = (state_54046[(2)]);
var state_54046__$1 = state_54046;
var statearr_54048_54081 = state_54046__$1;
(statearr_54048_54081[(2)] = inst_54042);

(statearr_54048_54081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (1))){
var inst_54009 = (new Array(n));
var inst_54010 = inst_54009;
var inst_54011 = (0);
var state_54046__$1 = (function (){var statearr_54049 = state_54046;
(statearr_54049[(7)] = inst_54010);

(statearr_54049[(8)] = inst_54011);

return statearr_54049;
})();
var statearr_54050_54082 = state_54046__$1;
(statearr_54050_54082[(2)] = null);

(statearr_54050_54082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (4))){
var inst_54014 = (state_54046[(9)]);
var inst_54014__$1 = (state_54046[(2)]);
var inst_54015 = (inst_54014__$1 == null);
var inst_54016 = cljs.core.not.call(null,inst_54015);
var state_54046__$1 = (function (){var statearr_54051 = state_54046;
(statearr_54051[(9)] = inst_54014__$1);

return statearr_54051;
})();
if(inst_54016){
var statearr_54052_54083 = state_54046__$1;
(statearr_54052_54083[(1)] = (5));

} else {
var statearr_54053_54084 = state_54046__$1;
(statearr_54053_54084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (15))){
var inst_54036 = (state_54046[(2)]);
var state_54046__$1 = state_54046;
var statearr_54054_54085 = state_54046__$1;
(statearr_54054_54085[(2)] = inst_54036);

(statearr_54054_54085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (13))){
var state_54046__$1 = state_54046;
var statearr_54055_54086 = state_54046__$1;
(statearr_54055_54086[(2)] = null);

(statearr_54055_54086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (6))){
var inst_54011 = (state_54046[(8)]);
var inst_54032 = (inst_54011 > (0));
var state_54046__$1 = state_54046;
if(cljs.core.truth_(inst_54032)){
var statearr_54056_54087 = state_54046__$1;
(statearr_54056_54087[(1)] = (12));

} else {
var statearr_54057_54088 = state_54046__$1;
(statearr_54057_54088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (3))){
var inst_54044 = (state_54046[(2)]);
var state_54046__$1 = state_54046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54046__$1,inst_54044);
} else {
if((state_val_54047 === (12))){
var inst_54010 = (state_54046[(7)]);
var inst_54034 = cljs.core.vec.call(null,inst_54010);
var state_54046__$1 = state_54046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54046__$1,(15),out,inst_54034);
} else {
if((state_val_54047 === (2))){
var state_54046__$1 = state_54046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54046__$1,(4),ch);
} else {
if((state_val_54047 === (11))){
var inst_54026 = (state_54046[(2)]);
var inst_54027 = (new Array(n));
var inst_54010 = inst_54027;
var inst_54011 = (0);
var state_54046__$1 = (function (){var statearr_54058 = state_54046;
(statearr_54058[(10)] = inst_54026);

(statearr_54058[(7)] = inst_54010);

(statearr_54058[(8)] = inst_54011);

return statearr_54058;
})();
var statearr_54059_54089 = state_54046__$1;
(statearr_54059_54089[(2)] = null);

(statearr_54059_54089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (9))){
var inst_54010 = (state_54046[(7)]);
var inst_54024 = cljs.core.vec.call(null,inst_54010);
var state_54046__$1 = state_54046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54046__$1,(11),out,inst_54024);
} else {
if((state_val_54047 === (5))){
var inst_54010 = (state_54046[(7)]);
var inst_54011 = (state_54046[(8)]);
var inst_54019 = (state_54046[(11)]);
var inst_54014 = (state_54046[(9)]);
var inst_54018 = (inst_54010[inst_54011] = inst_54014);
var inst_54019__$1 = (inst_54011 + (1));
var inst_54020 = (inst_54019__$1 < n);
var state_54046__$1 = (function (){var statearr_54060 = state_54046;
(statearr_54060[(12)] = inst_54018);

(statearr_54060[(11)] = inst_54019__$1);

return statearr_54060;
})();
if(cljs.core.truth_(inst_54020)){
var statearr_54061_54090 = state_54046__$1;
(statearr_54061_54090[(1)] = (8));

} else {
var statearr_54062_54091 = state_54046__$1;
(statearr_54062_54091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (14))){
var inst_54039 = (state_54046[(2)]);
var inst_54040 = cljs.core.async.close_BANG_.call(null,out);
var state_54046__$1 = (function (){var statearr_54064 = state_54046;
(statearr_54064[(13)] = inst_54039);

return statearr_54064;
})();
var statearr_54065_54092 = state_54046__$1;
(statearr_54065_54092[(2)] = inst_54040);

(statearr_54065_54092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (10))){
var inst_54030 = (state_54046[(2)]);
var state_54046__$1 = state_54046;
var statearr_54066_54093 = state_54046__$1;
(statearr_54066_54093[(2)] = inst_54030);

(statearr_54066_54093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54047 === (8))){
var inst_54010 = (state_54046[(7)]);
var inst_54019 = (state_54046[(11)]);
var tmp54063 = inst_54010;
var inst_54010__$1 = tmp54063;
var inst_54011 = inst_54019;
var state_54046__$1 = (function (){var statearr_54067 = state_54046;
(statearr_54067[(7)] = inst_54010__$1);

(statearr_54067[(8)] = inst_54011);

return statearr_54067;
})();
var statearr_54068_54094 = state_54046__$1;
(statearr_54068_54094[(2)] = null);

(statearr_54068_54094[(1)] = (2));


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
});})(c__19484__auto___54080,out))
;
return ((function (switch__19463__auto__,c__19484__auto___54080,out){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_54072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54072[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_54072[(1)] = (1));

return statearr_54072;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_54046){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_54046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e54073){if((e54073 instanceof Object)){
var ex__19467__auto__ = e54073;
var statearr_54074_54095 = state_54046;
(statearr_54074_54095[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54096 = state_54046;
state_54046 = G__54096;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_54046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_54046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___54080,out))
})();
var state__19486__auto__ = (function (){var statearr_54075 = f__19485__auto__.call(null);
(statearr_54075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___54080);

return statearr_54075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___54080,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args54097 = [];
var len__18249__auto___54171 = arguments.length;
var i__18250__auto___54172 = (0);
while(true){
if((i__18250__auto___54172 < len__18249__auto___54171)){
args54097.push((arguments[i__18250__auto___54172]));

var G__54173 = (i__18250__auto___54172 + (1));
i__18250__auto___54172 = G__54173;
continue;
} else {
}
break;
}

var G__54099 = args54097.length;
switch (G__54099) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54097.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19484__auto___54175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___54175,out){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___54175,out){
return (function (state_54141){
var state_val_54142 = (state_54141[(1)]);
if((state_val_54142 === (7))){
var inst_54137 = (state_54141[(2)]);
var state_54141__$1 = state_54141;
var statearr_54143_54176 = state_54141__$1;
(statearr_54143_54176[(2)] = inst_54137);

(statearr_54143_54176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (1))){
var inst_54100 = [];
var inst_54101 = inst_54100;
var inst_54102 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54141__$1 = (function (){var statearr_54144 = state_54141;
(statearr_54144[(7)] = inst_54101);

(statearr_54144[(8)] = inst_54102);

return statearr_54144;
})();
var statearr_54145_54177 = state_54141__$1;
(statearr_54145_54177[(2)] = null);

(statearr_54145_54177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (4))){
var inst_54105 = (state_54141[(9)]);
var inst_54105__$1 = (state_54141[(2)]);
var inst_54106 = (inst_54105__$1 == null);
var inst_54107 = cljs.core.not.call(null,inst_54106);
var state_54141__$1 = (function (){var statearr_54146 = state_54141;
(statearr_54146[(9)] = inst_54105__$1);

return statearr_54146;
})();
if(inst_54107){
var statearr_54147_54178 = state_54141__$1;
(statearr_54147_54178[(1)] = (5));

} else {
var statearr_54148_54179 = state_54141__$1;
(statearr_54148_54179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (15))){
var inst_54131 = (state_54141[(2)]);
var state_54141__$1 = state_54141;
var statearr_54149_54180 = state_54141__$1;
(statearr_54149_54180[(2)] = inst_54131);

(statearr_54149_54180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (13))){
var state_54141__$1 = state_54141;
var statearr_54150_54181 = state_54141__$1;
(statearr_54150_54181[(2)] = null);

(statearr_54150_54181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (6))){
var inst_54101 = (state_54141[(7)]);
var inst_54126 = inst_54101.length;
var inst_54127 = (inst_54126 > (0));
var state_54141__$1 = state_54141;
if(cljs.core.truth_(inst_54127)){
var statearr_54151_54182 = state_54141__$1;
(statearr_54151_54182[(1)] = (12));

} else {
var statearr_54152_54183 = state_54141__$1;
(statearr_54152_54183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (3))){
var inst_54139 = (state_54141[(2)]);
var state_54141__$1 = state_54141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54141__$1,inst_54139);
} else {
if((state_val_54142 === (12))){
var inst_54101 = (state_54141[(7)]);
var inst_54129 = cljs.core.vec.call(null,inst_54101);
var state_54141__$1 = state_54141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54141__$1,(15),out,inst_54129);
} else {
if((state_val_54142 === (2))){
var state_54141__$1 = state_54141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54141__$1,(4),ch);
} else {
if((state_val_54142 === (11))){
var inst_54109 = (state_54141[(10)]);
var inst_54105 = (state_54141[(9)]);
var inst_54119 = (state_54141[(2)]);
var inst_54120 = [];
var inst_54121 = inst_54120.push(inst_54105);
var inst_54101 = inst_54120;
var inst_54102 = inst_54109;
var state_54141__$1 = (function (){var statearr_54153 = state_54141;
(statearr_54153[(11)] = inst_54121);

(statearr_54153[(7)] = inst_54101);

(statearr_54153[(12)] = inst_54119);

(statearr_54153[(8)] = inst_54102);

return statearr_54153;
})();
var statearr_54154_54184 = state_54141__$1;
(statearr_54154_54184[(2)] = null);

(statearr_54154_54184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (9))){
var inst_54101 = (state_54141[(7)]);
var inst_54117 = cljs.core.vec.call(null,inst_54101);
var state_54141__$1 = state_54141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54141__$1,(11),out,inst_54117);
} else {
if((state_val_54142 === (5))){
var inst_54109 = (state_54141[(10)]);
var inst_54105 = (state_54141[(9)]);
var inst_54102 = (state_54141[(8)]);
var inst_54109__$1 = f.call(null,inst_54105);
var inst_54110 = cljs.core._EQ_.call(null,inst_54109__$1,inst_54102);
var inst_54111 = cljs.core.keyword_identical_QMARK_.call(null,inst_54102,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54112 = (inst_54110) || (inst_54111);
var state_54141__$1 = (function (){var statearr_54155 = state_54141;
(statearr_54155[(10)] = inst_54109__$1);

return statearr_54155;
})();
if(cljs.core.truth_(inst_54112)){
var statearr_54156_54185 = state_54141__$1;
(statearr_54156_54185[(1)] = (8));

} else {
var statearr_54157_54186 = state_54141__$1;
(statearr_54157_54186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (14))){
var inst_54134 = (state_54141[(2)]);
var inst_54135 = cljs.core.async.close_BANG_.call(null,out);
var state_54141__$1 = (function (){var statearr_54159 = state_54141;
(statearr_54159[(13)] = inst_54134);

return statearr_54159;
})();
var statearr_54160_54187 = state_54141__$1;
(statearr_54160_54187[(2)] = inst_54135);

(statearr_54160_54187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (10))){
var inst_54124 = (state_54141[(2)]);
var state_54141__$1 = state_54141;
var statearr_54161_54188 = state_54141__$1;
(statearr_54161_54188[(2)] = inst_54124);

(statearr_54161_54188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54142 === (8))){
var inst_54109 = (state_54141[(10)]);
var inst_54101 = (state_54141[(7)]);
var inst_54105 = (state_54141[(9)]);
var inst_54114 = inst_54101.push(inst_54105);
var tmp54158 = inst_54101;
var inst_54101__$1 = tmp54158;
var inst_54102 = inst_54109;
var state_54141__$1 = (function (){var statearr_54162 = state_54141;
(statearr_54162[(14)] = inst_54114);

(statearr_54162[(7)] = inst_54101__$1);

(statearr_54162[(8)] = inst_54102);

return statearr_54162;
})();
var statearr_54163_54189 = state_54141__$1;
(statearr_54163_54189[(2)] = null);

(statearr_54163_54189[(1)] = (2));


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
});})(c__19484__auto___54175,out))
;
return ((function (switch__19463__auto__,c__19484__auto___54175,out){
return (function() {
var cljs$core$async$state_machine__19464__auto__ = null;
var cljs$core$async$state_machine__19464__auto____0 = (function (){
var statearr_54167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54167[(0)] = cljs$core$async$state_machine__19464__auto__);

(statearr_54167[(1)] = (1));

return statearr_54167;
});
var cljs$core$async$state_machine__19464__auto____1 = (function (state_54141){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_54141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e54168){if((e54168 instanceof Object)){
var ex__19467__auto__ = e54168;
var statearr_54169_54190 = state_54141;
(statearr_54169_54190[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54191 = state_54141;
state_54141 = G__54191;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
cljs$core$async$state_machine__19464__auto__ = function(state_54141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19464__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19464__auto____1.call(this,state_54141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19464__auto____0;
cljs$core$async$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19464__auto____1;
return cljs$core$async$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___54175,out))
})();
var state__19486__auto__ = (function (){var statearr_54170 = f__19485__auto__.call(null);
(statearr_54170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___54175);

return statearr_54170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___54175,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map