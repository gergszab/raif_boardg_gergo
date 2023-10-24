import { Board } from "./board.js";
import {Player} from "./enitity/player.js";
import {Deck} from "./enitity/deck.js";
import {DeckTypeEnum} from "./enums.js";
import {GameDisplay} from "./display/gameDisplay.js";
import {Util} from "./util.js";

export class Game {
  // utils
  #util;

  // Entities
  #players;
  #luckyDeck;
  #surpriseDeck;
  #board;

  // Display
  #gameDisplay;

  constructor() {
    this.#util = new Util();
    this.#players = [];
    this.#gameDisplay = new GameDisplay();
    this.#luckyDeck = new Deck(DeckTypeEnum.Lucky);
    this.#surpriseDeck = new Deck(DeckTypeEnum.Surprise);
    this.#board = new Board({
      util: this.#util,
      players: this.#players,
      luckyDeck: this.#luckyDeck,
      surpriseDeck: this.#surpriseDeck,
      gameDisplay: this.#gameDisplay
    });
  }

  start() {
    this.#createPlayers();
    this.#board.createTiles();
    this.#gameDisplay.setup(this.#board.tiles, this.#players);
    this.#gameDisplay.controlDisplay.updatePlayerInfoDisplay(this.#players);
    this.#setupStart();
  }

  #createPlayers() {
    this.#players.push(new Player({name: 'Player1', color: 'blue'}));
    this.#players.push(new Player({name: 'Player2', color: 'red'}));
  }

  #setupStart() {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener('click', this.#onStart.bind(this));
  }

  /**
   *
   * @returns {Promise<*>}
   */
  #onStart() {
    this.#gameDisplay.diceDisplay.hideStartButton();

    this.#board.startGame(this.#displayWinner.bind(this));
  };

  #displayWinner() {
    alert(`${this.#players[0].name} won!`)
  }
}
