const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const winner = [
    {
        name: 'rock',
        beats: 'scissors',
    },
    {
        name: 'paper',
        beats: 'rock',
    },
    {
        name: 'scissors',
        beats: 'paper',
    },
];

function computermove() {
    const compmove = moves[Math.floor(Math.random() * moves.length)];
    console.log(compmove);
    return compmove;
}
function playermove() {
    const playermove = prompt('Choose your move: rock, paper or scissors');
    console.log(playermove);
    return playermove;
}
function playRound(playermove, compmove) {
    if (playermove == compmove) {
        console.log('Draw');
    }
    else if (winner.some(winner => winner.name == playermove && winner.beats == compmove)) {
        console.log('Player wins');
        playerScore++;
    }
    else {
        console.log('Computer wins');
        computerScore++;
    }
    console.log('Player score: ' + playerScore);
    console.log('Computer score: ' + computerScore);
}
while(true){
    playRound(playermove(), computermove());
    if (playerScore == 5) {
        console.log('Player wins the game');
        break;
    }
    else if (computerScore == 5) {
        console.log('Computer wins the game');
        break;
    }
}
