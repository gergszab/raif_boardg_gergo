import { Board } from "./board.js";
import {Player} from "./player.js";

export class Game {

  #game = false;
  #players;
  #board;

  start() {
    this.#players = [];
    this.#createPlayers();
    this.#board = new Board(this.#players);

    this.#game = true;

    while (this.#game) {
      this.#game = this.#board.newGame();
    }
  }

  #createPlayers() {
    this.#players.push(new Player({name: 'Player1', color: 'blue'}));
    this.#players.push(new Player({name: 'Player2', color: 'red'}));
  }
}
