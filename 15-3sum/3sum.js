/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // this check to avoid checking adajacent duplicates again while iterating
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[i] === nums[i - 1]) left++;

      let tempSum = nums[i] + nums[left] + nums[right];

      if (tempSum < 0) {
        left++;
      } else if (tempSum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        // to check if left pointer is at duplicate number after we found a valid triplet
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
};