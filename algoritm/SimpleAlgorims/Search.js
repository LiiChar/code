// Линенйный поиск

// let a = [124, 3, 6 , 132, 23, 20, 234, 30, 31, 342, 37, 39, 312, 435, 321, 33]
// let count = 0

// function LinearSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         count += 1
//         if (array[i] === item) {
//             return i
//         }

//     }
//     return null
// }
// LinearSearch(a, 435)
// console.log(count);

// Бинарный поиск

// let a = [124, 3, 6 , 132, 23, 20, 234, 30, 31, 342, 37, 39, 312, 435, 321, 33]
// a = a.sort((a, b) => a - b)
// let find = 342
// let search = false
// let result = 0
// let count = 0
// while (search === false) {
//     count++
//     if(a[Math.floor(a.length / 2)] == find) {
//         console.log('Нашли');
//         result = a[Math.floor(a.length / 2)]
//         search = true
//     } else

//     if(find < a[(Math.floor(a.length / 2))]) {

//         a.splice((Math.floor(a.length / 2)), a.length)
//         console.log(a);
//     } else

//     if(find > a[(Math.floor(a.length / 2))]) {

//         a.splice(0, Math.floor(a.length / 2) )
//         console.log(a);

//     }
// }
// console.log(result);
// console.log(count);

// Бинарный поиск рекурсией

// let arrayMas = [124, 3, 6, 132, 23, 20, 234, 0, 234, 30, 31, 342, 37, 39, 312, 435, 321, 33]
// let count = 0

// let array = arrayMas.sort((a, b) => a - b)

// function recursiveBinarySearch(array, item, start, end) {
//     count++
//     let middle = Math.floor((start + end) - 2)
//     if (item === array[middle]) {
//         return array[middle]
//     }
//     if (item < array[middle]) {
//         return recursiveBinarySearch(array, item, start, middle - 1)
//     }
//     if (item > array[middle]) {
//         return recursiveBinarySearch(array, item, middle + 1, end)
//     }
// }
// console.log(recursiveBinarySearch(array, 20, 0, array.length));
// console.log(count);