
var intersection = function (nums1, nums2) {
    const obj = new Map();

    for (let i = 0; i < nums1.length; i++) {
        obj.set(nums1[i], 1);
    }

    for (let j = 0; j < nums2.length; j++) {
        if (obj.has(nums2[j])) {
            obj.set(nums2[j], obj.get(nums2[j]) + 1)
        }
    }

    const map = Object.fromEntries(obj.entries())

    return Object.keys(map).filter((el) => map[el] > 1)
};

console.log(intersection([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]));