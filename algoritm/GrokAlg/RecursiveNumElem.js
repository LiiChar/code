

function numberElem(arr) {
    if (arr.length == 1) {
        return 0
    } else {
        return 1 + numberElem(arr.slice(1))
    }
}

console.log(numberElem([1, 2, ,3 ,4 ,6, 7, 8, 5, 3, 2, 1])) 