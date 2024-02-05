window.addEventListener("DOMContentLoaded", () => {
  let move;
  var pmove = document.getElementsByClassName("move");
  let cmove = document.getElementById("cmove");
  let user = document.getElementById("user");
  let computer = document.getElementById("comp");
  let userScore = 0;
  let computerScore = 0;
  function computerMove() {
    let random = Math.floor(Math.random() * 3);
    return random;
  }
  pmove = Array.from(pmove);
  pmove.forEach((element) => {
    element.addEventListener("click", () => {
      let moves = ["✊", "✋", "✌️"];
      move = element.children[0].innerText;
      console.log(`your move: ${move}`);
      compmove = computerMove();
      cmove.innerText = moves[compmove];
      console.log(`computer move: ${moves[compmove]}`);
      if (userScore == 5) {
        userScore = 0;
        computerScore = 0;
        user.innerText = userScore;
        computer.innerText = computerScore;
        alert("You win!");
      } else if (computerScore == 5) {
        userScore = 0;
        computerScore = 0;
        user.innerText = userScore;
        computer.innerText = computerScore;
        alert("You lose!");
      }
      if ((compmove == 0 && move == "✊") || (compmove == 1 && move == "✋") || (compmove == 2 && move == "✌️")) {
        user.innerText = userScore;
        computer.innerText = computerScore;
      } else if ((compmove == 0 && move == "✌️") || (compmove == 1 && move == "✊") || (compmove == 2 && move == "✋")) {
        userScore++;
        user.innerText = userScore;
      } else {
        computerScore++;
        computer.innerText = computerScore;
      }
    });
  });
});
