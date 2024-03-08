
function smallest(arr) {
    let min = arr[0];
    let min_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            min_index = i
        }
    }
    return min_index
}

function sortShoose(arr) {
    let leng = arr.length
    let sortArr = []

    for (let i = 0; i < leng; i++) {
        let min = smallest(arr)
        sortArr.push(arr[min]) 
        arr.splice(min, 1)
    }

    return sortArr
}

console.log(sortShoose([5, 1, 7, 3, 19, 34, 3, 13, 243, 12, 654, 12, 634, 12, 76, 43, 65, 434]));