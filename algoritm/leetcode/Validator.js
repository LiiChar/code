var isValid = function(s) {
    let obj = {'(': 0, '{': 0, '[': 0}
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == ')') {
            obj["("] += 1
        }
        if (s[i] == '[' || s[i] == ']') {
            obj["["] += 1
        }
        if (s[i] == '{' || s[i] == '}') {
            obj["{"] += 1
        }
    }

    let a = isValid(`${s.slice(s.indexOf('('), s.indexOf(')'))}`)
    // let b = isValid(`${s.slice(s.indexOf('{'), s.indexOf('}'))}`)
    // let c = isValid(`${s.slice(s.indexOf('['), s.indexOf(']'))}`)
    console.log(a);
    return ([...Object.values(obj)]).every((element, index, array) => element % 2 === 0)
};

console.log(isValid("([)]"));