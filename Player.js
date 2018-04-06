


export class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }

    getScore() {
        return this.score;
    }

    addScore(points) {
        this.score += points;
    }
}
