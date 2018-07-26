export class Flight {
    id: string;
    name: string;
    departurePoint: string;
    destination: string;
    arrivalTime: string;
    departureTime: string;

    constructor(id: string, name: string, departurePoint: string, destination: string, arrivalTime: string, departureTime: string) {
        this.id = id,
            this.departurePoint = departurePoint,
            this.departureTime = departureTime,
            this.destination = destination,
            this.arrivalTime = arrivalTime,
            this.name = name
    }
}