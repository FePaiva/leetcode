/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// Brute force by doing a triple for loop.
// i = 0, j = i + 1, k = j + 1 -> to avoid the same number is considered more than once.

// var threeSum = function(nums) {
//     nums.sort((a,b) => a-b);
//     let newArr = [];
//     for (let i = 0; i < nums.length; i++){
//         if(i > 0 && nums[i] == nums[i - 1]) continue;
//         for (let j = i+1; j < nums.length; j++){
//             if(j > i + 1 && nums[j] == nums[j - 1]) continue;
//             for (let k = j+1; k < nums.length; k++){
//                 if(k > j + 1 && nums[k] == nums[k - 1]) continue;
//                 if(nums[i] + nums[j] + nums[k] == 0){
//                     newArr.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     } 
//         return newArr;
// };


// trying to find nums[i] + nums[j] + nums[k] == 0
// fixing [i] = 0, [j] and [k] are free to change so long the total sum is ZERO.
// whit that, we the inner for loops need to find nums[j] + nums[k] == 0 - nums[i]
// need to define a target for the aforementioned calculation (same as 2Sum problem)

// 1) nums.sort((a,b) => a-b) -> sort the array to avoid duplicating triplets
// 2) let newArr = [] -> create empty array to store the results
// 3) for (let i = 0; i < nums.length; i++) -> initiate the outer for loop fixing i to zero
// 4) if(i > 0 && nums[i] == nums[i - 1]) continue -> add condition to skip duplicates
// 5) let target = 0 - nums[i] -> target result for the inner loops -> nums[j] + nums[k]
// 6) let left = i + 1 -> define where the subarray you want to do the calc starts
// 7) let right = nums.length - 1 -> define where the subarray you want to do the calc ends.
// 8) while(right > left) -> while loop to run when right is greater than left. When right becomes smaller than left, it indicates that there are less than 2 elements in the array.
// 9) const sum = nums[left] + nums[right] -> define what sum is so it can be compared to target.
// IMPORTANT: THERE ARE ONLE 3 POSSIBLE RESULTS TO THIS COMPARISON -> SUM > TARGET, SUM < TARGET, SUM = TARGET
// 10) if(sum > target){right--} -> in this case, we need to eliminate "right" element used in the sum calculation and go to the next (right--).
// 11) else if (sum < target) {left++} -> in this case, we need to eliminate "left" element used in the sum calculation and go to the next (left++)
// 12) else {newArr.push([nums[i], nums[left], nums[right]]) -> when sum = target, need to record the triplet.
// 13) while(nums[left] === nums[left +1]) left++ -> incrementing if there are duplicates.
// 14) while(nums[right] === nums[right -1]) right-- -> decrementing if there are duplicates
// 15) left++;right-- -> with no duplicates, increment / decrement left and right to find other solutions.
// 16) return newArr -> returning the triplets.

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    // console.log(nums)
    let newArr = [];
    for (let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        let target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while(right > left) {
            const sum = nums[left] + nums[right];
            if(sum > target){
                right--;
            } else if (sum < target) {
                left++;
            } else {
                newArr.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left +1]) left++;
                while(nums[right] === nums[right -1]) right--;
                left++;
                right--;
            }
        }
    }
    return newArr
}