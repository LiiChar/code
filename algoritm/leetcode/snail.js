const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];

Array.prototype.snail = function(rowsCount, colsCount) {
    const ans = []
    let numRow = 0
    let numCount = 0
    const arr = this;
    const ot = arr.length / colsCount
    for (let i = 0; i < rowsCount; i++) {
        const col = []
        for (let j = 0; j < colsCount; j++) {
            col.push(arr[numRow ])
            numRow = numRow + ot
        }
        numCount++
        numRow = numCount
        ans.push(col)
    }
    return ans
}

console.log(arr.snail(5,4));