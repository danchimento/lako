import Element from './element.js';

export default class Button extends Element {
    
    constructor() {
        super("button");

        this._elem.style.width = "100px";
        this._elem.style.height = "25px";
        this._elem.style.backgroundColor = "#aaa";
        this._elem.innerText = "Button"
    }

    set text(value) {
        this._elem.innerText = value;
    }
}