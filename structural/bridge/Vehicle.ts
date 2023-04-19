import { Engine } from "./Engine";

export abstract class Vehicle {

    constructor(
        private speed: number, 
        private model: string,
        private year: number,
        private engine: Engine,
    ){}

    setVelocidade(speed: number): void {
        this.speed = speed;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    abstract getDescription(): string;
}