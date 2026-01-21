/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   let result = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = result.length - 1;
  while (left < right) {
    if (result[left] !== result[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};