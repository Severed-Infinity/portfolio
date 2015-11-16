// Compiled by ClojureScript 1.7.170 {}
goog.provide('portfolio.core');
goog.require('cljs.core');
goog.require('domina');
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

//# sourceMappingURL=core.js.map