import {OwnersEnum} from "./enums.js";

export class Tile {
  /**
   * @type {number}
   */
  #index;
  /**
   * @type {number}
   */
  #row;
  /**
   * @type {String}
   */
  #type;
  /**
   * @type {number}
   */
  #owner;
  /**
   * @type {String}
   */
  #title;
  /**
   * @type {number}
   */
  #price;

  /**
   *
   * @param {number} index
   * @param {number} row
   * @param {String} type
   * @param {String} title
   * @param {number | undefined} price
   */
  constructor({index, row, type, title, price}) {
    this.#index = index;
    this.#row = row;
    this.#type = type;
    this.#title = title;
    this.#owner = OwnersEnum.Bank;

    if (price) {
      this.#price = price;
    }
  }

  get index() {
    return this.#index;
  }

  get row() {
    return this.#row;
  }

  get type() {
    return this.#type;
  }

  get owner() {
    return this.#owner;
  }

  get title() {
    return this.#title;
  }

  get price() {
    return this.#price;
  }
}
