interface MakeRequestResponse {
    temp: string;
    someOtherPropertiy: string;
}

export class ConsultarTemp2 {

    makeRequest():  MakeRequestResponse{
        return {
            temp: '20°C',
            someOtherPropertiy: ''
        };
    }
}