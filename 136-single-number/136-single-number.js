/**
 * @param {number[]} nums
 * @return {number}
 */
// nums = [4,1,2,1,2]
// create a hashtable to count how many times a number appears {4:1, 1:2, 2:2}
// loop through the array to check the elements (for of loop).
// create a tally count adding 1 every time an element appears .
// loop through the key values pair of the hashtable (for in loop)
// return the element that appears one time.

// Time complexity: O(N) -> bc loop through array.
// Space compexity: O(N) -> bc add values to the hashtable.


// var singleNumber = function(nums) {
//     ht = {}
    
//     for(num of nums) {
//         ht[num] = ht[num] + 1 || 1       
//     }
    
//     for(element in ht){
//         if(ht[element] === 1){
//             return element
//         }
//     }
// };

const singleNumber = function(nums) {
    return nums.reduce((acc, curr) => acc ^ curr);
};