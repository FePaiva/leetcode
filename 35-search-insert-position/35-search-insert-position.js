/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// loop through the array’s values, looking for the target. If we find either the target, or the first occurrence of an integer higher than the target one (which indicates that that’s where the target would be located), we return the index.

// var searchInsert = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] >= target){
//             return i
//         }
//     }
//     return nums.length
// };

// Binary Search -> search will half the available array, look for which side’s range of values contains the target (or integers higher than it), and then discards the other side, before repeating the process. This means we keep cutting down the array, checking as little data as possible each time, until we’re left either with the target integer, or the next highest number from it, giving us our answer.


var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};

