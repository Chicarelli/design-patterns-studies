"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomLineUsing1 = exports.addLineUsing1 = void 0;
const PaperSingleton_1 = require("./PaperSingleton");
function addLineUsing1() {
    PaperSingleton_1.PaperSingleton.getInstance().addLine("Test Using1");
}
exports.addLineUsing1 = addLineUsing1;
function addCustomLineUsing1(text) {
    PaperSingleton_1.PaperSingleton.getInstance().addLine(`Custom line by Using1: ${text}`);
}
exports.addCustomLineUsing1 = addCustomLineUsing1;
