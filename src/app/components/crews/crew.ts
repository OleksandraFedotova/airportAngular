export class Crew {
    id: string;
    pilotId: string;
    stewardessesId: string[];

    constructor(id: string, pilotId: string, stewardessesId: string[]) {
        this.id = id,
            this.pilotId = pilotId,
            this.stewardessesId = stewardessesId
    }
}