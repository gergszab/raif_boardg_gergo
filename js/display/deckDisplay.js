import {TileNamesEnum} from "../enums.js";

export class DeckDisplay {

  setup() {
    const controlArea = document.getElementById("controlArea");

    this.#drawSurpriseDeck(controlArea);
    this.#drawLuckyDeck(controlArea);
  }

  /**
   *
   * @param {HTMLElement} parentElement
   */
  #drawSurpriseDeck(parentElement) {
    const surpriseDeck = document.createElement("DIV");
    surpriseDeck.style.gridArea = "surprise";
    surpriseDeck.style.width = "80%";
    surpriseDeck.style.height = "80%";
    surpriseDeck.style.margin = "auto";
    surpriseDeck.style.border = "solid 1px black";
    surpriseDeck.style.display = "grid";
    surpriseDeck.style.gridTemplateAreas = `'title title title title' 'deck-title deck-counter used-cards-title used-cards-counter'`;
    surpriseDeck.style.alignContent = "space-evenly";
    surpriseDeck.style.background = "#6495ed";
    surpriseDeck.style.fontWeight = "bold";
    surpriseDeck.style.fontSize = "1.2em";
    parentElement.appendChild(surpriseDeck);

    const surpriseTitle = document.createElement("DIV");
    surpriseTitle.style.gridArea = "title";
    surpriseTitle.style.height = "50%";
    surpriseTitle.style.padding = "10px";
    surpriseTitle.style.justifySelf = "center";
    surpriseTitle.textContent = TileNamesEnum.Meglepeteskartya;
    surpriseDeck.appendChild(surpriseTitle);

    const surpriseDeckTitle = document.createElement("SPAN");
    surpriseDeckTitle.style.gridArea = "deck-title";
    surpriseDeckTitle.style.justifySelf = "center";
    surpriseDeckTitle.textContent = "Deck: ";
    surpriseDeck.appendChild(surpriseDeckTitle);

    const surpriseDeckCounter = document.createElement("SPAN");
    surpriseDeckCounter.id = "surpriseDeckCounter";
    surpriseDeckCounter.style.gridArea = "deck-counter";
    surpriseDeckCounter.style.justifySelf = "left";
    surpriseDeckCounter.textContent = "0";
    surpriseDeck.appendChild(surpriseDeckCounter);

    const surpriseUsedCardsTitle = document.createElement("SPAN");
    surpriseUsedCardsTitle.style.gridArea = "used-cards-title";
    surpriseUsedCardsTitle.style.justifySelf = "center";
    surpriseUsedCardsTitle.textContent = "Used cards: ";
    surpriseDeck.appendChild(surpriseUsedCardsTitle);

    const surpriseUsedCardsCounter = document.createElement("SPAN");
    surpriseUsedCardsCounter.id = "surpriseUsedCardsCounter";
    surpriseUsedCardsCounter.style.gridArea = "used-cards-counter";
    surpriseUsedCardsCounter.style.justifySelf = "left";
    surpriseUsedCardsCounter.textContent = "0";
    surpriseDeck.appendChild(surpriseUsedCardsCounter);
  }

  /**
   *
   * @param {HTMLElement} parentElement
   */
  #drawLuckyDeck(parentElement) {
    const luckyDeck = document.createElement("DIV");
    luckyDeck.style.gridArea = "lucky";
    luckyDeck.style.width = "80%";
    luckyDeck.style.height = "80%";
    luckyDeck.style.margin = "auto";
    luckyDeck.style.border = "solid 1px black";
    luckyDeck.style.display = "grid";
    luckyDeck.style.gridTemplateAreas = `'title title title title' 'deck-title deck-counter used-cards-title used-cards-counter'`;
    luckyDeck.style.alignContent = "space-evenly";
    luckyDeck.style.background = "#ff6347";
    luckyDeck.style.fontWeight = "bold";
    luckyDeck.style.fontSize = "1.2em";
    parentElement.appendChild(luckyDeck);

    const luckyTitle = document.createElement("DIV");
    luckyTitle.style.gridArea = "title";
    luckyTitle.style.height = "50%";
    luckyTitle.style.padding = "10px";
    luckyTitle.style.justifySelf = "center";
    luckyTitle.textContent = TileNamesEnum.Szerencsekartya;
    luckyDeck.appendChild(luckyTitle);

    const luckyDeckTitle = document.createElement("SPAN");
    luckyDeckTitle.style.gridArea = "deck-title";
    luckyDeckTitle.style.justifySelf = "center";
    luckyDeckTitle.textContent = "Deck: ";
    luckyDeck.appendChild(luckyDeckTitle);

    const luckyDeckCounter = document.createElement("SPAN");
    luckyDeckCounter.id = "luckyDeckCounter";
    luckyDeckCounter.style.gridArea = "deck-counter";
    luckyDeckCounter.style.justifySelf = "left";
    luckyDeckCounter.textContent = "0";
    luckyDeck.appendChild(luckyDeckCounter);

    const luckyUsedCardsTitle = document.createElement("SPAN");
    luckyUsedCardsTitle.style.gridArea = "used-cards-title";
    luckyUsedCardsTitle.style.justifySelf = "center";
    luckyUsedCardsTitle.textContent = "Used cards: ";
    luckyDeck.appendChild(luckyUsedCardsTitle);

    const luckyUsedCardsCounter = document.createElement("SPAN");
    luckyUsedCardsCounter.id = "luckyUsedCardsCounter";
    luckyUsedCardsCounter.style.gridArea = "used-cards-counter";
    luckyUsedCardsCounter.style.justifySelf = "left";
    luckyUsedCardsCounter.textContent = "0";
    luckyDeck.appendChild(luckyUsedCardsCounter);
  }

  /**
   *
   * @param {number} surpriseDeckCounter
   * @param {number} surpriseUsedCardsCounter
   */
  updateSurpriseDeckDisplay(surpriseDeckCounter, surpriseUsedCardsCounter) {
    document.getElementById('surpriseDeckCounter').textContent = surpriseDeckCounter + '';
    document.getElementById('surpriseUsedCardsCounter').textContent = surpriseUsedCardsCounter + '';
  }

  /**
   *
   * @param {number} luckyDeckCounter
   * @param {number} luckyUsedCardsCounter
   */
  updateLuckyDeckDisplay(luckyDeckCounter, luckyUsedCardsCounter) {
    document.getElementById('luckyDeckCounter').textContent = luckyDeckCounter + '';
    document.getElementById('luckyUsedCardsCounter').textContent = luckyUsedCardsCounter + '';
  }
}
