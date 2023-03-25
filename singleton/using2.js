"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomLineUsing2 = exports.addLineUsing2 = void 0;
const PaperSingleton_1 = require("./PaperSingleton");
function addLineUsing2() {
    PaperSingleton_1.PaperSingleton.getInstance().addLine("Test Using1");
}
exports.addLineUsing2 = addLineUsing2;
function addCustomLineUsing2(text) {
    PaperSingleton_1.PaperSingleton.getInstance().addLine(`Custom line by Using2: ${text}`);
}
exports.addCustomLineUsing2 = addCustomLineUsing2;
