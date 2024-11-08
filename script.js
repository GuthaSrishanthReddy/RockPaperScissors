var win = 0;
var loose = 0;
var tie = 0;

let rockPaperScissors = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");
const selectedDiv = document.getElementById("Selected");
const generatedDiv = document.getElementById("Generated");

resultDiv = "<br>Wins: " + win + "<br>Losses: " + loose + "<br>Ties: " + tie;

function evaluateResult(option) {
  document.getElementById("resultbuttons").style.border = "solid";
  document.getElementById("resultbuttons").style.borderColor = "Chocolate";

  selectedDiv.innerHTML = "";
  generatedDiv.innerHTML = "";
  let randomNum = parseInt(
    (((Math.random() * Math.random()) / Math.random()) * 1000000) % 3
  );
  console.log("Computer chose: " + rockPaperScissors[randomNum]);

  let result = "";

  switch (option) {
    case "rock":
      if (randomNum === 0) {
        tie++;
        result =
          "The computer chose " +
          rockPaperScissors[randomNum] +
          ". It's a tie!";
      } else if (randomNum === 2) {
        win++;
        result =
          "The computer chose " + rockPaperScissors[randomNum] + ". You win!!";
      } else {
        loose++;
        result =
          "The computer chose " +
          rockPaperScissors[randomNum] +
          ". You lose :(";
      }
      break;

    case "paper":
      if (randomNum === 1) {
        tie++;
        result =
          "The computer chose " +
          rockPaperScissors[randomNum] +
          ". It's a tie!";
      } else if (randomNum === 0) {
        win++;
        result =
          "The computer chose " + rockPaperScissors[randomNum] + ". You win!!";
      } else {
        loose++;
        result =
          "The computer chose " +
          rockPaperScissors[randomNum] +
          ". You lose :(";
      }
      break;

    case "scissors":
      if (randomNum === 2) {
        tie++;
        result =
          "The computer chose " +
          rockPaperScissors[randomNum] +
          ". It's a tie!";
      } else if (randomNum === 1) {
        win++;
        result =
          "The computer chose " + rockPaperScissors[randomNum] + ". You win!!";
      } else {
        loose++;
        result =
          "The computer chose " +
          rockPaperScissors[randomNum] +
          ". You lose :(";
      }
      break;

    default:
      result = "Unexpected Termination!";
  }

  updateResult(result);

  document.getElementById("selectedtext").innerHTML =
    "<b>you</b> &nbsp; &nbsp;";
  const selectedButton = document.createElement("Button");
  const selectedButtonPath = option + ".jpeg";
  selectedButton.style.backgroundImage = `url(${selectedButtonPath})`;
  selectedDiv.appendChild(selectedButton);

  document.getElementById("Generatedtext").innerHTML = "<b>computer</b>";
  const generatedButton = document.createElement("button");
  const generatedButtonPath = rockPaperScissors[randomNum] + ".jpeg";
  generatedButton.style.backgroundImage = `url(${generatedButtonPath})`;
  generatedDiv.appendChild(generatedButton);
  generatedDiv.innerHTML.appendChild("<b>computer</b>");

  resultDiv.innerHTML = result;
}

function resetRand() {
  win = loose = tie = 0;
  resultDiv.innerHTML =
    "<br>Wins: " + win + "<br>Losses: " + loose + "<br>Ties: " + tie;
  selectedDiv.innerHTML = "";
  generatedDiv.innerHTML = "";
  document.getElementById("winner").innerHTML = "";
  document.getElementById("selectedtext").innerHTML = "";
  document.getElementById("Generatedtext").innerHTML = "";
  document.getElementById("resultbuttons").style.border = "none";
}

function updateResult(result) {
  document.getElementById("winner").innerHTML = result + "<br>";
  resultDiv.innerHTML = `<br>Wins: ${win}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Losses: ${loose}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ties: ${tie}`;
}
