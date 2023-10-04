export class Player {
  #name;
  #color;
  #position;
  #properties;
  #wealth;

  /**
   *
   * @param {string} name
   * @param {string} color
   */
  constructor({name, color}) {
    this.#position = 0;
    this.#properties = [];
    this.#name = name;
    this.#color = color;
  }

  get name() {
    return this.#name;
  }

  get color() {
    return this.#color;
  }

  get position() {
    return this.#position;
  }

  get properties() {
    return this.#properties;
  }

  get wealth() {
    return this.#wealth;
  }

  /**
   *
   * @param {number} position
   */
  set position(position) {
    this.#position = position;
  }

  /**
   *
   * @param {[]} properties
   */
  set properties(properties) {
    this.#properties = properties;
  }

  /**
   *
   * @param {number} wealth
   */
  set wealth(wealth) {
    this.#wealth = wealth;
  }
}
