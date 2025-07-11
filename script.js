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

