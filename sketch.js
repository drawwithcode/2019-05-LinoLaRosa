var x = 100;
var y = 800;

//lock the screen in place
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function preload() {

}

function setup() {

    createCanvas(windowWidth, windowHeight)
    fill(255, 0, 0);

}

function draw() {

    var distance = dist(x, y, mouseX, mouseY);
    var remap = map(distance, 0, 565, 0, 25);

    //blue circle movement
    if (keyIsDown(RIGHT_ARROW)) {
        x -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        x += 3;
    }

    if (distance < 70) {
        y -= 3;
    }

    if (keyIsDown(LEFT_ARROW)) {
        y += 3;
    }
    clear();

    //blue circle
    fill("blue");
    ellipse(x, y, 70);
    noStroke();


    //obstacles
    fill("red");

    rect(250, 300, 150, 800);

    ellipse(100, 700, 50);
    ellipse(200, 500, 70);
    ellipse(75, 350, 70);
    ellipse(600, 450, 300);
    ellipse(1000, 650, 300);

    rect(1200, 0, 150, 800);

    ellipse(1450, 700, 80);
    ellipse(1650, 550, 200);
    ellipse(1450, 300, 120);

    //end goal
    fill("green");
    ellipse(1450, 75, 70);

    //introduction text
    textAlign(LEFT);
    textSize(25);
    fill("black");
    text("Welcome to the counter intuitive maze.", 50, 50);
    text("Use the RIGHT ARROW to move LEFT. Use the DOWN ARROW to move RIGHT.", 50, 80);
    text("Use the LEFT ARROW to move DOWN. Push the blue ball with your MOUSE to move UP.", 50, 110);
    text("Every red shape will kill you. Try to reach the green ball. Good Luck!", 50, 140);

    // collisions
    if (x > 215 && x < 435 && y > 265) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 100, 700) < 50) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 200, 500) < 70) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 75, 350) < 70) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 600, 450) < 180) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 1000, 650) < 180) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (x > 1165 && x < 1385 && y < 835) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 1450, 700) < 80) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 1650, 550) < 130) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 1450, 300) < 100) {
        fill("red");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("GAME OVER. REFRESH THE PAGE TO TRY AGAIN.", windowWidth / 2, windowHeight / 2);
    }

    if (dist(x, y, 1450, 75) < 70) {
        fill("green");
        rect(0, 0, windowWidth, windowHeight);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill("white");
        text("YOU WON!! IT WASN'T THAT EASY, RIGHT?", windowWidth / 2, windowHeight / 2);
    }
}
