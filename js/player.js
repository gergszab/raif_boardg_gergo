export class Player {
  #name;
  #color;
  #position;
  #properties;
  #wealth;
  #inPrison;
  #prisonCountdown;
  #freeEscapeCounter;

  /**
   *
   * @param {String} name
   * @param {String} color
   */
  constructor({name, color}) {
    this.#position = 0;
    this.#properties = [];
    this.#wealth = 150000;
    this.#inPrison = false;
    this.#freeEscapeCounter = 0;
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

  get inPrison() {
    return this.#inPrison;
  }

  get prisonCountdown() {
    return this.#prisonCountdown;
  }

  get freeEscapeCounter() {
    return this.#freeEscapeCounter;
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

  /**
   *
   * @param {boolean} inPrison
   */
  set inPrison(inPrison) {
    this.#inPrison = inPrison;
  }

  /**
   *
   * @param {number} prisonCountdown
   */
  set prisonCountdown(prisonCountdown) {
    this.#prisonCountdown = prisonCountdown;
  }

  /**
   *
   * @param {number} freeEscapeCounter
   */
  set freeEscapeCounter(freeEscapeCounter) {
    this.#freeEscapeCounter = freeEscapeCounter;
  }
}
