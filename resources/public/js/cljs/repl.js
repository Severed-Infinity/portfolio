// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23483_23497 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23484_23498 = null;
var count__23485_23499 = (0);
var i__23486_23500 = (0);
while(true){
if((i__23486_23500 < count__23485_23499)){
var f_23501 = cljs.core._nth.call(null,chunk__23484_23498,i__23486_23500);
cljs.core.println.call(null,"  ",f_23501);

var G__23502 = seq__23483_23497;
var G__23503 = chunk__23484_23498;
var G__23504 = count__23485_23499;
var G__23505 = (i__23486_23500 + (1));
seq__23483_23497 = G__23502;
chunk__23484_23498 = G__23503;
count__23485_23499 = G__23504;
i__23486_23500 = G__23505;
continue;
} else {
var temp__4425__auto___23506 = cljs.core.seq.call(null,seq__23483_23497);
if(temp__4425__auto___23506){
var seq__23483_23507__$1 = temp__4425__auto___23506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23483_23507__$1)){
var c__18151__auto___23508 = cljs.core.chunk_first.call(null,seq__23483_23507__$1);
var G__23509 = cljs.core.chunk_rest.call(null,seq__23483_23507__$1);
var G__23510 = c__18151__auto___23508;
var G__23511 = cljs.core.count.call(null,c__18151__auto___23508);
var G__23512 = (0);
seq__23483_23497 = G__23509;
chunk__23484_23498 = G__23510;
count__23485_23499 = G__23511;
i__23486_23500 = G__23512;
continue;
} else {
var f_23513 = cljs.core.first.call(null,seq__23483_23507__$1);
cljs.core.println.call(null,"  ",f_23513);

var G__23514 = cljs.core.next.call(null,seq__23483_23507__$1);
var G__23515 = null;
var G__23516 = (0);
var G__23517 = (0);
seq__23483_23497 = G__23514;
chunk__23484_23498 = G__23515;
count__23485_23499 = G__23516;
i__23486_23500 = G__23517;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23518 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17348__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23518);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23518)))?cljs.core.second.call(null,arglists_23518):arglists_23518));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23488 = null;
var count__23489 = (0);
var i__23490 = (0);
while(true){
if((i__23490 < count__23489)){
var vec__23491 = cljs.core._nth.call(null,chunk__23488,i__23490);
var name = cljs.core.nth.call(null,vec__23491,(0),null);
var map__23492 = cljs.core.nth.call(null,vec__23491,(1),null);
var map__23492__$1 = ((((!((map__23492 == null)))?((((map__23492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23492):map__23492);
var doc = cljs.core.get.call(null,map__23492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23519 = seq__23487;
var G__23520 = chunk__23488;
var G__23521 = count__23489;
var G__23522 = (i__23490 + (1));
seq__23487 = G__23519;
chunk__23488 = G__23520;
count__23489 = G__23521;
i__23490 = G__23522;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23487);
if(temp__4425__auto__){
var seq__23487__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23487__$1)){
var c__18151__auto__ = cljs.core.chunk_first.call(null,seq__23487__$1);
var G__23523 = cljs.core.chunk_rest.call(null,seq__23487__$1);
var G__23524 = c__18151__auto__;
var G__23525 = cljs.core.count.call(null,c__18151__auto__);
var G__23526 = (0);
seq__23487 = G__23523;
chunk__23488 = G__23524;
count__23489 = G__23525;
i__23490 = G__23526;
continue;
} else {
var vec__23494 = cljs.core.first.call(null,seq__23487__$1);
var name = cljs.core.nth.call(null,vec__23494,(0),null);
var map__23495 = cljs.core.nth.call(null,vec__23494,(1),null);
var map__23495__$1 = ((((!((map__23495 == null)))?((((map__23495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23495):map__23495);
var doc = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23527 = cljs.core.next.call(null,seq__23487__$1);
var G__23528 = null;
var G__23529 = (0);
var G__23530 = (0);
seq__23487 = G__23527;
chunk__23488 = G__23528;
count__23489 = G__23529;
i__23490 = G__23530;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map