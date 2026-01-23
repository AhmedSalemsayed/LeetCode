/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
    const N = nums.length;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < N - 2; i++) {
        if(nums[i] === nums[i - 1] && i > 0) continue;
        let start = i + 1;
        let end = N - 1;
        while(start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            if (sum > 0) end--;
            else if (sum < 0) start++;
            else {
                result.push([nums[i], nums[start], nums[end]]);
                while(start < end && nums[start] === nums[start + 1]) start++;
                while(start < end && nums[end - 1] === nums[end]) end--;

                start++;
                end--; 
            }
        }
    }

    return result;
};