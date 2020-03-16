gdjs.Q4Code = {};
gdjs.Q4Code.GDdark_95BGObjects1= [];
gdjs.Q4Code.GDdark_95BGObjects2= [];
gdjs.Q4Code.GDdark_95BGObjects3= [];
gdjs.Q4Code.GDdark_95BGObjects4= [];
gdjs.Q4Code.GDQ_95BGObjects1= [];
gdjs.Q4Code.GDQ_95BGObjects2= [];
gdjs.Q4Code.GDQ_95BGObjects3= [];
gdjs.Q4Code.GDQ_95BGObjects4= [];
gdjs.Q4Code.GDques_95BGObjects1= [];
gdjs.Q4Code.GDques_95BGObjects2= [];
gdjs.Q4Code.GDques_95BGObjects3= [];
gdjs.Q4Code.GDques_95BGObjects4= [];
gdjs.Q4Code.GDQ_95answerObjects1= [];
gdjs.Q4Code.GDQ_95answerObjects2= [];
gdjs.Q4Code.GDQ_95answerObjects3= [];
gdjs.Q4Code.GDQ_95answerObjects4= [];
gdjs.Q4Code.GDNewObjectObjects1= [];
gdjs.Q4Code.GDNewObjectObjects2= [];
gdjs.Q4Code.GDNewObjectObjects3= [];
gdjs.Q4Code.GDNewObjectObjects4= [];
gdjs.Q4Code.GDcoverObjects1= [];
gdjs.Q4Code.GDcoverObjects2= [];
gdjs.Q4Code.GDcoverObjects3= [];
gdjs.Q4Code.GDcoverObjects4= [];
gdjs.Q4Code.GDCorrectObjects1= [];
gdjs.Q4Code.GDCorrectObjects2= [];
gdjs.Q4Code.GDCorrectObjects3= [];
gdjs.Q4Code.GDCorrectObjects4= [];
gdjs.Q4Code.GDwrongObjects1= [];
gdjs.Q4Code.GDwrongObjects2= [];
gdjs.Q4Code.GDwrongObjects3= [];
gdjs.Q4Code.GDwrongObjects4= [];
gdjs.Q4Code.GDreplayObjects1= [];
gdjs.Q4Code.GDreplayObjects2= [];
gdjs.Q4Code.GDreplayObjects3= [];
gdjs.Q4Code.GDreplayObjects4= [];
gdjs.Q4Code.GDnextBTNObjects1= [];
gdjs.Q4Code.GDnextBTNObjects2= [];
gdjs.Q4Code.GDnextBTNObjects3= [];
gdjs.Q4Code.GDnextBTNObjects4= [];
gdjs.Q4Code.GDquizObjects1= [];
gdjs.Q4Code.GDquizObjects2= [];
gdjs.Q4Code.GDquizObjects3= [];
gdjs.Q4Code.GDquizObjects4= [];
gdjs.Q4Code.GDquestionObjects1= [];
gdjs.Q4Code.GDquestionObjects2= [];
gdjs.Q4Code.GDquestionObjects3= [];
gdjs.Q4Code.GDquestionObjects4= [];
gdjs.Q4Code.GDans1Objects1= [];
gdjs.Q4Code.GDans1Objects2= [];
gdjs.Q4Code.GDans1Objects3= [];
gdjs.Q4Code.GDans1Objects4= [];
gdjs.Q4Code.GDans2Objects1= [];
gdjs.Q4Code.GDans2Objects2= [];
gdjs.Q4Code.GDans2Objects3= [];
gdjs.Q4Code.GDans2Objects4= [];
gdjs.Q4Code.GDans3Objects1= [];
gdjs.Q4Code.GDans3Objects2= [];
gdjs.Q4Code.GDans3Objects3= [];
gdjs.Q4Code.GDans3Objects4= [];

gdjs.Q4Code.conditionTrue_0 = {val:false};
gdjs.Q4Code.condition0IsTrue_0 = {val:false};
gdjs.Q4Code.condition1IsTrue_0 = {val:false};
gdjs.Q4Code.condition2IsTrue_0 = {val:false};
gdjs.Q4Code.condition3IsTrue_0 = {val:false};
gdjs.Q4Code.condition4IsTrue_0 = {val:false};
gdjs.Q4Code.condition5IsTrue_0 = {val:false};
gdjs.Q4Code.conditionTrue_1 = {val:false};
gdjs.Q4Code.condition0IsTrue_1 = {val:false};
gdjs.Q4Code.condition1IsTrue_1 = {val:false};
gdjs.Q4Code.condition2IsTrue_1 = {val:false};
gdjs.Q4Code.condition3IsTrue_1 = {val:false};
gdjs.Q4Code.condition4IsTrue_1 = {val:false};
gdjs.Q4Code.condition5IsTrue_1 = {val:false};


gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q4Code.GDQ_95answerObjects2});gdjs.Q4Code.eventsList0x8f19dc = function(runtimeScene) {

{

gdjs.Q4Code.GDQ_95answerObjects3.createFrom(gdjs.Q4Code.GDQ_95answerObjects2);


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q4Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q4Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q4Code.condition0IsTrue_0.val = true;
        gdjs.Q4Code.GDQ_95answerObjects3[k] = gdjs.Q4Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q4Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9379276);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q4Code.GDQ_95answerObjects3.createFrom(gdjs.Q4Code.GDQ_95answerObjects2);


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q4Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q4Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q4Code.condition0IsTrue_0.val = true;
        gdjs.Q4Code.GDQ_95answerObjects3[k] = gdjs.Q4Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q4Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9380396);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


{

/* Reuse gdjs.Q4Code.GDQ_95answerObjects2 */

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q4Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q4Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q4Code.condition0IsTrue_0.val = true;
        gdjs.Q4Code.GDQ_95answerObjects2[k] = gdjs.Q4Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q4Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9381588);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q4Code.eventsList0x8f19dc
gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q4Code.GDQ_95answerObjects2});gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q4Code.GDnextBTNObjects2});gdjs.Q4Code.eventsList0x8f2c54 = function(runtimeScene) {

{

/* Reuse gdjs.Q4Code.GDnextBTNObjects2 */

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9384484);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q4Code.eventsList0x8f2c54
gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q4Code.GDreplayObjects1});gdjs.Q4Code.eventsList0x8f3364 = function(runtimeScene) {

{

/* Reuse gdjs.Q4Code.GDreplayObjects1 */

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
gdjs.Q4Code.condition4IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q4Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q4Code.condition3IsTrue_0.val = true;
        gdjs.Q4Code.GDreplayObjects1[k] = gdjs.Q4Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q4Code.GDreplayObjects1.length = k;}if ( gdjs.Q4Code.condition3IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition4IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9386404);
}
}}
}
}
}
if (gdjs.Q4Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q4", false);
}{for(var i = 0, len = gdjs.Q4Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q4Code.eventsList0x8f3364
gdjs.Q4Code.eventsList0x8f18fc = function(runtimeScene) {

{

gdjs.Q4Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Q4Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Q4Code.eventsList0x8f19dc(runtimeScene);} //End of subevents
}

}


{

gdjs.Q4Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Q4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q4Code.condition1IsTrue_0.val) {
gdjs.Q4Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q4Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q4Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects2[i].setOpacity(gdjs.Q4Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q4Code.eventsList0x8f2c54(runtimeScene);} //End of subevents
}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q4Code.condition1IsTrue_0.val) {
gdjs.Q4Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q4Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q4Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects1[i].setOpacity(gdjs.Q4Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q4Code.eventsList0x8f3364(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q4Code.eventsList0x8f18fc
gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q4Code.GDQ_95answerObjects2});gdjs.Q4Code.eventsList0x8f3cf4 = function(runtimeScene) {

{

gdjs.Q4Code.GDQ_95answerObjects3.createFrom(gdjs.Q4Code.GDQ_95answerObjects2);


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q4Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q4Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 1 ) {
        gdjs.Q4Code.condition0IsTrue_0.val = true;
        gdjs.Q4Code.GDQ_95answerObjects3[k] = gdjs.Q4Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q4Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9388108);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


{

gdjs.Q4Code.GDQ_95answerObjects3.createFrom(gdjs.Q4Code.GDQ_95answerObjects2);


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDQ_95answerObjects3.length;i<l;++i) {
    if ( gdjs.Q4Code.GDQ_95answerObjects3[i].getVariableNumber(gdjs.Q4Code.GDQ_95answerObjects3[i].getVariables().get("ans")) == 2 ) {
        gdjs.Q4Code.condition0IsTrue_0.val = true;
        gdjs.Q4Code.GDQ_95answerObjects3[k] = gdjs.Q4Code.GDQ_95answerObjects3[i];
        ++k;
    }
}
gdjs.Q4Code.GDQ_95answerObjects3.length = k;}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9389316);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects3 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects3.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects3[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound design multimedia accent error bleeps heavy synth 01_SFXBible_ss03494.mp3", false, 50, 1);
}{gdjs.deviceVibration.startVibration(1);
}}

}


{

/* Reuse gdjs.Q4Code.GDQ_95answerObjects2 */

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDQ_95answerObjects2.length;i<l;++i) {
    if ( gdjs.Q4Code.GDQ_95answerObjects2[i].getVariableNumber(gdjs.Q4Code.GDQ_95answerObjects2[i].getVariables().get("ans")) == 3 ) {
        gdjs.Q4Code.condition0IsTrue_0.val = true;
        gdjs.Q4Code.GDQ_95answerObjects2[k] = gdjs.Q4Code.GDQ_95answerObjects2[i];
        ++k;
    }
}
gdjs.Q4Code.GDQ_95answerObjects2.length = k;}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
gdjs.Q4Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9390724);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects2[i].setBlendMode(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{gdjs.deviceVibration.startVibration(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock_level_Game_Sound.mp3", false, 50, 1);
}}

}


}; //End of gdjs.Q4Code.eventsList0x8f3cf4
gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects = Hashtable.newFrom({"Q_answer": gdjs.Q4Code.GDQ_95answerObjects2});gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDnextBTNObjects2Objects = Hashtable.newFrom({"nextBTN": gdjs.Q4Code.GDnextBTNObjects2});gdjs.Q4Code.eventsList0x8f4fbc = function(runtimeScene) {

{

/* Reuse gdjs.Q4Code.GDnextBTNObjects2 */

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDnextBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition2IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9393380);
}
}}
}
if (gdjs.Q4Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q4Code.eventsList0x8f4fbc
gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.Q4Code.GDreplayObjects1});gdjs.Q4Code.eventsList0x8f564c = function(runtimeScene) {

{

/* Reuse gdjs.Q4Code.GDreplayObjects1 */

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
gdjs.Q4Code.condition2IsTrue_0.val = false;
gdjs.Q4Code.condition3IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDreplayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Q4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Q4Code.GDreplayObjects1.length;i<l;++i) {
    if ( gdjs.Q4Code.GDreplayObjects1[i].timerElapsedTime("replay", 2) ) {
        gdjs.Q4Code.condition2IsTrue_0.val = true;
        gdjs.Q4Code.GDreplayObjects1[k] = gdjs.Q4Code.GDreplayObjects1[i];
        ++k;
    }
}
gdjs.Q4Code.GDreplayObjects1.length = k;}if ( gdjs.Q4Code.condition2IsTrue_0.val ) {
{
{gdjs.Q4Code.conditionTrue_1 = gdjs.Q4Code.condition3IsTrue_0;
gdjs.Q4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9395220);
}
}}
}
}
if (gdjs.Q4Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDreplayObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q4", false);
}{for(var i = 0, len = gdjs.Q4Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDreplayObjects1[i].resetTimer("replay");
}
}}

}


}; //End of gdjs.Q4Code.eventsList0x8f564c
gdjs.Q4Code.eventsList0x8f3bec = function(runtimeScene) {

{

gdjs.Q4Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, false);
}if (gdjs.Q4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q4Code.eventsList0x8f3cf4(runtimeScene);} //End of subevents
}

}


{

gdjs.Q4Code.GDQ_95answerObjects2.createFrom(runtimeScene.getObjects("Q_answer"));

gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDQ_9595answerObjects2Objects, runtimeScene, true, true);
}if (gdjs.Q4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Q4Code.GDQ_95answerObjects2 */
{for(var i = 0, len = gdjs.Q4Code.GDQ_95answerObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDQ_95answerObjects2[i].setBlendMode(2);
}
}}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}}
if (gdjs.Q4Code.condition1IsTrue_0.val) {
gdjs.Q4Code.GDCorrectObjects2.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q4Code.GDcoverObjects2.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q4Code.GDnextBTNObjects2.createFrom(runtimeScene.getObjects("nextBTN"));
{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDnextBTNObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDnextBTNObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDCorrectObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDCorrectObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects2.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects2[i].setOpacity(gdjs.Q4Code.GDcoverObjects2[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q4Code.eventsList0x8f4fbc(runtimeScene);} //End of subevents
}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}}
if (gdjs.Q4Code.condition1IsTrue_0.val) {
gdjs.Q4Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q4Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q4Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDreplayObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects1[i].setOpacity(gdjs.Q4Code.GDcoverObjects1[i].getOpacity() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Q4Code.eventsList0x8f564c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Q4Code.eventsList0x8f3bec
gdjs.Q4Code.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q4Code.condition0IsTrue_0.val) {
gdjs.Q4Code.GDCorrectObjects1.createFrom(runtimeScene.getObjects("Correct"));
gdjs.Q4Code.GDcoverObjects1.createFrom(runtimeScene.getObjects("cover"));
gdjs.Q4Code.GDnextBTNObjects1.createFrom(runtimeScene.getObjects("nextBTN"));
gdjs.Q4Code.GDreplayObjects1.createFrom(runtimeScene.getObjects("replay"));
gdjs.Q4Code.GDwrongObjects1.createFrom(runtimeScene.getObjects("wrong"));
{for(var i = 0, len = gdjs.Q4Code.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDCorrectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q4Code.GDwrongObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q4Code.GDreplayObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDreplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q4Code.GDnextBTNObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDnextBTNObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Q4Code.GDcoverObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDcoverObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Q4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q4Code.eventsList0x8f18fc(runtimeScene);} //End of subevents
}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Q4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Q4Code.eventsList0x8f3bec(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.Q4Code.eventsList0x5b6e18


gdjs.Q4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q4Code.GDdark_95BGObjects1.length = 0;
gdjs.Q4Code.GDdark_95BGObjects2.length = 0;
gdjs.Q4Code.GDdark_95BGObjects3.length = 0;
gdjs.Q4Code.GDdark_95BGObjects4.length = 0;
gdjs.Q4Code.GDQ_95BGObjects1.length = 0;
gdjs.Q4Code.GDQ_95BGObjects2.length = 0;
gdjs.Q4Code.GDQ_95BGObjects3.length = 0;
gdjs.Q4Code.GDQ_95BGObjects4.length = 0;
gdjs.Q4Code.GDques_95BGObjects1.length = 0;
gdjs.Q4Code.GDques_95BGObjects2.length = 0;
gdjs.Q4Code.GDques_95BGObjects3.length = 0;
gdjs.Q4Code.GDques_95BGObjects4.length = 0;
gdjs.Q4Code.GDQ_95answerObjects1.length = 0;
gdjs.Q4Code.GDQ_95answerObjects2.length = 0;
gdjs.Q4Code.GDQ_95answerObjects3.length = 0;
gdjs.Q4Code.GDQ_95answerObjects4.length = 0;
gdjs.Q4Code.GDNewObjectObjects1.length = 0;
gdjs.Q4Code.GDNewObjectObjects2.length = 0;
gdjs.Q4Code.GDNewObjectObjects3.length = 0;
gdjs.Q4Code.GDNewObjectObjects4.length = 0;
gdjs.Q4Code.GDcoverObjects1.length = 0;
gdjs.Q4Code.GDcoverObjects2.length = 0;
gdjs.Q4Code.GDcoverObjects3.length = 0;
gdjs.Q4Code.GDcoverObjects4.length = 0;
gdjs.Q4Code.GDCorrectObjects1.length = 0;
gdjs.Q4Code.GDCorrectObjects2.length = 0;
gdjs.Q4Code.GDCorrectObjects3.length = 0;
gdjs.Q4Code.GDCorrectObjects4.length = 0;
gdjs.Q4Code.GDwrongObjects1.length = 0;
gdjs.Q4Code.GDwrongObjects2.length = 0;
gdjs.Q4Code.GDwrongObjects3.length = 0;
gdjs.Q4Code.GDwrongObjects4.length = 0;
gdjs.Q4Code.GDreplayObjects1.length = 0;
gdjs.Q4Code.GDreplayObjects2.length = 0;
gdjs.Q4Code.GDreplayObjects3.length = 0;
gdjs.Q4Code.GDreplayObjects4.length = 0;
gdjs.Q4Code.GDnextBTNObjects1.length = 0;
gdjs.Q4Code.GDnextBTNObjects2.length = 0;
gdjs.Q4Code.GDnextBTNObjects3.length = 0;
gdjs.Q4Code.GDnextBTNObjects4.length = 0;
gdjs.Q4Code.GDquizObjects1.length = 0;
gdjs.Q4Code.GDquizObjects2.length = 0;
gdjs.Q4Code.GDquizObjects3.length = 0;
gdjs.Q4Code.GDquizObjects4.length = 0;
gdjs.Q4Code.GDquestionObjects1.length = 0;
gdjs.Q4Code.GDquestionObjects2.length = 0;
gdjs.Q4Code.GDquestionObjects3.length = 0;
gdjs.Q4Code.GDquestionObjects4.length = 0;
gdjs.Q4Code.GDans1Objects1.length = 0;
gdjs.Q4Code.GDans1Objects2.length = 0;
gdjs.Q4Code.GDans1Objects3.length = 0;
gdjs.Q4Code.GDans1Objects4.length = 0;
gdjs.Q4Code.GDans2Objects1.length = 0;
gdjs.Q4Code.GDans2Objects2.length = 0;
gdjs.Q4Code.GDans2Objects3.length = 0;
gdjs.Q4Code.GDans2Objects4.length = 0;
gdjs.Q4Code.GDans3Objects1.length = 0;
gdjs.Q4Code.GDans3Objects2.length = 0;
gdjs.Q4Code.GDans3Objects3.length = 0;
gdjs.Q4Code.GDans3Objects4.length = 0;

gdjs.Q4Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Q4Code'] = gdjs.Q4Code;
