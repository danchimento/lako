import Element from './element.js';

export default class Ellipse extends Element {
    
    constructor() {
        super();

        this._elem.style.borderRadius = "50%";
        this._elem.style.backgroundColor = "#aaa";
    }
}