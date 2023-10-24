import {BoardDisplay} from "./boardDisplay.js";
import {ControlDisplay} from "./controlDisplay.js";
import {PlayerDisplay} from "./playerDisplay.js";
import {DeckDisplay} from "./deckDisplay.js";
import {DiceDisplay} from "./diceDisplay.js";

export class GameDisplay {
  #boardDisplay;
  #controlDisplay;
  #playerDisplay;
  #deckDisplay;
  #diceDisplay;

  constructor() {
    this.#boardDisplay = new BoardDisplay();
    this.#controlDisplay = new ControlDisplay();
    this.#playerDisplay = new PlayerDisplay();
    this.#deckDisplay = new DeckDisplay();
    this.#diceDisplay = new DiceDisplay();
  }

  /**
   *
   * @param {Tile[]} tiles
   * @param {Player[]} players
   */
  setup(tiles, players) {
    this.#boardDisplay.setup(tiles);
    this.#controlDisplay.setup();
    this.#playerDisplay.setup(players);
    this.#deckDisplay.setup();
    this.#diceDisplay.setup();
  }

  hideAllButtons() {
    this.#boardDisplay.hideBuyPropertyButton();
  }

  get boardDisplay() {
    return this.#boardDisplay;
  }

  get controlDisplay() {
    return this.#controlDisplay;
  }

  get playerDisplay() {
    return this.#playerDisplay;
  }

  get deckDisplay() {
    return this.#deckDisplay;
  }

  get diceDisplay() {
    return this.#diceDisplay;
  }
}
