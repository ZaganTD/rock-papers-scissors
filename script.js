
function computerChoice() {
    let y = Math.random() * 10
    if (y <= 3.33) {
        return 'Rock'
    } else if (y > 3.33 && y <= 6.66) {
        return 'Paper'
    } else return 'Scissor'
}


function humanWin(human, computer) {
    if (human == 'Rock' && computer == 'Scissor') {
        return true
    } else if (human == 'Paper' && computer == 'Rock') {
        return true
    } else if (human == 'Scissor' && computer == 'Paper') {
        return true
    } else return false
}

function computerWin(computer, human) {
    if (computer == 'Rock' && human == 'Scissor') {
        return true
    } else if (computer == 'Paper' && human == 'Rock') {
        return true
    } else if (computer == 'Scissor' && human == 'Paper') {
        return true
    } else return false
}

let humanScore = document.querySelector('.score-human')
let pcScore = document.querySelector('.score-pc')
let button = document.querySelectorAll('.button')
let container = document.querySelector('.container')
let anounContainer = document.querySelector('.anoun')

let computerCh = computerChoice()

for (let i of button) {
    i.addEventListener('click', (e) => {
        if (humanWin(e.target.innerHTML, computerCh)) {
            anounContainer.innerHTML = ''
            let anoun = document.createElement('h1')
            anoun.textContent = `You win! ${e.target.innerHTML} beats ${computerCh}`
            anounContainer.appendChild(anoun)
        } else if (computerWin(computerChoice(), e.target.innerHTML)) {
            anounContainer.innerHTML = ''
            let anoun = document.createElement('h1')
            anoun.textContent = `You lose! ${computerCh} beats ${e.target.innerHTML}`
            anounContainer.appendChild(anoun)
        }

    })
}

