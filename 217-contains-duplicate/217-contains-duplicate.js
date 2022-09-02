/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time complexity = O(N) -> Go throug the array once.
// Space complexity = O(N) -> Memory is taking space, and may need to go through the entire array to find solution.

// var containsDuplicate = function(nums) {
//     let memory = {}
//     for(let i = 0; i < nums.length; i++){
//         if(memory[nums[i]] === undefined){
//             memory[nums[i]] = i
//         } else {
//             return true;
//         }
//     }
//     return false;
// };

// Time complexity = O(N) -> Go throug the array once.
// Space complexity = O(NlogN) -> Sort the array so the duplicates are next to each other.
var containsDuplicate = function(nums) {
    nums.sort((a,b) => {return b-a});
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i-1] === nums[i]){
            return true
        }
    }
    return false
}