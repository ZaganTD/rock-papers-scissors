
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

