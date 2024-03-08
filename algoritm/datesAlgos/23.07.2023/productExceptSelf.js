var productExceptSelf = function (nums) {
  let num = 1;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    num =  num * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] >= 1 ? res.push(Math.abs(num / nums[i])) : res.push(0);
  }

  return res;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
