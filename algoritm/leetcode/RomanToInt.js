

var romanToInt = function(c) {
    c = c.split('')
    let one = 'I'
    let five = 'V'
    let ten = 'X'
    let fifty = 'L'
    let houndred = 'C'
    let fiveHoundred = 'D'
    let oneThouthen = 'M'
    let result = 0
    
    for (let i = 0; i < c.length; i++){
        console.log(c[i], one);
        if (c[i] == one) {
            result += 1
        } else if (c[i] == five) {
            result += 5
        } else if (c[i] == ten) {
            result += 10
        } else if (c[i] == fifty) {
            result += 50
        } else if (c[i] == houndred) {
            result += 100
        } else if (c[i] == fiveHoundred) {
            result += 500
        } else if (c[i] == oneThouthen) {

        }
    }
    return result
};

console.log(romanToInt("MCMXCIV")); 