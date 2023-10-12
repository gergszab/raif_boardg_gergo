import { Tile } from "./tile.js";
import {
  CardEffectEnum,
  CardsTextEnum,
  OwnersEnum,
  TileNamesEnum,
  TileRowEnum,
  TileTypesEnum,
} from "./enums.js";
import { BoardDisplay } from "./boardDisplay.js";
import { Util } from "./util.js";

export class Board {
  #boardDisplay;
  #board;
  #tiles;
  #luckyDeck;
  #surpriseDeck;
  #players;
  #activePlayerIndex;
  #gameGoing;

  /**
   *
   * @param {Player[]} players
   * @param {Deck} luckyDeck
   * @param {Deck} surpriseDeck
   */
  constructor({ players, luckyDeck, surpriseDeck }) {
    this.#players = players;
    this.#luckyDeck = luckyDeck;
    this.#surpriseDeck = surpriseDeck;
    this.#boardDisplay = new BoardDisplay();
    this.#board = document.createElement("DIV");
    this.#gameGoing = true;
  }

  newGame() {
    this.#tiles = [];
    this.#createTiles();
    this.#boardDisplay.setup({
      parentElement: this.#board,
      players: this.#players,
      tiles: this.#tiles,
      rollBtnCallback: this.#roll.bind(this),
      nextPlayerBtnCallback: this.#nextPlayer.bind(this),
      buyPropertyBtnCallback: this.#buyProperty.bind(this),
      payPrisonBtnCallback: this.#payPrison.bind(this),
      rollPrisonBtnCallback: this.#rollPrison.bind(this),
      usePrisonCardBtnCallback: this.#usePrisonCard.bind(this),
    });
    this.#boardDisplay.updateSurpriseDeckDisplay(this.#surpriseDeck.cards.length, this.#surpriseDeck.usedCards.length);
    this.#boardDisplay.updateLuckyDeckDisplay(this.#luckyDeck.cards.length, this.#luckyDeck.usedCards.length);
    this.#boardDisplay.placePlayers(this.#players);
    this.#activePlayerIndex = 0;
    this.#boardDisplay.updatePlayerInfoDisplay(this.#players);
    this.#boardDisplay.setPlayerActive(this.#players[this.#activePlayerIndex]);
    this.#boardDisplay.addGameHistory('Game Started');

    //TODO return gameGoing as false on game finish
    //return this.#gameGoing;
  }

  #createTiles() {
    this.#FillBottomRow();
    this.#FillLeftSide();
    this.#FillTopRow();
    this.#FillRightSide();
  }

  #FillBottomRow() {
    this.#tiles.push(
      new Tile({
        index: 0,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Start,
        title: TileNamesEnum.Start,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 1,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Piac_ter,
        price: 6000,
        rent: [200, 1000, 3000, 9000, 16000, 25000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 2,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.SurpriseCard,
        title: TileNamesEnum.Meglepeteskartya,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 3,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Torok_udvar,
        price: 6000,
        rent: [400, 2000, 6000, 18000, 32000, 45000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 4,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Tax,
        title: TileNamesEnum.Jovedelemado,
        price: 20000,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 5,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Train,
        title: TileNamesEnum.Eszaki_vasutvonal,
        price: 20000,
        rent: [2500, 5000, 10000, 20000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 6,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Nagykorosi_ut,
        price: 10000,
        rent: [600, 3000, 9000, 27000, 40000, 55000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 7,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.LuckyCard,
        title: TileNamesEnum.Szerencsekartya,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 8,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Lestar_ter,
        price: 10000,
        rent: [600, 3000, 9000, 27000, 40000, 55000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 9,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Kisfaludy_ut,
        price: 12000,
        rent: [800, 4000, 10000, 30000, 45000, 60000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 10,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Prison,
        title: TileNamesEnum.Borton,
      }),
    );
  }

  #FillLeftSide() {
    this.#tiles.push(
      new Tile({
        index: 11,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Egyetem_utca,
        price: 14000,
        rent: [1000, 5000, 15000, 45000, 62500, 75000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 12,
        row: TileRowEnum.Left,
        type: TileTypesEnum.PublicWorks,
        title: TileNamesEnum.Elektromos_muvek,
        price: 15000,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 13,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Szinhaz_ter,
        price: 14000,
        rent: [1000, 5000, 15000, 45000, 62500, 75000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 14,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Janus_Pannonius_ut,
        price: 16000,
        rent: [1200, 6000, 18000, 50000, 70000, 90000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 15,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Train,
        title: TileNamesEnum.Keleti_vasutvonal,
        price: 20000,
        rent: [2500, 5000, 10000, 20000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 16,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Petofi_ter,
        price: 18000,
        rent: [1400, 7000, 20000, 55000, 75000, 95000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 17,
        row: TileRowEnum.Left,
        type: TileTypesEnum.SurpriseCard,
        title: TileNamesEnum.Meglepeteskartya,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 18,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Nagyerdo,
        price: 18000,
        rent: [1400, 7000, 20000, 55000, 75000, 95000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 19,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Bethlen_Gabor_utca,
        price: 20000,
        rent: [1600, 8000, 22000, 60000, 80000, 100000],
      }),
    );
  }

  #FillTopRow() {
    this.#tiles.push(
      new Tile({
        index: 20,
        row: TileRowEnum.Top,
        type: TileTypesEnum.FreeParking,
        title: TileNamesEnum.Ingyen_parkolo,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 21,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Mora_park,
        price: 22000,
        rent: [1800, 9000, 25000, 70000, 87500, 105000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 22,
        row: TileRowEnum.Top,
        type: TileTypesEnum.LuckyCard,
        title: TileNamesEnum.Szerencsekartya,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 23,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Oskola_utca,
        price: 22000,
        rent: [1800, 9000, 25000, 70000, 87500, 105000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 24,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Dom_ter,
        price: 24000,
        rent: [2000, 10000, 30000, 75000, 92500, 110000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 25,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Train,
        title: TileNamesEnum.Deli_vasutvonal,
        price: 20000,
        rent: [2500, 5000, 10000, 20000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 26,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Dobo_ter,
        price: 26000,
        rent: [2200, 11000, 33000, 80000, 97500, 115000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 27,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Almagyar_utca,
        price: 26000,
        rent: [2200, 11000, 33000, 80000, 97500, 115000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 28,
        row: TileRowEnum.Top,
        type: TileTypesEnum.PublicWorks,
        title: TileNamesEnum.Vizmu,
        price: 15000,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 29,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Gardonyi_ut,
        price: 28000,
        rent: [2400, 12000, 36000, 85000, 102500, 120000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 30,
        row: TileRowEnum.Top,
        type: TileTypesEnum.GoToPrison,
        title: TileNamesEnum.Irany_a_borton,
      }),
    );
  }

  #FillRightSide() {
    this.#tiles.push(
      new Tile({
        index: 31,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Kofarago_ter,
        price: 30000,
        rent: [2600, 13000, 39000, 90000, 110000, 127500],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 32,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Ovaros,
        price: 30000,
        rent: [2600, 13000, 39000, 90000, 110000, 127500],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 33,
        row: TileRowEnum.Right,
        type: TileTypesEnum.SurpriseCard,
        title: TileNamesEnum.Meglepeteskartya,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 34,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Otvos_utca,
        price: 32000,
        rent: [2800, 15000, 45000, 100000, 120000, 140000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 35,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Train,
        title: TileNamesEnum.Nyugati_vasutvonal,
        price: 20000,
        rent: [2500, 5000, 10000, 20000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 36,
        row: TileRowEnum.Right,
        type: TileTypesEnum.LuckyCard,
        title: TileNamesEnum.Szerencsekartya,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 37,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Vorosmarty_ter,
        price: 35000,
        rent: [3500, 17500, 50000, 110000, 130000, 150000],
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 38,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Tax,
        title: TileNamesEnum.Potado,
        price: 10000,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 39,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Dunakorzo,
        price: 40000,
        rent: [5000, 20000, 60000, 140000, 170000, 200000],
      }),
    );
  }

  #roll() {
    let util = new Util();
    let roll1 = util.random(1, 6);
    //let roll1 = 5;
    let roll2 = util.random(1, 6);
    //let roll2 = 5;
    let sum = roll1 + roll2;

    this.#boardDisplay.displayRollResults(roll1, roll2);

    this.#moveActivePlayer(sum);
    this.#handlePlayerActions(sum);
    this.#boardDisplay.addGameHistory(`${this.#players[this.#activePlayerIndex].name} rolled ${roll1} | ${roll2}`);

    // update active player if not double 6
    if (roll1 + roll2 !== 12) {
      this.#boardDisplay.hideRollButton();
      this.#boardDisplay.displayNextPlayerButton();
    }
  }

  /**
   *
   * @param {number} sum
   */
  #moveActivePlayer(sum) {
    /**
     * @type {Player}
     */
    let activePlayer = this.#players[this.#activePlayerIndex];
    let targetIndex = activePlayer.position + sum;

    if (targetIndex > 39) {
      targetIndex = targetIndex - 39;
      activePlayer.wealth += 20000;
    }

    this.#boardDisplay.updatePlayerLocationDisplay(activePlayer, targetIndex);

    activePlayer.position = targetIndex;
  }

  #nextPlayer() {
    let previousPlayer = this.#players[this.#activePlayerIndex];

    this.#activePlayerIndex === this.#players.length - 1
      ? (this.#activePlayerIndex = 0)
      : this.#activePlayerIndex++;

    let activePlayer = this.#players[this.#activePlayerIndex];

    setTimeout(() => {
      alert(
        `${previousPlayer.name}'s turn ended.\n\nIt's ${activePlayer.name}'s turn!`,
      );
    }, 0);

    this.#boardDisplay.setPlayerInactive(previousPlayer);
    this.#boardDisplay.setPlayerActive(activePlayer);

    this.#boardDisplay.hideNextPlayerButton();

    if (!activePlayer.inPrison) {
      this.#boardDisplay.displayRollButton();
    } else {
      this.#boardDisplay.displayPayPrisonButton();
      this.#boardDisplay.displayRollPrisonButton();

      if (activePlayer.freeEscapeCards.length > 0) {
        this.#boardDisplay.displayUsePrisonCardButton();
      }
    }

    this.#boardDisplay.updatePlayerInfoDisplay(this.#players);
    this.#boardDisplay.hideBuyPropertyButton();
  }

  /**
   *
   * @param {number} sum
   */
  #handlePlayerActions(sum) {
    let activePlayer = this.#players[this.#activePlayerIndex];
    let activeTile = this.#tiles[activePlayer.position];

    // if tile is property and owned by the bank, enable the buy button
    if (
      (activeTile.type === TileTypesEnum.Property ||
        activeTile.type === TileTypesEnum.Train ||
        activeTile.type === TileTypesEnum.PublicWorks) &&
      activeTile.owner === OwnersEnum.Bank &&
      activePlayer.wealth >= activeTile.price
    ) {
      this.#boardDisplay.displayBuyPropertyButton();
    }

    // if tile is tax, pay the tile's price
    if (activeTile.type === TileTypesEnum.Tax) {
      activePlayer.wealth -= activeTile.price;
    }

    // if tile is property and owned by a different player
    if (
      activeTile.type === TileTypesEnum.Property &&
      activeTile.owner !== OwnersEnum.Bank &&
      activeTile.owner !== activePlayer.name
    ) {
      let rent = activeTile.rent[activeTile.level];
      let ownerPlayer = this.#players.filter(
        (player) => player.name === activeTile.owner,
      )[0];

      activePlayer.wealth -= rent;
      ownerPlayer.wealth += rent;
    }

    // if tile is a train and owned by a different player
    if (
      activeTile.type === TileTypesEnum.Train &&
      activeTile.owner !== OwnersEnum.Bank &&
      activeTile.owner !== activePlayer.name
    ) {
      let trainsOwned = this.#tiles.filter(
        (tile) => tile.owner === activeTile.owner,
      ).length;
      let rent = activeTile.rent[trainsOwned];
      let ownerPlayer = this.#players.filter(
        (player) => player.name === activeTile.owner,
      )[0];

      activePlayer.wealth -= rent;
      ownerPlayer.wealth += rent;
    }

    // if tile is a public works and owned by a different player
    if (
      activeTile.type === TileTypesEnum.PublicWorks &&
      activeTile.owner !== OwnersEnum.Bank &&
      activeTile.owner !== activePlayer.name
    ) {
      let publicWorksOwned = this.#tiles.filter(
        (tile) => tile.owner === activeTile.owner,
      ).length;
      let rent = publicWorksOwned === 2 ? sum * 400 : sum * 1000;
      let ownerPlayer = this.#players.filter(
        (player) => player.name === activeTile.owner,
      )[0];

      activePlayer.wealth -= rent;
      ownerPlayer.wealth += rent;
    }

    // if tile is Go to Prison
    if (activeTile.type === TileTypesEnum.GoToPrison) {
      let prisonTileIndex = this.#tiles.filter(
        (tile) => tile.type === TileTypesEnum.Prison
      )[0].index;
      let activePlayer = this.#players[this.#activePlayerIndex];

      activePlayer.inPrison = true;
      activePlayer.prisonCountdown = 3;
      activePlayer.position = prisonTileIndex;

      this.#boardDisplay.updateAndDisplayPrisonCounter(activePlayer);
      this.#boardDisplay.updatePlayerInfoDisplay(this.#players);
      this.#boardDisplay.updatePlayerLocationDisplay(
        activePlayer,
        prisonTileIndex,
      );
    }

    // Person is in prison
    if (activeTile.type === TileTypesEnum.Prison && activePlayer.inPrison) {
      console.log('in prison');
    }

    // draw a surprise card
    if (activeTile.type === TileTypesEnum.SurpriseCard) {
      let drawnCard = this.#surpriseDeck.draw();

      if (drawnCard.effect === CardEffectEnum.Other) {
        if (drawnCard.text === CardsTextEnum.FreeEscape) {
          activePlayer.addFreeEscapeCard(drawnCard);
        }
      }

      if (drawnCard.effect === CardEffectEnum.Addition) {
        activePlayer.wealth += drawnCard.value;
      }

      if (drawnCard.effect === CardEffectEnum.Subtraction) {
        activePlayer.wealth -= drawnCard.value;
      }

      this.#boardDisplay.addGameHistory(`${activePlayer.name} húzott egy Meglepetéskártyát:`);
      this.#boardDisplay.addGameHistory(`${drawnCard.text}`);
    }

    // draw a lucky card
    if (activeTile.type === TileTypesEnum.LuckyCard) {
      let drawnCard = this.#luckyDeck.draw();

      if (drawnCard.effect === CardEffectEnum.Other) {
        if (drawnCard.text === CardsTextEnum.FreeEscape) {
          activePlayer.addFreeEscapeCard(drawnCard);
        }

        if (drawnCard.text === CardsTextEnum.PayByPropertySmall) {
          let ownedProperties = this.#tiles.filter(tile => tile.owner === OwnersEnum[activePlayer.name]);
          let rent = 0;

          ownedProperties.forEach(property => {
            if (property.level > 0 && property.level < 5) {
              rent += 2500 * property.level;
            }

            if (property.level === 5) {
              rent += 10000;
            }
          });

          activePlayer.wealth -= rent;
        }

        if (drawnCard.text === CardsTextEnum.PayByPropertyBig) {
          let ownedProperties = this.#tiles.filter(tile => tile.owner === OwnersEnum[activePlayer.name]);
          let rent = 0;

          ownedProperties.forEach(property => {
            if (property.level > 0 && property.level < 5) {
              rent += 5000 * property.level;
            }

            if (property.level === 5) {
              rent += 20000;
            }
          });

          activePlayer.wealth -= rent;
        }
      }

      if (drawnCard.effect === CardEffectEnum.Addition) {
        activePlayer.wealth += drawnCard.value;
      }

      if (drawnCard.effect === CardEffectEnum.Subtraction) {
        activePlayer.wealth -= drawnCard.value;
      }

      this.#boardDisplay.addGameHistory(`${activePlayer.name} húzott egy Szerencsekártyát:`);
      this.#boardDisplay.addGameHistory(`${drawnCard.text}`);
    }

    this.#boardDisplay.updatePlayerInfoDisplay(this.#players);

    this.#checkPlayerWealth(activePlayer);
  }

  #buyProperty() {
    let activePlayer = this.#players[this.#activePlayerIndex];
    let activeTile = this.#tiles[activePlayer.position];

    activePlayer.wealth -= activeTile.price;
    activeTile.owner = OwnersEnum[activePlayer.name];
    activeTile.level = 0;

    document.getElementById(`Tile${activeTile.index}title`).style.background =
      activePlayer.color;
    document.getElementById(`Tile${activeTile.index}title`).style.color =
      "white";

    this.#boardDisplay.hideBuyPropertyButton();

    this.#boardDisplay.updatePlayerInfoDisplay(this.#players);
  }

  #payPrison() {
    let activePlayer = this.#players[this.#activePlayerIndex];

    this.#boardDisplay.hidePrisonCounter(activePlayer);
  }

  #rollPrison() {
    let activePlayer = this.#players[this.#activePlayerIndex];

    this.#boardDisplay.hidePrisonCounter(activePlayer);
  }

  #usePrisonCard() {
    let activePlayer = this.#players[this.#activePlayerIndex];

    this.#boardDisplay.hidePrisonCounter(activePlayer);
  }

  /**
   *
   * @param {Player} activePlayer
   */
  #checkPlayerWealth(activePlayer) {
    if (activePlayer.wealth < 0) {
      this.#gameGoing = false;
    }
  }
}
