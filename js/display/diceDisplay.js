export class DiceDisplay {

  setup() {
    const controlArea = document.getElementById("controlArea");

    const diceContainer = document.createElement("DIV");
    diceContainer.id = "diceContainer";
    diceContainer.style.display = "grid";
    diceContainer.style.width = "80%";
    diceContainer.style.height = "60%";
    diceContainer.style.margin = "auto";
    //diceContainer.style.textAlign = "center";
    diceContainer.style.gridTemplateAreas = `'result' 'button'`;
    controlArea.appendChild(diceContainer);

    const diceResults = document.createElement("DIV");
    diceResults.id = "diceResults";
    diceResults.style.gridArea = "result";
    diceResults.style.display = "flex";
    //diceResults.style.height = "40%";
    diceResults.style.width = "80%";
    diceResults.style.border = "solid 1px black";
    diceResults.style.placeSelf = "center";
    diceResults.style.justifyContent = "center";
    diceResults.style.alignItems = "center";
    diceResults.style.background = "white";
    diceResults.textContent = "Waiting for Roll";
    diceContainer.appendChild(diceResults);

    const startButton = document.createElement('BUTTON');
    startButton.id = 'startButton';
    startButton.style.gridArea = "button";
    startButton.style.width = "max-content";
    startButton.style.height = "max-content";
    startButton.style.padding = "5px 20px";
    startButton.style.placeSelf = "center";
    startButton.textContent = 'Start game';
    diceContainer.appendChild(startButton);

    const nextPlayerButton = document.createElement("BUTTON");
    nextPlayerButton.id = "nextPlayerButton";
    nextPlayerButton.style.gridArea = "button";
    nextPlayerButton.style.width = "max-content";
    nextPlayerButton.style.height = "max-content";
    nextPlayerButton.style.padding = "5px 20px";
    nextPlayerButton.style.display = "none";
    nextPlayerButton.style.placeSelf = "center";
    nextPlayerButton.textContent = "Next Player!";
    diceContainer.appendChild(nextPlayerButton);

    const diceButton = document.createElement("BUTTON");
    diceButton.id = "diceButton";
    diceButton.style.gridArea = "button";
    diceButton.style.width = "max-content";
    diceButton.style.height = "max-content";
    diceButton.style.padding = "5px 20px";
    diceButton.style.display = "none";
    diceButton.style.placeSelf = "center";
    diceButton.textContent = "Roll!";

    diceContainer.appendChild(diceButton);
  }

  /**
   *
   * @param {number} roll1
   * @param {number} roll2
   */
  displayRollResults(roll1, roll2) {
    document.getElementById("diceResults").textContent = `result: ${roll1} | ${roll2}`;
  }

  displayRollResultsPlaceholder() {
    document.getElementById("diceResults").textContent = `Waiting for Roll`;
  }

  displayStartButton() {
    document.getElementById("startButton").style.display = "flex";
  }

  displayRollButton() {
    document.getElementById("diceButton").style.display = "flex";
  }

  displayNextPlayerButton() {
    document.getElementById("nextPlayerButton").style.display = "flex";
  }

  hideStartButton() {
    document.getElementById("startButton").style.display = "none";
  }

  hideRollButton() {
    document.getElementById("diceButton").style.display = "none";
  }

  hideNextPlayerButton() {
    document.getElementById("nextPlayerButton").style.display = "none";
  }
}
