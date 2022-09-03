/**
 * @param {number[]} nums
 * @return {number}
 */

// Time complexity = O(N) -> going through the array once and math.max is not doing much.
// Space complexity = O(1) -> using but not growing the variables.


var maxSubArray = function(nums) {
// if array has 1 number.  
    if(nums.length === 1) return nums[0];
    
// track maxValue
    let maxValue = nums[0]
// track accumulated value
    let accValue = nums[0];
    
// itarate through each number
    for (let i = 1; i < nums.length; i++){

// to find out what number is bigger -> current number (nums[i]) or the sum of 
// previous number and current number (accValue + nums[i])
        let calc = Math.max(nums[i], accValue + nums[i]);     
        if(calc > maxValue) maxValue = calc;
        
        accValue = calc
    }
    return maxValue;
};