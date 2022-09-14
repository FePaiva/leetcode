/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// loop through the array’s values, looking for the target. If we find either the target, or the first occurrence of an integer higher than the target one (which indicates that that’s where the target would be located), we return the index.

var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i
        }
    }
    return nums.length
};




