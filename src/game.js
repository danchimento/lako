import Rectangle from './rectangle.js';
import Button from './button.js';
import Ellipse from './ellipse.js';
import Timer from './timer.js';
import Image from './image.js';
import Text from './text.js';
import Sound from './sound.js';
import { val } from './common.js';

export default class Game {

    constructor() {
        this._keyDownEvents = [];
        this._keyUpEvents = [];
        this._mouseDownEvent = () => {};
        this._mouseUpEvent = () => {};
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this._handleKeyUp = this._handleKeyUp.bind(this);
        this._mouseDownEvent = this._mouseDownEvent.bind(this);
        this._mouseUpEvent = this._mouseUpEvent.bind(this);
        this._mouseDown = false;
        
        document.addEventListener('keydown', this._handleKeyDown);
        document.addEventListener('keyup', this._handleKeyUp);
        document.addEventListener('mousedown', this._handleMouseDownEvent);
        document.addEventListener('mouseup', this._handleMouseUpEvent);
        document.title = "New Game";
        document.body.style.backgroundColor = "#ddd";
        document.body.style.overflow = "hidden";
    }

    set backgroundColor(value) {
        document.body.style.backgroundColor = value;
    }

    set name(value) {
        document.title = value;
    }

    get width() { return val(window.innerWidth); }
    get height() { return val(window.innerHeight); }

    get isMouseDown() { return this._mouseDown; }

    _handleKeyDown(e) {
        let event = this._keyDownEvents[e.keyCode];
        
        if (event) {
            event()
        }
    }

    keyDown(key, event) {
        this._keyDownEvents[key] = event;
    }

    _handleKeyUp(e) {
        let event = this._keyUpEvents[e.keyCode];
        
        if (event) {
            event()
        }
    }

    keyUp(key, event) {
        this._keyUpEvents[key] = event;
    }


    _handleMouseDownEvent = (e) => {
        this._mouseDown = true;
        this._mouseDownEvent(e);
    }

    _handleMouseUpEvent = (e) => {
        this._mouseDown = false;
        this._mouseUpEvent(e);
    }

    mouseDown(event) {
        this._mouseDownEvent = event;
    }

    mouseUp(event) {
        this._mouseUpEvent = event;
    }

    remove = (elem) => {
        elem._elem.remove();
    }

    addRectangle = () => {
        let rectangle = new Rectangle();
        document.body.append(rectangle._elem);
        return rectangle;
    }
    
    addButton = () => {
        let button = new Button();
        document.body.append(button._elem);
        return button;
    }
    
    addEllipse = () => {
        let circle = new Ellipse();
        document.body.append(circle._elem);
        return circle;
    }
    
    addTimer = () => {
        return new Timer();
    }

    addImage = () => {
        let image = new Image();
        document.body.append(image._elem);
        return image;
    }

    addText = () => {
        let text = new Text();
        document.body.append(text._elem);
        return text;
    }

    addSound = () => {
        let text = new Sound();
        document.body.append(text._elem);
        return text;
    }

    overlaps = (element1, element2) => {
        return element1.top <= element2.bottom 
            && element1.bottom >= element2.top
            && element1.right >= element2.left 
            && element1.left <= element2.right;
    }
}