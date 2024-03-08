

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let con = arr[0]
        let greater = []
        let less = []   
        for(let i = 1; i < arr.length; i++) {
            if (arr[i] < con) {
                less.push(arr[i])
            } else {
                greater.push(arr[i])
            }
        }
        
        return quickSort(less).concat(con, quickSort(greater));
    }
}

console.log(quickSort([5, 4, 4, 2, 7, 8, 2, 3 ,6, 132, 53 ,43 ,5 ,64]));