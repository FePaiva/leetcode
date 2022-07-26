/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // check border cases size 1 array and empty first word)
  if (!strs[0] || strs.length ==  1) return strs[0] || ""; 
    let i = 0;
// while all words have the same character at position i, increment i
  while(strs[0][i] && strs.every(w => w[i] === strs[0][i]))
    i++;
    
      // prefix is the substring from the beginning to the last successfully checked i
  return strs[0].substr(0, i);
};