gdjs.Q2Code = {};
gdjs.Q2Code.GDdark_95BGObjects1= [];
gdjs.Q2Code.GDdark_95BGObjects2= [];
gdjs.Q2Code.GDdark_95BGObjects3= [];
gdjs.Q2Code.GDdark_95BGObjects4= [];
gdjs.Q2Code.GDQ_95BGObjects1= [];
gdjs.Q2Code.GDQ_95BGObjects2= [];
gdjs.Q2Code.GDQ_95BGObjects3= [];
gdjs.Q2Code.GDQ_95BGObjects4= [];
gdjs.Q2Code.GDques_95BGObjects1= [];
gdjs.Q2Code.GDques_95BGObjects2= [];
gdjs.Q2Code.GDques_95BGObjects3= [];
gdjs.Q2Code.GDques_95BGObjects4= [];
gdjs.Q2Code.GDQ_95answerObjects1= [];
gdjs.Q2Code.GDQ_95answerObjects2= [];
gdjs.Q2Code.GDQ_95answerObjects3= [];
gdjs.Q2Code.GDQ_95answerObjects4= [];
gdjs.Q2Code.GDNewObjectObjects1= [];
gdjs.Q2Code.GDNewObjectObjects2= [];
gdjs.Q2Code.GDNewObjectObjects3= [];
gdjs.Q2Code.GDNewObjectObjects4= [];
gdjs.Q2Code.GDcoverObjects1= [];
gdjs.Q2Code.GDcoverObjects2= [];
gdjs.Q2Code.GDcoverObjects3= [];
gdjs.Q2Code.GDcoverObjects4= [];
gdjs.Q2Code.GDCorrectObjects1= [];
gdjs.Q2Code.GDCorrectObjects2= [];
gdjs.Q2Code.GDCorrectObjects3= [];
gdjs.Q2Code.GDCorrectObjects4= [];
gdjs.Q2Code.GDwrongObjects1= [];
gdjs.Q2Code.GDwrongObjects2= [];
gdjs.Q2Code.GDwrongObjects3= [];
gdjs.Q2Code.GDwrongObjects4= [];
gdjs.Q2Code.GDreplayObjects1= [];
gdjs.Q2Code.GDreplayObjects2= [];
gdjs.Q2Code.GDreplayObjects3= [];
gdjs.Q2Code.GDreplayObjects4= [];
gdjs.Q2Code.GDnextBTNObjects1= [];
gdjs.Q2Code.GDnextBTNObjects2= [];
gdjs.Q2Code.GDnextBTNObjects3= [];
gdjs.Q2Code.GDnextBTNObjects4= [];
gdjs.Q2Code.GDquiz1Objects1= [];
gdjs.Q2Code.GDquiz1Objects2= [];
gdjs.Q2Code.GDquiz1Objects3= [];
gdjs.Q2Code.GDquiz1Objects4= [];
gdjs.Q2Code.GDquestionObjects1= [];
gdjs.Q2Code.GDquestionObjects2= [];
gdjs.Q2Code.GDquestionObjects3= [];
gdjs.Q2Code.GDquestionObjects4= [];
gdjs.Q2Code.GDans1Objects1= [];
gdjs.Q2Code.GDans1Objects2= [];
gdjs.Q2Code.GDans1Objects3= [];
gdjs.Q2Code.GDans1Objects4= [];
gdjs.Q2Code.GDans2Objects1= [];
gdjs.Q2Code.GDans2Objects2= [];
gdjs.Q2Code.GDans2Objects3= [];
gdjs.Q2Code.GDans2Objects4= [];
gdjs.Q2Code.GDans3Objects1= [];
gdjs.Q2Code.GDans3Objects2= [];
gdjs.Q2Code.GDans3Objects3= [];
gdjs.Q2Code.GDans3Objects4= [];

gdjs.Q2Code.conditionTrue_0 = {val:false};
gdjs.Q2Code.condition0IsTrue_0 = {val:false};
gdjs.Q2Code.condition1IsTrue_0 = {val:false};
gdjs.Q2Code.condition2IsTrue_0 = {val:false};
gdjs.Q2Code.condition3IsTrue_0 = {val:false};
gdjs.Q2Code.condition4IsTrue_0 = {val:false};
gdjs.Q2Code.condition5IsTrue_0 = {val:false};
gdjs.Q2Code.conditionTrue_1 = {val:false};
gdjs.Q2Code.condition0IsTrue_1 = {val:false};
gdjs.Q2Code.condition1IsTrue_1 = {val:false};
gdjs.Q2Code.condition2IsTrue_1 = {val:false};
gdjs.Q2Code.condition3IsTrue_1 = {val:false};
gdjs.Q2Code.condition4IsTrue_1 = {val:false};
gdjs.Q2Code.condition5IsTrue_1 = {val:false};


gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q2Code.GDQ_95answerObjects2});gdjs.Q2Code.eventsList0x8e1cfc = function(runtimeScene) {

{

gdjs.Q2Code.GDQ_95answerObjects3.createFrom(gdjs.Q2Code.GDQ_95answerObjects2);


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q2Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q2Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q2Code.condition0IsTrue_0.val = true;
        gdjs.Q2Code.GDQ_95answerObjects3[k] = gdjs.Q2Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q2Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9314540);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q2Code.GDQ_95answerObjects3.createFrom(gdjs.Q2Code.GDQ_95answerObjects2);


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q2Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q2Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q2Code.condition0IsTrue_0.val = true;
        gdjs.Q2Code.GDQ_95answerObjects3[k] = gdjs.Q2Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q2Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9315660);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.Q2Code.GDQ_95answerObjects2 */

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q2Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q2Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q2Code.condition0IsTrue_0.val = true;
        gdjs.Q2Code.GDQ_95answerObjects2[k] = gdjs.Q2Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q2Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9316852);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q2Code.eventsList0x8e1cfc
gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q2Code.GDQ_95answerObjects2});gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q2Code.GDnextBTNObjects2});gdjs.Q2Code.eventsList0x8e2f74 = function(runtimeScene) {

{

/* Reuse gdjs.Q2Code.GDnextBTNObjects2 */

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9319748);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q2Code.eventsList0x8e2f74
gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q2Code.GDreplayObjects1});gdjs.Q2Code.eventsList0x8e3684 = function(runtimeScene) {

{

/* Reuse gdjs.Q2Code.GDreplayObjects1 */

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
gdjs.Q2Code.condition4IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q2Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q2Code.condition3IsTrue_0.val = true;
        gdjs.Q2Code.GDreplayObjects1[k] = gdjs.Q2Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q2Code.GDreplayObjects1.length = k;}if ( gdjs.Q2Code.condition3IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition4IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9321668);
}
}}
}
}
}
if (gdjs.Q2Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q2", false);
}{for(var i = 0, len = gdjs.Q2Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q2Code.eventsList0x8e3684
gdjs.Q2Code.eventsList0x8e1c1c = function(runtimeScene) {

{

gdjs.Q2Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Q2Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Q2Code.eventsList0x8e1cfc(runtimeScene);} //End of subevents
}

}


{

gdjs.Q2Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Q2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q2Code.condition1IsTrue_0.val) {
gdjs.Q2Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q2Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q2Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects2[i].setOpacity(gdjs.Q2Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q2Code.eventsList0x8e2f74(runtimeScene);} //End of subevents
}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q2Code.condition1IsTrue_0.val) {
gdjs.Q2Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q2Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q2Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects1[i].setOpacity(gdjs.Q2Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q2Code.eventsList0x8e3684(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q2Code.eventsList0x8e1c1c
gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q2Code.GDQ_95answerObjects2});gdjs.Q2Code.eventsList0x8e4014 = function(runtimeScene) {

{

gdjs.Q2Code.GDQ_95answerObjects3.createFrom(gdjs.Q2Code.GDQ_95answerObjects2);


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q2Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q2Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q2Code.condition0IsTrue_0.val = true;
        gdjs.Q2Code.GDQ_95answerObjects3[k] = gdjs.Q2Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q2Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9323372);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q2Code.GDQ_95answerObjects3.createFrom(gdjs.Q2Code.GDQ_95answerObjects2);


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q2Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q2Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q2Code.condition0IsTrue_0.val = true;
        gdjs.Q2Code.GDQ_95answerObjects3[k] = gdjs.Q2Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q2Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9324580);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}{gdjs.deviceVibration.startVibration(1);
}}

}


{

/* Reuse gdjs.Q2Code.GDQ_95answerObjects2 */

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q2Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q2Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q2Code.condition0IsTrue_0.val = true;
        gdjs.Q2Code.GDQ_95answerObjects2[k] = gdjs.Q2Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q2Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
gdjs.Q2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9325988);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.deviceVibration.startVibration(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q2Code.eventsList0x8e4014
gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q2Code.GDQ_95answerObjects2});gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q2Code.GDnextBTNObjects2});gdjs.Q2Code.eventsList0x8e52dc = function(runtimeScene) {

{

/* Reuse gdjs.Q2Code.GDnextBTNObjects2 */

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition2IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9328644);
}
}}
}
if (gdjs.Q2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q2Code.eventsList0x8e52dc
gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q2Code.GDreplayObjects1});gdjs.Q2Code.eventsList0x8e596c = function(runtimeScene) {

{

/* Reuse gdjs.Q2Code.GDreplayObjects1 */

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
gdjs.Q2Code.condition2IsTrue_0.val = false;
gdjs.Q2Code.condition3IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q2Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q2Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q2Code.condition2IsTrue_0.val = true;
        gdjs.Q2Code.GDreplayObjects1[k] = gdjs.Q2Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q2Code.GDreplayObjects1.length = k;}if ( gdjs.Q2Code.condition2IsTrue_0.val ) {
{
{gdjs.Q2Code.conditionTrue_1 = gdjs.Q2Code.condition3IsTrue_0;
gdjs.Q2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9330484);
}
}}
}
}
if (gdjs.Q2Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q2", false);
}{for(var i = 0, len = gdjs.Q2Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q2Code.eventsList0x8e596c
gdjs.Q2Code.eventsList0x8e3f0c = function(runtimeScene) {

{

gdjs.Q2Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if (gdjs.Q2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q2Code.eventsList0x8e4014(runtimeScene);} //End of subevents
}

}


{

gdjs.Q2Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if (gdjs.Q2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Q2Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q2Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q2Code.condition1IsTrue_0.val) {
gdjs.Q2Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q2Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q2Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects2[i].setOpacity(gdjs.Q2Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q2Code.eventsList0x8e52dc(runtimeScene);} //End of subevents
}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q2Code.condition1IsTrue_0.val) {
gdjs.Q2Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q2Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q2Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects1[i].setOpacity(gdjs.Q2Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q2Code.eventsList0x8e596c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q2Code.eventsList0x8e3f0c
gdjs.Q2Code.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q2Code.condition0IsTrue_0.val) {
gdjs.Q2Code.GDCorrectObjects1.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q2Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q2Code.GDnextBTNObjects1.createFrom(runtimeScene.getObjects("nextBTN"));
gdjs.Q2Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q2Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q2Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDCorrectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q2Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q2Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDreplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q2Code.GDnextBTNObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDnextBTNObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q2Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDcoverObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Q2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q2Code.eventsList0x8e1c1c(runtimeScene);} //End of subevents
}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Q2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q2Code.eventsList0x8e3f0c(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.Q2Code.eventsList0x5b6e18


gdjs.Q2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q2Code.GDdark_95BGObjects1.length = 0;
gdjs.Q2Code.GDdark_95BGObjects2.length = 0;
gdjs.Q2Code.GDdark_95BGObjects3.length = 0;
gdjs.Q2Code.GDdark_95BGObjects4.length = 0;
gdjs.Q2Code.GDQ_95BGObjects1.length = 0;
gdjs.Q2Code.GDQ_95BGObjects2.length = 0;
gdjs.Q2Code.GDQ_95BGObjects3.length = 0;
gdjs.Q2Code.GDQ_95BGObjects4.length = 0;
gdjs.Q2Code.GDques_95BGObjects1.length = 0;
gdjs.Q2Code.GDques_95BGObjects2.length = 0;
gdjs.Q2Code.GDques_95BGObjects3.length = 0;
gdjs.Q2Code.GDques_95BGObjects4.length = 0;
gdjs.Q2Code.GDQ_95answerObjects1.length = 0;
gdjs.Q2Code.GDQ_95answerObjects2.length = 0;
gdjs.Q2Code.GDQ_95answerObjects3.length = 0;
gdjs.Q2Code.GDQ_95answerObjects4.length = 0;
gdjs.Q2Code.GDNewObjectObjects1.length = 0;
gdjs.Q2Code.GDNewObjectObjects2.length = 0;
gdjs.Q2Code.GDNewObjectObjects3.length = 0;
gdjs.Q2Code.GDNewObjectObjects4.length = 0;
gdjs.Q2Code.GDcoverObjects1.length = 0;
gdjs.Q2Code.GDcoverObjects2.length = 0;
gdjs.Q2Code.GDcoverObjects3.length = 0;
gdjs.Q2Code.GDcoverObjects4.length = 0;
gdjs.Q2Code.GDCorrectObjects1.length = 0;
gdjs.Q2Code.GDCorrectObjects2.length = 0;
gdjs.Q2Code.GDCorrectObjects3.length = 0;
gdjs.Q2Code.GDCorrectObjects4.length = 0;
gdjs.Q2Code.GDwrongObjects1.length = 0;
gdjs.Q2Code.GDwrongObjects2.length = 0;
gdjs.Q2Code.GDwrongObjects3.length = 0;
gdjs.Q2Code.GDwrongObjects4.length = 0;
gdjs.Q2Code.GDreplayObjects1.length = 0;
gdjs.Q2Code.GDreplayObjects2.length = 0;
gdjs.Q2Code.GDreplayObjects3.length = 0;
gdjs.Q2Code.GDreplayObjects4.length = 0;
gdjs.Q2Code.GDnextBTNObjects1.length = 0;
gdjs.Q2Code.GDnextBTNObjects2.length = 0;
gdjs.Q2Code.GDnextBTNObjects3.length = 0;
gdjs.Q2Code.GDnextBTNObjects4.length = 0;
gdjs.Q2Code.GDquiz1Objects1.length = 0;
gdjs.Q2Code.GDquiz1Objects2.length = 0;
gdjs.Q2Code.GDquiz1Objects3.length = 0;
gdjs.Q2Code.GDquiz1Objects4.length = 0;
gdjs.Q2Code.GDquestionObjects1.length = 0;
gdjs.Q2Code.GDquestionObjects2.length = 0;
gdjs.Q2Code.GDquestionObjects3.length = 0;
gdjs.Q2Code.GDquestionObjects4.length = 0;
gdjs.Q2Code.GDans1Objects1.length = 0;
gdjs.Q2Code.GDans1Objects2.length = 0;
gdjs.Q2Code.GDans1Objects3.length = 0;
gdjs.Q2Code.GDans1Objects4.length = 0;
gdjs.Q2Code.GDans2Objects1.length = 0;
gdjs.Q2Code.GDans2Objects2.length = 0;
gdjs.Q2Code.GDans2Objects3.length = 0;
gdjs.Q2Code.GDans2Objects4.length = 0;
gdjs.Q2Code.GDans3Objects1.length = 0;
gdjs.Q2Code.GDans3Objects2.length = 0;
gdjs.Q2Code.GDans3Objects3.length = 0;
gdjs.Q2Code.GDans3Objects4.length = 0;

gdjs.Q2Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Q2Code'] = gdjs.Q2Code;
