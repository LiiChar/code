var maxArea = function(height) {
    let mean = Math.round((height.reduce((acc, arg) => acc += arg)) / height.length)
    console.log(mean);
    let arr = []

    for (let i = 0; i < height.length; i++) {
        if (height.length % 2 === 1) {
            if (height[i] > mean) {
                arr.push({num: height[i], index: i})
            } 
        } else {
            if (height[i] >= mean) {
                arr.push({num: height[i], index: i})
            }
        }

    }
    let b = 0
    for (let i = 0; i < arr.length; i++) {
        b =+ arr[i].num
    }

    let c = 0
    for (let i = 0; i < arr.length; i++) {
        c =+ arr[i].index
    }

    return arr.length % 2 === 0 ? b * (c - 1) : b * c
};

console.log(maxArea([1,1]));

// dawn work, but too slowly

// var maxArea = function(height) {
//     let res = 0
//     for (let i = 0; i < height.length; i++) {
//         for (let j = 0; j < height.length; j++) {
//             let num = Math.min(height[i], height[j]) * Math.abs(i - j)
//             if (num > res) {
//                 res = num
//             }
//         }
//     }
//     return res
// };
