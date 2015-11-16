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
var seq__55519_55533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55520_55534 = null;
var count__55521_55535 = (0);
var i__55522_55536 = (0);
while(true){
if((i__55522_55536 < count__55521_55535)){
var f_55537 = cljs.core._nth.call(null,chunk__55520_55534,i__55522_55536);
cljs.core.println.call(null,"  ",f_55537);

var G__55538 = seq__55519_55533;
var G__55539 = chunk__55520_55534;
var G__55540 = count__55521_55535;
var G__55541 = (i__55522_55536 + (1));
seq__55519_55533 = G__55538;
chunk__55520_55534 = G__55539;
count__55521_55535 = G__55540;
i__55522_55536 = G__55541;
continue;
} else {
var temp__4425__auto___55542 = cljs.core.seq.call(null,seq__55519_55533);
if(temp__4425__auto___55542){
var seq__55519_55543__$1 = temp__4425__auto___55542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55519_55543__$1)){
var c__17994__auto___55544 = cljs.core.chunk_first.call(null,seq__55519_55543__$1);
var G__55545 = cljs.core.chunk_rest.call(null,seq__55519_55543__$1);
var G__55546 = c__17994__auto___55544;
var G__55547 = cljs.core.count.call(null,c__17994__auto___55544);
var G__55548 = (0);
seq__55519_55533 = G__55545;
chunk__55520_55534 = G__55546;
count__55521_55535 = G__55547;
i__55522_55536 = G__55548;
continue;
} else {
var f_55549 = cljs.core.first.call(null,seq__55519_55543__$1);
cljs.core.println.call(null,"  ",f_55549);

var G__55550 = cljs.core.next.call(null,seq__55519_55543__$1);
var G__55551 = null;
var G__55552 = (0);
var G__55553 = (0);
seq__55519_55533 = G__55550;
chunk__55520_55534 = G__55551;
count__55521_55535 = G__55552;
i__55522_55536 = G__55553;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55554 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17191__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_55554);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_55554)))?cljs.core.second.call(null,arglists_55554):arglists_55554));
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
var seq__55523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55524 = null;
var count__55525 = (0);
var i__55526 = (0);
while(true){
if((i__55526 < count__55525)){
var vec__55527 = cljs.core._nth.call(null,chunk__55524,i__55526);
var name = cljs.core.nth.call(null,vec__55527,(0),null);
var map__55528 = cljs.core.nth.call(null,vec__55527,(1),null);
var map__55528__$1 = ((((!((map__55528 == null)))?((((map__55528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55528):map__55528);
var doc = cljs.core.get.call(null,map__55528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__55528__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__55555 = seq__55523;
var G__55556 = chunk__55524;
var G__55557 = count__55525;
var G__55558 = (i__55526 + (1));
seq__55523 = G__55555;
chunk__55524 = G__55556;
count__55525 = G__55557;
i__55526 = G__55558;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__55523);
if(temp__4425__auto__){
var seq__55523__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55523__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__55523__$1);
var G__55559 = cljs.core.chunk_rest.call(null,seq__55523__$1);
var G__55560 = c__17994__auto__;
var G__55561 = cljs.core.count.call(null,c__17994__auto__);
var G__55562 = (0);
seq__55523 = G__55559;
chunk__55524 = G__55560;
count__55525 = G__55561;
i__55526 = G__55562;
continue;
} else {
var vec__55530 = cljs.core.first.call(null,seq__55523__$1);
var name = cljs.core.nth.call(null,vec__55530,(0),null);
var map__55531 = cljs.core.nth.call(null,vec__55530,(1),null);
var map__55531__$1 = ((((!((map__55531 == null)))?((((map__55531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55531):map__55531);
var doc = cljs.core.get.call(null,map__55531__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__55531__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__55563 = cljs.core.next.call(null,seq__55523__$1);
var G__55564 = null;
var G__55565 = (0);
var G__55566 = (0);
seq__55523 = G__55563;
chunk__55524 = G__55564;
count__55525 = G__55565;
i__55526 = G__55566;
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