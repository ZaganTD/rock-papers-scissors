const button = document.querySelectorAll('.button')
const announcement = document.querySelector('.anoun')
let scorePc = document.querySelector('.score-pc')
let scoreH = document.querySelector('.score-human')

announcement.style.fontSize = '50px'
announcement.style.fontFamily = 'bold'

let comChoice
let humChoice
let computerScore = 0
let humanScore = 0

function computerChoice() {
    const array = ['Rock', 'Paper', 'Scissor']
    comChoice = array[Math.floor(Math.random() * array.length)]
}


button.forEach((i) => {
    i.addEventListener('click', (i) => humChoice = i.target.innerHTML)
})

button.forEach((i) => {
    i.addEventListener('click', () => playRound())
}) 

function humanWin() {
    if (humChoice == 'Rock' && comChoice == 'Scissor') {
        return true
    } else if (humChoice == 'Scissor' && comChoice == 'Paper') {
        return true
    } else if (humChoice == 'Paper' && comChoice == 'Rock') {
        return true
    } else return false
}

function computerWin() {
    if (humChoice == 'Scissor' && comChoice == 'Rock') {
        return true
    } else if (humChoice == 'Paper' && comChoice == 'Scissor') {
        return true
    } else if (humChoice == 'Rock' && comChoice == 'Paper') {
        return true
    } else return false
}

function playRound() {
    computerChoice()
    if (humChoice == comChoice) {
        announcement.textContent = `It's a tie!`
    } else if (humanWin()) {
        humanScore++
        scoreH.textContent = humanScore
        announcement.textContent = `You win! ${humChoice} beats ${comChoice}!`
    } else if (computerWin()) {
        computerScore++
        scorePc.textContent = computerScore
        announcement.textContent = `You lose! ${comChoice} beats ${humChoice}!`
    }

    gameOver()
}


function gameOver() {
    if (humanScore == 5) {
        announcement.textContent = `The game is over! You win!`
    } else if (computerScore == 5) {
        announcement.textContent = `The game is over! You lose!`
    }
}