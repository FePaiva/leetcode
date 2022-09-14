/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 1) let numsMap = new Map() -> create a Map
// 2) for (let i = 0; i < nums.length; i++) -> loop over every element in the array
// 3) let num = nums[i] -> create variable to capture every element we are on
// 4) if(numsMap.has(num) && i - numsMap.get(num) <= k) -> check if the Map contains the number we are om, and if the distance is <= k . This formula will also replace the indx (i) of the previous duplicate number by the index of the number we are on.
// 5) else {numsMap.set(num, i)} -> in case the Map does not contain the num we are on, need to record the num and its index.



var containsNearbyDuplicate = function(nums, k) {
let numsMap = new Map();
    
    for (let i = 0; i < nums.length; i++){
        let num = nums[i]
        
        if(numsMap.has(num) && i - numsMap.get(num) <= k){
            return true
        } else {
            numsMap.set(num, i)
        }
    }
    return false
}
