
var findDifference = function (nums1, nums2) {
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    const res1 = [];
    const res2 = [];

    for (let i = 0; i < nums1.length; i++) {
        res1.push(nums1[i])
    }

    for (let j = 0; j < nums2.length; j++) {
        if (res1.includes(nums2[j])) {
            res1.splice(res1.indexOf(nums2[j]), 1)
            continue
        }
        res2.push(nums2[j])
    }

    return [res1, res2]
};

console.log(findDifference([1,2,3,3], [1,1,2,2]));