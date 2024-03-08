(function () {
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width 
const height = canvas.height 

var scale = window.devicePixelRatio;

const models = {
    hero: './hero.png',
    background: './grass.png'
}

cns.width = Math.floor(canvas.width * scale);
cns.height = Math.floor(canvas.height  * scale);

function render() {
    requestAnimationFrame(render)
}

render

class game {
    constructor (width, height, models) {
        this.width = width
        this.height = height
        this.models = models
        this.background = new Background(models.Background, height, width)
    }

    render () {
        Background.
    }
}

class Background {
    constructor (models, height, width) {
        this.model = model
        this.height = height
        this.width = width
    }
    paint () {
        const img = new Image()
        img.src = block.src
        ctx.drawImage(img,block.x,block.y,block.widht,block.height);
        enemy.push({id: block.id, posX: block.x, posY: block.y, enemWidth: block.widht, enemHeight: block.height})
    }
}

class Hero {
    constructor (name, model, classHero, positionX, positionY) {
        this.name = name
        this.model = model
        switch (classHero) {
            case 'swordman':
                this.class = new Sword()
                break;
            case 'mage':
                this.class = new Mage()
                break;
        
            default:
                break;
        }
        this.posX = positionX
        this.posY = positionY
    }
}


class Sword extends Hero {
    dx = 10
    dy = 10
    health = 120

    constructor () {super()}

    attack() {
        
    }

    move() {
        
    }
}



class Mage extends Hero {
    dx = 7
    dy = 7
    health = 80

    constructor () {super()}

    attack() {
        
    }

    move() {
        
    }
}
}) ()















// let downTab = false

// const player = {
//     x: 30,
//     y: 30,
//     color: 'black',
//     health: 100,
//     damage: 5,
//     height: 25,
//     widht: 16,
//     dx: 2,
//     dy: 2,
//     getMission: [],
//     score: 0,
//     src: './hero.png',
//     nextPos: true,
//     directionMove: false,
// }

// const enemy = []


// const target = []

// const missions = [
//     { id: 0, name: 'catch', x: 100, y: 100, color: 'yellow', ground:false, text: 'Захватите мышь', getMis: false },
//     { id: 1, name: 'kill', x: 100, y: 50, color: 'yellow', ground:false, text: 'Убейте мышь', getMis: false },
// ]


// function drawBlock(block) {
//     if (block.src) {
//         const img = new Image()
//         img.style.position
//         img.src = block.src
//         ctx.drawImage(img,block.x,block.y,block.widht,block.height);
//         enemy.push({id: block.id, posX: block.x, posY: block.y, enemWidth: block.widht, enemHeight: block.height})
//     } else {
//         ctx.fillStyle = block.color
//         ctx.fillRect(block.x, block.y, 10, 10);
//     }
// }

// function drawBackground () {
//     const img = new Image()
//         img.style.position
//         img.src = block.src
//         ctx.drawImage(img,block.x,block.y,block.widht,block.height);
// }

// function reGetMission() {
//     let reMis = true
//     for (let i = 0; i < player.getMission.length; i++) {
//         for (let j = 0; j < missions.length; j++) {
//             if (player.getMission[i].id === missions[j].id) {
//                 reMis = false
//             }
            
//         }
        
//     }
//     return reMis
// }

// function findCollisionBlock(target, block) {
//     if (block.src) {
//         if (
//         ((target.x + 10 >= block.x) && (target.x - block.widht <= block.x))
//         && ((target.y + 10 >= block.y)  && (target.y - block.height <= block.y))
//         ) {
//         return true
//     } else {
//         return false
//     }
//     } else {
//         if (((target.x + 10 > block.x) && (target.x - 10 < block.x))
//         && ((target.y + 10 > block.y) && (target.y - 10 < block.y))) {
//         return true
//     } else {
//         return false
//     }
//     }

// }

// function kill(target) {
//     if (target.catch) {
//         if (target.health <= 0) {
//             console.log('Пойман');
//             delMissionFromPlayerMission(target)
//             player.score = player.score + 10
//             // delTarget(target)
//             return true
//         }
//         if (findCollisionBlock(target, player)) {
//             console.log('Ловлю. Осталось' + target.health);
//             target.health = target.health - ((100 / (player.health / 20)) / 60)
//         }
//     }
//     if (target.kill) {
//         if (target.health <= 0) {
//             console.log('Убит');
//             delMissionFromPlayerMission(target)
//             player.score = player.score + 5
//             // delTarget(target)
//             return true
//         }

//         if (findCollisionBlock(target, player)) {
//             console.log('Убиваю. Осталось' + target.health);
//             target.health -= player.damage
//         }
//     }
// }

// function delMissionFromPlayerMission(target) {
//     for (let i = 0; i < player.getMission.length; i++) {
//         if (player.getMission[i].zel.id === target.id) {
//             player.getMission.splice(i, 1)
//             console.log(player.getMission);
//         }
//     }
// }

// function delTarget(zel) {
//     for (let i = 0; i < target.length; i++) {
//         if (target[i].id === zel.id) {
//             target.splice(i, 1)
//         }
//     }
// }

// function randomSpawner(yx) {
//     if (yx == 'x') {
//         return Math.floor(Math.random() * (widthWin - 10 + 1)) + 10;
//     }
//     if (yx == 'y') {
//         return Math.floor(Math.random() * (heightWin - 10 + 1)) + 10;
//     }
// }

// function addTarget(name, health) {
//     let lastElem = target[0] ? target.length : 0
//     if (lastElem) {
//         lastElem = lastElem + 1
//     }
//     target[lastElem] = {id: lastElem, name: name ,x: randomSpawner('x'), y: randomSpawner('y'), ground:false, color: `black`, kill: false, catch: false, health: health}
//     return lastElem
// }

// function addMission(name, text, x, y) {
//     let lastElem = missions[0] ? missions.length : 0
//     if (lastElem) {
//         lastElem = lastElem + 1
//     }
//     missions[lastElem] = { id: lastElem, name: name, ground:false, x: x, y: y, color: 'yellow', text: text, getMis: false }

// }

// function findTarger(name) {
//     for (let i = 0; i < target.length; i++) {
//         if (name = target[i].name) {
//             return i
//         }
//     }
// }

// function drawHPBar (target) {
//     ctx.fillStyle = 'lightgreen';
//     ctx.fillRect(target.x - 4, target.y - 8, target.health / 5, 5);
//     ctx.font = "8px serif";
//     ctx.fillStyle = `white`
//     ctx.fillText(Math.floor(target.health), target.x, target.y - 3);
//     if (target.health <=0) {
//         ctx.clearRect(target.x-5, target.y - 5, 10, 10)
//     }
// }

// function draw() {
//     ctx.fillStyle = 'orange';
//     ctx.fillRect(0, 0, widthWin, heightWin);
//     drawBlock(player)



//     if (downTab) {
//         ctx.font = "48px serif";
//         ctx.fillStyle = `black`
//         ctx.fillText(player.getMission[0] ? player.getMission[0].name : 'Нет миссий', 10, 300);
//     }

//     ctx.font = "48px serif";
//     ctx.fillStyle = `black`
//     ctx.fillText(player.score, 500, 50);

//     missions.forEach((mission) => {
//         drawBlock(mission)

//         // if (player.directionMove) {
//         //     movePlayer(player, mission)
//         // }

//         if (findCollisionBlock(mission, player) && reGetMission(mission)) {
//             mission.getMis = true
//             const id = addTarget(mission.name, 100)
//             mission.zel = target[id]
//             mission.zel[mission.name] = true
//             player.getMission.push(mission)
//         }
//         if (mission.getMis) {
//             drawBlock(mission.zel)
//             drawHPBar(mission.zel)
//             if (kill(mission.zel)) {
//                 mission.getMis = false
//             } else {
//                 kill(mission.zel)
//             }
//         }


//     })
//     requestAnimationFrame(draw)
// }

// draw()

// document.addEventListener('keypress', function (event) {
//     if (event.code == 'KeyW') {
//         // player.directionMove = 'top'
//         player.y += -player.dy
//     } 
//     else if (event.code == 'KeyS') {
//         // player.directionMove = 'down'
//         player.y += player.dy
//     } else
//     if (event.code == 'KeyA') {
//         // player.directionMove = 'left'
//         player.x += -player.dx
//     } else
//     if (event.code == 'KeyD') {
//         player.x += player.dx
//         // player.directionMove = 'right'
//     }
// });

// document.addEventListener('keyup', function (event) {
//     if (event.code == 'KeyW') {
//         player.directionMove = true
//     } 
//     if (event.code == 'KeyS') {
//         player.directionMove = true
//     } 
//     if (event.code == 'KeyA') {
//         player.directionMove = true
//     } 
//     if (event.code == 'KeyD') {
//         player.directionMove = true
//     }
// });

// document.addEventListener('keydown', function (event) {
//     if (event.code == 'KeyQ') {
//         downTab = true
//     } 
// })

// document.addEventListener('keyup', function (event) {
//     if (event.code == 'KeyQ') {
//         downTab = false
//     } 
// })






