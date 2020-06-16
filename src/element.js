import { px, val } from './common.js';

export default class Element {

    _elem;

    constructor(elem) {
        this._elem = document.createElement(elem || "div");

        this._elem.style.position = "absolute";
        this._elem.style.borderWidth = px(1);
        this._elem.style.borderStyle = "solid";
        this._elem.style.borderColor = "transparent";
        this._elem.style.width = "50px";
        this._elem.style.height = "50px";
        this._elem.style.left = "25px";
        this._elem.style.top = "25px";
    }

    get left() { return val(this._elem.style.left); }
    set left(value) { this._elem.style.left = px(value); }

    get right() { return val(this._elem.style.left) + this.width; }
    set right(value) { this._elem.style.left = px(value - this.width); }

    get top() { return val(this._elem.style.top); }
    set top(value) { this._elem.style.top = px(value); }

    get bottom() { return val(this._elem.style.top) + this.height; }
    set bottom(value) { this._elem.style.top = px(value - this.height); }

    set width(value) { this._elem.style.width = px(value); }
    get width() { return val(this._elem.style.width); }

    set height(value) { this._elem.style.height = px(value); }
    get height() { return val(this._elem.style.height); }

    get backgroundColor() { return this._elem.style.backgroundColor; }
    set backgroundColor(value) { this._elem.style.backgroundColor = value; }

    get borderColor() { return this._elem.style.borderColor; }
    set borderColor(value) { this._elem.style.borderColor = value; }

    set rotation(value) { this._elem.style.transform = `rotate(${value}deg)`; }
    get rotation() {
        var transform = this._elem.style.transform;

        if (!transform) {
            return 0;
        }

        // The transform property is in the format rotate(190deg)
        // 7 is the index of the first number after 'rotate('
        // 4 is the length of 'deg)'
        // The substring value should be everything in between.
        return parseInt(transform.substring(7, transform.length - 4));
    }

    get visible() { return this._elem.style.display == 'block'; }
    set visible(value) { this._elem.style.display = (value ? 'block' : 'none'); }

    set fontSize(value) { this._elem.style.fontSize = px(value); }
    set textColor(value) { this._elem.style.color = value; }

    set click(value) {
        this._elem.onclick = (e) => {
            value(e);
        };
    }
}