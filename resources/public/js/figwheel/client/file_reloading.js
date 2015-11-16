// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17348__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17348__auto__){
return or__17348__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__17348__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22459_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22459_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22464 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22465 = null;
var count__22466 = (0);
var i__22467 = (0);
while(true){
if((i__22467 < count__22466)){
var n = cljs.core._nth.call(null,chunk__22465,i__22467);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22468 = seq__22464;
var G__22469 = chunk__22465;
var G__22470 = count__22466;
var G__22471 = (i__22467 + (1));
seq__22464 = G__22468;
chunk__22465 = G__22469;
count__22466 = G__22470;
i__22467 = G__22471;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22464);
if(temp__4425__auto__){
var seq__22464__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22464__$1)){
var c__18151__auto__ = cljs.core.chunk_first.call(null,seq__22464__$1);
var G__22472 = cljs.core.chunk_rest.call(null,seq__22464__$1);
var G__22473 = c__18151__auto__;
var G__22474 = cljs.core.count.call(null,c__18151__auto__);
var G__22475 = (0);
seq__22464 = G__22472;
chunk__22465 = G__22473;
count__22466 = G__22474;
i__22467 = G__22475;
continue;
} else {
var n = cljs.core.first.call(null,seq__22464__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22476 = cljs.core.next.call(null,seq__22464__$1);
var G__22477 = null;
var G__22478 = (0);
var G__22479 = (0);
seq__22464 = G__22476;
chunk__22465 = G__22477;
count__22466 = G__22478;
i__22467 = G__22479;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22518_22525 = cljs.core.seq.call(null,deps);
var chunk__22519_22526 = null;
var count__22520_22527 = (0);
var i__22521_22528 = (0);
while(true){
if((i__22521_22528 < count__22520_22527)){
var dep_22529 = cljs.core._nth.call(null,chunk__22519_22526,i__22521_22528);
topo_sort_helper_STAR_.call(null,dep_22529,(depth + (1)),state);

var G__22530 = seq__22518_22525;
var G__22531 = chunk__22519_22526;
var G__22532 = count__22520_22527;
var G__22533 = (i__22521_22528 + (1));
seq__22518_22525 = G__22530;
chunk__22519_22526 = G__22531;
count__22520_22527 = G__22532;
i__22521_22528 = G__22533;
continue;
} else {
var temp__4425__auto___22534 = cljs.core.seq.call(null,seq__22518_22525);
if(temp__4425__auto___22534){
var seq__22518_22535__$1 = temp__4425__auto___22534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22518_22535__$1)){
var c__18151__auto___22536 = cljs.core.chunk_first.call(null,seq__22518_22535__$1);
var G__22537 = cljs.core.chunk_rest.call(null,seq__22518_22535__$1);
var G__22538 = c__18151__auto___22536;
var G__22539 = cljs.core.count.call(null,c__18151__auto___22536);
var G__22540 = (0);
seq__22518_22525 = G__22537;
chunk__22519_22526 = G__22538;
count__22520_22527 = G__22539;
i__22521_22528 = G__22540;
continue;
} else {
var dep_22541 = cljs.core.first.call(null,seq__22518_22535__$1);
topo_sort_helper_STAR_.call(null,dep_22541,(depth + (1)),state);

var G__22542 = cljs.core.next.call(null,seq__22518_22535__$1);
var G__22543 = null;
var G__22544 = (0);
var G__22545 = (0);
seq__22518_22525 = G__22542;
chunk__22519_22526 = G__22543;
count__22520_22527 = G__22544;
i__22521_22528 = G__22545;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22522){
var vec__22524 = p__22522;
var x = cljs.core.nth.call(null,vec__22524,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22524,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22524,x,xs,get_deps__$1){
return (function (p1__22480_SHARP_){
return clojure.set.difference.call(null,p1__22480_SHARP_,x);
});})(vec__22524,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22558 = cljs.core.seq.call(null,provides);
var chunk__22559 = null;
var count__22560 = (0);
var i__22561 = (0);
while(true){
if((i__22561 < count__22560)){
var prov = cljs.core._nth.call(null,chunk__22559,i__22561);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22562_22570 = cljs.core.seq.call(null,requires);
var chunk__22563_22571 = null;
var count__22564_22572 = (0);
var i__22565_22573 = (0);
while(true){
if((i__22565_22573 < count__22564_22572)){
var req_22574 = cljs.core._nth.call(null,chunk__22563_22571,i__22565_22573);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22574,prov);

var G__22575 = seq__22562_22570;
var G__22576 = chunk__22563_22571;
var G__22577 = count__22564_22572;
var G__22578 = (i__22565_22573 + (1));
seq__22562_22570 = G__22575;
chunk__22563_22571 = G__22576;
count__22564_22572 = G__22577;
i__22565_22573 = G__22578;
continue;
} else {
var temp__4425__auto___22579 = cljs.core.seq.call(null,seq__22562_22570);
if(temp__4425__auto___22579){
var seq__22562_22580__$1 = temp__4425__auto___22579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22562_22580__$1)){
var c__18151__auto___22581 = cljs.core.chunk_first.call(null,seq__22562_22580__$1);
var G__22582 = cljs.core.chunk_rest.call(null,seq__22562_22580__$1);
var G__22583 = c__18151__auto___22581;
var G__22584 = cljs.core.count.call(null,c__18151__auto___22581);
var G__22585 = (0);
seq__22562_22570 = G__22582;
chunk__22563_22571 = G__22583;
count__22564_22572 = G__22584;
i__22565_22573 = G__22585;
continue;
} else {
var req_22586 = cljs.core.first.call(null,seq__22562_22580__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22586,prov);

var G__22587 = cljs.core.next.call(null,seq__22562_22580__$1);
var G__22588 = null;
var G__22589 = (0);
var G__22590 = (0);
seq__22562_22570 = G__22587;
chunk__22563_22571 = G__22588;
count__22564_22572 = G__22589;
i__22565_22573 = G__22590;
continue;
}
} else {
}
}
break;
}

var G__22591 = seq__22558;
var G__22592 = chunk__22559;
var G__22593 = count__22560;
var G__22594 = (i__22561 + (1));
seq__22558 = G__22591;
chunk__22559 = G__22592;
count__22560 = G__22593;
i__22561 = G__22594;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22558);
if(temp__4425__auto__){
var seq__22558__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22558__$1)){
var c__18151__auto__ = cljs.core.chunk_first.call(null,seq__22558__$1);
var G__22595 = cljs.core.chunk_rest.call(null,seq__22558__$1);
var G__22596 = c__18151__auto__;
var G__22597 = cljs.core.count.call(null,c__18151__auto__);
var G__22598 = (0);
seq__22558 = G__22595;
chunk__22559 = G__22596;
count__22560 = G__22597;
i__22561 = G__22598;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22558__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22566_22599 = cljs.core.seq.call(null,requires);
var chunk__22567_22600 = null;
var count__22568_22601 = (0);
var i__22569_22602 = (0);
while(true){
if((i__22569_22602 < count__22568_22601)){
var req_22603 = cljs.core._nth.call(null,chunk__22567_22600,i__22569_22602);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22603,prov);

var G__22604 = seq__22566_22599;
var G__22605 = chunk__22567_22600;
var G__22606 = count__22568_22601;
var G__22607 = (i__22569_22602 + (1));
seq__22566_22599 = G__22604;
chunk__22567_22600 = G__22605;
count__22568_22601 = G__22606;
i__22569_22602 = G__22607;
continue;
} else {
var temp__4425__auto___22608__$1 = cljs.core.seq.call(null,seq__22566_22599);
if(temp__4425__auto___22608__$1){
var seq__22566_22609__$1 = temp__4425__auto___22608__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22566_22609__$1)){
var c__18151__auto___22610 = cljs.core.chunk_first.call(null,seq__22566_22609__$1);
var G__22611 = cljs.core.chunk_rest.call(null,seq__22566_22609__$1);
var G__22612 = c__18151__auto___22610;
var G__22613 = cljs.core.count.call(null,c__18151__auto___22610);
var G__22614 = (0);
seq__22566_22599 = G__22611;
chunk__22567_22600 = G__22612;
count__22568_22601 = G__22613;
i__22569_22602 = G__22614;
continue;
} else {
var req_22615 = cljs.core.first.call(null,seq__22566_22609__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22615,prov);

var G__22616 = cljs.core.next.call(null,seq__22566_22609__$1);
var G__22617 = null;
var G__22618 = (0);
var G__22619 = (0);
seq__22566_22599 = G__22616;
chunk__22567_22600 = G__22617;
count__22568_22601 = G__22618;
i__22569_22602 = G__22619;
continue;
}
} else {
}
}
break;
}

var G__22620 = cljs.core.next.call(null,seq__22558__$1);
var G__22621 = null;
var G__22622 = (0);
var G__22623 = (0);
seq__22558 = G__22620;
chunk__22559 = G__22621;
count__22560 = G__22622;
i__22561 = G__22623;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22628_22632 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22629_22633 = null;
var count__22630_22634 = (0);
var i__22631_22635 = (0);
while(true){
if((i__22631_22635 < count__22630_22634)){
var ns_22636 = cljs.core._nth.call(null,chunk__22629_22633,i__22631_22635);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22636);

var G__22637 = seq__22628_22632;
var G__22638 = chunk__22629_22633;
var G__22639 = count__22630_22634;
var G__22640 = (i__22631_22635 + (1));
seq__22628_22632 = G__22637;
chunk__22629_22633 = G__22638;
count__22630_22634 = G__22639;
i__22631_22635 = G__22640;
continue;
} else {
var temp__4425__auto___22641 = cljs.core.seq.call(null,seq__22628_22632);
if(temp__4425__auto___22641){
var seq__22628_22642__$1 = temp__4425__auto___22641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22628_22642__$1)){
var c__18151__auto___22643 = cljs.core.chunk_first.call(null,seq__22628_22642__$1);
var G__22644 = cljs.core.chunk_rest.call(null,seq__22628_22642__$1);
var G__22645 = c__18151__auto___22643;
var G__22646 = cljs.core.count.call(null,c__18151__auto___22643);
var G__22647 = (0);
seq__22628_22632 = G__22644;
chunk__22629_22633 = G__22645;
count__22630_22634 = G__22646;
i__22631_22635 = G__22647;
continue;
} else {
var ns_22648 = cljs.core.first.call(null,seq__22628_22642__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22648);

var G__22649 = cljs.core.next.call(null,seq__22628_22642__$1);
var G__22650 = null;
var G__22651 = (0);
var G__22652 = (0);
seq__22628_22632 = G__22649;
chunk__22629_22633 = G__22650;
count__22630_22634 = G__22651;
i__22631_22635 = G__22652;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__17348__auto__ = goog.require__;
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22653__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22654__i = 0, G__22654__a = new Array(arguments.length -  0);
while (G__22654__i < G__22654__a.length) {G__22654__a[G__22654__i] = arguments[G__22654__i + 0]; ++G__22654__i;}
  args = new cljs.core.IndexedSeq(G__22654__a,0);
} 
return G__22653__delegate.call(this,args);};
G__22653.cljs$lang$maxFixedArity = 0;
G__22653.cljs$lang$applyTo = (function (arglist__22655){
var args = cljs.core.seq(arglist__22655);
return G__22653__delegate(args);
});
G__22653.cljs$core$IFn$_invoke$arity$variadic = G__22653__delegate;
return G__22653;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22657 = cljs.core._EQ_;
var expr__22658 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22657.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22658))){
var path_parts = ((function (pred__22657,expr__22658){
return (function (p1__22656_SHARP_){
return clojure.string.split.call(null,p1__22656_SHARP_,/[\/\\]/);
});})(pred__22657,expr__22658))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22657,expr__22658){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22660){if((e22660 instanceof Error)){
var e = e22660;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22660;

}
}})());
});
})(path_parts, sep, root, pred__22657, expr__22658))
} else {
if(cljs.core.truth_(pred__22657.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22658))){
return ((function (pred__22657,expr__22658){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22657,expr__22658){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22657,expr__22658))
);

return deferred.addErrback(((function (deferred,pred__22657,expr__22658){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22657,expr__22658))
);
});
})(pred__22657, expr__22658))
} else {
return ((function (pred__22657,expr__22658){
return (function (a,b){
throw "Reload not defined for this platform";
});
})(pred__22657, expr__22658))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22661,callback){
var map__22664 = p__22661;
var map__22664__$1 = ((((!((map__22664 == null)))?((((map__22664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22664):map__22664);
var file_msg = map__22664__$1;
var request_url = cljs.core.get.call(null,map__22664__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22664,map__22664__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22664,map__22664__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_22688){
var state_val_22689 = (state_22688[(1)]);
if((state_val_22689 === (7))){
var inst_22684 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
var statearr_22690_22710 = state_22688__$1;
(statearr_22690_22710[(2)] = inst_22684);

(statearr_22690_22710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (1))){
var state_22688__$1 = state_22688;
var statearr_22691_22711 = state_22688__$1;
(statearr_22691_22711[(2)] = null);

(statearr_22691_22711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (4))){
var inst_22668 = (state_22688[(7)]);
var inst_22668__$1 = (state_22688[(2)]);
var state_22688__$1 = (function (){var statearr_22692 = state_22688;
(statearr_22692[(7)] = inst_22668__$1);

return statearr_22692;
})();
if(cljs.core.truth_(inst_22668__$1)){
var statearr_22693_22712 = state_22688__$1;
(statearr_22693_22712[(1)] = (5));

} else {
var statearr_22694_22713 = state_22688__$1;
(statearr_22694_22713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (6))){
var state_22688__$1 = state_22688;
var statearr_22695_22714 = state_22688__$1;
(statearr_22695_22714[(2)] = null);

(statearr_22695_22714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (3))){
var inst_22686 = (state_22688[(2)]);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22688__$1,inst_22686);
} else {
if((state_val_22689 === (2))){
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22688__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22689 === (11))){
var inst_22680 = (state_22688[(2)]);
var state_22688__$1 = (function (){var statearr_22696 = state_22688;
(statearr_22696[(8)] = inst_22680);

return statearr_22696;
})();
var statearr_22697_22715 = state_22688__$1;
(statearr_22697_22715[(2)] = null);

(statearr_22697_22715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (9))){
var inst_22672 = (state_22688[(9)]);
var inst_22674 = (state_22688[(10)]);
var inst_22676 = inst_22674.call(null,inst_22672);
var state_22688__$1 = state_22688;
var statearr_22698_22716 = state_22688__$1;
(statearr_22698_22716[(2)] = inst_22676);

(statearr_22698_22716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (5))){
var inst_22668 = (state_22688[(7)]);
var inst_22670 = figwheel.client.file_reloading.blocking_load.call(null,inst_22668);
var state_22688__$1 = state_22688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22688__$1,(8),inst_22670);
} else {
if((state_val_22689 === (10))){
var inst_22672 = (state_22688[(9)]);
var inst_22678 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22672);
var state_22688__$1 = state_22688;
var statearr_22699_22717 = state_22688__$1;
(statearr_22699_22717[(2)] = inst_22678);

(statearr_22699_22717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22689 === (8))){
var inst_22668 = (state_22688[(7)]);
var inst_22674 = (state_22688[(10)]);
var inst_22672 = (state_22688[(2)]);
var inst_22673 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22674__$1 = cljs.core.get.call(null,inst_22673,inst_22668);
var state_22688__$1 = (function (){var statearr_22700 = state_22688;
(statearr_22700[(9)] = inst_22672);

(statearr_22700[(10)] = inst_22674__$1);

return statearr_22700;
})();
if(cljs.core.truth_(inst_22674__$1)){
var statearr_22701_22718 = state_22688__$1;
(statearr_22701_22718[(1)] = (9));

} else {
var statearr_22702_22719 = state_22688__$1;
(statearr_22702_22719[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19404__auto__ = null;
var figwheel$client$file_reloading$state_machine__19404__auto____0 = (function (){
var statearr_22706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22706[(0)] = figwheel$client$file_reloading$state_machine__19404__auto__);

(statearr_22706[(1)] = (1));

return statearr_22706;
});
var figwheel$client$file_reloading$state_machine__19404__auto____1 = (function (state_22688){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_22688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e22707){if((e22707 instanceof Object)){
var ex__19407__auto__ = e22707;
var statearr_22708_22720 = state_22688;
(statearr_22708_22720[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22721 = state_22688;
state_22688 = G__22721;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19404__auto__ = function(state_22688){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19404__auto____1.call(this,state_22688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19404__auto____0;
figwheel$client$file_reloading$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19404__auto____1;
return figwheel$client$file_reloading$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_22709 = f__19516__auto__.call(null);
(statearr_22709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_22709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22722,callback){
var map__22725 = p__22722;
var map__22725__$1 = ((((!((map__22725 == null)))?((((map__22725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22725):map__22725);
var file_msg = map__22725__$1;
var namespace = cljs.core.get.call(null,map__22725__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22725,map__22725__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22725,map__22725__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22727){
var map__22730 = p__22727;
var map__22730__$1 = ((((!((map__22730 == null)))?((((map__22730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22730):map__22730);
var file_msg = map__22730__$1;
var namespace = cljs.core.get.call(null,map__22730__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17336__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17336__auto__){
var or__17348__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
var or__17348__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17348__auto____$1)){
return or__17348__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17336__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22732,callback){
var map__22735 = p__22732;
var map__22735__$1 = ((((!((map__22735 == null)))?((((map__22735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22735):map__22735);
var file_msg = map__22735__$1;
var request_url = cljs.core.get.call(null,map__22735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22735__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19515__auto___22823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___22823,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___22823,out){
return (function (state_22805){
var state_val_22806 = (state_22805[(1)]);
if((state_val_22806 === (1))){
var inst_22783 = cljs.core.nth.call(null,files,(0),null);
var inst_22784 = cljs.core.nthnext.call(null,files,(1));
var inst_22785 = files;
var state_22805__$1 = (function (){var statearr_22807 = state_22805;
(statearr_22807[(7)] = inst_22783);

(statearr_22807[(8)] = inst_22784);

(statearr_22807[(9)] = inst_22785);

return statearr_22807;
})();
var statearr_22808_22824 = state_22805__$1;
(statearr_22808_22824[(2)] = null);

(statearr_22808_22824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22806 === (2))){
var inst_22788 = (state_22805[(10)]);
var inst_22785 = (state_22805[(9)]);
var inst_22788__$1 = cljs.core.nth.call(null,inst_22785,(0),null);
var inst_22789 = cljs.core.nthnext.call(null,inst_22785,(1));
var inst_22790 = (inst_22788__$1 == null);
var inst_22791 = cljs.core.not.call(null,inst_22790);
var state_22805__$1 = (function (){var statearr_22809 = state_22805;
(statearr_22809[(10)] = inst_22788__$1);

(statearr_22809[(11)] = inst_22789);

return statearr_22809;
})();
if(inst_22791){
var statearr_22810_22825 = state_22805__$1;
(statearr_22810_22825[(1)] = (4));

} else {
var statearr_22811_22826 = state_22805__$1;
(statearr_22811_22826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22806 === (3))){
var inst_22803 = (state_22805[(2)]);
var state_22805__$1 = state_22805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22805__$1,inst_22803);
} else {
if((state_val_22806 === (4))){
var inst_22788 = (state_22805[(10)]);
var inst_22793 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22788);
var state_22805__$1 = state_22805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22805__$1,(7),inst_22793);
} else {
if((state_val_22806 === (5))){
var inst_22799 = cljs.core.async.close_BANG_.call(null,out);
var state_22805__$1 = state_22805;
var statearr_22812_22827 = state_22805__$1;
(statearr_22812_22827[(2)] = inst_22799);

(statearr_22812_22827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22806 === (6))){
var inst_22801 = (state_22805[(2)]);
var state_22805__$1 = state_22805;
var statearr_22813_22828 = state_22805__$1;
(statearr_22813_22828[(2)] = inst_22801);

(statearr_22813_22828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22806 === (7))){
var inst_22789 = (state_22805[(11)]);
var inst_22795 = (state_22805[(2)]);
var inst_22796 = cljs.core.async.put_BANG_.call(null,out,inst_22795);
var inst_22785 = inst_22789;
var state_22805__$1 = (function (){var statearr_22814 = state_22805;
(statearr_22814[(12)] = inst_22796);

(statearr_22814[(9)] = inst_22785);

return statearr_22814;
})();
var statearr_22815_22829 = state_22805__$1;
(statearr_22815_22829[(2)] = null);

(statearr_22815_22829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19515__auto___22823,out))
;
return ((function (switch__19403__auto__,c__19515__auto___22823,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____0 = (function (){
var statearr_22819 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22819[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__);

(statearr_22819[(1)] = (1));

return statearr_22819;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____1 = (function (state_22805){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_22805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e22820){if((e22820 instanceof Object)){
var ex__19407__auto__ = e22820;
var statearr_22821_22830 = state_22805;
(statearr_22821_22830[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22831 = state_22805;
state_22805 = G__22831;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__ = function(state_22805){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____1.call(this,state_22805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___22823,out))
})();
var state__19517__auto__ = (function (){var statearr_22822 = f__19516__auto__.call(null);
(statearr_22822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___22823);

return statearr_22822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___22823,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22832,opts){
var map__22836 = p__22832;
var map__22836__$1 = ((((!((map__22836 == null)))?((((map__22836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22836):map__22836);
var eval_body__$1 = cljs.core.get.call(null,map__22836__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17336__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17336__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17336__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22838){var e = e22838;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22839_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22839_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22844){
var vec__22845 = p__22844;
var k = cljs.core.nth.call(null,vec__22845,(0),null);
var v = cljs.core.nth.call(null,vec__22845,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22846){
var vec__22847 = p__22846;
var k = cljs.core.nth.call(null,vec__22847,(0),null);
var v = cljs.core.nth.call(null,vec__22847,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22851,p__22852){
var map__23099 = p__22851;
var map__23099__$1 = ((((!((map__23099 == null)))?((((map__23099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23099):map__23099);
var opts = map__23099__$1;
var before_jsload = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23100 = p__22852;
var map__23100__$1 = ((((!((map__23100 == null)))?((((map__23100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23100):map__23100);
var msg = map__23100__$1;
var files = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23253){
var state_val_23254 = (state_23253[(1)]);
if((state_val_23254 === (7))){
var inst_23115 = (state_23253[(7)]);
var inst_23114 = (state_23253[(8)]);
var inst_23116 = (state_23253[(9)]);
var inst_23117 = (state_23253[(10)]);
var inst_23122 = cljs.core._nth.call(null,inst_23115,inst_23117);
var inst_23123 = figwheel.client.file_reloading.eval_body.call(null,inst_23122,opts);
var inst_23124 = (inst_23117 + (1));
var tmp23255 = inst_23115;
var tmp23256 = inst_23114;
var tmp23257 = inst_23116;
var inst_23114__$1 = tmp23256;
var inst_23115__$1 = tmp23255;
var inst_23116__$1 = tmp23257;
var inst_23117__$1 = inst_23124;
var state_23253__$1 = (function (){var statearr_23258 = state_23253;
(statearr_23258[(7)] = inst_23115__$1);

(statearr_23258[(11)] = inst_23123);

(statearr_23258[(8)] = inst_23114__$1);

(statearr_23258[(9)] = inst_23116__$1);

(statearr_23258[(10)] = inst_23117__$1);

return statearr_23258;
})();
var statearr_23259_23345 = state_23253__$1;
(statearr_23259_23345[(2)] = null);

(statearr_23259_23345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (20))){
var inst_23157 = (state_23253[(12)]);
var inst_23165 = figwheel.client.file_reloading.sort_files.call(null,inst_23157);
var state_23253__$1 = state_23253;
var statearr_23260_23346 = state_23253__$1;
(statearr_23260_23346[(2)] = inst_23165);

(statearr_23260_23346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (27))){
var state_23253__$1 = state_23253;
var statearr_23261_23347 = state_23253__$1;
(statearr_23261_23347[(2)] = null);

(statearr_23261_23347[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (1))){
var inst_23106 = (state_23253[(13)]);
var inst_23103 = before_jsload.call(null,files);
var inst_23104 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23105 = (function (){return ((function (inst_23106,inst_23103,inst_23104,state_val_23254,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22848_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22848_SHARP_);
});
})(inst_23106, inst_23103, inst_23104, state_val_23254, c__19515__auto__, map__23099, map__23099__$1, opts, before_jsload, on_jsload, reload_dependents, map__23100, map__23100__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_23106__$1 = cljs.core.filter.call(null,inst_23105,files);
var inst_23107 = cljs.core.not_empty.call(null,inst_23106__$1);
var state_23253__$1 = (function (){var statearr_23262 = state_23253;
(statearr_23262[(14)] = inst_23104);

(statearr_23262[(13)] = inst_23106__$1);

(statearr_23262[(15)] = inst_23103);

return statearr_23262;
})();
if(cljs.core.truth_(inst_23107)){
var statearr_23263_23348 = state_23253__$1;
(statearr_23263_23348[(1)] = (2));

} else {
var statearr_23264_23349 = state_23253__$1;
(statearr_23264_23349[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (24))){
var state_23253__$1 = state_23253;
var statearr_23265_23350 = state_23253__$1;
(statearr_23265_23350[(2)] = null);

(statearr_23265_23350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (39))){
var inst_23207 = (state_23253[(16)]);
var state_23253__$1 = state_23253;
var statearr_23266_23351 = state_23253__$1;
(statearr_23266_23351[(2)] = inst_23207);

(statearr_23266_23351[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (46))){
var inst_23248 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23267_23352 = state_23253__$1;
(statearr_23267_23352[(2)] = inst_23248);

(statearr_23267_23352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (4))){
var inst_23151 = (state_23253[(2)]);
var inst_23152 = cljs.core.List.EMPTY;
var inst_23153 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23152);
var inst_23154 = (function (){return ((function (inst_23151,inst_23152,inst_23153,state_val_23254,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22849_SHARP_){
var and__17336__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22849_SHARP_);
if(cljs.core.truth_(and__17336__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22849_SHARP_));
} else {
return and__17336__auto__;
}
});
})(inst_23151, inst_23152, inst_23153, state_val_23254, c__19515__auto__, map__23099, map__23099__$1, opts, before_jsload, on_jsload, reload_dependents, map__23100, map__23100__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_23155 = cljs.core.filter.call(null,inst_23154,files);
var inst_23156 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23157 = cljs.core.concat.call(null,inst_23155,inst_23156);
var state_23253__$1 = (function (){var statearr_23268 = state_23253;
(statearr_23268[(17)] = inst_23153);

(statearr_23268[(12)] = inst_23157);

(statearr_23268[(18)] = inst_23151);

return statearr_23268;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23269_23353 = state_23253__$1;
(statearr_23269_23353[(1)] = (16));

} else {
var statearr_23270_23354 = state_23253__$1;
(statearr_23270_23354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (15))){
var inst_23141 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23271_23355 = state_23253__$1;
(statearr_23271_23355[(2)] = inst_23141);

(statearr_23271_23355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (21))){
var inst_23167 = (state_23253[(19)]);
var inst_23167__$1 = (state_23253[(2)]);
var inst_23168 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23167__$1);
var state_23253__$1 = (function (){var statearr_23272 = state_23253;
(statearr_23272[(19)] = inst_23167__$1);

return statearr_23272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23253__$1,(22),inst_23168);
} else {
if((state_val_23254 === (31))){
var inst_23251 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23253__$1,inst_23251);
} else {
if((state_val_23254 === (32))){
var inst_23207 = (state_23253[(16)]);
var inst_23212 = inst_23207.cljs$lang$protocol_mask$partition0$;
var inst_23213 = (inst_23212 & (64));
var inst_23214 = inst_23207.cljs$core$ISeq$;
var inst_23215 = (inst_23213) || (inst_23214);
var state_23253__$1 = state_23253;
if(cljs.core.truth_(inst_23215)){
var statearr_23273_23356 = state_23253__$1;
(statearr_23273_23356[(1)] = (35));

} else {
var statearr_23274_23357 = state_23253__$1;
(statearr_23274_23357[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (40))){
var inst_23228 = (state_23253[(20)]);
var inst_23227 = (state_23253[(2)]);
var inst_23228__$1 = cljs.core.get.call(null,inst_23227,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23229 = cljs.core.get.call(null,inst_23227,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23230 = cljs.core.not_empty.call(null,inst_23228__$1);
var state_23253__$1 = (function (){var statearr_23275 = state_23253;
(statearr_23275[(20)] = inst_23228__$1);

(statearr_23275[(21)] = inst_23229);

return statearr_23275;
})();
if(cljs.core.truth_(inst_23230)){
var statearr_23276_23358 = state_23253__$1;
(statearr_23276_23358[(1)] = (41));

} else {
var statearr_23277_23359 = state_23253__$1;
(statearr_23277_23359[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (33))){
var state_23253__$1 = state_23253;
var statearr_23278_23360 = state_23253__$1;
(statearr_23278_23360[(2)] = false);

(statearr_23278_23360[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (13))){
var inst_23127 = (state_23253[(22)]);
var inst_23131 = cljs.core.chunk_first.call(null,inst_23127);
var inst_23132 = cljs.core.chunk_rest.call(null,inst_23127);
var inst_23133 = cljs.core.count.call(null,inst_23131);
var inst_23114 = inst_23132;
var inst_23115 = inst_23131;
var inst_23116 = inst_23133;
var inst_23117 = (0);
var state_23253__$1 = (function (){var statearr_23279 = state_23253;
(statearr_23279[(7)] = inst_23115);

(statearr_23279[(8)] = inst_23114);

(statearr_23279[(9)] = inst_23116);

(statearr_23279[(10)] = inst_23117);

return statearr_23279;
})();
var statearr_23280_23361 = state_23253__$1;
(statearr_23280_23361[(2)] = null);

(statearr_23280_23361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (22))){
var inst_23171 = (state_23253[(23)]);
var inst_23175 = (state_23253[(24)]);
var inst_23170 = (state_23253[(25)]);
var inst_23167 = (state_23253[(19)]);
var inst_23170__$1 = (state_23253[(2)]);
var inst_23171__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23170__$1);
var inst_23172 = (function (){var all_files = inst_23167;
var res_SINGLEQUOTE_ = inst_23170__$1;
var res = inst_23171__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23171,inst_23175,inst_23170,inst_23167,inst_23170__$1,inst_23171__$1,state_val_23254,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22850_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22850_SHARP_));
});
})(all_files, res_SINGLEQUOTE_, res, inst_23171, inst_23175, inst_23170, inst_23167, inst_23170__$1, inst_23171__$1, state_val_23254, c__19515__auto__, map__23099, map__23099__$1, opts, before_jsload, on_jsload, reload_dependents, map__23100, map__23100__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_23173 = cljs.core.filter.call(null,inst_23172,inst_23170__$1);
var inst_23174 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23175__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23174);
var inst_23176 = cljs.core.not_empty.call(null,inst_23175__$1);
var state_23253__$1 = (function (){var statearr_23281 = state_23253;
(statearr_23281[(23)] = inst_23171__$1);

(statearr_23281[(24)] = inst_23175__$1);

(statearr_23281[(26)] = inst_23173);

(statearr_23281[(25)] = inst_23170__$1);

return statearr_23281;
})();
if(cljs.core.truth_(inst_23176)){
var statearr_23282_23362 = state_23253__$1;
(statearr_23282_23362[(1)] = (23));

} else {
var statearr_23283_23363 = state_23253__$1;
(statearr_23283_23363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (36))){
var state_23253__$1 = state_23253;
var statearr_23284_23364 = state_23253__$1;
(statearr_23284_23364[(2)] = false);

(statearr_23284_23364[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (41))){
var inst_23228 = (state_23253[(20)]);
var inst_23232 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23233 = cljs.core.map.call(null,inst_23232,inst_23228);
var inst_23234 = cljs.core.pr_str.call(null,inst_23233);
var inst_23235 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23234)].join('');
var inst_23236 = figwheel.client.utils.log.call(null,inst_23235);
var state_23253__$1 = state_23253;
var statearr_23285_23365 = state_23253__$1;
(statearr_23285_23365[(2)] = inst_23236);

(statearr_23285_23365[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (43))){
var inst_23229 = (state_23253[(21)]);
var inst_23239 = (state_23253[(2)]);
var inst_23240 = cljs.core.not_empty.call(null,inst_23229);
var state_23253__$1 = (function (){var statearr_23286 = state_23253;
(statearr_23286[(27)] = inst_23239);

return statearr_23286;
})();
if(cljs.core.truth_(inst_23240)){
var statearr_23287_23366 = state_23253__$1;
(statearr_23287_23366[(1)] = (44));

} else {
var statearr_23288_23367 = state_23253__$1;
(statearr_23288_23367[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (29))){
var inst_23171 = (state_23253[(23)]);
var inst_23175 = (state_23253[(24)]);
var inst_23207 = (state_23253[(16)]);
var inst_23173 = (state_23253[(26)]);
var inst_23170 = (state_23253[(25)]);
var inst_23167 = (state_23253[(19)]);
var inst_23203 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23206 = (function (){var all_files = inst_23167;
var res_SINGLEQUOTE_ = inst_23170;
var res = inst_23171;
var files_not_loaded = inst_23173;
var dependencies_that_loaded = inst_23175;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23171,inst_23175,inst_23207,inst_23173,inst_23170,inst_23167,inst_23203,state_val_23254,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23205){
var map__23289 = p__23205;
var map__23289__$1 = ((((!((map__23289 == null)))?((((map__23289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23289):map__23289);
var namespace = cljs.core.get.call(null,map__23289__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_23171, inst_23175, inst_23207, inst_23173, inst_23170, inst_23167, inst_23203, state_val_23254, c__19515__auto__, map__23099, map__23099__$1, opts, before_jsload, on_jsload, reload_dependents, map__23100, map__23100__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_23207__$1 = cljs.core.group_by.call(null,inst_23206,inst_23173);
var inst_23209 = (inst_23207__$1 == null);
var inst_23210 = cljs.core.not.call(null,inst_23209);
var state_23253__$1 = (function (){var statearr_23291 = state_23253;
(statearr_23291[(16)] = inst_23207__$1);

(statearr_23291[(28)] = inst_23203);

return statearr_23291;
})();
if(inst_23210){
var statearr_23292_23368 = state_23253__$1;
(statearr_23292_23368[(1)] = (32));

} else {
var statearr_23293_23369 = state_23253__$1;
(statearr_23293_23369[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (44))){
var inst_23229 = (state_23253[(21)]);
var inst_23242 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23229);
var inst_23243 = cljs.core.pr_str.call(null,inst_23242);
var inst_23244 = [cljs.core.str("not required: "),cljs.core.str(inst_23243)].join('');
var inst_23245 = figwheel.client.utils.log.call(null,inst_23244);
var state_23253__$1 = state_23253;
var statearr_23294_23370 = state_23253__$1;
(statearr_23294_23370[(2)] = inst_23245);

(statearr_23294_23370[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (6))){
var inst_23148 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23295_23371 = state_23253__$1;
(statearr_23295_23371[(2)] = inst_23148);

(statearr_23295_23371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (28))){
var inst_23173 = (state_23253[(26)]);
var inst_23200 = (state_23253[(2)]);
var inst_23201 = cljs.core.not_empty.call(null,inst_23173);
var state_23253__$1 = (function (){var statearr_23296 = state_23253;
(statearr_23296[(29)] = inst_23200);

return statearr_23296;
})();
if(cljs.core.truth_(inst_23201)){
var statearr_23297_23372 = state_23253__$1;
(statearr_23297_23372[(1)] = (29));

} else {
var statearr_23298_23373 = state_23253__$1;
(statearr_23298_23373[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (25))){
var inst_23171 = (state_23253[(23)]);
var inst_23187 = (state_23253[(2)]);
var inst_23188 = cljs.core.not_empty.call(null,inst_23171);
var state_23253__$1 = (function (){var statearr_23299 = state_23253;
(statearr_23299[(30)] = inst_23187);

return statearr_23299;
})();
if(cljs.core.truth_(inst_23188)){
var statearr_23300_23374 = state_23253__$1;
(statearr_23300_23374[(1)] = (26));

} else {
var statearr_23301_23375 = state_23253__$1;
(statearr_23301_23375[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (34))){
var inst_23222 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
if(cljs.core.truth_(inst_23222)){
var statearr_23302_23376 = state_23253__$1;
(statearr_23302_23376[(1)] = (38));

} else {
var statearr_23303_23377 = state_23253__$1;
(statearr_23303_23377[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (17))){
var state_23253__$1 = state_23253;
var statearr_23304_23378 = state_23253__$1;
(statearr_23304_23378[(2)] = recompile_dependents);

(statearr_23304_23378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (3))){
var state_23253__$1 = state_23253;
var statearr_23305_23379 = state_23253__$1;
(statearr_23305_23379[(2)] = null);

(statearr_23305_23379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (12))){
var inst_23144 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23306_23380 = state_23253__$1;
(statearr_23306_23380[(2)] = inst_23144);

(statearr_23306_23380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (2))){
var inst_23106 = (state_23253[(13)]);
var inst_23113 = cljs.core.seq.call(null,inst_23106);
var inst_23114 = inst_23113;
var inst_23115 = null;
var inst_23116 = (0);
var inst_23117 = (0);
var state_23253__$1 = (function (){var statearr_23307 = state_23253;
(statearr_23307[(7)] = inst_23115);

(statearr_23307[(8)] = inst_23114);

(statearr_23307[(9)] = inst_23116);

(statearr_23307[(10)] = inst_23117);

return statearr_23307;
})();
var statearr_23308_23381 = state_23253__$1;
(statearr_23308_23381[(2)] = null);

(statearr_23308_23381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (23))){
var inst_23171 = (state_23253[(23)]);
var inst_23175 = (state_23253[(24)]);
var inst_23173 = (state_23253[(26)]);
var inst_23170 = (state_23253[(25)]);
var inst_23167 = (state_23253[(19)]);
var inst_23178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23180 = (function (){var all_files = inst_23167;
var res_SINGLEQUOTE_ = inst_23170;
var res = inst_23171;
var files_not_loaded = inst_23173;
var dependencies_that_loaded = inst_23175;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23171,inst_23175,inst_23173,inst_23170,inst_23167,inst_23178,state_val_23254,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23179){
var map__23309 = p__23179;
var map__23309__$1 = ((((!((map__23309 == null)))?((((map__23309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23309):map__23309);
var request_url = cljs.core.get.call(null,map__23309__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_23171, inst_23175, inst_23173, inst_23170, inst_23167, inst_23178, state_val_23254, c__19515__auto__, map__23099, map__23099__$1, opts, before_jsload, on_jsload, reload_dependents, map__23100, map__23100__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_23181 = cljs.core.reverse.call(null,inst_23175);
var inst_23182 = cljs.core.map.call(null,inst_23180,inst_23181);
var inst_23183 = cljs.core.pr_str.call(null,inst_23182);
var inst_23184 = figwheel.client.utils.log.call(null,inst_23183);
var state_23253__$1 = (function (){var statearr_23311 = state_23253;
(statearr_23311[(31)] = inst_23178);

return statearr_23311;
})();
var statearr_23312_23382 = state_23253__$1;
(statearr_23312_23382[(2)] = inst_23184);

(statearr_23312_23382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (35))){
var state_23253__$1 = state_23253;
var statearr_23313_23383 = state_23253__$1;
(statearr_23313_23383[(2)] = true);

(statearr_23313_23383[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (19))){
var inst_23157 = (state_23253[(12)]);
var inst_23163 = figwheel.client.file_reloading.expand_files.call(null,inst_23157);
var state_23253__$1 = state_23253;
var statearr_23314_23384 = state_23253__$1;
(statearr_23314_23384[(2)] = inst_23163);

(statearr_23314_23384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (11))){
var state_23253__$1 = state_23253;
var statearr_23315_23385 = state_23253__$1;
(statearr_23315_23385[(2)] = null);

(statearr_23315_23385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (9))){
var inst_23146 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23316_23386 = state_23253__$1;
(statearr_23316_23386[(2)] = inst_23146);

(statearr_23316_23386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (5))){
var inst_23116 = (state_23253[(9)]);
var inst_23117 = (state_23253[(10)]);
var inst_23119 = (inst_23117 < inst_23116);
var inst_23120 = inst_23119;
var state_23253__$1 = state_23253;
if(cljs.core.truth_(inst_23120)){
var statearr_23317_23387 = state_23253__$1;
(statearr_23317_23387[(1)] = (7));

} else {
var statearr_23318_23388 = state_23253__$1;
(statearr_23318_23388[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (14))){
var inst_23127 = (state_23253[(22)]);
var inst_23136 = cljs.core.first.call(null,inst_23127);
var inst_23137 = figwheel.client.file_reloading.eval_body.call(null,inst_23136,opts);
var inst_23138 = cljs.core.next.call(null,inst_23127);
var inst_23114 = inst_23138;
var inst_23115 = null;
var inst_23116 = (0);
var inst_23117 = (0);
var state_23253__$1 = (function (){var statearr_23319 = state_23253;
(statearr_23319[(32)] = inst_23137);

(statearr_23319[(7)] = inst_23115);

(statearr_23319[(8)] = inst_23114);

(statearr_23319[(9)] = inst_23116);

(statearr_23319[(10)] = inst_23117);

return statearr_23319;
})();
var statearr_23320_23389 = state_23253__$1;
(statearr_23320_23389[(2)] = null);

(statearr_23320_23389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (45))){
var state_23253__$1 = state_23253;
var statearr_23321_23390 = state_23253__$1;
(statearr_23321_23390[(2)] = null);

(statearr_23321_23390[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (26))){
var inst_23171 = (state_23253[(23)]);
var inst_23175 = (state_23253[(24)]);
var inst_23173 = (state_23253[(26)]);
var inst_23170 = (state_23253[(25)]);
var inst_23167 = (state_23253[(19)]);
var inst_23190 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23192 = (function (){var all_files = inst_23167;
var res_SINGLEQUOTE_ = inst_23170;
var res = inst_23171;
var files_not_loaded = inst_23173;
var dependencies_that_loaded = inst_23175;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23171,inst_23175,inst_23173,inst_23170,inst_23167,inst_23190,state_val_23254,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23191){
var map__23322 = p__23191;
var map__23322__$1 = ((((!((map__23322 == null)))?((((map__23322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23322):map__23322);
var namespace = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_23171, inst_23175, inst_23173, inst_23170, inst_23167, inst_23190, state_val_23254, c__19515__auto__, map__23099, map__23099__$1, opts, before_jsload, on_jsload, reload_dependents, map__23100, map__23100__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_23193 = cljs.core.map.call(null,inst_23192,inst_23171);
var inst_23194 = cljs.core.pr_str.call(null,inst_23193);
var inst_23195 = figwheel.client.utils.log.call(null,inst_23194);
var inst_23196 = (function (){var all_files = inst_23167;
var res_SINGLEQUOTE_ = inst_23170;
var res = inst_23171;
var files_not_loaded = inst_23173;
var dependencies_that_loaded = inst_23175;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23171,inst_23175,inst_23173,inst_23170,inst_23167,inst_23190,inst_23192,inst_23193,inst_23194,inst_23195,state_val_23254,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_23171, inst_23175, inst_23173, inst_23170, inst_23167, inst_23190, inst_23192, inst_23193, inst_23194, inst_23195, state_val_23254, c__19515__auto__, map__23099, map__23099__$1, opts, before_jsload, on_jsload, reload_dependents, map__23100, map__23100__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_23197 = setTimeout(inst_23196,(10));
var state_23253__$1 = (function (){var statearr_23324 = state_23253;
(statearr_23324[(33)] = inst_23195);

(statearr_23324[(34)] = inst_23190);

return statearr_23324;
})();
var statearr_23325_23391 = state_23253__$1;
(statearr_23325_23391[(2)] = inst_23197);

(statearr_23325_23391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (16))){
var state_23253__$1 = state_23253;
var statearr_23326_23392 = state_23253__$1;
(statearr_23326_23392[(2)] = reload_dependents);

(statearr_23326_23392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (38))){
var inst_23207 = (state_23253[(16)]);
var inst_23224 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23207);
var state_23253__$1 = state_23253;
var statearr_23327_23393 = state_23253__$1;
(statearr_23327_23393[(2)] = inst_23224);

(statearr_23327_23393[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (30))){
var state_23253__$1 = state_23253;
var statearr_23328_23394 = state_23253__$1;
(statearr_23328_23394[(2)] = null);

(statearr_23328_23394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (10))){
var inst_23127 = (state_23253[(22)]);
var inst_23129 = cljs.core.chunked_seq_QMARK_.call(null,inst_23127);
var state_23253__$1 = state_23253;
if(inst_23129){
var statearr_23329_23395 = state_23253__$1;
(statearr_23329_23395[(1)] = (13));

} else {
var statearr_23330_23396 = state_23253__$1;
(statearr_23330_23396[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (18))){
var inst_23161 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
if(cljs.core.truth_(inst_23161)){
var statearr_23331_23397 = state_23253__$1;
(statearr_23331_23397[(1)] = (19));

} else {
var statearr_23332_23398 = state_23253__$1;
(statearr_23332_23398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (42))){
var state_23253__$1 = state_23253;
var statearr_23333_23399 = state_23253__$1;
(statearr_23333_23399[(2)] = null);

(statearr_23333_23399[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (37))){
var inst_23219 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23334_23400 = state_23253__$1;
(statearr_23334_23400[(2)] = inst_23219);

(statearr_23334_23400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (8))){
var inst_23114 = (state_23253[(8)]);
var inst_23127 = (state_23253[(22)]);
var inst_23127__$1 = cljs.core.seq.call(null,inst_23114);
var state_23253__$1 = (function (){var statearr_23335 = state_23253;
(statearr_23335[(22)] = inst_23127__$1);

return statearr_23335;
})();
if(inst_23127__$1){
var statearr_23336_23401 = state_23253__$1;
(statearr_23336_23401[(1)] = (10));

} else {
var statearr_23337_23402 = state_23253__$1;
(statearr_23337_23402[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19403__auto__,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____0 = (function (){
var statearr_23341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23341[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__);

(statearr_23341[(1)] = (1));

return statearr_23341;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____1 = (function (state_23253){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23342){if((e23342 instanceof Object)){
var ex__19407__auto__ = e23342;
var statearr_23343_23403 = state_23253;
(statearr_23343_23403[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23404 = state_23253;
state_23253 = G__23404;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__ = function(state_23253){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____1.call(this,state_23253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19517__auto__ = (function (){var statearr_23344 = f__19516__auto__.call(null);
(statearr_23344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_23344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__,map__23099,map__23099__$1,opts,before_jsload,on_jsload,reload_dependents,map__23100,map__23100__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19515__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23407,link){
var map__23410 = p__23407;
var map__23410__$1 = ((((!((map__23410 == null)))?((((map__23410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23410):map__23410);
var file = cljs.core.get.call(null,map__23410__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23410,map__23410__$1,file){
return (function (p1__23405_SHARP_,p2__23406_SHARP_){
if(cljs.core._EQ_.call(null,p1__23405_SHARP_,p2__23406_SHARP_)){
return p1__23405_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23410,map__23410__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23416){
var map__23417 = p__23416;
var map__23417__$1 = ((((!((map__23417 == null)))?((((map__23417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23417):map__23417);
var match_length = cljs.core.get.call(null,map__23417__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23417__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23412_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23412_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23419 = [];
var len__18406__auto___23422 = arguments.length;
var i__18407__auto___23423 = (0);
while(true){
if((i__18407__auto___23423 < len__18406__auto___23422)){
args23419.push((arguments[i__18407__auto___23423]));

var G__23424 = (i__18407__auto___23423 + (1));
i__18407__auto___23423 = G__23424;
continue;
} else {
}
break;
}

var G__23421 = args23419.length;
switch (G__23421) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23419.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23426_SHARP_,p2__23427_SHARP_){
return cljs.core.assoc.call(null,p1__23426_SHARP_,cljs.core.get.call(null,p2__23427_SHARP_,key),p2__23427_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23428){
var map__23431 = p__23428;
var map__23431__$1 = ((((!((map__23431 == null)))?((((map__23431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23431):map__23431);
var f_data = map__23431__$1;
var file = cljs.core.get.call(null,map__23431__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23433,files_msg){
var map__23440 = p__23433;
var map__23440__$1 = ((((!((map__23440 == null)))?((((map__23440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23440):map__23440);
var opts = map__23440__$1;
var on_cssload = cljs.core.get.call(null,map__23440__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23442_23446 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23443_23447 = null;
var count__23444_23448 = (0);
var i__23445_23449 = (0);
while(true){
if((i__23445_23449 < count__23444_23448)){
var f_23450 = cljs.core._nth.call(null,chunk__23443_23447,i__23445_23449);
figwheel.client.file_reloading.reload_css_file.call(null,f_23450);

var G__23451 = seq__23442_23446;
var G__23452 = chunk__23443_23447;
var G__23453 = count__23444_23448;
var G__23454 = (i__23445_23449 + (1));
seq__23442_23446 = G__23451;
chunk__23443_23447 = G__23452;
count__23444_23448 = G__23453;
i__23445_23449 = G__23454;
continue;
} else {
var temp__4425__auto___23455 = cljs.core.seq.call(null,seq__23442_23446);
if(temp__4425__auto___23455){
var seq__23442_23456__$1 = temp__4425__auto___23455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23442_23456__$1)){
var c__18151__auto___23457 = cljs.core.chunk_first.call(null,seq__23442_23456__$1);
var G__23458 = cljs.core.chunk_rest.call(null,seq__23442_23456__$1);
var G__23459 = c__18151__auto___23457;
var G__23460 = cljs.core.count.call(null,c__18151__auto___23457);
var G__23461 = (0);
seq__23442_23446 = G__23458;
chunk__23443_23447 = G__23459;
count__23444_23448 = G__23460;
i__23445_23449 = G__23461;
continue;
} else {
var f_23462 = cljs.core.first.call(null,seq__23442_23456__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23462);

var G__23463 = cljs.core.next.call(null,seq__23442_23456__$1);
var G__23464 = null;
var G__23465 = (0);
var G__23466 = (0);
seq__23442_23446 = G__23463;
chunk__23443_23447 = G__23464;
count__23444_23448 = G__23465;
i__23445_23449 = G__23466;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23440,map__23440__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23440,map__23440__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map