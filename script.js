
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

