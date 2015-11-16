// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div_18823 = document.createElement("div");
var test_html_18824 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_18823.innerHTML = test_html_18824;

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_18823.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_18823.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_18823.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map