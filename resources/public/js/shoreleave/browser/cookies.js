// Compiled by ClojureScript 1.7.170 {}
goog.provide('shoreleave.browser.cookies');
goog.require('cljs.core');
goog.require('goog.net.Cookies');
goog.require('goog.string');
shoreleave.browser.cookies.as_hash_map;
goog.net.Cookies.prototype.cljs$core$ITransientAssociative$ = true;

goog.net.Cookies.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$5 = (function() { 
var G__50724__delegate = function (c,k,v,opts){
var c__$1 = this;
var temp__4425__auto__ = (function (){var and__17179__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.name.call(null,k);
} else {
return and__17179__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var k__$1 = temp__4425__auto__;
var map__50720 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__50720__$1 = ((((!((map__50720 == null)))?((((map__50720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50720):map__50720);
var max_age = cljs.core.get.call(null,map__50720__$1,new cljs.core.Keyword(null,"max-age","max-age",-270129271));
var path = cljs.core.get.call(null,map__50720__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var domain = cljs.core.get.call(null,map__50720__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var secure_QMARK_ = cljs.core.get.call(null,map__50720__$1,new cljs.core.Keyword(null,"secure?","secure?",-368029718));
return c__$1.set(k__$1,v,max_age,path,domain,secure_QMARK_);
} else {
return null;
}
};
var G__50724 = function (c,k,v,var_args){
var opts = null;
if (arguments.length > 3) {
var G__50725__i = 0, G__50725__a = new Array(arguments.length -  3);
while (G__50725__i < G__50725__a.length) {G__50725__a[G__50725__i] = arguments[G__50725__i + 3]; ++G__50725__i;}
  opts = new cljs.core.IndexedSeq(G__50725__a,0);
} 
return G__50724__delegate.call(this,c,k,v,opts);};
G__50724.cljs$lang$maxFixedArity = 3;
G__50724.cljs$lang$applyTo = (function (arglist__50726){
var c = cljs.core.first(arglist__50726);
arglist__50726 = cljs.core.next(arglist__50726);
var k = cljs.core.first(arglist__50726);
arglist__50726 = cljs.core.next(arglist__50726);
var v = cljs.core.first(arglist__50726);
var opts = cljs.core.rest(arglist__50726);
return G__50724__delegate(c,k,v,opts);
});
G__50724.cljs$core$IFn$_invoke$arity$variadic = G__50724__delegate;
return G__50724;
})()
;

goog.net.Cookies.prototype.cljs$core$ILookup$ = true;

goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (c,k){
var c__$1 = this;
return cljs.core._lookup.call(null,c__$1,k,null);
});

goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (c,k,not_found){
var c__$1 = this;
var v = c__$1.get(cljs.core.name.call(null,k),not_found);
if(typeof v === 'string'){
return goog.string.urlDecode(v);
} else {
return v;
}
});

goog.net.Cookies.prototype.cljs$core$ITransientMap$ = true;

goog.net.Cookies.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$4 = (function() { 
var G__50727__delegate = function (c,k,opts){
var c__$1 = this;
var temp__4425__auto__ = (function (){var and__17179__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.name.call(null,k);
} else {
return and__17179__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var k__$1 = temp__4425__auto__;
var map__50722 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__50722__$1 = ((((!((map__50722 == null)))?((((map__50722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50722):map__50722);
var path = cljs.core.get.call(null,map__50722__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var domain = cljs.core.get.call(null,map__50722__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
return c__$1.remove(k__$1,path,domain);
} else {
return null;
}
};
var G__50727 = function (c,k,var_args){
var opts = null;
if (arguments.length > 2) {
var G__50728__i = 0, G__50728__a = new Array(arguments.length -  2);
while (G__50728__i < G__50728__a.length) {G__50728__a[G__50728__i] = arguments[G__50728__i + 2]; ++G__50728__i;}
  opts = new cljs.core.IndexedSeq(G__50728__a,0);
} 
return G__50727__delegate.call(this,c,k,opts);};
G__50727.cljs$lang$maxFixedArity = 2;
G__50727.cljs$lang$applyTo = (function (arglist__50729){
var c = cljs.core.first(arglist__50729);
arglist__50729 = cljs.core.next(arglist__50729);
var k = cljs.core.first(arglist__50729);
var opts = cljs.core.rest(arglist__50729);
return G__50727__delegate(c,k,opts);
});
G__50727.cljs$core$IFn$_invoke$arity$variadic = G__50727__delegate;
return G__50727;
})()
;

goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$ = true;

goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (c,writer,opts){
var c__$1 = this;
return cljs.core._write.call(null,writer,cljs.core._persistent_BANG_.call(null,c__$1));
});

goog.net.Cookies.prototype.cljs$core$ICounted$ = true;

goog.net.Cookies.prototype.cljs$core$ICounted$_count$arity$1 = (function (c){
var c__$1 = this;
return c__$1.getCount();
});

goog.net.Cookies.prototype.cljs$core$IHash$ = true;

goog.net.Cookies.prototype.cljs$core$IHash$_hash$arity$1 = (function (c){
var c__$1 = this;
return cljs.core._hash.call(null,cljs.core._persistent_BANG_.call(null,c__$1));
});

goog.net.Cookies.prototype.cljs$core$ITransientCollection$ = true;

goog.net.Cookies.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (c){
var c__$1 = this;
return shoreleave.browser.cookies.as_hash_map.call(null,c__$1);
});

goog.net.Cookies.prototype.cljs$core$IAssociative$ = true;

goog.net.Cookies.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (c,k,v){
var c__$1 = this;
return cljs.core._assoc.call(null,cljs.core._persistent_BANG_.call(null,c__$1),k,v);
});

goog.net.Cookies.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (c,k){
var c__$1 = this;
return c__$1.containsKey(cljs.core.name.call(null,k));
});

goog.net.Cookies.prototype.cljs$core$ISeqable$ = true;

goog.net.Cookies.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (c){
var c__$1 = this;
return cljs.core.map.call(null,cljs.core.vector,c__$1.getKeys(),c__$1.getValues());
});

goog.net.Cookies.prototype.cljs$core$IFn$ = true;

goog.net.Cookies.prototype.call = (function() {
var G__50730 = null;
var G__50730__2 = (function (self__,k){
var self____$1 = this;
var c = self____$1;
return cljs.core._lookup.call(null,c,k);
});
var G__50730__3 = (function (self__,k,not_found){
var self____$1 = this;
var c = self____$1;
return cljs.core._lookup.call(null,c,k,not_found);
});
G__50730 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__50730__2.call(this,self__,k);
case 3:
return G__50730__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50730.cljs$core$IFn$_invoke$arity$2 = G__50730__2;
G__50730.cljs$core$IFn$_invoke$arity$3 = G__50730__3;
return G__50730;
})()
;

goog.net.Cookies.prototype.apply = (function (self__,args50719){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args50719)));
});

goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var c = this;
return cljs.core._lookup.call(null,c,k);
});

goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var c = this;
return cljs.core._lookup.call(null,c,k,not_found);
});
shoreleave.browser.cookies.cookies = (new goog.net.Cookies(document));
shoreleave.browser.cookies.as_hash_map = (function shoreleave$browser$cookies$as_hash_map(var_args){
var args50731 = [];
var len__18249__auto___50734 = arguments.length;
var i__18250__auto___50735 = (0);
while(true){
if((i__18250__auto___50735 < len__18249__auto___50734)){
args50731.push((arguments[i__18250__auto___50735]));

var G__50736 = (i__18250__auto___50735 + (1));
i__18250__auto___50735 = G__50736;
continue;
} else {
}
break;
}

var G__50733 = args50731.length;
switch (G__50733) {
case 0:
return shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50731.length)].join('')));

}
});

shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return shoreleave.browser.cookies.as_hash_map.call(null,shoreleave.browser.cookies.cookies);
});

shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$1 = (function (cks){
return cljs.core.zipmap.call(null,cks.getKeys(),cks.getValues());
});

shoreleave.browser.cookies.as_hash_map.cljs$lang$maxFixedArity = 1;
/**
 * Returns a boolean, true if cookies are currently enabled for the browser
 */
shoreleave.browser.cookies.cookies_enabled_QMARK_ = (function shoreleave$browser$cookies$cookies_enabled_QMARK_(var_args){
var args50738 = [];
var len__18249__auto___50741 = arguments.length;
var i__18250__auto___50742 = (0);
while(true){
if((i__18250__auto___50742 < len__18249__auto___50741)){
args50738.push((arguments[i__18250__auto___50742]));

var G__50743 = (i__18250__auto___50742 + (1));
i__18250__auto___50742 = G__50743;
continue;
} else {
}
break;
}

var G__50740 = args50738.length;
switch (G__50740) {
case 0:
return shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50738.length)].join('')));

}
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return shoreleave.browser.cookies.cookies_enabled_QMARK_.call(null,shoreleave.browser.cookies.cookies);
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cks){
return cks.isEnabled();
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$lang$maxFixedArity = 1;
shoreleave.browser.cookies.empty_BANG_ = (function shoreleave$browser$cookies$empty_BANG_(cks){
return cks.clear();
});

//# sourceMappingURL=cookies.js.map