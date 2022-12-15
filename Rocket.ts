export class Rocket {
    totalCapacityKg: number;
    name: string;
    cargoItems: []
    constructor(totalCapacityKg: number, name: string) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
}