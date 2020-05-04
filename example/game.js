var box1 = Game.addText();
box1.text = "LETS GO!!"
box1.width = 500;
box1.textColor = "white"
box1.fontSize = "100"

Game.color = "blue"

box1.backgroundColor = "red";

box1.click = function() {
    box1.left = box1.left + 10;
};