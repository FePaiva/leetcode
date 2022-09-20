/**
 * @param {string} s
 * @return {number}
 */

// if (s.length === 0) return -1 -> if empty string, return -1.
// for( let i = 0; i < s.length; i++) -> loop through the string.
// if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {return i} -> if the first index of s[i] is equal to the last index of s[i], it means that this is a unique character, so need to return i.
// return -1 -> return -1 in case the first and last index of s[i] are not equals.

var firstUniqChar = function(s) {
    if (s.length === 0) return -1;

   for( let i = 0; i < s.length; i++) {

       if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
           return i
       }
   }

    return -1

};