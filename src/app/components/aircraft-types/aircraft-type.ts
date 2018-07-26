export class AircraftType {
    id: string;
    model: string;
    places: number;
    carrying: number;

    constructor(id: string, model: string, places: number, carrying: number) {
        this.id = id,
            this.carrying = carrying,
            this.model = model,
            this.places = places
    }
}