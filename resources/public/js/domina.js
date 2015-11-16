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
var opt_wrapper_18842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_18843 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_18844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18844,opt_wrapper_18842,table_section_wrapper_18843,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18842,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18843,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18843,cell_wrapper_18844,table_section_wrapper_18843,table_section_wrapper_18843]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__17701__auto__ = div.firstChild;
if(cljs.core.truth_(and__17701__auto__)){
return div.firstChild.childNodes;
} else {
return and__17701__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__18849 = cljs.core.seq.call(null,tbody);
var chunk__18850 = null;
var count__18851 = (0);
var i__18852 = (0);
while(true){
if((i__18852 < count__18851)){
var child = cljs.core._nth.call(null,chunk__18850,i__18852);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__18853 = seq__18849;
var G__18854 = chunk__18850;
var G__18855 = count__18851;
var G__18856 = (i__18852 + (1));
seq__18849 = G__18853;
chunk__18850 = G__18854;
count__18851 = G__18855;
i__18852 = G__18856;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18849);
if(temp__4425__auto__){
var seq__18849__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18849__$1)){
var c__18516__auto__ = cljs.core.chunk_first.call(null,seq__18849__$1);
var G__18857 = cljs.core.chunk_rest.call(null,seq__18849__$1);
var G__18858 = c__18516__auto__;
var G__18859 = cljs.core.count.call(null,c__18516__auto__);
var G__18860 = (0);
seq__18849 = G__18857;
chunk__18850 = G__18858;
count__18851 = G__18859;
i__18852 = G__18860;
continue;
} else {
var child = cljs.core.first.call(null,seq__18849__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__18861 = cljs.core.next.call(null,seq__18849__$1);
var G__18862 = null;
var G__18863 = (0);
var G__18864 = (0);
seq__18849 = G__18861;
chunk__18850 = G__18862;
count__18851 = G__18863;
i__18852 = G__18864;
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
var vec__18866 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__18866,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__18866,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__18866,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__18867 = wrapper.lastChild;
var G__18868 = (level - (1));
wrapper = G__18867;
level = G__18868;
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

if(cljs.core.truth_((function (){var and__17701__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__17701__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__17701__auto__;
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
var x__18368__auto__ = (((content == null))?null:content);
var m__18369__auto__ = (domina.nodes[goog.typeOf(x__18368__auto__)]);
if(!((m__18369__auto__ == null))){
return m__18369__auto__.call(null,content);
} else {
var m__18369__auto____$1 = (domina.nodes["_"]);
if(!((m__18369__auto____$1 == null))){
return m__18369__auto____$1.call(null,content);
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
var x__18368__auto__ = (((nodeseq == null))?null:nodeseq);
var m__18369__auto__ = (domina.single_node[goog.typeOf(x__18368__auto__)]);
if(!((m__18369__auto__ == null))){
return m__18369__auto__.call(null,nodeseq);
} else {
var m__18369__auto____$1 = (domina.single_node["_"]);
if(!((m__18369__auto____$1 == null))){
return m__18369__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__18778__auto__ = [];
var len__18771__auto___18870 = arguments.length;
var i__18772__auto___18871 = (0);
while(true){
if((i__18772__auto___18871 < len__18771__auto___18870)){
args__18778__auto__.push((arguments[i__18772__auto___18871]));

var G__18872 = (i__18772__auto___18871 + (1));
i__18772__auto___18871 = G__18872;
continue;
} else {
}
break;
}

var argseq__18779__auto__ = ((((0) < args__18778__auto__.length))?(new cljs.core.IndexedSeq(args__18778__auto__.slice((0)),(0))):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__18779__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__17701__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__17701__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__17701__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq18869){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18869));
});
domina.log = (function domina$log(var_args){
var args__18778__auto__ = [];
var len__18771__auto___18874 = arguments.length;
var i__18772__auto___18875 = (0);
while(true){
if((i__18772__auto___18875 < len__18771__auto___18874)){
args__18778__auto__.push((arguments[i__18772__auto___18875]));

var G__18876 = (i__18772__auto___18875 + (1));
i__18772__auto___18875 = G__18876;
continue;
} else {
}
break;
}

var argseq__18779__auto__ = ((((0) < args__18778__auto__.length))?(new cljs.core.IndexedSeq(args__18778__auto__.slice((0)),(0))):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__18779__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq18873){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18873));
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
var args__18778__auto__ = [];
var len__18771__auto___18878 = arguments.length;
var i__18772__auto___18879 = (0);
while(true){
if((i__18772__auto___18879 < len__18771__auto___18878)){
args__18778__auto__.push((arguments[i__18772__auto___18879]));

var G__18880 = (i__18772__auto___18879 + (1));
i__18772__auto___18879 = G__18880;
continue;
} else {
}
break;
}

var argseq__18779__auto__ = ((((0) < args__18778__auto__.length))?(new cljs.core.IndexedSeq(args__18778__auto__.slice((0)),(0))):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__18779__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq18877){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18877));
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
return cljs.core.map.call(null,(function (p1__18881_SHARP_){
return p1__18881_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__18882_SHARP_,p2__18883_SHARP_){
return goog.dom.insertChildAt(p1__18882_SHARP_,p2__18883_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__18885_SHARP_,p2__18884_SHARP_){
return goog.dom.insertSiblingBefore(p2__18884_SHARP_,p1__18885_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__18887_SHARP_,p2__18886_SHARP_){
return goog.dom.insertSiblingAfter(p2__18886_SHARP_,p1__18887_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__18889_SHARP_,p2__18888_SHARP_){
return goog.dom.replaceNode(p2__18888_SHARP_,p1__18889_SHARP_);
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
var args__18778__auto__ = [];
var len__18771__auto___18897 = arguments.length;
var i__18772__auto___18898 = (0);
while(true){
if((i__18772__auto___18898 < len__18771__auto___18897)){
args__18778__auto__.push((arguments[i__18772__auto___18898]));

var G__18899 = (i__18772__auto___18898 + (1));
i__18772__auto___18898 = G__18899;
continue;
} else {
}
break;
}

var argseq__18779__auto__ = ((((2) < args__18778__auto__.length))?(new cljs.core.IndexedSeq(args__18778__auto__.slice((2)),(0))):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18779__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__18893_18900 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18894_18901 = null;
var count__18895_18902 = (0);
var i__18896_18903 = (0);
while(true){
if((i__18896_18903 < count__18895_18902)){
var n_18904 = cljs.core._nth.call(null,chunk__18894_18901,i__18896_18903);
goog.style.setStyle(n_18904,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18905 = seq__18893_18900;
var G__18906 = chunk__18894_18901;
var G__18907 = count__18895_18902;
var G__18908 = (i__18896_18903 + (1));
seq__18893_18900 = G__18905;
chunk__18894_18901 = G__18906;
count__18895_18902 = G__18907;
i__18896_18903 = G__18908;
continue;
} else {
var temp__4425__auto___18909 = cljs.core.seq.call(null,seq__18893_18900);
if(temp__4425__auto___18909){
var seq__18893_18910__$1 = temp__4425__auto___18909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18893_18910__$1)){
var c__18516__auto___18911 = cljs.core.chunk_first.call(null,seq__18893_18910__$1);
var G__18912 = cljs.core.chunk_rest.call(null,seq__18893_18910__$1);
var G__18913 = c__18516__auto___18911;
var G__18914 = cljs.core.count.call(null,c__18516__auto___18911);
var G__18915 = (0);
seq__18893_18900 = G__18912;
chunk__18894_18901 = G__18913;
count__18895_18902 = G__18914;
i__18896_18903 = G__18915;
continue;
} else {
var n_18916 = cljs.core.first.call(null,seq__18893_18910__$1);
goog.style.setStyle(n_18916,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18917 = cljs.core.next.call(null,seq__18893_18910__$1);
var G__18918 = null;
var G__18919 = (0);
var G__18920 = (0);
seq__18893_18900 = G__18917;
chunk__18894_18901 = G__18918;
count__18895_18902 = G__18919;
i__18896_18903 = G__18920;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq18890){
var G__18891 = cljs.core.first.call(null,seq18890);
var seq18890__$1 = cljs.core.next.call(null,seq18890);
var G__18892 = cljs.core.first.call(null,seq18890__$1);
var seq18890__$2 = cljs.core.next.call(null,seq18890__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18891,G__18892,seq18890__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__18778__auto__ = [];
var len__18771__auto___18928 = arguments.length;
var i__18772__auto___18929 = (0);
while(true){
if((i__18772__auto___18929 < len__18771__auto___18928)){
args__18778__auto__.push((arguments[i__18772__auto___18929]));

var G__18930 = (i__18772__auto___18929 + (1));
i__18772__auto___18929 = G__18930;
continue;
} else {
}
break;
}

var argseq__18779__auto__ = ((((2) < args__18778__auto__.length))?(new cljs.core.IndexedSeq(args__18778__auto__.slice((2)),(0))):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18779__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__18924_18931 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18925_18932 = null;
var count__18926_18933 = (0);
var i__18927_18934 = (0);
while(true){
if((i__18927_18934 < count__18926_18933)){
var n_18935 = cljs.core._nth.call(null,chunk__18925_18932,i__18927_18934);
n_18935.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18936 = seq__18924_18931;
var G__18937 = chunk__18925_18932;
var G__18938 = count__18926_18933;
var G__18939 = (i__18927_18934 + (1));
seq__18924_18931 = G__18936;
chunk__18925_18932 = G__18937;
count__18926_18933 = G__18938;
i__18927_18934 = G__18939;
continue;
} else {
var temp__4425__auto___18940 = cljs.core.seq.call(null,seq__18924_18931);
if(temp__4425__auto___18940){
var seq__18924_18941__$1 = temp__4425__auto___18940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18924_18941__$1)){
var c__18516__auto___18942 = cljs.core.chunk_first.call(null,seq__18924_18941__$1);
var G__18943 = cljs.core.chunk_rest.call(null,seq__18924_18941__$1);
var G__18944 = c__18516__auto___18942;
var G__18945 = cljs.core.count.call(null,c__18516__auto___18942);
var G__18946 = (0);
seq__18924_18931 = G__18943;
chunk__18925_18932 = G__18944;
count__18926_18933 = G__18945;
i__18927_18934 = G__18946;
continue;
} else {
var n_18947 = cljs.core.first.call(null,seq__18924_18941__$1);
n_18947.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18948 = cljs.core.next.call(null,seq__18924_18941__$1);
var G__18949 = null;
var G__18950 = (0);
var G__18951 = (0);
seq__18924_18931 = G__18948;
chunk__18925_18932 = G__18949;
count__18926_18933 = G__18950;
i__18927_18934 = G__18951;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq18921){
var G__18922 = cljs.core.first.call(null,seq18921);
var seq18921__$1 = cljs.core.next.call(null,seq18921);
var G__18923 = cljs.core.first.call(null,seq18921__$1);
var seq18921__$2 = cljs.core.next.call(null,seq18921__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18922,G__18923,seq18921__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__18956_18960 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18957_18961 = null;
var count__18958_18962 = (0);
var i__18959_18963 = (0);
while(true){
if((i__18959_18963 < count__18958_18962)){
var n_18964 = cljs.core._nth.call(null,chunk__18957_18961,i__18959_18963);
n_18964.removeAttribute(cljs.core.name.call(null,name));

var G__18965 = seq__18956_18960;
var G__18966 = chunk__18957_18961;
var G__18967 = count__18958_18962;
var G__18968 = (i__18959_18963 + (1));
seq__18956_18960 = G__18965;
chunk__18957_18961 = G__18966;
count__18958_18962 = G__18967;
i__18959_18963 = G__18968;
continue;
} else {
var temp__4425__auto___18969 = cljs.core.seq.call(null,seq__18956_18960);
if(temp__4425__auto___18969){
var seq__18956_18970__$1 = temp__4425__auto___18969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18956_18970__$1)){
var c__18516__auto___18971 = cljs.core.chunk_first.call(null,seq__18956_18970__$1);
var G__18972 = cljs.core.chunk_rest.call(null,seq__18956_18970__$1);
var G__18973 = c__18516__auto___18971;
var G__18974 = cljs.core.count.call(null,c__18516__auto___18971);
var G__18975 = (0);
seq__18956_18960 = G__18972;
chunk__18957_18961 = G__18973;
count__18958_18962 = G__18974;
i__18959_18963 = G__18975;
continue;
} else {
var n_18976 = cljs.core.first.call(null,seq__18956_18970__$1);
n_18976.removeAttribute(cljs.core.name.call(null,name));

var G__18977 = cljs.core.next.call(null,seq__18956_18970__$1);
var G__18978 = null;
var G__18979 = (0);
var G__18980 = (0);
seq__18956_18960 = G__18977;
chunk__18957_18961 = G__18978;
count__18958_18962 = G__18979;
i__18959_18963 = G__18980;
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
var vec__18982 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__18982,(0),null);
var v = cljs.core.nth.call(null,vec__18982,(1),null);
if(cljs.core.truth_((function (){var and__17701__auto__ = k;
if(cljs.core.truth_(and__17701__auto__)){
return v;
} else {
return and__17701__auto__;
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
return (function (p1__18983_SHARP_){
var attr = attrs__$1.item(p1__18983_SHARP_);
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
var seq__18990_18996 = cljs.core.seq.call(null,styles);
var chunk__18991_18997 = null;
var count__18992_18998 = (0);
var i__18993_18999 = (0);
while(true){
if((i__18993_18999 < count__18992_18998)){
var vec__18994_19000 = cljs.core._nth.call(null,chunk__18991_18997,i__18993_18999);
var name_19001 = cljs.core.nth.call(null,vec__18994_19000,(0),null);
var value_19002 = cljs.core.nth.call(null,vec__18994_19000,(1),null);
domina.set_style_BANG_.call(null,content,name_19001,value_19002);

var G__19003 = seq__18990_18996;
var G__19004 = chunk__18991_18997;
var G__19005 = count__18992_18998;
var G__19006 = (i__18993_18999 + (1));
seq__18990_18996 = G__19003;
chunk__18991_18997 = G__19004;
count__18992_18998 = G__19005;
i__18993_18999 = G__19006;
continue;
} else {
var temp__4425__auto___19007 = cljs.core.seq.call(null,seq__18990_18996);
if(temp__4425__auto___19007){
var seq__18990_19008__$1 = temp__4425__auto___19007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18990_19008__$1)){
var c__18516__auto___19009 = cljs.core.chunk_first.call(null,seq__18990_19008__$1);
var G__19010 = cljs.core.chunk_rest.call(null,seq__18990_19008__$1);
var G__19011 = c__18516__auto___19009;
var G__19012 = cljs.core.count.call(null,c__18516__auto___19009);
var G__19013 = (0);
seq__18990_18996 = G__19010;
chunk__18991_18997 = G__19011;
count__18992_18998 = G__19012;
i__18993_18999 = G__19013;
continue;
} else {
var vec__18995_19014 = cljs.core.first.call(null,seq__18990_19008__$1);
var name_19015 = cljs.core.nth.call(null,vec__18995_19014,(0),null);
var value_19016 = cljs.core.nth.call(null,vec__18995_19014,(1),null);
domina.set_style_BANG_.call(null,content,name_19015,value_19016);

var G__19017 = cljs.core.next.call(null,seq__18990_19008__$1);
var G__19018 = null;
var G__19019 = (0);
var G__19020 = (0);
seq__18990_18996 = G__19017;
chunk__18991_18997 = G__19018;
count__18992_18998 = G__19019;
i__18993_18999 = G__19020;
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
var seq__19027_19033 = cljs.core.seq.call(null,attrs);
var chunk__19028_19034 = null;
var count__19029_19035 = (0);
var i__19030_19036 = (0);
while(true){
if((i__19030_19036 < count__19029_19035)){
var vec__19031_19037 = cljs.core._nth.call(null,chunk__19028_19034,i__19030_19036);
var name_19038 = cljs.core.nth.call(null,vec__19031_19037,(0),null);
var value_19039 = cljs.core.nth.call(null,vec__19031_19037,(1),null);
domina.set_attr_BANG_.call(null,content,name_19038,value_19039);

var G__19040 = seq__19027_19033;
var G__19041 = chunk__19028_19034;
var G__19042 = count__19029_19035;
var G__19043 = (i__19030_19036 + (1));
seq__19027_19033 = G__19040;
chunk__19028_19034 = G__19041;
count__19029_19035 = G__19042;
i__19030_19036 = G__19043;
continue;
} else {
var temp__4425__auto___19044 = cljs.core.seq.call(null,seq__19027_19033);
if(temp__4425__auto___19044){
var seq__19027_19045__$1 = temp__4425__auto___19044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19027_19045__$1)){
var c__18516__auto___19046 = cljs.core.chunk_first.call(null,seq__19027_19045__$1);
var G__19047 = cljs.core.chunk_rest.call(null,seq__19027_19045__$1);
var G__19048 = c__18516__auto___19046;
var G__19049 = cljs.core.count.call(null,c__18516__auto___19046);
var G__19050 = (0);
seq__19027_19033 = G__19047;
chunk__19028_19034 = G__19048;
count__19029_19035 = G__19049;
i__19030_19036 = G__19050;
continue;
} else {
var vec__19032_19051 = cljs.core.first.call(null,seq__19027_19045__$1);
var name_19052 = cljs.core.nth.call(null,vec__19032_19051,(0),null);
var value_19053 = cljs.core.nth.call(null,vec__19032_19051,(1),null);
domina.set_attr_BANG_.call(null,content,name_19052,value_19053);

var G__19054 = cljs.core.next.call(null,seq__19027_19045__$1);
var G__19055 = null;
var G__19056 = (0);
var G__19057 = (0);
seq__19027_19033 = G__19054;
chunk__19028_19034 = G__19055;
count__19029_19035 = G__19056;
i__19030_19036 = G__19057;
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
var seq__19062_19066 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19063_19067 = null;
var count__19064_19068 = (0);
var i__19065_19069 = (0);
while(true){
if((i__19065_19069 < count__19064_19068)){
var node_19070 = cljs.core._nth.call(null,chunk__19063_19067,i__19065_19069);
goog.dom.classes.add(node_19070,class$);

var G__19071 = seq__19062_19066;
var G__19072 = chunk__19063_19067;
var G__19073 = count__19064_19068;
var G__19074 = (i__19065_19069 + (1));
seq__19062_19066 = G__19071;
chunk__19063_19067 = G__19072;
count__19064_19068 = G__19073;
i__19065_19069 = G__19074;
continue;
} else {
var temp__4425__auto___19075 = cljs.core.seq.call(null,seq__19062_19066);
if(temp__4425__auto___19075){
var seq__19062_19076__$1 = temp__4425__auto___19075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19062_19076__$1)){
var c__18516__auto___19077 = cljs.core.chunk_first.call(null,seq__19062_19076__$1);
var G__19078 = cljs.core.chunk_rest.call(null,seq__19062_19076__$1);
var G__19079 = c__18516__auto___19077;
var G__19080 = cljs.core.count.call(null,c__18516__auto___19077);
var G__19081 = (0);
seq__19062_19066 = G__19078;
chunk__19063_19067 = G__19079;
count__19064_19068 = G__19080;
i__19065_19069 = G__19081;
continue;
} else {
var node_19082 = cljs.core.first.call(null,seq__19062_19076__$1);
goog.dom.classes.add(node_19082,class$);

var G__19083 = cljs.core.next.call(null,seq__19062_19076__$1);
var G__19084 = null;
var G__19085 = (0);
var G__19086 = (0);
seq__19062_19066 = G__19083;
chunk__19063_19067 = G__19084;
count__19064_19068 = G__19085;
i__19065_19069 = G__19086;
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
var seq__19091_19095 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19092_19096 = null;
var count__19093_19097 = (0);
var i__19094_19098 = (0);
while(true){
if((i__19094_19098 < count__19093_19097)){
var node_19099 = cljs.core._nth.call(null,chunk__19092_19096,i__19094_19098);
goog.dom.classes.remove(node_19099,class$);

var G__19100 = seq__19091_19095;
var G__19101 = chunk__19092_19096;
var G__19102 = count__19093_19097;
var G__19103 = (i__19094_19098 + (1));
seq__19091_19095 = G__19100;
chunk__19092_19096 = G__19101;
count__19093_19097 = G__19102;
i__19094_19098 = G__19103;
continue;
} else {
var temp__4425__auto___19104 = cljs.core.seq.call(null,seq__19091_19095);
if(temp__4425__auto___19104){
var seq__19091_19105__$1 = temp__4425__auto___19104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19091_19105__$1)){
var c__18516__auto___19106 = cljs.core.chunk_first.call(null,seq__19091_19105__$1);
var G__19107 = cljs.core.chunk_rest.call(null,seq__19091_19105__$1);
var G__19108 = c__18516__auto___19106;
var G__19109 = cljs.core.count.call(null,c__18516__auto___19106);
var G__19110 = (0);
seq__19091_19095 = G__19107;
chunk__19092_19096 = G__19108;
count__19093_19097 = G__19109;
i__19094_19098 = G__19110;
continue;
} else {
var node_19111 = cljs.core.first.call(null,seq__19091_19105__$1);
goog.dom.classes.remove(node_19111,class$);

var G__19112 = cljs.core.next.call(null,seq__19091_19105__$1);
var G__19113 = null;
var G__19114 = (0);
var G__19115 = (0);
seq__19091_19095 = G__19112;
chunk__19092_19096 = G__19113;
count__19093_19097 = G__19114;
i__19094_19098 = G__19115;
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
var seq__19120_19124 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19121_19125 = null;
var count__19122_19126 = (0);
var i__19123_19127 = (0);
while(true){
if((i__19123_19127 < count__19122_19126)){
var node_19128 = cljs.core._nth.call(null,chunk__19121_19125,i__19123_19127);
goog.dom.classes.toggle(node_19128,class$);

var G__19129 = seq__19120_19124;
var G__19130 = chunk__19121_19125;
var G__19131 = count__19122_19126;
var G__19132 = (i__19123_19127 + (1));
seq__19120_19124 = G__19129;
chunk__19121_19125 = G__19130;
count__19122_19126 = G__19131;
i__19123_19127 = G__19132;
continue;
} else {
var temp__4425__auto___19133 = cljs.core.seq.call(null,seq__19120_19124);
if(temp__4425__auto___19133){
var seq__19120_19134__$1 = temp__4425__auto___19133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19120_19134__$1)){
var c__18516__auto___19135 = cljs.core.chunk_first.call(null,seq__19120_19134__$1);
var G__19136 = cljs.core.chunk_rest.call(null,seq__19120_19134__$1);
var G__19137 = c__18516__auto___19135;
var G__19138 = cljs.core.count.call(null,c__18516__auto___19135);
var G__19139 = (0);
seq__19120_19124 = G__19136;
chunk__19121_19125 = G__19137;
count__19122_19126 = G__19138;
i__19123_19127 = G__19139;
continue;
} else {
var node_19140 = cljs.core.first.call(null,seq__19120_19134__$1);
goog.dom.classes.toggle(node_19140,class$);

var G__19141 = cljs.core.next.call(null,seq__19120_19134__$1);
var G__19142 = null;
var G__19143 = (0);
var G__19144 = (0);
seq__19120_19124 = G__19141;
chunk__19121_19125 = G__19142;
count__19122_19126 = G__19143;
i__19123_19127 = G__19144;
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
var classes_19153__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__19149_19154 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19150_19155 = null;
var count__19151_19156 = (0);
var i__19152_19157 = (0);
while(true){
if((i__19152_19157 < count__19151_19156)){
var node_19158 = cljs.core._nth.call(null,chunk__19150_19155,i__19152_19157);
goog.dom.classes.set(node_19158,classes_19153__$1);

var G__19159 = seq__19149_19154;
var G__19160 = chunk__19150_19155;
var G__19161 = count__19151_19156;
var G__19162 = (i__19152_19157 + (1));
seq__19149_19154 = G__19159;
chunk__19150_19155 = G__19160;
count__19151_19156 = G__19161;
i__19152_19157 = G__19162;
continue;
} else {
var temp__4425__auto___19163 = cljs.core.seq.call(null,seq__19149_19154);
if(temp__4425__auto___19163){
var seq__19149_19164__$1 = temp__4425__auto___19163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19149_19164__$1)){
var c__18516__auto___19165 = cljs.core.chunk_first.call(null,seq__19149_19164__$1);
var G__19166 = cljs.core.chunk_rest.call(null,seq__19149_19164__$1);
var G__19167 = c__18516__auto___19165;
var G__19168 = cljs.core.count.call(null,c__18516__auto___19165);
var G__19169 = (0);
seq__19149_19154 = G__19166;
chunk__19150_19155 = G__19167;
count__19151_19156 = G__19168;
i__19152_19157 = G__19169;
continue;
} else {
var node_19170 = cljs.core.first.call(null,seq__19149_19164__$1);
goog.dom.classes.set(node_19170,classes_19153__$1);

var G__19171 = cljs.core.next.call(null,seq__19149_19164__$1);
var G__19172 = null;
var G__19173 = (0);
var G__19174 = (0);
seq__19149_19154 = G__19171;
chunk__19150_19155 = G__19172;
count__19151_19156 = G__19173;
i__19152_19157 = G__19174;
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
var seq__19179_19183 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19180_19184 = null;
var count__19181_19185 = (0);
var i__19182_19186 = (0);
while(true){
if((i__19182_19186 < count__19181_19185)){
var node_19187 = cljs.core._nth.call(null,chunk__19180_19184,i__19182_19186);
goog.dom.setTextContent(node_19187,value);

var G__19188 = seq__19179_19183;
var G__19189 = chunk__19180_19184;
var G__19190 = count__19181_19185;
var G__19191 = (i__19182_19186 + (1));
seq__19179_19183 = G__19188;
chunk__19180_19184 = G__19189;
count__19181_19185 = G__19190;
i__19182_19186 = G__19191;
continue;
} else {
var temp__4425__auto___19192 = cljs.core.seq.call(null,seq__19179_19183);
if(temp__4425__auto___19192){
var seq__19179_19193__$1 = temp__4425__auto___19192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19179_19193__$1)){
var c__18516__auto___19194 = cljs.core.chunk_first.call(null,seq__19179_19193__$1);
var G__19195 = cljs.core.chunk_rest.call(null,seq__19179_19193__$1);
var G__19196 = c__18516__auto___19194;
var G__19197 = cljs.core.count.call(null,c__18516__auto___19194);
var G__19198 = (0);
seq__19179_19183 = G__19195;
chunk__19180_19184 = G__19196;
count__19181_19185 = G__19197;
i__19182_19186 = G__19198;
continue;
} else {
var node_19199 = cljs.core.first.call(null,seq__19179_19193__$1);
goog.dom.setTextContent(node_19199,value);

var G__19200 = cljs.core.next.call(null,seq__19179_19193__$1);
var G__19201 = null;
var G__19202 = (0);
var G__19203 = (0);
seq__19179_19183 = G__19200;
chunk__19180_19184 = G__19201;
count__19181_19185 = G__19202;
i__19182_19186 = G__19203;
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
var seq__19208_19212 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19209_19213 = null;
var count__19210_19214 = (0);
var i__19211_19215 = (0);
while(true){
if((i__19211_19215 < count__19210_19214)){
var node_19216 = cljs.core._nth.call(null,chunk__19209_19213,i__19211_19215);
goog.dom.forms.setValue(node_19216,value);

var G__19217 = seq__19208_19212;
var G__19218 = chunk__19209_19213;
var G__19219 = count__19210_19214;
var G__19220 = (i__19211_19215 + (1));
seq__19208_19212 = G__19217;
chunk__19209_19213 = G__19218;
count__19210_19214 = G__19219;
i__19211_19215 = G__19220;
continue;
} else {
var temp__4425__auto___19221 = cljs.core.seq.call(null,seq__19208_19212);
if(temp__4425__auto___19221){
var seq__19208_19222__$1 = temp__4425__auto___19221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19208_19222__$1)){
var c__18516__auto___19223 = cljs.core.chunk_first.call(null,seq__19208_19222__$1);
var G__19224 = cljs.core.chunk_rest.call(null,seq__19208_19222__$1);
var G__19225 = c__18516__auto___19223;
var G__19226 = cljs.core.count.call(null,c__18516__auto___19223);
var G__19227 = (0);
seq__19208_19212 = G__19224;
chunk__19209_19213 = G__19225;
count__19210_19214 = G__19226;
i__19211_19215 = G__19227;
continue;
} else {
var node_19228 = cljs.core.first.call(null,seq__19208_19222__$1);
goog.dom.forms.setValue(node_19228,value);

var G__19229 = cljs.core.next.call(null,seq__19208_19222__$1);
var G__19230 = null;
var G__19231 = (0);
var G__19232 = (0);
seq__19208_19212 = G__19229;
chunk__19209_19213 = G__19230;
count__19210_19214 = G__19231;
i__19211_19215 = G__19232;
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
if(cljs.core.truth_((function (){var and__17701__auto__ = allows_inner_html_QMARK_;
if(and__17701__auto__){
var and__17701__auto____$1 = (function (){var or__17713__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__17713__auto__)){
return or__17713__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__17701__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__17701__auto____$1;
}
} else {
return and__17701__auto__;
}
})())){
var value_19243 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__19239_19244 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19240_19245 = null;
var count__19241_19246 = (0);
var i__19242_19247 = (0);
while(true){
if((i__19242_19247 < count__19241_19246)){
var node_19248 = cljs.core._nth.call(null,chunk__19240_19245,i__19242_19247);
node_19248.innerHTML = value_19243;

var G__19249 = seq__19239_19244;
var G__19250 = chunk__19240_19245;
var G__19251 = count__19241_19246;
var G__19252 = (i__19242_19247 + (1));
seq__19239_19244 = G__19249;
chunk__19240_19245 = G__19250;
count__19241_19246 = G__19251;
i__19242_19247 = G__19252;
continue;
} else {
var temp__4425__auto___19253 = cljs.core.seq.call(null,seq__19239_19244);
if(temp__4425__auto___19253){
var seq__19239_19254__$1 = temp__4425__auto___19253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19239_19254__$1)){
var c__18516__auto___19255 = cljs.core.chunk_first.call(null,seq__19239_19254__$1);
var G__19256 = cljs.core.chunk_rest.call(null,seq__19239_19254__$1);
var G__19257 = c__18516__auto___19255;
var G__19258 = cljs.core.count.call(null,c__18516__auto___19255);
var G__19259 = (0);
seq__19239_19244 = G__19256;
chunk__19240_19245 = G__19257;
count__19241_19246 = G__19258;
i__19242_19247 = G__19259;
continue;
} else {
var node_19260 = cljs.core.first.call(null,seq__19239_19254__$1);
node_19260.innerHTML = value_19243;

var G__19261 = cljs.core.next.call(null,seq__19239_19254__$1);
var G__19262 = null;
var G__19263 = (0);
var G__19264 = (0);
seq__19239_19244 = G__19261;
chunk__19240_19245 = G__19262;
count__19241_19246 = G__19263;
i__19242_19247 = G__19264;
continue;
}
} else {
}
}
break;
}
}catch (e19238){if((e19238 instanceof Error)){
var e_19265 = e19238;
domina.replace_children_BANG_.call(null,content,value_19243);
} else {
throw e19238;

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
var args19266 = [];
var len__18771__auto___19269 = arguments.length;
var i__18772__auto___19270 = (0);
while(true){
if((i__18772__auto___19270 < len__18771__auto___19269)){
args19266.push((arguments[i__18772__auto___19270]));

var G__19271 = (i__18772__auto___19270 + (1));
i__18772__auto___19270 = G__19271;
continue;
} else {
}
break;
}

var G__19268 = args19266.length;
switch (G__19268) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19266.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__17701__auto__ = bubble;
if(cljs.core.truth_(and__17701__auto__)){
return (value == null);
} else {
return and__17701__auto__;
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
var m = (function (){var or__17713__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__17713__auto__)){
return or__17713__auto__;
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
var seq__19279_19283 = cljs.core.seq.call(null,children);
var chunk__19280_19284 = null;
var count__19281_19285 = (0);
var i__19282_19286 = (0);
while(true){
if((i__19282_19286 < count__19281_19285)){
var child_19287 = cljs.core._nth.call(null,chunk__19280_19284,i__19282_19286);
frag.appendChild(child_19287);

var G__19288 = seq__19279_19283;
var G__19289 = chunk__19280_19284;
var G__19290 = count__19281_19285;
var G__19291 = (i__19282_19286 + (1));
seq__19279_19283 = G__19288;
chunk__19280_19284 = G__19289;
count__19281_19285 = G__19290;
i__19282_19286 = G__19291;
continue;
} else {
var temp__4425__auto___19292 = cljs.core.seq.call(null,seq__19279_19283);
if(temp__4425__auto___19292){
var seq__19279_19293__$1 = temp__4425__auto___19292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19279_19293__$1)){
var c__18516__auto___19294 = cljs.core.chunk_first.call(null,seq__19279_19293__$1);
var G__19295 = cljs.core.chunk_rest.call(null,seq__19279_19293__$1);
var G__19296 = c__18516__auto___19294;
var G__19297 = cljs.core.count.call(null,c__18516__auto___19294);
var G__19298 = (0);
seq__19279_19283 = G__19295;
chunk__19280_19284 = G__19296;
count__19281_19285 = G__19297;
i__19282_19286 = G__19298;
continue;
} else {
var child_19299 = cljs.core.first.call(null,seq__19279_19293__$1);
frag.appendChild(child_19299);

var G__19300 = cljs.core.next.call(null,seq__19279_19293__$1);
var G__19301 = null;
var G__19302 = (0);
var G__19303 = (0);
seq__19279_19283 = G__19300;
chunk__19280_19284 = G__19301;
count__19281_19285 = G__19302;
i__19282_19286 = G__19303;
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
return (function (p1__19273_SHARP_,p2__19274_SHARP_){
return f.call(null,p1__19273_SHARP_,p2__19274_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args19304 = [];
var len__18771__auto___19307 = arguments.length;
var i__18772__auto___19308 = (0);
while(true){
if((i__18772__auto___19308 < len__18771__auto___19307)){
args19304.push((arguments[i__18772__auto___19308]));

var G__19309 = (i__18772__auto___19308 + (1));
i__18772__auto___19308 = G__19309;
continue;
} else {
}
break;
}

var G__19306 = args19304.length;
switch (G__19306) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19304.length)].join('')));

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
var args19311 = [];
var len__18771__auto___19314 = arguments.length;
var i__18772__auto___19315 = (0);
while(true){
if((i__18772__auto___19315 < len__18771__auto___19314)){
args19311.push((arguments[i__18772__auto___19315]));

var G__19316 = (i__18772__auto___19315 + (1));
i__18772__auto___19315 = G__19316;
continue;
} else {
}
break;
}

var G__19313 = args19311.length;
switch (G__19313) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19311.length)].join('')));

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
var and__17701__auto__ = obj;
if(cljs.core.truth_(and__17701__auto__)){
var and__17701__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__17701__auto____$1){
return obj.length;
} else {
return and__17701__auto____$1;
}
} else {
return and__17701__auto__;
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