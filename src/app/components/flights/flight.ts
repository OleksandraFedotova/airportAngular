export class Flight {
    id: string;
    name: string;
    departurePoint: string;
    destination: string;
    arrivalTime: string;
    departureTime: string;
}
export class FlightList{
    flights:Flight[];
}