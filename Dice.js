


export class Dice {
    constructor(facesCount) {
        this.facesCount = facesCount;
        this.roll();
    }

    roll() {
        this.value = Math.ceil(Math.random() * this.facesCount);
    }

    getValue() {
        return this.value;
    }
}