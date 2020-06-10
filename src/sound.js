
export default class Sound {
    _elem;

    constructor() {
        this._elem = document.createElement("audio");
        this._elem.preload = "auto";
        this._elem.controls = "none";
        this._elem.style.display = "none";
        this._elem.look = false;
    }

    set source(value) {
        this._elem.src = value;
    }

    set loop(value) {
        this._elem.loop = value;
    }

    get playing() {
        return !this._elem.paused;
    }

    play() {
        this._elem.play();
    }

    pause() {
        this._elem.pause();
    }

    reset() {
        this._elem.currentTime = 0;
    }
}