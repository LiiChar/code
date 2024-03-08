let spawn = require("child_process").spawn, child;

child = spawn("powershell.exe", ["get-systeminfo -hdd  localhost"]);

let datas = []


function toArrayBuffer(buffer) {
    const b = Buffer.from(buffer).toString();
    return b;
}

child.stdout.on("data", function (data) {
    // datas.push(toArrayBuffer(data));
    parseStr(toArrayBuffer(data))
});
child.stderr.on("data", function (data) {
    console.log("Powershell Errors: " + data);
});
child.on("exit",function(){
    // parseStr(datas)
});
child.stdin.end();


function filterData(data) {
    if (data) {
        return data.split('')
        .filter((arg) => arg !== '-')
        .filter((arg) => arg !== '\n')
        .filter((arg) => arg !== '\r')
        .filter((arg) => arg !== '�')
        .filter((arg) => arg !== '')
        .filter((arg) => arg !== ' ')
        .filter((arg) => arg !== undefined)
        .filter((arg) => arg !== null)
        .join('');
    } else {
        return
    }
}

function redoDel(data) {
    var uniqueList=data.split(' ').filter(function(item,i,allItems){
        return i==allItems.indexOf(item);
    }).join('')
    return uniqueList
}

// function splitData(data) {
//     const elemPos = {}
//     const objData = {}
//     data = data.split(' ').filter((arg => arg !== ''));
//     data = data.filter((arg => arg !== ':localhostInformationmaybeincomplete.TheHddDevicespropertyrequiresadministratorprivileges.Closepowershellandrunasadministrator'));
//     for (let i = 0; i < data.length; i++) {
//         console.log(data[i].split(':'));
//     }
// }


function parseStr(data) {
    let filterAtLine = filterData(data);
    let redoedDel = redoDel(filterAtLine);
    // let splitedData = splitData(redoedDel);
    console.log(redoedDel); 
    // return splitedData
}




function matrix(data) {
    const matrix = []
    for (let i = 0; i < data.length; i++) {
        matrix[i] = []
        for (let j = 0; j < data.length; j++) {
            if (data[j] && data[j] != ' ' ) {
                matrix[i][j] = data[j]
            } 
        }
    }
    return matrix.join(' ')
}

