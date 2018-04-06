import {Player} from "./Player";
import {Dice} from "./Dice";

export class Game {
    constructor(playersCount, facesCount, dicesCount) {
        this.currentScore = 0;
        this.dices = [];
        for (let i = 0; i < dicesCount; i++) {
            this.dices.push(new Dice(facesCount));
        }


        this.players = [];
        for (let i = 0; i < playersCount; i++) {
            this.players.push(new Player('Joueur ' + (i+1)));
        }
        this.currentPlayer = this.players[0];
    }

    nextPlayer() {
        let currentIndex = this.players.indexOf(this.currentPlayer);
        let nextIndex = (currentIndex + 1) % this.players.length;
        this.currentPlayer = this.players[nextIndex];
        this.currentScore = 0;
    }

    rollDices() {
        let hasOne = false;
        let dicesSum = 0;

        for (let dice of this.dices) {

            dice.roll();
            if (dice.getValue() === 1) {
                hasOne = true;
            }
            dicesSum += dice.getValue();
        }


        if (hasOne) {
            this.nextPlayer();
        } else {
            this.currentScore += dicesSum;
        }
    }

    stockCurrentScore() {
        if (this.currentScore > 0) {
            this.currentPlayer.addScore(this.currentScore);
            this.checkVictory();
            this.nextPlayer();
        }
    }

    checkVictory() {
        if (this.currentPlayer.getScore() >= 100) {
            alert("You win!");
        }
    }
}
