import { Vehicle } from "./Vehicle";

class CarModel2 extends Vehicle {
    private readonly description = "some description of car model 2";

    getDescription(): string {
        return this.description
    }
}