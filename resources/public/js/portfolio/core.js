// Compiled by ClojureScript 1.7.170 {}
goog.provide('portfolio.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('domina');
goog.require('shoreleave.remotes.http_rpc');
goog.require('domina.events');
goog.require('domina.xpath');
goog.require('cljs.reader');
portfolio.core.validate_form = (function portfolio$core$validate_form(){
var email = domina.by_id.call(null,"email");
var password = domina.by_id.call(null,"password");
if(((cljs.core.count.call(null,domina.value.call(null,email)) > (0))) && ((cljs.core.count.call(null,domina.value.call(null,password)) > (0)))){
return true;
} else {
alert("Please, complete the form!");

return false;
}
});
portfolio.core.calculate = (function portfolio$core$calculate(){
var quantity = cljs.reader.parse_int.call(null,domina.value.call(null,domina.by_id.call(null,"quantity")));
var price = cljs.reader.parse_int.call(null,cljs.reader.read_string.call(null,domina.value.call(null,domina.by_id.call(null,"price"))));
var tax = cljs.reader.parse_int.call(null,domina.value.call(null,domina.by_id.call(null,"tax")));
var discount = cljs.reader.parse_int.call(null,domina.value.call(null,domina.by_id.call(null,"discount")));
return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"calculate","calculate",-1224644403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantity,price,tax,discount], null),((function (quantity,price,tax,discount){
return (function (p1__55496_SHARP_){
return domina.set_value_BANG_.call(null,domina.by_id.call(null,"total"),p1__55496_SHARP_.toFixed((2)));
});})(quantity,price,tax,discount))
);
});
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),[cljs.core.str("<div>Hello World!</div>")].join(''));
portfolio.core.add_help = (function portfolio$core$add_help(){
return domina.append_BANG_.call(null,domina.by_id.call(null,"shoppingForm"),[cljs.core.str("<div class=\"help\">Click to Calculate</div>")].join(''));
});
portfolio.core.remove_help = (function portfolio$core$remove_help(){
return domina.destroy_BANG_.call(null,domina.by_class.call(null,"help"));
});
portfolio.core.init = (function portfolio$core$init(){
if(cljs.core.truth_((function (){var and__17179__auto__ = document;
if(cljs.core.truth_(and__17179__auto__)){
return (document["getElementById"]);
} else {
return and__17179__auto__;
}
})())){
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calc"),new cljs.core.Keyword(null,"click","click",1912301393),portfolio.core.calculate);

domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),portfolio.core.add_help);

return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),portfolio.core.remove_help);
} else {
return null;
}
});
goog.exportSymbol('portfolio.core.init', portfolio.core.init);

//# sourceMappingURL=core.js.map