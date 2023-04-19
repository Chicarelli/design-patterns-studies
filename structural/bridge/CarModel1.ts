import { Vehicle } from "./Vehicle";

class CarModel1 extends Vehicle {
    private readonly description = "some description of car model 1";

    getDescription(): string {
        return this.description
    }
}