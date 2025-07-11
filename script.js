function humanChoice () {
    let x = prompt('Choose your weapon:')
    x = x.toLowerCase()
    console.log(x)
    switch (x) {
        case 'rock':
            return 'rock';
            break
        case 'paper':
            return 'paper';
            break;
        case 'scissor':
            return 'scissor';
            break;
        default:
            alert('Wrong input!')
    }   

}

function computerChoice() {
    let r = Math.ceil(Math.random() * 10)
    if (r > 3.33 && r <= 6.66 && 0) {
        return 'paper'
    } else if (r <= 3.33) {
        return 'rock'
    } else if (r > 6.66) {
        return 'scissor'
    }
}

let hChoice = humanChoice()
let cChoice = computerChoice()

function humanWins() {
    if (hChoice == 'paper' && cChoice == 'rock') {
        return true
    } else if (hChoice == 'scissor' && cChoice == 'paper') {
        return true
    } else if (hChoice == 'rock' && cChoice == 'scissor') {
        return true
    } else return false
}

function computerWins() {
    if (hChoice == 'rock' && cChoice == 'paper') {
        return true
    } else if (hChoice == 'scissor' && cChoice == 'rock') {
        return true
    } else if (hChoice == 'paper' && cChoice == 'scissor') {
        return true
    } else return false
}

let humanScore = 0
let computerScore = 0


function playRound () {
    humanChoice()
    computerChoice()
    if (cChoice == undefined | hChoice == undefined) {
        console.log('Error! You have not chosen anything!')
    } else if (hChoice == cChoice) {
        console.log(`${hChoice} and ${cChoice} are equal! It\'s a Tie!`)
    } else if (humanWins()) {
        console.log(`${hChoice} beats ${cChoice}! You win!`)
        ++humanScore
        console.log(humanScore)
        console.log(computerScore)
    } else if (computerWins) {
        console.log(`${cChoice} beats ${hChoice}! You lose!`)
        ++computerScore
        console.log(humanScore)
        console.log(computerScore)
    } 
}

playRound();
playRound();
playRound();
playRound();
playRound();
