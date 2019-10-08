import Element from './element.js';

export default class Rectangle extends Element {
    
    constructor() {
        super();

        this._elem.style.width = "50px";
        this._elem.style.height = "50px";
        this._elem.style.backgroundColor = "#aaa";
    }
}