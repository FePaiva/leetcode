/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sorted = nums.sort((a,b) => a - b)
    
    for(let i = 0; i < nums.length; i++){
        // console.log("numsi", nums[i])
        if(nums[i] !== i) return i;
        // console.log("i", i)
    }
    return nums[nums.length - 1] + 1;
};
