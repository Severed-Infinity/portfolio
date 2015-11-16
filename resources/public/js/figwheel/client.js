// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23902 = cljs.core._EQ_;
var expr__23903 = (function (){var or__17348__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23902.call(null,"true",expr__23903))){
return true;
} else {
if(cljs.core.truth_(pred__23902.call(null,"false",expr__23903))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23903)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23905__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23906__i = 0, G__23906__a = new Array(arguments.length -  0);
while (G__23906__i < G__23906__a.length) {G__23906__a[G__23906__i] = arguments[G__23906__i + 0]; ++G__23906__i;}
  args = new cljs.core.IndexedSeq(G__23906__a,0);
} 
return G__23905__delegate.call(this,args);};
G__23905.cljs$lang$maxFixedArity = 0;
G__23905.cljs$lang$applyTo = (function (arglist__23907){
var args = cljs.core.seq(arglist__23907);
return G__23905__delegate(args);
});
G__23905.cljs$core$IFn$_invoke$arity$variadic = G__23905__delegate;
return G__23905;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23908){
var map__23911 = p__23908;
var map__23911__$1 = ((((!((map__23911 == null)))?((((map__23911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23911):map__23911);
var message = cljs.core.get.call(null,map__23911__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23911__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17348__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17348__auto__)){
return or__17348__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17336__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17336__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17336__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19515__auto___24073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___24073,ch){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___24073,ch){
return (function (state_24042){
var state_val_24043 = (state_24042[(1)]);
if((state_val_24043 === (7))){
var inst_24038 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
var statearr_24044_24074 = state_24042__$1;
(statearr_24044_24074[(2)] = inst_24038);

(statearr_24044_24074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (1))){
var state_24042__$1 = state_24042;
var statearr_24045_24075 = state_24042__$1;
(statearr_24045_24075[(2)] = null);

(statearr_24045_24075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (4))){
var inst_23995 = (state_24042[(7)]);
var inst_23995__$1 = (state_24042[(2)]);
var state_24042__$1 = (function (){var statearr_24046 = state_24042;
(statearr_24046[(7)] = inst_23995__$1);

return statearr_24046;
})();
if(cljs.core.truth_(inst_23995__$1)){
var statearr_24047_24076 = state_24042__$1;
(statearr_24047_24076[(1)] = (5));

} else {
var statearr_24048_24077 = state_24042__$1;
(statearr_24048_24077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (15))){
var inst_24002 = (state_24042[(8)]);
var inst_24017 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24002);
var inst_24018 = cljs.core.first.call(null,inst_24017);
var inst_24019 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24018);
var inst_24020 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24019)].join('');
var inst_24021 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24020);
var state_24042__$1 = state_24042;
var statearr_24049_24078 = state_24042__$1;
(statearr_24049_24078[(2)] = inst_24021);

(statearr_24049_24078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (13))){
var inst_24026 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
var statearr_24050_24079 = state_24042__$1;
(statearr_24050_24079[(2)] = inst_24026);

(statearr_24050_24079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (6))){
var state_24042__$1 = state_24042;
var statearr_24051_24080 = state_24042__$1;
(statearr_24051_24080[(2)] = null);

(statearr_24051_24080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (17))){
var inst_24024 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
var statearr_24052_24081 = state_24042__$1;
(statearr_24052_24081[(2)] = inst_24024);

(statearr_24052_24081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (3))){
var inst_24040 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24042__$1,inst_24040);
} else {
if((state_val_24043 === (12))){
var inst_24001 = (state_24042[(9)]);
var inst_24015 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24001,opts);
var state_24042__$1 = state_24042;
if(cljs.core.truth_(inst_24015)){
var statearr_24053_24082 = state_24042__$1;
(statearr_24053_24082[(1)] = (15));

} else {
var statearr_24054_24083 = state_24042__$1;
(statearr_24054_24083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (2))){
var state_24042__$1 = state_24042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24042__$1,(4),ch);
} else {
if((state_val_24043 === (11))){
var inst_24002 = (state_24042[(8)]);
var inst_24007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24008 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24002);
var inst_24009 = cljs.core.async.timeout.call(null,(1000));
var inst_24010 = [inst_24008,inst_24009];
var inst_24011 = (new cljs.core.PersistentVector(null,2,(5),inst_24007,inst_24010,null));
var state_24042__$1 = state_24042;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24042__$1,(14),inst_24011);
} else {
if((state_val_24043 === (9))){
var inst_24002 = (state_24042[(8)]);
var inst_24028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24029 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24002);
var inst_24030 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24029);
var inst_24031 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24030)].join('');
var inst_24032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24031);
var state_24042__$1 = (function (){var statearr_24055 = state_24042;
(statearr_24055[(10)] = inst_24028);

return statearr_24055;
})();
var statearr_24056_24084 = state_24042__$1;
(statearr_24056_24084[(2)] = inst_24032);

(statearr_24056_24084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (5))){
var inst_23995 = (state_24042[(7)]);
var inst_23997 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23998 = (new cljs.core.PersistentArrayMap(null,2,inst_23997,null));
var inst_23999 = (new cljs.core.PersistentHashSet(null,inst_23998,null));
var inst_24000 = figwheel.client.focus_msgs.call(null,inst_23999,inst_23995);
var inst_24001 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24000);
var inst_24002 = cljs.core.first.call(null,inst_24000);
var inst_24003 = figwheel.client.autoload_QMARK_.call(null);
var state_24042__$1 = (function (){var statearr_24057 = state_24042;
(statearr_24057[(9)] = inst_24001);

(statearr_24057[(8)] = inst_24002);

return statearr_24057;
})();
if(cljs.core.truth_(inst_24003)){
var statearr_24058_24085 = state_24042__$1;
(statearr_24058_24085[(1)] = (8));

} else {
var statearr_24059_24086 = state_24042__$1;
(statearr_24059_24086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (14))){
var inst_24013 = (state_24042[(2)]);
var state_24042__$1 = state_24042;
var statearr_24060_24087 = state_24042__$1;
(statearr_24060_24087[(2)] = inst_24013);

(statearr_24060_24087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (16))){
var state_24042__$1 = state_24042;
var statearr_24061_24088 = state_24042__$1;
(statearr_24061_24088[(2)] = null);

(statearr_24061_24088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (10))){
var inst_24034 = (state_24042[(2)]);
var state_24042__$1 = (function (){var statearr_24062 = state_24042;
(statearr_24062[(11)] = inst_24034);

return statearr_24062;
})();
var statearr_24063_24089 = state_24042__$1;
(statearr_24063_24089[(2)] = null);

(statearr_24063_24089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24043 === (8))){
var inst_24001 = (state_24042[(9)]);
var inst_24005 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24001,opts);
var state_24042__$1 = state_24042;
if(cljs.core.truth_(inst_24005)){
var statearr_24064_24090 = state_24042__$1;
(statearr_24064_24090[(1)] = (11));

} else {
var statearr_24065_24091 = state_24042__$1;
(statearr_24065_24091[(1)] = (12));

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
});})(c__19515__auto___24073,ch))
;
return ((function (switch__19403__auto__,c__19515__auto___24073,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____0 = (function (){
var statearr_24069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24069[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__);

(statearr_24069[(1)] = (1));

return statearr_24069;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____1 = (function (state_24042){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24070){if((e24070 instanceof Object)){
var ex__19407__auto__ = e24070;
var statearr_24071_24092 = state_24042;
(statearr_24071_24092[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24093 = state_24042;
state_24042 = G__24093;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__ = function(state_24042){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____1.call(this,state_24042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___24073,ch))
})();
var state__19517__auto__ = (function (){var statearr_24072 = f__19516__auto__.call(null);
(statearr_24072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___24073);

return statearr_24072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___24073,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24094_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24094_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24101 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24101){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24099 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24100 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24099,_STAR_print_newline_STAR_24100,base_path_24101){
return (function() { 
var G__24102__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24103__i = 0, G__24103__a = new Array(arguments.length -  0);
while (G__24103__i < G__24103__a.length) {G__24103__a[G__24103__i] = arguments[G__24103__i + 0]; ++G__24103__i;}
  args = new cljs.core.IndexedSeq(G__24103__a,0);
} 
return G__24102__delegate.call(this,args);};
G__24102.cljs$lang$maxFixedArity = 0;
G__24102.cljs$lang$applyTo = (function (arglist__24104){
var args = cljs.core.seq(arglist__24104);
return G__24102__delegate(args);
});
G__24102.cljs$core$IFn$_invoke$arity$variadic = G__24102__delegate;
return G__24102;
})()
;})(_STAR_print_fn_STAR_24099,_STAR_print_newline_STAR_24100,base_path_24101))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24100;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24099;
}}catch (e24098){if((e24098 instanceof Error)){
var e = e24098;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24101], null));
} else {
var e = e24098;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24101))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24105){
var map__24112 = p__24105;
var map__24112__$1 = ((((!((map__24112 == null)))?((((map__24112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24112):map__24112);
var opts = map__24112__$1;
var build_id = cljs.core.get.call(null,map__24112__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24112,map__24112__$1,opts,build_id){
return (function (p__24114){
var vec__24115 = p__24114;
var map__24116 = cljs.core.nth.call(null,vec__24115,(0),null);
var map__24116__$1 = ((((!((map__24116 == null)))?((((map__24116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24116):map__24116);
var msg = map__24116__$1;
var msg_name = cljs.core.get.call(null,map__24116__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24115,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24115,map__24116,map__24116__$1,msg,msg_name,_,map__24112,map__24112__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24115,map__24116,map__24116__$1,msg,msg_name,_,map__24112,map__24112__$1,opts,build_id))
);
} else {
return null;
}
});
})(map__24112, map__24112__$1, opts, build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24122){
var vec__24123 = p__24122;
var map__24124 = cljs.core.nth.call(null,vec__24123,(0),null);
var map__24124__$1 = ((((!((map__24124 == null)))?((((map__24124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24124):map__24124);
var msg = map__24124__$1;
var msg_name = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24123,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24126){
var map__24136 = p__24126;
var map__24136__$1 = ((((!((map__24136 == null)))?((((map__24136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24136):map__24136);
var on_compile_warning = cljs.core.get.call(null,map__24136__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24136__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24136,map__24136__$1,on_compile_warning,on_compile_fail){
return (function (p__24138){
var vec__24139 = p__24138;
var map__24140 = cljs.core.nth.call(null,vec__24139,(0),null);
var map__24140__$1 = ((((!((map__24140 == null)))?((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);
var msg = map__24140__$1;
var msg_name = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24139,(1));
var pred__24142 = cljs.core._EQ_;
var expr__24143 = msg_name;
if(cljs.core.truth_(pred__24142.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24143))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24142.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24143))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
})(map__24136, map__24136__$1, on_compile_warning, on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__,msg_hist,msg_names,msg){
return (function (state_24359){
var state_val_24360 = (state_24359[(1)]);
if((state_val_24360 === (7))){
var inst_24283 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24283)){
var statearr_24361_24407 = state_24359__$1;
(statearr_24361_24407[(1)] = (8));

} else {
var statearr_24362_24408 = state_24359__$1;
(statearr_24362_24408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (20))){
var inst_24353 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24363_24409 = state_24359__$1;
(statearr_24363_24409[(2)] = inst_24353);

(statearr_24363_24409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (27))){
var inst_24349 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24364_24410 = state_24359__$1;
(statearr_24364_24410[(2)] = inst_24349);

(statearr_24364_24410[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (1))){
var inst_24276 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24276)){
var statearr_24365_24411 = state_24359__$1;
(statearr_24365_24411[(1)] = (2));

} else {
var statearr_24366_24412 = state_24359__$1;
(statearr_24366_24412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (24))){
var inst_24351 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24367_24413 = state_24359__$1;
(statearr_24367_24413[(2)] = inst_24351);

(statearr_24367_24413[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (4))){
var inst_24357 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24359__$1,inst_24357);
} else {
if((state_val_24360 === (15))){
var inst_24355 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24368_24414 = state_24359__$1;
(statearr_24368_24414[(2)] = inst_24355);

(statearr_24368_24414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (21))){
var inst_24314 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24369_24415 = state_24359__$1;
(statearr_24369_24415[(2)] = inst_24314);

(statearr_24369_24415[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (31))){
var inst_24338 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24338)){
var statearr_24370_24416 = state_24359__$1;
(statearr_24370_24416[(1)] = (34));

} else {
var statearr_24371_24417 = state_24359__$1;
(statearr_24371_24417[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (32))){
var inst_24347 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24372_24418 = state_24359__$1;
(statearr_24372_24418[(2)] = inst_24347);

(statearr_24372_24418[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (33))){
var inst_24336 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24373_24419 = state_24359__$1;
(statearr_24373_24419[(2)] = inst_24336);

(statearr_24373_24419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (13))){
var inst_24297 = figwheel.client.heads_up.clear.call(null);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(16),inst_24297);
} else {
if((state_val_24360 === (22))){
var inst_24318 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24319 = figwheel.client.heads_up.append_message.call(null,inst_24318);
var state_24359__$1 = state_24359;
var statearr_24374_24420 = state_24359__$1;
(statearr_24374_24420[(2)] = inst_24319);

(statearr_24374_24420[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (36))){
var inst_24345 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24375_24421 = state_24359__$1;
(statearr_24375_24421[(2)] = inst_24345);

(statearr_24375_24421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (29))){
var inst_24329 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24376_24422 = state_24359__$1;
(statearr_24376_24422[(2)] = inst_24329);

(statearr_24376_24422[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (6))){
var inst_24278 = (state_24359[(7)]);
var state_24359__$1 = state_24359;
var statearr_24377_24423 = state_24359__$1;
(statearr_24377_24423[(2)] = inst_24278);

(statearr_24377_24423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (28))){
var inst_24325 = (state_24359[(2)]);
var inst_24326 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24327 = figwheel.client.heads_up.display_warning.call(null,inst_24326);
var state_24359__$1 = (function (){var statearr_24378 = state_24359;
(statearr_24378[(8)] = inst_24325);

return statearr_24378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(29),inst_24327);
} else {
if((state_val_24360 === (25))){
var inst_24323 = figwheel.client.heads_up.clear.call(null);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(28),inst_24323);
} else {
if((state_val_24360 === (34))){
var inst_24340 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(37),inst_24340);
} else {
if((state_val_24360 === (17))){
var inst_24305 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24379_24424 = state_24359__$1;
(statearr_24379_24424[(2)] = inst_24305);

(statearr_24379_24424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (3))){
var inst_24295 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24295)){
var statearr_24380_24425 = state_24359__$1;
(statearr_24380_24425[(1)] = (13));

} else {
var statearr_24381_24426 = state_24359__$1;
(statearr_24381_24426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (12))){
var inst_24291 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24382_24427 = state_24359__$1;
(statearr_24382_24427[(2)] = inst_24291);

(statearr_24382_24427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (2))){
var inst_24278 = (state_24359[(7)]);
var inst_24278__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24359__$1 = (function (){var statearr_24383 = state_24359;
(statearr_24383[(7)] = inst_24278__$1);

return statearr_24383;
})();
if(cljs.core.truth_(inst_24278__$1)){
var statearr_24384_24428 = state_24359__$1;
(statearr_24384_24428[(1)] = (5));

} else {
var statearr_24385_24429 = state_24359__$1;
(statearr_24385_24429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (23))){
var inst_24321 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24321)){
var statearr_24386_24430 = state_24359__$1;
(statearr_24386_24430[(1)] = (25));

} else {
var statearr_24387_24431 = state_24359__$1;
(statearr_24387_24431[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (35))){
var state_24359__$1 = state_24359;
var statearr_24388_24432 = state_24359__$1;
(statearr_24388_24432[(2)] = null);

(statearr_24388_24432[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (19))){
var inst_24316 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24316)){
var statearr_24389_24433 = state_24359__$1;
(statearr_24389_24433[(1)] = (22));

} else {
var statearr_24390_24434 = state_24359__$1;
(statearr_24390_24434[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (11))){
var inst_24287 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24391_24435 = state_24359__$1;
(statearr_24391_24435[(2)] = inst_24287);

(statearr_24391_24435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (9))){
var inst_24289 = figwheel.client.heads_up.clear.call(null);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(12),inst_24289);
} else {
if((state_val_24360 === (5))){
var inst_24280 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24359__$1 = state_24359;
var statearr_24392_24436 = state_24359__$1;
(statearr_24392_24436[(2)] = inst_24280);

(statearr_24392_24436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (14))){
var inst_24307 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24307)){
var statearr_24393_24437 = state_24359__$1;
(statearr_24393_24437[(1)] = (18));

} else {
var statearr_24394_24438 = state_24359__$1;
(statearr_24394_24438[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (26))){
var inst_24331 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24359__$1 = state_24359;
if(cljs.core.truth_(inst_24331)){
var statearr_24395_24439 = state_24359__$1;
(statearr_24395_24439[(1)] = (30));

} else {
var statearr_24396_24440 = state_24359__$1;
(statearr_24396_24440[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (16))){
var inst_24299 = (state_24359[(2)]);
var inst_24300 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24301 = figwheel.client.format_messages.call(null,inst_24300);
var inst_24302 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24303 = figwheel.client.heads_up.display_error.call(null,inst_24301,inst_24302);
var state_24359__$1 = (function (){var statearr_24397 = state_24359;
(statearr_24397[(9)] = inst_24299);

return statearr_24397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(17),inst_24303);
} else {
if((state_val_24360 === (30))){
var inst_24333 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24334 = figwheel.client.heads_up.display_warning.call(null,inst_24333);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(33),inst_24334);
} else {
if((state_val_24360 === (10))){
var inst_24293 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24398_24441 = state_24359__$1;
(statearr_24398_24441[(2)] = inst_24293);

(statearr_24398_24441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (18))){
var inst_24309 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24310 = figwheel.client.format_messages.call(null,inst_24309);
var inst_24311 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24312 = figwheel.client.heads_up.display_error.call(null,inst_24310,inst_24311);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(21),inst_24312);
} else {
if((state_val_24360 === (37))){
var inst_24342 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24399_24442 = state_24359__$1;
(statearr_24399_24442[(2)] = inst_24342);

(statearr_24399_24442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (8))){
var inst_24285 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(11),inst_24285);
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
});})(c__19515__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19403__auto__,c__19515__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____0 = (function (){
var statearr_24403 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24403[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__);

(statearr_24403[(1)] = (1));

return statearr_24403;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____1 = (function (state_24359){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24404){if((e24404 instanceof Object)){
var ex__19407__auto__ = e24404;
var statearr_24405_24443 = state_24359;
(statearr_24405_24443[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24444 = state_24359;
state_24359 = G__24444;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__ = function(state_24359){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____1.call(this,state_24359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__,msg_hist,msg_names,msg))
})();
var state__19517__auto__ = (function (){var statearr_24406 = f__19516__auto__.call(null);
(statearr_24406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_24406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__,msg_hist,msg_names,msg))
);

return c__19515__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19515__auto___24507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___24507,ch){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___24507,ch){
return (function (state_24490){
var state_val_24491 = (state_24490[(1)]);
if((state_val_24491 === (1))){
var state_24490__$1 = state_24490;
var statearr_24492_24508 = state_24490__$1;
(statearr_24492_24508[(2)] = null);

(statearr_24492_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (2))){
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24490__$1,(4),ch);
} else {
if((state_val_24491 === (3))){
var inst_24488 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24490__$1,inst_24488);
} else {
if((state_val_24491 === (4))){
var inst_24478 = (state_24490[(7)]);
var inst_24478__$1 = (state_24490[(2)]);
var state_24490__$1 = (function (){var statearr_24493 = state_24490;
(statearr_24493[(7)] = inst_24478__$1);

return statearr_24493;
})();
if(cljs.core.truth_(inst_24478__$1)){
var statearr_24494_24509 = state_24490__$1;
(statearr_24494_24509[(1)] = (5));

} else {
var statearr_24495_24510 = state_24490__$1;
(statearr_24495_24510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (5))){
var inst_24478 = (state_24490[(7)]);
var inst_24480 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24478);
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24490__$1,(8),inst_24480);
} else {
if((state_val_24491 === (6))){
var state_24490__$1 = state_24490;
var statearr_24496_24511 = state_24490__$1;
(statearr_24496_24511[(2)] = null);

(statearr_24496_24511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (7))){
var inst_24486 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24497_24512 = state_24490__$1;
(statearr_24497_24512[(2)] = inst_24486);

(statearr_24497_24512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (8))){
var inst_24482 = (state_24490[(2)]);
var state_24490__$1 = (function (){var statearr_24498 = state_24490;
(statearr_24498[(8)] = inst_24482);

return statearr_24498;
})();
var statearr_24499_24513 = state_24490__$1;
(statearr_24499_24513[(2)] = null);

(statearr_24499_24513[(1)] = (2));


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
});})(c__19515__auto___24507,ch))
;
return ((function (switch__19403__auto__,c__19515__auto___24507,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19404__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19404__auto____0 = (function (){
var statearr_24503 = [null,null,null,null,null,null,null,null,null];
(statearr_24503[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19404__auto__);

(statearr_24503[(1)] = (1));

return statearr_24503;
});
var figwheel$client$heads_up_plugin_$_state_machine__19404__auto____1 = (function (state_24490){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24504){if((e24504 instanceof Object)){
var ex__19407__auto__ = e24504;
var statearr_24505_24514 = state_24490;
(statearr_24505_24514[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24515 = state_24490;
state_24490 = G__24515;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19404__auto__ = function(state_24490){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19404__auto____1.call(this,state_24490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19404__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19404__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___24507,ch))
})();
var state__19517__auto__ = (function (){var statearr_24506 = f__19516__auto__.call(null);
(statearr_24506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___24507);

return statearr_24506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___24507,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_24536){
var state_val_24537 = (state_24536[(1)]);
if((state_val_24537 === (1))){
var inst_24531 = cljs.core.async.timeout.call(null,(3000));
var state_24536__$1 = state_24536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24536__$1,(2),inst_24531);
} else {
if((state_val_24537 === (2))){
var inst_24533 = (state_24536[(2)]);
var inst_24534 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24536__$1 = (function (){var statearr_24538 = state_24536;
(statearr_24538[(7)] = inst_24533);

return statearr_24538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24536__$1,inst_24534);
} else {
return null;
}
}
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____0 = (function (){
var statearr_24542 = [null,null,null,null,null,null,null,null];
(statearr_24542[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__);

(statearr_24542[(1)] = (1));

return statearr_24542;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____1 = (function (state_24536){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24543){if((e24543 instanceof Object)){
var ex__19407__auto__ = e24543;
var statearr_24544_24546 = state_24536;
(statearr_24544_24546[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24547 = state_24536;
state_24536 = G__24547;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__ = function(state_24536){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____1.call(this,state_24536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_24545 = f__19516__auto__.call(null);
(statearr_24545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_24545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24548){
var map__24555 = p__24548;
var map__24555__$1 = ((((!((map__24555 == null)))?((((map__24555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24555):map__24555);
var ed = map__24555__$1;
var formatted_exception = cljs.core.get.call(null,map__24555__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24555__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24555__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24557_24561 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24558_24562 = null;
var count__24559_24563 = (0);
var i__24560_24564 = (0);
while(true){
if((i__24560_24564 < count__24559_24563)){
var msg_24565 = cljs.core._nth.call(null,chunk__24558_24562,i__24560_24564);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24565);

var G__24566 = seq__24557_24561;
var G__24567 = chunk__24558_24562;
var G__24568 = count__24559_24563;
var G__24569 = (i__24560_24564 + (1));
seq__24557_24561 = G__24566;
chunk__24558_24562 = G__24567;
count__24559_24563 = G__24568;
i__24560_24564 = G__24569;
continue;
} else {
var temp__4425__auto___24570 = cljs.core.seq.call(null,seq__24557_24561);
if(temp__4425__auto___24570){
var seq__24557_24571__$1 = temp__4425__auto___24570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24557_24571__$1)){
var c__18151__auto___24572 = cljs.core.chunk_first.call(null,seq__24557_24571__$1);
var G__24573 = cljs.core.chunk_rest.call(null,seq__24557_24571__$1);
var G__24574 = c__18151__auto___24572;
var G__24575 = cljs.core.count.call(null,c__18151__auto___24572);
var G__24576 = (0);
seq__24557_24561 = G__24573;
chunk__24558_24562 = G__24574;
count__24559_24563 = G__24575;
i__24560_24564 = G__24576;
continue;
} else {
var msg_24577 = cljs.core.first.call(null,seq__24557_24571__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24577);

var G__24578 = cljs.core.next.call(null,seq__24557_24571__$1);
var G__24579 = null;
var G__24580 = (0);
var G__24581 = (0);
seq__24557_24561 = G__24578;
chunk__24558_24562 = G__24579;
count__24559_24563 = G__24580;
i__24560_24564 = G__24581;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24582){
var map__24585 = p__24582;
var map__24585__$1 = ((((!((map__24585 == null)))?((((map__24585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24585):map__24585);
var w = map__24585__$1;
var message = cljs.core.get.call(null,map__24585__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17336__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17336__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17336__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24593 = cljs.core.seq.call(null,plugins);
var chunk__24594 = null;
var count__24595 = (0);
var i__24596 = (0);
while(true){
if((i__24596 < count__24595)){
var vec__24597 = cljs.core._nth.call(null,chunk__24594,i__24596);
var k = cljs.core.nth.call(null,vec__24597,(0),null);
var plugin = cljs.core.nth.call(null,vec__24597,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24599 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24593,chunk__24594,count__24595,i__24596,pl_24599,vec__24597,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24599.call(null,msg_hist);
});})(seq__24593,chunk__24594,count__24595,i__24596,pl_24599,vec__24597,k,plugin))
);
} else {
}

var G__24600 = seq__24593;
var G__24601 = chunk__24594;
var G__24602 = count__24595;
var G__24603 = (i__24596 + (1));
seq__24593 = G__24600;
chunk__24594 = G__24601;
count__24595 = G__24602;
i__24596 = G__24603;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24593);
if(temp__4425__auto__){
var seq__24593__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24593__$1)){
var c__18151__auto__ = cljs.core.chunk_first.call(null,seq__24593__$1);
var G__24604 = cljs.core.chunk_rest.call(null,seq__24593__$1);
var G__24605 = c__18151__auto__;
var G__24606 = cljs.core.count.call(null,c__18151__auto__);
var G__24607 = (0);
seq__24593 = G__24604;
chunk__24594 = G__24605;
count__24595 = G__24606;
i__24596 = G__24607;
continue;
} else {
var vec__24598 = cljs.core.first.call(null,seq__24593__$1);
var k = cljs.core.nth.call(null,vec__24598,(0),null);
var plugin = cljs.core.nth.call(null,vec__24598,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24608 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24593,chunk__24594,count__24595,i__24596,pl_24608,vec__24598,k,plugin,seq__24593__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24608.call(null,msg_hist);
});})(seq__24593,chunk__24594,count__24595,i__24596,pl_24608,vec__24598,k,plugin,seq__24593__$1,temp__4425__auto__))
);
} else {
}

var G__24609 = cljs.core.next.call(null,seq__24593__$1);
var G__24610 = null;
var G__24611 = (0);
var G__24612 = (0);
seq__24593 = G__24609;
chunk__24594 = G__24610;
count__24595 = G__24611;
i__24596 = G__24612;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24613 = [];
var len__18406__auto___24616 = arguments.length;
var i__18407__auto___24617 = (0);
while(true){
if((i__18407__auto___24617 < len__18406__auto___24616)){
args24613.push((arguments[i__18407__auto___24617]));

var G__24618 = (i__18407__auto___24617 + (1));
i__18407__auto___24617 = G__24618;
continue;
} else {
}
break;
}

var G__24615 = args24613.length;
switch (G__24615) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24613.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__18413__auto__ = [];
var len__18406__auto___24624 = arguments.length;
var i__18407__auto___24625 = (0);
while(true){
if((i__18407__auto___24625 < len__18406__auto___24624)){
args__18413__auto__.push((arguments[i__18407__auto___24625]));

var G__24626 = (i__18407__auto___24625 + (1));
i__18407__auto___24625 = G__24626;
continue;
} else {
}
break;
}

var argseq__18414__auto__ = ((((0) < args__18413__auto__.length))?(new cljs.core.IndexedSeq(args__18413__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18414__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24621){
var map__24622 = p__24621;
var map__24622__$1 = ((((!((map__24622 == null)))?((((map__24622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24622):map__24622);
var opts = map__24622__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24620){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24620));
});

//# sourceMappingURL=client.js.map