/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {};

        for (let i = 0; i < nums.length; i++){
          obj[nums[i]] = i
        }

        for (let i = 0; i < nums.length; i++){
          let complement = target - nums[i];
          
          if(obj[complement] !== undefined && obj[complement] !== i){
            return [i , obj[complement]]
          }
        }
        return [];
};