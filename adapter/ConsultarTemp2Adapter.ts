import { ConsultarTemp } from "./ConsultarTemp";
import { ConsultarTemp2 } from "./ConsultarTemp2";

export class ConsultarTemp2Adapter extends ConsultarTemp {
    private consultarTemp2: ConsultarTemp2

    constructor(consultarTemp: ConsultarTemp2) {
        super();
        this.consultarTemp2 = consultarTemp;
    }

    request() {
        const response = this.consultarTemp2.makeRequest();

        return `Temperature is: ${response.temp}`;
    }
}