import { FazerLancamento } from "./FazerLancamento";
import { PagarConta } from "./PagarConta";

const conta = {
    idConta: '1',
    valor: 1000
};

const pagarConta = new PagarConta(conta);
pagarConta.execute();

const lancamento = new FazerLancamento(conta.valor);
lancamento.execute();
