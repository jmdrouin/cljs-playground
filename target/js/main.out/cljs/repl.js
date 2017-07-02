// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10584){
var map__10609 = p__10584;
var map__10609__$1 = ((((!((map__10609 == null)))?((((map__10609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10609):map__10609);
var m = map__10609__$1;
var n = cljs.core.get.call(null,map__10609__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10609__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10611_10633 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10612_10634 = null;
var count__10613_10635 = (0);
var i__10614_10636 = (0);
while(true){
if((i__10614_10636 < count__10613_10635)){
var f_10637 = cljs.core._nth.call(null,chunk__10612_10634,i__10614_10636);
cljs.core.println.call(null,"  ",f_10637);

var G__10638 = seq__10611_10633;
var G__10639 = chunk__10612_10634;
var G__10640 = count__10613_10635;
var G__10641 = (i__10614_10636 + (1));
seq__10611_10633 = G__10638;
chunk__10612_10634 = G__10639;
count__10613_10635 = G__10640;
i__10614_10636 = G__10641;
continue;
} else {
var temp__4657__auto___10642 = cljs.core.seq.call(null,seq__10611_10633);
if(temp__4657__auto___10642){
var seq__10611_10643__$1 = temp__4657__auto___10642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10611_10643__$1)){
var c__7932__auto___10644 = cljs.core.chunk_first.call(null,seq__10611_10643__$1);
var G__10645 = cljs.core.chunk_rest.call(null,seq__10611_10643__$1);
var G__10646 = c__7932__auto___10644;
var G__10647 = cljs.core.count.call(null,c__7932__auto___10644);
var G__10648 = (0);
seq__10611_10633 = G__10645;
chunk__10612_10634 = G__10646;
count__10613_10635 = G__10647;
i__10614_10636 = G__10648;
continue;
} else {
var f_10649 = cljs.core.first.call(null,seq__10611_10643__$1);
cljs.core.println.call(null,"  ",f_10649);

var G__10650 = cljs.core.next.call(null,seq__10611_10643__$1);
var G__10651 = null;
var G__10652 = (0);
var G__10653 = (0);
seq__10611_10633 = G__10650;
chunk__10612_10634 = G__10651;
count__10613_10635 = G__10652;
i__10614_10636 = G__10653;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10654 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10654);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10654)))?cljs.core.second.call(null,arglists_10654):arglists_10654));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10615_10655 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10616_10656 = null;
var count__10617_10657 = (0);
var i__10618_10658 = (0);
while(true){
if((i__10618_10658 < count__10617_10657)){
var vec__10619_10659 = cljs.core._nth.call(null,chunk__10616_10656,i__10618_10658);
var name_10660 = cljs.core.nth.call(null,vec__10619_10659,(0),null);
var map__10622_10661 = cljs.core.nth.call(null,vec__10619_10659,(1),null);
var map__10622_10662__$1 = ((((!((map__10622_10661 == null)))?((((map__10622_10661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10622_10661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10622_10661):map__10622_10661);
var doc_10663 = cljs.core.get.call(null,map__10622_10662__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10664 = cljs.core.get.call(null,map__10622_10662__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10660);

cljs.core.println.call(null," ",arglists_10664);

if(cljs.core.truth_(doc_10663)){
cljs.core.println.call(null," ",doc_10663);
} else {
}

var G__10665 = seq__10615_10655;
var G__10666 = chunk__10616_10656;
var G__10667 = count__10617_10657;
var G__10668 = (i__10618_10658 + (1));
seq__10615_10655 = G__10665;
chunk__10616_10656 = G__10666;
count__10617_10657 = G__10667;
i__10618_10658 = G__10668;
continue;
} else {
var temp__4657__auto___10669 = cljs.core.seq.call(null,seq__10615_10655);
if(temp__4657__auto___10669){
var seq__10615_10670__$1 = temp__4657__auto___10669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10615_10670__$1)){
var c__7932__auto___10671 = cljs.core.chunk_first.call(null,seq__10615_10670__$1);
var G__10672 = cljs.core.chunk_rest.call(null,seq__10615_10670__$1);
var G__10673 = c__7932__auto___10671;
var G__10674 = cljs.core.count.call(null,c__7932__auto___10671);
var G__10675 = (0);
seq__10615_10655 = G__10672;
chunk__10616_10656 = G__10673;
count__10617_10657 = G__10674;
i__10618_10658 = G__10675;
continue;
} else {
var vec__10624_10676 = cljs.core.first.call(null,seq__10615_10670__$1);
var name_10677 = cljs.core.nth.call(null,vec__10624_10676,(0),null);
var map__10627_10678 = cljs.core.nth.call(null,vec__10624_10676,(1),null);
var map__10627_10679__$1 = ((((!((map__10627_10678 == null)))?((((map__10627_10678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10627_10678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10627_10678):map__10627_10678);
var doc_10680 = cljs.core.get.call(null,map__10627_10679__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10681 = cljs.core.get.call(null,map__10627_10679__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10677);

cljs.core.println.call(null," ",arglists_10681);

if(cljs.core.truth_(doc_10680)){
cljs.core.println.call(null," ",doc_10680);
} else {
}

var G__10682 = cljs.core.next.call(null,seq__10615_10670__$1);
var G__10683 = null;
var G__10684 = (0);
var G__10685 = (0);
seq__10615_10655 = G__10682;
chunk__10616_10656 = G__10683;
count__10617_10657 = G__10684;
i__10618_10658 = G__10685;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__10629 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10630 = null;
var count__10631 = (0);
var i__10632 = (0);
while(true){
if((i__10632 < count__10631)){
var role = cljs.core._nth.call(null,chunk__10630,i__10632);
var temp__4657__auto___10686__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10686__$1)){
var spec_10687 = temp__4657__auto___10686__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_10687));
} else {
}

var G__10688 = seq__10629;
var G__10689 = chunk__10630;
var G__10690 = count__10631;
var G__10691 = (i__10632 + (1));
seq__10629 = G__10688;
chunk__10630 = G__10689;
count__10631 = G__10690;
i__10632 = G__10691;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10629);
if(temp__4657__auto____$1){
var seq__10629__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10629__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__10629__$1);
var G__10692 = cljs.core.chunk_rest.call(null,seq__10629__$1);
var G__10693 = c__7932__auto__;
var G__10694 = cljs.core.count.call(null,c__7932__auto__);
var G__10695 = (0);
seq__10629 = G__10692;
chunk__10630 = G__10693;
count__10631 = G__10694;
i__10632 = G__10695;
continue;
} else {
var role = cljs.core.first.call(null,seq__10629__$1);
var temp__4657__auto___10696__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10696__$2)){
var spec_10697 = temp__4657__auto___10696__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_10697));
} else {
}

var G__10698 = cljs.core.next.call(null,seq__10629__$1);
var G__10699 = null;
var G__10700 = (0);
var G__10701 = (0);
seq__10629 = G__10698;
chunk__10630 = G__10699;
count__10631 = G__10700;
i__10632 = G__10701;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map