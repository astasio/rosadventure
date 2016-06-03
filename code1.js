gdjs.Scena_32GiocoCode = {};


gdjs.Scena_32GiocoCode.GDterraObjects1= [];
gdjs.Scena_32GiocoCode.GDrosaObjects1= [];
gdjs.Scena_32GiocoCode.GDmuroObjects1= [];
gdjs.Scena_32GiocoCode.GDerbaObjects1= [];
gdjs.Scena_32GiocoCode.GDnuvolaObjects1= [];
gdjs.Scena_32GiocoCode.GDsoldinoObjects1= [];
gdjs.Scena_32GiocoCode.GDcuoriObjects1= [];

gdjs.Scena_32GiocoCode.conditionTrue_0 = {val:false};
gdjs.Scena_32GiocoCode.condition0IsTrue_0 = {val:false};
gdjs.Scena_32GiocoCode.condition1IsTrue_0 = {val:false};

gdjs.Scena_32GiocoCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Scena_32GiocoCode.GDterraObjects1.length = 0;
gdjs.Scena_32GiocoCode.GDrosaObjects1.length = 0;
gdjs.Scena_32GiocoCode.GDmuroObjects1.length = 0;
gdjs.Scena_32GiocoCode.GDerbaObjects1.length = 0;
gdjs.Scena_32GiocoCode.GDnuvolaObjects1.length = 0;
gdjs.Scena_32GiocoCode.GDsoldinoObjects1.length = 0;
gdjs.Scena_32GiocoCode.GDcuoriObjects1.length = 0;


{

gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDrosaObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDrosaObjects1[i].flipX(true);
}
}}

}


{

gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDrosaObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDrosaObjects1[i].flipX(false);
}
}}

}


{

gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scena_32GiocoCode.GDrosaObjects1.length;i<l;++i) {
    if ( !(gdjs.Scena_32GiocoCode.GDrosaObjects1[i].getAutomatism("PlatformerObject").isMoving()) ) {
        gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = true;
        gdjs.Scena_32GiocoCode.GDrosaObjects1[k] = gdjs.Scena_32GiocoCode.GDrosaObjects1[i];
        ++k;
    }
}
gdjs.Scena_32GiocoCode.GDrosaObjects1.length = k;}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDrosaObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDrosaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scena_32GiocoCode.GDrosaObjects1.length;i<l;++i) {
    if ( gdjs.Scena_32GiocoCode.GDrosaObjects1[i].getAutomatism("PlatformerObject").isMoving() ) {
        gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = true;
        gdjs.Scena_32GiocoCode.GDrosaObjects1[k] = gdjs.Scena_32GiocoCode.GDrosaObjects1[i];
        ++k;
    }
}
gdjs.Scena_32GiocoCode.GDrosaObjects1.length = k;}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDrosaObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDrosaObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDrosaObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDrosaObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDrosaObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDrosaObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDrosaObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDrosaObjects1[i].addPolarForce(270, 300, 0);
}
}}

}


{

gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));
gdjs.Scena_32GiocoCode.GDsoldinoObjects1.createFrom(runtimeScene.getObjects("soldino"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("rosa", gdjs.Scena_32GiocoCode.GDrosaObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("soldino", gdjs.Scena_32GiocoCode.GDsoldinoObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDsoldinoObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDsoldinoObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}

}


{

gdjs.Scena_32GiocoCode.GDcuoriObjects1.createFrom(runtimeScene.getObjects("cuori"));
gdjs.Scena_32GiocoCode.GDrosaObjects1.createFrom(runtimeScene.getObjects("rosa"));

gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = false;
{
gdjs.Scena_32GiocoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("rosa", gdjs.Scena_32GiocoCode.GDrosaObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("cuori", gdjs.Scena_32GiocoCode.GDcuoriObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Scena_32GiocoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Scena_32GiocoCode.GDcuoriObjects1.length ;i < len;++i) {
    gdjs.Scena_32GiocoCode.GDcuoriObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.changeScene(runtimeScene, "Scena Gioco");
}}

}

return;
}
gdjs['Scena_32GiocoCode']= gdjs.Scena_32GiocoCode;
