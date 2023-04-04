import { Command } from "./Command";

export class FazerLancamento implements Command {
    constructor(private amount: number) {}

    execute() {
        console.log(`Fazendo o lançamento de ${this.amount / 100}`)
    }
}