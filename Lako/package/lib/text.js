import Element from './element.js';
import { px } from './common.js';

export default class Text extends Element {
    
    constructor() {
        super();

        this._elem.style.fontFamily = "sans-serif";
    }

    set text(value) {
        this._elem.innerText = value;
    }
}