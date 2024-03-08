

function smaller(arr) {
    let large = arr[0]
    if (arr.length == 0) {
        return 0
    } else {
        return large > smaller(arr.slice(1)) ? large : smaller(arr.slice(1))
    }
}

console.log(smaller([1, 2, ,35311114 ,4 ,5 ,6, 7, 8, 43242]));