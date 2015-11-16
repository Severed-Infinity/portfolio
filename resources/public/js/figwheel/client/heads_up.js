// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__18256__auto__ = [];
var len__18249__auto___55589 = arguments.length;
var i__18250__auto___55590 = (0);
while(true){
if((i__18250__auto___55590 < len__18249__auto___55589)){
args__18256__auto__.push((arguments[i__18250__auto___55590]));

var G__55591 = (i__18250__auto___55590 + (1));
i__18250__auto___55590 = G__55591;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((2) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18257__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__55581_55592 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__55582_55593 = null;
var count__55583_55594 = (0);
var i__55584_55595 = (0);
while(true){
if((i__55584_55595 < count__55583_55594)){
var k_55596 = cljs.core._nth.call(null,chunk__55582_55593,i__55584_55595);
e.setAttribute(cljs.core.name.call(null,k_55596),cljs.core.get.call(null,attrs,k_55596));

var G__55597 = seq__55581_55592;
var G__55598 = chunk__55582_55593;
var G__55599 = count__55583_55594;
var G__55600 = (i__55584_55595 + (1));
seq__55581_55592 = G__55597;
chunk__55582_55593 = G__55598;
count__55583_55594 = G__55599;
i__55584_55595 = G__55600;
continue;
} else {
var temp__4425__auto___55601 = cljs.core.seq.call(null,seq__55581_55592);
if(temp__4425__auto___55601){
var seq__55581_55602__$1 = temp__4425__auto___55601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55581_55602__$1)){
var c__17994__auto___55603 = cljs.core.chunk_first.call(null,seq__55581_55602__$1);
var G__55604 = cljs.core.chunk_rest.call(null,seq__55581_55602__$1);
var G__55605 = c__17994__auto___55603;
var G__55606 = cljs.core.count.call(null,c__17994__auto___55603);
var G__55607 = (0);
seq__55581_55592 = G__55604;
chunk__55582_55593 = G__55605;
count__55583_55594 = G__55606;
i__55584_55595 = G__55607;
continue;
} else {
var k_55608 = cljs.core.first.call(null,seq__55581_55602__$1);
e.setAttribute(cljs.core.name.call(null,k_55608),cljs.core.get.call(null,attrs,k_55608));

var G__55609 = cljs.core.next.call(null,seq__55581_55602__$1);
var G__55610 = null;
var G__55611 = (0);
var G__55612 = (0);
seq__55581_55592 = G__55609;
chunk__55582_55593 = G__55610;
count__55583_55594 = G__55611;
i__55584_55595 = G__55612;
continue;
}
} else {
}
}
break;
}

var seq__55585_55613 = cljs.core.seq.call(null,children);
var chunk__55586_55614 = null;
var count__55587_55615 = (0);
var i__55588_55616 = (0);
while(true){
if((i__55588_55616 < count__55587_55615)){
var ch_55617 = cljs.core._nth.call(null,chunk__55586_55614,i__55588_55616);
e.appendChild(ch_55617);

var G__55618 = seq__55585_55613;
var G__55619 = chunk__55586_55614;
var G__55620 = count__55587_55615;
var G__55621 = (i__55588_55616 + (1));
seq__55585_55613 = G__55618;
chunk__55586_55614 = G__55619;
count__55587_55615 = G__55620;
i__55588_55616 = G__55621;
continue;
} else {
var temp__4425__auto___55622 = cljs.core.seq.call(null,seq__55585_55613);
if(temp__4425__auto___55622){
var seq__55585_55623__$1 = temp__4425__auto___55622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55585_55623__$1)){
var c__17994__auto___55624 = cljs.core.chunk_first.call(null,seq__55585_55623__$1);
var G__55625 = cljs.core.chunk_rest.call(null,seq__55585_55623__$1);
var G__55626 = c__17994__auto___55624;
var G__55627 = cljs.core.count.call(null,c__17994__auto___55624);
var G__55628 = (0);
seq__55585_55613 = G__55625;
chunk__55586_55614 = G__55626;
count__55587_55615 = G__55627;
i__55588_55616 = G__55628;
continue;
} else {
var ch_55629 = cljs.core.first.call(null,seq__55585_55623__$1);
e.appendChild(ch_55629);

var G__55630 = cljs.core.next.call(null,seq__55585_55623__$1);
var G__55631 = null;
var G__55632 = (0);
var G__55633 = (0);
seq__55585_55613 = G__55630;
chunk__55586_55614 = G__55631;
count__55587_55615 = G__55632;
i__55588_55616 = G__55633;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq55578){
var G__55579 = cljs.core.first.call(null,seq55578);
var seq55578__$1 = cljs.core.next.call(null,seq55578);
var G__55580 = cljs.core.first.call(null,seq55578__$1);
var seq55578__$2 = cljs.core.next.call(null,seq55578__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__55579,G__55580,seq55578__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18108__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18104__auto__,prefer_table__18105__auto__,method_cache__18106__auto__,cached_hierarchy__18107__auto__,hierarchy__18108__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18104__auto__,prefer_table__18105__auto__,method_cache__18106__auto__,cached_hierarchy__18107__auto__,hierarchy__18108__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18108__auto__,method_table__18104__auto__,prefer_table__18105__auto__,method_cache__18106__auto__,cached_hierarchy__18107__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_55634 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_55634.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_55634.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_55634.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_55634);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__55635,st_map){
var map__55640 = p__55635;
var map__55640__$1 = ((((!((map__55640 == null)))?((((map__55640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55640):map__55640);
var container_el = cljs.core.get.call(null,map__55640__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__55640,map__55640__$1,container_el){
return (function (p__55642){
var vec__55643 = p__55642;
var k = cljs.core.nth.call(null,vec__55643,(0),null);
var v = cljs.core.nth.call(null,vec__55643,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__55640,map__55640__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__55644,dom_str){
var map__55647 = p__55644;
var map__55647__$1 = ((((!((map__55647 == null)))?((((map__55647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55647):map__55647);
var c = map__55647__$1;
var content_area_el = cljs.core.get.call(null,map__55647__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__55649){
var map__55652 = p__55649;
var map__55652__$1 = ((((!((map__55652 == null)))?((((map__55652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55652):map__55652);
var content_area_el = cljs.core.get.call(null,map__55652__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_55695){
var state_val_55696 = (state_55695[(1)]);
if((state_val_55696 === (1))){
var inst_55680 = (state_55695[(7)]);
var inst_55680__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_55681 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_55682 = ["10px","10px","100%","68px","1.0"];
var inst_55683 = cljs.core.PersistentHashMap.fromArrays(inst_55681,inst_55682);
var inst_55684 = cljs.core.merge.call(null,inst_55683,style);
var inst_55685 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_55680__$1,inst_55684);
var inst_55686 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_55680__$1,msg);
var inst_55687 = cljs.core.async.timeout.call(null,(300));
var state_55695__$1 = (function (){var statearr_55697 = state_55695;
(statearr_55697[(8)] = inst_55686);

(statearr_55697[(9)] = inst_55685);

(statearr_55697[(7)] = inst_55680__$1);

return statearr_55697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55695__$1,(2),inst_55687);
} else {
if((state_val_55696 === (2))){
var inst_55680 = (state_55695[(7)]);
var inst_55689 = (state_55695[(2)]);
var inst_55690 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_55691 = ["auto"];
var inst_55692 = cljs.core.PersistentHashMap.fromArrays(inst_55690,inst_55691);
var inst_55693 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_55680,inst_55692);
var state_55695__$1 = (function (){var statearr_55698 = state_55695;
(statearr_55698[(10)] = inst_55689);

return statearr_55698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55695__$1,inst_55693);
} else {
return null;
}
}
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto____0 = (function (){
var statearr_55702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55702[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto__);

(statearr_55702[(1)] = (1));

return statearr_55702;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto____1 = (function (state_55695){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_55695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e55703){if((e55703 instanceof Object)){
var ex__19467__auto__ = e55703;
var statearr_55704_55706 = state_55695;
(statearr_55704_55706[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55707 = state_55695;
state_55695 = G__55707;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto__ = function(state_55695){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto____1.call(this,state_55695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_55705 = f__19485__auto__.call(null);
(statearr_55705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_55705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__55709 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__55709,(0),null);
var ln = cljs.core.nth.call(null,vec__55709,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__55712 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__55712,(0),null);
var file_line = cljs.core.nth.call(null,vec__55712,(1),null);
var file_column = cljs.core.nth.call(null,vec__55712,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__55712,file_name,file_line,file_column){
return (function (p1__55710_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__55710_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__55712,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17191__auto__ = file_line;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
var and__17179__auto__ = cause;
if(cljs.core.truth_(and__17179__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17179__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__55715 = figwheel.client.heads_up.ensure_container.call(null);
var map__55715__$1 = ((((!((map__55715 == null)))?((((map__55715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55715):map__55715);
var content_area_el = cljs.core.get.call(null,map__55715__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_55763){
var state_val_55764 = (state_55763[(1)]);
if((state_val_55764 === (1))){
var inst_55746 = (state_55763[(7)]);
var inst_55746__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_55747 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_55748 = ["0.0"];
var inst_55749 = cljs.core.PersistentHashMap.fromArrays(inst_55747,inst_55748);
var inst_55750 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_55746__$1,inst_55749);
var inst_55751 = cljs.core.async.timeout.call(null,(300));
var state_55763__$1 = (function (){var statearr_55765 = state_55763;
(statearr_55765[(8)] = inst_55750);

(statearr_55765[(7)] = inst_55746__$1);

return statearr_55765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55763__$1,(2),inst_55751);
} else {
if((state_val_55764 === (2))){
var inst_55746 = (state_55763[(7)]);
var inst_55753 = (state_55763[(2)]);
var inst_55754 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_55755 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_55756 = cljs.core.PersistentHashMap.fromArrays(inst_55754,inst_55755);
var inst_55757 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_55746,inst_55756);
var inst_55758 = cljs.core.async.timeout.call(null,(200));
var state_55763__$1 = (function (){var statearr_55766 = state_55763;
(statearr_55766[(9)] = inst_55757);

(statearr_55766[(10)] = inst_55753);

return statearr_55766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55763__$1,(3),inst_55758);
} else {
if((state_val_55764 === (3))){
var inst_55746 = (state_55763[(7)]);
var inst_55760 = (state_55763[(2)]);
var inst_55761 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_55746,"");
var state_55763__$1 = (function (){var statearr_55767 = state_55763;
(statearr_55767[(11)] = inst_55760);

return statearr_55767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55763__$1,inst_55761);
} else {
return null;
}
}
}
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19464__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19464__auto____0 = (function (){
var statearr_55771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55771[(0)] = figwheel$client$heads_up$clear_$_state_machine__19464__auto__);

(statearr_55771[(1)] = (1));

return statearr_55771;
});
var figwheel$client$heads_up$clear_$_state_machine__19464__auto____1 = (function (state_55763){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_55763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e55772){if((e55772 instanceof Object)){
var ex__19467__auto__ = e55772;
var statearr_55773_55775 = state_55763;
(statearr_55773_55775[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55776 = state_55763;
state_55763 = G__55776;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19464__auto__ = function(state_55763){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19464__auto____1.call(this,state_55763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19464__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19464__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_55774 = f__19485__auto__.call(null);
(statearr_55774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_55774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_55808){
var state_val_55809 = (state_55808[(1)]);
if((state_val_55809 === (1))){
var inst_55798 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_55808__$1 = state_55808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55808__$1,(2),inst_55798);
} else {
if((state_val_55809 === (2))){
var inst_55800 = (state_55808[(2)]);
var inst_55801 = cljs.core.async.timeout.call(null,(400));
var state_55808__$1 = (function (){var statearr_55810 = state_55808;
(statearr_55810[(7)] = inst_55800);

return statearr_55810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55808__$1,(3),inst_55801);
} else {
if((state_val_55809 === (3))){
var inst_55803 = (state_55808[(2)]);
var inst_55804 = figwheel.client.heads_up.clear.call(null);
var state_55808__$1 = (function (){var statearr_55811 = state_55808;
(statearr_55811[(8)] = inst_55803);

return statearr_55811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55808__$1,(4),inst_55804);
} else {
if((state_val_55809 === (4))){
var inst_55806 = (state_55808[(2)]);
var state_55808__$1 = state_55808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55808__$1,inst_55806);
} else {
return null;
}
}
}
}
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto____0 = (function (){
var statearr_55815 = [null,null,null,null,null,null,null,null,null];
(statearr_55815[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto__);

(statearr_55815[(1)] = (1));

return statearr_55815;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto____1 = (function (state_55808){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_55808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e55816){if((e55816 instanceof Object)){
var ex__19467__auto__ = e55816;
var statearr_55817_55819 = state_55808;
(statearr_55817_55819[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55820 = state_55808;
state_55808 = G__55820;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto__ = function(state_55808){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto____1.call(this,state_55808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_55818 = f__19485__auto__.call(null);
(statearr_55818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_55818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map