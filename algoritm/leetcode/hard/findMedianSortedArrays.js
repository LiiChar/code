function findMedianSortedArrays(nums1, nums2) {
  let nums = [];

  const merge = (num1, num2) => {
    while (num1.length && num2.length) {
      if (num1[0] < num2[0]) {
        nums.push(num1.shift());
      } else {
        nums.push(num2.shift());
      }
    }

    nums = [...nums, ...num1, ...num2];
    return nums;
  };

  merge(nums1, nums2);
  
  if (nums.length % 2 === 1) return nums[nums.lenght / 2];
  else {
    const left = nums[0];
    const right = nums[nums.length - 1];
    return (left + right) / 2;
  }
}

console.log(findMedianSortedArrays([1, 3, 4, 10], [2, 50]));
