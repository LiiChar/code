var compose = function(functions) {
    return function(n) {
        return functions.reverse().reduce((arr, func) => func(arr), n)
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9