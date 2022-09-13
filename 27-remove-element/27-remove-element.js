/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//    let i = 0
//     for(let j = 0; j < nums.length; j++){
//       // console.log(nums[j])
//       // Swap numbers if current number is not equal to val
//       if(nums[j] !== val){
//           nums[i] = nums[j];
//           // Index where numbers that are equal to val begin in the array
//           i++
//       }
//     } return i
// };

var removeElement = function(nums, val) {
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val) 
            nums.splice(i, 1);
    }   
    return nums.length;
}
