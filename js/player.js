export class Player {
  #name;
  #color;
  #position;
  #properties;
  #wealth;
  #inPrison;
  #prisonCountdown;
  /**
   * @type {Card[]}
   */
  #freeEscapeCards;

  /**
   *
   * @param {String} name
   * @param {String} color
   */
  constructor({name, color}) {
    this.#name = name;
    this.#color = color;

    this.#position = 0;
    this.#properties = [];
    this.#wealth = 150000;
    this.#inPrison = false;
    this.#freeEscapeCards = [];
  }

  /**
   *
   * @param {Card} card
   */
  addFreeEscapeCard(card) {
    this.#freeEscapeCards.push(card);
  }

  /**
   *
   * @param {String | undefined} type
   * @returns Card
   */
  removeFreeEscapeCard(type) {
    if (this.#freeEscapeCards.length === 1) {
      return this.#freeEscapeCards.pop();
    } else {
      return (this.#freeEscapeCards.filter(card => card.type === type)).pop();
    }
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

  get freeEscapeCards() {
    return this.#freeEscapeCards;
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
}
