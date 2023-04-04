import { Command } from "./Command";

interface Conta {
    idConta: string;
    valor: number;
}

export class PagarConta implements Command {
    constructor(private conta: Conta) {}

    execute() {
        console.log(`pagando conta: ${this.conta}`);
    }

}