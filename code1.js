gdjs.Q1Code = {};
gdjs.Q1Code.GDdark_95BGObjects1= [];
gdjs.Q1Code.GDdark_95BGObjects2= [];
gdjs.Q1Code.GDdark_95BGObjects3= [];
gdjs.Q1Code.GDdark_95BGObjects4= [];
gdjs.Q1Code.GDQ_95BGObjects1= [];
gdjs.Q1Code.GDQ_95BGObjects2= [];
gdjs.Q1Code.GDQ_95BGObjects3= [];
gdjs.Q1Code.GDQ_95BGObjects4= [];
gdjs.Q1Code.GDques_95BGObjects1= [];
gdjs.Q1Code.GDques_95BGObjects2= [];
gdjs.Q1Code.GDques_95BGObjects3= [];
gdjs.Q1Code.GDques_95BGObjects4= [];
gdjs.Q1Code.GDQ_95answerObjects1= [];
gdjs.Q1Code.GDQ_95answerObjects2= [];
gdjs.Q1Code.GDQ_95answerObjects3= [];
gdjs.Q1Code.GDQ_95answerObjects4= [];
gdjs.Q1Code.GDNewObjectObjects1= [];
gdjs.Q1Code.GDNewObjectObjects2= [];
gdjs.Q1Code.GDNewObjectObjects3= [];
gdjs.Q1Code.GDNewObjectObjects4= [];
gdjs.Q1Code.GDcoverObjects1= [];
gdjs.Q1Code.GDcoverObjects2= [];
gdjs.Q1Code.GDcoverObjects3= [];
gdjs.Q1Code.GDcoverObjects4= [];
gdjs.Q1Code.GDCorrectObjects1= [];
gdjs.Q1Code.GDCorrectObjects2= [];
gdjs.Q1Code.GDCorrectObjects3= [];
gdjs.Q1Code.GDCorrectObjects4= [];
gdjs.Q1Code.GDwrongObjects1= [];
gdjs.Q1Code.GDwrongObjects2= [];
gdjs.Q1Code.GDwrongObjects3= [];
gdjs.Q1Code.GDwrongObjects4= [];
gdjs.Q1Code.GDreplayObjects1= [];
gdjs.Q1Code.GDreplayObjects2= [];
gdjs.Q1Code.GDreplayObjects3= [];
gdjs.Q1Code.GDreplayObjects4= [];
gdjs.Q1Code.GDnextBTNObjects1= [];
gdjs.Q1Code.GDnextBTNObjects2= [];
gdjs.Q1Code.GDnextBTNObjects3= [];
gdjs.Q1Code.GDnextBTNObjects4= [];
gdjs.Q1Code.GDquestionObjects1= [];
gdjs.Q1Code.GDquestionObjects2= [];
gdjs.Q1Code.GDquestionObjects3= [];
gdjs.Q1Code.GDquestionObjects4= [];
gdjs.Q1Code.GDtopicObjects1= [];
gdjs.Q1Code.GDtopicObjects2= [];
gdjs.Q1Code.GDtopicObjects3= [];
gdjs.Q1Code.GDtopicObjects4= [];
gdjs.Q1Code.GDans3Objects1= [];
gdjs.Q1Code.GDans3Objects2= [];
gdjs.Q1Code.GDans3Objects3= [];
gdjs.Q1Code.GDans3Objects4= [];
gdjs.Q1Code.GDans2Objects1= [];
gdjs.Q1Code.GDans2Objects2= [];
gdjs.Q1Code.GDans2Objects3= [];
gdjs.Q1Code.GDans2Objects4= [];
gdjs.Q1Code.GDans1Objects1= [];
gdjs.Q1Code.GDans1Objects2= [];
gdjs.Q1Code.GDans1Objects3= [];
gdjs.Q1Code.GDans1Objects4= [];

gdjs.Q1Code.conditionTrue_0 = {val:false};
gdjs.Q1Code.condition0IsTrue_0 = {val:false};
gdjs.Q1Code.condition1IsTrue_0 = {val:false};
gdjs.Q1Code.condition2IsTrue_0 = {val:false};
gdjs.Q1Code.condition3IsTrue_0 = {val:false};
gdjs.Q1Code.condition4IsTrue_0 = {val:false};
gdjs.Q1Code.condition5IsTrue_0 = {val:false};
gdjs.Q1Code.conditionTrue_1 = {val:false};
gdjs.Q1Code.condition0IsTrue_1 = {val:false};
gdjs.Q1Code.condition1IsTrue_1 = {val:false};
gdjs.Q1Code.condition2IsTrue_1 = {val:false};
gdjs.Q1Code.condition3IsTrue_1 = {val:false};
gdjs.Q1Code.condition4IsTrue_1 = {val:false};
gdjs.Q1Code.condition5IsTrue_1 = {val:false};


gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q1Code.GDQ_95answerObjects2});gdjs.Q1Code.eventsList0x8d94fc = function(runtimeScene) {

{

gdjs.Q1Code.GDQ_95answerObjects3.createFrom(gdjs.Q1Code.GDQ_95answerObjects2);


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q1Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q1Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q1Code.condition0IsTrue_0.val = true;
        gdjs.Q1Code.GDQ_95answerObjects3[k] = gdjs.Q1Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q1Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9279724);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q1Code.GDQ_95answerObjects3.createFrom(gdjs.Q1Code.GDQ_95answerObjects2);


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q1Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q1Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q1Code.condition0IsTrue_0.val = true;
        gdjs.Q1Code.GDQ_95answerObjects3[k] = gdjs.Q1Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q1Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9280844);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.Q1Code.GDQ_95answerObjects2 */

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q1Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q1Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q1Code.condition0IsTrue_0.val = true;
        gdjs.Q1Code.GDQ_95answerObjects2[k] = gdjs.Q1Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q1Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9282036);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q1Code.eventsList0x8d94fc
gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q1Code.GDQ_95answerObjects2});gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q1Code.GDnextBTNObjects2});gdjs.Q1Code.eventsList0x8da774 = function(runtimeScene) {

{

/* Reuse gdjs.Q1Code.GDnextBTNObjects2 */

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9284932);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q1Code.eventsList0x8da774
gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q1Code.GDreplayObjects1});gdjs.Q1Code.eventsList0x8dae84 = function(runtimeScene) {

{

/* Reuse gdjs.Q1Code.GDreplayObjects1 */

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
gdjs.Q1Code.condition4IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q1Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q1Code.condition3IsTrue_0.val = true;
        gdjs.Q1Code.GDreplayObjects1[k] = gdjs.Q1Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q1Code.GDreplayObjects1.length = k;}if ( gdjs.Q1Code.condition3IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition4IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9286852);
}
}}
}
}
}
if (gdjs.Q1Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q1", false);
}{for(var i = 0, len = gdjs.Q1Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q1Code.eventsList0x8dae84
gdjs.Q1Code.eventsList0x8d941c = function(runtimeScene) {

{

gdjs.Q1Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Q1Code.eventsList0x8d94fc(runtimeScene);} //End of subevents
}

}


{

gdjs.Q1Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {
gdjs.Q1Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q1Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q1Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects2[i].setOpacity(gdjs.Q1Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q1Code.eventsList0x8da774(runtimeScene);} //End of subevents
}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {
gdjs.Q1Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q1Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q1Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects1[i].setOpacity(gdjs.Q1Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q1Code.eventsList0x8dae84(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q1Code.eventsList0x8d941c
gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q1Code.GDQ_95answerObjects2});gdjs.Q1Code.eventsList0x8db824 = function(runtimeScene) {

{

gdjs.Q1Code.GDQ_95answerObjects3.createFrom(gdjs.Q1Code.GDQ_95answerObjects2);


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q1Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q1Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q1Code.condition0IsTrue_0.val = true;
        gdjs.Q1Code.GDQ_95answerObjects3[k] = gdjs.Q1Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q1Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9288548);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q1Code.GDQ_95answerObjects3.createFrom(gdjs.Q1Code.GDQ_95answerObjects2);


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q1Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q1Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q1Code.condition0IsTrue_0.val = true;
        gdjs.Q1Code.GDQ_95answerObjects3[k] = gdjs.Q1Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q1Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9289756);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}{gdjs.deviceVibration.startVibration(1);
}}

}


{

/* Reuse gdjs.Q1Code.GDQ_95answerObjects2 */

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q1Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q1Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q1Code.condition0IsTrue_0.val = true;
        gdjs.Q1Code.GDQ_95answerObjects2[k] = gdjs.Q1Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q1Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
gdjs.Q1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9291164);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.deviceVibration.startVibration(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q1Code.eventsList0x8db824
gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q1Code.GDQ_95answerObjects2});gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q1Code.GDnextBTNObjects2});gdjs.Q1Code.eventsList0x8dcad4 = function(runtimeScene) {

{

/* Reuse gdjs.Q1Code.GDnextBTNObjects2 */

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition2IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9293820);
}
}}
}
if (gdjs.Q1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q1Code.eventsList0x8dcad4
gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q1Code.GDreplayObjects1});gdjs.Q1Code.eventsList0x8dd164 = function(runtimeScene) {

{

/* Reuse gdjs.Q1Code.GDreplayObjects1 */

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
gdjs.Q1Code.condition2IsTrue_0.val = false;
gdjs.Q1Code.condition3IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q1Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q1Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q1Code.condition2IsTrue_0.val = true;
        gdjs.Q1Code.GDreplayObjects1[k] = gdjs.Q1Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q1Code.GDreplayObjects1.length = k;}if ( gdjs.Q1Code.condition2IsTrue_0.val ) {
{
{gdjs.Q1Code.conditionTrue_1 = gdjs.Q1Code.condition3IsTrue_0;
gdjs.Q1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9295660);
}
}}
}
}
if (gdjs.Q1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q1", false);
}{for(var i = 0, len = gdjs.Q1Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q1Code.eventsList0x8dd164
gdjs.Q1Code.eventsList0x8db71c = function(runtimeScene) {

{

gdjs.Q1Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if (gdjs.Q1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q1Code.eventsList0x8db824(runtimeScene);} //End of subevents
}

}


{

gdjs.Q1Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if (gdjs.Q1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Q1Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q1Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {
gdjs.Q1Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q1Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q1Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects2[i].setOpacity(gdjs.Q1Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q1Code.eventsList0x8dcad4(runtimeScene);} //End of subevents
}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {
gdjs.Q1Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q1Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q1Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects1[i].setOpacity(gdjs.Q1Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q1Code.eventsList0x8dd164(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q1Code.eventsList0x8db71c
gdjs.Q1Code.eventsList0x5b6e18 = function(runtimeScene) {

{


{
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q1Code.condition0IsTrue_0.val) {
gdjs.Q1Code.GDCorrectObjects1.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q1Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q1Code.GDnextBTNObjects1.createFrom(runtimeScene.getObjects("nextBTN"));
gdjs.Q1Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q1Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{for(var i = 0, len = gdjs.Q1Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDCorrectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q1Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q1Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDreplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q1Code.GDnextBTNObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDnextBTNObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q1Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDcoverObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Q1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q1Code.eventsList0x8d941c(runtimeScene);} //End of subevents
}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Q1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q1Code.eventsList0x8db71c(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.Q1Code.eventsList0x5b6e18


gdjs.Q1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q1Code.GDdark_95BGObjects1.length = 0;
gdjs.Q1Code.GDdark_95BGObjects2.length = 0;
gdjs.Q1Code.GDdark_95BGObjects3.length = 0;
gdjs.Q1Code.GDdark_95BGObjects4.length = 0;
gdjs.Q1Code.GDQ_95BGObjects1.length = 0;
gdjs.Q1Code.GDQ_95BGObjects2.length = 0;
gdjs.Q1Code.GDQ_95BGObjects3.length = 0;
gdjs.Q1Code.GDQ_95BGObjects4.length = 0;
gdjs.Q1Code.GDques_95BGObjects1.length = 0;
gdjs.Q1Code.GDques_95BGObjects2.length = 0;
gdjs.Q1Code.GDques_95BGObjects3.length = 0;
gdjs.Q1Code.GDques_95BGObjects4.length = 0;
gdjs.Q1Code.GDQ_95answerObjects1.length = 0;
gdjs.Q1Code.GDQ_95answerObjects2.length = 0;
gdjs.Q1Code.GDQ_95answerObjects3.length = 0;
gdjs.Q1Code.GDQ_95answerObjects4.length = 0;
gdjs.Q1Code.GDNewObjectObjects1.length = 0;
gdjs.Q1Code.GDNewObjectObjects2.length = 0;
gdjs.Q1Code.GDNewObjectObjects3.length = 0;
gdjs.Q1Code.GDNewObjectObjects4.length = 0;
gdjs.Q1Code.GDcoverObjects1.length = 0;
gdjs.Q1Code.GDcoverObjects2.length = 0;
gdjs.Q1Code.GDcoverObjects3.length = 0;
gdjs.Q1Code.GDcoverObjects4.length = 0;
gdjs.Q1Code.GDCorrectObjects1.length = 0;
gdjs.Q1Code.GDCorrectObjects2.length = 0;
gdjs.Q1Code.GDCorrectObjects3.length = 0;
gdjs.Q1Code.GDCorrectObjects4.length = 0;
gdjs.Q1Code.GDwrongObjects1.length = 0;
gdjs.Q1Code.GDwrongObjects2.length = 0;
gdjs.Q1Code.GDwrongObjects3.length = 0;
gdjs.Q1Code.GDwrongObjects4.length = 0;
gdjs.Q1Code.GDreplayObjects1.length = 0;
gdjs.Q1Code.GDreplayObjects2.length = 0;
gdjs.Q1Code.GDreplayObjects3.length = 0;
gdjs.Q1Code.GDreplayObjects4.length = 0;
gdjs.Q1Code.GDnextBTNObjects1.length = 0;
gdjs.Q1Code.GDnextBTNObjects2.length = 0;
gdjs.Q1Code.GDnextBTNObjects3.length = 0;
gdjs.Q1Code.GDnextBTNObjects4.length = 0;
gdjs.Q1Code.GDquestionObjects1.length = 0;
gdjs.Q1Code.GDquestionObjects2.length = 0;
gdjs.Q1Code.GDquestionObjects3.length = 0;
gdjs.Q1Code.GDquestionObjects4.length = 0;
gdjs.Q1Code.GDtopicObjects1.length = 0;
gdjs.Q1Code.GDtopicObjects2.length = 0;
gdjs.Q1Code.GDtopicObjects3.length = 0;
gdjs.Q1Code.GDtopicObjects4.length = 0;
gdjs.Q1Code.GDans3Objects1.length = 0;
gdjs.Q1Code.GDans3Objects2.length = 0;
gdjs.Q1Code.GDans3Objects3.length = 0;
gdjs.Q1Code.GDans3Objects4.length = 0;
gdjs.Q1Code.GDans2Objects1.length = 0;
gdjs.Q1Code.GDans2Objects2.length = 0;
gdjs.Q1Code.GDans2Objects3.length = 0;
gdjs.Q1Code.GDans2Objects4.length = 0;
gdjs.Q1Code.GDans1Objects1.length = 0;
gdjs.Q1Code.GDans1Objects2.length = 0;
gdjs.Q1Code.GDans1Objects3.length = 0;
gdjs.Q1Code.GDans1Objects4.length = 0;

gdjs.Q1Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Q1Code'] = gdjs.Q1Code;
