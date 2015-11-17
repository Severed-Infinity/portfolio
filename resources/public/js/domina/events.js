// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__17846__auto__ = (((evt == null))?null:evt);
var m__17847__auto__ = (domina.events.prevent_default[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,evt);
} else {
var m__17847__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__17846__auto__ = (((evt == null))?null:evt);
var m__17847__auto__ = (domina.events.stop_propagation[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,evt);
} else {
var m__17847__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__17846__auto__ = (((evt == null))?null:evt);
var m__17847__auto__ = (domina.events.target[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,evt);
} else {
var m__17847__auto____$1 = (domina.events.target["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__17846__auto__ = (((evt == null))?null:evt);
var m__17847__auto__ = (domina.events.current_target[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,evt);
} else {
var m__17847__auto____$1 = (domina.events.current_target["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__17846__auto__ = (((evt == null))?null:evt);
var m__17847__auto__ = (domina.events.event_type[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,evt);
} else {
var m__17847__auto____$1 = (domina.events.event_type["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__17846__auto__ = (((evt == null))?null:evt);
var m__17847__auto__ = (domina.events.raw_event[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,evt);
} else {
var m__17847__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events55295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events55295 = (function (create_listener_function,f,evt,meta55296){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta55296 = meta55296;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events55295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55297,meta55296__$1){
var self__ = this;
var _55297__$1 = this;
return (new domina.events.t_domina$events55295(self__.create_listener_function,self__.f,self__.evt,meta55296__$1));
});

domina.events.t_domina$events55295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55297){
var self__ = this;
var _55297__$1 = this;
return self__.meta55296;
});

domina.events.t_domina$events55295.prototype.domina$events$Event$ = true;

domina.events.t_domina$events55295.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events55295.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events55295.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events55295.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events55295.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events55295.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events55295.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4423__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4423__auto__)){
var val = temp__4423__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events55295.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__17191__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events55295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta55296","meta55296",225042616,null)], null);
});

domina.events.t_domina$events55295.cljs$lang$type = true;

domina.events.t_domina$events55295.cljs$lang$ctorStr = "domina.events/t_domina$events55295";

domina.events.t_domina$events55295.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"domina.events/t_domina$events55295");
});

domina.events.__GT_t_domina$events55295 = (function domina$events$create_listener_function_$___GT_t_domina$events55295(create_listener_function__$1,f__$1,evt__$1,meta55296){
return (new domina.events.t_domina$events55295(create_listener_function__$1,f__$1,evt__$1,meta55296));
});

}

return (new domina.events.t_domina$events55295(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__17963__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__55302(s__55303){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__55303__$1 = s__55303;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55303__$1);
if(temp__4425__auto__){
var s__55303__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55303__$2)){
var c__17961__auto__ = cljs.core.chunk_first.call(null,s__55303__$2);
var size__17962__auto__ = cljs.core.count.call(null,c__17961__auto__);
var b__55305 = cljs.core.chunk_buffer.call(null,size__17962__auto__);
if((function (){var i__55304 = (0);
while(true){
if((i__55304 < size__17962__auto__)){
var node = cljs.core._nth.call(null,c__17961__auto__,i__55304);
cljs.core.chunk_append.call(null,b__55305,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__55306 = (i__55304 + (1));
i__55304 = G__55306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55305),domina$events$listen_internal_BANG__$_iter__55302.call(null,cljs.core.chunk_rest.call(null,s__55303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55305),null);
}
} else {
var node = cljs.core.first.call(null,s__55303__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__55302.call(null,cljs.core.rest.call(null,s__55303__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__17963__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args55307 = [];
var len__18249__auto___55310 = arguments.length;
var i__18250__auto___55311 = (0);
while(true){
if((i__18250__auto___55311 < len__18249__auto___55310)){
args55307.push((arguments[i__18250__auto___55311]));

var G__55312 = (i__18250__auto___55311 + (1));
i__18250__auto___55311 = G__55312;
continue;
} else {
}
break;
}

var G__55309 = args55307.length;
switch (G__55309) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55307.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var args55314 = [];
var len__18249__auto___55317 = arguments.length;
var i__18250__auto___55318 = (0);
while(true){
if((i__18250__auto___55318 < len__18249__auto___55317)){
args55314.push((arguments[i__18250__auto___55318]));

var G__55319 = (i__18250__auto___55318 + (1));
i__18250__auto___55318 = G__55319;
continue;
} else {
}
break;
}

var G__55316 = args55314.length;
switch (G__55316) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55314.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var args55321 = [];
var len__18249__auto___55324 = arguments.length;
var i__18250__auto___55325 = (0);
while(true){
if((i__18250__auto___55325 < len__18249__auto___55324)){
args55321.push((arguments[i__18250__auto___55325]));

var G__55326 = (i__18250__auto___55325 + (1));
i__18250__auto___55325 = G__55326;
continue;
} else {
}
break;
}

var G__55323 = args55321.length;
switch (G__55323) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55321.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var args55328 = [];
var len__18249__auto___55331 = arguments.length;
var i__18250__auto___55332 = (0);
while(true){
if((i__18250__auto___55332 < len__18249__auto___55331)){
args55328.push((arguments[i__18250__auto___55332]));

var G__55333 = (i__18250__auto___55332 + (1));
i__18250__auto___55332 = G__55333;
continue;
} else {
}
break;
}

var G__55330 = args55328.length;
switch (G__55330) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55328.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var args55335 = [];
var len__18249__auto___55346 = arguments.length;
var i__18250__auto___55347 = (0);
while(true){
if((i__18250__auto___55347 < len__18249__auto___55346)){
args55335.push((arguments[i__18250__auto___55347]));

var G__55348 = (i__18250__auto___55347 + (1));
i__18250__auto___55347 = G__55348;
continue;
} else {
}
break;
}

var G__55337 = args55335.length;
switch (G__55337) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55335.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__55338 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__55339 = null;
var count__55340 = (0);
var i__55341 = (0);
while(true){
if((i__55341 < count__55340)){
var node = cljs.core._nth.call(null,chunk__55339,i__55341);
goog.events.removeAll(node);

var G__55350 = seq__55338;
var G__55351 = chunk__55339;
var G__55352 = count__55340;
var G__55353 = (i__55341 + (1));
seq__55338 = G__55350;
chunk__55339 = G__55351;
count__55340 = G__55352;
i__55341 = G__55353;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__55338);
if(temp__4425__auto__){
var seq__55338__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55338__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__55338__$1);
var G__55354 = cljs.core.chunk_rest.call(null,seq__55338__$1);
var G__55355 = c__17994__auto__;
var G__55356 = cljs.core.count.call(null,c__17994__auto__);
var G__55357 = (0);
seq__55338 = G__55354;
chunk__55339 = G__55355;
count__55340 = G__55356;
i__55341 = G__55357;
continue;
} else {
var node = cljs.core.first.call(null,seq__55338__$1);
goog.events.removeAll(node);

var G__55358 = cljs.core.next.call(null,seq__55338__$1);
var G__55359 = null;
var G__55360 = (0);
var G__55361 = (0);
seq__55338 = G__55358;
chunk__55339 = G__55359;
count__55340 = G__55360;
i__55341 = G__55361;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__55342 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__55343 = null;
var count__55344 = (0);
var i__55345 = (0);
while(true){
if((i__55345 < count__55344)){
var node = cljs.core._nth.call(null,chunk__55343,i__55345);
goog.events.removeAll(node,type__$1);

var G__55362 = seq__55342;
var G__55363 = chunk__55343;
var G__55364 = count__55344;
var G__55365 = (i__55345 + (1));
seq__55342 = G__55362;
chunk__55343 = G__55363;
count__55344 = G__55364;
i__55345 = G__55365;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__55342);
if(temp__4425__auto__){
var seq__55342__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55342__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__55342__$1);
var G__55366 = cljs.core.chunk_rest.call(null,seq__55342__$1);
var G__55367 = c__17994__auto__;
var G__55368 = cljs.core.count.call(null,c__17994__auto__);
var G__55369 = (0);
seq__55342 = G__55366;
chunk__55343 = G__55367;
count__55344 = G__55368;
i__55345 = G__55369;
continue;
} else {
var node = cljs.core.first.call(null,seq__55342__$1);
goog.events.removeAll(node,type__$1);

var G__55370 = cljs.core.next.call(null,seq__55342__$1);
var G__55371 = null;
var G__55372 = (0);
var G__55373 = (0);
seq__55342 = G__55370;
chunk__55343 = G__55371;
count__55344 = G__55372;
i__55345 = G__55373;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var args55374 = [];
var len__18249__auto___55377 = arguments.length;
var i__18250__auto___55378 = (0);
while(true){
if((i__18250__auto___55378 < len__18249__auto___55377)){
args55374.push((arguments[i__18250__auto___55378]));

var G__55379 = (i__18250__auto___55378 + (1));
i__18250__auto___55378 = G__55379;
continue;
} else {
}
break;
}

var G__55376 = args55374.length;
switch (G__55376) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55374.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4423__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4423__auto__)){
var parent = temp__4423__auto__;
var G__55381 = parent;
var G__55382 = cljs.core.cons.call(null,parent,so_far);
n = G__55381;
so_far = G__55382;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__55391_55399 = cljs.core.seq.call(null,ancestors);
var chunk__55392_55400 = null;
var count__55393_55401 = (0);
var i__55394_55402 = (0);
while(true){
if((i__55394_55402 < count__55393_55401)){
var n_55403 = cljs.core._nth.call(null,chunk__55392_55400,i__55394_55402);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_55403;

goog.events.fireListeners(n_55403,evt.type,true,evt);
}

var G__55404 = seq__55391_55399;
var G__55405 = chunk__55392_55400;
var G__55406 = count__55393_55401;
var G__55407 = (i__55394_55402 + (1));
seq__55391_55399 = G__55404;
chunk__55392_55400 = G__55405;
count__55393_55401 = G__55406;
i__55394_55402 = G__55407;
continue;
} else {
var temp__4425__auto___55408 = cljs.core.seq.call(null,seq__55391_55399);
if(temp__4425__auto___55408){
var seq__55391_55409__$1 = temp__4425__auto___55408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55391_55409__$1)){
var c__17994__auto___55410 = cljs.core.chunk_first.call(null,seq__55391_55409__$1);
var G__55411 = cljs.core.chunk_rest.call(null,seq__55391_55409__$1);
var G__55412 = c__17994__auto___55410;
var G__55413 = cljs.core.count.call(null,c__17994__auto___55410);
var G__55414 = (0);
seq__55391_55399 = G__55411;
chunk__55392_55400 = G__55412;
count__55393_55401 = G__55413;
i__55394_55402 = G__55414;
continue;
} else {
var n_55415 = cljs.core.first.call(null,seq__55391_55409__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_55415;

goog.events.fireListeners(n_55415,evt.type,true,evt);
}

var G__55416 = cljs.core.next.call(null,seq__55391_55409__$1);
var G__55417 = null;
var G__55418 = (0);
var G__55419 = (0);
seq__55391_55399 = G__55416;
chunk__55392_55400 = G__55417;
count__55393_55401 = G__55418;
i__55394_55402 = G__55419;
continue;
}
} else {
}
}
break;
}

var seq__55395_55420 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__55396_55421 = null;
var count__55397_55422 = (0);
var i__55398_55423 = (0);
while(true){
if((i__55398_55423 < count__55397_55422)){
var n_55424 = cljs.core._nth.call(null,chunk__55396_55421,i__55398_55423);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_55424;

goog.events.fireListeners(n_55424,evt.type,false,evt);
}

var G__55425 = seq__55395_55420;
var G__55426 = chunk__55396_55421;
var G__55427 = count__55397_55422;
var G__55428 = (i__55398_55423 + (1));
seq__55395_55420 = G__55425;
chunk__55396_55421 = G__55426;
count__55397_55422 = G__55427;
i__55398_55423 = G__55428;
continue;
} else {
var temp__4425__auto___55429 = cljs.core.seq.call(null,seq__55395_55420);
if(temp__4425__auto___55429){
var seq__55395_55430__$1 = temp__4425__auto___55429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55395_55430__$1)){
var c__17994__auto___55431 = cljs.core.chunk_first.call(null,seq__55395_55430__$1);
var G__55432 = cljs.core.chunk_rest.call(null,seq__55395_55430__$1);
var G__55433 = c__17994__auto___55431;
var G__55434 = cljs.core.count.call(null,c__17994__auto___55431);
var G__55435 = (0);
seq__55395_55420 = G__55432;
chunk__55396_55421 = G__55433;
count__55397_55422 = G__55434;
i__55398_55423 = G__55435;
continue;
} else {
var n_55436 = cljs.core.first.call(null,seq__55395_55430__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_55436;

goog.events.fireListeners(n_55436,evt.type,false,evt);
}

var G__55437 = cljs.core.next.call(null,seq__55395_55430__$1);
var G__55438 = null;
var G__55439 = (0);
var G__55440 = (0);
seq__55395_55420 = G__55437;
chunk__55396_55421 = G__55438;
count__55397_55422 = G__55439;
i__55398_55423 = G__55440;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__17179__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__17179__auto__)){
return o.dispatchEvent;
} else {
return and__17179__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args55441 = [];
var len__18249__auto___55450 = arguments.length;
var i__18250__auto___55451 = (0);
while(true){
if((i__18250__auto___55451 < len__18249__auto___55450)){
args55441.push((arguments[i__18250__auto___55451]));

var G__55452 = (i__18250__auto___55451 + (1));
i__18250__auto___55451 = G__55452;
continue;
} else {
}
break;
}

var G__55443 = args55441.length;
switch (G__55443) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55441.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__55444_55454 = cljs.core.seq.call(null,evt_map);
var chunk__55445_55455 = null;
var count__55446_55456 = (0);
var i__55447_55457 = (0);
while(true){
if((i__55447_55457 < count__55446_55456)){
var vec__55448_55458 = cljs.core._nth.call(null,chunk__55445_55455,i__55447_55457);
var k_55459 = cljs.core.nth.call(null,vec__55448_55458,(0),null);
var v_55460 = cljs.core.nth.call(null,vec__55448_55458,(1),null);
(evt[k_55459] = v_55460);

var G__55461 = seq__55444_55454;
var G__55462 = chunk__55445_55455;
var G__55463 = count__55446_55456;
var G__55464 = (i__55447_55457 + (1));
seq__55444_55454 = G__55461;
chunk__55445_55455 = G__55462;
count__55446_55456 = G__55463;
i__55447_55457 = G__55464;
continue;
} else {
var temp__4425__auto___55465 = cljs.core.seq.call(null,seq__55444_55454);
if(temp__4425__auto___55465){
var seq__55444_55466__$1 = temp__4425__auto___55465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55444_55466__$1)){
var c__17994__auto___55467 = cljs.core.chunk_first.call(null,seq__55444_55466__$1);
var G__55468 = cljs.core.chunk_rest.call(null,seq__55444_55466__$1);
var G__55469 = c__17994__auto___55467;
var G__55470 = cljs.core.count.call(null,c__17994__auto___55467);
var G__55471 = (0);
seq__55444_55454 = G__55468;
chunk__55445_55455 = G__55469;
count__55446_55456 = G__55470;
i__55447_55457 = G__55471;
continue;
} else {
var vec__55449_55472 = cljs.core.first.call(null,seq__55444_55466__$1);
var k_55473 = cljs.core.nth.call(null,vec__55449_55472,(0),null);
var v_55474 = cljs.core.nth.call(null,vec__55449_55472,(1),null);
(evt[k_55473] = v_55474);

var G__55475 = cljs.core.next.call(null,seq__55444_55466__$1);
var G__55476 = null;
var G__55477 = (0);
var G__55478 = (0);
seq__55444_55454 = G__55475;
chunk__55445_55455 = G__55476;
count__55446_55456 = G__55477;
i__55447_55457 = G__55478;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__55479_SHARP_){
return goog.events.getListeners(p1__55479_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map