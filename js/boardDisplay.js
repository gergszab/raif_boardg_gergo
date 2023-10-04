import { Tile } from "./tile.js";
import { TileNamesEnum, TileRowEnum } from "./enums.js";

export class BoardDisplay {
  /**
   *
   * @param {HTMLElement} parentElement
   * @param {Tile[]} tiles
   * @param {Function} rollBtnCallback
   * @param {Function} nextPlayerBtnCallback
   */
  setup(parentElement, tiles, rollBtnCallback, nextPlayerBtnCallback) {
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
    this.#drawControls(parentElement, rollBtnCallback, nextPlayerBtnCallback);
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
   */
  #drawControls(parentElement, rollBtnCallback, nextPlayerBtnCallback) {
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

    this.#drawInfoArea(controlArea);
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
    diceResults.textContent = "Placeholder";
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
    diceButton.id="diceButton";
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
   */
  #drawInfoArea(parentElement) {
    const infoContainer = document.createElement("DIV");
    infoContainer.style.gridArea = "info";
    infoContainer.style.width = "90%";
    infoContainer.style.height = "80%";
    infoContainer.style.margin = "auto";
    infoContainer.style.border = "solid 1px black";
    parentElement.appendChild(infoContainer);
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
}
