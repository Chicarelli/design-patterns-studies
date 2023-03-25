"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperSingleton = void 0;
class PaperSingleton {
    constructor() {
        this.lines = [];
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new PaperSingleton();
        }
        return this.instance;
    }
    addLine(line) {
        this.lines.push(line);
        return line;
    }
}
exports.PaperSingleton = PaperSingleton;
