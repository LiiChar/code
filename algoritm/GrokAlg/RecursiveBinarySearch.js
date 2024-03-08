

function recursiveBinarySearch(arr, target) {
    let min = 0
    let max = arr.length - 1

    let mid = Math.abs(Math.floor((min + max) / 2))
    
    if (target == arr[mid]) {
        return arr[mid]
    } else if (target > arr[mid]) {
        return recursiveBinarySearch(arr.slice(mid + 1, arr.length), target)
    } else if (target < arr[mid]) {
        return recursiveBinarySearch(arr.slice(0, mid - 1), target)
    }
}

console.log(recursiveBinarySearch([1, 3, 4, 11, 12, 54, 124, 345], 345));