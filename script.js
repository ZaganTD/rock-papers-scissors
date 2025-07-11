function humanChoice() {
    let x = prompt('Choose your weapon:')
    x = x.toLowerCase();
    if (x == 'rock' || x == 'paper' || x == 'scissor') {
        return x 
    } else alert('Wrong input!')
}

function computerChoice() {
    let y = Math.random() * 10
    if (y <= 3.33) {
        return 'rock'
    } else if (y > 3.33 && y <= 6.66) {
        return 'paper'
    } else return 'scissor'
}

let humanScore = 0;
let computerScore = 0;

function humanWin(human, computer) {
    if (human == 'rock' && computer == 'scissor') {
        return true
    } else if (human == 'paper' && computer == 'rock') {
        return true
    } else if (human == 'scissor' && computer == 'paper') {
        return true
    } else return false
}

function computerWin(computer, human) {
    if (computer == 'rock' && human == 'scissor') {
        return true
    } else if (computer == 'paper' && human == 'rock') {
        return true
    } else if (computer == 'scissor' && human == 'paper') {
        return true
    } else return false
}

function playRound() {
    for (i = 1; i <= 5; i++){
        let human = humanChoice();
        let computer = computerChoice();
        if (human == computer) {
            human = human.at(0).toUpperCase() + human.slice(1)
            computer = computer.at(0).toUpperCase() + computer.slice(1)
            console.log(`${human} and ${computer} are the same! It\'s a tie!`)
        } else if (humanWin(human, computer)) {
            ++humanScore;
            human = human.at(0).toUpperCase() + human.slice(1)
            computer = computer.at(0).toUpperCase() + computer.slice(1)
            console.log(`You win! ${human} beats ${computer}!`);
            console.log('Human Score:' + '' + humanScore);
            console.log('Computer Score' + '' + computerScore);
        } else if (computerWin(computer, human)) {
            ++computerScore;
            human = human.at(0).toUpperCase() + human.slice(1)
            computer = computer.at(0).toUpperCase() + computer.slice(1)
            console.log(` ${human} beats ${computer}!`);
            console.log( 'Your score:' + '' +humanScore);
            console.log('Computer Score:' + '' +computerScore);
        }
    }
}

playRound();