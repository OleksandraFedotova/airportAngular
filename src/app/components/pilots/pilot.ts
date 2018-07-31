import { Injectable } from "@angular/core";

@Injectable()
export class Pilot {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    experience: number;
}
@Injectable()
export class PilotsList{
    pilots:Pilot[];
}