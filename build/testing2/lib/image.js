import Element from './element.js';

export default class Image extends Element {
    
    constructor() {
        super("img");
    }

    set source(value) {
        this._elem.src = value;
    }
}