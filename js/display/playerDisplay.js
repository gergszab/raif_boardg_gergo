export class PlayerDisplay {
  /**
   *
   * @param {Player[]} players
   */
  setup(players) {
    this.#placePlayers(players);
    this.#createInfoBarElements(players);
  }

  /**
   *
   * @param {Player[]} players
   */
  #placePlayers(players) {
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
   * @param {Player[]} players
   */
  #createInfoBarElements(players) {
    const infoBar = document.getElementById("infoBar");

    players.forEach(player => {
      const playerContainer = document.createElement("DIV");
      playerContainer.style.padding = "5px";
      infoBar.appendChild(playerContainer);

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
}
