var isPalindrome = function(x) {
    x = String(x)
    x = x.split('')

    if (x.length % 2 === 0) {
        let y = x.splice(0, x.length / 2)
        let c = x.reverse()
        if (y.length === c.length && y.every((value, index) => value === c[index])) {
            return true
        } else {
            return false
        }
    } else {
        let y = x.slice(0, x.length / 2)
        let c = (x.slice(x.length / 2 + 1, x.length)).reverse()
        if (y.length === c.length && y.every((value, index) => value === c[index])) {
            return true
        } else {
            return false
        }
    }
};

console.log(isPalindrome(212121121212));