gdjs.SettingsCode = {};
gdjs.SettingsCode.GDSettingsObjects1= [];
gdjs.SettingsCode.GDSettingsObjects2= [];
gdjs.SettingsCode.GDSettingsObjects3= [];
gdjs.SettingsCode.GDSettingsObjects4= [];
gdjs.SettingsCode.GDBackObjects1= [];
gdjs.SettingsCode.GDBackObjects2= [];
gdjs.SettingsCode.GDBackObjects3= [];
gdjs.SettingsCode.GDBackObjects4= [];
gdjs.SettingsCode.GDSensitivityLineObjects1= [];
gdjs.SettingsCode.GDSensitivityLineObjects2= [];
gdjs.SettingsCode.GDSensitivityLineObjects3= [];
gdjs.SettingsCode.GDSensitivityLineObjects4= [];
gdjs.SettingsCode.GDSensivityBallObjects1= [];
gdjs.SettingsCode.GDSensivityBallObjects2= [];
gdjs.SettingsCode.GDSensivityBallObjects3= [];
gdjs.SettingsCode.GDSensivityBallObjects4= [];
gdjs.SettingsCode.GDSensitivityHiddenObjects1= [];
gdjs.SettingsCode.GDSensitivityHiddenObjects2= [];
gdjs.SettingsCode.GDSensitivityHiddenObjects3= [];
gdjs.SettingsCode.GDSensitivityHiddenObjects4= [];
gdjs.SettingsCode.GDSensitivityObjects1= [];
gdjs.SettingsCode.GDSensitivityObjects2= [];
gdjs.SettingsCode.GDSensitivityObjects3= [];
gdjs.SettingsCode.GDSensitivityObjects4= [];
gdjs.SettingsCode.GDSensitivityLevelObjects1= [];
gdjs.SettingsCode.GDSensitivityLevelObjects2= [];
gdjs.SettingsCode.GDSensitivityLevelObjects3= [];
gdjs.SettingsCode.GDSensitivityLevelObjects4= [];
gdjs.SettingsCode.GDBackgroundObjectObjects1= [];
gdjs.SettingsCode.GDBackgroundObjectObjects2= [];
gdjs.SettingsCode.GDBackgroundObjectObjects3= [];
gdjs.SettingsCode.GDBackgroundObjectObjects4= [];
gdjs.SettingsCode.GDMuteToggleObjects1= [];
gdjs.SettingsCode.GDMuteToggleObjects2= [];
gdjs.SettingsCode.GDMuteToggleObjects3= [];
gdjs.SettingsCode.GDMuteToggleObjects4= [];
gdjs.SettingsCode.GDVibrateToggleObjects1= [];
gdjs.SettingsCode.GDVibrateToggleObjects2= [];
gdjs.SettingsCode.GDVibrateToggleObjects3= [];
gdjs.SettingsCode.GDVibrateToggleObjects4= [];
gdjs.SettingsCode.GDControlsToggleObjects1= [];
gdjs.SettingsCode.GDControlsToggleObjects2= [];
gdjs.SettingsCode.GDControlsToggleObjects3= [];
gdjs.SettingsCode.GDControlsToggleObjects4= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.conditionTrue_1 = {val:false};
gdjs.SettingsCode.condition0IsTrue_1 = {val:false};
gdjs.SettingsCode.condition1IsTrue_1 = {val:false};
gdjs.SettingsCode.condition2IsTrue_1 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.SettingsCode.GDBackObjects1});
gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SettingsCode.GDBackObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), false);
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSensitivityHiddenObjects2Objects = Hashtable.newFrom({"SensitivityHidden": gdjs.SettingsCode.GDSensitivityHiddenObjects2});
gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SensitivityHidden"), gdjs.SettingsCode.GDSensitivityHiddenObjects3);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDSensitivityHiddenObjects3.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSensitivityHiddenObjects3[i].getCenterXInScene() < 128 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDSensitivityHiddenObjects3[k] = gdjs.SettingsCode.GDSensitivityHiddenObjects3[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSensitivityHiddenObjects3.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDSensitivityHiddenObjects3 */
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityHiddenObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityHiddenObjects3[i].setCenterXInScene(128);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SensitivityHidden"), gdjs.SettingsCode.GDSensitivityHiddenObjects3);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDSensitivityHiddenObjects3.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSensitivityHiddenObjects3[i].getCenterXInScene() > 640 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDSensitivityHiddenObjects3[k] = gdjs.SettingsCode.GDSensitivityHiddenObjects3[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSensitivityHiddenObjects3.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDSensitivityHiddenObjects3 */
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityHiddenObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityHiddenObjects3[i].setCenterXInScene(640);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SensivityBall"), gdjs.SettingsCode.GDSensivityBallObjects3);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDSensivityBallObjects3.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSensivityBallObjects3[i].getCenterXInScene() < 128 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDSensivityBallObjects3[k] = gdjs.SettingsCode.GDSensivityBallObjects3[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSensivityBallObjects3.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDSensivityBallObjects3 */
{for(var i = 0, len = gdjs.SettingsCode.GDSensivityBallObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensivityBallObjects3[i].setCenterXInScene(128);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SensivityBall"), gdjs.SettingsCode.GDSensivityBallObjects3);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDSensivityBallObjects3.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSensivityBallObjects3[i].getCenterXInScene() > 640 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDSensivityBallObjects3[k] = gdjs.SettingsCode.GDSensivityBallObjects3[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSensivityBallObjects3.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDSensivityBallObjects3 */
{for(var i = 0, len = gdjs.SettingsCode.GDSensivityBallObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensivityBallObjects3[i].setCenterXInScene(640);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SensivityBall"), gdjs.SettingsCode.GDSensivityBallObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDSensivityBallObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSensivityBallObjects2[i].getCenterXInScene() <= 640 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDSensivityBallObjects2[k] = gdjs.SettingsCode.GDSensivityBallObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSensivityBallObjects2.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDSensivityBallObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSensivityBallObjects2[i].getCenterXInScene() >= 128 ) {
        gdjs.SettingsCode.condition1IsTrue_0.val = true;
        gdjs.SettingsCode.GDSensivityBallObjects2[k] = gdjs.SettingsCode.GDSensivityBallObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSensivityBallObjects2.length = k;}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDSensivityBallObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(((((((( gdjs.SettingsCode.GDSensivityBallObjects2.length === 0 ) ? 0 :gdjs.SettingsCode.GDSensivityBallObjects2[0].getCenterXInScene()) + 128) / 32) - 16) * -(1)) + 16));
}}

}


};gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != -(1) * ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 16) / 2);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(0).setNumber(-(1) * ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 16) / 2));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition0IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10707180);
}
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SensitivityHidden"), gdjs.SettingsCode.GDSensitivityHiddenObjects2);
gdjs.copyArray(runtimeScene.getObjects("SensivityBall"), gdjs.SettingsCode.GDSensivityBallObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityHiddenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityHiddenObjects2[i].setCenterXInScene(((((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 16) * -(1)) + 16) * 32) - 128);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDSensivityBallObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensivityBallObjects2[i].setCenterXInScene(((((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 16) * -(1)) + 16) * 32) - 128);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("SensitivityHidden"), gdjs.SettingsCode.GDSensitivityHiddenObjects2);
gdjs.copyArray(runtimeScene.getObjects("SensitivityLine"), gdjs.SettingsCode.GDSensitivityLineObjects2);
gdjs.copyArray(runtimeScene.getObjects("SensivityBall"), gdjs.SettingsCode.GDSensivityBallObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDSensivityBallObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensivityBallObjects2[i].setCenterYInScene((( gdjs.SettingsCode.GDSensitivityLineObjects2.length === 0 ) ? 0 :gdjs.SettingsCode.GDSensitivityLineObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityHiddenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityHiddenObjects2[i].setCenterYInScene((( gdjs.SettingsCode.GDSensitivityLineObjects2.length === 0 ) ? 0 :gdjs.SettingsCode.GDSensitivityLineObjects2[0].getCenterYInScene()));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("SensitivityHidden"), gdjs.SettingsCode.GDSensitivityHiddenObjects2);
gdjs.copyArray(runtimeScene.getObjects("SensivityBall"), gdjs.SettingsCode.GDSensivityBallObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDSensivityBallObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensivityBallObjects2[i].setCenterXInScene((Math.round(((( gdjs.SettingsCode.GDSensitivityHiddenObjects2.length === 0 ) ? 0 :gdjs.SettingsCode.GDSensitivityHiddenObjects2[0].getCenterXInScene()) / 64))) * 64);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SensitivityHidden"), gdjs.SettingsCode.GDSensitivityHiddenObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDSensitivityHiddenObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDSensitivityHiddenObjects2 */
gdjs.copyArray(runtimeScene.getObjects("SensivityBall"), gdjs.SettingsCode.GDSensivityBallObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityHiddenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityHiddenObjects2[i].setCenterXInScene((( gdjs.SettingsCode.GDSensivityBallObjects2.length === 0 ) ? 0 :gdjs.SettingsCode.GDSensivityBallObjects2[0].getCenterXInScene()));
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 16;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sensitivity"), gdjs.SettingsCode.GDSensitivityObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityObjects2[i].setString(gdjs.evtTools.common.toString(-(1) * ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 16) / 2)));
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 16;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sensitivity"), gdjs.SettingsCode.GDSensitivityObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityObjects2[i].setString("Default");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 16;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sensitivity"), gdjs.SettingsCode.GDSensitivityObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityObjects2[i].setString("+" + gdjs.evtTools.common.toString(-(1) * ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 16) / 2)));
}
}}

}


{


gdjs.SettingsCode.eventsList1(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Sensitivity"), gdjs.SettingsCode.GDSensitivityObjects1);
gdjs.copyArray(runtimeScene.getObjects("SensitivityLevel"), gdjs.SettingsCode.GDSensitivityLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SensitivityLine"), gdjs.SettingsCode.GDSensitivityLineObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityObjects1[i].setCenterXInScene((( gdjs.SettingsCode.GDSensitivityLineObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSensitivityLineObjects1[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.SettingsCode.GDSensitivityLevelObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSensitivityLevelObjects1[i].setCenterXInScene((( gdjs.SettingsCode.GDSensitivityLineObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDSensitivityLineObjects1[0].getCenterXInScene()));
}
}}

}


};gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MuteToggle"), gdjs.SettingsCode.GDMuteToggleObjects3);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.SettingsCode.GDMuteToggleObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDMuteToggleObjects3[i].setAnimation(1);
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MuteToggle"), gdjs.SettingsCode.GDMuteToggleObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDMuteToggleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMuteToggleObjects2[i].setAnimation(0);
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMuteToggleObjects1Objects = Hashtable.newFrom({"MuteToggle": gdjs.SettingsCode.GDMuteToggleObjects1});
gdjs.SettingsCode.eventsList4 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}}

}


};gdjs.SettingsCode.eventsList5 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}}

}


};gdjs.SettingsCode.eventsList6 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.SettingsCode.GDMuteToggleObjects1, gdjs.SettingsCode.GDMuteToggleObjects2);

{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.SettingsCode.GDMuteToggleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMuteToggleObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}
{ //Subevents
gdjs.SettingsCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDMuteToggleObjects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDMuteToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMuteToggleObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}
{ //Subevents
gdjs.SettingsCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList7 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition0IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10717260);
}
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuteToggle"), gdjs.SettingsCode.GDMuteToggleObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMuteToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.SettingsCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList8 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VibrateToggle"), gdjs.SettingsCode.GDVibrateToggleObjects3);
{for(var i = 0, len = gdjs.SettingsCode.GDVibrateToggleObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDVibrateToggleObjects3[i].setAnimation(0);
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VibrateToggle"), gdjs.SettingsCode.GDVibrateToggleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDVibrateToggleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDVibrateToggleObjects2[i].setAnimation(1);
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDVibrateToggleObjects1Objects = Hashtable.newFrom({"VibrateToggle": gdjs.SettingsCode.GDVibrateToggleObjects1});
gdjs.SettingsCode.eventsList9 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.SettingsCode.GDVibrateToggleObjects1, gdjs.SettingsCode.GDVibrateToggleObjects2);

{for(var i = 0, len = gdjs.SettingsCode.GDVibrateToggleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDVibrateToggleObjects2[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}{gdjs.deviceVibration.startVibration(5);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVibrateToggleObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDVibrateToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVibrateToggleObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


};gdjs.SettingsCode.eventsList10 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition0IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10723364);
}
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VibrateToggle"), gdjs.SettingsCode.GDVibrateToggleObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDVibrateToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.SettingsCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList11 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.SettingsCode.GDControlsToggleObjects3);
{for(var i = 0, len = gdjs.SettingsCode.GDControlsToggleObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsToggleObjects3[i].setAnimation(0);
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.SettingsCode.GDControlsToggleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDControlsToggleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsToggleObjects2[i].setAnimation(1);
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDControlsToggleObjects1Objects = Hashtable.newFrom({"ControlsToggle": gdjs.SettingsCode.GDControlsToggleObjects1});
gdjs.SettingsCode.eventsList12 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}}

}


};gdjs.SettingsCode.eventsList13 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}}

}


};gdjs.SettingsCode.eventsList14 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.SettingsCode.GDControlsToggleObjects1, gdjs.SettingsCode.GDControlsToggleObjects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}{for(var i = 0, len = gdjs.SettingsCode.GDControlsToggleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsToggleObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.SettingsCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDControlsToggleObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}{for(var i = 0, len = gdjs.SettingsCode.GDControlsToggleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDControlsToggleObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.SettingsCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList15 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition0IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10728036);
}
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SettingsCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ControlsToggle"), gdjs.SettingsCode.GDControlsToggleObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDControlsToggleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3));
}
{ //Subevents
gdjs.SettingsCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList16 = function(runtimeScene) {

{


gdjs.SettingsCode.eventsList0(runtimeScene);
}


{


gdjs.SettingsCode.eventsList2(runtimeScene);
}


{


gdjs.SettingsCode.eventsList7(runtimeScene);
}


{


gdjs.SettingsCode.eventsList10(runtimeScene);
}


{


gdjs.SettingsCode.eventsList15(runtimeScene);
}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDSettingsObjects1.length = 0;
gdjs.SettingsCode.GDSettingsObjects2.length = 0;
gdjs.SettingsCode.GDSettingsObjects3.length = 0;
gdjs.SettingsCode.GDSettingsObjects4.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects3.length = 0;
gdjs.SettingsCode.GDBackObjects4.length = 0;
gdjs.SettingsCode.GDSensitivityLineObjects1.length = 0;
gdjs.SettingsCode.GDSensitivityLineObjects2.length = 0;
gdjs.SettingsCode.GDSensitivityLineObjects3.length = 0;
gdjs.SettingsCode.GDSensitivityLineObjects4.length = 0;
gdjs.SettingsCode.GDSensivityBallObjects1.length = 0;
gdjs.SettingsCode.GDSensivityBallObjects2.length = 0;
gdjs.SettingsCode.GDSensivityBallObjects3.length = 0;
gdjs.SettingsCode.GDSensivityBallObjects4.length = 0;
gdjs.SettingsCode.GDSensitivityHiddenObjects1.length = 0;
gdjs.SettingsCode.GDSensitivityHiddenObjects2.length = 0;
gdjs.SettingsCode.GDSensitivityHiddenObjects3.length = 0;
gdjs.SettingsCode.GDSensitivityHiddenObjects4.length = 0;
gdjs.SettingsCode.GDSensitivityObjects1.length = 0;
gdjs.SettingsCode.GDSensitivityObjects2.length = 0;
gdjs.SettingsCode.GDSensitivityObjects3.length = 0;
gdjs.SettingsCode.GDSensitivityObjects4.length = 0;
gdjs.SettingsCode.GDSensitivityLevelObjects1.length = 0;
gdjs.SettingsCode.GDSensitivityLevelObjects2.length = 0;
gdjs.SettingsCode.GDSensitivityLevelObjects3.length = 0;
gdjs.SettingsCode.GDSensitivityLevelObjects4.length = 0;
gdjs.SettingsCode.GDBackgroundObjectObjects1.length = 0;
gdjs.SettingsCode.GDBackgroundObjectObjects2.length = 0;
gdjs.SettingsCode.GDBackgroundObjectObjects3.length = 0;
gdjs.SettingsCode.GDBackgroundObjectObjects4.length = 0;
gdjs.SettingsCode.GDMuteToggleObjects1.length = 0;
gdjs.SettingsCode.GDMuteToggleObjects2.length = 0;
gdjs.SettingsCode.GDMuteToggleObjects3.length = 0;
gdjs.SettingsCode.GDMuteToggleObjects4.length = 0;
gdjs.SettingsCode.GDVibrateToggleObjects1.length = 0;
gdjs.SettingsCode.GDVibrateToggleObjects2.length = 0;
gdjs.SettingsCode.GDVibrateToggleObjects3.length = 0;
gdjs.SettingsCode.GDVibrateToggleObjects4.length = 0;
gdjs.SettingsCode.GDControlsToggleObjects1.length = 0;
gdjs.SettingsCode.GDControlsToggleObjects2.length = 0;
gdjs.SettingsCode.GDControlsToggleObjects3.length = 0;
gdjs.SettingsCode.GDControlsToggleObjects4.length = 0;

gdjs.SettingsCode.eventsList16(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
