import {Game} from "./Game";
import "./style.less";

class GameUI {
    constructor() {
        this.$app = document.querySelector("#app");
        this.game = new Game(3, 6, 4);

        this.$app.addEventListener("click", (event) => {
            if (event.target.classList.contains("launch-it")) {
                this.game.rollDices();
                this.render();
            }
            if (event.target.classList.contains("stock-it")) {
                this.game.stockCurrentScore();
                this.render();
            }
        });
    }

    generateDiceHTML() {
        let result = "";
        for (let dice of this.game.dices) {
            result += `<div class="dice">${dice.getValue()}</div>
          `;
        }
        return result;
    }

    generatePlayerHTML() {
        let result = "";
        for (let player of this.game.players) {
            result += `<div class="player1-score">
            ${player.name} : <span class="score">${player.getScore()}</span>
          </div>
          `;
        }
        return result;
    }

    totalDices() {
        let resultDices = 0;
        for (let dice of this.game.dices) {
            resultDices += dice.getValue();
        }
        return resultDices;
    }


    render() {
        this.$app.innerHTML = `
        <section class="scores">
          ${this.generatePlayerHTML()}
        </section>
        <section class="gameboard">
          <h1>Joueur actuel : <span class="player-name">${this.game.currentPlayer.name}</span></h1>
          <div class="stock-container">
            Score courant : <span class="stock">${this.game.currentScore}</span>
          </div>
          <section class="dices-container">
            <h1>Résultat des dés</h1>
            <div class="dices">
                ${this.generateDiceHTML()}
            </div>
            <div class="total">
              Total : <span class="total-value">${this.totalDices()} </span>
            </div>
          </section>
          <div class="actions">
            <button class="stock-it">Stocker</button>
            <button class="launch-it">Lancer les dès</button>
          </div>
        </section>
        `;
    }
}

const gameUI = new GameUI();
gameUI.render();