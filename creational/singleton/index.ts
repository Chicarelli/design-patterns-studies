import { addLineUsing1, addCustomLineUsing1 } from "./using1";
import { addLineUsing2, addCustomLineUsing2 } from "./using2";
import { PaperSingleton } from "./PaperSingleton";

addLineUsing1();
addLineUsing2();
addCustomLineUsing1("Test");
addCustomLineUsing2("Test2");
PaperSingleton.getInstance().addLine("Test from index");
addCustomLineUsing1('Teste3');

console.log(PaperSingleton.getInstance().lines);


