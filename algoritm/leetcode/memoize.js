// function memoize(fn) {
//     const obj = {}
//     return function(...args) {
//         if (obj[fn]) {
//             return obj[fn]
//         }
//         const res = fn(...args)
//         obj[fn] = res 
//         return res
//     }
// }

// const sum = (a, b) => {
//     return a + b
// }

// const mem = memoize(sum)

// mem(1, 2)
// mem(1, 2)   
// mem(1, 2)
// mem(1, 2)

// new Promise((res, rej) => {
//     setInterval(() => {
//         res(1000)
//     },1000)
// })

async function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res
        },1000)
    })
}
let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100