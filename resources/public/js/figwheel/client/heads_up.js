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
var args__18413__auto__ = [];
var len__18406__auto___23668 = arguments.length;
var i__18407__auto___23669 = (0);
while(true){
if((i__18407__auto___23669 < len__18406__auto___23668)){
args__18413__auto__.push((arguments[i__18407__auto___23669]));

var G__23670 = (i__18407__auto___23669 + (1));
i__18407__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var argseq__18414__auto__ = ((((2) < args__18413__auto__.length))?(new cljs.core.IndexedSeq(args__18413__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18414__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23660_23671 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23661_23672 = null;
var count__23662_23673 = (0);
var i__23663_23674 = (0);
while(true){
if((i__23663_23674 < count__23662_23673)){
var k_23675 = cljs.core._nth.call(null,chunk__23661_23672,i__23663_23674);
e.setAttribute(cljs.core.name.call(null,k_23675),cljs.core.get.call(null,attrs,k_23675));

var G__23676 = seq__23660_23671;
var G__23677 = chunk__23661_23672;
var G__23678 = count__23662_23673;
var G__23679 = (i__23663_23674 + (1));
seq__23660_23671 = G__23676;
chunk__23661_23672 = G__23677;
count__23662_23673 = G__23678;
i__23663_23674 = G__23679;
continue;
} else {
var temp__4425__auto___23680 = cljs.core.seq.call(null,seq__23660_23671);
if(temp__4425__auto___23680){
var seq__23660_23681__$1 = temp__4425__auto___23680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23660_23681__$1)){
var c__18151__auto___23682 = cljs.core.chunk_first.call(null,seq__23660_23681__$1);
var G__23683 = cljs.core.chunk_rest.call(null,seq__23660_23681__$1);
var G__23684 = c__18151__auto___23682;
var G__23685 = cljs.core.count.call(null,c__18151__auto___23682);
var G__23686 = (0);
seq__23660_23671 = G__23683;
chunk__23661_23672 = G__23684;
count__23662_23673 = G__23685;
i__23663_23674 = G__23686;
continue;
} else {
var k_23687 = cljs.core.first.call(null,seq__23660_23681__$1);
e.setAttribute(cljs.core.name.call(null,k_23687),cljs.core.get.call(null,attrs,k_23687));

var G__23688 = cljs.core.next.call(null,seq__23660_23681__$1);
var G__23689 = null;
var G__23690 = (0);
var G__23691 = (0);
seq__23660_23671 = G__23688;
chunk__23661_23672 = G__23689;
count__23662_23673 = G__23690;
i__23663_23674 = G__23691;
continue;
}
} else {
}
}
break;
}

var seq__23664_23692 = cljs.core.seq.call(null,children);
var chunk__23665_23693 = null;
var count__23666_23694 = (0);
var i__23667_23695 = (0);
while(true){
if((i__23667_23695 < count__23666_23694)){
var ch_23696 = cljs.core._nth.call(null,chunk__23665_23693,i__23667_23695);
e.appendChild(ch_23696);

var G__23697 = seq__23664_23692;
var G__23698 = chunk__23665_23693;
var G__23699 = count__23666_23694;
var G__23700 = (i__23667_23695 + (1));
seq__23664_23692 = G__23697;
chunk__23665_23693 = G__23698;
count__23666_23694 = G__23699;
i__23667_23695 = G__23700;
continue;
} else {
var temp__4425__auto___23701 = cljs.core.seq.call(null,seq__23664_23692);
if(temp__4425__auto___23701){
var seq__23664_23702__$1 = temp__4425__auto___23701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23664_23702__$1)){
var c__18151__auto___23703 = cljs.core.chunk_first.call(null,seq__23664_23702__$1);
var G__23704 = cljs.core.chunk_rest.call(null,seq__23664_23702__$1);
var G__23705 = c__18151__auto___23703;
var G__23706 = cljs.core.count.call(null,c__18151__auto___23703);
var G__23707 = (0);
seq__23664_23692 = G__23704;
chunk__23665_23693 = G__23705;
count__23666_23694 = G__23706;
i__23667_23695 = G__23707;
continue;
} else {
var ch_23708 = cljs.core.first.call(null,seq__23664_23702__$1);
e.appendChild(ch_23708);

var G__23709 = cljs.core.next.call(null,seq__23664_23702__$1);
var G__23710 = null;
var G__23711 = (0);
var G__23712 = (0);
seq__23664_23692 = G__23709;
chunk__23665_23693 = G__23710;
count__23666_23694 = G__23711;
i__23667_23695 = G__23712;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23657){
var G__23658 = cljs.core.first.call(null,seq23657);
var seq23657__$1 = cljs.core.next.call(null,seq23657);
var G__23659 = cljs.core.first.call(null,seq23657__$1);
var seq23657__$2 = cljs.core.next.call(null,seq23657__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23658,G__23659,seq23657__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18261__auto__,prefer_table__18262__auto__,method_cache__18263__auto__,cached_hierarchy__18264__auto__,hierarchy__18265__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18261__auto__,prefer_table__18262__auto__,method_cache__18263__auto__,cached_hierarchy__18264__auto__,hierarchy__18265__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18265__auto__,method_table__18261__auto__,prefer_table__18262__auto__,method_cache__18263__auto__,cached_hierarchy__18264__auto__));
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
var el_23713 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23713.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23713.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23713.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23713);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23714,st_map){
var map__23719 = p__23714;
var map__23719__$1 = ((((!((map__23719 == null)))?((((map__23719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23719):map__23719);
var container_el = cljs.core.get.call(null,map__23719__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23719,map__23719__$1,container_el){
return (function (p__23721){
var vec__23722 = p__23721;
var k = cljs.core.nth.call(null,vec__23722,(0),null);
var v = cljs.core.nth.call(null,vec__23722,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23719,map__23719__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23723,dom_str){
var map__23726 = p__23723;
var map__23726__$1 = ((((!((map__23726 == null)))?((((map__23726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23726):map__23726);
var c = map__23726__$1;
var content_area_el = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23728){
var map__23731 = p__23728;
var map__23731__$1 = ((((!((map__23731 == null)))?((((map__23731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23731):map__23731);
var content_area_el = cljs.core.get.call(null,map__23731__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_23774){
var state_val_23775 = (state_23774[(1)]);
if((state_val_23775 === (1))){
var inst_23759 = (state_23774[(7)]);
var inst_23759__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23760 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23761 = ["10px","10px","100%","68px","1.0"];
var inst_23762 = cljs.core.PersistentHashMap.fromArrays(inst_23760,inst_23761);
var inst_23763 = cljs.core.merge.call(null,inst_23762,style);
var inst_23764 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23759__$1,inst_23763);
var inst_23765 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23759__$1,msg);
var inst_23766 = cljs.core.async.timeout.call(null,(300));
var state_23774__$1 = (function (){var statearr_23776 = state_23774;
(statearr_23776[(8)] = inst_23765);

(statearr_23776[(7)] = inst_23759__$1);

(statearr_23776[(9)] = inst_23764);

return statearr_23776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23774__$1,(2),inst_23766);
} else {
if((state_val_23775 === (2))){
var inst_23759 = (state_23774[(7)]);
var inst_23768 = (state_23774[(2)]);
var inst_23769 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23770 = ["auto"];
var inst_23771 = cljs.core.PersistentHashMap.fromArrays(inst_23769,inst_23770);
var inst_23772 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23759,inst_23771);
var state_23774__$1 = (function (){var statearr_23777 = state_23774;
(statearr_23777[(10)] = inst_23768);

return statearr_23777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23774__$1,inst_23772);
} else {
return null;
}
}
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto____0 = (function (){
var statearr_23781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23781[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto__);

(statearr_23781[(1)] = (1));

return statearr_23781;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto____1 = (function (state_23774){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23782){if((e23782 instanceof Object)){
var ex__19407__auto__ = e23782;
var statearr_23783_23785 = state_23774;
(statearr_23783_23785[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23786 = state_23774;
state_23774 = G__23786;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto__ = function(state_23774){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto____1.call(this,state_23774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_23784 = f__19516__auto__.call(null);
(statearr_23784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_23784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
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
var vec__23788 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23788,(0),null);
var ln = cljs.core.nth.call(null,vec__23788,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23791 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23791,(0),null);
var file_line = cljs.core.nth.call(null,vec__23791,(1),null);
var file_column = cljs.core.nth.call(null,vec__23791,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23791,file_name,file_line,file_column){
return (function (p1__23789_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23789_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23791,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17348__auto__ = file_line;
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
var and__17336__auto__ = cause;
if(cljs.core.truth_(and__17336__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17336__auto__;
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
var map__23794 = figwheel.client.heads_up.ensure_container.call(null);
var map__23794__$1 = ((((!((map__23794 == null)))?((((map__23794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23794):map__23794);
var content_area_el = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_23842){
var state_val_23843 = (state_23842[(1)]);
if((state_val_23843 === (1))){
var inst_23825 = (state_23842[(7)]);
var inst_23825__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23826 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23827 = ["0.0"];
var inst_23828 = cljs.core.PersistentHashMap.fromArrays(inst_23826,inst_23827);
var inst_23829 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23825__$1,inst_23828);
var inst_23830 = cljs.core.async.timeout.call(null,(300));
var state_23842__$1 = (function (){var statearr_23844 = state_23842;
(statearr_23844[(8)] = inst_23829);

(statearr_23844[(7)] = inst_23825__$1);

return statearr_23844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23842__$1,(2),inst_23830);
} else {
if((state_val_23843 === (2))){
var inst_23825 = (state_23842[(7)]);
var inst_23832 = (state_23842[(2)]);
var inst_23833 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23834 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23835 = cljs.core.PersistentHashMap.fromArrays(inst_23833,inst_23834);
var inst_23836 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23825,inst_23835);
var inst_23837 = cljs.core.async.timeout.call(null,(200));
var state_23842__$1 = (function (){var statearr_23845 = state_23842;
(statearr_23845[(9)] = inst_23832);

(statearr_23845[(10)] = inst_23836);

return statearr_23845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23842__$1,(3),inst_23837);
} else {
if((state_val_23843 === (3))){
var inst_23825 = (state_23842[(7)]);
var inst_23839 = (state_23842[(2)]);
var inst_23840 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23825,"");
var state_23842__$1 = (function (){var statearr_23846 = state_23842;
(statearr_23846[(11)] = inst_23839);

return statearr_23846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23842__$1,inst_23840);
} else {
return null;
}
}
}
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19404__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19404__auto____0 = (function (){
var statearr_23850 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23850[(0)] = figwheel$client$heads_up$clear_$_state_machine__19404__auto__);

(statearr_23850[(1)] = (1));

return statearr_23850;
});
var figwheel$client$heads_up$clear_$_state_machine__19404__auto____1 = (function (state_23842){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23851){if((e23851 instanceof Object)){
var ex__19407__auto__ = e23851;
var statearr_23852_23854 = state_23842;
(statearr_23852_23854[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23855 = state_23842;
state_23842 = G__23855;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19404__auto__ = function(state_23842){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19404__auto____1.call(this,state_23842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19404__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19404__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_23853 = f__19516__auto__.call(null);
(statearr_23853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_23853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (1))){
var inst_23877 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(2),inst_23877);
} else {
if((state_val_23888 === (2))){
var inst_23879 = (state_23887[(2)]);
var inst_23880 = cljs.core.async.timeout.call(null,(400));
var state_23887__$1 = (function (){var statearr_23889 = state_23887;
(statearr_23889[(7)] = inst_23879);

return statearr_23889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(3),inst_23880);
} else {
if((state_val_23888 === (3))){
var inst_23882 = (state_23887[(2)]);
var inst_23883 = figwheel.client.heads_up.clear.call(null);
var state_23887__$1 = (function (){var statearr_23890 = state_23887;
(statearr_23890[(8)] = inst_23882);

return statearr_23890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(4),inst_23883);
} else {
if((state_val_23888 === (4))){
var inst_23885 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else {
return null;
}
}
}
}
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto____0 = (function (){
var statearr_23894 = [null,null,null,null,null,null,null,null,null];
(statearr_23894[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto__);

(statearr_23894[(1)] = (1));

return statearr_23894;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto____1 = (function (state_23887){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23895){if((e23895 instanceof Object)){
var ex__19407__auto__ = e23895;
var statearr_23896_23898 = state_23887;
(statearr_23896_23898[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23899 = state_23887;
state_23887 = G__23899;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_23897 = f__19516__auto__.call(null);
(statearr_23897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_23897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map