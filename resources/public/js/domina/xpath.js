// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function domina$xpath$select_node_STAR_(path,node,technique_1,technique_2){
var doc = goog.dom.getOwnerDocument(node);
if(cljs.core.truth_((function (){var and__17179__auto__ = node.selectSingleNode;
if(cljs.core.truth_(and__17179__auto__)){
return doc.setProperty;
} else {
return and__17179__auto__;
}
})())){
doc.setProperty("SelectionLanguage","XPath");

return technique_1.call(null,node,path);
} else {
if(cljs.core.truth_(doc.evaluate)){
return technique_2.call(null,null,doc,node,path);
} else {
throw (new Error("Could not find XPath support in this browser."));

}
}
});
/**
 * Selects a single node using an XPath expression and a root node
 */
domina.xpath.select_node = (function domina$xpath$select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
return result.singleNodeValue;
}));
});
/**
 * Selects multiple nodes using an XPath expression and a root node
 */
domina.xpath.select_nodes = (function domina$xpath$select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results = result.snapshotLength;
var i = (0);
var acc = null;
while(true){
if((i < num_results)){
var G__55482 = (i + (1));
var G__55483 = cljs.core.cons.call(null,result.snapshotItem(i),acc);
i = G__55482;
acc = G__55483;
continue;
} else {
return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function domina$xpath$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.xpath.xpath = (function domina$xpath$xpath(var_args){
var args55484 = [];
var len__18249__auto___55490 = arguments.length;
var i__18250__auto___55491 = (0);
while(true){
if((i__18250__auto___55491 < len__18249__auto___55490)){
args55484.push((arguments[i__18250__auto___55491]));

var G__55492 = (i__18250__auto___55491 + (1));
i__18250__auto___55491 = G__55492;
continue;
} else {
}
break;
}

var G__55486 = args55484.length;
switch (G__55486) {
case 1:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55484.length)].join('')));

}
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.xpath.xpath.call(null,domina.xpath.root_element.call(null),expr);
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.xpath.t_domina$xpath55487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.xpath.t_domina$xpath55487 = (function (base,expr,meta55488){
this.base = base;
this.expr = expr;
this.meta55488 = meta55488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.xpath.t_domina$xpath55487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55489,meta55488__$1){
var self__ = this;
var _55489__$1 = this;
return (new domina.xpath.t_domina$xpath55487(self__.base,self__.expr,meta55488__$1));
});

domina.xpath.t_domina$xpath55487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55489){
var self__ = this;
var _55489__$1 = this;
return self__.meta55488;
});

domina.xpath.t_domina$xpath55487.prototype.domina$DomContent$ = true;

domina.xpath.t_domina$xpath55487.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,self__.expr),domina.nodes.call(null,self__.base));
});

domina.xpath.t_domina$xpath55487.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,self__.expr),domina.nodes.call(null,self__.base))));
});

domina.xpath.t_domina$xpath55487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta55488","meta55488",1886602681,null)], null);
});

domina.xpath.t_domina$xpath55487.cljs$lang$type = true;

domina.xpath.t_domina$xpath55487.cljs$lang$ctorStr = "domina.xpath/t_domina$xpath55487";

domina.xpath.t_domina$xpath55487.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"domina.xpath/t_domina$xpath55487");
});

domina.xpath.__GT_t_domina$xpath55487 = (function domina$xpath$__GT_t_domina$xpath55487(base__$1,expr__$1,meta55488){
return (new domina.xpath.t_domina$xpath55487(base__$1,expr__$1,meta55488));
});

}

return (new domina.xpath.t_domina$xpath55487(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.xpath.xpath.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=xpath.js.map