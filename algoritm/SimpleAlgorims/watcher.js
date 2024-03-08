

let a = [
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 1, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 2, 0], 
    [0, 0, 0, 0, 0, 0], 

]

let ideal = 23;
let find = 195
let b = 0
let n = 0
let result = 0

for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a[i].length; j++) {

        if (a[i][j] === 1) {
            find = b
        }
        b++
    }
}

for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a[i].length; j++) {

        if (a[i][j] === 2) {
            ideal = n
        }
        n++
    }
}
let location = find
console.log(`Что ищём ${ideal}`);
console.log(`Откуда начинаем ${find}`);

let pos = []
// 2
// 10, 10
// 2, 0
while (ideal !== location) {
    if (((ideal + ((a[0].length - (ideal % a[0].length) - 1))) > location && location > ideal)) {
        pos.push({ x: Math.abs(location - (a[0].length * Math.floor(location / a[0].length))), y: Math.floor(location / a[0].length) })

        location -= 1


        result++
    } else
        if (((ideal - (ideal % a[0].length)) < location && ideal > location)) {
            pos.push({ x: Math.abs(location - (a[0].length * Math.floor(location / a[0].length))), y: Math.floor(location / a[0].length) })
            location += 1

            result++
        } else
            if (ideal > location && (ideal - (ideal % a[0].length)) > location) {
                pos.push({ x: Math.abs(location - (a[0].length * Math.floor(location / a[0].length))), y: Math.floor(location / a[0].length) })

                location += (a[0].length)

                result++
            } else

                if (ideal < location && (ideal + ((a[0].length - (ideal % a[0].length) - 1))) < location) {
                    location -= (a[0].length)
                    pos.push({ x: Math.abs(location - (a[0].length * Math.floor(location / a[0].length))), y: Math.floor(location / a[0].length) })

                    result++
                }
}
pos.push({ x: Math.abs(location - (a[0].length * Math.floor(location / a[0].length))), y: Math.floor(location / a[0].length) })

for (let i = 0; i < pos.length; i++) {
    setTimeout(() => {
        let newArr = a
        if (0 === i) {
            newArr[pos[i].y][pos[i].x] = 1
        } else {
            newArr[pos[i - 1].y][pos[i - 1].x] = 0
            newArr[pos[i].y][pos[i].x] = 1
        }
        console.log(newArr);
    }, 1000 * i)
}


console.log(`Сделано ходов ${result}`);
