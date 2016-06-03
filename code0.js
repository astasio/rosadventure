gdjs.StartCode = {};


gdjs.StartCode.GDtitoloObjects1= [];
gdjs.StartCode.GDNewObjectObjects1= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};

gdjs.StartCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.StartCode.GDtitoloObjects1.length = 0;
gdjs.StartCode.GDNewObjectObjects1.length = 0;


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "specchio.ogg", true, 30, 1);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.changeScene(runtimeScene, "Scena Gioco");
}}

}

return;
}
gdjs['StartCode']= gdjs.StartCode;
