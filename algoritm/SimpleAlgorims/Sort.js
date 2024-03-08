
// Сортировка (лёгкая)

// let array = [124, 3, 6 , 132, 23, 20, 234, 30, 31, 342, 37, 39, 312, 435, 321, 33]
// let count = 0;
// function selcetionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let indexMin = i
//         for (let j = i+1; j < array.length; j++) {
//            if(array[j] < array[indexMin]) {
//             indexMin = j
//            }
//            count ++
//         }
//         let tmp = array[i]
//         array[i] = array[indexMin]
//         array[indexMin] = tmp
//     }
//     return array
// }

// console.log(selcetionSort(array));
// console.log(count);

// Пузырьковая сортировка

// let array = [124, 3, 6, 132, 23, 20, 234, 30, 31, 342, 37, 39, 312, 435, 321, 33]
// let count = 0
// function bableSort() {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let tmp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = tmp
//             }
//             count++
//         }

//     }
// }

// bableSort(array)
// console.log(array);
// console.log(count);

// Быстрая сортировка с помощью рекурсии


// let array = [124, 3, 6, 132, 23, 20, 234, 30,  124, 3, 6, 132, 23, 20, 234, 30, 124 , 3, 6, 132, 23, 20, 234, 30, 124, 3, 6, 132, 23, 20, 234, 30, 124, 3, 6, 132, 23, 20, 234, 30, 31, 342, 37, 39, 312, 435, 321, 33]
// let count = 0

// function FastSort(array) {
//     if(array.length <= 1) {
//         return array
//     }
//     let privateIndex = Math.floor(array.length / 2)
//     let privot = array[privateIndex]
//     let less = []
//     let greater = []
//     for (let i = 0; i < array.length; i++) {
//         count++
//         if (i === privateIndex){
//             continue
//         }
//         if (array[i] < privot) {
//             less.push(array[i])
//         } else {
//             greater.push(array[i])
//         }


//     }
//     return [...FastSort(less), privot, ...FastSort(greater)]
// }

// console.log(FastSort(array)); 
// console.log(count);



// Рекурсия

// function factorial(n) {
//     if (n===1) {
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(19)); 

// function fibanachi(n) {
//     if ( n === 1 || n === 2) {
//         return 1
//     }

//     return fibanachi(n-1) + fibanachi(n - 2)
// }


// console.log(fibanachi(10));

// Моя собственная 

// function frankenSplice(arr1, arr2, n) {
    //     if (n === 0) {
    //         n = 1
    //     }
    //     let firstAr = arr1
    //     let secondAr = arr2
    //     let z = []
    //     let LenArr;
    //     let sumArr = arr1.length + arr2.length
    //     if (firstAr.length > secondAr.length){
    //       LenArr = firstAr.length
    //     } else {
    //       LenArr = secondAr.length
    //     }
    //     for (let i = 0; i < LenArr; i++) {
    //         let a = secondAr.slice(i, n+i)
    //         let b = firstAr.slice(i, n+i)
    //         a.forEach(element => {
    //             console.log(element);
    //             z.push(element)
    //         });
    //         b.forEach(element => {
    //             console.log(element);
    
    //             z.push(element)
    //         });
    //     }
    //     if(arr1[0].length > 1) {
    //         return z.slice(0, sumArr)
    //     }
    //     return z.join().replace(/,/g, '').slice(0, sumArr).split('')
    //   }
      
    //  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); => "head", "shoulders", "claw", "tentacle", "knees", "toes"
    //  console.log(frankenSplice([1, 2, 3], [4, 5], 1)); => 4, 1, 5, 2, 3
    //  console.log(frankenSplice([1, 2], ["a", "b"], 1)); => a, 1, b, 2
    //  console.log(frankenSplice([1, 2, 3, 4], [], 0)); => 1, 2, 3, 4
