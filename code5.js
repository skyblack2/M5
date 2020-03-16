gdjs.Q5Code = {};
gdjs.Q5Code.GDdark_95BGObjects1= [];
gdjs.Q5Code.GDdark_95BGObjects2= [];
gdjs.Q5Code.GDdark_95BGObjects3= [];
gdjs.Q5Code.GDdark_95BGObjects4= [];
gdjs.Q5Code.GDQ_95BGObjects1= [];
gdjs.Q5Code.GDQ_95BGObjects2= [];
gdjs.Q5Code.GDQ_95BGObjects3= [];
gdjs.Q5Code.GDQ_95BGObjects4= [];
gdjs.Q5Code.GDques_95BGObjects1= [];
gdjs.Q5Code.GDques_95BGObjects2= [];
gdjs.Q5Code.GDques_95BGObjects3= [];
gdjs.Q5Code.GDques_95BGObjects4= [];
gdjs.Q5Code.GDQ_95answerObjects1= [];
gdjs.Q5Code.GDQ_95answerObjects2= [];
gdjs.Q5Code.GDQ_95answerObjects3= [];
gdjs.Q5Code.GDQ_95answerObjects4= [];
gdjs.Q5Code.GDNewObjectObjects1= [];
gdjs.Q5Code.GDNewObjectObjects2= [];
gdjs.Q5Code.GDNewObjectObjects3= [];
gdjs.Q5Code.GDNewObjectObjects4= [];
gdjs.Q5Code.GDcoverObjects1= [];
gdjs.Q5Code.GDcoverObjects2= [];
gdjs.Q5Code.GDcoverObjects3= [];
gdjs.Q5Code.GDcoverObjects4= [];
gdjs.Q5Code.GDCorrectObjects1= [];
gdjs.Q5Code.GDCorrectObjects2= [];
gdjs.Q5Code.GDCorrectObjects3= [];
gdjs.Q5Code.GDCorrectObjects4= [];
gdjs.Q5Code.GDwrongObjects1= [];
gdjs.Q5Code.GDwrongObjects2= [];
gdjs.Q5Code.GDwrongObjects3= [];
gdjs.Q5Code.GDwrongObjects4= [];
gdjs.Q5Code.GDreplayObjects1= [];
gdjs.Q5Code.GDreplayObjects2= [];
gdjs.Q5Code.GDreplayObjects3= [];
gdjs.Q5Code.GDreplayObjects4= [];
gdjs.Q5Code.GDnextBTNObjects1= [];
gdjs.Q5Code.GDnextBTNObjects2= [];
gdjs.Q5Code.GDnextBTNObjects3= [];
gdjs.Q5Code.GDnextBTNObjects4= [];
gdjs.Q5Code.GDquizObjects1= [];
gdjs.Q5Code.GDquizObjects2= [];
gdjs.Q5Code.GDquizObjects3= [];
gdjs.Q5Code.GDquizObjects4= [];
gdjs.Q5Code.GDquestionObjects1= [];
gdjs.Q5Code.GDquestionObjects2= [];
gdjs.Q5Code.GDquestionObjects3= [];
gdjs.Q5Code.GDquestionObjects4= [];
gdjs.Q5Code.GDans3Objects1= [];
gdjs.Q5Code.GDans3Objects2= [];
gdjs.Q5Code.GDans3Objects3= [];
gdjs.Q5Code.GDans3Objects4= [];
gdjs.Q5Code.GDans2Objects1= [];
gdjs.Q5Code.GDans2Objects2= [];
gdjs.Q5Code.GDans2Objects3= [];
gdjs.Q5Code.GDans2Objects4= [];
gdjs.Q5Code.GDans1Objects1= [];
gdjs.Q5Code.GDans1Objects2= [];
gdjs.Q5Code.GDans1Objects3= [];
gdjs.Q5Code.GDans1Objects4= [];

gdjs.Q5Code.conditionTrue_0 = {val:false};
gdjs.Q5Code.condition0IsTrue_0 = {val:false};
gdjs.Q5Code.condition1IsTrue_0 = {val:false};
gdjs.Q5Code.condition2IsTrue_0 = {val:false};
gdjs.Q5Code.condition3IsTrue_0 = {val:false};
gdjs.Q5Code.condition4IsTrue_0 = {val:false};
gdjs.Q5Code.condition5IsTrue_0 = {val:false};
gdjs.Q5Code.conditionTrue_1 = {val:false};
gdjs.Q5Code.condition0IsTrue_1 = {val:false};
gdjs.Q5Code.condition1IsTrue_1 = {val:false};
gdjs.Q5Code.condition2IsTrue_1 = {val:false};
gdjs.Q5Code.condition3IsTrue_1 = {val:false};
gdjs.Q5Code.condition4IsTrue_1 = {val:false};
gdjs.Q5Code.condition5IsTrue_1 = {val:false};


gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q5Code.GDQ_95answerObjects2});gdjs.Q5Code.eventsList0x8f984c = function(runtimeScene) {

{

gdjs.Q5Code.GDQ_95answerObjects3.createFrom(gdjs.Q5Code.GDQ_95answerObjects2);


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q5Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q5Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q5Code.condition0IsTrue_0.val = true;
        gdjs.Q5Code.GDQ_95answerObjects3[k] = gdjs.Q5Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q5Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9411644);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q5Code.GDQ_95answerObjects3.createFrom(gdjs.Q5Code.GDQ_95answerObjects2);


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q5Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q5Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q5Code.condition0IsTrue_0.val = true;
        gdjs.Q5Code.GDQ_95answerObjects3[k] = gdjs.Q5Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q5Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9412764);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.Q5Code.GDQ_95answerObjects2 */

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q5Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q5Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q5Code.condition0IsTrue_0.val = true;
        gdjs.Q5Code.GDQ_95answerObjects2[k] = gdjs.Q5Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q5Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9413956);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q5Code.eventsList0x8f984c
gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q5Code.GDQ_95answerObjects2});gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q5Code.GDnextBTNObjects2});gdjs.Q5Code.eventsList0x8faac4 = function(runtimeScene) {

{

/* Reuse gdjs.Q5Code.GDnextBTNObjects2 */

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9416868);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", true);
}}

}


}; //End of gdjs.Q5Code.eventsList0x8faac4
gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q5Code.GDreplayObjects1});gdjs.Q5Code.eventsList0x8fb204 = function(runtimeScene) {

{

/* Reuse gdjs.Q5Code.GDreplayObjects1 */

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
gdjs.Q5Code.condition4IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q5Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q5Code.condition3IsTrue_0.val = true;
        gdjs.Q5Code.GDreplayObjects1[k] = gdjs.Q5Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q5Code.GDreplayObjects1.length = k;}if ( gdjs.Q5Code.condition3IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition4IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9418820);
}
}}
}
}
}
if (gdjs.Q5Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q5", false);
}{for(var i = 0, len = gdjs.Q5Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q5Code.eventsList0x8fb204
gdjs.Q5Code.eventsList0x8f976c = function(runtimeScene) {

{

gdjs.Q5Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Q5Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Q5Code.eventsList0x8f984c(runtimeScene);} //End of subevents
}

}


{

gdjs.Q5Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Q5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q5Code.condition1IsTrue_0.val) {
gdjs.Q5Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q5Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q5Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects2[i].setOpacity(gdjs.Q5Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q5Code.eventsList0x8faac4(runtimeScene);} //End of subevents
}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q5Code.condition1IsTrue_0.val) {
gdjs.Q5Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q5Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q5Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects1[i].setOpacity(gdjs.Q5Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q5Code.eventsList0x8fb204(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q5Code.eventsList0x8f976c
gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q5Code.GDQ_95answerObjects2});gdjs.Q5Code.eventsList0x8fbb94 = function(runtimeScene) {

{

gdjs.Q5Code.GDQ_95answerObjects3.createFrom(gdjs.Q5Code.GDQ_95answerObjects2);


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q5Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q5Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q5Code.condition0IsTrue_0.val = true;
        gdjs.Q5Code.GDQ_95answerObjects3[k] = gdjs.Q5Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q5Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9420524);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q5Code.GDQ_95answerObjects3.createFrom(gdjs.Q5Code.GDQ_95answerObjects2);


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q5Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q5Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q5Code.condition0IsTrue_0.val = true;
        gdjs.Q5Code.GDQ_95answerObjects3[k] = gdjs.Q5Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q5Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9421732);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}{gdjs.deviceVibration.startVibration(1);
}}

}


{

/* Reuse gdjs.Q5Code.GDQ_95answerObjects2 */

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q5Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q5Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q5Code.condition0IsTrue_0.val = true;
        gdjs.Q5Code.GDQ_95answerObjects2[k] = gdjs.Q5Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q5Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
gdjs.Q5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9423140);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.deviceVibration.startVibration(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q5Code.eventsList0x8fbb94
gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q5Code.GDQ_95answerObjects2});gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q5Code.GDnextBTNObjects2});gdjs.Q5Code.eventsList0x8fce5c = function(runtimeScene) {

{

/* Reuse gdjs.Q5Code.GDnextBTNObjects2 */

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition2IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9425796);
}
}}
}
if (gdjs.Q5Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", true);
}}

}


}; //End of gdjs.Q5Code.eventsList0x8fce5c
gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q5Code.GDreplayObjects1});gdjs.Q5Code.eventsList0x8fd50c = function(runtimeScene) {

{

/* Reuse gdjs.Q5Code.GDreplayObjects1 */

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
gdjs.Q5Code.condition2IsTrue_0.val = false;
gdjs.Q5Code.condition3IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q5Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q5Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q5Code.condition2IsTrue_0.val = true;
        gdjs.Q5Code.GDreplayObjects1[k] = gdjs.Q5Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q5Code.GDreplayObjects1.length = k;}if ( gdjs.Q5Code.condition2IsTrue_0.val ) {
{
{gdjs.Q5Code.conditionTrue_1 = gdjs.Q5Code.condition3IsTrue_0;
gdjs.Q5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9427668);
}
}}
}
}
if (gdjs.Q5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q5", false);
}{for(var i = 0, len = gdjs.Q5Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q5Code.eventsList0x8fd50c
gdjs.Q5Code.eventsList0x8fba8c = function(runtimeScene) {

{

gdjs.Q5Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if (gdjs.Q5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q5Code.eventsList0x8fbb94(runtimeScene);} //End of subevents
}

}


{

gdjs.Q5Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if (gdjs.Q5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Q5Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q5Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q5Code.condition1IsTrue_0.val) {
gdjs.Q5Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q5Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q5Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects2[i].setOpacity(gdjs.Q5Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q5Code.eventsList0x8fce5c(runtimeScene);} //End of subevents
}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q5Code.condition1IsTrue_0.val) {
gdjs.Q5Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q5Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q5Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects1[i].setOpacity(gdjs.Q5Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q5Code.eventsList0x8fd50c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q5Code.eventsList0x8fba8c
gdjs.Q5Code.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q5Code.condition0IsTrue_0.val) {
gdjs.Q5Code.GDCorrectObjects1.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q5Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q5Code.GDnextBTNObjects1.createFrom(runtimeScene.getObjects("nextBTN"));
gdjs.Q5Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q5Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q5Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDCorrectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q5Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q5Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDreplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q5Code.GDnextBTNObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDnextBTNObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q5Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDcoverObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Q5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q5Code.eventsList0x8f976c(runtimeScene);} //End of subevents
}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Q5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q5Code.eventsList0x8fba8c(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.Q5Code.eventsList0x5b6e18


gdjs.Q5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q5Code.GDdark_95BGObjects1.length = 0;
gdjs.Q5Code.GDdark_95BGObjects2.length = 0;
gdjs.Q5Code.GDdark_95BGObjects3.length = 0;
gdjs.Q5Code.GDdark_95BGObjects4.length = 0;
gdjs.Q5Code.GDQ_95BGObjects1.length = 0;
gdjs.Q5Code.GDQ_95BGObjects2.length = 0;
gdjs.Q5Code.GDQ_95BGObjects3.length = 0;
gdjs.Q5Code.GDQ_95BGObjects4.length = 0;
gdjs.Q5Code.GDques_95BGObjects1.length = 0;
gdjs.Q5Code.GDques_95BGObjects2.length = 0;
gdjs.Q5Code.GDques_95BGObjects3.length = 0;
gdjs.Q5Code.GDques_95BGObjects4.length = 0;
gdjs.Q5Code.GDQ_95answerObjects1.length = 0;
gdjs.Q5Code.GDQ_95answerObjects2.length = 0;
gdjs.Q5Code.GDQ_95answerObjects3.length = 0;
gdjs.Q5Code.GDQ_95answerObjects4.length = 0;
gdjs.Q5Code.GDNewObjectObjects1.length = 0;
gdjs.Q5Code.GDNewObjectObjects2.length = 0;
gdjs.Q5Code.GDNewObjectObjects3.length = 0;
gdjs.Q5Code.GDNewObjectObjects4.length = 0;
gdjs.Q5Code.GDcoverObjects1.length = 0;
gdjs.Q5Code.GDcoverObjects2.length = 0;
gdjs.Q5Code.GDcoverObjects3.length = 0;
gdjs.Q5Code.GDcoverObjects4.length = 0;
gdjs.Q5Code.GDCorrectObjects1.length = 0;
gdjs.Q5Code.GDCorrectObjects2.length = 0;
gdjs.Q5Code.GDCorrectObjects3.length = 0;
gdjs.Q5Code.GDCorrectObjects4.length = 0;
gdjs.Q5Code.GDwrongObjects1.length = 0;
gdjs.Q5Code.GDwrongObjects2.length = 0;
gdjs.Q5Code.GDwrongObjects3.length = 0;
gdjs.Q5Code.GDwrongObjects4.length = 0;
gdjs.Q5Code.GDreplayObjects1.length = 0;
gdjs.Q5Code.GDreplayObjects2.length = 0;
gdjs.Q5Code.GDreplayObjects3.length = 0;
gdjs.Q5Code.GDreplayObjects4.length = 0;
gdjs.Q5Code.GDnextBTNObjects1.length = 0;
gdjs.Q5Code.GDnextBTNObjects2.length = 0;
gdjs.Q5Code.GDnextBTNObjects3.length = 0;
gdjs.Q5Code.GDnextBTNObjects4.length = 0;
gdjs.Q5Code.GDquizObjects1.length = 0;
gdjs.Q5Code.GDquizObjects2.length = 0;
gdjs.Q5Code.GDquizObjects3.length = 0;
gdjs.Q5Code.GDquizObjects4.length = 0;
gdjs.Q5Code.GDquestionObjects1.length = 0;
gdjs.Q5Code.GDquestionObjects2.length = 0;
gdjs.Q5Code.GDquestionObjects3.length = 0;
gdjs.Q5Code.GDquestionObjects4.length = 0;
gdjs.Q5Code.GDans3Objects1.length = 0;
gdjs.Q5Code.GDans3Objects2.length = 0;
gdjs.Q5Code.GDans3Objects3.length = 0;
gdjs.Q5Code.GDans3Objects4.length = 0;
gdjs.Q5Code.GDans2Objects1.length = 0;
gdjs.Q5Code.GDans2Objects2.length = 0;
gdjs.Q5Code.GDans2Objects3.length = 0;
gdjs.Q5Code.GDans2Objects4.length = 0;
gdjs.Q5Code.GDans1Objects1.length = 0;
gdjs.Q5Code.GDans1Objects2.length = 0;
gdjs.Q5Code.GDans1Objects3.length = 0;
gdjs.Q5Code.GDans1Objects4.length = 0;

gdjs.Q5Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Q5Code'] = gdjs.Q5Code;
