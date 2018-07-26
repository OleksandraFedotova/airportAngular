export class Departure {
    id: string;
    time: string;
    crewId: string;
    aircraftId: string;

    constructor(id: string, crewId: string, time: string, aircraftId: string) {
        this.id = id,
            this.aircraftId = aircraftId,
            this.crewId = crewId,
            this.time = time
    }
}