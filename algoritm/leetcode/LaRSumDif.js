var leftRigthDifference = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let arr1 = nums
        let arr2 = nums
        let sumRight = arr1.slice(i, nums.length)
        let sumLeft = arr2.slice(0, i)
        let bigArr = sumRight.length > sumLeft.length ? sumRight.length : sumLeft.length
        let smallerArr = sumRight.length > sumLeft.length ? sumRight.length : sumLeft.length
        for (let j = 0; j < bigArr; j++) {
            
        }
    }
    return res
};

console.log(leftRigthDifference([10, 4, 8, 3]));