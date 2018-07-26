export class Ticket {
    id: string;
    price: number;
    flightNumber: string;

    constructor(id: string, price: number, flightNumber: string){
        this.id = id,
        this.price=price,
        this.flightNumber=flightNumber
    }
}