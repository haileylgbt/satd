gdjs.tech_32demoCode = {};
gdjs.tech_32demoCode.GDPlayerObjects1= [];
gdjs.tech_32demoCode.GDPlayerObjects2= [];
gdjs.tech_32demoCode.GDStickierGroundObjects1= [];
gdjs.tech_32demoCode.GDStickierGroundObjects2= [];
gdjs.tech_32demoCode.GDStickyGroundObjects1= [];
gdjs.tech_32demoCode.GDStickyGroundObjects2= [];
gdjs.tech_32demoCode.GDNewObject22Objects1= [];
gdjs.tech_32demoCode.GDNewObject22Objects2= [];
gdjs.tech_32demoCode.GDNewObject232Objects1= [];
gdjs.tech_32demoCode.GDNewObject232Objects2= [];
gdjs.tech_32demoCode.GDNewObject23Objects1= [];
gdjs.tech_32demoCode.GDNewObject23Objects2= [];
gdjs.tech_32demoCode.GDNewObject24Objects1= [];
gdjs.tech_32demoCode.GDNewObject24Objects2= [];
gdjs.tech_32demoCode.GDNewObject25Objects1= [];
gdjs.tech_32demoCode.GDNewObject25Objects2= [];
gdjs.tech_32demoCode.GDNewObject262Objects1= [];
gdjs.tech_32demoCode.GDNewObject262Objects2= [];
gdjs.tech_32demoCode.GDNewObject26Objects1= [];
gdjs.tech_32demoCode.GDNewObject26Objects2= [];
gdjs.tech_32demoCode.GDNewObject2Objects1= [];
gdjs.tech_32demoCode.GDNewObject2Objects2= [];
gdjs.tech_32demoCode.GDSlipperyGroundObjects1= [];
gdjs.tech_32demoCode.GDSlipperyGroundObjects2= [];
gdjs.tech_32demoCode.GDStaticGroundObjects1= [];
gdjs.tech_32demoCode.GDStaticGroundObjects2= [];
gdjs.tech_32demoCode.GDNormalGroundObjects1= [];
gdjs.tech_32demoCode.GDNormalGroundObjects2= [];

gdjs.tech_32demoCode.conditionTrue_0 = {val:false};
gdjs.tech_32demoCode.condition0IsTrue_0 = {val:false};
gdjs.tech_32demoCode.condition1IsTrue_0 = {val:false};
gdjs.tech_32demoCode.condition2IsTrue_0 = {val:false};
gdjs.tech_32demoCode.condition3IsTrue_0 = {val:false};


gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.tech_32demoCode.GDPlayerObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStickyGroundObjects1Objects = Hashtable.newFrom({"StickyGround": gdjs.tech_32demoCode.GDStickyGroundObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.tech_32demoCode.GDPlayerObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStickierGroundObjects1Objects = Hashtable.newFrom({"StickierGround": gdjs.tech_32demoCode.GDStickierGroundObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.tech_32demoCode.GDPlayerObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDNormalGroundObjects1Objects = Hashtable.newFrom({"NormalGround": gdjs.tech_32demoCode.GDNormalGroundObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.tech_32demoCode.GDPlayerObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDSlipperyGroundObjects1Objects = Hashtable.newFrom({"SlipperyGround": gdjs.tech_32demoCode.GDSlipperyGroundObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.tech_32demoCode.GDPlayerObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDSlipperyGroundObjects1Objects = Hashtable.newFrom({"SlipperyGround": gdjs.tech_32demoCode.GDSlipperyGroundObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.tech_32demoCode.GDPlayerObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStaticGroundObjects1Objects = Hashtable.newFrom({"StaticGround": gdjs.tech_32demoCode.GDStaticGroundObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.tech_32demoCode.GDPlayerObjects1});gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStaticGroundObjects1Objects = Hashtable.newFrom({"StaticGround": gdjs.tech_32demoCode.GDStaticGroundObjects1});gdjs.tech_32demoCode.eventsList0 = function(runtimeScene) {

{


gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
gdjs.tech_32demoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
gdjs.tech_32demoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].returnVariable(gdjs.tech_32demoCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}}

}


{


gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
gdjs.tech_32demoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].setAnimationName("run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].setAnimationName("fall");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getCurrentFallSpeed() > 200 ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].setAnimationName("fall");
}
}}

}


{


gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
gdjs.tech_32demoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "944626665278021642", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Doing something", "In the test world", 0, 0, "", "", "", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
{
gdjs.tech_32demoCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.tech_32demoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.tech_32demoCode.GDPlayerObjects1.length !== 0 ? gdjs.tech_32demoCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("StickyGround"), gdjs.tech_32demoCode.GDStickyGroundObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
gdjs.tech_32demoCode.condition1IsTrue_0.val = false;
gdjs.tech_32demoCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Jump")) ) {
        gdjs.tech_32demoCode.condition1IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition1IsTrue_0.val ) {
{
gdjs.tech_32demoCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects, gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStickyGroundObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.tech_32demoCode.condition2IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("StickierGround"), gdjs.tech_32demoCode.GDStickierGroundObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
gdjs.tech_32demoCode.condition1IsTrue_0.val = false;
gdjs.tech_32demoCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Jump")) ) {
        gdjs.tech_32demoCode.condition1IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition1IsTrue_0.val ) {
{
gdjs.tech_32demoCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects, gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStickierGroundObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.tech_32demoCode.condition2IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NormalGround"), gdjs.tech_32demoCode.GDNormalGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
gdjs.tech_32demoCode.condition1IsTrue_0.val = false;
gdjs.tech_32demoCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Jump")) ) {
        gdjs.tech_32demoCode.condition1IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition1IsTrue_0.val ) {
{
gdjs.tech_32demoCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects, gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDNormalGroundObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.tech_32demoCode.condition2IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlipperyGround"), gdjs.tech_32demoCode.GDSlipperyGroundObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
gdjs.tech_32demoCode.condition1IsTrue_0.val = false;
gdjs.tech_32demoCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Jump")) ) {
        gdjs.tech_32demoCode.condition1IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition1IsTrue_0.val ) {
{
gdjs.tech_32demoCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects, gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDSlipperyGroundObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.tech_32demoCode.condition2IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(500);
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setDeceleration(500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlipperyGround"), gdjs.tech_32demoCode.GDSlipperyGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("StaticGround"), gdjs.tech_32demoCode.GDStaticGroundObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
gdjs.tech_32demoCode.condition1IsTrue_0.val = false;
{
gdjs.tech_32demoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects, gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDSlipperyGroundObjects1Objects, true, runtimeScene, false);
}if ( gdjs.tech_32demoCode.condition0IsTrue_0.val ) {
{
gdjs.tech_32demoCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects, gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStaticGroundObjects1Objects, true, runtimeScene, false);
}}
if (gdjs.tech_32demoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setDeceleration(2000);
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(2000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.tech_32demoCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("StaticGround"), gdjs.tech_32demoCode.GDStaticGroundObjects1);

gdjs.tech_32demoCode.condition0IsTrue_0.val = false;
gdjs.tech_32demoCode.condition1IsTrue_0.val = false;
gdjs.tech_32demoCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.tech_32demoCode.condition0IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.tech_32demoCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Jump")) ) {
        gdjs.tech_32demoCode.condition1IsTrue_0.val = true;
        gdjs.tech_32demoCode.GDPlayerObjects1[k] = gdjs.tech_32demoCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.tech_32demoCode.GDPlayerObjects1.length = k;}if ( gdjs.tech_32demoCode.condition1IsTrue_0.val ) {
{
gdjs.tech_32demoCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDPlayerObjects1Objects, gdjs.tech_32demoCode.mapOfGDgdjs_46tech_9532demoCode_46GDStaticGroundObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.tech_32demoCode.condition2IsTrue_0.val) {
/* Reuse gdjs.tech_32demoCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(9999);
}
}{for(var i = 0, len = gdjs.tech_32demoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.tech_32demoCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setDeceleration(9999);
}
}}

}


};

gdjs.tech_32demoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tech_32demoCode.GDPlayerObjects1.length = 0;
gdjs.tech_32demoCode.GDPlayerObjects2.length = 0;
gdjs.tech_32demoCode.GDStickierGroundObjects1.length = 0;
gdjs.tech_32demoCode.GDStickierGroundObjects2.length = 0;
gdjs.tech_32demoCode.GDStickyGroundObjects1.length = 0;
gdjs.tech_32demoCode.GDStickyGroundObjects2.length = 0;
gdjs.tech_32demoCode.GDNewObject22Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject22Objects2.length = 0;
gdjs.tech_32demoCode.GDNewObject232Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject232Objects2.length = 0;
gdjs.tech_32demoCode.GDNewObject23Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject23Objects2.length = 0;
gdjs.tech_32demoCode.GDNewObject24Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject24Objects2.length = 0;
gdjs.tech_32demoCode.GDNewObject25Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject25Objects2.length = 0;
gdjs.tech_32demoCode.GDNewObject262Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject262Objects2.length = 0;
gdjs.tech_32demoCode.GDNewObject26Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject26Objects2.length = 0;
gdjs.tech_32demoCode.GDNewObject2Objects1.length = 0;
gdjs.tech_32demoCode.GDNewObject2Objects2.length = 0;
gdjs.tech_32demoCode.GDSlipperyGroundObjects1.length = 0;
gdjs.tech_32demoCode.GDSlipperyGroundObjects2.length = 0;
gdjs.tech_32demoCode.GDStaticGroundObjects1.length = 0;
gdjs.tech_32demoCode.GDStaticGroundObjects2.length = 0;
gdjs.tech_32demoCode.GDNormalGroundObjects1.length = 0;
gdjs.tech_32demoCode.GDNormalGroundObjects2.length = 0;

gdjs.tech_32demoCode.eventsList0(runtimeScene);
return;

}

gdjs['tech_32demoCode'] = gdjs.tech_32demoCode;
