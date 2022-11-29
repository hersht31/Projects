var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies,
    Body = Matter.Body,

    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    Vector = Matter.Vector,

    World = Matter.World,
    Bounds=Matter.Bounds,
    Events=Matter.Events,
    Common = Matter.Common,

    Axes = Matter.Axes,
    Contact = Matter.Contact,
    Detector = Matter.Detector,
    Grid = Matter.Grid,
    Sleeping = Matter.Sleeping,
    Svg = Matter.Svg,
    Vertices = Matter.Vertices;

var engine = Engine.create(),
    world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#26314a',

        // showAngleIndicator: true,
        // showCollisions: true,
        // showVelocity: true
    }
});

Render.run(render);
var runner = Runner.create();
Runner.run(runner, engine);

function randomInt(num1, num2) {
    num2 -= num1 - 1;
    num3 = Math.floor(Math.random() * num2 + num1);
    return num3;
}

// Set mouse usage
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
          render: {visible: false}
      }
  });
render.mouse = mouse;
Matter.World.add(engine.world, [mouseConstraint]);

// Set camera vars
var camBody,
    followCam = false,
    camXVal = 350,
    camYVal = 350,
    camXSize = 500,
    camYSize = 450;

    // camXVal = 5500,
    // camYVal = 4500,
    // camXSize = 1000,
    // camYSize = 1000;

    // camXVal = 1000,
    // camYVal = 2000,
    // camXSize = 1000,
    // camYSize = 1000;

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//Initial Ramps

var circle2Main;
var setCircle2MainCam = true;
const plinkoBalls = [];

Composite.add(world, [
    Bodies.rectangle(0 - 100, 200, 10, 900, {isStatic: true}),
    Bodies.rectangle(700 + 100, 200, 10, 900, {isStatic: true}),
    Bodies.rectangle(310, 100, 80, 20, {isStatic: true, angle: Math.PI * -0.09}),
    Bodies.rectangle(390, 100, 80, 20, {isStatic: true, angle: Math.PI * 0.09}),
    Bodies.rectangle(100, 160, 120, 20, {isStatic: true, angle: Math.PI * -0.7}),
    Bodies.rectangle(600, 160, 120, 20, {isStatic: true, angle: Math.PI * 0.7}),
    Bodies.rectangle(350, 320, 100, 20, {isStatic: true}),
    Bodies.rectangle(240, 350, 140, 20, {isStatic: true, angle: Math.PI * -0.15}),
    Bodies.rectangle(460, 350, 140, 20, {isStatic: true, angle: Math.PI * 0.15}),
    Bodies.rectangle(50, 510, 110, 20, {isStatic: true, angle: Math.PI * -0.80}),
    Bodies.rectangle(650, 510, 110, 20, {isStatic: true, angle: Math.PI * 0.80}),
    Bodies.rectangle(250, 570, 110, 20, {isStatic: true, angle: Math.PI * -0.70}),
    Bodies.rectangle(450, 570, 110, 20, {isStatic: true, angle: Math.PI * 0.70}),
]);

// Make the 5 circles that fall at the start
intervalID2 = setInterval(makeCircle2, 1000);
var spawnCounter = 0;
function makeCircle2(){
    spawnCounter++;
    if(spawnCounter >= 5){
        clearInterval(intervalID2);
    }
    var xVal = randomInt(1, 2);
    if(xVal == 1){
        xVal = randomInt(285, 300);
    } else {
        xVal = randomInt(400, 415);
    }
    if(spawnCounter != 5){
        var circle2 = Bodies.circle(xVal, -100, 10, {restitution: 1.10});
        Body.setDensity(circle2, 0.5);
        Composite.add(world, [circle2]);
        plinkoBalls[spawnCounter - 1] = circle2;
    } else if (setCircle2MainCam){
        setCircle2MainCam = false;
        circle2Main = Bodies.circle(randomInt(285, 300), -100, 10, {restitution: 1.10});
        Body.setDensity(circle2Main, 0.5);
        Composite.add(world, [circle2Main]);
        camBody = circle2Main;
        followCam = true;
        plinkoBalls[4] = circle2Main;
    }
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Plinko

var switchToPlinkoCam = true;
group = Body.nextGroup(true);
Composite.add(world, [
    Bodies.rectangle(595, 200 + 800, 20, 900, { isStatic: true, angle: Math.PI * -0.85}),
    Bodies.rectangle(105, 200 + 800, 20, 900, { isStatic: true, angle: Math.PI * 0.85}),
    Bodies.rectangle(1110, 950, 50, 1000, { isStatic: true, angle: Math.PI * .8}),
]);

// Seesaws in the plinko
for(i = 140; i < 600; i += 140) {
    Composite.add(world, [
        seesaw3 = Bodies.rectangle(i, 700, 120, 15, { collisionFilter: { group: group } }),
        Constraint.create({ 
            bodyA: seesaw3, 
            pointB: Vector.clone(seesaw3.position),
            stiffness: 1,
            length: 0,
        }), 
    ])
}

// Adding dots in the plinko
var start3 = 50;
var end3 = 700;
for(i = 75; i < 600; i += 50){
    for(j = start3; j < end3; j += 50){
        Composite.add(world, Bodies.circle(j, i + 800, 5, {isStatic: true}));
    }
    start3 += 25;
    end3 -= 25 ;
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Cannon

let funnel1_45 = Matter.Bodies.rectangle(260, 450 + 1500, 10, 100, { isStatic: true }, )

let funnel2_45 = Matter.Bodies.rectangle(340, 450 + 1500, 10, 100, { isStatic: true }, )

var pillar3_45 = Matter.Bodies.rectangle(1400, 100 + 1500, 100, 500, { isStatic: true }, )
var pillar4_45 = Matter.Bodies.rectangle(1400, 800 + 1500, 100, 500, { isStatic: true }, )
var rect20_45 = Matter.Bodies.rectangle(1470, 450 + 1500, 100, 200, { isStatic: true })
    
var pillar5_45 = Matter.Bodies.rectangle(1100, 0 + 1500, 50, 500, { isStatic: true }, )
var pillar6_45 = Matter.Bodies.rectangle(1100, 650 + 1500, 50, 500, { isStatic: true }, )
var pillar20_45 = Matter.Bodies.rectangle(800, 0 + 1500, 50, 500, { isStatic: true }, )
var pillar1_45 = Matter.Bodies.rectangle(800, 650 + 1500, 50, 500, { isStatic: true }, )

// Rectangles right after the plinko funnel
var rampA45 = Matter.Bodies.rectangle(350, -40 + 1500, 200, 10, { isStatic: true, angle: Math.PI * 0.1}) 
var rampB45 = Matter.Bodies.rectangle(500, 50+ 1500, 200, 10, { isStatic: true, angle: Math.PI * -0.1})
var rampC45 = Matter.Bodies.rectangle(350, 160 + 1500, 210, 10, { isStatic: true, angle: Math.PI * 0.05})
var rampD45 = Matter.Bodies.rectangle(425, -70 + 1500, 10, 90, { isStatic: true, angle: Math.PI * 0.7})
var rampE45 = Matter.Bodies.rectangle(285, -90 + 1500, 10, 65, { isStatic: true, angle: Math.PI * 0.3})

let rect10_45 = Matter.Bodies.rectangle(500, 500 + 1500, 25, 10, { isStatic: true })

var JaggRect11_45 = Matter.Bodies.rectangle(700, 400 + 1500, 50, 50, { isStatic: true }, )
let JaggRect12_45 = Matter.Bodies.rectangle(500, 100 + 1500, 300, 10, { isStatic: true })
let JaggRect13_45 = Matter.Bodies.rectangle(500, 500 + 1500, 25, 10, { isStatic: true })
let JaggRect14_45 = Matter.Bodies.rectangle(500, 500 + 1500, 25, 10, { isStatic: true })
let JaggRect15_45 = Matter.Bodies.rectangle(500, 500 + 1500, 25, 10, { isStatic: true })

var JaggRect16_45 = Matter.Bodies.rectangle(700, 400 + 1500, 50, 50, { isStatic: true }, )
let JaggRect17_45 = Matter.Bodies.rectangle(500, 100 + 1500, 300, 10, { isStatic: true })
let JaggRect18_45 = Matter.Bodies.rectangle(500, 500 + 1500, 25, 10, { isStatic: true })
let JaggRect19_45 = Matter.Bodies.rectangle(500, 500 + 1500, 25, 10, { isStatic: true })

var rect20_45 = Matter.Bodies.rectangle(483, 175 + 1500, 50, 10, { isStatic: true, angle: Math.PI * 0.4})

var buttonA45 = Matter.Bodies.rectangle(1390, 1950, 30, 200)
var buttonB45 = Matter.Bodies.rectangle(1420, 1950, 30, 200, { isStatic: true })

const RECTS45 = [JaggRect11_45, JaggRect12_45, JaggRect13_45, JaggRect14_45, JaggRect15_45, JaggRect16_45, JaggRect17_45, JaggRect18_45, JaggRect19_45];
var tempX45 = 500
var tempY45 = 200 + 1500
for (let i = 0; i < 5; i++) {
    RECTS45[i] = Matter.Bodies.rectangle(tempX45, tempY45, 25, 10 , { isStatic: true })
    Body.rotate(RECTS45[i], 6.1)
    tempX45-=46
    tempY45+=23
}
tempX45 = 490
tempY45 = 230 + 1500
for (let i = 0; i < 4; i++) {
    RECTS45[i + 5] = Matter.Bodies.rectangle(tempX45, tempY45, 25, 10 , { isStatic: true })
    Body.rotate(RECTS45[i+5], 6)
    tempX45-=46
    tempY45+=23
}

Body.rotate(funnel1_45, 3)
Body.rotate(funnel2_45, -3)

let ball45 = Matter.Bodies.circle(300, 600 + 1500, 10);
ball45.render.visible = false;
let sling = Matter.Constraint.create({ 
    pointA: { x: 300, y: 600 + 1500 }, 
    bodyB: ball45, 
    stiffness: 0.05
});

let firing = false;
Matter.Events.on(mouseConstraint,'enddrag', function(e) {
    if(e.body === ball45) firing = true;
});
Matter.Events.on(engine,'afterUpdate', function() {
    if (firing && Math.abs(ball45.position.x-300) < 20 && Math.abs(ball45.position.y-2100) < 20) {
        ball45 = Matter.Bodies.circle(300, 600 + 1500, 10);
        Matter.World.add(engine.world, ball45);
        sling.bodyB = ball45;
        firing = false;
    }
});

Composite.add(world, [ball45, sling, pillar20_45, funnel1_45, funnel2_45, pillar3_45, pillar4_45, pillar5_45, pillar6_45, pillar1_45, buttonA45, buttonB45, rect20_45, 
    rampA45, rampB45, rampC45, rampD45, rampE45, RECTS45[0], RECTS45[1], RECTS45[2], RECTS45[3], RECTS45[4], RECTS45[5], RECTS45[6], RECTS45[7], RECTS45[8]]);
Composite.add(world, [
    Bodies.rectangle(370, 90 + 1500, 80, 10, { isStatic: true, angle: Math.PI * 0.25 }),
    Bodies.rectangle(900, 1200 + 1500, 1000, 30, { isStatic: true, angle: Math.PI * .9}),
]);

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Ball rolling down ramps, bouncing back and forth on platforms, and then hitting pendulums.

var makeHershBall = true;

let hershBallSix;
let hershRect1 = Matter.Bodies.rectangle(200 + 2200, 150, 700, 20, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.09, render: { fillStyle: '#ffffff' } });
let hershRect2 = Matter.Bodies.rectangle(500 + 2200, 350, 700, 20, {friction: 0.0001, isStatic: true, angle: -Math.PI * 0.09, render: { fillStyle: '#ffffff' } });
let hershRect3 = Matter.Bodies.rectangle(340 + 2200, 580, 700, 20, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.09, render: { fillStyle: '#ffffff' } });
let hershRect4 = Matter.Bodies.rectangle(700 + 2200, 685, 50, 20, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.09, render: { fillStyle: '#ffffff' } });
let hershRect5 = Matter.Bodies.rectangle(1250 + 2200, 715, 20, 150, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershRect6 = Matter.Bodies.rectangle(850 + 2200, 1000, 20, 150, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershRect7 = Matter.Bodies.rectangle(1250 + 2200, 1285, 20, 150, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershRect8 = Matter.Bodies.rectangle(850 + 2200, 1570, 20, 150, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershRect9 = Matter.Bodies.rectangle(1250 + 2200, 1855, 20, 150, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershRect10 = Matter.Bodies.rectangle(850 + 2200, 2140, 20, 150, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershRect11 = Matter.Bodies.rectangle(1340 + 2200, 2500, 1000, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershWallStatic = Matter.Bodies.rectangle(3400 + 2000, 2400, 20, 150, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
let hershPendulumBall1 = Bodies.circle(2200 + 2200, 2450, 85, { density: 0.00002, render: { fillStyle: '#ffffff' } });
let hershPendulumBall2 = Bodies.circle(2400 + 2200, 2450, 85, { density: 0.00002, render: { fillStyle: '#ffffff' } });
let hershPendulumBall3 = Bodies.circle(2600 + 2200, 2450, 85, { density: 0.00002, render: { fillStyle: '#ffffff' } });
let hershPendulumBall4 = Bodies.circle(2800 + 2200, 2450, 85, { density: 0.00002, render: { fillStyle: '#ffffff' } });
var hershPendulumBall5 = Bodies.circle(3000 + 2200, 2450, 85, { density: 0.00002, render: { fillStyle: '#ffffff' } });
Composite.add(world, hershPendulumBall1);
Composite.add(world, hershPendulumBall2);
Composite.add(world, hershPendulumBall3);
Composite.add(world, hershPendulumBall4);
Composite.add(world, hershPendulumBall5);
Composite.add(world, Constraint.create({
    pointA: { x: 2200 + 2200, y: 1800},
    bodyB: hershPendulumBall1
}));
Composite.add(world, Constraint.create({
    pointA: { x: 2400 + 2200, y: 1800},
    bodyB: hershPendulumBall2
}));
Composite.add(world, Constraint.create({
    pointA: { x: 2600 + 2200, y: 1800},
    bodyB: hershPendulumBall3
}));
Composite.add(world, Constraint.create({
    pointA: { x: 2800 + 2200, y: 1800},
    bodyB: hershPendulumBall4
}));
Composite.add(world, Constraint.create({
    pointA: { x: 3000 + 2200, y: 1800},
    bodyB: hershPendulumBall5
}));
Composite.add(world, [hershRect1, hershRect2, hershRect3, hershRect4, hershRect5, hershRect6, hershRect7, 
    hershRect8, hershRect9, hershRect10, hershRect11, hershWallStatic]);

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Dominoies into a ball bouncing on a plaform. Ball goes through portal and hits stack of blocks.

var maxobjects = [];

// create dominos 
var domino1 = Bodies.rectangle(250 + 5400, 100 + 2300, 20, 70, { isStatic: false, frictionAir: 0.01, density: 0.02, render: {sprite: {texture: 'img/domino.png'}}});
var domino2 = Bodies.rectangle(300 + 5400, 100 + 2300, 20, 70, { isStatic: false, frictionAir: 0.01, density: 0.02, render: {sprite: {texture: 'img/domino.png'}}});
var domino3 = Bodies.rectangle(350 + 5400, 100 + 2300, 20, 70, { isStatic: false, frictionAir: 0.01, density: 0.02, render: {sprite: {texture: 'img/domino.png'}}});
var domino4 = Bodies.rectangle(400 + 5400, 100 + 2300, 20, 70, { isStatic: false, frictionAir: 0.01, density: 0.02, render: {sprite: {texture: 'img/domino.png'}}});
var domino5 = Bodies.rectangle(450 + 5400, 100 + 2300, 20, 70, { isStatic: false, frictionAir: 0.01, density: 0.02, render: {sprite: {texture: 'img/domino.png'}}});
var domino6 = Bodies.rectangle(500 + 5400, 100 + 2300, 20, 70, { isStatic: false, frictionAir: 0.01, density: 0.02, render: {sprite: {texture: 'img/domino.png'}}});
maxobjects.push(domino1, domino2, domino3, domino4, domino5, domino6)

// ball that goes into portal
var maxBall = Bodies.circle(600 + 5400,100 + 2300,20, { isStatic: false, friction: 0.01, frictionAir: 0, density:.4, restitution: 0, render: {fillStyle: "red", strokeStyle: 'black', lineWidth : 3}});
maxobjects.push(maxBall);
var canSwitchtoMaxBall = true;

// changes bounciness of ball so that it bounces correctly on platforms
setInterval(function(){maxBall.restitution = 1},2500);

// ball that pushed dominos
var starterBall = Bodies.circle(100 + 5400,0 + 2300,45,{friction: 0.01, density:0.025, render: {fillStyle: "#5C5350", strokeStyle: 'black', lineWidth : 3}});
var starterBallGround = Bodies.rectangle(120 + 5400, 60 + 2300, 70, 20, { isStatic: true, render: {strokeStyle: 'white', lineWidth : 3}});
maxobjects.push(starterBall, starterBallGround);

// x y width height (params for Bodies.rectangle)

var ramp = Bodies.rectangle(100 + 5400, 100  + 2300, 200, 20, { isStatic: true, angle : 70 , render: {strokeStyle: 'white', lineWidth : 3}});
var platform = Bodies.rectangle(400 + 5400, 200 + 2300, 550, 20, { isStatic: true , render: {strokeStyle: 'white', lineWidth : 3}});
maxobjects.push(ramp,platform);

var bouncePlatform1 = Bodies.rectangle(715 + 5400, 300 + 2300, 100, 20, { isStatic: true, angle : 10, render: {strokeStyle: 'white', lineWidth : 3}});
var bouncePlatform2 = Bodies.rectangle(1000 + 5400, 500 + 2300, 100, 20, { isStatic: true, restitution: .8, render: {strokeStyle: 'white', lineWidth : 3}});
var bouncePlatform3 = Bodies.rectangle(1450 + 5400, 400 + 2300, 100, 20, { isStatic: true, restitution: .8, render: {strokeStyle: 'white', lineWidth : 3}});

maxobjects.push(bouncePlatform1, bouncePlatform2, bouncePlatform3);

// portal & ground
var inPortal = Bodies.rectangle(1700 + 5400, 300 + 2300, 20, 100, { isStatic: true, isSensor : true, render: {fillStyle: "#BF40BF", lineWidth: 5, strokeStyle: 'black'}});
var outPortal = Bodies.rectangle(3680 + 5400, 300 + 2300, 20, 100, { isStatic: true, isSensor : false, render: {fillStyle: "#BF40BF", lineWidth: 5, strokeStyle: 'black'}});
maxobjects.push(inPortal, outPortal);

// platform for stack
var ballPlatform = Bodies.rectangle(2850 + 5400, 600 + 2300, 500, 20, { isStatic: true , render: {strokeStyle: 'white', lineWidth : 3}});
maxobjects.push(ballPlatform);

// stack
var stack = Composites.stack(2710 + 5400, 306 - 25.25 - 5 * 40  + 2300, 9, 13, 0, 0, function(x, y) {
  return Bodies.rectangle(x, y, 40, 40);
});
maxobjects.push(stack);

// ramp to stack
var rampToStack = Bodies.rectangle(3400 + 5400, 480 + 2300, 600, 20, { isStatic: true, angle: 75, render: {strokeStyle: 'white', lineWidth : 3}});
maxobjects.push(rampToStack);

Composite.add(world, maxobjects);

var seesawWall = Bodies.rectangle(2660 + 5400, 270 + 2300, 60, 500);
// var maxBall = Bodies.circle(600 + 5400,100 + 2300,20, { isStatic: false, friction: 0.01, frictionAir: 0, density:.4, restitution: 0, render: {fillStyle: "red", strokeStyle: 'black', lineWidth : 3}});
// friction: 0.01, frictionAir: 0, density:.4, restitution: 0, render: {fillStyle: "red", strokeStyle: 'black', lineWidth : 3}});
var seesawBall = Bodies.circle(2605 + 5400, 500 + 2300, 20, {friction: 0.01, frictionAir: 0.01, density:0.4, restitution: 0.4});
switchCamToSeesawBall = true;

Composite.add(world, [seesawBall, seesawWall]);

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Ball goes through a maze and a set of portals

var portal1Enter = 0;
var portal5Enter = false;
var portal3Ready = false;
let button;
var collisionMode = false;
let boxA;
let ball13;
let ground14;
let ball14;
let ramp14;
let ceiling14;
let portalIn1;
let portalOut5;
let portalOut1;
let portalOut3;
let portalOut2;
let portalOut4;
let portalOut6;
let ladderRightWall;
let ladderLeftWall
let ladderHinge;
let portalOut2Enter = false;
var upLadder = false;
let catapult,rect1,rect2,rect3
let mazeWallsX = [550,400,350,300,200,400,500,150,50,200,300,200]
let mazeWallsY = [500,450,400,550,300,200,250,200,100,150,50,500]
let mazeWallsWidth = [100,1,500,1,400,1,1,300,100,1,1,200]
let mazeWallsHeight = [1,100,1,100,1,200,300,1,1,100,100,1]
let mazeWalls = []
var blockStack;
var shift = 500;
var shift2 = 1000;
var portalEntered = false;
var inMaze = false;
var verticalShift = 1000;
var blockStopper
var ramp15;
let ball15
var canSwitchtoBall15 = true;

var group = Body.nextGroup(true);
blockStopper = Bodies.rectangle(5400 + 2550, 2300 + 300,10,800,{isStatic:true})

ball14 = Bodies.circle(5400 + 880+shift+shift2, 2300 + 175+verticalShift,25)
switchtoBall14 = true;
ramp14 = Bodies.rectangle(5400 + 725+shift+shift2, 2300 + 350+verticalShift,420,1,{angle: Math.PI * .75,isStatic: true})
ramp15 = Bodies.rectangle(5400 + -50+shift2, 2300 + 350+verticalShift,420,10,{angle: Math.PI * .75,isStatic: true})
   
ground14 = Bodies.rectangle(5400 + 300+shift+shift2, 2300 + 600+verticalShift,600,1,{isStatic: true})
ceiling14 = Bodies.rectangle(5400 + 300+shift+shift2, 2300 + 00+verticalShift,600,1,{isStatic: true});//creates ceiling
let portalWall = Bodies.rectangle(5400 + 250+shift2, 2300 + 300+verticalShift,1,600,{isStatic: true});
portalIn1 = Bodies.rectangle(5400 + 500+shift2, 2300 + 150+verticalShift, 20, 100, { isStatic: true, isSensor : true, render: {fillStyle: 'purple', lineWidth: 5, strokeStyle: 'black'}});
portalOut1 = Bodies.rectangle(5400 + 250+shift2, 2300 + 50+verticalShift, 20, 100, { isStatic: true, isSensor : true, render: {fillStyle: 'purple', lineWidth: 5, strokeStyle: 'black'}});
portalOut2 = Bodies.rectangle(5400 + 250+shift2, 2300 + 250+verticalShift, 20, 100, { isStatic: true, isSensor : true, render: {fillStyle: 'purple', lineWidth: 5, strokeStyle: 'black'}});
portalOut4 = Bodies.rectangle(5400 + 250+shift2, 2300 + 450+verticalShift, 20, 100, { isStatic: true, isSensor : true, render: {fillStyle: 'purple', lineWidth: 5, strokeStyle: 'black'}});
portalOut3 = Bodies.rectangle(5400 + 500+shift2, 2300 + 350+verticalShift, 20, 100, { isStatic: true, isSensor : true, render: {fillStyle: 'purple', lineWidth: 5, strokeStyle: 'black'}});
portalOut5 = Bodies.rectangle(5400 + 375+shift2, 2300 + 575+verticalShift, 100, 20, { isStatic: true, isSensor : true, render: {fillStyle: 'purple', lineWidth: 5, strokeStyle: 'black'}});
portalOut6 = Bodies.rectangle(5400 + 125+shift2, 2300 + 575+verticalShift, 100, 20, { isStatic: true, isSensor : true, render: {fillStyle: 'purple', lineWidth: 5, strokeStyle: 'black'}});
let leftWall1 = Bodies.rectangle(5400 + 0+shift+shift2, 2300 + 50+verticalShift,1,100,{isStatic: true});
let leftWall2 = Bodies.rectangle(5400 + 0+shift+shift2, 2300 + 400+verticalShift,1,400,{isStatic: true});
let rightWall1 = Bodies.rectangle(5400 + 600+shift+shift2, 2300 + 200+verticalShift,1,400,{isStatic: true});
let rightWall2 = Bodies.rectangle(5400 + 600+shift+shift2, 2300 + 550+verticalShift,1,100,{isStatic: true});
catapult = Bodies.rectangle(5400 + 1200+shift+shift2, 2300 + 520+verticalShift, 320, 20, { collisionFilter: { group: group } });
boxA = Bodies.rectangle(5400 + 1050+shift+shift2, 2300 + 100+verticalShift,50,50,{ density: 1.25, frictionAir: 0.00000000000000001});
let platformSean = Bodies.rectangle(5400 + 890+shift+shift2, 2300 + 200+verticalShift,25,1,{isStatic: true});
ladderHinge = Bodies.rectangle(5400 + 100+shift2, 2300 + 100+verticalShift, 200, 20, { collisionFilter: { group: group } });
ball15 = Bodies.circle(5400 + 175+shift2, 2300 + 65+verticalShift,25,{isStatic:false, friction: 1,render: { fillStyle: 'orange' }})
ladderRightWall = Bodies.rectangle(5400 + 195+shift2, 2300 + 355+verticalShift,10,490,{isStatic:true,render: { fillStyle: 'brown' }})
ladderLeftWall = Bodies.rectangle(5400 + 145+shift2, 2300 + 355+verticalShift,10,490,{isStatic:true,isSensor : true,render: { fillStyle: 'brown' }})
for(i = 0; i<12;i++){
    var ladderRungs = Bodies.rectangle(5400 + 170+shift2, 2300 + 140 + 40*i+verticalShift,70,10,{isStatic: true,isSensor : true,render: { fillStyle: 'brown' }}); 
    Composite.add(engine.world, ladderRungs)
}
rect1 = Bodies.rectangle(5400 + 1200+shift+shift2, 2300 + 600+verticalShift, 3500, 50.5, { isStatic: true, render: { fillStyle: '#060a19' } });
rect2 = Bodies.rectangle(5400 + 1350+shift+shift2, 2300 + 555+verticalShift, 20, 50, { isStatic: true, render: { fillStyle: '#060a19' } });
rect3 = Bodies.rectangle(5400 + 1200+shift+shift2, 2300 + 535+verticalShift, 20, 80, { isStatic: true, collisionFilter: { group: group }, render: { fillStyle: '#060a19' } });
    
Composite.add(engine.world,ground14);
Composite.add(engine.world,ramp15)
Composite.add(engine.world,ceiling14);
Composite.add(engine.world,leftWall1);
Composite.add(engine.world,leftWall2);
Composite.add(engine.world,rightWall1);
Composite.add(engine.world,rightWall2);
Composite.add(engine.world,portalWall);
Composite.add(engine.world,portalIn1);
Composite.add(engine.world,portalOut2);
Composite.add(engine.world,portalOut1);
Composite.add(engine.world,portalOut3)
Composite.add(engine.world,portalOut4)
Composite.add(engine.world,portalOut5)
Composite.add(engine.world,ball15);
Composite.add(engine.world,ladderRightWall)
Composite.add(engine.world,ladderLeftWall)
Composite.add(engine.world,blockStopper)

Composite.add(engine.world, [ catapult, rect1, rect2, rect3,platformSean,ramp14,Constraint.create({ 
    bodyA: catapult, 
    pointB: Vector.clone(catapult.position),
    stiffness: 1,
    length: 0
})]);

Composite.add(engine.world,ball14)
Composite.add(engine.world, [ ladderHinge,Constraint.create({ 
    bodyA: ladderHinge, 
    pointB: Vector.clone(ladderHinge.position),
    stiffness: 1,
    length: 0
})]);

for(i = 0; i<mazeWallsX.length;i++){
    var mazeWallTemp = Bodies.rectangle(5400 + mazeWallsX[i]+shift+shift2, 2300 + mazeWallsY[i]+verticalShift,mazeWallsWidth[i],mazeWallsHeight[i],{isStatic: true});
    Composite.add(engine.world, mazeWallTemp)
}
for(i = 0; i<1;i++){
    blockStack = Bodies.rectangle(5400 + 1340+shift+shift2, 2300 + 492.5-i*35+verticalShift,35,35,{isStatic: false, frictionAir: 0.001, friction:1,mass:1.65});
    Composite.add(engine.world, blockStack);
}

Composite.add(world, [
    Bodies.rectangle(5400 + 940+shift+shift2, 2300 + 165+verticalShift, 1, 100, {isStatic: true, angle: Math.PI * 0.25}),
])

function keyPressed(){
    if(inMaze){
        if(key == "w"){
            /*engine.world.gravity.x = 0;
            engine.world.gravity.y = -1;*/
            Body.applyForce( ball14, {x: ball14.position.x, y: ball14.position.y}, {x: 0, y: -.1});
        
        }
    if(key == "a"){
        //engine.world.gravity.x = -1;
        //engine.world.gravity.y = 0;
        Body.applyForce( ball14, {x: ball14.position.x, y: ball14.position.y}, {x: -.05, y: 0});
    }
    if(key == "s"){
        //engine.world.gravity.x = 0;
        //engine.world.gravity.y = 1;
        Body.applyForce( ball14, {x: ball14.position.x, y: ball14.position.y}, {x: 0, y: .05});
    }
    if(key == "d"){
        //engine.world.gravity.x = 1;
        //engine.world.gravity.y = 0;
        Body.applyForce( ball14, {x: ball14.position.x, y: ball14.position.y}, {x: 0.05, y: 0});
        }
    } 
}

var seesawBtn1 = Bodies.rectangle(5400 + 510, 2300 + 1550, 600, 20, {isStatic: true, angle: Math.PI * 0.95});
var seesawBtn2 = Bodies.rectangle(5400 + 220, 2300 + 1550, 20, 100, {isStatic: true});
Composite.add(world, [seesawBtn1, seesawBtn2]);

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Line of seesaws into a straight funnel

// group = Body.nextGroup(true);
var sahilXShift = 5000;
var sahilYShift = 4000;
var seesawArray = [];
var seesawCounter = 0;
var sign = -10;

for(var i = 100; i < 950; i += 80) {
    sign *= -1;
    var seesaw4 = Bodies.rectangle(i + sahilXShift, 150 + sign + sahilYShift, 110, 15);
    seesawCounter += 1;
    if(seesawCounter == 11){
        seesawArray[0] = seesaw4;
    }
    Composite.add(world, [
        seesaw4,
        Constraint.create({ 
            bodyA: seesaw4, 
            pointB: Vector.clone(seesaw4.position),
            stiffness: 1,
            length: 0,
        }), 
    ])
}

seesawCounter = 0;
sign = -10;
for(var j = 150; j < 1000; j += 80) {
    sign *= -1;
    var seesaw5 = Bodies.rectangle(j + sahilXShift, 400 + sign + sahilYShift, 110, 15);
    seesawCounter += 1;
    if (seesawCounter == 1){
        seesawArray[1] = seesaw5;
    }
    Composite.add(world, [
        seesaw5,
        Constraint.create({ 
            bodyA: seesaw5, 
            pointB: Vector.clone(seesaw5.position),
            stiffness: 1,
            length: 0,
        }), 
    ])
}

seesawCounter = 0;
sign = -10;
for(var k = 100; k < 950; k += 80) {
    sign *= -1;
    var seesaw6 = Bodies.rectangle(k + sahilXShift, 600 + sign + sahilYShift, 110, 15);
    seesawCounter += 1;
    if (seesawCounter == 11){
        seesawArray[2] = seesaw6; 
    }
    Composite.add(world, [
        seesaw6,
        Constraint.create({ 
            bodyA: seesaw6, 
            pointB: Vector.clone(seesaw6.position),
            stiffness: 1,
            length: 0,
        }), 
    ])
}

var heavyCircleA = Bodies.circle(60 + sahilXShift, 0 + sahilYShift, 15, {friction: 0.02});
var heavyCircleB = Bodies.circle(965 + sahilXShift, 135 + sahilYShift, 15, {friction: 0.02});
var heavyCircleC = Bodies.circle(85 + sahilXShift, 385 + sahilYShift, 15, {friction: 0.02});
Body.setDensity(heavyCircleA, 0.01);
Body.setDensity(heavyCircleB, 0.01);
Body.setDensity(heavyCircleC, 0.01);
var bounceCircle = Bodies.circle(963 + sahilXShift, 585 + sahilYShift, 15);
var beforeBoostRect = Bodies.rectangle(1070 + sahilXShift, 750 + sahilYShift, 80, 15, {isStatic: true, angle: Math.PI * -0.10})
var boostRect = Bodies.rectangle(1000 + sahilXShift, 760 + sahilYShift, 80, 15, {isStatic: true});
var leftBounceRect = Bodies.rectangle(500 + sahilXShift, 1030 + sahilYShift, 610, 15, {isStatic: true, angle: Math.PI * 0.5});
var rightBounceRect = Bodies.rectangle(850 + sahilXShift, 1050 + sahilYShift, 580, 15, {isStatic: true, angle: Math.PI * -0.5});
var bounceEndRect1 = Bodies.rectangle(780 + sahilXShift, 1400 + sahilYShift, 200, 30, {isStatic: true, angle: Math.PI * -0.20});
var bounceEndRect2 = Bodies.rectangle(570 + sahilXShift, 1400 + sahilYShift, 200, 30, {isStatic: true, angle: Math.PI * 0.20});
var deletingRect = Bodies.rectangle(0 + sahilXShift, 750 + sahilYShift, 400, 15, {isStatic: true, angle: Math.PI * 0.10});

Composite.add(world, [
    Bodies.rectangle(963 + sahilXShift, 160 + sahilYShift, 10, 15, {isStatic: true}),
    Bodies.rectangle(1000 + sahilXShift, 500 + sahilYShift, 120, 15, {isStatic: true, angle: Math.PI * 0.1}),
    Bodies.rectangle(85 + sahilXShift, 410 + sahilYShift, 10, 15, {isStatic: true}),
    Bodies.rectangle(963 + sahilXShift, 610 + sahilYShift, 10, 15, {isStatic: true}),
    heavyCircleB,
    heavyCircleC,
    bounceCircle,
    Bodies.rectangle(995 + sahilXShift, 635 + sahilYShift, 80, 15, {isStatic: true, angle: Math.PI * 0.20}),
    beforeBoostRect,
    boostRect,
    leftBounceRect,
    rightBounceRect,
    bounceEndRect1,
    bounceEndRect2,
    deletingRect,
    Bodies.rectangle(330 + sahilXShift, 800 + sahilYShift, 350, 15, {isStatic: true, angle: Math.PI * 0.0}),
]);

var makeSeesawCircle = true;
var canBounce = true;

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Entire reverse gravity section

var shiftReverseX = 1080;
var shiftReverseY = 4400;

//Declaring the elements
let hershRect12;
let hershRect13;
let hershRect14;
let hershRect15;
let hershRect16;
let hershRect17;
let hershRect18;
let hershRect19;
let hershRect20;
let hershRect21;
let hershRect22;
let hershRect23;
let hershRect24;
let hershRect25;
let hershRect26;
let hershRect27;
let hershRect28;
let hershRect29;
let hershTriangle;
let hershMainBallEighteen;
let hershKnockBall1;
let hershKnockBall2;
let timeout;
let timeout1;
let car;
let tempStatus = false;
let recet1_sg;
let recet2_sg;
let recet3_sg;
let recet4_sg;
let recet5_sg;
let recet6_sg;
let recet7_sg;
let recet8_sg;

//These are the five platforms that use reverse gravity (The ball bounces from hershRect16 to hershRect12 in descending order)///
hershRect12 = Matter.Bodies.rectangle(shiftReverseX + 1100, shiftReverseY + 100, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect13 = Matter.Bodies.rectangle(shiftReverseX + 1600, shiftReverseY + 100, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect14 = Matter.Bodies.rectangle(shiftReverseX + 2100, shiftReverseY + 100, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect15 = Matter.Bodies.rectangle(shiftReverseX + 2600, shiftReverseY + 100, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect16 = Matter.Bodies.rectangle(shiftReverseX + 3100, shiftReverseY + 100, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//hershRect17 is the last ramp before hershMainBallEighteen will start bouncing off of the platforms/////////////////////////////
hershRect17 = Matter.Bodies.rectangle(shiftReverseX + 3600, shiftReverseY + 350, 700, 20, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.09, render: { fillStyle: '#ffffff' }});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

hershRect18 = Matter.Bodies.rectangle(shiftReverseX + 830, shiftReverseY + 1000, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect19 = Matter.Bodies.rectangle(shiftReverseX + 1130, shiftReverseY + 1000, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect20 = Matter.Bodies.rectangle(shiftReverseX + 975, shiftReverseY + 1450, 400, 20, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.225, render: { fillStyle: '#ffffff' } });
hershRect21 = Matter.Bodies.rectangle(shiftReverseX + 1725, shiftReverseY + 1750, 675, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect22 = Matter.Bodies.rectangle(shiftReverseX + 1875, shiftReverseY + 1665, 20, 200, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.2, render: { fillStyle: '#ffffff' } });
hershRect23 = Matter.Bodies.rectangle(shiftReverseX + 1950, shiftReverseY + 1625, 20, 275, {friction: 0.0001, isStatic: true, angle: -Math.PI * 0.1, render: { fillStyle: '#ffffff' } });
hershRect24 = Matter.Bodies.rectangle(shiftReverseX + 1125, shiftReverseY + 2500, 475, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect25 = Matter.Bodies.rectangle(shiftReverseX + 830, shiftReverseY + 2440, 200, 20, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.2, render: { fillStyle: '#ffffff' } });
hershRect26 = Matter.Bodies.rectangle(shiftReverseX + 680, shiftReverseY + 2440, 200, 20, {friction: 0.0001, isStatic: true, angle: -Math.PI * 0.2, render: { fillStyle: '#ffffff' } });
hershRect27 = Matter.Bodies.rectangle(shiftReverseX + 545, shiftReverseY + 2500, 200, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });
hershRect28 = Matter.Bodies.rectangle(shiftReverseX + 125, shiftReverseY + 2225, 1000, 20, {friction: 0.0001, isStatic: true, angle: Math.PI * 0.325, render: { fillStyle: '#ffffff' } });
hershRect29 = Matter.Bodies.rectangle(shiftReverseX + 760, shiftReverseY + 2500, 265, 20, {friction: 0.0001, isStatic: true, render: { fillStyle: '#ffffff' } });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

hershTriangle = Matter.Bodies.polygon(shiftReverseX + 1595, shiftReverseY + 1700, 3, 90, {friction: 0.0001, isStatic: true, angle: -Math.PI * 0.165, render: { fillStyle: '#ffffff' } });

//hershMainBallEighteen is the ball that will land on Sahil's platform///////////////////////////////////////////////////////////
hershMainBallEighteen = Matter.Bodies.circle(shiftReverseX + 3875, shiftReverseY + 1125, 25, {friction: 0.0001, isStatic: true, render:  {fillStyle: '#ffffff' }});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//These two balls will be knocked off of platforms hershRect18 and hershRect19///////////////////////////////////////////////////
hershKnockBall1 = Matter.Bodies.circle(shiftReverseX + 895, shiftReverseY + 940,60, {friction: 0.0001, isStatic: true, render:  {fillStyle: '#ffffff' }});
hershKnockBall2 = Matter.Bodies.circle(shiftReverseX + 1060, shiftReverseY + 940,60, {friction: 0.0001, isStatic: true, render: {fillStyle: '#ffffff' }});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sid's stuff
car = Composites.car(shiftReverseX + 4600, shiftReverseY + 1150, 150, 10, 23);
recet_sg = Bodies.rectangle(shiftReverseX + 4300, shiftReverseY + 1343, 300, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
Body.rotate(recet_sg,6)
recet1_sg = Bodies.rectangle(shiftReverseX + 4060, shiftReverseY + 1425, 300, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
Body.rotate(recet1_sg,6)
recet2_sg = Bodies.rectangle(shiftReverseX + 4050, shiftReverseY + 1330, 30, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
recet3_sg = Bodies.rectangle(shiftReverseX + 3940, shiftReverseY + 1355, 30, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
recet4_sg = Bodies.rectangle(shiftReverseX + 3910, shiftReverseY + 1100, 400, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
Body.rotate(recet4_sg,-6)
recet5_sg = Bodies.rectangle(shiftReverseX + 3710, shiftReverseY + 950, 400, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
Body.rotate(recet5_sg, 6)
recet6_sg = Bodies.rectangle(shiftReverseX + 4020, shiftReverseY + 800, 100, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
Body.rotate(recet6_sg,-6)
recet7_sg = Bodies.rectangle(shiftReverseX + 3900, shiftReverseY + 700, 100, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
Body.rotate(recet7_sg,-6)
recet8_sg = Bodies.rectangle(shiftReverseX + 3790, shiftReverseY + 600, 100, 20, { isStatic: true, render:  {fillStyle: '#ffffff' } })
Body.rotate(recet8_sg,-6)

//Adding the elements to the screen
Composite.add(world, [car,recet_sg,recet1_sg,recet2_sg,recet3_sg,recet4_sg,recet5_sg,recet6_sg,recet7_sg,recet8_sg, 
    hershRect12, hershRect13, hershRect14, hershRect15, hershRect16, hershRect17, hershRect18, hershRect19, hershRect20, hershRect21, 
    hershRect22, hershRect23, hershRect24, hershRect25, hershRect26, hershRect27, hershRect28, hershRect29, hershMainBallEighteen, 
    hershTriangle, hershKnockBall1, hershKnockBall2, Bodies.rectangle(shiftReverseX + 4575, shiftReverseY + 1300, 300, 20, { isStatic: true, render:  {fillStyle: '#ffffff' }  }),
    Bodies.rectangle(shiftReverseX + 3910, shiftReverseY + 1430, 20, 75, { isStatic: true, render:  {fillStyle: '#ffffff' } }),
    Bodies.rectangle(shiftReverseX + 2500, shiftReverseY + 1520, 1000, 30, { isStatic: true, render:  {fillStyle: '#ffffff' }, angle: Math.PI * -0.15 })]);

function cngGrav() {
    engine.world.gravity.y = -1
    Body.translate( recet2_sg, {x: 0, y: 35});
    Body.translate( recet3_sg, {x: 0, y: 35});
  }
  
  function ApplyF() {
    Body.applyForce( car.bodies[0], {x: car.bodies[0].position.x, y: car.bodies[0].position.y}, {x: -0.12, y: 0});
  }

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//Ball gets launched and explodes into hundreds of little balls

var shiftLaunchX = 1700;
var shiftLaunchY = 7500;

var sahilCanLaunch = true; 
// var sahilBall = Bodies.circle(200 + shiftLaunchX, 100 + shiftLaunchY, 25, {friction: 0});
var sahilBall = hershMainBallEighteen;
var launchRect = Bodies.rectangle(340 + shiftLaunchX, 220 + shiftLaunchY, 80, 15, {isStatic: true, angle: Math.PI * 0.80});
var preLaunchRect = Bodies.rectangle(40 + shiftLaunchX, 140 + shiftLaunchY, 500, 15, {isStatic: true, angle: Math.PI * 0.1});

Composite.add(world, [
    // sahilBall,
    preLaunchRect,
    Bodies.rectangle(280 + shiftLaunchX, 220 + shiftLaunchY, 80, 15, {isStatic: true, angle: Math.PI * -0.85}),
    launchRect,
]);

function launchBall19(){
    setTimeout(() => {
        Body.applyForce(sahilBall, {x: sahilBall.position.x, y: sahilBall.position.y}, {x: 0.3, y: -0.25});
        intervalID3 = setInterval(dropBombs, 400);
    }, 2000);
}

var bombArr = [];
var counterBomb = 0;
function dropBombs(){
    counterBomb++;
    if(counterBomb >= 5){
        clearInterval(intervalID3);
    }
    var dropCircle = Bodies.circle(sahilBall.position.x, sahilBall.position.y + 45, 20, {frictionAir: 0.04});
    bombArr[counterBomb - 1] = dropCircle;
    Composite.add(world, dropCircle);
    explodeBombs(counterBomb - 1);
}

function explodeBombs(bombNum){
    setTimeout(() => {
        var tempSign1 = randomInt(1, 2);
        if(tempSign1 == 1){
            tempSign1 = 1;
        } else {
            tempSign1 = -1;
        }
        for(var i = 0; i < 50; i++) {
            var tempSign2 = randomInt(1, 2);
            if(tempSign2 == 1){
                tempSign2 = 1;
            } else {
                tempSign2 = -1;
            }
            var tempSign3 = randomInt(1, 2);
            if(tempSign3 == 1){
                tempSign3 = 1;
            } else {
                tempSign3 = -1;
            }
            var randomXAmt = randomInt(10, 20)/1000;
            var randomYAmt = randomInt(10, 20)/1000;
            var bombCircles = Bodies.circle(bombArr[bombNum].position.x + randomInt(1, 30) * tempSign1, bombArr[bombNum].position.y + randomInt(1, 30) * tempSign1, randomInt(10, 20), {frictionAir: 0.01});
            Body.applyForce(bombCircles, {x: bombCircles.position.x, y: bombCircles.position.y}, {x: randomXAmt * tempSign2, y: randomYAmt * tempSign3});
            Composite.add(world, bombCircles);
        }
        Matter.Composite.remove(engine.world, bombArr[bombNum]);
    }, 2000);
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// Funnel with pumpkin

var changePumpkinCam1 = true;
var startTurning = false;

var pumpkinMoveX = 2500;
var pumpkinMoveY = 6000;

var funnel1  = Bodies.rectangle(pumpkinMoveX + 1000, pumpkinMoveY + 2500, 2000, 25, { isStatic: true, angle: Math.PI * .20 , render: {strokeStyle: 'white', lineWidth : 3}});
var funnel2  = Bodies.rectangle(pumpkinMoveX + 2840, pumpkinMoveY + 2500, 2000, 25, { isStatic: true, angle: Math.PI * .80 , render: {strokeStyle: 'white', lineWidth : 3}});

var bucket1  = Bodies.rectangle(pumpkinMoveX + 1500, pumpkinMoveY + 3600, 20, 750, { isStatic: false, render: {strokeStyle: 'white', lineWidth : 3}});
var bucket2  = Bodies.rectangle(pumpkinMoveX + 2340, pumpkinMoveY + 3600, 20, 750, { isStatic: false, render: {strokeStyle: 'white', lineWidth : 3}});
var bucket3  = Bodies.rectangle(pumpkinMoveX + 1920, pumpkinMoveY + 3980, 860, 20, { isStatic: false, render: {strokeStyle: 'white', lineWidth : 3}});

var bucket = Matter.Body.create({
    parts: [bucket1, bucket2, bucket3],
    isStatic : false,
    inertia: Infinity,  // setting inertia to infinty will prevent rotation upon collision
    rotationSpeed: .1 // Speed Of turning    

});

var pumpkin = Bodies.rectangle(pumpkinMoveX + 1800, pumpkinMoveY + 6000, 1, 1, { isStatic: true, render: {sprite: {texture: 'img/pumpkin.png', xScale: 1.2, yScale: 1.2}}} );

Composite.add(world, [
    funnel1, funnel2, pumpkin,
]);

Composite.add(world, [
    bucket,
    Constraint.create({ 
        bodyA: bucket, 
        pointB: Vector.clone(bucket.position),
        stiffness: 1,
        length: 0
    })
]);

function startBucketRotate(){
    console.log(1);
    setTimeout(() => {
        startTurning = true;
        console.log(2);
        stopBucketRotate();
    }, 1500);
}

function stopBucketRotate(){
    console.log(3);
    setTimeout(() => {
        console.log(4);
        startTurning = false;
        slomoBucket();
    }, 1500);
}

function slomoBucket(){
    console.log(5);
    setTimeout(() => {
        console.log(6);
        engine.timing.timeScale = 0.1;
    }, 1500);
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

function draw(){        
    if(followCam) {
        Render.lookAt(render, {
            min: {x: camBody.position.x - camXSize, y: camBody.position.y - camXSize},
            max: {x: camBody.position.x + camXSize, y: camBody.position.y + camXSize},
        });
    } else {
        Render.lookAt(render, {
            min: {x: camXVal - camXSize, y: camYVal - camYSize},
            max: {x: camXVal + camXSize, y: camYVal + camYSize},
            // min: {x: camXVal - window.innerWidth - 800, y: camXVal - window.innerHeight - 800},
            // max: {x: camYVal + window.innerWidth + 800, y: camYVal + window.innerHeight + 800},
        });
    }

    // Slow down balls when they leave the plinko
    for(var i = 0; i < plinkoBalls.length; i++){
        var pBall = plinkoBalls[i];
        if (Matter.Collision.collides(pBall, rampA45) != null) {
            if(Matter.SAT.collides(pBall, rampA45).collided){
                pBall.restitution = 0;
                pBall.friction = 0.4;
                pBall.frictionAir = 0.03;
            }
        }
        if (Matter.Collision.collides(pBall, rampC45) != null) {
            if(Matter.SAT.collides(pBall, rampC45).collided){
                pBall.friction = 0.4;
                pBall.frictionAir = 0.03;
                Body.applyForce(pBall, {x: pBall.position.x, y: pBall.position.y}, {x: 0.001, y: 0});
            }
        }
        // Attach the ball to the constraint for the cannon
        if (pBall.position.y > 600 + 1500){
            pBall.render.visible = false;
            ball45.render.visible = true;
        }
    }

    // Make camera still after the plinko
    if(plinkoBalls.length == 5 && switchToPlinkoCam){
        var pBall = plinkoBalls[4];
        if (Matter.Collision.collides(pBall, rampC45) != null) {
            if(Matter.SAT.collides(pBall, rampC45).collided){
                switchToPlinkoCam = false;
                followCam = false;
                camXVal = 600;
                camYVal = 1900;
                camXSize = 500;
                camYSize = 450;
            }
        }
    }

    // Go to next part if user hits button with ball from cannon
    if (Matter.Collision.collides(buttonA45, buttonB45) != null) {
        if(Matter.SAT.collides(buttonA45, buttonB45).collided){
            if(makeHershBall) {
                makeHershBall = false;
                Body.setPosition(buttonA45, { x: buttonA45.position.x - 20, y: buttonA45.position.y }); 
                hershBallSix = Matter.Bodies.circle(200 + 2000,10,25, {friction: 0.0001, render:  {fillStyle: '#ffffff' }});
                Composite.add(world, [hershBallSix]);
                camXVal = 350 + 3500,
                camYVal = 350 + 1500,
                camXSize = 900,
                camYSize = 900;
                camBody = hershBallSix;
                followCam = true;
                for(var a = 0; a < plinkoBalls.length; a++){
                    Matter.Composite.remove(engine.world, plinkoBalls[a]);
                }
            }
        }
    }

    // Forcing the ball to bounce between platforms
    if  (hershBallSix != null){
        if(Matter.SAT.collides(hershBallSix, hershRect4) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect4).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: 0.225, y: 0});
            }
        }
        if(Matter.SAT.collides(hershBallSix, hershRect5) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect5).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: -0.085, y: 0});
            }
        }
        if(Matter.SAT.collides(hershBallSix, hershRect6) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect6).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: 0.13, y: 0});
            }
        }
        if(Matter.SAT.collides(hershBallSix, hershRect7) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect7).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: -0.13, y: 0});
            }
        }
        if(Matter.SAT.collides(hershBallSix, hershRect8) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect8).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: 0.15, y: 0});
            }
        }
        // Changes camera to show pendulum
        if(Matter.SAT.collides(hershBallSix, hershRect9) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect9).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: -0.2, y: 0});
                camXVal = 350 + 5500;
                camYVal = 350 + 2100;
                camXSize = 500 + 700;
                camYSize = 450 + 700;
                followCam = false;
            }
        }
        if(Matter.SAT.collides(hershBallSix, hershRect10) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect10).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: 0.02, y: 0});
            }
        }
        if(Matter.SAT.collides(hershBallSix, hershPendulumBall1) != null){
            if(Matter.Collision.collides(hershBallSix, hershPendulumBall1).collided){
                Matter.Composite.remove(engine.world, hershBallSix);
            }
        }

        if(Matter.SAT.collides(hershBallSix, hershRect11) != null){
            if(Matter.Collision.collides(hershBallSix, hershRect11).collided){
                Body.applyForce( hershBallSix, {x: hershBallSix.position.x, y: hershBallSix.position.y}, {x: 0.025, y: 0});
            }
        }
    }   
    if(canSwitchtoMaxBall) {
        if(Matter.SAT.collides(maxBall, domino6) != null){
            if(Matter.Collision.collides(maxBall, domino6).collided){
                followCam = true;
                camBody = maxBall;
                camXSize = 500;
                camYSize = 450;
                canSwitchtoMaxBall = false;
            }
        }
    }
    // Changes camera to show red ball that will bounce on platforms
    if(Matter.SAT.collides(hershPendulumBall5, hershWallStatic) != null){
        if(Matter.Collision.collides(hershPendulumBall5, hershWallStatic).collided){
            // Body.setPosition(starterBallGround, { x: starterBallGround.position.x, y: starterBallGround.position.y - 150});
            Matter.Composite.remove(engine.world, starterBallGround);
        }
    }  

    // Ball enters first portal
    if(Matter.Collision.collides(maxBall, inPortal) != null) {
        if(Matter.SAT.collides(maxBall, inPortal).collided) {
            maxBall.restitution = 0;
            Matter.Body.set(maxBall, "position", {x: 5400 + 3670, y: 2300 +300})
        }
    }

    if(switchCamToSeesawBall){
        if(Matter.Collision.collides(seesawBall, seesawWall) != null) {
            if(Matter.SAT.collides(seesawBall, seesawWall).collided) {
                camBody = seesawBall;
                maxBall.restitution = 0;
                switchCamToSeesawBall = false;
            }
        }
    }

    if(Matter.Collision.collides(ball14,portalIn1) != null){
        if(Matter.SAT.collides(ball14,portalIn1).collided){
            if(portal1Enter==0){
                Matter.Body.set(ball14, "position", {x:5400 + 250+shift2, y:2300 + 50+verticalShift})
                Matter.Body.set(ball14, "velocity",{x:5,y:0})
                inMaze = false;
                portal1Enter = 1;
            }else if(portal1Enter==1){
                Matter.Body.set(ball14, "position", {x:5400 + 250+shift2, y:2300 + 250+verticalShift})
                Matter.Body.set(ball14, "velocity",{x:5,y:-10})
                portal1Enter = 2;
            }else if(portal1Enter==2){
                Matter.Body.set(ball14, "position", {x:5400 + 500+shift2, y:2300 + 350+verticalShift})
                Matter.Body.set(ball14, "velocity",{x:-5,y:-10})
                portalOut2Enter = true;
                portal1Enter = 3;
            } else if(portal1Enter == 3){
                Matter.Body.set(ball14, "position", {x:5400 + 250+shift2, y:2300 + 450+verticalShift})
                Matter.Body.set(ball14, "velocity",{x:5,y:-10})
                portal3Ready = true;
            }
        }
    }
    if(Matter.Collision.collides(ball14,portalOut2) != null){
        if(Matter.SAT.collides(ball14,portalOut2).collided&&portalOut2Enter){
            Matter.Body.set(ball14, "position", {x:5400 + 250+shift2, y:2300 + 50+verticalShift})
            Matter.Body.set(ball14, "velocity",{x:5,y:0}) 
        }
    }
    if(ball14 != null && switchtoBall14){
        if(Matter.Collision.collides(ball14,blockStack) != null){
            if(Matter.SAT.collides(ball14,blockStack).collided){
                inMaze = true;
                camBody=ball14
                switchtoBall14 = false;
            }
        }
    }
    
    if(Matter.Collision.collides(ball14,portalOut3) != null){
        if(Matter.SAT.collides(ball14,portalOut3).collided){
            if(portal3Ready){
                Matter.Body.set(ball14, "position", {x:5400 + 375+shift2, y:2300 + 600+verticalShift})
                Matter.Body.set(ball14, "velocity",{x:0,y:-10})
            }   
        }
    }
    
    if(Matter.Collision.collides(ball14,portalOut5) != null){
        if(Matter.SAT.collides(ball14,portalOut5).collided){
            if(portal5Enter){
                Matter.Body.set(ball14, "position", {x:5400 + 170+shift2, y:2300 + 600+verticalShift})
                Matter.Body.set(ball14, "velocity",{x:0,y:-10})
            }else{
                Matter.Body.set(ball14, "position", {x:5400 + 375+shift2, y:2300 + 450+verticalShift})
                portal5Enter = true;
            }
        }
    }
    
    if(Matter.Collision.collides(ball14,ladderLeftWall) != null){
        if(Matter.SAT.collides(ball14,ladderLeftWall).collided){ 
            Matter.Body.set(ball14, "velocity",{x:0,y:-3})
        }
    }
    if(canSwitchtoBall15){
        if(Matter.Collision.collides(ball14,ladderHinge) != null){
            if(Matter.SAT.collides(ball14,ladderHinge).collided){
                camBody= ball15;
                ball15.friction = 0.1;
                canSwitchtoBall15 = false;
            }
        }  
    }

    // Orange ball hits button to switch camera and start row of seesaws
    if(makeSeesawCircle){
        if(Matter.Collision.collides(ball15,seesawBtn1) != null){
            if(Matter.SAT.collides(ball15,seesawBtn1).collided){
                camXVal = 5600,
                camYVal = 4500,
                camXSize = 600,
                camYSize = 600;
                followCam = false;
            }
        }  
        if(Matter.Collision.collides(ball15,seesawBtn2) != null){
            if(Matter.SAT.collides(ball15,seesawBtn2).collided){
                var tempStartCircle = Bodies.circle(60 + sahilXShift, 0 + sahilYShift, 15, {friction: 0.05});
                Body.setDensity(tempStartCircle, 0.01);
                Composite.add(world, tempStartCircle);
                makeSeesawCircle = false;
            }
        }  
    }

    if (Matter.Collision.collides(heavyCircleB, seesawArray[0]) != null) {
        if(Matter.SAT.collides(heavyCircleB, seesawArray[0]).collided){
            Body.applyForce(heavyCircleB, {x: heavyCircleB.position.x, y: heavyCircleB.position.y}, {x: 0.005, y: 0});
        }
    }
    if (Matter.Collision.collides(heavyCircleC, seesawArray[1]) != null) {
        if(Matter.SAT.collides(heavyCircleC, seesawArray[1]).collided){
            Body.applyForce(heavyCircleC, {x: heavyCircleC.position.x, y: heavyCircleC.position.y}, {x: -0.005, y: 0});
        }
    }
    if (Matter.Collision.collides(bounceCircle, seesawArray[2]) != null) {
        if(Matter.SAT.collides(bounceCircle, seesawArray[2]).collided){
            Body.applyForce(bounceCircle, {x: bounceCircle.position.x, y: bounceCircle.position.y}, {x: 0.005, y: 0});
        }
    }

    if (Matter.Collision.collides(bounceCircle, beforeBoostRect) != null) {
        if(Matter.SAT.collides(bounceCircle, beforeBoostRect).collided){
            followCam = true;
            camBody = bounceCircle;
            camXSize = 500;
            camYSize = 500;   
        }
    }
    //Boost the ball back and forth between 2 walls
    if (Matter.Collision.collides(bounceCircle, boostRect) != null) {
        if(Matter.SAT.collides(bounceCircle, boostRect).collided){
            Body.applyForce(bounceCircle, {x: bounceCircle.position.x, y: bounceCircle.position.y}, {x: -0.038, y: -0.008});
        }
    }
    if(canBounce){
        if (Matter.Collision.collides(bounceCircle, leftBounceRect) != null) {
            if(Matter.SAT.collides(bounceCircle, leftBounceRect).collided){
                Body.applyForce(bounceCircle, {x: bounceCircle.position.x, y: bounceCircle.position.y}, {x: 0.035, y: -0.014});
            }
        }
        if (Matter.Collision.collides(bounceCircle, rightBounceRect) != null) {
            if(Matter.SAT.collides(bounceCircle, rightBounceRect).collided){
                Body.applyForce(bounceCircle, {x: bounceCircle.position.x, y: bounceCircle.position.y}, {x: -0.035, y: -0.014});
            }
        }
        if (Matter.Collision.collides(bounceCircle, bounceEndRect1) != null) {
            if(Matter.SAT.collides(bounceCircle, bounceEndRect1).collided){
                canBounce = false;
            }
        }
        if (Matter.Collision.collides(bounceCircle, bounceEndRect2) != null) {
            if(Matter.SAT.collides(bounceCircle, bounceEndRect2).collided){
                canBounce = false;
            }
        }
    }

    //Deletes balls so they wont interfere with other parts
    if (Matter.Collision.collides(heavyCircleA, deletingRect) != null) {
        if(Matter.SAT.collides(bounceCircle, deletingRect).collided){
            Matter.Composite.remove(engine.world, heavyCircleA);
        }
    }
    if (Matter.Collision.collides(heavyCircleB, deletingRect) != null) {
        if(Matter.SAT.collides(heavyCircleB, deletingRect).collided){
            Matter.Composite.remove(engine.world, heavyCircleB);
        }
    }
    if (Matter.Collision.collides(heavyCircleC, deletingRect) != null) {
        if(Matter.SAT.collides(heavyCircleC, deletingRect).collided){
            Matter.Composite.remove(engine.world, heavyCircleC);
        }
    }


    //Reverse gravity section

    //The camera which is focused on bounceCircle  
    //Bouncing hershMainBallEighteen on intital platforms using reverse gravity
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect16) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect16).collided){
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: -0.0235, y: 0.125});
      }
    }
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect15) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect15).collided){
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: -0.0325, y: 0.125});
      }
    }
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect14) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect14).collided){
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: -0.035, y: 0.125});
      }
    }
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect13) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect13).collided){
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: -0.031, y: 0.125});
      }
    }
  
    //Changing the gravity from reverse to normal again on collision with hershRect12
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect12) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect12).collided){
        engine.gravity.y = 1;
      }
    }
  
    //Knocking the two larger balls off of the small platforms on collision with hershMainBallEighteen
    if(Matter.SAT.collides(hershMainBallEighteen, hershKnockBall1) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershKnockBall1).collided){
        Body.setStatic(hershKnockBall1, false);
        Body.applyForce( hershKnockBall1, {x: hershKnockBall1.position.x, y: hershKnockBall1.position.y}, {x: -1, y: 0});
      }
    }
    if(Matter.SAT.collides(hershMainBallEighteen, hershKnockBall2) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershKnockBall2).collided){
        Body.setStatic(hershKnockBall2, false);
        Body.applyForce( hershKnockBall2, {x: hershKnockBall2.position.x, y: hershKnockBall2.position.y}, {x: 1, y: 0});
      }
    }
  
    //Bouncing hershMainBallEighteen off of the small tilted platform
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect20) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect20).collided){
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: 0.01, y: -0.1});
      }
    }
  
    //Pushing the hershMainBallEighteen off of the platform and propelling the triangle forward
    if(Matter.SAT.collides(hershMainBallEighteen, hershTriangle) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershTriangle).collided){
        Body.setStatic(hershTriangle, false);
        Body.applyForce( hershTriangle, {x: hershTriangle.position.x, y: hershTriangle.position.y}, {x: 2, y: 0});
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: -0.03, y: 0});
      }
    }
  
    //Setting the static properties of the two sticks to false on collision with triangle
    if(Matter.SAT.collides(hershTriangle, hershRect22) != null){
      if(Matter.Collision.collides(hershTriangle, hershRect22).collided){
        Body.setStatic(hershRect22, false);
      }
    }
    if(Matter.SAT.collides(hershTriangle, hershRect23) != null){
      if(Matter.Collision.collides(hershTriangle, hershRect23).collided){
        Body.setStatic(hershRect23, false);
      }
    }
  
    //Increasing the velocity of hershMainBallEighteen so it will land on the last platform
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect24) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect24).collided){
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: -0.016, y: 0});
      }
    }
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect27) != null){
      if(Matter.Collision.collides(hershMainBallEighteen, hershRect27).collided){
        Body.applyForce( hershMainBallEighteen, {x: hershMainBallEighteen.position.x, y: hershMainBallEighteen.position.y}, {x: -0.0025, y: 0});
      }
    }
  
    if(Matter.SAT.collides(bounceCircle, hershMainBallEighteen) != null){
      if(Matter.Collision.collides(bounceCircle, hershMainBallEighteen).collided){
        Body.setStatic(hershMainBallEighteen, false);
        Body.setStatic(bounceCircle, true); 
        camBody = hershMainBallEighteen;
        followCam = true;
      }
    }
    if(Matter.SAT.collides(hershMainBallEighteen, hershRect28) != null){
        if(Matter.Collision.collides(hershMainBallEighteen, hershRect28).collided){
            hershMainBallEighteen.friction = 0.2;
            hershMainBallEighteen.restitution = 0;
        }
      }

  
    //Moving the car and setting the gravity to -1 after 11 seconds
    if(bounceCircle.position.y + 200 > shiftReverseX + 4600 && !tempStatus){
      tempStatus = true;
      timeout = setTimeout(function(){ApplyF()},1000);
      timeout1 = setTimeout(function(){cngGrav()},11000);
    }

    //Change camera before launching ball
    if (Matter.Collision.collides(sahilBall, preLaunchRect) != null) {
        if(Matter.SAT.collides(sahilBall, preLaunchRect).collided){
            camXVal = 4000;
            camYVal = 7500;
            camXSize = 1500;
            camYSize = 1500;
            followCam = false;
        }
    }
    
    //Launch final ball
    if (sahilCanLaunch) {
        if (Matter.Collision.collides(sahilBall, launchRect) != null) {
            if(Matter.SAT.collides(sahilBall, launchRect).collided){
                launchBall19();
                sahilCanLaunch = false;
            }
        }
    }

    //Bucket
    if(startTurning) {
        Body.setAngle(bucket, bucket.angle + bucket.rotationSpeed/ 2.9);    
    }
    if(hershMainBallEighteen.position.y > 8600 && changePumpkinCam1){//pumpkinMoveY + 2600
        followCam = false;
        camXVal = 5000,
        camYVal = 11000,
        camXSize = 2500,
        camYSize = 2500;
        startTurning = false;
        changePumpkinCam1 = false;
        startBucketRotate();
    }
}