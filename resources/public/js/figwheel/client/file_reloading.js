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
var or__17191__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17191__auto__){
return or__17191__auto__;
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
var or__17191__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54282_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54282_SHARP_));
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
var seq__54287 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54288 = null;
var count__54289 = (0);
var i__54290 = (0);
while(true){
if((i__54290 < count__54289)){
var n = cljs.core._nth.call(null,chunk__54288,i__54290);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54291 = seq__54287;
var G__54292 = chunk__54288;
var G__54293 = count__54289;
var G__54294 = (i__54290 + (1));
seq__54287 = G__54291;
chunk__54288 = G__54292;
count__54289 = G__54293;
i__54290 = G__54294;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__54287);
if(temp__4425__auto__){
var seq__54287__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54287__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__54287__$1);
var G__54295 = cljs.core.chunk_rest.call(null,seq__54287__$1);
var G__54296 = c__17994__auto__;
var G__54297 = cljs.core.count.call(null,c__17994__auto__);
var G__54298 = (0);
seq__54287 = G__54295;
chunk__54288 = G__54296;
count__54289 = G__54297;
i__54290 = G__54298;
continue;
} else {
var n = cljs.core.first.call(null,seq__54287__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54299 = cljs.core.next.call(null,seq__54287__$1);
var G__54300 = null;
var G__54301 = (0);
var G__54302 = (0);
seq__54287 = G__54299;
chunk__54288 = G__54300;
count__54289 = G__54301;
i__54290 = G__54302;
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

var seq__54341_54348 = cljs.core.seq.call(null,deps);
var chunk__54342_54349 = null;
var count__54343_54350 = (0);
var i__54344_54351 = (0);
while(true){
if((i__54344_54351 < count__54343_54350)){
var dep_54352 = cljs.core._nth.call(null,chunk__54342_54349,i__54344_54351);
topo_sort_helper_STAR_.call(null,dep_54352,(depth + (1)),state);

var G__54353 = seq__54341_54348;
var G__54354 = chunk__54342_54349;
var G__54355 = count__54343_54350;
var G__54356 = (i__54344_54351 + (1));
seq__54341_54348 = G__54353;
chunk__54342_54349 = G__54354;
count__54343_54350 = G__54355;
i__54344_54351 = G__54356;
continue;
} else {
var temp__4425__auto___54357 = cljs.core.seq.call(null,seq__54341_54348);
if(temp__4425__auto___54357){
var seq__54341_54358__$1 = temp__4425__auto___54357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54341_54358__$1)){
var c__17994__auto___54359 = cljs.core.chunk_first.call(null,seq__54341_54358__$1);
var G__54360 = cljs.core.chunk_rest.call(null,seq__54341_54358__$1);
var G__54361 = c__17994__auto___54359;
var G__54362 = cljs.core.count.call(null,c__17994__auto___54359);
var G__54363 = (0);
seq__54341_54348 = G__54360;
chunk__54342_54349 = G__54361;
count__54343_54350 = G__54362;
i__54344_54351 = G__54363;
continue;
} else {
var dep_54364 = cljs.core.first.call(null,seq__54341_54358__$1);
topo_sort_helper_STAR_.call(null,dep_54364,(depth + (1)),state);

var G__54365 = cljs.core.next.call(null,seq__54341_54358__$1);
var G__54366 = null;
var G__54367 = (0);
var G__54368 = (0);
seq__54341_54348 = G__54365;
chunk__54342_54349 = G__54366;
count__54343_54350 = G__54367;
i__54344_54351 = G__54368;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54345){
var vec__54347 = p__54345;
var x = cljs.core.nth.call(null,vec__54347,(0),null);
var xs = cljs.core.nthnext.call(null,vec__54347,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54347,x,xs,get_deps__$1){
return (function (p1__54303_SHARP_){
return clojure.set.difference.call(null,p1__54303_SHARP_,x);
});})(vec__54347,x,xs,get_deps__$1))
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
var seq__54381 = cljs.core.seq.call(null,provides);
var chunk__54382 = null;
var count__54383 = (0);
var i__54384 = (0);
while(true){
if((i__54384 < count__54383)){
var prov = cljs.core._nth.call(null,chunk__54382,i__54384);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54385_54393 = cljs.core.seq.call(null,requires);
var chunk__54386_54394 = null;
var count__54387_54395 = (0);
var i__54388_54396 = (0);
while(true){
if((i__54388_54396 < count__54387_54395)){
var req_54397 = cljs.core._nth.call(null,chunk__54386_54394,i__54388_54396);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54397,prov);

var G__54398 = seq__54385_54393;
var G__54399 = chunk__54386_54394;
var G__54400 = count__54387_54395;
var G__54401 = (i__54388_54396 + (1));
seq__54385_54393 = G__54398;
chunk__54386_54394 = G__54399;
count__54387_54395 = G__54400;
i__54388_54396 = G__54401;
continue;
} else {
var temp__4425__auto___54402 = cljs.core.seq.call(null,seq__54385_54393);
if(temp__4425__auto___54402){
var seq__54385_54403__$1 = temp__4425__auto___54402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54385_54403__$1)){
var c__17994__auto___54404 = cljs.core.chunk_first.call(null,seq__54385_54403__$1);
var G__54405 = cljs.core.chunk_rest.call(null,seq__54385_54403__$1);
var G__54406 = c__17994__auto___54404;
var G__54407 = cljs.core.count.call(null,c__17994__auto___54404);
var G__54408 = (0);
seq__54385_54393 = G__54405;
chunk__54386_54394 = G__54406;
count__54387_54395 = G__54407;
i__54388_54396 = G__54408;
continue;
} else {
var req_54409 = cljs.core.first.call(null,seq__54385_54403__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54409,prov);

var G__54410 = cljs.core.next.call(null,seq__54385_54403__$1);
var G__54411 = null;
var G__54412 = (0);
var G__54413 = (0);
seq__54385_54393 = G__54410;
chunk__54386_54394 = G__54411;
count__54387_54395 = G__54412;
i__54388_54396 = G__54413;
continue;
}
} else {
}
}
break;
}

var G__54414 = seq__54381;
var G__54415 = chunk__54382;
var G__54416 = count__54383;
var G__54417 = (i__54384 + (1));
seq__54381 = G__54414;
chunk__54382 = G__54415;
count__54383 = G__54416;
i__54384 = G__54417;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__54381);
if(temp__4425__auto__){
var seq__54381__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54381__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__54381__$1);
var G__54418 = cljs.core.chunk_rest.call(null,seq__54381__$1);
var G__54419 = c__17994__auto__;
var G__54420 = cljs.core.count.call(null,c__17994__auto__);
var G__54421 = (0);
seq__54381 = G__54418;
chunk__54382 = G__54419;
count__54383 = G__54420;
i__54384 = G__54421;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54381__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54389_54422 = cljs.core.seq.call(null,requires);
var chunk__54390_54423 = null;
var count__54391_54424 = (0);
var i__54392_54425 = (0);
while(true){
if((i__54392_54425 < count__54391_54424)){
var req_54426 = cljs.core._nth.call(null,chunk__54390_54423,i__54392_54425);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54426,prov);

var G__54427 = seq__54389_54422;
var G__54428 = chunk__54390_54423;
var G__54429 = count__54391_54424;
var G__54430 = (i__54392_54425 + (1));
seq__54389_54422 = G__54427;
chunk__54390_54423 = G__54428;
count__54391_54424 = G__54429;
i__54392_54425 = G__54430;
continue;
} else {
var temp__4425__auto___54431__$1 = cljs.core.seq.call(null,seq__54389_54422);
if(temp__4425__auto___54431__$1){
var seq__54389_54432__$1 = temp__4425__auto___54431__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54389_54432__$1)){
var c__17994__auto___54433 = cljs.core.chunk_first.call(null,seq__54389_54432__$1);
var G__54434 = cljs.core.chunk_rest.call(null,seq__54389_54432__$1);
var G__54435 = c__17994__auto___54433;
var G__54436 = cljs.core.count.call(null,c__17994__auto___54433);
var G__54437 = (0);
seq__54389_54422 = G__54434;
chunk__54390_54423 = G__54435;
count__54391_54424 = G__54436;
i__54392_54425 = G__54437;
continue;
} else {
var req_54438 = cljs.core.first.call(null,seq__54389_54432__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54438,prov);

var G__54439 = cljs.core.next.call(null,seq__54389_54432__$1);
var G__54440 = null;
var G__54441 = (0);
var G__54442 = (0);
seq__54389_54422 = G__54439;
chunk__54390_54423 = G__54440;
count__54391_54424 = G__54441;
i__54392_54425 = G__54442;
continue;
}
} else {
}
}
break;
}

var G__54443 = cljs.core.next.call(null,seq__54381__$1);
var G__54444 = null;
var G__54445 = (0);
var G__54446 = (0);
seq__54381 = G__54443;
chunk__54382 = G__54444;
count__54383 = G__54445;
i__54384 = G__54446;
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
var seq__54451_54455 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54452_54456 = null;
var count__54453_54457 = (0);
var i__54454_54458 = (0);
while(true){
if((i__54454_54458 < count__54453_54457)){
var ns_54459 = cljs.core._nth.call(null,chunk__54452_54456,i__54454_54458);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54459);

var G__54460 = seq__54451_54455;
var G__54461 = chunk__54452_54456;
var G__54462 = count__54453_54457;
var G__54463 = (i__54454_54458 + (1));
seq__54451_54455 = G__54460;
chunk__54452_54456 = G__54461;
count__54453_54457 = G__54462;
i__54454_54458 = G__54463;
continue;
} else {
var temp__4425__auto___54464 = cljs.core.seq.call(null,seq__54451_54455);
if(temp__4425__auto___54464){
var seq__54451_54465__$1 = temp__4425__auto___54464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54451_54465__$1)){
var c__17994__auto___54466 = cljs.core.chunk_first.call(null,seq__54451_54465__$1);
var G__54467 = cljs.core.chunk_rest.call(null,seq__54451_54465__$1);
var G__54468 = c__17994__auto___54466;
var G__54469 = cljs.core.count.call(null,c__17994__auto___54466);
var G__54470 = (0);
seq__54451_54455 = G__54467;
chunk__54452_54456 = G__54468;
count__54453_54457 = G__54469;
i__54454_54458 = G__54470;
continue;
} else {
var ns_54471 = cljs.core.first.call(null,seq__54451_54465__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54471);

var G__54472 = cljs.core.next.call(null,seq__54451_54465__$1);
var G__54473 = null;
var G__54474 = (0);
var G__54475 = (0);
seq__54451_54455 = G__54472;
chunk__54452_54456 = G__54473;
count__54453_54457 = G__54474;
i__54454_54458 = G__54475;
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
goog.require_figwheel_backup_ = (function (){var or__17191__auto__ = goog.require__;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
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
var G__54476__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54477__i = 0, G__54477__a = new Array(arguments.length -  0);
while (G__54477__i < G__54477__a.length) {G__54477__a[G__54477__i] = arguments[G__54477__i + 0]; ++G__54477__i;}
  args = new cljs.core.IndexedSeq(G__54477__a,0);
} 
return G__54476__delegate.call(this,args);};
G__54476.cljs$lang$maxFixedArity = 0;
G__54476.cljs$lang$applyTo = (function (arglist__54478){
var args = cljs.core.seq(arglist__54478);
return G__54476__delegate(args);
});
G__54476.cljs$core$IFn$_invoke$arity$variadic = G__54476__delegate;
return G__54476;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54480 = cljs.core._EQ_;
var expr__54481 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54480.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__54481))){
var path_parts = ((function (pred__54480,expr__54481){
return (function (p1__54479_SHARP_){
return clojure.string.split.call(null,p1__54479_SHARP_,/[\/\\]/);
});})(pred__54480,expr__54481))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__54480,expr__54481){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e54483){if((e54483 instanceof Error)){
var e = e54483;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54483;

}
}})());
});
})(path_parts, sep, root, pred__54480, expr__54481))
} else {
if(cljs.core.truth_(pred__54480.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__54481))){
return ((function (pred__54480,expr__54481){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__54480,expr__54481){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__54480,expr__54481))
);

return deferred.addErrback(((function (deferred,pred__54480,expr__54481){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__54480,expr__54481))
);
});
})(pred__54480, expr__54481))
} else {
return ((function (pred__54480,expr__54481){
return (function (a,b){
throw "Reload not defined for this platform";
});
})(pred__54480, expr__54481))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54484,callback){
var map__54487 = p__54484;
var map__54487__$1 = ((((!((map__54487 == null)))?((((map__54487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54487):map__54487);
var file_msg = map__54487__$1;
var request_url = cljs.core.get.call(null,map__54487__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__54487,map__54487__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54487,map__54487__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_54511){
var state_val_54512 = (state_54511[(1)]);
if((state_val_54512 === (7))){
var inst_54507 = (state_54511[(2)]);
var state_54511__$1 = state_54511;
var statearr_54513_54533 = state_54511__$1;
(statearr_54513_54533[(2)] = inst_54507);

(statearr_54513_54533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54512 === (1))){
var state_54511__$1 = state_54511;
var statearr_54514_54534 = state_54511__$1;
(statearr_54514_54534[(2)] = null);

(statearr_54514_54534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54512 === (4))){
var inst_54491 = (state_54511[(7)]);
var inst_54491__$1 = (state_54511[(2)]);
var state_54511__$1 = (function (){var statearr_54515 = state_54511;
(statearr_54515[(7)] = inst_54491__$1);

return statearr_54515;
})();
if(cljs.core.truth_(inst_54491__$1)){
var statearr_54516_54535 = state_54511__$1;
(statearr_54516_54535[(1)] = (5));

} else {
var statearr_54517_54536 = state_54511__$1;
(statearr_54517_54536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54512 === (6))){
var state_54511__$1 = state_54511;
var statearr_54518_54537 = state_54511__$1;
(statearr_54518_54537[(2)] = null);

(statearr_54518_54537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54512 === (3))){
var inst_54509 = (state_54511[(2)]);
var state_54511__$1 = state_54511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54511__$1,inst_54509);
} else {
if((state_val_54512 === (2))){
var state_54511__$1 = state_54511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54511__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54512 === (11))){
var inst_54503 = (state_54511[(2)]);
var state_54511__$1 = (function (){var statearr_54519 = state_54511;
(statearr_54519[(8)] = inst_54503);

return statearr_54519;
})();
var statearr_54520_54538 = state_54511__$1;
(statearr_54520_54538[(2)] = null);

(statearr_54520_54538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54512 === (9))){
var inst_54497 = (state_54511[(9)]);
var inst_54495 = (state_54511[(10)]);
var inst_54499 = inst_54497.call(null,inst_54495);
var state_54511__$1 = state_54511;
var statearr_54521_54539 = state_54511__$1;
(statearr_54521_54539[(2)] = inst_54499);

(statearr_54521_54539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54512 === (5))){
var inst_54491 = (state_54511[(7)]);
var inst_54493 = figwheel.client.file_reloading.blocking_load.call(null,inst_54491);
var state_54511__$1 = state_54511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54511__$1,(8),inst_54493);
} else {
if((state_val_54512 === (10))){
var inst_54495 = (state_54511[(10)]);
var inst_54501 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54495);
var state_54511__$1 = state_54511;
var statearr_54522_54540 = state_54511__$1;
(statearr_54522_54540[(2)] = inst_54501);

(statearr_54522_54540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54512 === (8))){
var inst_54497 = (state_54511[(9)]);
var inst_54491 = (state_54511[(7)]);
var inst_54495 = (state_54511[(2)]);
var inst_54496 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54497__$1 = cljs.core.get.call(null,inst_54496,inst_54491);
var state_54511__$1 = (function (){var statearr_54523 = state_54511;
(statearr_54523[(9)] = inst_54497__$1);

(statearr_54523[(10)] = inst_54495);

return statearr_54523;
})();
if(cljs.core.truth_(inst_54497__$1)){
var statearr_54524_54541 = state_54511__$1;
(statearr_54524_54541[(1)] = (9));

} else {
var statearr_54525_54542 = state_54511__$1;
(statearr_54525_54542[(1)] = (10));

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
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19464__auto__ = null;
var figwheel$client$file_reloading$state_machine__19464__auto____0 = (function (){
var statearr_54529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54529[(0)] = figwheel$client$file_reloading$state_machine__19464__auto__);

(statearr_54529[(1)] = (1));

return statearr_54529;
});
var figwheel$client$file_reloading$state_machine__19464__auto____1 = (function (state_54511){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_54511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e54530){if((e54530 instanceof Object)){
var ex__19467__auto__ = e54530;
var statearr_54531_54543 = state_54511;
(statearr_54531_54543[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54544 = state_54511;
state_54511 = G__54544;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19464__auto__ = function(state_54511){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19464__auto____1.call(this,state_54511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19464__auto____0;
figwheel$client$file_reloading$state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19464__auto____1;
return figwheel$client$file_reloading$state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_54532 = f__19485__auto__.call(null);
(statearr_54532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_54532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54545,callback){
var map__54548 = p__54545;
var map__54548__$1 = ((((!((map__54548 == null)))?((((map__54548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54548):map__54548);
var file_msg = map__54548__$1;
var namespace = cljs.core.get.call(null,map__54548__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54548,map__54548__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__54548,map__54548__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54550){
var map__54553 = p__54550;
var map__54553__$1 = ((((!((map__54553 == null)))?((((map__54553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54553):map__54553);
var file_msg = map__54553__$1;
var namespace = cljs.core.get.call(null,map__54553__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17179__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17179__auto__){
var or__17191__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
var or__17191__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17191__auto____$1)){
return or__17191__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17179__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54555,callback){
var map__54558 = p__54555;
var map__54558__$1 = ((((!((map__54558 == null)))?((((map__54558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54558):map__54558);
var file_msg = map__54558__$1;
var request_url = cljs.core.get.call(null,map__54558__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__54558__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19484__auto___54646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___54646,out){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___54646,out){
return (function (state_54628){
var state_val_54629 = (state_54628[(1)]);
if((state_val_54629 === (1))){
var inst_54606 = cljs.core.nth.call(null,files,(0),null);
var inst_54607 = cljs.core.nthnext.call(null,files,(1));
var inst_54608 = files;
var state_54628__$1 = (function (){var statearr_54630 = state_54628;
(statearr_54630[(7)] = inst_54606);

(statearr_54630[(8)] = inst_54608);

(statearr_54630[(9)] = inst_54607);

return statearr_54630;
})();
var statearr_54631_54647 = state_54628__$1;
(statearr_54631_54647[(2)] = null);

(statearr_54631_54647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (2))){
var inst_54608 = (state_54628[(8)]);
var inst_54611 = (state_54628[(10)]);
var inst_54611__$1 = cljs.core.nth.call(null,inst_54608,(0),null);
var inst_54612 = cljs.core.nthnext.call(null,inst_54608,(1));
var inst_54613 = (inst_54611__$1 == null);
var inst_54614 = cljs.core.not.call(null,inst_54613);
var state_54628__$1 = (function (){var statearr_54632 = state_54628;
(statearr_54632[(10)] = inst_54611__$1);

(statearr_54632[(11)] = inst_54612);

return statearr_54632;
})();
if(inst_54614){
var statearr_54633_54648 = state_54628__$1;
(statearr_54633_54648[(1)] = (4));

} else {
var statearr_54634_54649 = state_54628__$1;
(statearr_54634_54649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (3))){
var inst_54626 = (state_54628[(2)]);
var state_54628__$1 = state_54628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54628__$1,inst_54626);
} else {
if((state_val_54629 === (4))){
var inst_54611 = (state_54628[(10)]);
var inst_54616 = figwheel.client.file_reloading.reload_js_file.call(null,inst_54611);
var state_54628__$1 = state_54628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54628__$1,(7),inst_54616);
} else {
if((state_val_54629 === (5))){
var inst_54622 = cljs.core.async.close_BANG_.call(null,out);
var state_54628__$1 = state_54628;
var statearr_54635_54650 = state_54628__$1;
(statearr_54635_54650[(2)] = inst_54622);

(statearr_54635_54650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (6))){
var inst_54624 = (state_54628[(2)]);
var state_54628__$1 = state_54628;
var statearr_54636_54651 = state_54628__$1;
(statearr_54636_54651[(2)] = inst_54624);

(statearr_54636_54651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (7))){
var inst_54612 = (state_54628[(11)]);
var inst_54618 = (state_54628[(2)]);
var inst_54619 = cljs.core.async.put_BANG_.call(null,out,inst_54618);
var inst_54608 = inst_54612;
var state_54628__$1 = (function (){var statearr_54637 = state_54628;
(statearr_54637[(12)] = inst_54619);

(statearr_54637[(8)] = inst_54608);

return statearr_54637;
})();
var statearr_54638_54652 = state_54628__$1;
(statearr_54638_54652[(2)] = null);

(statearr_54638_54652[(1)] = (2));


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
});})(c__19484__auto___54646,out))
;
return ((function (switch__19463__auto__,c__19484__auto___54646,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto____0 = (function (){
var statearr_54642 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54642[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto__);

(statearr_54642[(1)] = (1));

return statearr_54642;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto____1 = (function (state_54628){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_54628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e54643){if((e54643 instanceof Object)){
var ex__19467__auto__ = e54643;
var statearr_54644_54653 = state_54628;
(statearr_54644_54653[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54654 = state_54628;
state_54628 = G__54654;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto__ = function(state_54628){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto____1.call(this,state_54628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___54646,out))
})();
var state__19486__auto__ = (function (){var statearr_54645 = f__19485__auto__.call(null);
(statearr_54645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___54646);

return statearr_54645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___54646,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__54655,opts){
var map__54659 = p__54655;
var map__54659__$1 = ((((!((map__54659 == null)))?((((map__54659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54659):map__54659);
var eval_body__$1 = cljs.core.get.call(null,map__54659__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__54659__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17179__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17179__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17179__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e54661){var e = e54661;
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
return (function (p1__54662_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54662_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__54667){
var vec__54668 = p__54667;
var k = cljs.core.nth.call(null,vec__54668,(0),null);
var v = cljs.core.nth.call(null,vec__54668,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__54669){
var vec__54670 = p__54669;
var k = cljs.core.nth.call(null,vec__54670,(0),null);
var v = cljs.core.nth.call(null,vec__54670,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__54674,p__54675){
var map__54922 = p__54674;
var map__54922__$1 = ((((!((map__54922 == null)))?((((map__54922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54922):map__54922);
var opts = map__54922__$1;
var before_jsload = cljs.core.get.call(null,map__54922__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__54922__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__54922__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__54923 = p__54675;
var map__54923__$1 = ((((!((map__54923 == null)))?((((map__54923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54923):map__54923);
var msg = map__54923__$1;
var files = cljs.core.get.call(null,map__54923__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__54923__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__54923__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55076){
var state_val_55077 = (state_55076[(1)]);
if((state_val_55077 === (7))){
var inst_54940 = (state_55076[(7)]);
var inst_54938 = (state_55076[(8)]);
var inst_54939 = (state_55076[(9)]);
var inst_54937 = (state_55076[(10)]);
var inst_54945 = cljs.core._nth.call(null,inst_54938,inst_54940);
var inst_54946 = figwheel.client.file_reloading.eval_body.call(null,inst_54945,opts);
var inst_54947 = (inst_54940 + (1));
var tmp55078 = inst_54938;
var tmp55079 = inst_54939;
var tmp55080 = inst_54937;
var inst_54937__$1 = tmp55080;
var inst_54938__$1 = tmp55078;
var inst_54939__$1 = tmp55079;
var inst_54940__$1 = inst_54947;
var state_55076__$1 = (function (){var statearr_55081 = state_55076;
(statearr_55081[(7)] = inst_54940__$1);

(statearr_55081[(11)] = inst_54946);

(statearr_55081[(8)] = inst_54938__$1);

(statearr_55081[(9)] = inst_54939__$1);

(statearr_55081[(10)] = inst_54937__$1);

return statearr_55081;
})();
var statearr_55082_55168 = state_55076__$1;
(statearr_55082_55168[(2)] = null);

(statearr_55082_55168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (20))){
var inst_54980 = (state_55076[(12)]);
var inst_54988 = figwheel.client.file_reloading.sort_files.call(null,inst_54980);
var state_55076__$1 = state_55076;
var statearr_55083_55169 = state_55076__$1;
(statearr_55083_55169[(2)] = inst_54988);

(statearr_55083_55169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (27))){
var state_55076__$1 = state_55076;
var statearr_55084_55170 = state_55076__$1;
(statearr_55084_55170[(2)] = null);

(statearr_55084_55170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (1))){
var inst_54929 = (state_55076[(13)]);
var inst_54926 = before_jsload.call(null,files);
var inst_54927 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_54928 = (function (){return ((function (inst_54929,inst_54926,inst_54927,state_val_55077,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54671_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54671_SHARP_);
});
})(inst_54929, inst_54926, inst_54927, state_val_55077, c__19484__auto__, map__54922, map__54922__$1, opts, before_jsload, on_jsload, reload_dependents, map__54923, map__54923__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_54929__$1 = cljs.core.filter.call(null,inst_54928,files);
var inst_54930 = cljs.core.not_empty.call(null,inst_54929__$1);
var state_55076__$1 = (function (){var statearr_55085 = state_55076;
(statearr_55085[(14)] = inst_54927);

(statearr_55085[(15)] = inst_54926);

(statearr_55085[(13)] = inst_54929__$1);

return statearr_55085;
})();
if(cljs.core.truth_(inst_54930)){
var statearr_55086_55171 = state_55076__$1;
(statearr_55086_55171[(1)] = (2));

} else {
var statearr_55087_55172 = state_55076__$1;
(statearr_55087_55172[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (24))){
var state_55076__$1 = state_55076;
var statearr_55088_55173 = state_55076__$1;
(statearr_55088_55173[(2)] = null);

(statearr_55088_55173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (39))){
var inst_55030 = (state_55076[(16)]);
var state_55076__$1 = state_55076;
var statearr_55089_55174 = state_55076__$1;
(statearr_55089_55174[(2)] = inst_55030);

(statearr_55089_55174[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (46))){
var inst_55071 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
var statearr_55090_55175 = state_55076__$1;
(statearr_55090_55175[(2)] = inst_55071);

(statearr_55090_55175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (4))){
var inst_54974 = (state_55076[(2)]);
var inst_54975 = cljs.core.List.EMPTY;
var inst_54976 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_54975);
var inst_54977 = (function (){return ((function (inst_54974,inst_54975,inst_54976,state_val_55077,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54672_SHARP_){
var and__17179__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54672_SHARP_);
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54672_SHARP_));
} else {
return and__17179__auto__;
}
});
})(inst_54974, inst_54975, inst_54976, state_val_55077, c__19484__auto__, map__54922, map__54922__$1, opts, before_jsload, on_jsload, reload_dependents, map__54923, map__54923__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_54978 = cljs.core.filter.call(null,inst_54977,files);
var inst_54979 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_54980 = cljs.core.concat.call(null,inst_54978,inst_54979);
var state_55076__$1 = (function (){var statearr_55091 = state_55076;
(statearr_55091[(17)] = inst_54976);

(statearr_55091[(18)] = inst_54974);

(statearr_55091[(12)] = inst_54980);

return statearr_55091;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55092_55176 = state_55076__$1;
(statearr_55092_55176[(1)] = (16));

} else {
var statearr_55093_55177 = state_55076__$1;
(statearr_55093_55177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (15))){
var inst_54964 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
var statearr_55094_55178 = state_55076__$1;
(statearr_55094_55178[(2)] = inst_54964);

(statearr_55094_55178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (21))){
var inst_54990 = (state_55076[(19)]);
var inst_54990__$1 = (state_55076[(2)]);
var inst_54991 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_54990__$1);
var state_55076__$1 = (function (){var statearr_55095 = state_55076;
(statearr_55095[(19)] = inst_54990__$1);

return statearr_55095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55076__$1,(22),inst_54991);
} else {
if((state_val_55077 === (31))){
var inst_55074 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55076__$1,inst_55074);
} else {
if((state_val_55077 === (32))){
var inst_55030 = (state_55076[(16)]);
var inst_55035 = inst_55030.cljs$lang$protocol_mask$partition0$;
var inst_55036 = (inst_55035 & (64));
var inst_55037 = inst_55030.cljs$core$ISeq$;
var inst_55038 = (inst_55036) || (inst_55037);
var state_55076__$1 = state_55076;
if(cljs.core.truth_(inst_55038)){
var statearr_55096_55179 = state_55076__$1;
(statearr_55096_55179[(1)] = (35));

} else {
var statearr_55097_55180 = state_55076__$1;
(statearr_55097_55180[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (40))){
var inst_55051 = (state_55076[(20)]);
var inst_55050 = (state_55076[(2)]);
var inst_55051__$1 = cljs.core.get.call(null,inst_55050,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55052 = cljs.core.get.call(null,inst_55050,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55053 = cljs.core.not_empty.call(null,inst_55051__$1);
var state_55076__$1 = (function (){var statearr_55098 = state_55076;
(statearr_55098[(20)] = inst_55051__$1);

(statearr_55098[(21)] = inst_55052);

return statearr_55098;
})();
if(cljs.core.truth_(inst_55053)){
var statearr_55099_55181 = state_55076__$1;
(statearr_55099_55181[(1)] = (41));

} else {
var statearr_55100_55182 = state_55076__$1;
(statearr_55100_55182[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (33))){
var state_55076__$1 = state_55076;
var statearr_55101_55183 = state_55076__$1;
(statearr_55101_55183[(2)] = false);

(statearr_55101_55183[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (13))){
var inst_54950 = (state_55076[(22)]);
var inst_54954 = cljs.core.chunk_first.call(null,inst_54950);
var inst_54955 = cljs.core.chunk_rest.call(null,inst_54950);
var inst_54956 = cljs.core.count.call(null,inst_54954);
var inst_54937 = inst_54955;
var inst_54938 = inst_54954;
var inst_54939 = inst_54956;
var inst_54940 = (0);
var state_55076__$1 = (function (){var statearr_55102 = state_55076;
(statearr_55102[(7)] = inst_54940);

(statearr_55102[(8)] = inst_54938);

(statearr_55102[(9)] = inst_54939);

(statearr_55102[(10)] = inst_54937);

return statearr_55102;
})();
var statearr_55103_55184 = state_55076__$1;
(statearr_55103_55184[(2)] = null);

(statearr_55103_55184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (22))){
var inst_54990 = (state_55076[(19)]);
var inst_54994 = (state_55076[(23)]);
var inst_54998 = (state_55076[(24)]);
var inst_54993 = (state_55076[(25)]);
var inst_54993__$1 = (state_55076[(2)]);
var inst_54994__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_54993__$1);
var inst_54995 = (function (){var all_files = inst_54990;
var res_SINGLEQUOTE_ = inst_54993__$1;
var res = inst_54994__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_54990,inst_54994,inst_54998,inst_54993,inst_54993__$1,inst_54994__$1,state_val_55077,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54673_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__54673_SHARP_));
});
})(all_files, res_SINGLEQUOTE_, res, inst_54990, inst_54994, inst_54998, inst_54993, inst_54993__$1, inst_54994__$1, state_val_55077, c__19484__auto__, map__54922, map__54922__$1, opts, before_jsload, on_jsload, reload_dependents, map__54923, map__54923__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_54996 = cljs.core.filter.call(null,inst_54995,inst_54993__$1);
var inst_54997 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_54998__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_54997);
var inst_54999 = cljs.core.not_empty.call(null,inst_54998__$1);
var state_55076__$1 = (function (){var statearr_55104 = state_55076;
(statearr_55104[(26)] = inst_54996);

(statearr_55104[(23)] = inst_54994__$1);

(statearr_55104[(24)] = inst_54998__$1);

(statearr_55104[(25)] = inst_54993__$1);

return statearr_55104;
})();
if(cljs.core.truth_(inst_54999)){
var statearr_55105_55185 = state_55076__$1;
(statearr_55105_55185[(1)] = (23));

} else {
var statearr_55106_55186 = state_55076__$1;
(statearr_55106_55186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (36))){
var state_55076__$1 = state_55076;
var statearr_55107_55187 = state_55076__$1;
(statearr_55107_55187[(2)] = false);

(statearr_55107_55187[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (41))){
var inst_55051 = (state_55076[(20)]);
var inst_55055 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55056 = cljs.core.map.call(null,inst_55055,inst_55051);
var inst_55057 = cljs.core.pr_str.call(null,inst_55056);
var inst_55058 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_55057)].join('');
var inst_55059 = figwheel.client.utils.log.call(null,inst_55058);
var state_55076__$1 = state_55076;
var statearr_55108_55188 = state_55076__$1;
(statearr_55108_55188[(2)] = inst_55059);

(statearr_55108_55188[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (43))){
var inst_55052 = (state_55076[(21)]);
var inst_55062 = (state_55076[(2)]);
var inst_55063 = cljs.core.not_empty.call(null,inst_55052);
var state_55076__$1 = (function (){var statearr_55109 = state_55076;
(statearr_55109[(27)] = inst_55062);

return statearr_55109;
})();
if(cljs.core.truth_(inst_55063)){
var statearr_55110_55189 = state_55076__$1;
(statearr_55110_55189[(1)] = (44));

} else {
var statearr_55111_55190 = state_55076__$1;
(statearr_55111_55190[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (29))){
var inst_54996 = (state_55076[(26)]);
var inst_55030 = (state_55076[(16)]);
var inst_54990 = (state_55076[(19)]);
var inst_54994 = (state_55076[(23)]);
var inst_54998 = (state_55076[(24)]);
var inst_54993 = (state_55076[(25)]);
var inst_55026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55029 = (function (){var all_files = inst_54990;
var res_SINGLEQUOTE_ = inst_54993;
var res = inst_54994;
var files_not_loaded = inst_54996;
var dependencies_that_loaded = inst_54998;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_55030,inst_54990,inst_54994,inst_54998,inst_54993,inst_55026,state_val_55077,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55028){
var map__55112 = p__55028;
var map__55112__$1 = ((((!((map__55112 == null)))?((((map__55112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55112):map__55112);
var namespace = cljs.core.get.call(null,map__55112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_54996, inst_55030, inst_54990, inst_54994, inst_54998, inst_54993, inst_55026, state_val_55077, c__19484__auto__, map__54922, map__54922__$1, opts, before_jsload, on_jsload, reload_dependents, map__54923, map__54923__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_55030__$1 = cljs.core.group_by.call(null,inst_55029,inst_54996);
var inst_55032 = (inst_55030__$1 == null);
var inst_55033 = cljs.core.not.call(null,inst_55032);
var state_55076__$1 = (function (){var statearr_55114 = state_55076;
(statearr_55114[(16)] = inst_55030__$1);

(statearr_55114[(28)] = inst_55026);

return statearr_55114;
})();
if(inst_55033){
var statearr_55115_55191 = state_55076__$1;
(statearr_55115_55191[(1)] = (32));

} else {
var statearr_55116_55192 = state_55076__$1;
(statearr_55116_55192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (44))){
var inst_55052 = (state_55076[(21)]);
var inst_55065 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55052);
var inst_55066 = cljs.core.pr_str.call(null,inst_55065);
var inst_55067 = [cljs.core.str("not required: "),cljs.core.str(inst_55066)].join('');
var inst_55068 = figwheel.client.utils.log.call(null,inst_55067);
var state_55076__$1 = state_55076;
var statearr_55117_55193 = state_55076__$1;
(statearr_55117_55193[(2)] = inst_55068);

(statearr_55117_55193[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (6))){
var inst_54971 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
var statearr_55118_55194 = state_55076__$1;
(statearr_55118_55194[(2)] = inst_54971);

(statearr_55118_55194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (28))){
var inst_54996 = (state_55076[(26)]);
var inst_55023 = (state_55076[(2)]);
var inst_55024 = cljs.core.not_empty.call(null,inst_54996);
var state_55076__$1 = (function (){var statearr_55119 = state_55076;
(statearr_55119[(29)] = inst_55023);

return statearr_55119;
})();
if(cljs.core.truth_(inst_55024)){
var statearr_55120_55195 = state_55076__$1;
(statearr_55120_55195[(1)] = (29));

} else {
var statearr_55121_55196 = state_55076__$1;
(statearr_55121_55196[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (25))){
var inst_54994 = (state_55076[(23)]);
var inst_55010 = (state_55076[(2)]);
var inst_55011 = cljs.core.not_empty.call(null,inst_54994);
var state_55076__$1 = (function (){var statearr_55122 = state_55076;
(statearr_55122[(30)] = inst_55010);

return statearr_55122;
})();
if(cljs.core.truth_(inst_55011)){
var statearr_55123_55197 = state_55076__$1;
(statearr_55123_55197[(1)] = (26));

} else {
var statearr_55124_55198 = state_55076__$1;
(statearr_55124_55198[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (34))){
var inst_55045 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
if(cljs.core.truth_(inst_55045)){
var statearr_55125_55199 = state_55076__$1;
(statearr_55125_55199[(1)] = (38));

} else {
var statearr_55126_55200 = state_55076__$1;
(statearr_55126_55200[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (17))){
var state_55076__$1 = state_55076;
var statearr_55127_55201 = state_55076__$1;
(statearr_55127_55201[(2)] = recompile_dependents);

(statearr_55127_55201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (3))){
var state_55076__$1 = state_55076;
var statearr_55128_55202 = state_55076__$1;
(statearr_55128_55202[(2)] = null);

(statearr_55128_55202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (12))){
var inst_54967 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
var statearr_55129_55203 = state_55076__$1;
(statearr_55129_55203[(2)] = inst_54967);

(statearr_55129_55203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (2))){
var inst_54929 = (state_55076[(13)]);
var inst_54936 = cljs.core.seq.call(null,inst_54929);
var inst_54937 = inst_54936;
var inst_54938 = null;
var inst_54939 = (0);
var inst_54940 = (0);
var state_55076__$1 = (function (){var statearr_55130 = state_55076;
(statearr_55130[(7)] = inst_54940);

(statearr_55130[(8)] = inst_54938);

(statearr_55130[(9)] = inst_54939);

(statearr_55130[(10)] = inst_54937);

return statearr_55130;
})();
var statearr_55131_55204 = state_55076__$1;
(statearr_55131_55204[(2)] = null);

(statearr_55131_55204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (23))){
var inst_54996 = (state_55076[(26)]);
var inst_54990 = (state_55076[(19)]);
var inst_54994 = (state_55076[(23)]);
var inst_54998 = (state_55076[(24)]);
var inst_54993 = (state_55076[(25)]);
var inst_55001 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55003 = (function (){var all_files = inst_54990;
var res_SINGLEQUOTE_ = inst_54993;
var res = inst_54994;
var files_not_loaded = inst_54996;
var dependencies_that_loaded = inst_54998;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54990,inst_54994,inst_54998,inst_54993,inst_55001,state_val_55077,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55002){
var map__55132 = p__55002;
var map__55132__$1 = ((((!((map__55132 == null)))?((((map__55132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55132):map__55132);
var request_url = cljs.core.get.call(null,map__55132__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_54996, inst_54990, inst_54994, inst_54998, inst_54993, inst_55001, state_val_55077, c__19484__auto__, map__54922, map__54922__$1, opts, before_jsload, on_jsload, reload_dependents, map__54923, map__54923__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_55004 = cljs.core.reverse.call(null,inst_54998);
var inst_55005 = cljs.core.map.call(null,inst_55003,inst_55004);
var inst_55006 = cljs.core.pr_str.call(null,inst_55005);
var inst_55007 = figwheel.client.utils.log.call(null,inst_55006);
var state_55076__$1 = (function (){var statearr_55134 = state_55076;
(statearr_55134[(31)] = inst_55001);

return statearr_55134;
})();
var statearr_55135_55205 = state_55076__$1;
(statearr_55135_55205[(2)] = inst_55007);

(statearr_55135_55205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (35))){
var state_55076__$1 = state_55076;
var statearr_55136_55206 = state_55076__$1;
(statearr_55136_55206[(2)] = true);

(statearr_55136_55206[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (19))){
var inst_54980 = (state_55076[(12)]);
var inst_54986 = figwheel.client.file_reloading.expand_files.call(null,inst_54980);
var state_55076__$1 = state_55076;
var statearr_55137_55207 = state_55076__$1;
(statearr_55137_55207[(2)] = inst_54986);

(statearr_55137_55207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (11))){
var state_55076__$1 = state_55076;
var statearr_55138_55208 = state_55076__$1;
(statearr_55138_55208[(2)] = null);

(statearr_55138_55208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (9))){
var inst_54969 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
var statearr_55139_55209 = state_55076__$1;
(statearr_55139_55209[(2)] = inst_54969);

(statearr_55139_55209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (5))){
var inst_54940 = (state_55076[(7)]);
var inst_54939 = (state_55076[(9)]);
var inst_54942 = (inst_54940 < inst_54939);
var inst_54943 = inst_54942;
var state_55076__$1 = state_55076;
if(cljs.core.truth_(inst_54943)){
var statearr_55140_55210 = state_55076__$1;
(statearr_55140_55210[(1)] = (7));

} else {
var statearr_55141_55211 = state_55076__$1;
(statearr_55141_55211[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (14))){
var inst_54950 = (state_55076[(22)]);
var inst_54959 = cljs.core.first.call(null,inst_54950);
var inst_54960 = figwheel.client.file_reloading.eval_body.call(null,inst_54959,opts);
var inst_54961 = cljs.core.next.call(null,inst_54950);
var inst_54937 = inst_54961;
var inst_54938 = null;
var inst_54939 = (0);
var inst_54940 = (0);
var state_55076__$1 = (function (){var statearr_55142 = state_55076;
(statearr_55142[(7)] = inst_54940);

(statearr_55142[(8)] = inst_54938);

(statearr_55142[(9)] = inst_54939);

(statearr_55142[(32)] = inst_54960);

(statearr_55142[(10)] = inst_54937);

return statearr_55142;
})();
var statearr_55143_55212 = state_55076__$1;
(statearr_55143_55212[(2)] = null);

(statearr_55143_55212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (45))){
var state_55076__$1 = state_55076;
var statearr_55144_55213 = state_55076__$1;
(statearr_55144_55213[(2)] = null);

(statearr_55144_55213[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (26))){
var inst_54996 = (state_55076[(26)]);
var inst_54990 = (state_55076[(19)]);
var inst_54994 = (state_55076[(23)]);
var inst_54998 = (state_55076[(24)]);
var inst_54993 = (state_55076[(25)]);
var inst_55013 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55015 = (function (){var all_files = inst_54990;
var res_SINGLEQUOTE_ = inst_54993;
var res = inst_54994;
var files_not_loaded = inst_54996;
var dependencies_that_loaded = inst_54998;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54990,inst_54994,inst_54998,inst_54993,inst_55013,state_val_55077,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55014){
var map__55145 = p__55014;
var map__55145__$1 = ((((!((map__55145 == null)))?((((map__55145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55145):map__55145);
var namespace = cljs.core.get.call(null,map__55145__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_54996, inst_54990, inst_54994, inst_54998, inst_54993, inst_55013, state_val_55077, c__19484__auto__, map__54922, map__54922__$1, opts, before_jsload, on_jsload, reload_dependents, map__54923, map__54923__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_55016 = cljs.core.map.call(null,inst_55015,inst_54994);
var inst_55017 = cljs.core.pr_str.call(null,inst_55016);
var inst_55018 = figwheel.client.utils.log.call(null,inst_55017);
var inst_55019 = (function (){var all_files = inst_54990;
var res_SINGLEQUOTE_ = inst_54993;
var res = inst_54994;
var files_not_loaded = inst_54996;
var dependencies_that_loaded = inst_54998;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54990,inst_54994,inst_54998,inst_54993,inst_55013,inst_55015,inst_55016,inst_55017,inst_55018,state_val_55077,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})(all_files, res_SINGLEQUOTE_, res, files_not_loaded, dependencies_that_loaded, inst_54996, inst_54990, inst_54994, inst_54998, inst_54993, inst_55013, inst_55015, inst_55016, inst_55017, inst_55018, state_val_55077, c__19484__auto__, map__54922, map__54922__$1, opts, before_jsload, on_jsload, reload_dependents, map__54923, map__54923__$1, msg, files, figwheel_meta, recompile_dependents))
})();
var inst_55020 = setTimeout(inst_55019,(10));
var state_55076__$1 = (function (){var statearr_55147 = state_55076;
(statearr_55147[(33)] = inst_55018);

(statearr_55147[(34)] = inst_55013);

return statearr_55147;
})();
var statearr_55148_55214 = state_55076__$1;
(statearr_55148_55214[(2)] = inst_55020);

(statearr_55148_55214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (16))){
var state_55076__$1 = state_55076;
var statearr_55149_55215 = state_55076__$1;
(statearr_55149_55215[(2)] = reload_dependents);

(statearr_55149_55215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (38))){
var inst_55030 = (state_55076[(16)]);
var inst_55047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55030);
var state_55076__$1 = state_55076;
var statearr_55150_55216 = state_55076__$1;
(statearr_55150_55216[(2)] = inst_55047);

(statearr_55150_55216[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (30))){
var state_55076__$1 = state_55076;
var statearr_55151_55217 = state_55076__$1;
(statearr_55151_55217[(2)] = null);

(statearr_55151_55217[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (10))){
var inst_54950 = (state_55076[(22)]);
var inst_54952 = cljs.core.chunked_seq_QMARK_.call(null,inst_54950);
var state_55076__$1 = state_55076;
if(inst_54952){
var statearr_55152_55218 = state_55076__$1;
(statearr_55152_55218[(1)] = (13));

} else {
var statearr_55153_55219 = state_55076__$1;
(statearr_55153_55219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (18))){
var inst_54984 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
if(cljs.core.truth_(inst_54984)){
var statearr_55154_55220 = state_55076__$1;
(statearr_55154_55220[(1)] = (19));

} else {
var statearr_55155_55221 = state_55076__$1;
(statearr_55155_55221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (42))){
var state_55076__$1 = state_55076;
var statearr_55156_55222 = state_55076__$1;
(statearr_55156_55222[(2)] = null);

(statearr_55156_55222[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (37))){
var inst_55042 = (state_55076[(2)]);
var state_55076__$1 = state_55076;
var statearr_55157_55223 = state_55076__$1;
(statearr_55157_55223[(2)] = inst_55042);

(statearr_55157_55223[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55077 === (8))){
var inst_54950 = (state_55076[(22)]);
var inst_54937 = (state_55076[(10)]);
var inst_54950__$1 = cljs.core.seq.call(null,inst_54937);
var state_55076__$1 = (function (){var statearr_55158 = state_55076;
(statearr_55158[(22)] = inst_54950__$1);

return statearr_55158;
})();
if(inst_54950__$1){
var statearr_55159_55224 = state_55076__$1;
(statearr_55159_55224[(1)] = (10));

} else {
var statearr_55160_55225 = state_55076__$1;
(statearr_55160_55225[(1)] = (11));

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
});})(c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19463__auto__,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto____0 = (function (){
var statearr_55164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55164[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto__);

(statearr_55164[(1)] = (1));

return statearr_55164;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto____1 = (function (state_55076){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_55076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e55165){if((e55165 instanceof Object)){
var ex__19467__auto__ = e55165;
var statearr_55166_55226 = state_55076;
(statearr_55166_55226[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55227 = state_55076;
state_55076 = G__55227;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto__ = function(state_55076){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto____1.call(this,state_55076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19486__auto__ = (function (){var statearr_55167 = f__19485__auto__.call(null);
(statearr_55167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_55167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__,map__54922,map__54922__$1,opts,before_jsload,on_jsload,reload_dependents,map__54923,map__54923__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19484__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55230,link){
var map__55233 = p__55230;
var map__55233__$1 = ((((!((map__55233 == null)))?((((map__55233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55233):map__55233);
var file = cljs.core.get.call(null,map__55233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__55233,map__55233__$1,file){
return (function (p1__55228_SHARP_,p2__55229_SHARP_){
if(cljs.core._EQ_.call(null,p1__55228_SHARP_,p2__55229_SHARP_)){
return p1__55228_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__55233,map__55233__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55239){
var map__55240 = p__55239;
var map__55240__$1 = ((((!((map__55240 == null)))?((((map__55240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55240):map__55240);
var match_length = cljs.core.get.call(null,map__55240__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55240__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55235_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55235_SHARP_);
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
var args55242 = [];
var len__18249__auto___55245 = arguments.length;
var i__18250__auto___55246 = (0);
while(true){
if((i__18250__auto___55246 < len__18249__auto___55245)){
args55242.push((arguments[i__18250__auto___55246]));

var G__55247 = (i__18250__auto___55246 + (1));
i__18250__auto___55246 = G__55247;
continue;
} else {
}
break;
}

var G__55244 = args55242.length;
switch (G__55244) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55242.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55249_SHARP_,p2__55250_SHARP_){
return cljs.core.assoc.call(null,p1__55249_SHARP_,cljs.core.get.call(null,p2__55250_SHARP_,key),p2__55250_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__55251){
var map__55254 = p__55251;
var map__55254__$1 = ((((!((map__55254 == null)))?((((map__55254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55254):map__55254);
var f_data = map__55254__$1;
var file = cljs.core.get.call(null,map__55254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55256,files_msg){
var map__55263 = p__55256;
var map__55263__$1 = ((((!((map__55263 == null)))?((((map__55263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55263):map__55263);
var opts = map__55263__$1;
var on_cssload = cljs.core.get.call(null,map__55263__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__55265_55269 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__55266_55270 = null;
var count__55267_55271 = (0);
var i__55268_55272 = (0);
while(true){
if((i__55268_55272 < count__55267_55271)){
var f_55273 = cljs.core._nth.call(null,chunk__55266_55270,i__55268_55272);
figwheel.client.file_reloading.reload_css_file.call(null,f_55273);

var G__55274 = seq__55265_55269;
var G__55275 = chunk__55266_55270;
var G__55276 = count__55267_55271;
var G__55277 = (i__55268_55272 + (1));
seq__55265_55269 = G__55274;
chunk__55266_55270 = G__55275;
count__55267_55271 = G__55276;
i__55268_55272 = G__55277;
continue;
} else {
var temp__4425__auto___55278 = cljs.core.seq.call(null,seq__55265_55269);
if(temp__4425__auto___55278){
var seq__55265_55279__$1 = temp__4425__auto___55278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55265_55279__$1)){
var c__17994__auto___55280 = cljs.core.chunk_first.call(null,seq__55265_55279__$1);
var G__55281 = cljs.core.chunk_rest.call(null,seq__55265_55279__$1);
var G__55282 = c__17994__auto___55280;
var G__55283 = cljs.core.count.call(null,c__17994__auto___55280);
var G__55284 = (0);
seq__55265_55269 = G__55281;
chunk__55266_55270 = G__55282;
count__55267_55271 = G__55283;
i__55268_55272 = G__55284;
continue;
} else {
var f_55285 = cljs.core.first.call(null,seq__55265_55279__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_55285);

var G__55286 = cljs.core.next.call(null,seq__55265_55279__$1);
var G__55287 = null;
var G__55288 = (0);
var G__55289 = (0);
seq__55265_55269 = G__55286;
chunk__55266_55270 = G__55287;
count__55267_55271 = G__55288;
i__55268_55272 = G__55289;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__55263,map__55263__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__55263,map__55263__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map