/**
 * @param {string} s
 * @return {boolean}
 */

// time complexity = 0(N) -> Linear as I need to loop through all characters.
// space complexity = 0(N) -> Supposing the string is made up of openning brackets, the stack will have the same size of string.

var isValid = function(s) {
 const hashMap = { '(':')', '{':'}', '[':']' }
 const stack = []
 
 for (let ch of s){
     if(hashMap[ch]){
// ch is an opening bracket
         stack.push(hashMap[ch])
     } else if (stack.length > 0 && stack[stack.length -1] === ch) {
// ch is a closing bracket and top of stack matches
         stack.pop()
     } else {
// ch is a closing bracket and top of the stack does not match
         return false
     }
 }
    return stack.length === 0 
};