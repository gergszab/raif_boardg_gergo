import {CardEffectEnum, CardsTextEnum, CardTypeEnum, DeckTypeEnum} from "./enums.js";
import {Card} from "./card.js";

export class Deck {
  #cards;
  #usedCards;
  #takenOutCards;

  /**
   *
   * @param {String} type
   */
  constructor(type) {
    this.#cards = [];
    this.#usedCards = [];
    this.#takenOutCards = [];

    if (type === DeckTypeEnum.Lucky) {
      this.#createLuckyDeck();
    } else if (type === DeckTypeEnum.Surprise) {
      this.#createSurpriseDeck();
    } else {
      throw 'Unknown deck type provided';
    }

    this.#shuffleCards();
  }

  /**
   * @returns {Card[]}
   */
  #createSurpriseDeck() {
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Other, text: CardsTextEnum.FreeEscape}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess1, value: -1000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess2, value: -2000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess3, value: -3000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess4, value: -4000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess5, value: -5000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess6, value: -6000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess7, value: -8000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz1, value: 1000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz2, value: 2000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz4, value: 4000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz5, value: 5000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz6, value: 6000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz7, value: 8000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz8, value: 9000}));
    this.#cards.push(new Card({type: CardTypeEnum.Surprise, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz9, value: 10000}));
  }

  /**
   * @returns {Card[]}
   */
  #createLuckyDeck() {
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Other, text: CardsTextEnum.FreeEscape}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Other, text: CardsTextEnum.PayByPropertySmall}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Other, text: CardsTextEnum.PayByPropertyBig}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess1, value: -1000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess2, value: -2000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess4, value: -4000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess7, value: -8000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Subtraction, text: CardsTextEnum.Fizess8, value: -10000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz1, value: 1000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz2, value: 2000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz3, value: 3000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz4, value: 4000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz5, value: 5000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz6, value: 6000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz7, value: 8000}));
    this.#cards.push(new Card({type: CardTypeEnum.Lucky, effect: CardEffectEnum.Addition, text: CardsTextEnum.Kapsz9, value: 10000}));
  }

  /**
   * @returns void
   */
  #shuffleCards() {
    this.#cards = this.#cards
      .map(value => ({ value: value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  /**
   * @returns Card
   */
  draw() {
    let drawnCard = this.#cards.pop();

    if (drawnCard.text === CardsTextEnum.FreeEscape) {
      this.#takenOutCards.push(drawnCard);
    } else {
      this.#usedCards.push(drawnCard);
    }

    if (this.#cards.length === 0) {
      this.#reshuffle();
    }

    return drawnCard;
  }

  #reshuffle() {
    this.#cards = this.#usedCards;
    this.#usedCards = [];

    this.#shuffleCards();
  }

  returnCard() {
    this.#usedCards.push(this.#takenOutCards.pop());
  }

  get cards() {
    return this.#cards;
  }

  get usedCards() {
    return this.#usedCards;
  }
}
