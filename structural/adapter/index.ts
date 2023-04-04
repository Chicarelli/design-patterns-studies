import { ConsultarTemp } from "./ConsultarTemp";
import { ConsultarTemp2 } from "./ConsultarTemp2";
import { ConsultarTemp2Adapter } from "./ConsultarTemp2Adapter";

function makeRequest(consultar: ConsultarTemp): string {
    return consultar.request();
}

console.log(makeRequest(new ConsultarTemp));

console.log(makeRequest(new ConsultarTemp2Adapter(new ConsultarTemp2)))