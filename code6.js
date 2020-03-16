gdjs.EndCode = {};
gdjs.EndCode.GDdark_95BGObjects1= [];
gdjs.EndCode.GDdark_95BGObjects2= [];
gdjs.EndCode.GDQ_95BGObjects1= [];
gdjs.EndCode.GDQ_95BGObjects2= [];
gdjs.EndCode.GDques_95BGObjects1= [];
gdjs.EndCode.GDques_95BGObjects2= [];
gdjs.EndCode.GDQ_95answerObjects1= [];
gdjs.EndCode.GDQ_95answerObjects2= [];
gdjs.EndCode.GDNewObjectObjects1= [];
gdjs.EndCode.GDNewObjectObjects2= [];
gdjs.EndCode.GDcoverObjects1= [];
gdjs.EndCode.GDcoverObjects2= [];
gdjs.EndCode.GDCorrectObjects1= [];
gdjs.EndCode.GDCorrectObjects2= [];
gdjs.EndCode.GDwrongObjects1= [];
gdjs.EndCode.GDwrongObjects2= [];
gdjs.EndCode.GDreplayObjects1= [];
gdjs.EndCode.GDreplayObjects2= [];
gdjs.EndCode.GDnextBTNObjects1= [];
gdjs.EndCode.GDnextBTNObjects2= [];
gdjs.EndCode.GDscoreObjects1= [];
gdjs.EndCode.GDscoreObjects2= [];
gdjs.EndCode.GDscoressObjects1= [];
gdjs.EndCode.GDscoressObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};
gdjs.EndCode.conditionTrue_1 = {val:false};
gdjs.EndCode.condition0IsTrue_1 = {val:false};
gdjs.EndCode.condition1IsTrue_1 = {val:false};
gdjs.EndCode.condition2IsTrue_1 = {val:false};


gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDnextBTNObjects1Objects = Hashtable.newFrom({"nextBTN": gdjs.EndCode.GDnextBTNObjects1});gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDnextBTNObjects1Objects = Hashtable.newFrom({"nextBTN": gdjs.EndCode.GDnextBTNObjects1});gdjs.EndCode.eventsList0x90166c = function(runtimeScene) {

{

gdjs.EndCode.GDnextBTNObjects1.createFrom(runtimeScene.getObjects("nextBTN"));

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDnextBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition1IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9443444);
}
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.EndCode.eventsList0x90166c
gdjs.EndCode.eventsList0x5b6e18 = function(runtimeScene) {

{


{
gdjs.EndCode.GDscoressObjects1.createFrom(runtimeScene.getObjects("scoress"));
{for(var i = 0, len = gdjs.EndCode.GDscoressObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDscoressObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.EndCode.GDnextBTNObjects1.createFrom(runtimeScene.getObjects("nextBTN"));

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDnextBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.EndCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EndCode.eventsList0x90166c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.EndCode.eventsList0x5b6e18


gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDdark_95BGObjects1.length = 0;
gdjs.EndCode.GDdark_95BGObjects2.length = 0;
gdjs.EndCode.GDQ_95BGObjects1.length = 0;
gdjs.EndCode.GDQ_95BGObjects2.length = 0;
gdjs.EndCode.GDques_95BGObjects1.length = 0;
gdjs.EndCode.GDques_95BGObjects2.length = 0;
gdjs.EndCode.GDQ_95answerObjects1.length = 0;
gdjs.EndCode.GDQ_95answerObjects2.length = 0;
gdjs.EndCode.GDNewObjectObjects1.length = 0;
gdjs.EndCode.GDNewObjectObjects2.length = 0;
gdjs.EndCode.GDcoverObjects1.length = 0;
gdjs.EndCode.GDcoverObjects2.length = 0;
gdjs.EndCode.GDCorrectObjects1.length = 0;
gdjs.EndCode.GDCorrectObjects2.length = 0;
gdjs.EndCode.GDwrongObjects1.length = 0;
gdjs.EndCode.GDwrongObjects2.length = 0;
gdjs.EndCode.GDreplayObjects1.length = 0;
gdjs.EndCode.GDreplayObjects2.length = 0;
gdjs.EndCode.GDnextBTNObjects1.length = 0;
gdjs.EndCode.GDnextBTNObjects2.length = 0;
gdjs.EndCode.GDscoreObjects1.length = 0;
gdjs.EndCode.GDscoreObjects2.length = 0;
gdjs.EndCode.GDscoressObjects1.length = 0;
gdjs.EndCode.GDscoressObjects2.length = 0;

gdjs.EndCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
