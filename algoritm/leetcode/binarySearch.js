var search = function(nums, target, start=0, stop=(nums.length-1)) {
    let mid = Math.floor(((stop - start) / 2) + start);
    if (nums[mid] == target) {
        return mid
    }else if (stop - start === 0) {
        return -1
    }else if (target > nums[mid]) {
        return search(nums, target, mid+1, stop ) 
    } else if (target < nums[mid]) {
        return search(nums, target,start, mid)
    }
};

console.log(search([-1,0,3,5,9,12], 0));