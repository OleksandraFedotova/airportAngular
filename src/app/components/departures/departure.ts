export class Departure {
    id: string;
    time: string;
    crewId: string;
    aircraftId: string;
}
export class DepartureList{
departures: Departure[];
}