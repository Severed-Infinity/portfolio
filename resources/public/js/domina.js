// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_50892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_50893 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_50894 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_50894,opt_wrapper_50892,table_section_wrapper_50893,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_50892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_50893,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_50893,cell_wrapper_50894,table_section_wrapper_50893,table_section_wrapper_50893]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__17179__auto__ = div.firstChild;
if(cljs.core.truth_(and__17179__auto__)){
return div.firstChild.childNodes;
} else {
return and__17179__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__50899 = cljs.core.seq.call(null,tbody);
var chunk__50900 = null;
var count__50901 = (0);
var i__50902 = (0);
while(true){
if((i__50902 < count__50901)){
var child = cljs.core._nth.call(null,chunk__50900,i__50902);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__50903 = seq__50899;
var G__50904 = chunk__50900;
var G__50905 = count__50901;
var G__50906 = (i__50902 + (1));
seq__50899 = G__50903;
chunk__50900 = G__50904;
count__50901 = G__50905;
i__50902 = G__50906;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__50899);
if(temp__4425__auto__){
var seq__50899__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50899__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__50899__$1);
var G__50907 = cljs.core.chunk_rest.call(null,seq__50899__$1);
var G__50908 = c__17994__auto__;
var G__50909 = cljs.core.count.call(null,c__17994__auto__);
var G__50910 = (0);
seq__50899 = G__50907;
chunk__50900 = G__50908;
count__50901 = G__50909;
i__50902 = G__50910;
continue;
} else {
var child = cljs.core.first.call(null,seq__50899__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__50911 = cljs.core.next.call(null,seq__50899__$1);
var G__50912 = null;
var G__50913 = (0);
var G__50914 = (0);
seq__50899 = G__50911;
chunk__50900 = G__50912;
count__50901 = G__50913;
i__50902 = G__50914;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__50916 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__50916,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__50916,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__50916,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__50917 = wrapper.lastChild;
var G__50918 = (level - (1));
wrapper = G__50917;
level = G__50918;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__17179__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__17179__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__17179__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});
domina.nodes;
domina.single_node;

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__17846__auto__ = (((content == null))?null:content);
var m__17847__auto__ = (domina.nodes[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,content);
} else {
var m__17847__auto____$1 = (domina.nodes["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__17846__auto__ = (((nodeseq == null))?null:nodeseq);
var m__17847__auto__ = (domina.single_node[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,nodeseq);
} else {
var m__17847__auto____$1 = (domina.single_node["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__18256__auto__ = [];
var len__18249__auto___50920 = arguments.length;
var i__18250__auto___50921 = (0);
while(true){
if((i__18250__auto___50921 < len__18249__auto___50920)){
args__18256__auto__.push((arguments[i__18250__auto___50921]));

var G__50922 = (i__18250__auto___50921 + (1));
i__18250__auto___50921 = G__50922;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((0) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((0)),(0))):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__18257__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__17179__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__17179__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__17179__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq50919){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50919));
});
domina.log = (function domina$log(var_args){
var args__18256__auto__ = [];
var len__18249__auto___50924 = arguments.length;
var i__18250__auto___50925 = (0);
while(true){
if((i__18250__auto___50925 < len__18249__auto___50924)){
args__18256__auto__.push((arguments[i__18250__auto___50925]));

var G__50926 = (i__18250__auto___50925 + (1));
i__18250__auto___50925 = G__50926;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((0) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((0)),(0))):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__18257__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq50923){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50923));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
domina.normalize_seq;
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__18256__auto__ = [];
var len__18249__auto___50928 = arguments.length;
var i__18250__auto___50929 = (0);
while(true){
if((i__18250__auto___50929 < len__18249__auto___50928)){
args__18256__auto__.push((arguments[i__18250__auto___50929]));

var G__50930 = (i__18250__auto___50929 + (1));
i__18250__auto___50929 = G__50930;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((0) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((0)),(0))):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__18257__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq50927){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50927));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__50931_SHARP_){
return p1__50931_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
domina.apply_with_cloning;
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__50932_SHARP_,p2__50933_SHARP_){
return goog.dom.insertChildAt(p1__50932_SHARP_,p2__50933_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__50935_SHARP_,p2__50934_SHARP_){
return goog.dom.insertSiblingBefore(p2__50934_SHARP_,p1__50935_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__50937_SHARP_,p2__50936_SHARP_){
return goog.dom.insertSiblingAfter(p2__50936_SHARP_,p1__50937_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__50939_SHARP_,p2__50938_SHARP_){
return goog.dom.replaceNode(p2__50938_SHARP_,p1__50939_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__18256__auto__ = [];
var len__18249__auto___50947 = arguments.length;
var i__18250__auto___50948 = (0);
while(true){
if((i__18250__auto___50948 < len__18249__auto___50947)){
args__18256__auto__.push((arguments[i__18250__auto___50948]));

var G__50949 = (i__18250__auto___50948 + (1));
i__18250__auto___50948 = G__50949;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((2) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((2)),(0))):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18257__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__50943_50950 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__50944_50951 = null;
var count__50945_50952 = (0);
var i__50946_50953 = (0);
while(true){
if((i__50946_50953 < count__50945_50952)){
var n_50954 = cljs.core._nth.call(null,chunk__50944_50951,i__50946_50953);
goog.style.setStyle(n_50954,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__50955 = seq__50943_50950;
var G__50956 = chunk__50944_50951;
var G__50957 = count__50945_50952;
var G__50958 = (i__50946_50953 + (1));
seq__50943_50950 = G__50955;
chunk__50944_50951 = G__50956;
count__50945_50952 = G__50957;
i__50946_50953 = G__50958;
continue;
} else {
var temp__4425__auto___50959 = cljs.core.seq.call(null,seq__50943_50950);
if(temp__4425__auto___50959){
var seq__50943_50960__$1 = temp__4425__auto___50959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50943_50960__$1)){
var c__17994__auto___50961 = cljs.core.chunk_first.call(null,seq__50943_50960__$1);
var G__50962 = cljs.core.chunk_rest.call(null,seq__50943_50960__$1);
var G__50963 = c__17994__auto___50961;
var G__50964 = cljs.core.count.call(null,c__17994__auto___50961);
var G__50965 = (0);
seq__50943_50950 = G__50962;
chunk__50944_50951 = G__50963;
count__50945_50952 = G__50964;
i__50946_50953 = G__50965;
continue;
} else {
var n_50966 = cljs.core.first.call(null,seq__50943_50960__$1);
goog.style.setStyle(n_50966,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__50967 = cljs.core.next.call(null,seq__50943_50960__$1);
var G__50968 = null;
var G__50969 = (0);
var G__50970 = (0);
seq__50943_50950 = G__50967;
chunk__50944_50951 = G__50968;
count__50945_50952 = G__50969;
i__50946_50953 = G__50970;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq50940){
var G__50941 = cljs.core.first.call(null,seq50940);
var seq50940__$1 = cljs.core.next.call(null,seq50940);
var G__50942 = cljs.core.first.call(null,seq50940__$1);
var seq50940__$2 = cljs.core.next.call(null,seq50940__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50941,G__50942,seq50940__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__18256__auto__ = [];
var len__18249__auto___50978 = arguments.length;
var i__18250__auto___50979 = (0);
while(true){
if((i__18250__auto___50979 < len__18249__auto___50978)){
args__18256__auto__.push((arguments[i__18250__auto___50979]));

var G__50980 = (i__18250__auto___50979 + (1));
i__18250__auto___50979 = G__50980;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((2) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((2)),(0))):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18257__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__50974_50981 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__50975_50982 = null;
var count__50976_50983 = (0);
var i__50977_50984 = (0);
while(true){
if((i__50977_50984 < count__50976_50983)){
var n_50985 = cljs.core._nth.call(null,chunk__50975_50982,i__50977_50984);
n_50985.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__50986 = seq__50974_50981;
var G__50987 = chunk__50975_50982;
var G__50988 = count__50976_50983;
var G__50989 = (i__50977_50984 + (1));
seq__50974_50981 = G__50986;
chunk__50975_50982 = G__50987;
count__50976_50983 = G__50988;
i__50977_50984 = G__50989;
continue;
} else {
var temp__4425__auto___50990 = cljs.core.seq.call(null,seq__50974_50981);
if(temp__4425__auto___50990){
var seq__50974_50991__$1 = temp__4425__auto___50990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50974_50991__$1)){
var c__17994__auto___50992 = cljs.core.chunk_first.call(null,seq__50974_50991__$1);
var G__50993 = cljs.core.chunk_rest.call(null,seq__50974_50991__$1);
var G__50994 = c__17994__auto___50992;
var G__50995 = cljs.core.count.call(null,c__17994__auto___50992);
var G__50996 = (0);
seq__50974_50981 = G__50993;
chunk__50975_50982 = G__50994;
count__50976_50983 = G__50995;
i__50977_50984 = G__50996;
continue;
} else {
var n_50997 = cljs.core.first.call(null,seq__50974_50991__$1);
n_50997.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__50998 = cljs.core.next.call(null,seq__50974_50991__$1);
var G__50999 = null;
var G__51000 = (0);
var G__51001 = (0);
seq__50974_50981 = G__50998;
chunk__50975_50982 = G__50999;
count__50976_50983 = G__51000;
i__50977_50984 = G__51001;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq50971){
var G__50972 = cljs.core.first.call(null,seq50971);
var seq50971__$1 = cljs.core.next.call(null,seq50971);
var G__50973 = cljs.core.first.call(null,seq50971__$1);
var seq50971__$2 = cljs.core.next.call(null,seq50971__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50972,G__50973,seq50971__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__51006_51010 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51007_51011 = null;
var count__51008_51012 = (0);
var i__51009_51013 = (0);
while(true){
if((i__51009_51013 < count__51008_51012)){
var n_51014 = cljs.core._nth.call(null,chunk__51007_51011,i__51009_51013);
n_51014.removeAttribute(cljs.core.name.call(null,name));

var G__51015 = seq__51006_51010;
var G__51016 = chunk__51007_51011;
var G__51017 = count__51008_51012;
var G__51018 = (i__51009_51013 + (1));
seq__51006_51010 = G__51015;
chunk__51007_51011 = G__51016;
count__51008_51012 = G__51017;
i__51009_51013 = G__51018;
continue;
} else {
var temp__4425__auto___51019 = cljs.core.seq.call(null,seq__51006_51010);
if(temp__4425__auto___51019){
var seq__51006_51020__$1 = temp__4425__auto___51019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51006_51020__$1)){
var c__17994__auto___51021 = cljs.core.chunk_first.call(null,seq__51006_51020__$1);
var G__51022 = cljs.core.chunk_rest.call(null,seq__51006_51020__$1);
var G__51023 = c__17994__auto___51021;
var G__51024 = cljs.core.count.call(null,c__17994__auto___51021);
var G__51025 = (0);
seq__51006_51010 = G__51022;
chunk__51007_51011 = G__51023;
count__51008_51012 = G__51024;
i__51009_51013 = G__51025;
continue;
} else {
var n_51026 = cljs.core.first.call(null,seq__51006_51020__$1);
n_51026.removeAttribute(cljs.core.name.call(null,name));

var G__51027 = cljs.core.next.call(null,seq__51006_51020__$1);
var G__51028 = null;
var G__51029 = (0);
var G__51030 = (0);
seq__51006_51010 = G__51027;
chunk__51007_51011 = G__51028;
count__51008_51012 = G__51029;
i__51009_51013 = G__51030;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__51032 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__51032,(0),null);
var v = cljs.core.nth.call(null,vec__51032,(1),null);
if(cljs.core.truth_((function (){var and__17179__auto__ = k;
if(cljs.core.truth_(and__17179__auto__)){
return v;
} else {
return and__17179__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__51033_SHARP_){
var attr = attrs__$1.item(p1__51033_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__51040_51046 = cljs.core.seq.call(null,styles);
var chunk__51041_51047 = null;
var count__51042_51048 = (0);
var i__51043_51049 = (0);
while(true){
if((i__51043_51049 < count__51042_51048)){
var vec__51044_51050 = cljs.core._nth.call(null,chunk__51041_51047,i__51043_51049);
var name_51051 = cljs.core.nth.call(null,vec__51044_51050,(0),null);
var value_51052 = cljs.core.nth.call(null,vec__51044_51050,(1),null);
domina.set_style_BANG_.call(null,content,name_51051,value_51052);

var G__51053 = seq__51040_51046;
var G__51054 = chunk__51041_51047;
var G__51055 = count__51042_51048;
var G__51056 = (i__51043_51049 + (1));
seq__51040_51046 = G__51053;
chunk__51041_51047 = G__51054;
count__51042_51048 = G__51055;
i__51043_51049 = G__51056;
continue;
} else {
var temp__4425__auto___51057 = cljs.core.seq.call(null,seq__51040_51046);
if(temp__4425__auto___51057){
var seq__51040_51058__$1 = temp__4425__auto___51057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51040_51058__$1)){
var c__17994__auto___51059 = cljs.core.chunk_first.call(null,seq__51040_51058__$1);
var G__51060 = cljs.core.chunk_rest.call(null,seq__51040_51058__$1);
var G__51061 = c__17994__auto___51059;
var G__51062 = cljs.core.count.call(null,c__17994__auto___51059);
var G__51063 = (0);
seq__51040_51046 = G__51060;
chunk__51041_51047 = G__51061;
count__51042_51048 = G__51062;
i__51043_51049 = G__51063;
continue;
} else {
var vec__51045_51064 = cljs.core.first.call(null,seq__51040_51058__$1);
var name_51065 = cljs.core.nth.call(null,vec__51045_51064,(0),null);
var value_51066 = cljs.core.nth.call(null,vec__51045_51064,(1),null);
domina.set_style_BANG_.call(null,content,name_51065,value_51066);

var G__51067 = cljs.core.next.call(null,seq__51040_51058__$1);
var G__51068 = null;
var G__51069 = (0);
var G__51070 = (0);
seq__51040_51046 = G__51067;
chunk__51041_51047 = G__51068;
count__51042_51048 = G__51069;
i__51043_51049 = G__51070;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__51077_51083 = cljs.core.seq.call(null,attrs);
var chunk__51078_51084 = null;
var count__51079_51085 = (0);
var i__51080_51086 = (0);
while(true){
if((i__51080_51086 < count__51079_51085)){
var vec__51081_51087 = cljs.core._nth.call(null,chunk__51078_51084,i__51080_51086);
var name_51088 = cljs.core.nth.call(null,vec__51081_51087,(0),null);
var value_51089 = cljs.core.nth.call(null,vec__51081_51087,(1),null);
domina.set_attr_BANG_.call(null,content,name_51088,value_51089);

var G__51090 = seq__51077_51083;
var G__51091 = chunk__51078_51084;
var G__51092 = count__51079_51085;
var G__51093 = (i__51080_51086 + (1));
seq__51077_51083 = G__51090;
chunk__51078_51084 = G__51091;
count__51079_51085 = G__51092;
i__51080_51086 = G__51093;
continue;
} else {
var temp__4425__auto___51094 = cljs.core.seq.call(null,seq__51077_51083);
if(temp__4425__auto___51094){
var seq__51077_51095__$1 = temp__4425__auto___51094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51077_51095__$1)){
var c__17994__auto___51096 = cljs.core.chunk_first.call(null,seq__51077_51095__$1);
var G__51097 = cljs.core.chunk_rest.call(null,seq__51077_51095__$1);
var G__51098 = c__17994__auto___51096;
var G__51099 = cljs.core.count.call(null,c__17994__auto___51096);
var G__51100 = (0);
seq__51077_51083 = G__51097;
chunk__51078_51084 = G__51098;
count__51079_51085 = G__51099;
i__51080_51086 = G__51100;
continue;
} else {
var vec__51082_51101 = cljs.core.first.call(null,seq__51077_51095__$1);
var name_51102 = cljs.core.nth.call(null,vec__51082_51101,(0),null);
var value_51103 = cljs.core.nth.call(null,vec__51082_51101,(1),null);
domina.set_attr_BANG_.call(null,content,name_51102,value_51103);

var G__51104 = cljs.core.next.call(null,seq__51077_51095__$1);
var G__51105 = null;
var G__51106 = (0);
var G__51107 = (0);
seq__51077_51083 = G__51104;
chunk__51078_51084 = G__51105;
count__51079_51085 = G__51106;
i__51080_51086 = G__51107;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__51112_51116 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51113_51117 = null;
var count__51114_51118 = (0);
var i__51115_51119 = (0);
while(true){
if((i__51115_51119 < count__51114_51118)){
var node_51120 = cljs.core._nth.call(null,chunk__51113_51117,i__51115_51119);
goog.dom.classes.add(node_51120,class$);

var G__51121 = seq__51112_51116;
var G__51122 = chunk__51113_51117;
var G__51123 = count__51114_51118;
var G__51124 = (i__51115_51119 + (1));
seq__51112_51116 = G__51121;
chunk__51113_51117 = G__51122;
count__51114_51118 = G__51123;
i__51115_51119 = G__51124;
continue;
} else {
var temp__4425__auto___51125 = cljs.core.seq.call(null,seq__51112_51116);
if(temp__4425__auto___51125){
var seq__51112_51126__$1 = temp__4425__auto___51125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51112_51126__$1)){
var c__17994__auto___51127 = cljs.core.chunk_first.call(null,seq__51112_51126__$1);
var G__51128 = cljs.core.chunk_rest.call(null,seq__51112_51126__$1);
var G__51129 = c__17994__auto___51127;
var G__51130 = cljs.core.count.call(null,c__17994__auto___51127);
var G__51131 = (0);
seq__51112_51116 = G__51128;
chunk__51113_51117 = G__51129;
count__51114_51118 = G__51130;
i__51115_51119 = G__51131;
continue;
} else {
var node_51132 = cljs.core.first.call(null,seq__51112_51126__$1);
goog.dom.classes.add(node_51132,class$);

var G__51133 = cljs.core.next.call(null,seq__51112_51126__$1);
var G__51134 = null;
var G__51135 = (0);
var G__51136 = (0);
seq__51112_51116 = G__51133;
chunk__51113_51117 = G__51134;
count__51114_51118 = G__51135;
i__51115_51119 = G__51136;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__51141_51145 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51142_51146 = null;
var count__51143_51147 = (0);
var i__51144_51148 = (0);
while(true){
if((i__51144_51148 < count__51143_51147)){
var node_51149 = cljs.core._nth.call(null,chunk__51142_51146,i__51144_51148);
goog.dom.classes.remove(node_51149,class$);

var G__51150 = seq__51141_51145;
var G__51151 = chunk__51142_51146;
var G__51152 = count__51143_51147;
var G__51153 = (i__51144_51148 + (1));
seq__51141_51145 = G__51150;
chunk__51142_51146 = G__51151;
count__51143_51147 = G__51152;
i__51144_51148 = G__51153;
continue;
} else {
var temp__4425__auto___51154 = cljs.core.seq.call(null,seq__51141_51145);
if(temp__4425__auto___51154){
var seq__51141_51155__$1 = temp__4425__auto___51154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51141_51155__$1)){
var c__17994__auto___51156 = cljs.core.chunk_first.call(null,seq__51141_51155__$1);
var G__51157 = cljs.core.chunk_rest.call(null,seq__51141_51155__$1);
var G__51158 = c__17994__auto___51156;
var G__51159 = cljs.core.count.call(null,c__17994__auto___51156);
var G__51160 = (0);
seq__51141_51145 = G__51157;
chunk__51142_51146 = G__51158;
count__51143_51147 = G__51159;
i__51144_51148 = G__51160;
continue;
} else {
var node_51161 = cljs.core.first.call(null,seq__51141_51155__$1);
goog.dom.classes.remove(node_51161,class$);

var G__51162 = cljs.core.next.call(null,seq__51141_51155__$1);
var G__51163 = null;
var G__51164 = (0);
var G__51165 = (0);
seq__51141_51145 = G__51162;
chunk__51142_51146 = G__51163;
count__51143_51147 = G__51164;
i__51144_51148 = G__51165;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__51170_51174 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51171_51175 = null;
var count__51172_51176 = (0);
var i__51173_51177 = (0);
while(true){
if((i__51173_51177 < count__51172_51176)){
var node_51178 = cljs.core._nth.call(null,chunk__51171_51175,i__51173_51177);
goog.dom.classes.toggle(node_51178,class$);

var G__51179 = seq__51170_51174;
var G__51180 = chunk__51171_51175;
var G__51181 = count__51172_51176;
var G__51182 = (i__51173_51177 + (1));
seq__51170_51174 = G__51179;
chunk__51171_51175 = G__51180;
count__51172_51176 = G__51181;
i__51173_51177 = G__51182;
continue;
} else {
var temp__4425__auto___51183 = cljs.core.seq.call(null,seq__51170_51174);
if(temp__4425__auto___51183){
var seq__51170_51184__$1 = temp__4425__auto___51183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51170_51184__$1)){
var c__17994__auto___51185 = cljs.core.chunk_first.call(null,seq__51170_51184__$1);
var G__51186 = cljs.core.chunk_rest.call(null,seq__51170_51184__$1);
var G__51187 = c__17994__auto___51185;
var G__51188 = cljs.core.count.call(null,c__17994__auto___51185);
var G__51189 = (0);
seq__51170_51174 = G__51186;
chunk__51171_51175 = G__51187;
count__51172_51176 = G__51188;
i__51173_51177 = G__51189;
continue;
} else {
var node_51190 = cljs.core.first.call(null,seq__51170_51184__$1);
goog.dom.classes.toggle(node_51190,class$);

var G__51191 = cljs.core.next.call(null,seq__51170_51184__$1);
var G__51192 = null;
var G__51193 = (0);
var G__51194 = (0);
seq__51170_51174 = G__51191;
chunk__51171_51175 = G__51192;
count__51172_51176 = G__51193;
i__51173_51177 = G__51194;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_51203__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__51199_51204 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51200_51205 = null;
var count__51201_51206 = (0);
var i__51202_51207 = (0);
while(true){
if((i__51202_51207 < count__51201_51206)){
var node_51208 = cljs.core._nth.call(null,chunk__51200_51205,i__51202_51207);
goog.dom.classes.set(node_51208,classes_51203__$1);

var G__51209 = seq__51199_51204;
var G__51210 = chunk__51200_51205;
var G__51211 = count__51201_51206;
var G__51212 = (i__51202_51207 + (1));
seq__51199_51204 = G__51209;
chunk__51200_51205 = G__51210;
count__51201_51206 = G__51211;
i__51202_51207 = G__51212;
continue;
} else {
var temp__4425__auto___51213 = cljs.core.seq.call(null,seq__51199_51204);
if(temp__4425__auto___51213){
var seq__51199_51214__$1 = temp__4425__auto___51213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51199_51214__$1)){
var c__17994__auto___51215 = cljs.core.chunk_first.call(null,seq__51199_51214__$1);
var G__51216 = cljs.core.chunk_rest.call(null,seq__51199_51214__$1);
var G__51217 = c__17994__auto___51215;
var G__51218 = cljs.core.count.call(null,c__17994__auto___51215);
var G__51219 = (0);
seq__51199_51204 = G__51216;
chunk__51200_51205 = G__51217;
count__51201_51206 = G__51218;
i__51202_51207 = G__51219;
continue;
} else {
var node_51220 = cljs.core.first.call(null,seq__51199_51214__$1);
goog.dom.classes.set(node_51220,classes_51203__$1);

var G__51221 = cljs.core.next.call(null,seq__51199_51214__$1);
var G__51222 = null;
var G__51223 = (0);
var G__51224 = (0);
seq__51199_51204 = G__51221;
chunk__51200_51205 = G__51222;
count__51201_51206 = G__51223;
i__51202_51207 = G__51224;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__51229_51233 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51230_51234 = null;
var count__51231_51235 = (0);
var i__51232_51236 = (0);
while(true){
if((i__51232_51236 < count__51231_51235)){
var node_51237 = cljs.core._nth.call(null,chunk__51230_51234,i__51232_51236);
goog.dom.setTextContent(node_51237,value);

var G__51238 = seq__51229_51233;
var G__51239 = chunk__51230_51234;
var G__51240 = count__51231_51235;
var G__51241 = (i__51232_51236 + (1));
seq__51229_51233 = G__51238;
chunk__51230_51234 = G__51239;
count__51231_51235 = G__51240;
i__51232_51236 = G__51241;
continue;
} else {
var temp__4425__auto___51242 = cljs.core.seq.call(null,seq__51229_51233);
if(temp__4425__auto___51242){
var seq__51229_51243__$1 = temp__4425__auto___51242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51229_51243__$1)){
var c__17994__auto___51244 = cljs.core.chunk_first.call(null,seq__51229_51243__$1);
var G__51245 = cljs.core.chunk_rest.call(null,seq__51229_51243__$1);
var G__51246 = c__17994__auto___51244;
var G__51247 = cljs.core.count.call(null,c__17994__auto___51244);
var G__51248 = (0);
seq__51229_51233 = G__51245;
chunk__51230_51234 = G__51246;
count__51231_51235 = G__51247;
i__51232_51236 = G__51248;
continue;
} else {
var node_51249 = cljs.core.first.call(null,seq__51229_51243__$1);
goog.dom.setTextContent(node_51249,value);

var G__51250 = cljs.core.next.call(null,seq__51229_51243__$1);
var G__51251 = null;
var G__51252 = (0);
var G__51253 = (0);
seq__51229_51233 = G__51250;
chunk__51230_51234 = G__51251;
count__51231_51235 = G__51252;
i__51232_51236 = G__51253;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__51258_51262 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51259_51263 = null;
var count__51260_51264 = (0);
var i__51261_51265 = (0);
while(true){
if((i__51261_51265 < count__51260_51264)){
var node_51266 = cljs.core._nth.call(null,chunk__51259_51263,i__51261_51265);
goog.dom.forms.setValue(node_51266,value);

var G__51267 = seq__51258_51262;
var G__51268 = chunk__51259_51263;
var G__51269 = count__51260_51264;
var G__51270 = (i__51261_51265 + (1));
seq__51258_51262 = G__51267;
chunk__51259_51263 = G__51268;
count__51260_51264 = G__51269;
i__51261_51265 = G__51270;
continue;
} else {
var temp__4425__auto___51271 = cljs.core.seq.call(null,seq__51258_51262);
if(temp__4425__auto___51271){
var seq__51258_51272__$1 = temp__4425__auto___51271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51258_51272__$1)){
var c__17994__auto___51273 = cljs.core.chunk_first.call(null,seq__51258_51272__$1);
var G__51274 = cljs.core.chunk_rest.call(null,seq__51258_51272__$1);
var G__51275 = c__17994__auto___51273;
var G__51276 = cljs.core.count.call(null,c__17994__auto___51273);
var G__51277 = (0);
seq__51258_51262 = G__51274;
chunk__51259_51263 = G__51275;
count__51260_51264 = G__51276;
i__51261_51265 = G__51277;
continue;
} else {
var node_51278 = cljs.core.first.call(null,seq__51258_51272__$1);
goog.dom.forms.setValue(node_51278,value);

var G__51279 = cljs.core.next.call(null,seq__51258_51272__$1);
var G__51280 = null;
var G__51281 = (0);
var G__51282 = (0);
seq__51258_51262 = G__51279;
chunk__51259_51263 = G__51280;
count__51260_51264 = G__51281;
i__51261_51265 = G__51282;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__17179__auto__ = allows_inner_html_QMARK_;
if(and__17179__auto__){
var and__17179__auto____$1 = (function (){var or__17191__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__17179__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__17179__auto____$1;
}
} else {
return and__17179__auto__;
}
})())){
var value_51293 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__51289_51294 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__51290_51295 = null;
var count__51291_51296 = (0);
var i__51292_51297 = (0);
while(true){
if((i__51292_51297 < count__51291_51296)){
var node_51298 = cljs.core._nth.call(null,chunk__51290_51295,i__51292_51297);
node_51298.innerHTML = value_51293;

var G__51299 = seq__51289_51294;
var G__51300 = chunk__51290_51295;
var G__51301 = count__51291_51296;
var G__51302 = (i__51292_51297 + (1));
seq__51289_51294 = G__51299;
chunk__51290_51295 = G__51300;
count__51291_51296 = G__51301;
i__51292_51297 = G__51302;
continue;
} else {
var temp__4425__auto___51303 = cljs.core.seq.call(null,seq__51289_51294);
if(temp__4425__auto___51303){
var seq__51289_51304__$1 = temp__4425__auto___51303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51289_51304__$1)){
var c__17994__auto___51305 = cljs.core.chunk_first.call(null,seq__51289_51304__$1);
var G__51306 = cljs.core.chunk_rest.call(null,seq__51289_51304__$1);
var G__51307 = c__17994__auto___51305;
var G__51308 = cljs.core.count.call(null,c__17994__auto___51305);
var G__51309 = (0);
seq__51289_51294 = G__51306;
chunk__51290_51295 = G__51307;
count__51291_51296 = G__51308;
i__51292_51297 = G__51309;
continue;
} else {
var node_51310 = cljs.core.first.call(null,seq__51289_51304__$1);
node_51310.innerHTML = value_51293;

var G__51311 = cljs.core.next.call(null,seq__51289_51304__$1);
var G__51312 = null;
var G__51313 = (0);
var G__51314 = (0);
seq__51289_51294 = G__51311;
chunk__51290_51295 = G__51312;
count__51291_51296 = G__51313;
i__51292_51297 = G__51314;
continue;
}
} else {
}
}
break;
}
}catch (e51288){if((e51288 instanceof Error)){
var e_51315 = e51288;
domina.replace_children_BANG_.call(null,content,value_51293);
} else {
throw e51288;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args51316 = [];
var len__18249__auto___51319 = arguments.length;
var i__18250__auto___51320 = (0);
while(true){
if((i__18250__auto___51320 < len__18249__auto___51319)){
args51316.push((arguments[i__18250__auto___51320]));

var G__51321 = (i__18250__auto___51320 + (1));
i__18250__auto___51320 = G__51321;
continue;
} else {
}
break;
}

var G__51318 = args51316.length;
switch (G__51318) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51316.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__17179__auto__ = bubble;
if(cljs.core.truth_(and__17179__auto__)){
return (value == null);
} else {
return and__17179__auto__;
}
})())){
var temp__4425__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__17191__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__51329_51333 = cljs.core.seq.call(null,children);
var chunk__51330_51334 = null;
var count__51331_51335 = (0);
var i__51332_51336 = (0);
while(true){
if((i__51332_51336 < count__51331_51335)){
var child_51337 = cljs.core._nth.call(null,chunk__51330_51334,i__51332_51336);
frag.appendChild(child_51337);

var G__51338 = seq__51329_51333;
var G__51339 = chunk__51330_51334;
var G__51340 = count__51331_51335;
var G__51341 = (i__51332_51336 + (1));
seq__51329_51333 = G__51338;
chunk__51330_51334 = G__51339;
count__51331_51335 = G__51340;
i__51332_51336 = G__51341;
continue;
} else {
var temp__4425__auto___51342 = cljs.core.seq.call(null,seq__51329_51333);
if(temp__4425__auto___51342){
var seq__51329_51343__$1 = temp__4425__auto___51342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51329_51343__$1)){
var c__17994__auto___51344 = cljs.core.chunk_first.call(null,seq__51329_51343__$1);
var G__51345 = cljs.core.chunk_rest.call(null,seq__51329_51343__$1);
var G__51346 = c__17994__auto___51344;
var G__51347 = cljs.core.count.call(null,c__17994__auto___51344);
var G__51348 = (0);
seq__51329_51333 = G__51345;
chunk__51330_51334 = G__51346;
count__51331_51335 = G__51347;
i__51332_51336 = G__51348;
continue;
} else {
var child_51349 = cljs.core.first.call(null,seq__51329_51343__$1);
frag.appendChild(child_51349);

var G__51350 = cljs.core.next.call(null,seq__51329_51343__$1);
var G__51351 = null;
var G__51352 = (0);
var G__51353 = (0);
seq__51329_51333 = G__51350;
chunk__51330_51334 = G__51351;
count__51331_51335 = G__51352;
i__51332_51336 = G__51353;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__51323_SHARP_,p2__51324_SHARP_){
return f.call(null,p1__51323_SHARP_,p2__51324_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args51354 = [];
var len__18249__auto___51357 = arguments.length;
var i__18250__auto___51358 = (0);
while(true){
if((i__18250__auto___51358 < len__18249__auto___51357)){
args51354.push((arguments[i__18250__auto___51358]));

var G__51359 = (i__18250__auto___51358 + (1));
i__18250__auto___51358 = G__51359;
continue;
} else {
}
break;
}

var G__51356 = args51354.length;
switch (G__51356) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51354.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args51361 = [];
var len__18249__auto___51364 = arguments.length;
var i__18250__auto___51365 = (0);
while(true){
if((i__18250__auto___51365 < len__18249__auto___51364)){
args51361.push((arguments[i__18250__auto___51365]));

var G__51366 = (i__18250__auto___51365 + (1));
i__18250__auto___51365 = G__51366;
continue;
} else {
}
break;
}

var G__51363 = args51361.length;
switch (G__51363) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51361.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__17179__auto__ = obj;
if(cljs.core.truth_(and__17179__auto__)){
var and__17179__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__17179__auto____$1){
return obj.length;
} else {
return and__17179__auto____$1;
}
} else {
return and__17179__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map