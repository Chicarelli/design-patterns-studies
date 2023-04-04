import { PaperSingleton } from "./PaperSingleton";

export function addLineUsing2() {
    PaperSingleton.getInstance().addLine("Test Using2");
}

export function addCustomLineUsing2(text: string) {
    PaperSingleton.getInstance().addLine(`Custom line by Using2: ${text}`)
}