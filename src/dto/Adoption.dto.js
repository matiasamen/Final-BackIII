export default class AdoptionDTO {
    constructor(adoption) {
        this.id = adoption.id;
        this.pet = adoption.pet;
        this.type = adoption.type;
    }
}
