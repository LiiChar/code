const curry = function(fn) {
    return function curried(...args) {
        if (fn.length === args.length) {
            return fn(...args);
        } else {
            return function(...newArgs) {
                return curried(...args, ...newArgs)
            }
        }
    };
};

function sum(a, b) { return a + b; }
const csum = curry(sum);
console.log(csum(1)(2));  // 3