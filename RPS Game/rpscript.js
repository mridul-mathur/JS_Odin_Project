let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("user");
const computerScore_span = document.getElementById("comp");
const scoreBoard_div = document.querySelector('.score');
const compMove_div = document.querySelector('.compmove');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function compMove(){
    const compMove = ['r', 'p', 's'];
    const numb = Math.floor(Math.random() * 3);
    return compMove[numb];
}

function win(playermove , computerMove){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
}

function lose(playermove,computerMove){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
}

function draw(playermove,computerMove){
}
function game(playermove){
    const computerMove = compMove();
    switch(playermove + computerMove){
        case 'pr':
        case 'sp':
        case 'rs':
            win(playermove,computerMove);
            break;
        case 'rp':
        case 'ps':
        case 'rs':
            loss(playermove,computerMove);
            break;
        case 'pp':
        case 'rr':
        case 'ss':
            draw(playermove,computerMove);
            break;
    }
}
game('p');
function plMove() {
    rock_div.addEventListener('click', function () {
        console.log('Rock');
    });
    paper_div.addEventListener('click', function () {
        console.log('Paper');
    });
    scissor_div.addEventListener('click', function () {
        console.log('Scissors ');
    });
}
plMove();