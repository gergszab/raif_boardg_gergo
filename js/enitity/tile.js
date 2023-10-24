import {OwnersEnum} from "../enums.js";

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
   * @type {String}
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
   * @type {number[]}
   */
  #rent;
  /**
   * @type {number}
   */
  #level;

  /**
   *
   * @param {number} index
   * @param {number} row
   * @param {String} type
   * @param {String} title
   * @param {number | undefined} price
   * @param {number[] | undefined} rent
   */
  constructor({index, row, type, title, price, rent}) {
    this.#index = index;
    this.#row = row;
    this.#type = type;
    this.#title = title;
    this.#owner = OwnersEnum.Bank;

    if (price) {
      this.#price = price;
    }

    if (rent) {
      this.#rent = rent;
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

  get rent() {
    return this.#rent;
  }

  get level() {
    return this.#level;
  }

  /**
   *
   * @param {String} owner
   */
  set owner(owner) {
    this.#owner = owner;
  }

  /**
   * @param {number} level
   */
  set level(level) {
    this.#level = level;
  }
}
