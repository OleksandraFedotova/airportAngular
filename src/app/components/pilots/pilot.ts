export class Pilot {
    id: string;
    crewModelId: number;
    firstName: string;
    lastName: string;
    birthday: string;
    experience: number;

    constructor(id: string, crewId: number, firstName: string, lastName: string, birthDay: string, experience: number){
        this.id = id,
        this.crewModelId = crewId,
        this.firstName = firstName,
        this.lastName = lastName,
        this.birthday = birthDay,
        this.experience = experience
    }
}