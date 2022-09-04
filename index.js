const items = ['rock', 'paper', 'scissors'];
const playerSelection1 = prompt('');
const playerSelection = playerSelection1.toLocaleLowerCase();
const computerSelection1 = computerPlay();
const computerSelection = computerSelection1.toString();

function computerPlay() {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return 'No Winner';
    else if (computerSelection === 'rock' && playerSelection === 'scissors')
        return 'You loose';
    else if (computerSelection === 'paper' && playerSelection === 'rock')
        return 'You loose';
    else if (computerSelection === 'scissors' && playerSelection === 'paper')
        return 'You loose';
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
        return 'You win';
    else if (playerSelection === 'paper' && computerSelection === 'rock')
        return 'You win';
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
        return 'You loose';
    return 'Invalid input - try again!'
}

function game() {
    let round = 1;
    while(round <= 5) {
        const playerSelection = prompt('Enter your choice');
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(`result ${round}:`, result);
        if (result !== 'Invalid input - try again!') {
            round++;
        }   
        
    let playerScore = 0;
    let computerScore = 0;
    if (result === 'You win') { playerScore += 1};
    if (result === 'You loose') { computerScore += 1};
    // let resultMessage = (playerScore > computerScore) ? 'You won the game!' : 'Computer won the game!';
    if (playerScore > computerScore) 
        {resultMessage = `You won the game! Player score: ${playerScore}, Computer score: ${computerScore}`}
    else if (playerScore < computerScore) 
        {resultMessage = `Computer won the game! Player score: ${playerScore}, Computer score: ${computerScore}`}
    else 
        { resultMessage = 'It was a tie!'};
    console.log(resultMessage);
    }  
}
game();






