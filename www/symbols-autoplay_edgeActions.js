
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_purple_btn}","click",function(sym,e){sym.getSymbol("purplerace_sym").play(0);sym.$("purple_btn").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_blue_btn}","click",function(sym,e){sym.getSymbol("bluerace_2deep_sym").getSymbol("bluerace_sym").play(0);sym.$("blue_btn").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_orange_btn}","click",function(sym,e){sym.getSymbol("orangerace_3deep_sym").getSymbol("orange1").getSymbol("orangerace_sym").play(0);sym.$("orange_btn").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_brown_btn}","click",function(sym,e){sym.getSymbol("brownrace_4deep_sym").getSymbol("brown1").getSymbol("brown2").getSymbol("brownrace_sym").play(0);sym.$("brown_btn").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_green_btn}","click",function(sym,e){sym.getSymbol("greenrace_5deep_sym").getSymbol("green1").getSymbol("green2").getSymbol("green3").getSymbol("greenrace_sym").play(0);sym.$("green_btn").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("restart_btn").css("text-shadow","1px 1px 1px #fff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_restart_btn}","click",function(sym,e){sym.getSymbol("purplerace_sym").stop(0);sym.getSymbol("orangerace_3deep_sym").getSymbol("orange1").getSymbol("orangerace_sym").stop(0);sym.getSymbol("greenrace_5deep_sym").getSymbol("green1").getSymbol("green2").getSymbol("green3").getSymbol("greenrace_sym").stop(0);sym.getSymbol("brownrace_4deep_sym").getSymbol("brown1").getSymbol("brown2").getSymbol("brownrace_sym").stop(0);sym.getSymbol("bluerace_2deep_sym").getSymbol("bluerace_sym").stop(0);sym.$("green_btn").show();sym.$("orange_btn").show();sym.$("brown_btn").show();sym.$("purple_btn").show();sym.$("blue_btn").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",164,function(sym,e){sym.play("walk");});
//Edge binding end
})("bluewalk_sym");
//Edge symbol end:'bluewalk_sym'

//=========================================================
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",164,function(sym,e){sym.play("walk");});
//Edge binding end
})("orangewalk_sym");
//Edge symbol end:'orangewalk_sym'

//=========================================================
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",164,function(sym,e){sym.play("walk");});
//Edge binding end
})("purplewalk_sym");
//Edge symbol end:'purplewalk_sym'

//=========================================================
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",164,function(sym,e){sym.play("walk");});
//Edge binding end
})("greenwalk_sym");
//Edge symbol end:'greenwalk_sym'

//=========================================================
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",164,function(sym,e){sym.play("walk");});
//Edge binding end
})("brownwalk_sym");
//Edge symbol end:'brownwalk_sym'

//=========================================================
(function(symbolName){})("purplerace_sym");
//Edge symbol end:'purplerace_sym'

//=========================================================
(function(symbolName){})("brownrace_sym");
//Edge symbol end:'brownrace_sym'

//=========================================================
(function(symbolName){})("greenrace_sym");
//Edge symbol end:'greenrace_sym'

//=========================================================
(function(symbolName){})("orangerace_sym");
//Edge symbol end:'orangerace_sym'

//=========================================================
(function(symbolName){})("bluerace_sym");
//Edge symbol end:'bluerace_sym'

//=========================================================
(function(symbolName){})("bluerace_2deep_sym");
//Edge symbol end:'bluerace_2deep_sym'

//=========================================================
(function(symbolName){})("orangerace_3deep_sym");
//Edge symbol end:'orangerace_3deep_sym'

//=========================================================
(function(symbolName){})("brownrace_4deep_sym");
//Edge symbol end:'brownrace_4deep_sym'

//=========================================================
(function(symbolName){})("greenrace_5deep_sym");
//Edge symbol end:'greenrace_5deep_sym'

//=========================================================

//Edge symbol: 'orange1'
(function(symbolName){})("orange1");
//Edge symbol end:'orange1'

//=========================================================

//Edge symbol: 'brown2'
(function(symbolName){})("brown2");
//Edge symbol end:'brown2'

//=========================================================

//Edge symbol: 'brown1'
(function(symbolName){})("brown1");
//Edge symbol end:'brown1'

//=========================================================

//Edge symbol: 'green3'
(function(symbolName){})("green3");
//Edge symbol end:'green3'

//=========================================================

//Edge symbol: 'green2'
(function(symbolName){})("green2");
//Edge symbol end:'green2'

//=========================================================

//Edge symbol: 'green1'
(function(symbolName){})("green1");
//Edge symbol end:'green1'

//=========================================================

//Edge symbol: 'cloud1_sym'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);});
//Edge binding end
})("cloud1_sym");
//Edge symbol end:'cloud1_sym'

//=========================================================

//Edge symbol: 'cloud2_sym'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);});
//Edge binding end
})("cloud2_sym");
//Edge symbol end:'cloud2_sym'
})(jQuery,AdobeEdge,"EDGE-202502612");