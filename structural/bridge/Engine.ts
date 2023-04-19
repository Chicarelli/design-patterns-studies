abstract class Engine {
    public isTurnOn = false;
    public cc: number;
    public rpm: number;
    public power: number;
    abstract type: string;

    constructor(cc: number, rpm: number, power: number){
        this.cc = cc;
        this.rpm = rpm;
        this.power = power;
    }

    turnOf() {
        this.isTurnOn = false;
    }

    turnOn() {
        this.isTurnOn = true;
    }
} 