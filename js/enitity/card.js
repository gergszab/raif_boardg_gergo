export class Card {
  #type;
  #effect;
  #text;
  #value;

  /**
   *
   * @param {String} type
   * @param {String} effect
   * @param {String} text
   * @param {number | undefined} value
   */
  constructor({type, effect, text, value }) {
    this.#type = type;
    this.#effect = effect;
    this.#text = text;

    if (value) {
      this.#value = value;
    }
  }

  get type() {
    return this.#type;
  }

  get effect() {
    return this.#effect;
  }

  get text() {
    return this.#text;
  }

  get value() {
    return this.#value;
  }
}
