var pipes = [];
var bird = Game.addEllipse();
bird.backgroundColor = "yellow";
bird.left = 150;
bird.top = Game.height / 2;
bird.width = 50;
bird.height = 50;

var pipeGap = 200;
var pipeVariantMax = 200;
var spaceBetweenPipes = 500;
var birdSpeed = 10;
var gravity = 1.2;
var birdVelocity = 0;
var flapPower = 15;

var score = 0;
var scoreText = Game.addText();
scoreText.fontSize = 24;

function addPipes() {
    var positionVariant = Math.random() * (200 - 0);
    positionVariant *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    var lastPipePosition = Game.width;
    if (pipes.length > 0) {
        var lastPipe = pipes[pipes.length - 1];
        lastPipePosition = lastPipe.right;
    } 

    var topPipe = Game.addRectangle();
    topPipe.backgroundColor = "green";
    topPipe.height = 1000;
    topPipe.width = 50;
    topPipe.left = lastPipePosition + spaceBetweenPipes;
    topPipe.top = (Game.height / 2) - (pipeGap / 2) - topPipe.height - positionVariant;
    this.pipes.push(topPipe);

    var bottomPipe = Game.addRectangle();
    bottomPipe.backgroundColor = "green";
    bottomPipe.height = 1000;
    bottomPipe.width = 50;
    bottomPipe.left = lastPipePosition + spaceBetweenPipes; 
    bottomPipe.top = (Game.height / 2) + (pipeGap / 2) - positionVariant
    this.pipes.push(bottomPipe);
}

function updateBird() {
    birdVelocity += gravity;
    bird.top += birdVelocity;

    if (bird.top > window.innerHeight) {
        gameTimer.stop();
    }
}

function updatePipes() {
    for (var i in pipes) {
        var pipe = pipes[i];
        pipe.left -= birdSpeed;

        if (pipe.right < 0) {
            pipes.splice(i, 1);
            Game.remove(pipe);
        }

        if (pipe.left < bird.right && pipe.right > bird.left && pipe.top < bird.bottom && pipe.bottom > bird.top) {
            gameTimer.stop();
        }
    }

    if (pipes.length < 5) {
        addPipes();
    }
}

function updateScore() {
    score++;
    scoreText.text = score;
}

function update() {
    updateBird();
    updatePipes();
    updateScore();
}

function flapWings() {
    birdVelocity -= flapPower;
}

Game.keyDown(32, flapWings);

var gameTimer = Game.addTimer();
gameTimer.repeat = true;
gameTimer.delay = 32;
gameTimer.tick = update;
gameTimer.start();

