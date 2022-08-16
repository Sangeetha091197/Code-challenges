function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  return result;
}

twoSum([7, 2, 11, 15], 9);
