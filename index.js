function computerPlay() {
    const items = ['rock', 'paper', 'scissors'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
}
computerPlay();

// function playRound(playerSelection, computerSelection) {
//     const items = ['rock', 'paper', 'scissors'];
//     if (playerSelection === computerSelection)
//         return 'No Winner';
//     if (computerSelection === 'rock' && playerSelection === 'scissors')
//         return 'You loose! Rock beats Scissors';
//     if (computerSelection === 'paper' && playerSelection === 'rock')
//         return 'You loose! Paper beats Rock';
//     if (computerSelection === 'scissors' && playerSelection === 'paper')
//         return 'You loose! Scissors beats Paper';
//     if (playerSelection === 'rock' && computerSelection === 'scissors')
//         return 'You win! Rock beats Scissors';
//     if (playerSelection === 'paper' && computerSelection === 'rock')
//         return 'You win! Paper beats Rock';
//     if (playerSelection === 'scissors' && computerSelection === 'paper')
//         return 'You loose! Scissors beats Paper';
// }
function playRound(playerSelection, computerSelection) {
    const items = ['rock', 'paper', 'scissors'];
    if (playerSelection === computerSelection)
        return 'No Winner';
    if (computerSelection === 'rock' && playerSelection === 'scissors')
        return 'You loose';
    if (computerSelection === 'paper' && playerSelection === 'rock')
        return 'You loose';
    if (computerSelection === 'scissors' && playerSelection === 'paper')
        return 'You loose';
    if (playerSelection === 'rock' && computerSelection === 'scissors')
        return 'You win';
    if (playerSelection === 'paper' && computerSelection === 'rock')
        return 'You win';
    if (playerSelection === 'scissors' && computerSelection === 'paper')
        return 'You loose';
}
const playerSelection1 = prompt('');
const playerSelection = playerSelection1.toLocaleLowerCase();
const computerSelection1 = computerPlay();
const computerSelection = computerSelection1.toString();

// console.log('computerPlay:',computerPlay());
console.log('playerSelection:',playerSelection);
console.log('computerSelection:', computerSelection);
console.log(playRound(playerSelection, computerSelection));

function result() {
    let count;
    if (playRound(playerSelection, computerSelection) === 'No Winner') count = 0;
    if (playRound(playerSelection, computerSelection) === 'You win') count = 1;
    if (playRound(playerSelection, computerSelection) === 'You loose') count = -1;
    return count;
}
console.log(result());


function game() {
    let A = [];
    let score = result();
    for (let i = 1; i <= 5; i++){
        console.log( 'round:', i, 'result:', result());
        A.push(score);
    } 
    return A;
    console.log(A);
}
console.log(game());

