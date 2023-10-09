import { Tile } from "./tile.js";
import { TileNamesEnum, TileRowEnum } from "./enums.js";

export class BoardDisplay {
  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Tile[]} tiles
   * @param {Function} rollBtnCallback
   * @param {Function} nextPlayerBtnCallback
   * @param {Function} buyPropertyBtnCallback
   * @param {Function} payPrisonBtnCallback
   * @param {Function} rollPrisonBtnCallback
   * @param {Function} usePrisonCardBtnCallback
   */
  setup({
    parentElement,
    tiles,
    rollBtnCallback,
    nextPlayerBtnCallback,
    buyPropertyBtnCallback,
    payPrisonBtnCallback,
    rollPrisonBtnCallback,
    usePrisonCardBtnCallback
  }) {
    this.#drawBoard(parentElement);
    this.#drawTopRow(
      parentElement,
      tiles.filter((tile) => tile.row === TileRowEnum.Top),
    );
    this.#drawLeftSide(
      parentElement,
      tiles.filter((tile) => tile.row === TileRowEnum.Left),
    );
    this.#drawRightSide(
      parentElement,
      tiles.filter((tile) => tile.row === TileRowEnum.Right),
    );
    this.#drawBottomRow(
      parentElement,
      tiles.filter((tile) => tile.row === TileRowEnum.Bottom),
    );
    this.#drawControls(
      parentElement,
      rollBtnCallback,
      nextPlayerBtnCallback,
      buyPropertyBtnCallback,
      payPrisonBtnCallback,
      rollPrisonBtnCallback,
      usePrisonCardBtnCallback
    );
  }

  /**
   *
   * @param {HTMLElement} parentElement
   */
  #drawBoard(parentElement) {
    const id = "board";
    if (document.getElementById(id) === null) {
      parentElement.id = id;
      parentElement.style.width = "85vw";
      parentElement.style.height = "90vh";
      parentElement.style.margin = "auto";
      parentElement.style.marginTop = "20px";
      parentElement.style.display = "grid";
      parentElement.style.gridTemplateAreas = `'top top top' 'left mid right' 'bottom bottom bottom'`;
      parentElement.style.gridTemplateColumns = "1.75fr 9fr 1.75fr";
      parentElement.style.gridTemplateRows = "1fr 4fr 1fr";
      parentElement.style.border = "2px solid black";
      document.body.appendChild(parentElement);
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
      "1.75fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1.75fr";
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
      "1.75fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1.75fr";
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
   * @param {Function} rollBtnCallback
   * @param {Function} nextPlayerBtnCallback
   * @param {Function} buyPropertyBtnCallback
   * @param {Function} payPrisonBtnCallback
   * @param {Function} rollPrisonBtnCallback
   * @param {Function} usePrisonCardBtnCallback
   */
  #drawControls(
    parentElement,
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
    controlArea.style.gridTemplateRows = "1fr 1fr";
    parentElement.appendChild(controlArea);

    const surpriseDeck = document.createElement("DIV");
    surpriseDeck.id = "surpriseDeck";
    surpriseDeck.style.gridArea = "surprise";
    surpriseDeck.style.width = "80%";
    surpriseDeck.style.height = "80%";
    surpriseDeck.style.margin = "auto";
    surpriseDeck.style.border = "solid 1px black";
    surpriseDeck.style.display = "flex";
    surpriseDeck.style.justifyContent = "center";
    surpriseDeck.style.alignItems = "center";
    surpriseDeck.textContent = TileNamesEnum.Meglepeteskartya;
    controlArea.appendChild(surpriseDeck);

    this.#drawDiceArea(controlArea, rollBtnCallback, nextPlayerBtnCallback);

    const luckyDeck = document.createElement("DIV");
    luckyDeck.id = "luckyDeck";
    luckyDeck.style.gridArea = "lucky";
    luckyDeck.style.width = "80%";
    luckyDeck.style.height = "80%";
    luckyDeck.style.margin = "auto";
    luckyDeck.style.border = "solid 1px black";
    luckyDeck.style.display = "flex";
    luckyDeck.style.justifyContent = "center";
    luckyDeck.style.alignItems = "center";
    luckyDeck.textContent = TileNamesEnum.Szerencsekartya;
    controlArea.appendChild(luckyDeck);

    this.#drawInfoArea(controlArea, buyPropertyBtnCallback, payPrisonBtnCallback, rollPrisonBtnCallback, usePrisonCardBtnCallback);
  }

  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Function} rollBtnCallback
   * @param {Function} nextPlayerBtnCallback
   */
  #drawDiceArea(parentElement, rollBtnCallback, nextPlayerBtnCallback) {
    const diceContainer = document.createElement("DIV");
    diceContainer.id = "diceContainer";
    diceContainer.style.display = "grid";
    diceContainer.style.width = "80%";
    diceContainer.style.height = "80%";
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
  }

  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Function} buyPropertyBtnCallback
   * @param {Function} payPrisonBtnCallback
   * @param {Function} rollPrisonBtnCallback
   * @param {Function} usePrisonCardBtnCallback
   */
  #drawInfoArea(parentElement, buyPropertyBtnCallback, payPrisonBtnCallback, rollPrisonBtnCallback, usePrisonCardBtnCallback) {
    const infoContainer = document.createElement("DIV");
    infoContainer.style.gridArea = "info";
    infoContainer.style.display = "grid";
    infoContainer.style.gridTemplateAreas = `'infobar' 'actionButtons'`;
    infoContainer.style.width = "90%";
    infoContainer.style.height = "80%";
    infoContainer.style.margin = "auto";
    infoContainer.style.border = "solid 1px black";
    parentElement.appendChild(infoContainer);

    const infoBar = document.createElement("DIV");
    infoBar.style.height = "max-content";
    infoBar.style.padding = "5px";
    infoBar.style.borderBottom = "1px solid grey";
    infoBar.style.gridArea = "infobar";
    infoContainer.appendChild(infoBar);

    this.#createInfoBarElements(infoBar);

    this.#createActionButtons(infoContainer, buyPropertyBtnCallback, payPrisonBtnCallback, rollPrisonBtnCallback, usePrisonCardBtnCallback);

  }

  /**
   *
   * @param {HTMLElement} parent
   */
  #createInfoBarElements(parent) {
    const activePlayer = document.createElement("SPAN");
    activePlayer.id = "activePlayer";
    activePlayer.style.paddingRight = "10px";
    parent.appendChild(activePlayer);

    const activePlayerWealth = document.createElement("SPAN");
    activePlayerWealth.id = "activePlayerWealth";
    activePlayerWealth.style.paddingRight = "10px";
    parent.appendChild(activePlayerWealth);

    const activePlayerFreeEscapeCounter = document.createElement("SPAN");
    activePlayerFreeEscapeCounter.id = "activePlayerFreeEscapeCounter";
    activePlayerFreeEscapeCounter.style.paddingRight = "10px";
    parent.appendChild(activePlayerFreeEscapeCounter);

    const activePlayerPrisonCountdown = document.createElement("SPAN");
    activePlayerPrisonCountdown.id = "activePlayerPrisonCountdown";
    activePlayerPrisonCountdown.style.paddingRight = "10px";
    activePlayerPrisonCountdown.style.display = "none";
    parent.appendChild(activePlayerPrisonCountdown);
  }

  /**
   *
   * @param {HTMLElement} parent
   * @param {Function} buyPropertyBtnCallback
   * @param {Function} payPrisonBtnCallback
   * @param {Function} rollPrisonBtnCallback
   * @param {Function} usePrisonCardBtnCallback
   */
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
  }

  /**
   *
   * @param {Player[]} players
   */
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
  }

  /**
   *
   * @param {String | undefined} name
   * @param {number | undefined} wealth
   * @param {number | undefined} freeEscapeCounter
   * @param {number | undefined} prisonCountdown
   */
  updatePlayerInfoDisplay({ name, wealth, freeEscapeCounter, prisonCountdown}) {
    if (wealth !== undefined) {
      document.getElementById("activePlayer").textContent = `Active player: ${name}`;
    }
    if (wealth !== undefined) {
      document.getElementById("activePlayerWealth").textContent = `Wealth: ${wealth} Ft`;
    }
    if (freeEscapeCounter !== undefined) {
      document.getElementById("activePlayerFreeEscapeCounter").textContent = `Free escape cards:  ${freeEscapeCounter}`;
    }
    if (prisonCountdown) {
      document.getElementById("activePlayerPrisonCountdown").textContent = `Turns left in prison:  ${prisonCountdown}`;

      if (prisonCountdown === 3) {
        document.getElementById("activePlayerPrisonCountdown").style.display = "initial";
      }
      if (prisonCountdown === 0) {
        document.getElementById("activePlayerPrisonCountdown").style.display = "none";
      }
    }
  }

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

  hideRollButton() {
    document.getElementById("diceButton").style.display = "none";
  }

  hideNextPlayerButton() {
    document.getElementById("nextPlayerButton").style.display = "none";
  }

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

  displayRollButton() {
    document.getElementById("diceButton").style.display = "flex";
  }

  displayNextPlayerButton() {
    document.getElementById("nextPlayerButton").style.display = "flex";
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
