export class ControlDisplay {

  setup() {
    const board = document.getElementById("board");

    const controlArea = document.createElement("DIV");
    controlArea.id = "controlArea";
    controlArea.style.gridArea = "mid";
    controlArea.style.border = "solid 1px black";
    controlArea.style.display = "grid";
    controlArea.style.gridTemplateAreas = `'surprise dice lucky' 'info info info'`;
    controlArea.style.gridTemplateColumns = "1fr 1fr 1fr";
    controlArea.style.gridTemplateRows = "1fr 1.5fr";
    controlArea.style.background = "#fffacd";
    board.appendChild(controlArea);

    this.#drawInfoArea(controlArea);
  }

  /**
   *
   * @param {HTMLElement} parentElement
   */
  #drawInfoArea(parentElement) {
    const infoContainer = document.createElement("DIV");
    infoContainer.style.gridArea = "info";
    infoContainer.style.display = "grid";
    infoContainer.style.gridTemplateAreas = `'infoBar infoBar' 'actionButtons history'`;
    infoContainer.style.gridTemplateColumns = "2fr 1.25fr";
    infoContainer.style.gridTemplateRows = "max-content 1fr";
    infoContainer.style.width = "95%";
    infoContainer.style.height = "90%";
    infoContainer.style.margin = "auto";
    infoContainer.style.border = "solid 1px black";
    infoContainer.style.background = "white";
    infoContainer.style.overflowY = "hidden";
    parentElement.appendChild(infoContainer);

    const infoBar = document.createElement("DIV");
    infoBar.id = "infoBar";
    infoBar.style.height = "max-content";
    infoBar.style.borderBottom = "1px solid grey";
    infoBar.style.gridArea = "infoBar";
    infoBar.style.display = "grid";
    infoBar.style.gridAutoFlow = "row";
    infoContainer.appendChild(infoBar);

    this.#createActionButtons(infoContainer);

    const history = document.createElement("DIV");
    history.id = 'gameHistory';
    history.style.borderLeft = "1px solid black";
    history.style.padding = "5px";
    history.style.gridArea = "history";
    history.style.display = "grid";
    history.style.gridAutoFlow = "row";
    history.style.overflowY = "auto";
    history.style.alignContent = "start";
    history.style.maxHeight = "26vh";
    infoContainer.appendChild(history);
  }

  /**
   *
   * @param {HTMLElement} parent
   */
  #createActionButtons(parent) {
    const buyPropertyButton = document.createElement("BUTTON");
    buyPropertyButton.id = "buyPropertyButton";
    buyPropertyButton.style.gridArea = "actionButtons";
    buyPropertyButton.style.width = "max-content";
    buyPropertyButton.style.height = "max-content";
    buyPropertyButton.style.padding = "5px 20px";
    buyPropertyButton.style.display = "none";
    buyPropertyButton.style.placeSelf = "center";
    buyPropertyButton.textContent = "Buy property!";
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
    parent.appendChild(rollPrisonButton);

    const usePrisonCardButton = document.createElement("BUTTON");
    usePrisonCardButton.id = "usePrisonCardButton";
    usePrisonCardButton.style.width = "max-content";
    usePrisonCardButton.style.height = "max-content";
    usePrisonCardButton.style.padding = "5px 20px";
    usePrisonCardButton.style.display = "none";
    usePrisonCardButton.style.placeSelf = "center";
    usePrisonCardButton.textContent = "Use card!";
    parent.appendChild(usePrisonCardButton);
  }

  /**
   *
   * @param {Player[]} players
   */
  updatePlayerInfoDisplay(players) {
    players.forEach(player => {
      document.getElementById(`${player.name}Wealth`).textContent = `Wealth: ${player.wealth} Ft`;
      document.getElementById(`${player.name}FreeEscapeCardsCounter`).textContent = `Free escape cards:  ${player.freeEscapeCards.length}`;
    });
  }

  /**
   *
   * @param {Player} player
   */
  setPlayerActive(player) {
    document.getElementById(`active${player.name}`).style.display = "initial";
  }

  /**
   *
   * @param {Player} player
   */
  setPlayerInactive(player) {
    document.getElementById(`active${player.name}`).style.display = "none";
  }

  /**
   *
   * @param {Player} player
   */
  updateAndDisplayPrisonCounter(player) {
    document.getElementById(`${player.name}PrisonCountdown`).textContent = `Turns left in prison:  ${player.prisonCountdown}`;
    document.getElementById(`${player.name}PrisonCountdown`).style.display = "initial";
  }

  /**
   *
   * @param {Player} player
   */
  hidePrisonCounter(player) {
    document.getElementById(`${player.name}PrisonCountdown`).style.display = "none";
  }

  /**
   *
   * @param {String} text
   */
  addGameHistory(text) {
    let gameEvent = document.createElement("SPAN");
    gameEvent.textContent = text;

    let gameHistory = document.getElementById("gameHistory");

    gameHistory.appendChild(gameEvent);
    gameHistory.scrollTop = gameHistory.scrollHeight - gameHistory.clientHeight;

  }
}
