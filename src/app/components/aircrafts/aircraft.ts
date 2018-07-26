export class Aircraft {
    id: string;
    name: string;
    aircraftTypeId: string;
    timespan: string;

    constructor(id: string, name: string, aircraftTypeId: string, timespan: string) {
        this.id = id,
            this.name = name,
            this.aircraftTypeId = aircraftTypeId,
            this.timespan = timespan
    }
}