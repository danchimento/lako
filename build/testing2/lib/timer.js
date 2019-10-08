export default class Timer {
    delay;
    tick;
    repeat;
    _timeout;
    _interval;
    _running;

    constructor() {
        this.delay = 1000;
        this.repeat = false;
        this._running = false;
    }

    get running() {
        return this._running;
    }

    start() {
        if (this._running) {
            return;
        }
        
        this._running = true;

        if (this.repeat) {
            this._interval = setInterval(this.tick, this.delay);
        } else {
            this._timeout = setTimeout(this.tick, () => {
                this._running = false;
                this.delay()
            });
        }
    }

    stop() {
        clearTimeout(this._timeout);
        clearInterval(this._interval);

        this._running = false;
    }
}