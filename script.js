function humanChoice() {
    let x = prompt('Choose your weapon:')
    x = x.toLowerCase();
    if (x == 'rock' || x == 'paper' || x == 'scissor') {
        return x 
    } else alert('Wrong input!')
}

