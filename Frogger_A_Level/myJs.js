/*
This template is just to get you started.  Feel free to change the screen any way you want.  This includes
using your own pictures.  There are many functions listed in this project.  Many of these are optional and just
meant to help you think about your project.  Refer to the project document to get a full picture of what you need
to do at any given level.
 */

//declaring global variables to store the different elements of the game
let slot0reached=false;
let slot1reached=false;
let slot2reached=false;
let slot3reached=false;
let slot4reached=false;

let car1 = new Image();
car1.src = "resources/car1.png"; //need this to simply load the image into the browsers memory
let car2 = new Image();
car2.src = "resources/car2.png";
let car3 = new Image();
car3.src = "resources/car3.png";
let car4 = new Image();
car4.src = "resources/car4.png";
let truck = new Image();
truck.src = "resources/truck.png";
let log1 = new Image();
log1.src = "resources/log.png";
let log2 = new Image();
log2.src = "resources/log2.png";

let frog = new Image();
frog.src = "resources/frog.png";

let slotFrog = new Image();
slotFrog.src = "resources/slotfrog.png"

let snake1 = new Image();
snake1.src = "resources/snakefacingleft.png";

let snake2 = new Image();
snake2.src = "resources/snakefacingright.png";

let heart = new Image();
heart.src = "resources/heart.png";

let star = new Image();
star.src = "resources/star.png";

let lilypad = new Image();
lilypad.src = "resources/lilypad.png";

//Make all of your arrays and instance field here
let a;
let heartArray = [];
let carArray1 = [];
let carArray2 = [];
let carArray3 = [];
let carArray4 = [];
let truckArray = [];
let lilypadArray = [];
let logArray1 = [];
let logArray2 = [];
let logArray3 = [];
let logArray4 = [];
let logArray5 = [];
let deathCount = 0;
let score = 0;
let logArray1Movement = getRandomInt(2,4);
let logArray2Movement = getRandomInt(2,4);
let logArray3Movement = getRandomInt(2,4);
let logArray4Movement = getRandomInt(2,4);
let logArray5Movement = getRandomInt(2,4);
let slotFrogArray = [];
let logCollide = false;
let audio1 = new Audio('resources/dp_frogger_hop.mp3');
let audio2 = new Audio('resources/dp_frogger_squash.mp3');
let audio3 = new Audio('resources/dp_frogger_coin.mp3');
let audio4 = new Audio('resources/dp_frogger_plunk.mp3');
let audio5 = new Audio('resources/Frogger Music - Stage Theme.mp3');
let gameStart = false;
let snakeNum = calcRnum(0,1);
let highscore = 0;
let level;
let carArray1Movement = getRandomInt(3,5);
let carArray2Movement = getRandomInt(3,5);
let carArray3Movement = getRandomInt(3,5);
let carArray4Movement = getRandomInt(3,5);
let truckArrayMovement = getRandomInt(3,5);


//draws game board
function drawBackground() {
    drawGrass();
    drawWater();
    drawRoad();
    drawHome();
    drawHearts();
    drawScore();
}

function drawGrass() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#13691d";
    ctx.fillRect(0,0,650,850);
}

function drawRoad() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#605f5f";
    ctx.fillRect(0,550,window.innerWidth,250);
    drawDashed();
}

function drawWater() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#a5c5ff";
    ctx.fillRect(0,150,window.innerWidth,350);
}

//draws 3 hearts if no lives are lost, otherwise it draws one less heart for each death
function drawHearts(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    heartArray.push(createImage(heart.src, 25,100,25,25));
    heartArray.push(createImage(heart.src, 75,100,25,25));
    heartArray.push(createImage(heart.src, 125,100,25,25));

    if(deathCount === 0)
    {
        ctx.drawImage(heartArray[0],heartArray[0].left,heartArray[0].top,heartArray[0].width,heartArray[0].height);
        ctx.drawImage(heartArray[1],heartArray[1].left,heartArray[1].top,heartArray[1].width,heartArray[1].height);
        ctx.drawImage(heartArray[2],heartArray[2].left,heartArray[2].top,heartArray[2].width,heartArray[2].height);
    }
    else if(deathCount === 1)
    {
        ctx.drawImage(heartArray[0],heartArray[0].left,heartArray[0].top,heartArray[0].width,heartArray[0].height);
        ctx.drawImage(heartArray[1],heartArray[1].left,heartArray[1].top,heartArray[1].width,heartArray[1].height);
    }
    else if(deathCount === 2)
    {
        ctx.drawImage(heartArray[0],heartArray[0].left,heartArray[0].top,heartArray[0].width,heartArray[0].height);
    }
}

//displays the score at the top of the screen
function drawScore(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#3bdb13";
    ctx.font = "25px Lucida Console";
    ctx.fillText("SCORE:", 25,60);
    ctx.fillText(score, 120,60);
    ctx.fillText("HIGH SCORE:", 175,60);
    ctx.fillText(highscore, 345,60);
    ctx.fillText("LEVEL:", 395,60);
    ctx.fillText(level, 490,60);
}

function drawLilypads(){
    lilypadArray = [];
    lilypadArray.push(createImage(lilypad.src, 60,195,50,50));
    lilypadArray.push(createImage(lilypad.src, 180,195,50,50));
    lilypadArray.push(createImage(lilypad.src, 300,195,50,50));
    lilypadArray.push(createImage(lilypad.src, 420,195,50,50));
    lilypadArray.push(createImage(lilypad.src, 540,195,50,50));
}

function drawSlotFrog(){
    slotFrogArray = [];
    slotFrogArray.push(createImage(slotFrog.src, 60,195,50,50));
    slotFrogArray.push(createImage(slotFrog.src, 180,195,50,50));
    slotFrogArray.push(createImage(slotFrog.src, 300,195,50,50));
    slotFrogArray.push(createImage(slotFrog.src, 420,195,50,50));
    slotFrogArray.push(createImage(slotFrog.src, 540,195,50,50));
}

function drawHome() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#3bdb13";
    ctx.fillRect(0,150,window.innerWidth,25);
    ctx.fillRect(0,175,50,75);
    ctx.fillRect(120,175,50,75);
    ctx.fillRect(240,175,50,75);
    ctx.fillRect(360,175,50,75);
    ctx.fillRect(480,175,50,75);
    ctx.fillRect(600,175,50,75);
}

function drawDashed() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#FFFFFF";
    ctx.setLineDash([10, 20]);
    ctx.moveTo(0, 750);
    ctx.lineTo(650, 750);
    ctx.moveTo(0, 700);
    ctx.lineTo(650, 700);
    ctx.moveTo(0, 650);
    ctx.lineTo(650, 650);
    ctx.moveTo(0, 600);
    ctx.lineTo(650, 600);
    ctx.stroke();
}

//initialize functions onload
function initialize(){
    level = 1;
    drawBackground();
    drawLilypads();
    drawSlotFrog();
    drawSnake();
    let ctx = document.getElementById("myCanvas").getContext("2d");
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("reset").style.visibility = "hidden";
    //add functions here that will set up your frog, car array, etc...
    frog = createImage(frog.src, 300, 800, 45, 45);
    ctx.drawImage(frog,frog.left,frog.top,frog.width,frog.height);
    star = createImage(star.src, getRandomInt(50,550), getRandomInt(250,500), 35, 35);
    createCars();
    createLogs();
    createSnake();
    drawSnake();
    for(i = 0;i<lilypadArray.length;i++) {
        ctx.drawImage(lilypadArray[i],lilypadArray[i].left,lilypadArray[i].top,lilypadArray[i].width,lilypadArray[i].height);
    }

    for(i = 0;i < 2;i++){
        ctx.drawImage(carArray1[i],carArray1[i].left,carArray1[i].top,carArray1[i].width,carArray1[i].height);
        ctx.drawImage(carArray3[i], carArray3[i].left, carArray3[i].top, carArray3[i].width, carArray3[i].height);
        ctx.drawImage(truckArray[i], truckArray[i].left, truckArray[i].top, truckArray[i].width, truckArray[i].height);
    }
    for(i = 1;i < 3;i++) {
        ctx.drawImage(carArray2[i], carArray2[i].left, carArray2[i].top, carArray2[i].width, carArray2[i].height);
        ctx.drawImage(carArray4[i], carArray4[i].left, carArray4[i].top, carArray4[i].width, carArray4[i].height);
    }
    for(i = 0;i<logArray1.length;i++) {
        ctx.drawImage(logArray1[i],logArray1[i].left,logArray1[i].top,logArray1[i].width,logArray1[i].height);
    }
    for(i = 0;i<logArray2.length;i++) {
        ctx.drawImage(logArray2[i],logArray2[i].left,logArray2[i].top,logArray2[i].width,logArray2[i].height);
    }
    for(i = 0;i<logArray3.length;i++) {
        ctx.drawImage(logArray3[i],logArray3[i].left,logArray3[i].top,logArray3[i].width,logArray3[i].height);
    }

    for(i = 0;i<logArray4.length;i++) {
        ctx.drawImage(logArray4[i],logArray4[i].left,logArray4[i].top,logArray4[i].width,logArray4[i].height);
    }

    for(i = 0;i<logArray5.length;i++) {
        ctx.drawImage(logArray5[i],logArray5[i].left,logArray5[i].top,logArray5[i].width,logArray5[i].height);
    }
    drawStar();
}
//You may or may not need this function.  Remember you can add other properties inside the function if you want.
/*let createRectangle =  function(xCor, yCor, w,h){
    //the words in purple are not special.  You could have typed blahblah and it still works
    //the first line makes a new object.  without it all of the rectangles would act line 1 rectangle
    let temp = new Object();
    temp.x = xCor;
    temp.y = yCor;
    temp.width = w;
    temp.height = h;
    //return is necessary so that when you use your rectangle, the letiables you made in this funciton can be used also.
    return temp;
}*/

//You may or may not need this function.  Remember you can add other properties inside the function if you want.
let createImage = function(src,xco,yco,w,h) {
    let img   = new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis= true;
    return img;
};

/*
this code allows you to use the keyboard.  It is written in Jquery.  Jquery is version of javascript that is downloaded
as a library.  The download line is in the header of the html.  Each of the keycodes below can be found in the
ASCII table.
 */

    $(document).keydown(function(event){  //jQuery code to recognize a keydown event
        let keycode = (event.keyCode ? event.keyCode : event.which);

        //keypressed=true;

        //A - left
        if(keycode === 65)
        {
            frog.left-=50;
            audio1.play();
        }

        //D - right
        if(keycode === 68)
        {
            frog.left+=50;
            audio1.play();
        }

        //s - down
        if(keycode === 83)
        {
            frog.top+=50;
            audio1.play();
        }

        //w - up
        if(keycode === 87)
        {
            frog.top-=50;
            audio1.play();
        }
    });


//Anything that needs to be drawn on the screen should be in this function.  Make sure it is abstracted
function animate() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    a=requestAnimationFrame(animate);
    audio5.play();
    drawBackground();
    moveLogs();
    drawStar();
    drawLilypads();
    drawSlotFrog();
    moveCars();
    drawSnake();
    moveSnake();
    checkFrog();
    for(i = 0;i<lilypadArray.length;i++) {
        ctx.drawImage(lilypadArray[i],lilypadArray[i].left,lilypadArray[i].top,lilypadArray[i].width,lilypadArray[i].height);
    }
    drawFrog();

    checkCollision(frog, snake1);
    checkCollision(frog, snake2);
    checkCollisionWithStar(frog, star);

    for(i = 0;i<carArray1.length;i++){
        checkCollision(frog,carArray1[i]);
    }
    for(i = 0;i<carArray2.length;i++){
        checkCollision(frog,carArray2[i]);
    }
    for(i = 0;i<carArray3.length;i++){
        checkCollision(frog,carArray3[i]);
    }
    for(i = 0;i<carArray4.length;i++){
        checkCollision(frog,carArray4[i]);
    }
    for(i = 0;i<truckArray.length;i++){
        checkCollision(frog,truckArray[i]);
    }

    logCollide=false;

    for(i = 0;i<logArray1.length;i++){
        checkCollisionWithLog(frog,logArray1[i]);
    }

    for(i = 0;i<logArray2.length;i++){
        checkCollisionWithLog(frog,logArray2[i]);
    }

    for(i = 0;i<logArray3.length;i++){
        checkCollisionWithLog(frog,logArray3[i]);
    }

    for(i = 0;i<logArray4.length;i++){
        checkCollisionWithLog(frog,logArray4[i]);
    }

    for(i = 0;i<logArray5.length;i++){
        checkCollisionWithLog(frog,logArray5[i]);
      }

    for(i = 0;i<slotFrogArray.length;i++){
        checkCollisionWithSlots();
    }

    if(logCollide===false)
    {
        checkFallingInWater(frog);
    }

    if(deathCount === 3)
    {
        gameOver();
        audio5.pause();
        audio5.currentTime = 0;
    }
    checkWin();
    nextLevel();
}
/*
**********************************************************************************************************
* Below are a few functions you may need.  You will need a lot more than what is listed.
*
* Also don't feel like you have to code each of these functions in order.  It is simply to help you think
* about what you need to do in this project.
*
* IMPORTANT!!! Do not push more images or shapes into an array in any function that is called from the animate()
* ********************************************************************************************************
 */

//calls the animate function to start the game
function startAnimation() {
    gameStart = true;
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("start").disabled = true;
    animate();
}

//stops the animation when the game is over
function stopAnimation() {
    cancelAnimationFrame(a);
}

//draws the frog
function drawFrog() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(frog,frog.left,frog.top,frog.width,frog.height);
}

function drawStar()
{
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(star,star.left,star.top,star.width,star.height);
}

//you will need functions to draw and move all of your cars, logs, etc...

function createSnake(){
    snake1 = createImage(snake1.src, 700,495,80,55);
    snake2 = createImage(snake2.src, -100,495,80,55);
}

//draws the snake
function drawSnake(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(snake1,snake1.left,snake1.top,snake1.width,snake1.height);
    ctx.drawImage(snake2,snake2.left,snake2.top,snake2.width,snake2.height);
}

function moveSnake() {
    let snakeLeftIncremented = false;
    snake1.left = snake1.left - 3;
    if(snake2.left > -100){
        snakeLeftIncremented = true;
        snake2.left = snake2.left + 3;
    }
    snakeNum = calcRnum(0, 1);

    if (snakeNum === 1){

        if (snake1.left <= -100) {
            if(snakeLeftIncremented === false){
                snake2.left = snake2.left + 3;
            }
            //snake2.left = snake2.left + 3;
            snakeNum = calcRnum(0, 1);

            if (snake2.left >= 650 && snakeNum === 0) {
                snake1.left = 650;
                snake1.left = snake1.left - 3;
            }
            else if (snake2.left >= 650 && snakeNum === 1) {
                snake2.left = -100;
                snake2.left = snake2.left + 3;
            }
        }
    }
}

function createCars(){
    carArray1 = [];
    carArray2 = [];
    carArray3 = [];
    carArray4 = [];
    truckArray = [];
    carArray1.push(createImage(car1.src, 500,750,50,50));
    carArray1.push(createImage(car1.src, 300,750,50,50));
    carArray1.push(createImage(car1.src, 100,750,50,50));
    carArray2.push(createImage(car4.src, 600,700,50,50));
    carArray2.push(createImage(car4.src, 400,700,50,50));
    carArray2.push(createImage(car4.src, 200,700,50,50));
    carArray2.push(createImage(car4.src, 0,700,50,50));
    carArray3.push(createImage(car3.src, 485,650,75,50));
    carArray3.push(createImage(car3.src, 285,650,75,50));
    carArray3.push(createImage(car3.src, 85,650,75,50));
    carArray4.push(createImage(car2.src, 595,605,60,40));
    carArray4.push(createImage(car2.src, 395,605,60,40));
    carArray4.push(createImage(car2.src, 195,605,60,40));
    carArray4.push(createImage(car2.src, -5,605,60,40));
    truckArray.push(createImage(truck.src, 485,550,75,50));
    truckArray.push(createImage(truck.src, 285,550,75,50));
    truckArray.push(createImage(truck.src, 85,550,75,50));
}

function createLogs(){
    logArray1 = [];
    logArray2 = [];
    logArray3 = [];
    logArray4 = [];
    logArray5 = [];
    logArray1.push(createImage(log1.src, 70,450,70,55));
    logArray1.push(createImage(log1.src, 220,450,70,55));
    logArray1.push(createImage(log1.src, 370,450,70,55));
    logArray1.push(createImage(log1.src, 520,450,70,55));
    logArray2.push(createImage(log1.src, 150,395,70,55));
    logArray2.push(createImage(log1.src, 300,395,70,55));
    logArray2.push(createImage(log1.src, 450,395,70,55));
    logArray3.push(createImage(log1.src, 70,345,70,55));
    logArray3.push(createImage(log1.src, 220,345,70,55));
    logArray3.push(createImage(log1.src, 370,345,70,55));
    logArray3.push(createImage(log1.src, 520,345,70,55));
    logArray4.push(createImage(log1.src, 150,295,70,55));
    logArray4.push(createImage(log1.src, 300,295,70,55));
    logArray4.push(createImage(log1.src, 450,295,70,55));
    logArray5.push(createImage(log1.src, 70,245,70,55));
    logArray5.push(createImage(log1.src, 220,245,70,55));
    logArray5.push(createImage(log1.src, 370,245,70,55));
    logArray5.push(createImage(log1.src, 520,245,70,55));
}

function moveCars(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    if(level === 1)
    {
        for(i = 0;i < 2;i++){
            ctx.drawImage(carArray1[i],carArray1[i].left,carArray1[i].top,carArray1[i].width,carArray1[i].height);
            ctx.drawImage(carArray3[i], carArray3[i].left, carArray3[i].top, carArray3[i].width, carArray3[i].height);
            ctx.drawImage(truckArray[i], truckArray[i].left, truckArray[i].top, truckArray[i].width, truckArray[i].height);

            carArray1[i].left = carArray1[i].left - carArray1Movement;
            carArray3[i].left = carArray3[i].left - carArray3Movement;
            truckArray[i].left = truckArray[i].left - truckArrayMovement;

            if (carArray1[i].left <= -75){
                carArray1[i].left = 875;
            }
            else if (carArray3[i].left <= -75){
                carArray3[i].left = 875;
            }
            else if (truckArray[i].left <= -75){
                truckArray[i].left = 875;
            }
        }
        for(i = 1;i < 3;i++) {
            ctx.drawImage(carArray2[i], carArray2[i].left, carArray2[i].top, carArray2[i].width, carArray2[i].height);
            ctx.drawImage(carArray4[i], carArray4[i].left, carArray4[i].top, carArray4[i].width, carArray4[i].height);

            carArray2[i].left = carArray2[i].left + carArray2Movement;
            carArray4[i].left = carArray4[i].left + carArray4Movement;

            if (carArray2[i].left >= 875){
                carArray2[i].left = -75;
            }
            else if (carArray4[i].left >= 875){
                carArray4[i].left = -75;
            }
        }
    }

    else if(level === 2){
        for(i = 0;i < 3;i++) {
            ctx.drawImage(carArray1[i],carArray1[i].left,carArray1[i].top,carArray1[i].width,carArray1[i].height);
            ctx.drawImage(carArray3[i], carArray3[i].left, carArray3[i].top, carArray3[i].width, carArray3[i].height);
            ctx.drawImage(truckArray[i], truckArray[i].left, truckArray[i].top, truckArray[i].width, truckArray[i].height);

            carArray1[i].left = carArray1[i].left - carArray1Movement;
            carArray3[i].left = carArray3[i].left - carArray3Movement;
            truckArray[i].left = truckArray[i].left - truckArrayMovement;

            if (carArray1[i].left <= -75){
                carArray1[i].left = 875;
            }
            else if (carArray3[i].left <= -75){
                carArray3[i].left = 875;
            }
            else if (truckArray[i].left <= -75){
                truckArray[i].left = 875;
            }
        }
        for(i = 1;i < 4;i++) {
            ctx.drawImage(carArray2[i], carArray2[i].left, carArray2[i].top, carArray2[i].width, carArray2[i].height);
            ctx.drawImage(carArray4[i], carArray4[i].left, carArray4[i].top, carArray4[i].width, carArray4[i].height);

            carArray2[i].left = carArray2[i].left + carArray2Movement;
            carArray4[i].left = carArray4[i].left + carArray4Movement;

            if (carArray2[i].left >= 875){
                carArray2[i].left = -75;
            }
            else if (carArray4[i].left >= 875){
                carArray4[i].left = -75;
            }
        }
    }
    else if(level === 3){
        for(i = 0;i<carArray1.length;i++){
            carArray1[i].left = carArray1[i].left - carArray1Movement;
            ctx.drawImage(carArray1[i],carArray1[i].left,carArray1[i].top,carArray1[i].width,carArray1[i].height);
            if (carArray1[i].left <= -75){
                carArray1[i].left = 875;
            }
        }
        for(i = 1;i < 3;i++){
            carArray2[i].left = carArray2[i].left + 9;
            ctx.drawImage(carArray2[i],carArray2[i].left,carArray2[i].top,carArray2[i].width,carArray2[i].height)
            if (carArray2[i].left >= 875){
                carArray2[i].left = -75;
            }
        }
        for(i = 0;i<carArray3.length;i++){
            carArray3[i].left =carArray3[i].left - carArray3Movement;
            ctx.drawImage(carArray3[i],carArray3[i].left,carArray3[i].top,carArray3[i].width,carArray3[i].height)
            if (carArray3[i].left <= -75){
                carArray3[i].left = 875;
            }
        }
        for(i = 0;i<carArray4.length;i++){
            carArray4[i].left =carArray4[i].left + carArray4Movement;
            ctx.drawImage(carArray4[i],carArray4[i].left,carArray4[i].top,carArray4[i].width,carArray4[i].height)
            if (carArray4[i].left >= 875){
                carArray4[i].left = -75;
            }
        }
        for(i = 0;i<truckArray.length;i++){
            truckArray[i].left =truckArray[i].left - truckArrayMovement;
            ctx.drawImage(truckArray[i],truckArray[i].left,truckArray[i].top,truckArray[i].width,truckArray[i].height)
            if (truckArray[i].left <= -75){
                truckArray[i].left = 875;
            }
        }
    }
}

function moveLogs() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    for(i = 0;i<logArray1.length;i++){
        logArray1[i].left = logArray1[i].left + logArray1Movement;
        ctx.drawImage(logArray1[i],logArray1[i].left,logArray1[i].top,logArray1[i].width,logArray1[i].height)
        if (logArray1[i].left >= 875){
            logArray1[i].left = -75;
        }
    }
    for(i = 0;i<logArray2.length;i++){
        logArray2[i].left = logArray2[i].left - logArray2Movement;
        ctx.drawImage(logArray2[i],logArray2[i].left,logArray2[i].top,logArray2[i].width,logArray2[i].height)
        if (logArray2[i].left <= -75){
            logArray2[i].left = 875;
        }
    }
    for(i = 0;i<logArray3.length;i++){
        logArray3[i].left = logArray3[i].left + logArray3Movement;
        ctx.drawImage(logArray3[i],logArray3[i].left,logArray3[i].top,logArray3[i].width,logArray3[i].height)
        if (logArray3[i].left >= 875){
            logArray3[i].left = -75;
        }
    }
    for(i = 0;i<logArray4.length;i++){
        logArray4[i].left = logArray4[i].left - logArray4Movement;
        ctx.drawImage(logArray4[i],logArray4[i].left,logArray4[i].top,logArray4[i].width,logArray4[i].height)
        if (logArray4[i].left <= -75){
            logArray4[i].left = 875;
        }
    }
    for(i = 0;i<logArray5.length;i++){
        logArray5[i].left = logArray5[i].left + logArray5Movement;
        ctx.drawImage(logArray5[i],logArray5[i].left,logArray5[i].top,logArray5[i].width,logArray5[i].height)
        if (logArray5[i].left >= 875){
            logArray5[i].left = -75;
        }
    }
}

//checks the collision between the frog parameter p1 and the vehicle that corresponds to the parameter p2
function checkCollision(p1,p2){
    //this is one big if statement.  I simply organized it into 3 lines.
    if(p1.left +p1.width > p2.left && p1.left < p2.left+p2.width &&
        p1.top + p1.height > p2.top && p1.top < p2.top + p2.height &&
        p1.vis === true && p2.vis === true)
    {//by adding these to the if statement we check for collision only if the pictures are on the screen
            p1.left = 300;
            p1.top = 800;
            deathCount += 1;
            audio2.play();
    }
}

//checks the collision between the frog parameter p1 and the logArray[i] that corresponds the parameter p2. If there is a collision, then the frog moves with the log.
function checkCollisionWithLog(p1,p2)
{
        if(p1.vis === true && p2.vis===true && (p1.top <= 450 && p1.top >= 200)) {

            if (((p1.left + p1.width) > p2.left && p1.left < (p2.left + p2.width) &&
                (p1.top + p1.height) > p2.top && p1.top < (p2.top + p2.height))) {

                if (p1 === frog && p2 === logArray1[i]) {
                    frog.left = frog.left + logArray1Movement;
                } else if (p1 === frog && p2 === logArray2[i]) {
                    frog.left = frog.left - logArray2Movement;
                } else if (p1 === frog && p2 === logArray3[i]) {
                    frog.left = frog.left + logArray3Movement;
                } else if (p1 === frog && p2 === logArray4[i]) {
                    frog.left = frog.left - logArray4Movement;
                } else if (p1 === frog && p2 === logArray5[i]) {
                    frog.left = frog.left + logArray5Movement;
                }

                logCollide = true;
                //return true;
            }
        }
}

//checks to see if the frog parameter p1 fell in the water
function checkFallingInWater(p1)
{
    if(p1.top <=450 && p1.top >= 200)
    {
        p1.left=300;
        p1.top=800;
        deathCount++;
        audio4.play();
    }
}

//checks if the frog collides with the star. If it does one life is gained.
function checkCollisionWithStar(p1,p2){
    //this is one big if statement.  I simply organized it into 3 lines.
    if(p1.left +p1.width > p2.left && p1.left < p2.left+p2.width &&
        p1.top + p1.height > p2.top && p1.top < p2.top + p2.height &&
        p1.vis === true && p2.vis === true)
    {//by adding these to the if statement we check for collision only if the pictures are on the screen
        audio3.play();
        star.left = getRandomInt(50, 550);
        star.top = getRandomInt(250, 500);
        if(deathCount > 0){
            deathCount --;
        }
    }
}

//checks if the frog is in the lilypad slot. If the frog is in the lilypad slot, it increments the score by one.
// Else if the frog hits the area around the slot, it will die and reset the position to the bottom of the screen.
function checkCollisionWithSlots(){
    let ctx = document.getElementById("myCanvas").getContext("2d");

    if((frog.top < 250) && ((frog.left >= 0 && frog.left < 50)
        || (frog.left >= 120 && frog.left < 170)
        || (frog.left >= 240 && frog.left < 290)
        || (frog.left >= 360 && frog.left < 410)
        || (frog.left >= 480 && frog.left < 530)
        || (frog.left >= 600 && frog.left < 650))
    )
    {
        frog.left = 300;
        frog.top = 800;
        deathCount++;
        audio2.play();
    }
    if(((frog.left >= 40 && frog.left <= 80) && (frog.top <= 200)) || slot0reached === true)
    {
        ctx.drawImage(slotFrogArray[0],slotFrogArray[0].left,slotFrogArray[0].top,slotFrogArray[0].width,slotFrogArray[0].height);
        if(slot0reached === false) {
            frog.left = 300;
            frog.top = 800;
            slot0reached = true;
            score++;
        }
    }
    if(((frog.left >= 160 && frog.left <= 200) && (frog.top <= 200)) || slot1reached === true)
    {
        ctx.drawImage(slotFrogArray[1],slotFrogArray[1].left,slotFrogArray[1].top,slotFrogArray[1].width,slotFrogArray[1].height);
        if(slot1reached === false) {
            frog.left = 300;
            frog.top = 800;
            slot1reached = true;
            score++;
        }
    }
    if(((frog.left >= 280 && frog.left <= 320) && (frog.top <= 200)) || slot2reached === true)
    {
        ctx.drawImage(slotFrogArray[2],slotFrogArray[2].left,slotFrogArray[2].top,slotFrogArray[2].width,slotFrogArray[2].height);
        if(slot2reached === false) {
            frog.left = 300;
            frog.top = 800;
            slot2reached = true;
            score++;
        }
    }
    if(((frog.left >= 400 && frog.left <= 440) && (frog.top <= 200)) || slot3reached === true)
    {
        ctx.drawImage(slotFrogArray[3],slotFrogArray[3].left,slotFrogArray[3].top,slotFrogArray[3].width,slotFrogArray[3].height);
        if(slot3reached === false) {
            frog.left = 300;
            frog.top = 800;
            slot3reached = true;
            score++;
        }
    }
    if(((frog.left >= 520 && frog.left <= 560) && (frog.top <= 200)) || slot4reached === true)
    {
        ctx.drawImage(slotFrogArray[4],slotFrogArray[4].left,slotFrogArray[4].top,slotFrogArray[4].width,slotFrogArray[4].height);
        if(slot4reached === false) {
            frog.left = 300;
            frog.top = 800;
            slot4reached = true;
            score++;
        }
    }
}

//this function may be helpful.  You should understand it and be able to make it on your own.
function getRandomInt(min, max) { //return random int
    return Math.floor(Math.random() * (max - min)) + min;
}

function calcRnum(num1, num2)
{
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

//Having a reset function allows the user to play again.
function reset() { //resets left and top values of frog, but doesn't redraw it
    startAnimation();
    deathCount = 0;
    score = 0;
    initialize();
    slot0reached=false;
    slot1reached=false;
    slot2reached=false;
    slot3reached=false;
    slot4reached=false;
    startAnimation();
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("reset").disabled = true;
}

//most games require a function to see if winning conditions have been met.
//Do not reload the screen
function checkWin() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    if(score === 15 && level === 3)
    {
        audio5.pause();
        audio5.currentTime = 0;
        ctx.fillStyle= "#0000ff";
        ctx.fillRect(0,0,650,850);
        ctx.fillStyle= "#00ff00";
        ctx.font = "50px Lucida Console";
        ctx.fillText("You Win!", 200,425);
        document.getElementById("reset").style.visibility = "visible";
        document.getElementById("reset").disabled = false;
        document.getElementById("start").style.visibility = "hidden";
        if(score > highscore){
            highscore = score;
        }
        stopAnimation();
    }
}

//your game may have multiple levels eventually.  Put code here to switch to the next level.  Switching levels
//is not the same as going to another webpage with another HTML file
function nextLevel() {

    if(score >= 5 && level === 1){
        level = 2;
        frog.left = 300;
        frog.top = 800;
        slot0reached=false;
        slot1reached=false;
        slot2reached=false;
        slot3reached=false;
        slot4reached=false;
    }
    else if(score >= 10 && level === 2) {
        level = 3;
        frog.left = 300;
        frog.top = 800;
        slot0reached=false;
        slot1reached=false;
        slot2reached=false;
        slot3reached=false;
        slot4reached=false;
    }
}


//ends the game and displays 'Game Over' on the canvas
function gameOver(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.fillRect(0,0,650,850);
    ctx.fillStyle= "#ff0000";
    ctx.font = "50px Lucida Console";
    ctx.fillText("Game Over", 200,425);
    document.getElementById("reset").style.visibility = "visible";
    document.getElementById("reset").disabled = false;
    document.getElementById("start").style.visibility = "hidden";
    if(score > highscore){
        highscore = score;
    }
    stopAnimation();
}

//You may want a function to show your controls for the user.
/*function help() {
    alert("Controls: W, T, I, and Up Arrow is up. S, G, K, and Down Arrow is down. A, F, J and Left Arrow is left. And D, H, L and Right Arrow is right. The goal of the game is to get the frog into its five homes at the top of the screen. Avoid the cars, snakes and crocodiles, while using the logs as transportation. Also, hearts, stars and clocks all act as power ups. To get to the highest round possible, join together with up to 3 people to play together. Remember there is a timer!");
}
 */

//checks if the frog is inside of the canvas
function checkFrog() {
    if ((frog.left <= -25 || frog.left >= 625 )|| frog.top >= 825) {
        frog.left = 300;
        frog.top = 800;
        deathCount += 1;
        audio2.play();
    }
}