const can = document.getElementById('can')

const cnt = can.getContext('2d');

const dino = new Image();
dino.src = 'imag/Treks.png'

const cactus = new Image();
cactus.src = 'imag/kaktus.png'


let cactusStartPos = {
    x: 570,
    y: 160,
}

let dinoPos = {
    x: 0,
    y: 160,
}

let up,
    down;

document.addEventListener('keydown', jump)


function jump() {
    up = setInterval(jumpup, 1)
    down = setInterval(jumpdown, 1)

}

function jumpup() {
    dinoPos.y -= 10;

}

function jumpdown() {
    dinoPos.y += 10;
}


function draw() {
    cnt.drawImage(dino, dinoPos.x, dinoPos.y)
    cnt.drawImage(cactus, cactusStartPos.x, cactusStartPos.y)
    cnt.clearRect(cactusStartPos.x + 30, cactusStartPos.y, 30, 43)

    cactusStartPos.x -= 30

    if (cactusStartPos.x < -30) {
        cactusStartPos.x = 570
    }

    if (cactusStartPos.y < 120) {
        clearInterval(up)
    }

    if (cactusStartPos.y > 161) {
        clearInterval(down)
    }




}

let start = setInterval(draw, 100)


// Не раюотает попробовать создать объект и при общих координатаз объекта и  диназавра, запустить функции падения, ч знаю, что есть легче пути, но можна так попробовать
