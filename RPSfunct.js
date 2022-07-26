const buttonRock = document.querySelector('#ruk');
const buttonPaper = document.querySelector('#pap');
const buttonScissors = document.querySelector('#scis');

const pScore = document.querySelector('.pla');
const cScore = document.querySelector('.com');
const tieT = document.querySelector('.tieText');
const resultS = document.querySelector('.results');

const resetT = document.querySelector('.reset');
const resB = document.createElement('button');

resetT.appendChild(resB);
resB.style.display = 'none';

var youScore = 0;
var compScore = 0;

buttonRock.addEventListener('click', () => {
    tieT.textContent = " ";
    console.log("Hello rock");

    var playerSelectionR = 'rock';
    var computerSelectionR = getComputerChoice();

    if(playRound(playerSelectionR, computerSelectionR) == 1)
    {
        console.log('You won');
        youScore++;
    }

    else if(playRound(playerSelectionR, computerSelectionR) == -1)
    {
        console.log('You lost');
        compScore++;
    }

    else
    {
        console.log('Tie');
        tieT.textContent = "It's a tie";
    }

    pScore.textContent = youScore.toString();
    cScore.textContent = compScore.toString();

    if(youScore == 5)
    {
        resB.style.display = 'block';
        resultS.textContent = 'You Won!';
        resB.textContent = 'Reset Game';

    }
    else if(compScore == 5)
    {
        resB.style.display = 'block';
        resultS.textContent = 'You lost';     
        resB.textContent = 'Reset Game';
    }
  });

buttonPaper.addEventListener('click', () => {
    tieT.textContent = " ";
    console.log("Hello paper");

    var playerSelectionP = 'paper';
    var computerSelectionP = getComputerChoice();

    if(playRound(playerSelectionP, computerSelectionP) == 1)
    {
        console.log('You won');
        youScore++;
    }

    else if(playRound(playerSelectionP, computerSelectionP) == -1)
    {
        console.log('You lost');
        compScore++;
    }

    else
    {
        console.log('Tie');
        tieT.textContent = "It's a tie";
    }

    pScore.textContent = youScore.toString();
    cScore.textContent = compScore.toString();

    if(youScore == 5)
    {
        resB.style.display = 'block';
        resultS.textContent = 'You Won!';
        resB.textContent = 'Reset Game';
    }
    else if(compScore == 5)
    {
        resB.style.display = 'block';
        resultS.textContent = 'You lost';    
        resB.textContent = 'Reset Game';
    }
  });

buttonScissors.addEventListener('click', () => {
    tieT.textContent = " ";
    console.log("Hello scissors");

    var playerSelectionS = 'scissors';
    var computerSelectionS = getComputerChoice();

    if(playRound(playerSelectionS, computerSelectionS) == 1)
    {
        console.log('You won');
        youScore++;
    }

    else if(playRound(playerSelectionS, computerSelectionS) == -1)
    {
        console.log('You lost');
        compScore++;
    }

    else
    {
        console.log('Tie');
        tieT.textContent = "It's a tie";
    }

    pScore.textContent = youScore.toString();
    cScore.textContent = compScore.toString();

    if(youScore == 5)
    {
        resB.style.display = 'block';
        resultS.textContent = 'You Won!'; 
        resB.textContent = 'Reset Game';
    }
    else if(compScore == 5)
    {
        resB.style.display = 'block';
        resultS.textContent = 'You lost';
        resB.textContent = 'Reset Game';
    }
  });

  resB.addEventListener('click', () => {
    console.log('tup');
    youScore = 0;
    compScore = 0;
    pScore.textContent = youScore.toString();
    cScore.textContent = compScore.toString();
    resultS.textContent = "--";
    resB.style.display = 'none';
  });

function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

  let min = Math.ceil(1);
  let max = Math.floor(3);
  let choose = Math.floor(Math.random() * (max - min + 1) + min);

  if(choose == 1)
    return rock;

  else if(choose == 2)
    return paper;

  else
    return scissors;
}

function playRound(playerS, computerS) {

    let uplayerS = playerS.toLowerCase();
    let playerWon = 1;
    let playerLost = -1;
    let stalemate = 0;
    let stale = 'Wrong string';

    if(uplayerS == 'rock') {
        if(computerS == 'scissors') {
            return playerWon;
        }

        else if(computerS == 'paper') {
            return playerLost;
        }

        else {
            return stalemate;
        }       
    }
     
    else if(uplayerS == 'scissors') {

        if(computerS == 'rock') {
            return playerLost;
        }

        else if(computerS == 'paper') {
            return playerWon;
        }

        else {
            return stalemate;
        }
    }

    else if(uplayerS == 'paper') {
        if(computerS == 'scissors') {
            return playerLost;
        }

        else if(computerS == 'rock') {
            return playerWon;
        }

        else {
            return stalemate;
        }
    }

    else {
        return stale;
    }  
}

/*for(let i = 0; i < 5; i++)
{
    var playerSelect = prompt("Choose a thing");
    var playerSelection = playerSelect.toLowerCase();
    var computerSelection = getComputerChoice();
    
    if(playRound(playerSelection, computerSelection) == 1)
    {
        console.log('You won');
        youScore++;
    }

    else if(playRound(playerSelection, computerSelection) == -1)
    {
        console.log('You lost');
        compScore++;
    }

    else
    {
        console.log('Tie');
    }
} */

/*if(youScore > compScore)
    console.log('You won the game');
else if(compScore > youScore)
    console.log('You lost the game');
else   
    console.log('The game is tied'); */