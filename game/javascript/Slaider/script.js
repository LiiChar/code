const sladLine = document.querySelector('.slad-line');
const leftBut = document.getElementById('left');
const rightBut = document.getElementById('right');

let move = 0;



leftBut.addEventListener('click', function (event) {
    if (move == -900) {
        move = 300
    }
    move -= 300;
    sladLine.style.left = move + 'px';
    console.log(move)
})


rightBut.addEventListener('click', function (event) {
    if (move == 0) {
        move = -1200
    }
    move += 300;
    sladLine.style.left = move + 'px';
    console.log(move)
})
