/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// time complexity = O(N^2) -> Im going through the array once, then looping through its elements one more time. 
// space complexity = O(1) -> Constant bc Im not alocating any extra memory to solve the problem.

// var twoSum = function(nums, target) {    
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] == target) {
//                 return [i,j]
//             }
//         }    
//     }
// };

// time complexity = O(N) -> Linear
// space complexity = O(N) -> Linear
// Hashmap traverse the array once, checking the elements and storing then to compare with its matching pair.

var twoSum = function(nums, target) {
    var previousValues = {}
    for (let i = 0; i < nums.length; i++){
        var currentValue = nums[i];
        var neededValue = target - currentValue;
        if(previousValues[neededValue] !== undefined){
            return [previousValues[neededValue], i];
        } else {
            previousValues[currentValue] = i;
        }
    }
}
