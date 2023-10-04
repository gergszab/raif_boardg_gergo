import { Tile } from "./tile.js";
import { TileNamesEnum, TileRowEnum, TileTypesEnum } from "./enums.js";
import { BoardDisplay } from "./boardDisplay.js";
import {Util} from "./util.js";

export class Board {
  #boardDisplay;
  #domElement;
  #tiles;
  #players;
  #activePlayerIndex;

  /**
   *
   * @param {Player[]} players
   */
  constructor(players) {
    this.#players = players;
    this.#boardDisplay = new BoardDisplay();
    this.#domElement = document.createElement("DIV");
  }

  newGame() {
    this.#tiles = [];
    this.#createTiles();
    this.#boardDisplay.setup(this.#domElement, this.#tiles, this.#roll.bind(this), this.#nextPlayer.bind(this));
    this.#boardDisplay.placePlayers(this.#players);
    this.#activePlayerIndex = 0;

    //TODO return false on game finish
    //return false;
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 4,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Tax,
        title: TileNamesEnum.Jovedelemado,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 5,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Eszaki_vasutvonal,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 6,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Nagykorosi_ut,
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 9,
        row: TileRowEnum.Bottom,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Kisfaludy_ut,
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 12,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Elektromos_muvek,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 13,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Szinhaz_ter,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 14,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Janus_Pannonius_ut,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 15,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Keleti_vasutvonal,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 16,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Petofi_ter,
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 19,
        row: TileRowEnum.Left,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Bethlen_Gabor_utca,
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 24,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Dom_ter,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 25,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Deli_vasutvonal,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 26,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Dobo_ter,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 27,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Almagyar_utca,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 28,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Vizmu,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 29,
        row: TileRowEnum.Top,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Gardonyi_ut,
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 32,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Ovaros,
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 35,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Nyugati_vasutvonal,
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
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 38,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Tax,
        title: TileNamesEnum.Potado,
      }),
    );
    this.#tiles.push(
      new Tile({
        index: 39,
        row: TileRowEnum.Right,
        type: TileTypesEnum.Property,
        title: TileNamesEnum.Dunakorzo,
      }),
    );
  }

  #roll() {
    let util = new Util();
    let roll1 = util.random(1, 6);
    let roll2 = util.random(1, 6);
    let sum = roll1 + roll2;

    document.getElementById("diceResults").textContent = `result: ${roll1} | ${roll2}`;

    this.#moveActivePlayer(sum);

    // update active player if not double 6
    if (roll1 + roll2 !== 12) {
      document.getElementById("diceButton").style.display = "none";
      document.getElementById("nextPlayerButton").style.display = "flex";
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
    }

    let playerElement = document.getElementById(activePlayer.name);

    document.getElementById(`Tile${targetIndex}players`).appendChild(playerElement);

    activePlayer.position = targetIndex;
  }

  #nextPlayer() {
    let previousPlayerIndex = this.#activePlayerIndex;

    this.#activePlayerIndex === this.#players.length - 1 ? this.#activePlayerIndex = 0 : this.#activePlayerIndex++;

    setTimeout( () => {
      alert(`${this.#players[previousPlayerIndex].name}'s turn ended.\n\nIt's ${this.#players[this.#activePlayerIndex].name}'s turn!`);
    }, 0);

    document.getElementById("nextPlayerButton").style.display = "none";
    document.getElementById("diceButton").style.display = "flex";

    this.#updatePlayerInfoDisplay();
  }

  #updatePlayerInfoDisplay() {

  }
}
