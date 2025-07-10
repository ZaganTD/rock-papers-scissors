function humanChoice () {
    let x = prompt('Choose your weapon:')
    x = x.toLowerCase()
    switch (x) {
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper'
        case 'scissor':
            return 'scissor'
        default:
            alert('Wrong input!')
    }   

}

function computerChoice () {
    let r = Math.ceil(math.random() * 10)
    if (r > 3.33 && r <= 6.66) {
        return 'paper'
    } else if (r <= 3.33) {
        return 'rock'
    } else if (r > 6.66) {
        return 'scissor'
    }
}

let humanScore = 0
let computerScore = 0

let humanChoice = humanChoice()
let computerChoice = computerChoice()

function playRound (humanChoice, computerChoice) {
    
}