import Element from './element.js';

export default class Button extends Element {
    
    constructor() {
        super("button");

        this.elem.style.width = "100px";
        this.elem.style.height = "25px";
        this.elem.style.backgroundColor = "#aaa";
        this.elem.innerText = "Button"
    }

    set click(value) {
        this.elem.onclick = value;
    }

    set text(value) {
        this.elem.innerText = value;
    }
}