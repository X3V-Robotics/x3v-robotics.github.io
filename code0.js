gdjs.StartScreenCode = {};
gdjs.StartScreenCode.GDSettingsObjects1= [];
gdjs.StartScreenCode.GDSettingsObjects2= [];
gdjs.StartScreenCode.GDX3VObjects1= [];
gdjs.StartScreenCode.GDX3VObjects2= [];
gdjs.StartScreenCode.GDSubtitleObjects1= [];
gdjs.StartScreenCode.GDSubtitleObjects2= [];
gdjs.StartScreenCode.GDMatchObjects1= [];
gdjs.StartScreenCode.GDMatchObjects2= [];
gdjs.StartScreenCode.GDSkillsObjects1= [];
gdjs.StartScreenCode.GDSkillsObjects2= [];
gdjs.StartScreenCode.GDMatchTxtObjects1= [];
gdjs.StartScreenCode.GDMatchTxtObjects2= [];
gdjs.StartScreenCode.GDSkillsTxtObjects1= [];
gdjs.StartScreenCode.GDSkillsTxtObjects2= [];

gdjs.StartScreenCode.conditionTrue_0 = {val:false};
gdjs.StartScreenCode.condition0IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition1IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition2IsTrue_0 = {val:false};


gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDMatchObjects1Objects = Hashtable.newFrom({"Match": gdjs.StartScreenCode.GDMatchObjects1});
gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Match"), gdjs.StartScreenCode.GDMatchObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDMatchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MatchSwipe", false);
}{gdjs.deviceVibration.startVibration(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


};gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDSkillsObjects1Objects = Hashtable.newFrom({"Skills": gdjs.StartScreenCode.GDSkillsObjects1});
gdjs.StartScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Skills"), gdjs.StartScreenCode.GDSkillsObjects1);

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDSkillsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Skills", false);
}{gdjs.deviceVibration.startVibration(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


};gdjs.StartScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.StartScreenCode.eventsList0(runtimeScene);
}


{


gdjs.StartScreenCode.eventsList1(runtimeScene);
}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDSettingsObjects1.length = 0;
gdjs.StartScreenCode.GDSettingsObjects2.length = 0;
gdjs.StartScreenCode.GDX3VObjects1.length = 0;
gdjs.StartScreenCode.GDX3VObjects2.length = 0;
gdjs.StartScreenCode.GDSubtitleObjects1.length = 0;
gdjs.StartScreenCode.GDSubtitleObjects2.length = 0;
gdjs.StartScreenCode.GDMatchObjects1.length = 0;
gdjs.StartScreenCode.GDMatchObjects2.length = 0;
gdjs.StartScreenCode.GDSkillsObjects1.length = 0;
gdjs.StartScreenCode.GDSkillsObjects2.length = 0;
gdjs.StartScreenCode.GDMatchTxtObjects1.length = 0;
gdjs.StartScreenCode.GDMatchTxtObjects2.length = 0;
gdjs.StartScreenCode.GDSkillsTxtObjects1.length = 0;
gdjs.StartScreenCode.GDSkillsTxtObjects2.length = 0;

gdjs.StartScreenCode.eventsList2(runtimeScene);
return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
