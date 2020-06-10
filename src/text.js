import Element from './element.js';
import { px } from './common.js';

export default class Text extends Element {
    
    constructor() {
        super();

        this._elem.style.fontFamily = "sans-serif";
        this._elem.style.display = "inline";
        this._elem.style.width = null;
        this._elem.style.height = null;
    }

    set text(value) {
        this._elem.innerText = value;
    }

    set font(value) {
        this._elem.style.fontFamily = value;
    }
}