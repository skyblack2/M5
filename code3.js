gdjs.Q3Code = {};
gdjs.Q3Code.GDdark_95BGObjects1= [];
gdjs.Q3Code.GDdark_95BGObjects2= [];
gdjs.Q3Code.GDdark_95BGObjects3= [];
gdjs.Q3Code.GDdark_95BGObjects4= [];
gdjs.Q3Code.GDQ_95BGObjects1= [];
gdjs.Q3Code.GDQ_95BGObjects2= [];
gdjs.Q3Code.GDQ_95BGObjects3= [];
gdjs.Q3Code.GDQ_95BGObjects4= [];
gdjs.Q3Code.GDques_95BGObjects1= [];
gdjs.Q3Code.GDques_95BGObjects2= [];
gdjs.Q3Code.GDques_95BGObjects3= [];
gdjs.Q3Code.GDques_95BGObjects4= [];
gdjs.Q3Code.GDQ_95answerObjects1= [];
gdjs.Q3Code.GDQ_95answerObjects2= [];
gdjs.Q3Code.GDQ_95answerObjects3= [];
gdjs.Q3Code.GDQ_95answerObjects4= [];
gdjs.Q3Code.GDNewObjectObjects1= [];
gdjs.Q3Code.GDNewObjectObjects2= [];
gdjs.Q3Code.GDNewObjectObjects3= [];
gdjs.Q3Code.GDNewObjectObjects4= [];
gdjs.Q3Code.GDcoverObjects1= [];
gdjs.Q3Code.GDcoverObjects2= [];
gdjs.Q3Code.GDcoverObjects3= [];
gdjs.Q3Code.GDcoverObjects4= [];
gdjs.Q3Code.GDCorrectObjects1= [];
gdjs.Q3Code.GDCorrectObjects2= [];
gdjs.Q3Code.GDCorrectObjects3= [];
gdjs.Q3Code.GDCorrectObjects4= [];
gdjs.Q3Code.GDwrongObjects1= [];
gdjs.Q3Code.GDwrongObjects2= [];
gdjs.Q3Code.GDwrongObjects3= [];
gdjs.Q3Code.GDwrongObjects4= [];
gdjs.Q3Code.GDreplayObjects1= [];
gdjs.Q3Code.GDreplayObjects2= [];
gdjs.Q3Code.GDreplayObjects3= [];
gdjs.Q3Code.GDreplayObjects4= [];
gdjs.Q3Code.GDnextBTNObjects1= [];
gdjs.Q3Code.GDnextBTNObjects2= [];
gdjs.Q3Code.GDnextBTNObjects3= [];
gdjs.Q3Code.GDnextBTNObjects4= [];
gdjs.Q3Code.GDquizObjects1= [];
gdjs.Q3Code.GDquizObjects2= [];
gdjs.Q3Code.GDquizObjects3= [];
gdjs.Q3Code.GDquizObjects4= [];
gdjs.Q3Code.GDquestionObjects1= [];
gdjs.Q3Code.GDquestionObjects2= [];
gdjs.Q3Code.GDquestionObjects3= [];
gdjs.Q3Code.GDquestionObjects4= [];
gdjs.Q3Code.GDans1Objects1= [];
gdjs.Q3Code.GDans1Objects2= [];
gdjs.Q3Code.GDans1Objects3= [];
gdjs.Q3Code.GDans1Objects4= [];
gdjs.Q3Code.GDans2Objects1= [];
gdjs.Q3Code.GDans2Objects2= [];
gdjs.Q3Code.GDans2Objects3= [];
gdjs.Q3Code.GDans2Objects4= [];
gdjs.Q3Code.GDans3Objects1= [];
gdjs.Q3Code.GDans3Objects2= [];
gdjs.Q3Code.GDans3Objects3= [];
gdjs.Q3Code.GDans3Objects4= [];

gdjs.Q3Code.conditionTrue_0 = {val:false};
gdjs.Q3Code.condition0IsTrue_0 = {val:false};
gdjs.Q3Code.condition1IsTrue_0 = {val:false};
gdjs.Q3Code.condition2IsTrue_0 = {val:false};
gdjs.Q3Code.condition3IsTrue_0 = {val:false};
gdjs.Q3Code.condition4IsTrue_0 = {val:false};
gdjs.Q3Code.condition5IsTrue_0 = {val:false};
gdjs.Q3Code.conditionTrue_1 = {val:false};
gdjs.Q3Code.condition0IsTrue_1 = {val:false};
gdjs.Q3Code.condition1IsTrue_1 = {val:false};
gdjs.Q3Code.condition2IsTrue_1 = {val:false};
gdjs.Q3Code.condition3IsTrue_1 = {val:false};
gdjs.Q3Code.condition4IsTrue_1 = {val:false};
gdjs.Q3Code.condition5IsTrue_1 = {val:false};


gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q3Code.GDQ_95answerObjects2});gdjs.Q3Code.eventsList0x8e9b6c = function(runtimeScene) {

{

gdjs.Q3Code.GDQ_95answerObjects3.createFrom(gdjs.Q3Code.GDQ_95answerObjects2);


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q3Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q3Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q3Code.condition0IsTrue_0.val = true;
        gdjs.Q3Code.GDQ_95answerObjects3[k] = gdjs.Q3Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q3Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9346908);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q3Code.GDQ_95answerObjects3.createFrom(gdjs.Q3Code.GDQ_95answerObjects2);


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q3Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q3Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q3Code.condition0IsTrue_0.val = true;
        gdjs.Q3Code.GDQ_95answerObjects3[k] = gdjs.Q3Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q3Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9348028);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.Q3Code.GDQ_95answerObjects2 */

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q3Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q3Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q3Code.condition0IsTrue_0.val = true;
        gdjs.Q3Code.GDQ_95answerObjects2[k] = gdjs.Q3Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q3Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9349220);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q3Code.eventsList0x8e9b6c
gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q3Code.GDQ_95answerObjects2});gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q3Code.GDnextBTNObjects2});gdjs.Q3Code.eventsList0x8eade4 = function(runtimeScene) {

{

/* Reuse gdjs.Q3Code.GDnextBTNObjects2 */

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9352116);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q3Code.eventsList0x8eade4
gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q3Code.GDreplayObjects1});gdjs.Q3Code.eventsList0x8eb4f4 = function(runtimeScene) {

{

/* Reuse gdjs.Q3Code.GDreplayObjects1 */

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
gdjs.Q3Code.condition4IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q3Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q3Code.condition3IsTrue_0.val = true;
        gdjs.Q3Code.GDreplayObjects1[k] = gdjs.Q3Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q3Code.GDreplayObjects1.length = k;}if ( gdjs.Q3Code.condition3IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition4IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9354036);
}
}}
}
}
}
if (gdjs.Q3Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q3", false);
}{for(var i = 0, len = gdjs.Q3Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q3Code.eventsList0x8eb4f4
gdjs.Q3Code.eventsList0x8e9a8c = function(runtimeScene) {

{

gdjs.Q3Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Q3Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Q3Code.eventsList0x8e9b6c(runtimeScene);} //End of subevents
}

}


{

gdjs.Q3Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Q3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q3Code.condition1IsTrue_0.val) {
gdjs.Q3Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q3Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q3Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects2[i].setOpacity(gdjs.Q3Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q3Code.eventsList0x8eade4(runtimeScene);} //End of subevents
}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q3Code.condition1IsTrue_0.val) {
gdjs.Q3Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q3Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q3Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects1[i].setOpacity(gdjs.Q3Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q3Code.eventsList0x8eb4f4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q3Code.eventsList0x8e9a8c
gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q3Code.GDQ_95answerObjects2});gdjs.Q3Code.eventsList0x8ebe84 = function(runtimeScene) {

{

gdjs.Q3Code.GDQ_95answerObjects3.createFrom(gdjs.Q3Code.GDQ_95answerObjects2);


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q3Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q3Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q3Code.condition0IsTrue_0.val = true;
        gdjs.Q3Code.GDQ_95answerObjects3[k] = gdjs.Q3Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q3Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9355740);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q3Code.GDQ_95answerObjects3.createFrom(gdjs.Q3Code.GDQ_95answerObjects2);


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q3Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q3Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q3Code.condition0IsTrue_0.val = true;
        gdjs.Q3Code.GDQ_95answerObjects3[k] = gdjs.Q3Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q3Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9356948);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}{gdjs.deviceVibration.startVibration(1);
}}

}


{

/* Reuse gdjs.Q3Code.GDQ_95answerObjects2 */

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q3Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q3Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q3Code.condition0IsTrue_0.val = true;
        gdjs.Q3Code.GDQ_95answerObjects2[k] = gdjs.Q3Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q3Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
gdjs.Q3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9358356);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.deviceVibration.startVibration(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q3Code.eventsList0x8ebe84
gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q3Code.GDQ_95answerObjects2});gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q3Code.GDnextBTNObjects2});gdjs.Q3Code.eventsList0x8ed14c = function(runtimeScene) {

{

/* Reuse gdjs.Q3Code.GDnextBTNObjects2 */

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition2IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9361012);
}
}}
}
if (gdjs.Q3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q3Code.eventsList0x8ed14c
gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q3Code.GDreplayObjects1});gdjs.Q3Code.eventsList0x8ed7dc = function(runtimeScene) {

{

/* Reuse gdjs.Q3Code.GDreplayObjects1 */

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
gdjs.Q3Code.condition2IsTrue_0.val = false;
gdjs.Q3Code.condition3IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q3Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q3Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q3Code.condition2IsTrue_0.val = true;
        gdjs.Q3Code.GDreplayObjects1[k] = gdjs.Q3Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q3Code.GDreplayObjects1.length = k;}if ( gdjs.Q3Code.condition2IsTrue_0.val ) {
{
{gdjs.Q3Code.conditionTrue_1 = gdjs.Q3Code.condition3IsTrue_0;
gdjs.Q3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9362852);
}
}}
}
}
if (gdjs.Q3Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q3", false);
}{for(var i = 0, len = gdjs.Q3Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q3Code.eventsList0x8ed7dc
gdjs.Q3Code.eventsList0x8ebd7c = function(runtimeScene) {

{

gdjs.Q3Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if (gdjs.Q3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q3Code.eventsList0x8ebe84(runtimeScene);} //End of subevents
}

}


{

gdjs.Q3Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if (gdjs.Q3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Q3Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q3Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q3Code.condition1IsTrue_0.val) {
gdjs.Q3Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q3Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q3Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects2[i].setOpacity(gdjs.Q3Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q3Code.eventsList0x8ed14c(runtimeScene);} //End of subevents
}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q3Code.condition1IsTrue_0.val) {
gdjs.Q3Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q3Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q3Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects1[i].setOpacity(gdjs.Q3Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q3Code.eventsList0x8ed7dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q3Code.eventsList0x8ebd7c
gdjs.Q3Code.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q3Code.condition0IsTrue_0.val) {
gdjs.Q3Code.GDCorrectObjects1.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q3Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q3Code.GDnextBTNObjects1.createFrom(runtimeScene.getObjects("nextBTN"));
gdjs.Q3Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q3Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q3Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDCorrectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q3Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q3Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDreplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q3Code.GDnextBTNObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDnextBTNObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q3Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDcoverObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Q3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q3Code.eventsList0x8e9a8c(runtimeScene);} //End of subevents
}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Q3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q3Code.eventsList0x8ebd7c(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.Q3Code.eventsList0x5b6e18


gdjs.Q3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q3Code.GDdark_95BGObjects1.length = 0;
gdjs.Q3Code.GDdark_95BGObjects2.length = 0;
gdjs.Q3Code.GDdark_95BGObjects3.length = 0;
gdjs.Q3Code.GDdark_95BGObjects4.length = 0;
gdjs.Q3Code.GDQ_95BGObjects1.length = 0;
gdjs.Q3Code.GDQ_95BGObjects2.length = 0;
gdjs.Q3Code.GDQ_95BGObjects3.length = 0;
gdjs.Q3Code.GDQ_95BGObjects4.length = 0;
gdjs.Q3Code.GDques_95BGObjects1.length = 0;
gdjs.Q3Code.GDques_95BGObjects2.length = 0;
gdjs.Q3Code.GDques_95BGObjects3.length = 0;
gdjs.Q3Code.GDques_95BGObjects4.length = 0;
gdjs.Q3Code.GDQ_95answerObjects1.length = 0;
gdjs.Q3Code.GDQ_95answerObjects2.length = 0;
gdjs.Q3Code.GDQ_95answerObjects3.length = 0;
gdjs.Q3Code.GDQ_95answerObjects4.length = 0;
gdjs.Q3Code.GDNewObjectObjects1.length = 0;
gdjs.Q3Code.GDNewObjectObjects2.length = 0;
gdjs.Q3Code.GDNewObjectObjects3.length = 0;
gdjs.Q3Code.GDNewObjectObjects4.length = 0;
gdjs.Q3Code.GDcoverObjects1.length = 0;
gdjs.Q3Code.GDcoverObjects2.length = 0;
gdjs.Q3Code.GDcoverObjects3.length = 0;
gdjs.Q3Code.GDcoverObjects4.length = 0;
gdjs.Q3Code.GDCorrectObjects1.length = 0;
gdjs.Q3Code.GDCorrectObjects2.length = 0;
gdjs.Q3Code.GDCorrectObjects3.length = 0;
gdjs.Q3Code.GDCorrectObjects4.length = 0;
gdjs.Q3Code.GDwrongObjects1.length = 0;
gdjs.Q3Code.GDwrongObjects2.length = 0;
gdjs.Q3Code.GDwrongObjects3.length = 0;
gdjs.Q3Code.GDwrongObjects4.length = 0;
gdjs.Q3Code.GDreplayObjects1.length = 0;
gdjs.Q3Code.GDreplayObjects2.length = 0;
gdjs.Q3Code.GDreplayObjects3.length = 0;
gdjs.Q3Code.GDreplayObjects4.length = 0;
gdjs.Q3Code.GDnextBTNObjects1.length = 0;
gdjs.Q3Code.GDnextBTNObjects2.length = 0;
gdjs.Q3Code.GDnextBTNObjects3.length = 0;
gdjs.Q3Code.GDnextBTNObjects4.length = 0;
gdjs.Q3Code.GDquizObjects1.length = 0;
gdjs.Q3Code.GDquizObjects2.length = 0;
gdjs.Q3Code.GDquizObjects3.length = 0;
gdjs.Q3Code.GDquizObjects4.length = 0;
gdjs.Q3Code.GDquestionObjects1.length = 0;
gdjs.Q3Code.GDquestionObjects2.length = 0;
gdjs.Q3Code.GDquestionObjects3.length = 0;
gdjs.Q3Code.GDquestionObjects4.length = 0;
gdjs.Q3Code.GDans1Objects1.length = 0;
gdjs.Q3Code.GDans1Objects2.length = 0;
gdjs.Q3Code.GDans1Objects3.length = 0;
gdjs.Q3Code.GDans1Objects4.length = 0;
gdjs.Q3Code.GDans2Objects1.length = 0;
gdjs.Q3Code.GDans2Objects2.length = 0;
gdjs.Q3Code.GDans2Objects3.length = 0;
gdjs.Q3Code.GDans2Objects4.length = 0;
gdjs.Q3Code.GDans3Objects1.length = 0;
gdjs.Q3Code.GDans3Objects2.length = 0;
gdjs.Q3Code.GDans3Objects3.length = 0;
gdjs.Q3Code.GDans3Objects4.length = 0;

gdjs.Q3Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Q3Code'] = gdjs.Q3Code;
