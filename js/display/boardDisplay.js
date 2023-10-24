import { Tile } from "../enitity/tile.js";
import { TileNamesEnum, TileRowEnum } from "../enums.js";

export class BoardDisplay {
  #board

  constructor() {
    this.#board = document.createElement("DIV");
    this.#board.id = "board";
  }

  /**
   *
   * @param {Tile[]} tiles
   */
  setup(tiles) {
    this.#drawBoard(this.#board);
    this.#drawTopRow(
      this.#board,
      tiles.filter((tile) => tile.row === TileRowEnum.Top),
    );
    this.#drawLeftSide(
      this.#board,
      tiles.filter((tile) => tile.row === TileRowEnum.Left),
    );
    this.#drawRightSide(
      this.#board,
      tiles.filter((tile) => tile.row === TileRowEnum.Right),
    );
    this.#drawBottomRow(
      this.#board,
      tiles.filter((tile) => tile.row === TileRowEnum.Bottom),
    );
  }

  /**
   *
   * @param {HTMLElement} board
   */
  #drawBoard(board) {
    const id = "board";
    if (document.getElementById(id) === null) {
      board.id = id;
      board.style.width = "95vw";
      board.style.height = "95vh";
      board.style.margin = "2.5vh 2.5vw";
      board.style.display = "grid";
      board.style.gridTemplateAreas = `'top top top' 'left mid right' 'bottom bottom bottom'`;
      board.style.gridTemplateColumns = "1.5fr 9fr 1.5fr";
      board.style.gridTemplateRows = "1fr 4fr 1fr";
      board.style.border = "2px solid black";
      document.body.appendChild(board);
    }
  }

  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Tile[]} tiles
   */
  #drawTopRow(parentElement, tiles) {
    const topRow = document.createElement("DIV");
    topRow.style.gridArea = "top";
    topRow.style.display = "grid";
    topRow.style.gridAutoFlow = "column";
    topRow.style.gridTemplateColumns =
      "1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1.5fr";
    parentElement.appendChild(topRow);

    tiles.map((tile) => {
      this.#drawTile({ tile: tile, parentElement: topRow });
    });
  }

  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Tile[]} tiles
   */
  #drawLeftSide(parentElement, tiles) {
    const leftSide = document.createElement("DIV");
    leftSide.style.gridArea = "left";
    leftSide.style.display = "grid";
    parentElement.appendChild(leftSide);

    let rowIndex = 9;

    tiles.map((tile) => {
      this.#drawTile({
        tile: tile,
        parentElement: leftSide,
        rowIndex: rowIndex,
      });

      rowIndex--;
    });
  }

  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Tile[]} tiles
   */
  #drawRightSide(parentElement, tiles) {
    const rightSide = document.createElement("DIV");
    rightSide.style.gridArea = "right";
    rightSide.style.display = "grid";
    rightSide.style.direction = "rtl";
    parentElement.appendChild(rightSide);

    tiles.map((tile) => {
      this.#drawTile({ tile: tile, parentElement: rightSide });
    });
  }

  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Tile[]} tiles
   */
  #drawBottomRow(parentElement, tiles) {
    const bottomRow = document.createElement("DIV");

    bottomRow.style.gridArea = "bottom";
    bottomRow.style.display = "grid";
    bottomRow.style.gridAutoFlow = "column";
    bottomRow.style.gridTemplateColumns =
      "1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1.5fr";
    parentElement.appendChild(bottomRow);

    let columnIndex = 11;

    tiles.map((tile) => {
      this.#drawTile({
        tile: tile,
        parentElement: bottomRow,
        columnIndex: columnIndex,
      });

      columnIndex--;
    });
  }

  /**
   *
   * @param {Tile} tile
   * @param {HTMLElement} parentElement
   * @param {number | undefined} columnIndex
   * @param {number | undefined} rowIndex
   */
  #drawTile({ tile, parentElement, columnIndex, rowIndex }) {
    const tileElement = document.createElement("DIV");
    tileElement.id = `Tile${tile.index}`;
    tileElement.style.display = "grid";
    tileElement.style.gridTemplateAreas = `'title' 'players'`;
    tileElement.style.border = "solid 1px black";
    tileElement.style.textAlign = "center";
    tileElement.style.background = "#98fb98";
    if (columnIndex) {
      tileElement.style.gridColumn = columnIndex.toString();
    }
    if (rowIndex) {
      tileElement.style.gridRow = rowIndex.toString();
    }
    parentElement.appendChild(tileElement);

    const tileTitleElement = document.createElement("DIV");
    tileTitleElement.id = `Tile${tile.index}title`;
    tileTitleElement.style.gridArea = "title";
    tileTitleElement.style.height = "max-content";
    tileTitleElement.style.borderBottom = "solid 1px grey";
    tileTitleElement.textContent = tile.title;
    tileElement.appendChild(tileTitleElement);

    const tilePlayersElement = document.createElement("DIV");
    tilePlayersElement.id = `Tile${tile.index}players`;
    tilePlayersElement.style.gridArea = "players";
    tilePlayersElement.style.padding = "5px";
    tileElement.appendChild(tilePlayersElement);
  }

  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Player[]} players
   * @param {Function} rollBtnCallback
   * @param {Function} nextPlayerBtnCallback
   * @param {Function} buyPropertyBtnCallback
   * @param {Function} payPrisonBtnCallback
   * @param {Function} rollPrisonBtnCallback
   * @param {Function} usePrisonCardBtnCallback
   */
  /*#drawControls(
    parentElement,
    players,
    rollBtnCallback,
    nextPlayerBtnCallback,
    buyPropertyBtnCallback,
    payPrisonBtnCallback,
    rollPrisonBtnCallback,
    usePrisonCardBtnCallback
  ) {
    const controlArea = document.createElement("DIV");
    controlArea.style.gridArea = "mid";
    controlArea.style.border = "solid 1px black";
    controlArea.style.display = "grid";
    controlArea.style.gridTemplateAreas = `'surprise dice lucky' 'info info info'`;
    controlArea.style.gridTemplateColumns = "1fr 1fr 1fr";
    controlArea.style.gridTemplateRows = "1fr 1.5fr";
    controlArea.style.background = "#fffacd";
    parentElement.appendChild(controlArea);

    this.#drawSurpriseDeck(controlArea);

    this.#drawDiceArea(controlArea, rollBtnCallback, nextPlayerBtnCallback);

    this.#drawLuckyDeck(controlArea);

    this.#drawInfoArea(controlArea, players, buyPropertyBtnCallback, payPrisonBtnCallback, rollPrisonBtnCallback, usePrisonCardBtnCallback);
  }*/

 /* /!**
   *
   * @param {HTMLElement} parentElement
   * @param {Function} rollBtnCallback
   * @param {Function} nextPlayerBtnCallback
   *!/
  #drawDiceArea(parentElement, rollBtnCallback, nextPlayerBtnCallback) {
    const diceContainer = document.createElement("DIV");
    diceContainer.id = "diceContainer";
    diceContainer.style.display = "grid";
    diceContainer.style.width = "80%";
    diceContainer.style.height = "60%";
    diceContainer.style.margin = "auto";
    diceContainer.style.textAlign = "center";
    diceContainer.style.gridTemplateAreas = `'result' 'button'`;
    parentElement.appendChild(diceContainer);

    const diceResults = document.createElement("DIV");
    diceResults.id = "diceResults";
    diceResults.style.gridArea = "result";
    diceResults.style.display = "flex";
    diceResults.style.height = "40%";
    diceResults.style.width = "80%";
    diceResults.style.border = "solid 1px black";
    diceResults.style.placeSelf = "center";
    diceResults.style.justifyContent = "center";
    diceResults.style.alignItems = "center";
    diceResults.style.background = "white";
    diceResults.textContent = "Waiting for Roll";
    diceContainer.appendChild(diceResults);

    const nextPlayerButton = document.createElement("BUTTON");
    nextPlayerButton.id = "nextPlayerButton";
    nextPlayerButton.style.gridArea = "button";
    nextPlayerButton.style.width = "max-content";
    nextPlayerButton.style.height = "max-content";
    nextPlayerButton.style.padding = "5px 20px";
    nextPlayerButton.style.display = "none";
    nextPlayerButton.style.placeSelf = "center";
    nextPlayerButton.textContent = "Next Player!";
    nextPlayerButton.addEventListener("click", nextPlayerBtnCallback);
    diceContainer.appendChild(nextPlayerButton);

    const diceButton = document.createElement("BUTTON");
    diceButton.id = "diceButton";
    diceButton.style.gridArea = "button";
    diceButton.style.width = "max-content";
    diceButton.style.height = "max-content";
    diceButton.style.padding = "5px 20px";
    diceButton.style.display = "flex";
    diceButton.style.placeSelf = "center";
    diceButton.textContent = "Roll!";
    diceButton.addEventListener("click", rollBtnCallback);

    diceContainer.appendChild(diceButton);
  }*/

/*  /!**
   *
   * @param {HTMLElement} parentElement
   *!/
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

  /!**
   *
   * @param {HTMLElement} parentElement
   *!/
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
  }*/

/*  /!**
   *
   * @param {HTMLElement} parentElement
   * @param {Player[]} players
   * @param {Function} buyPropertyBtnCallback
   * @param {Function} payPrisonBtnCallback
   * @param {Function} rollPrisonBtnCallback
   * @param {Function} usePrisonCardBtnCallback
   *!/
  #drawInfoArea(parentElement, players, buyPropertyBtnCallback, payPrisonBtnCallback, rollPrisonBtnCallback, usePrisonCardBtnCallback) {
    const infoContainer = document.createElement("DIV");
    infoContainer.style.gridArea = "info";
    infoContainer.style.display = "grid";
    infoContainer.style.gridTemplateAreas = `'infobar infobar' 'actionButtons history'`;
    infoContainer.style.gridTemplateColumns = "2fr 1.25fr";
    infoContainer.style.gridTemplateRows = "max-content 1fr";
    infoContainer.style.width = "95%";
    infoContainer.style.height = "90%";
    infoContainer.style.margin = "auto";
    infoContainer.style.border = "solid 1px black";
    infoContainer.style.background = "white";
    parentElement.appendChild(infoContainer);

    const infoBar = document.createElement("DIV");
    infoBar.style.height = "max-content";
    infoBar.style.borderBottom = "1px solid grey";
    infoBar.style.gridArea = "infobar";
    infoBar.style.display = "grid";
    infoBar.style.gridAutoFlow = "row";
    infoContainer.appendChild(infoBar);

    this.#createInfoBarElements(infoBar, players);

    this.#createActionButtons(infoContainer, buyPropertyBtnCallback, payPrisonBtnCallback, rollPrisonBtnCallback, usePrisonCardBtnCallback);

    const history = document.createElement("DIV");
    history.id = 'gameHistory';
    history.style.borderLeft = "1px solid black";
    history.style.padding = "5px";
    history.style.gridArea = "history";
    history.style.display = "grid";
    history.style.gridAutoFlow = "row";
    history.style.overflowY = "auto";
    history.style.alignContent = "start";
    infoContainer.appendChild(history);
  }

  /!**
   *
   * @param {HTMLElement} parent
   * @param {Player[]} players
   *!/
  #createInfoBarElements(parent, players) {
    players.forEach(player => {
      const playerContainer = document.createElement("DIV");
      playerContainer.style.padding = "5px";
      parent.appendChild(playerContainer);

      const activePlayer = document.createElement("SPAN");
      activePlayer.id = `active${player.name}`;
      activePlayer.style.background = "limegreen";
      activePlayer.style.borderRadius = "50%";
      activePlayer.style.paddingRight = "18px";
      activePlayer.style.marginRight = "10px";
      activePlayer.style.display = "none";
      playerContainer.appendChild(activePlayer);

      const playerName = document.createElement("SPAN");
      playerName.id = `${player.name}Name`;
      playerName.style.paddingRight = "10px";
      playerName.style.color = `${player.color}`;
      playerName.textContent = `${player.name}`;
      playerContainer.appendChild(playerName);

      const playerWealth = document.createElement("SPAN");
      playerWealth.id = `${player.name}Wealth`;
      playerWealth.style.paddingRight = "10px";
      playerContainer.appendChild(playerWealth);

      const playerFreeEscapeCounter = document.createElement("SPAN");
      playerFreeEscapeCounter.id = `${player.name}FreeEscapeCardsCounter`;
      playerFreeEscapeCounter.style.paddingRight = "10px";
      playerContainer.appendChild(playerFreeEscapeCounter);

      const playerPrisonCountdown = document.createElement("SPAN");
      playerPrisonCountdown.id = `${player.name}PrisonCountdown`;
      playerPrisonCountdown.style.paddingRight = "10px";
      playerPrisonCountdown.style.display = "none";
      playerContainer.appendChild(playerPrisonCountdown);
    });
  }

  /!**
   *
   * @param {HTMLElement} parent
   * @param {Function} buyPropertyBtnCallback
   * @param {Function} payPrisonBtnCallback
   * @param {Function} rollPrisonBtnCallback
   * @param {Function} usePrisonCardBtnCallback
   *!/
  #createActionButtons(parent, buyPropertyBtnCallback, payPrisonBtnCallback, rollPrisonBtnCallback, usePrisonCardBtnCallback) {
    const buyPropertyButton = document.createElement("BUTTON");
    buyPropertyButton.id = "buyPropertyButton";
    buyPropertyButton.style.gridArea = "actionButtons";
    buyPropertyButton.style.width = "max-content";
    buyPropertyButton.style.height = "max-content";
    buyPropertyButton.style.padding = "5px 20px";
    buyPropertyButton.style.display = "none";
    buyPropertyButton.style.placeSelf = "center";
    buyPropertyButton.textContent = "Buy property!";
    buyPropertyButton.addEventListener("click", buyPropertyBtnCallback);
    parent.appendChild(buyPropertyButton);

    const payPrisonButton = document.createElement("BUTTON");
    payPrisonButton.id = "payPrisonButton";
    payPrisonButton.style.gridArea = "actionButtons";
    payPrisonButton.style.width = "max-content";
    payPrisonButton.style.height = "max-content";
    payPrisonButton.style.padding = "5px 20px";
    payPrisonButton.style.display = "none";
    payPrisonButton.style.placeSelf = "center";
    payPrisonButton.textContent = "Pay! (5000Ft)";
    payPrisonButton.addEventListener("click", payPrisonBtnCallback);
    parent.appendChild(payPrisonButton);

    const rollPrisonButton = document.createElement("BUTTON");
    rollPrisonButton.id = "rollPrisonButton";
    rollPrisonButton.style.gridArea = "actionButtons";
    rollPrisonButton.style.width = "max-content";
    rollPrisonButton.style.height = "max-content";
    rollPrisonButton.style.padding = "5px 20px";
    rollPrisonButton.style.display = "none";
    rollPrisonButton.style.placeSelf = "center";
    rollPrisonButton.textContent = "Roll for double!";
    rollPrisonButton.addEventListener("click", rollPrisonBtnCallback);
    parent.appendChild(rollPrisonButton);

    const usePrisonCardButton = document.createElement("BUTTON");
    usePrisonCardButton.id = "usePrisonCardButton";
    usePrisonCardButton.style.width = "max-content";
    usePrisonCardButton.style.height = "max-content";
    usePrisonCardButton.style.padding = "5px 20px";
    usePrisonCardButton.style.display = "none";
    usePrisonCardButton.style.placeSelf = "center";
    usePrisonCardButton.textContent = "Use card!";
    usePrisonCardButton.addEventListener("click", usePrisonCardBtnCallback);
    parent.appendChild(usePrisonCardButton);
  }*/

/*  /!**
   *
   * @param {Player[]} players
   *!/
  placePlayers(players) {
    players.forEach((player) => {
      let playerElement = document.createElement("SPAN");
      playerElement.id = player.name;
      playerElement.style.color = player.color;
      playerElement.textContent = "X";

      document
        .getElementById(`Tile${player.position}players`)
        .appendChild(playerElement);
    });
  }*/

/*  /!**
   *
   * @param {Player[]} players
   *!/
  updatePlayerInfoDisplay(players) {
    players.forEach(player => {
      document.getElementById(`${player.name}Wealth`).textContent = `Wealth: ${player.wealth} Ft`;
      document.getElementById(`${player.name}FreeEscapeCardsCounter`).textContent = `Free escape cards:  ${player.freeEscapeCards.length}`;
    });
  }

  /!**
   *
   * @param {Player} player
   *!/
  setPlayerActive(player) {
    document.getElementById(`active${player.name}`).style.display = "initial";
  }

  /!**
   *
   * @param {Player} player
   *!/
  setPlayerInactive(player) {
    document.getElementById(`active${player.name}`).style.display = "none";
  }

  /!**
   *
   * @param {Player} player
   *!/
  updateAndDisplayPrisonCounter(player) {
    document.getElementById(`${player.name}PrisonCountdown`).textContent = `Turns left in prison:  ${player.prisonCountdown}`;
    document.getElementById(`${player.name}PrisonCountdown`).style.display = "initial";
  }

  /!**
   *
   * @param {Player} player
   *!/
  hidePrisonCounter(player) {
    document.getElementById(`${player.name}PrisonCountdown`).style.display = "none";
  }*/

  /**
   *
   * @param {Player} activePlayer
   * @param {number} targetIndex
   */
  updatePlayerLocationDisplay(activePlayer, targetIndex) {
    let playerElement = document.getElementById(activePlayer.name);

    document
      .getElementById(`Tile${targetIndex}players`)
      .appendChild(playerElement);
  }

/*  /!**
   *
   * @param {number} surpriseDeckCounter
   * @param {number} surpriseUsedCardsCounter
   *!/
  updateSurpriseDeckDisplay(surpriseDeckCounter, surpriseUsedCardsCounter) {
    document.getElementById('surpriseDeckCounter').textContent = surpriseDeckCounter + '';
    document.getElementById('surpriseUsedCardsCounter').textContent = surpriseUsedCardsCounter + '';
  }

  /!**
   *
   * @param {number} luckyDeckCounter
   * @param {number} luckyUsedCardsCounter
   *!/
  updateLuckyDeckDisplay(luckyDeckCounter, luckyUsedCardsCounter) {
    document.getElementById('luckyDeckCounter').textContent = luckyDeckCounter + '';
    document.getElementById('luckyUsedCardsCounter').textContent = luckyUsedCardsCounter + '';
  }*/



/*  /!**
   *
   * @param {String} text
   *!/
  addGameHistory(text) {
    let gameEvent = document.createElement("SPAN");
    gameEvent.textContent = text;

    document.getElementById("gameHistory").appendChild(gameEvent);
  }*/

  hideBuyPropertyButton() {
    document.getElementById("buyPropertyButton").style.display = "none";
  }

  hidePayPrisonButton() {
    document.getElementById("payPrisonButton").style.display = "none";
  }

  hideRollPrisonButton() {
    document.getElementById("rollPrisonButton").style.display = "none";
  }

  hideUsePrisonCardButton() {
    document.getElementById("usePrisonCardButton").style.display = "none";
  }

  displayBuyPropertyButton() {
    document.getElementById("buyPropertyButton").style.display = "flex";
  }

  displayPayPrisonButton() {
    document.getElementById("payPrisonButton").style.display = "flex";
  }

  displayRollPrisonButton() {
    document.getElementById("rollPrisonButton").style.display = "flex";
  }

  displayUsePrisonCardButton() {
    document.getElementById("usePrisonCardButton").style.display = "flex";
  }
}
