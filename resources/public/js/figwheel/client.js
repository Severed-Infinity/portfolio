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
var pred__55823 = cljs.core._EQ_;
var expr__55824 = (function (){var or__17191__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__55823.call(null,"true",expr__55824))){
return true;
} else {
if(cljs.core.truth_(pred__55823.call(null,"false",expr__55824))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__55824)].join('')));
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
var G__55826__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__55826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55827__i = 0, G__55827__a = new Array(arguments.length -  0);
while (G__55827__i < G__55827__a.length) {G__55827__a[G__55827__i] = arguments[G__55827__i + 0]; ++G__55827__i;}
  args = new cljs.core.IndexedSeq(G__55827__a,0);
} 
return G__55826__delegate.call(this,args);};
G__55826.cljs$lang$maxFixedArity = 0;
G__55826.cljs$lang$applyTo = (function (arglist__55828){
var args = cljs.core.seq(arglist__55828);
return G__55826__delegate(args);
});
G__55826.cljs$core$IFn$_invoke$arity$variadic = G__55826__delegate;
return G__55826;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__55829){
var map__55832 = p__55829;
var map__55832__$1 = ((((!((map__55832 == null)))?((((map__55832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55832):map__55832);
var message = cljs.core.get.call(null,map__55832__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__55832__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17191__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17179__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17179__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17179__auto__;
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
var c__19484__auto___55994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___55994,ch){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___55994,ch){
return (function (state_55963){
var state_val_55964 = (state_55963[(1)]);
if((state_val_55964 === (7))){
var inst_55959 = (state_55963[(2)]);
var state_55963__$1 = state_55963;
var statearr_55965_55995 = state_55963__$1;
(statearr_55965_55995[(2)] = inst_55959);

(statearr_55965_55995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (1))){
var state_55963__$1 = state_55963;
var statearr_55966_55996 = state_55963__$1;
(statearr_55966_55996[(2)] = null);

(statearr_55966_55996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (4))){
var inst_55916 = (state_55963[(7)]);
var inst_55916__$1 = (state_55963[(2)]);
var state_55963__$1 = (function (){var statearr_55967 = state_55963;
(statearr_55967[(7)] = inst_55916__$1);

return statearr_55967;
})();
if(cljs.core.truth_(inst_55916__$1)){
var statearr_55968_55997 = state_55963__$1;
(statearr_55968_55997[(1)] = (5));

} else {
var statearr_55969_55998 = state_55963__$1;
(statearr_55969_55998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (15))){
var inst_55923 = (state_55963[(8)]);
var inst_55938 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55923);
var inst_55939 = cljs.core.first.call(null,inst_55938);
var inst_55940 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55939);
var inst_55941 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_55940)].join('');
var inst_55942 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_55941);
var state_55963__$1 = state_55963;
var statearr_55970_55999 = state_55963__$1;
(statearr_55970_55999[(2)] = inst_55942);

(statearr_55970_55999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (13))){
var inst_55947 = (state_55963[(2)]);
var state_55963__$1 = state_55963;
var statearr_55971_56000 = state_55963__$1;
(statearr_55971_56000[(2)] = inst_55947);

(statearr_55971_56000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (6))){
var state_55963__$1 = state_55963;
var statearr_55972_56001 = state_55963__$1;
(statearr_55972_56001[(2)] = null);

(statearr_55972_56001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (17))){
var inst_55945 = (state_55963[(2)]);
var state_55963__$1 = state_55963;
var statearr_55973_56002 = state_55963__$1;
(statearr_55973_56002[(2)] = inst_55945);

(statearr_55973_56002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (3))){
var inst_55961 = (state_55963[(2)]);
var state_55963__$1 = state_55963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55963__$1,inst_55961);
} else {
if((state_val_55964 === (12))){
var inst_55922 = (state_55963[(9)]);
var inst_55936 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55922,opts);
var state_55963__$1 = state_55963;
if(cljs.core.truth_(inst_55936)){
var statearr_55974_56003 = state_55963__$1;
(statearr_55974_56003[(1)] = (15));

} else {
var statearr_55975_56004 = state_55963__$1;
(statearr_55975_56004[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (2))){
var state_55963__$1 = state_55963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55963__$1,(4),ch);
} else {
if((state_val_55964 === (11))){
var inst_55923 = (state_55963[(8)]);
var inst_55928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55929 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55923);
var inst_55930 = cljs.core.async.timeout.call(null,(1000));
var inst_55931 = [inst_55929,inst_55930];
var inst_55932 = (new cljs.core.PersistentVector(null,2,(5),inst_55928,inst_55931,null));
var state_55963__$1 = state_55963;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55963__$1,(14),inst_55932);
} else {
if((state_val_55964 === (9))){
var inst_55923 = (state_55963[(8)]);
var inst_55949 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_55950 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55923);
var inst_55951 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55950);
var inst_55952 = [cljs.core.str("Not loading: "),cljs.core.str(inst_55951)].join('');
var inst_55953 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_55952);
var state_55963__$1 = (function (){var statearr_55976 = state_55963;
(statearr_55976[(10)] = inst_55949);

return statearr_55976;
})();
var statearr_55977_56005 = state_55963__$1;
(statearr_55977_56005[(2)] = inst_55953);

(statearr_55977_56005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (5))){
var inst_55916 = (state_55963[(7)]);
var inst_55918 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55919 = (new cljs.core.PersistentArrayMap(null,2,inst_55918,null));
var inst_55920 = (new cljs.core.PersistentHashSet(null,inst_55919,null));
var inst_55921 = figwheel.client.focus_msgs.call(null,inst_55920,inst_55916);
var inst_55922 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55921);
var inst_55923 = cljs.core.first.call(null,inst_55921);
var inst_55924 = figwheel.client.autoload_QMARK_.call(null);
var state_55963__$1 = (function (){var statearr_55978 = state_55963;
(statearr_55978[(8)] = inst_55923);

(statearr_55978[(9)] = inst_55922);

return statearr_55978;
})();
if(cljs.core.truth_(inst_55924)){
var statearr_55979_56006 = state_55963__$1;
(statearr_55979_56006[(1)] = (8));

} else {
var statearr_55980_56007 = state_55963__$1;
(statearr_55980_56007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (14))){
var inst_55934 = (state_55963[(2)]);
var state_55963__$1 = state_55963;
var statearr_55981_56008 = state_55963__$1;
(statearr_55981_56008[(2)] = inst_55934);

(statearr_55981_56008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (16))){
var state_55963__$1 = state_55963;
var statearr_55982_56009 = state_55963__$1;
(statearr_55982_56009[(2)] = null);

(statearr_55982_56009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (10))){
var inst_55955 = (state_55963[(2)]);
var state_55963__$1 = (function (){var statearr_55983 = state_55963;
(statearr_55983[(11)] = inst_55955);

return statearr_55983;
})();
var statearr_55984_56010 = state_55963__$1;
(statearr_55984_56010[(2)] = null);

(statearr_55984_56010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55964 === (8))){
var inst_55922 = (state_55963[(9)]);
var inst_55926 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55922,opts);
var state_55963__$1 = state_55963;
if(cljs.core.truth_(inst_55926)){
var statearr_55985_56011 = state_55963__$1;
(statearr_55985_56011[(1)] = (11));

} else {
var statearr_55986_56012 = state_55963__$1;
(statearr_55986_56012[(1)] = (12));

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
});})(c__19484__auto___55994,ch))
;
return ((function (switch__19463__auto__,c__19484__auto___55994,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19464__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19464__auto____0 = (function (){
var statearr_55990 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55990[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19464__auto__);

(statearr_55990[(1)] = (1));

return statearr_55990;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19464__auto____1 = (function (state_55963){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_55963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e55991){if((e55991 instanceof Object)){
var ex__19467__auto__ = e55991;
var statearr_55992_56013 = state_55963;
(statearr_55992_56013[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56014 = state_55963;
state_55963 = G__56014;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19464__auto__ = function(state_55963){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19464__auto____1.call(this,state_55963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19464__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19464__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___55994,ch))
})();
var state__19486__auto__ = (function (){var statearr_55993 = f__19485__auto__.call(null);
(statearr_55993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___55994);

return statearr_55993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___55994,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__56015_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__56015_SHARP_));
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
var base_path_56022 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_56022){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_56020 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_56021 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_56020,_STAR_print_newline_STAR_56021,base_path_56022){
return (function() { 
var G__56023__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__56023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56024__i = 0, G__56024__a = new Array(arguments.length -  0);
while (G__56024__i < G__56024__a.length) {G__56024__a[G__56024__i] = arguments[G__56024__i + 0]; ++G__56024__i;}
  args = new cljs.core.IndexedSeq(G__56024__a,0);
} 
return G__56023__delegate.call(this,args);};
G__56023.cljs$lang$maxFixedArity = 0;
G__56023.cljs$lang$applyTo = (function (arglist__56025){
var args = cljs.core.seq(arglist__56025);
return G__56023__delegate(args);
});
G__56023.cljs$core$IFn$_invoke$arity$variadic = G__56023__delegate;
return G__56023;
})()
;})(_STAR_print_fn_STAR_56020,_STAR_print_newline_STAR_56021,base_path_56022))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_56021;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_56020;
}}catch (e56019){if((e56019 instanceof Error)){
var e = e56019;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_56022], null));
} else {
var e = e56019;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_56022))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__56026){
var map__56033 = p__56026;
var map__56033__$1 = ((((!((map__56033 == null)))?((((map__56033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56033):map__56033);
var opts = map__56033__$1;
var build_id = cljs.core.get.call(null,map__56033__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__56033,map__56033__$1,opts,build_id){
return (function (p__56035){
var vec__56036 = p__56035;
var map__56037 = cljs.core.nth.call(null,vec__56036,(0),null);
var map__56037__$1 = ((((!((map__56037 == null)))?((((map__56037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56037):map__56037);
var msg = map__56037__$1;
var msg_name = cljs.core.get.call(null,map__56037__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__56036,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__56036,map__56037,map__56037__$1,msg,msg_name,_,map__56033,map__56033__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__56036,map__56037,map__56037__$1,msg,msg_name,_,map__56033,map__56033__$1,opts,build_id))
);
} else {
return null;
}
});
})(map__56033, map__56033__$1, opts, build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56043){
var vec__56044 = p__56043;
var map__56045 = cljs.core.nth.call(null,vec__56044,(0),null);
var map__56045__$1 = ((((!((map__56045 == null)))?((((map__56045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56045):map__56045);
var msg = map__56045__$1;
var msg_name = cljs.core.get.call(null,map__56045__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__56044,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56047){
var map__56057 = p__56047;
var map__56057__$1 = ((((!((map__56057 == null)))?((((map__56057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56057):map__56057);
var on_compile_warning = cljs.core.get.call(null,map__56057__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56057__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56057,map__56057__$1,on_compile_warning,on_compile_fail){
return (function (p__56059){
var vec__56060 = p__56059;
var map__56061 = cljs.core.nth.call(null,vec__56060,(0),null);
var map__56061__$1 = ((((!((map__56061 == null)))?((((map__56061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56061):map__56061);
var msg = map__56061__$1;
var msg_name = cljs.core.get.call(null,map__56061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__56060,(1));
var pred__56063 = cljs.core._EQ_;
var expr__56064 = msg_name;
if(cljs.core.truth_(pred__56063.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56064))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56063.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56064))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
})(map__56057, map__56057__$1, on_compile_warning, on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__,msg_hist,msg_names,msg){
return (function (state_56280){
var state_val_56281 = (state_56280[(1)]);
if((state_val_56281 === (7))){
var inst_56204 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56204)){
var statearr_56282_56328 = state_56280__$1;
(statearr_56282_56328[(1)] = (8));

} else {
var statearr_56283_56329 = state_56280__$1;
(statearr_56283_56329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (20))){
var inst_56274 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56284_56330 = state_56280__$1;
(statearr_56284_56330[(2)] = inst_56274);

(statearr_56284_56330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (27))){
var inst_56270 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56285_56331 = state_56280__$1;
(statearr_56285_56331[(2)] = inst_56270);

(statearr_56285_56331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (1))){
var inst_56197 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56197)){
var statearr_56286_56332 = state_56280__$1;
(statearr_56286_56332[(1)] = (2));

} else {
var statearr_56287_56333 = state_56280__$1;
(statearr_56287_56333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (24))){
var inst_56272 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56288_56334 = state_56280__$1;
(statearr_56288_56334[(2)] = inst_56272);

(statearr_56288_56334[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (4))){
var inst_56278 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56280__$1,inst_56278);
} else {
if((state_val_56281 === (15))){
var inst_56276 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56289_56335 = state_56280__$1;
(statearr_56289_56335[(2)] = inst_56276);

(statearr_56289_56335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (21))){
var inst_56235 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56290_56336 = state_56280__$1;
(statearr_56290_56336[(2)] = inst_56235);

(statearr_56290_56336[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (31))){
var inst_56259 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56259)){
var statearr_56291_56337 = state_56280__$1;
(statearr_56291_56337[(1)] = (34));

} else {
var statearr_56292_56338 = state_56280__$1;
(statearr_56292_56338[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (32))){
var inst_56268 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56293_56339 = state_56280__$1;
(statearr_56293_56339[(2)] = inst_56268);

(statearr_56293_56339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (33))){
var inst_56257 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56294_56340 = state_56280__$1;
(statearr_56294_56340[(2)] = inst_56257);

(statearr_56294_56340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (13))){
var inst_56218 = figwheel.client.heads_up.clear.call(null);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(16),inst_56218);
} else {
if((state_val_56281 === (22))){
var inst_56239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56240 = figwheel.client.heads_up.append_message.call(null,inst_56239);
var state_56280__$1 = state_56280;
var statearr_56295_56341 = state_56280__$1;
(statearr_56295_56341[(2)] = inst_56240);

(statearr_56295_56341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (36))){
var inst_56266 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56296_56342 = state_56280__$1;
(statearr_56296_56342[(2)] = inst_56266);

(statearr_56296_56342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (29))){
var inst_56250 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56297_56343 = state_56280__$1;
(statearr_56297_56343[(2)] = inst_56250);

(statearr_56297_56343[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (6))){
var inst_56199 = (state_56280[(7)]);
var state_56280__$1 = state_56280;
var statearr_56298_56344 = state_56280__$1;
(statearr_56298_56344[(2)] = inst_56199);

(statearr_56298_56344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (28))){
var inst_56246 = (state_56280[(2)]);
var inst_56247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56248 = figwheel.client.heads_up.display_warning.call(null,inst_56247);
var state_56280__$1 = (function (){var statearr_56299 = state_56280;
(statearr_56299[(8)] = inst_56246);

return statearr_56299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(29),inst_56248);
} else {
if((state_val_56281 === (25))){
var inst_56244 = figwheel.client.heads_up.clear.call(null);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(28),inst_56244);
} else {
if((state_val_56281 === (34))){
var inst_56261 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(37),inst_56261);
} else {
if((state_val_56281 === (17))){
var inst_56226 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56300_56345 = state_56280__$1;
(statearr_56300_56345[(2)] = inst_56226);

(statearr_56300_56345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (3))){
var inst_56216 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56216)){
var statearr_56301_56346 = state_56280__$1;
(statearr_56301_56346[(1)] = (13));

} else {
var statearr_56302_56347 = state_56280__$1;
(statearr_56302_56347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (12))){
var inst_56212 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56303_56348 = state_56280__$1;
(statearr_56303_56348[(2)] = inst_56212);

(statearr_56303_56348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (2))){
var inst_56199 = (state_56280[(7)]);
var inst_56199__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56280__$1 = (function (){var statearr_56304 = state_56280;
(statearr_56304[(7)] = inst_56199__$1);

return statearr_56304;
})();
if(cljs.core.truth_(inst_56199__$1)){
var statearr_56305_56349 = state_56280__$1;
(statearr_56305_56349[(1)] = (5));

} else {
var statearr_56306_56350 = state_56280__$1;
(statearr_56306_56350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (23))){
var inst_56242 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56242)){
var statearr_56307_56351 = state_56280__$1;
(statearr_56307_56351[(1)] = (25));

} else {
var statearr_56308_56352 = state_56280__$1;
(statearr_56308_56352[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (35))){
var state_56280__$1 = state_56280;
var statearr_56309_56353 = state_56280__$1;
(statearr_56309_56353[(2)] = null);

(statearr_56309_56353[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (19))){
var inst_56237 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56237)){
var statearr_56310_56354 = state_56280__$1;
(statearr_56310_56354[(1)] = (22));

} else {
var statearr_56311_56355 = state_56280__$1;
(statearr_56311_56355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (11))){
var inst_56208 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56312_56356 = state_56280__$1;
(statearr_56312_56356[(2)] = inst_56208);

(statearr_56312_56356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (9))){
var inst_56210 = figwheel.client.heads_up.clear.call(null);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(12),inst_56210);
} else {
if((state_val_56281 === (5))){
var inst_56201 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56280__$1 = state_56280;
var statearr_56313_56357 = state_56280__$1;
(statearr_56313_56357[(2)] = inst_56201);

(statearr_56313_56357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (14))){
var inst_56228 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56228)){
var statearr_56314_56358 = state_56280__$1;
(statearr_56314_56358[(1)] = (18));

} else {
var statearr_56315_56359 = state_56280__$1;
(statearr_56315_56359[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (26))){
var inst_56252 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56280__$1 = state_56280;
if(cljs.core.truth_(inst_56252)){
var statearr_56316_56360 = state_56280__$1;
(statearr_56316_56360[(1)] = (30));

} else {
var statearr_56317_56361 = state_56280__$1;
(statearr_56317_56361[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (16))){
var inst_56220 = (state_56280[(2)]);
var inst_56221 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56222 = figwheel.client.format_messages.call(null,inst_56221);
var inst_56223 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56224 = figwheel.client.heads_up.display_error.call(null,inst_56222,inst_56223);
var state_56280__$1 = (function (){var statearr_56318 = state_56280;
(statearr_56318[(9)] = inst_56220);

return statearr_56318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(17),inst_56224);
} else {
if((state_val_56281 === (30))){
var inst_56254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56255 = figwheel.client.heads_up.display_warning.call(null,inst_56254);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(33),inst_56255);
} else {
if((state_val_56281 === (10))){
var inst_56214 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56319_56362 = state_56280__$1;
(statearr_56319_56362[(2)] = inst_56214);

(statearr_56319_56362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (18))){
var inst_56230 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56231 = figwheel.client.format_messages.call(null,inst_56230);
var inst_56232 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56233 = figwheel.client.heads_up.display_error.call(null,inst_56231,inst_56232);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(21),inst_56233);
} else {
if((state_val_56281 === (37))){
var inst_56263 = (state_56280[(2)]);
var state_56280__$1 = state_56280;
var statearr_56320_56363 = state_56280__$1;
(statearr_56320_56363[(2)] = inst_56263);

(statearr_56320_56363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56281 === (8))){
var inst_56206 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56280__$1 = state_56280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56280__$1,(11),inst_56206);
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
});})(c__19484__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19463__auto__,c__19484__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto____0 = (function (){
var statearr_56324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56324[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto__);

(statearr_56324[(1)] = (1));

return statearr_56324;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto____1 = (function (state_56280){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_56280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e56325){if((e56325 instanceof Object)){
var ex__19467__auto__ = e56325;
var statearr_56326_56364 = state_56280;
(statearr_56326_56364[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56365 = state_56280;
state_56280 = G__56365;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto__ = function(state_56280){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto____1.call(this,state_56280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__,msg_hist,msg_names,msg))
})();
var state__19486__auto__ = (function (){var statearr_56327 = f__19485__auto__.call(null);
(statearr_56327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_56327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__,msg_hist,msg_names,msg))
);

return c__19484__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19484__auto___56428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto___56428,ch){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto___56428,ch){
return (function (state_56411){
var state_val_56412 = (state_56411[(1)]);
if((state_val_56412 === (1))){
var state_56411__$1 = state_56411;
var statearr_56413_56429 = state_56411__$1;
(statearr_56413_56429[(2)] = null);

(statearr_56413_56429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (2))){
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56411__$1,(4),ch);
} else {
if((state_val_56412 === (3))){
var inst_56409 = (state_56411[(2)]);
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56411__$1,inst_56409);
} else {
if((state_val_56412 === (4))){
var inst_56399 = (state_56411[(7)]);
var inst_56399__$1 = (state_56411[(2)]);
var state_56411__$1 = (function (){var statearr_56414 = state_56411;
(statearr_56414[(7)] = inst_56399__$1);

return statearr_56414;
})();
if(cljs.core.truth_(inst_56399__$1)){
var statearr_56415_56430 = state_56411__$1;
(statearr_56415_56430[(1)] = (5));

} else {
var statearr_56416_56431 = state_56411__$1;
(statearr_56416_56431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (5))){
var inst_56399 = (state_56411[(7)]);
var inst_56401 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56399);
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56411__$1,(8),inst_56401);
} else {
if((state_val_56412 === (6))){
var state_56411__$1 = state_56411;
var statearr_56417_56432 = state_56411__$1;
(statearr_56417_56432[(2)] = null);

(statearr_56417_56432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (7))){
var inst_56407 = (state_56411[(2)]);
var state_56411__$1 = state_56411;
var statearr_56418_56433 = state_56411__$1;
(statearr_56418_56433[(2)] = inst_56407);

(statearr_56418_56433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (8))){
var inst_56403 = (state_56411[(2)]);
var state_56411__$1 = (function (){var statearr_56419 = state_56411;
(statearr_56419[(8)] = inst_56403);

return statearr_56419;
})();
var statearr_56420_56434 = state_56411__$1;
(statearr_56420_56434[(2)] = null);

(statearr_56420_56434[(1)] = (2));


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
});})(c__19484__auto___56428,ch))
;
return ((function (switch__19463__auto__,c__19484__auto___56428,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19464__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19464__auto____0 = (function (){
var statearr_56424 = [null,null,null,null,null,null,null,null,null];
(statearr_56424[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19464__auto__);

(statearr_56424[(1)] = (1));

return statearr_56424;
});
var figwheel$client$heads_up_plugin_$_state_machine__19464__auto____1 = (function (state_56411){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_56411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e56425){if((e56425 instanceof Object)){
var ex__19467__auto__ = e56425;
var statearr_56426_56435 = state_56411;
(statearr_56426_56435[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56436 = state_56411;
state_56411 = G__56436;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19464__auto__ = function(state_56411){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19464__auto____1.call(this,state_56411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19464__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19464__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto___56428,ch))
})();
var state__19486__auto__ = (function (){var statearr_56427 = f__19485__auto__.call(null);
(statearr_56427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto___56428);

return statearr_56427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto___56428,ch))
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
var c__19484__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19484__auto__){
return (function (){
var f__19485__auto__ = (function (){var switch__19463__auto__ = ((function (c__19484__auto__){
return (function (state_56457){
var state_val_56458 = (state_56457[(1)]);
if((state_val_56458 === (1))){
var inst_56452 = cljs.core.async.timeout.call(null,(3000));
var state_56457__$1 = state_56457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56457__$1,(2),inst_56452);
} else {
if((state_val_56458 === (2))){
var inst_56454 = (state_56457[(2)]);
var inst_56455 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56457__$1 = (function (){var statearr_56459 = state_56457;
(statearr_56459[(7)] = inst_56454);

return statearr_56459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56457__$1,inst_56455);
} else {
return null;
}
}
});})(c__19484__auto__))
;
return ((function (switch__19463__auto__,c__19484__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19464__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19464__auto____0 = (function (){
var statearr_56463 = [null,null,null,null,null,null,null,null];
(statearr_56463[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19464__auto__);

(statearr_56463[(1)] = (1));

return statearr_56463;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19464__auto____1 = (function (state_56457){
while(true){
var ret_value__19465__auto__ = (function (){try{while(true){
var result__19466__auto__ = switch__19463__auto__.call(null,state_56457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19466__auto__;
}
break;
}
}catch (e56464){if((e56464 instanceof Object)){
var ex__19467__auto__ = e56464;
var statearr_56465_56467 = state_56457;
(statearr_56465_56467[(5)] = ex__19467__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56468 = state_56457;
state_56457 = G__56468;
continue;
} else {
return ret_value__19465__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19464__auto__ = function(state_56457){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19464__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19464__auto____1.call(this,state_56457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19464__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19464__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19464__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19464__auto__;
})()
;})(switch__19463__auto__,c__19484__auto__))
})();
var state__19486__auto__ = (function (){var statearr_56466 = f__19485__auto__.call(null);
(statearr_56466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19484__auto__);

return statearr_56466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19486__auto__);
});})(c__19484__auto__))
);

return c__19484__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__56469){
var map__56476 = p__56469;
var map__56476__$1 = ((((!((map__56476 == null)))?((((map__56476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56476):map__56476);
var ed = map__56476__$1;
var formatted_exception = cljs.core.get.call(null,map__56476__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__56476__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__56476__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__56478_56482 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__56479_56483 = null;
var count__56480_56484 = (0);
var i__56481_56485 = (0);
while(true){
if((i__56481_56485 < count__56480_56484)){
var msg_56486 = cljs.core._nth.call(null,chunk__56479_56483,i__56481_56485);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56486);

var G__56487 = seq__56478_56482;
var G__56488 = chunk__56479_56483;
var G__56489 = count__56480_56484;
var G__56490 = (i__56481_56485 + (1));
seq__56478_56482 = G__56487;
chunk__56479_56483 = G__56488;
count__56480_56484 = G__56489;
i__56481_56485 = G__56490;
continue;
} else {
var temp__4425__auto___56491 = cljs.core.seq.call(null,seq__56478_56482);
if(temp__4425__auto___56491){
var seq__56478_56492__$1 = temp__4425__auto___56491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56478_56492__$1)){
var c__17994__auto___56493 = cljs.core.chunk_first.call(null,seq__56478_56492__$1);
var G__56494 = cljs.core.chunk_rest.call(null,seq__56478_56492__$1);
var G__56495 = c__17994__auto___56493;
var G__56496 = cljs.core.count.call(null,c__17994__auto___56493);
var G__56497 = (0);
seq__56478_56482 = G__56494;
chunk__56479_56483 = G__56495;
count__56480_56484 = G__56496;
i__56481_56485 = G__56497;
continue;
} else {
var msg_56498 = cljs.core.first.call(null,seq__56478_56492__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56498);

var G__56499 = cljs.core.next.call(null,seq__56478_56492__$1);
var G__56500 = null;
var G__56501 = (0);
var G__56502 = (0);
seq__56478_56482 = G__56499;
chunk__56479_56483 = G__56500;
count__56480_56484 = G__56501;
i__56481_56485 = G__56502;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__56503){
var map__56506 = p__56503;
var map__56506__$1 = ((((!((map__56506 == null)))?((((map__56506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56506):map__56506);
var w = map__56506__$1;
var message = cljs.core.get.call(null,map__56506__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__17179__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17179__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17179__auto__;
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
var seq__56514 = cljs.core.seq.call(null,plugins);
var chunk__56515 = null;
var count__56516 = (0);
var i__56517 = (0);
while(true){
if((i__56517 < count__56516)){
var vec__56518 = cljs.core._nth.call(null,chunk__56515,i__56517);
var k = cljs.core.nth.call(null,vec__56518,(0),null);
var plugin = cljs.core.nth.call(null,vec__56518,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56520 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56514,chunk__56515,count__56516,i__56517,pl_56520,vec__56518,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_56520.call(null,msg_hist);
});})(seq__56514,chunk__56515,count__56516,i__56517,pl_56520,vec__56518,k,plugin))
);
} else {
}

var G__56521 = seq__56514;
var G__56522 = chunk__56515;
var G__56523 = count__56516;
var G__56524 = (i__56517 + (1));
seq__56514 = G__56521;
chunk__56515 = G__56522;
count__56516 = G__56523;
i__56517 = G__56524;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__56514);
if(temp__4425__auto__){
var seq__56514__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56514__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__56514__$1);
var G__56525 = cljs.core.chunk_rest.call(null,seq__56514__$1);
var G__56526 = c__17994__auto__;
var G__56527 = cljs.core.count.call(null,c__17994__auto__);
var G__56528 = (0);
seq__56514 = G__56525;
chunk__56515 = G__56526;
count__56516 = G__56527;
i__56517 = G__56528;
continue;
} else {
var vec__56519 = cljs.core.first.call(null,seq__56514__$1);
var k = cljs.core.nth.call(null,vec__56519,(0),null);
var plugin = cljs.core.nth.call(null,vec__56519,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56529 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56514,chunk__56515,count__56516,i__56517,pl_56529,vec__56519,k,plugin,seq__56514__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_56529.call(null,msg_hist);
});})(seq__56514,chunk__56515,count__56516,i__56517,pl_56529,vec__56519,k,plugin,seq__56514__$1,temp__4425__auto__))
);
} else {
}

var G__56530 = cljs.core.next.call(null,seq__56514__$1);
var G__56531 = null;
var G__56532 = (0);
var G__56533 = (0);
seq__56514 = G__56530;
chunk__56515 = G__56531;
count__56516 = G__56532;
i__56517 = G__56533;
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
var args56534 = [];
var len__18249__auto___56537 = arguments.length;
var i__18250__auto___56538 = (0);
while(true){
if((i__18250__auto___56538 < len__18249__auto___56537)){
args56534.push((arguments[i__18250__auto___56538]));

var G__56539 = (i__18250__auto___56538 + (1));
i__18250__auto___56538 = G__56539;
continue;
} else {
}
break;
}

var G__56536 = args56534.length;
switch (G__56536) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56534.length)].join('')));

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
var args__18256__auto__ = [];
var len__18249__auto___56545 = arguments.length;
var i__18250__auto___56546 = (0);
while(true){
if((i__18250__auto___56546 < len__18249__auto___56545)){
args__18256__auto__.push((arguments[i__18250__auto___56546]));

var G__56547 = (i__18250__auto___56546 + (1));
i__18250__auto___56546 = G__56547;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((0) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18257__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__56542){
var map__56543 = p__56542;
var map__56543__$1 = ((((!((map__56543 == null)))?((((map__56543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56543):map__56543);
var opts = map__56543__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq56541){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56541));
});

//# sourceMappingURL=client.js.map