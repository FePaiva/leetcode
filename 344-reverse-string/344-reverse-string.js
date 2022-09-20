/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     return s.reverse()
// };


// using 2 pointers.
// set first and last pointers
// while first <= last pointer, create temporary and assign to the first pointer (s[first])
// swap first and last pointers
// assign the last pointer to temp
// keep looping through the other elements until it is over.

var reverseString = function(s) {
    let first = 0;
    let last = s.length - 1;
    
    while(first <= last) {
        let temp = s[first]
        s[first] = s[last]
        s[last] = temp
        first++
        last--
    }
    return s
};