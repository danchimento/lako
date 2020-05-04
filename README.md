# Lako (easy)

## Summary
A lightweight game engine for learning to write code.


# Getting Started

1. Download the Github repo
2. Open the build/lako.build.js file into your project directory
3. Add a reference to the lako.build.js file in your HTML file at the bottom of the ```<body>``` tag and before all your javascript.
4. You're ready to start using the ```Game``` object!

index.html
```
<html>
    <head>
        <title>Your game title</title>
    </head>
    <body>
        <script src="lako.bundle.js"></script>
        <script src="game.js"></script>
    </body>
</html>
```

## Adding game elements

The following code can be used to add a rectangle to the Game.

```
var myRectangle = Game.addRectangle();
```

Once the rectangle exists you can change the properties of the rectangle.

```
myRectangle.left = 100;
myRectangle.top = 300;
myRectangle.backgroundColor = "green";
```

## Shapes

```
var myRectangle = Game.addRectangle();
var myCircle = Game.addEllipse();

myRectangle.width = 100;
myRectangle.height = 200;
myRectangle.backgroundColor = "brown";
```

## Text
```
var label = Game.addText();
label.text = "Hello World!";
label.fontSize = 15;
label.textColor = "red";
```

## Image
```
var marioImage = Game.addImage();
marioImage.source = "mario.png"
```

## Button
```
var rectangle = Game.addRectangle();
var moveRightButton = Game.addButton();

moveRightButton.click = function() {
    rectangle.left = rectangle.left + 5;
}
```

## Keyboard
https://keycode.info/
```
var circle = Game.addEllipse();

function downArrowPress() {
    circle.top = circle.top + 10;
}

Game.keyDown(40, downArrowPress);
```

## Timer
```
var gameOverText = Game.addText();
gameOverText.text = "Game Over";
gameOverText.visible = false;

var timer = Game.addTimer();
timer.delay = 10000;
timer.repeat = false;
timer.tick = function() {
    gameOverText.visible = true;
}

timer.start();
```


# Element Properties 

The following properties are available to game elements.

|Property|Description|Sample Values|
|--|--|--|
|left|Distance from the left side of the element to the left side of the screen in pixels.|100|
|right|Distance from right side of the element to the left side of the screen in pixels.|100|
|top| Distance from the top of the element to the top of the screen in pixels.|100|
|bottom|Distance from the bottom of the element to the top of the screen in pixels.|100|
|width|Width of the element in pixels|50|
|height|Height of the element in pixels|
|backgroundColor|Color of the background of the element.|"red"\|"#000000" |
|borderColor|Color of the element border|"red"\|"#000000"|
|rotation|Angle or rotation for the element in degrees.|90|
|visible|Determines if the element is visible on the screen.|true\|false|
|fontSize|The font size for text elements in pixels.|15|
|fontColor|The color of the text for text elements|"red"\|"#000000"|


