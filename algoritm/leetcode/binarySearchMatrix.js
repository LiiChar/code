var searchMatrix = function (matrix, target) {
    let start = 0,
        stop = matrix.length - 1,
        arr;
    while (start <= stop) {
        let mid = Math.floor(((stop - start) / 2) + start)
        if (matrix[mid][0] <= target && target <= matrix[mid].at(-1)) {
            arr = matrix[mid]
            start = 0
            stop = matrix[mid].length - 1
            break
        } else if (stop - start == 0) {
            return false
        } else if (matrix[mid][0] < target) {
            start++
        } else if (matrix[mid][0] > target) {
            stop--
        }
    }

    while (start <= stop) {
        let mid = Math.floor(((stop - start) / 2) + start)
        if (arr[mid] == target) {
            return true
        } else if (arr[mid] < target) {
            start++
        } else if (arr[mid] > target) {
            stop--
        }
    }
    return false
};

console.log(searchMatrix([[1]], 1));