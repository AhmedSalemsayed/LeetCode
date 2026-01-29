/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let obj = {};
  for (let char of s) {
    !obj[char] ? (obj[char] = 1) : (obj[char] += 1);
  }
  for (let char of t) {
    if (!obj[char]) {
      return false;
    }
    obj[char] -= 1;
  }
  for (let key in obj) {
    if (obj[key] !== 0) {
      return false;
    }
  }
  return true;  
};