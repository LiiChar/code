var MinStack = function() {
    this.stack = []
    this.minValue = Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (val < this.minValue) this.minValue = val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack[this.stack.length - 1] === this.minValue) this.minValue = Infinity
    this.stack.length = this.stack.length - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValue
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let obj = new MinStack();
obj.push(2)
obj.push(4)
obj.push(-2)
obj.push(1)

console.log(obj.minValue);

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */