import Element from './element.js';

export default class Eclipse extends Element {
    
    constructor() {
        super();

        this.elem.style.width = "50px";
        this.elem.style.height = "50px";
        this.elem.style.borderRadius = "10000px";
        this.elem.style.backgroundColor = "#aaa";
    }
}