var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let firsElem = nums[i]
        delete nums[i]
        secondElem = nums.indexOf(target - firsElem) 
        if (secondElem !== -1) {
            return [i, secondElem]
        }
    }
};

console.log(twoSum([3,2,4], 6)); 