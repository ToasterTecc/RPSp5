let choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let computerChoice = "";
let result = "";
let resultColor = "";
/*let wins = 0;
let ties = 0;
let loss = 0;
*/
let [wins, ties, loss, games] = [0,0,0,0];

function setup() {
  let div = createCanvas(400, 400);
  div.center('horizontal');
}

function draw() {
  background(220);
  textSize(32);
  textAlign(CENTER);
  fill(0);

  if (playerChoice === "") {
    textSize(20);
    text("Choose rock, paper, or scissors", width / 2, height / 2);
    text("Press r for rock, p = paper, or s = scissors", width / 2, height / 2+20);
  } else {
    fill("white");
    rect(120,250,160,55,20);
    fill(0);
    text("You chose " + playerChoice, width / 2, height / 2 - 30);
    text("Computer chose " + computerChoice, width / 2, height / 2 + 30);
    fill(resultColor);
    text(result, width / 2, height / 2 + 90);
    fill(0);
    textSize(15);
    text("Press r for rock, p = paper, or s = scissors", width/2,20);
    text("Total games: " + games, width / 2, 340);
    text("Your wins: " + wins, width / 3, 360);
    text("Your ties: " + ties, width / 3 , 375);
    text("Your loss: " + loss, width / 3 , 390);
    
    text("Win rate: " + ((wins/games) * 100).toFixed(2) + "%", width / 2 + 60, 360);
    text("Loss rate: " + ((ties/games) * 100).toFixed(2) + "%", width / 2 + 60, 375);
    text("Tie rate: " + ((loss/games) * 100).toFixed(2) + "%", width / 2 + 60, 390);
  }
}

function keyPressed() {
  if (keyCode === 82) {
    // "r" key pressed for "rock"
    playerChoice = "rock";
    computerTurn();
  } else if (keyCode === 80) {
    // "p" key pressed for "paper"
    playerChoice = "paper";
    computerTurn();
  } else if (keyCode === 83) {
    // "s" key pressed for "scissors"
    playerChoice = "scissors";
    computerTurn();
  }
}

function computerTurn() {
  let randomIndex = floor(random(choices.length));
  computerChoice = choices[randomIndex];
  checkResult();
}

function checkResult() {
  games+=1;
  if (playerChoice === computerChoice) {
    resultColor = "blue";
    result = "It's a tie!";
    ties +=1;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultColor = "green";
    result = "You win!";
    wins+=1;
  } else {
    resultColor = "red";
    result = "You lose!";
    loss+=1;
  }
}
