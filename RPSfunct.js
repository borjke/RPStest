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

var youScore = 0;
var compScore = 0;

for(let i = 0; i < 5; i++)
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
}

if(youScore > compScore)
    console.log('You won the game');
else if(compScore > youScore)
    console.log('You lost the game');
else   
    console.log('The game is tied');