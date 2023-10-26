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
   * @param {Player} activePlayer
   * @param {number} targetIndex
   */
  updatePlayerLocationDisplay(activePlayer, targetIndex) {
    let playerElement = document.getElementById(activePlayer.name);

    document
      .getElementById(`Tile${targetIndex}players`)
      .appendChild(playerElement);
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
