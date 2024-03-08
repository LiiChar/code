
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue

        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            const sum = nums[start] + nums[end] + nums[i]
            if (sum > 0) {
                end--
            } else if (sum < 0) {
                start++
            } else {
                res.push([nums[i], nums[start], nums[end]])
                start++
                while (nums[start] == nums[start - 1] && start < end) {
                    start++
                }
            }
        }


    }

    return res
};

console.log(threeSum([0, 0, 0, 0]));