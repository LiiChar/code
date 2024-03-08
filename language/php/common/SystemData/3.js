
import fs from 'fs'

function fileHandler(){

    fs.readFile('1.txt', 'utf8', (err, data) => {
        if(err) throw err;
        let b = data.split('\n').map((arg) => {
            return arg.replace("\'", '\"')
        })
        let res = createObj(parseData(b));
        console.log(res);
    });

}

function createObj(a) {
    let res = {}
    for (let i = 0; i < a.length; i++) {
        let findIndex;
        for (let j = 0; j < a[i].length; j++) {
            if( a[i][j] === ':') {
                findIndex = j
            }
        }
        res[a[i].slice(0,findIndex).join('')] = a[i].slice(findIndex,a.length).join('')
    }
    return res
}

function parseData(a) {
    let b = []
    for (let i = 0; i < a.length; i++) {
        let arr =[]
        for (let j = 0; j < a[i].length; j++) {
            if(a[i][j] && a[i][j] !== ' ' && a[i][j] !== '\r' && a[i][j] !== '[' && a[i][j] !== ']' && a[i][j] !== '' && a[i][j] !== '(' && a[i][j] !== ')') {
                arr.push(a[i][j])
            }
        }
        b.push(arr)
    }
    return b
}

fileHandler()