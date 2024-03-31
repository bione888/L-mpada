const ligar = document.querySelector('#ligar')
const desligar = document.querySelector('#desligar')
const lampada = document.querySelector('#lampada')
const consertar = document.querySelector('#consertar')
let broken = 0
consertar.style.display = 'none'

function on() {
    lampada.src = 'img/ligada.jpg'
    broken += 1
    checkbroken()
}

function off() {
    lampada.src = 'img/desligada.jpg'
}

function checkbroken() {
    if(broken == 10) {
        lampada.src = 'img/quebrada.jpg'
        broken = 0
        ligar.style.display = 'none'
        desligar.style.display = 'none'
        consertar.style.display = ''
        lampada.removeEventListener('mouseenter' , on)
        lampada.removeEventListener('mouseout' , off)
        lampada.addEventListener('click' , conserto)
    } else {
        return;
    }
}

function conserto() {
    lampada.src = 'img/desligada.jpg'
    ligar.style.display = ''
    desligar.style.display = ''
    consertar.style.display = 'none'
}

ligar.addEventListener('click' , on)
desligar.addEventListener('click' , off)
consertar.addEventListener('click' , conserto)
lampada.addEventListener('mouseenter' , on)
lampada.addEventListener('mouseout' , off)