Array.prototype.last = function() {
    const arr = this
    return this[this.length - 1]
};

const arr = [1,2,3];

console.log(arr.last())