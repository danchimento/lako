var box1 = Game.addRectangle();
box1.width = 100;
box1.height = 200;
box1.backgroundColor = "red";

var text = Game.addText();
text.text = "Hello world";
text.font = "Comic Sans MS";

var sound = Game.addSound();
sound.source = "https://www.w3schools.com/html/horse.ogg";
sound.loop = true;

Game.keyDown(32, function() {
    if (!sound.playing) {
        sound.reset();
        sound.play();
    } else {
        sound.pause();
    }
})
