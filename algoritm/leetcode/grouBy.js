Array.prototype.groupBy = function(fn) {
    const obj = {}
    this.forEach((elem) => {
        const key = fn((elem));
        obj[key] ||=[]
        obj[key].push(elem)
    }) 
    return obj
};

console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}

// невыполнено