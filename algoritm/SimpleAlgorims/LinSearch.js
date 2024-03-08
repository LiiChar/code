
var robot = require("robotjs");

let user = { x: 1, y: 1 }
let a =
    [
        ['#', '#', '#', '#', '#', '#'],
        ['#', '1', '0', '0', '0', '#'],
        ['#', '0', '#', '#', '0', '#'],
        ['#', '0', '#', '#', '0', '#'],
        ['#', '0', '0', '0', '0', '#'],
        ['#', '#', '#', '#', '#', '#']
    ]


if (keyTap('w')) {
    console.log('верз!')
}
if (keyTap('s')) {
    console.log('низ!')
}
if (keyTap('a')) {
    console.log('лево!')
}
if (keyTap('d')) {
    console.log('право!')
}




// while (true) {

//     for (let x = 0; x < a[0].length; x++) {
//         for (let y = 0; y < a.length; y++) {
//             if (a[x][y] = '1') {
//                 user.x = x,
//                     user.y = y
//             }
//         }

//     }
//     console.log(a);
// }

