import { Board } from "./board.js";
import {Player} from "./player.js";
import {Deck} from "./deck.js";
import {DeckTypeEnum} from "./enums.js";

export class Game {

  #game = false;
  #players;
  #luckyDeck;
  #surpriseDeck;
  #board;

  start() {
    this.#players = [];
    this.#createPlayers();
    this.#luckyDeck = new Deck(DeckTypeEnum.Lucky);
    this.#surpriseDeck = new Deck(DeckTypeEnum.Surprise);
    this.#board = new Board({
      players: this.#players,
      luckyDeck: this.#luckyDeck,
      surpriseDeck: this.#surpriseDeck
    });

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
