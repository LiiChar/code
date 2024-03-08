

let arr = [
    { l: '1', s: 8, f: 10, visited: false },
    { l: '1', s: 9, f: 11, visited: false },
    { l: '1', s: 11, f: 13, visited: false },
    { l: '1', s: 10, f: 12, visited: false },
    { l: '1', s: 13, f: 15, visited: false },
    { l: '1', s: 12, f: 14, visited: false },
]

function searchShort(started) {
    let res = []
    let min = 100
    let start = started
    while (started < 14) {
        for (let i = 0; i < arr.length; i++) {
            min = min < arr[i].f && !arr[i].visited? min : arr[i].f
            if (arr.length === i) {
                arr[i].visited = true
            }
        }
        start = min
        console.log(arr);
        res.push(start)
    }
    return res
}

console.log(searchShort(0)); 
