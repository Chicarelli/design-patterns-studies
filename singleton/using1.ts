import { PaperSingleton } from "./PaperSingleton";

export function addLineUsing1() {
    PaperSingleton.getInstance().addLine("Test Using1");
}

export function addCustomLineUsing1(text: string) {
    PaperSingleton.getInstance().addLine(`Custom line by Using1: ${text}`);
}