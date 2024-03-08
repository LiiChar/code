const can = document.getElementById('can');
const ctx = can.getContext("2d");

const ground = new Image();
ground.src = 'img/bg.png'

const foodImg = new Image();
foodImg.src = 'img/fd.png'

let box = 32;

let score = 0;



document.addEventListener('keydown', search)

let dir;

function search(event) {
    if (event.keyCode == 37 && dir != "rigth") {
        dir = 'left'
    } else if (event.keyCode == 38 && dir != "down") {
        dir = 'up'
    } else if (event.keyCode == 39 && dir != "left") {
        dir = 'rigth'
    } else if (event.keyCode == 40 && dir != "up") {
        dir = 'down'
    }
}

let food = {
    x: (Math.floor(Math.random() * 17 + 1)) * box,
    y: (Math.floor(Math.random() * 15 + 3)) * box,
}

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 8 * box,
}

function eatTale(head, arr) {
    for (let i = 0; i < snake.length; i++) {
        if (arr[i].x == head.x && arr[i].y == head.y) {
            console.log("Змея съела хвост")
           
            start()
            alert("You lose")
            clearInterval(game);

        }
    }
}






function draw() {
    ctx.drawImage(ground, 0, 0);

    ctx.drawImage(foodImg, food.x, food.y);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? 'green' : 'white'
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'white';
    ctx.font = '30px Areal'
    ctx.fillText(score, box * 2.5, box * 1.5);

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: (Math.floor(Math.random() * 17 + 1)) * box,
            y: (Math.floor(Math.random() * 15 + 3)) * box,
        }
    } else {
        snake.pop();
    }

    if (snakeX < box || snakeX > box * 17 || snakeY < box * 3 || snakeY > box * 17) {
        alert("You lose")
        start()
        clearInterval(game);

    }



    if (dir == "left") {
        snakeX -= box
    } else if (dir == "rigth") {
        snakeX += box
    } else if (dir == "up") {
        snakeY -= box
    } else if (dir == "down") {
        snakeY += box
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    eatTale(newHead, snake);

    snake.unshift(newHead)
}

let game = setInterval(draw, 100)

