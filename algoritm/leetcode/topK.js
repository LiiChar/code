/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    nums.forEach((el) => {
        map[el] ? map[el]++ : map[el] = 1 
    })
    console.log(Object.entries(map).sort((a, b) => b[1] - a[1]));
    return Object.entries(map).sort((a, b) => b[1] - a[1]).map((el) => el[0]).slice(0, k )
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));