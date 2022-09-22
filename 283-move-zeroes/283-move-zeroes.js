/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
    
//     let index = 0
    
//     for(let i = 0; i < nums.length; i++){
//         console.log(nums[i])
//         if(nums[i] !== 0){
//              nums[index] = nums[i]
//              index +=1
//         }
//     }
    
//     for(let i = index; i < nums.length; i++){
//         nums[i] = 0
//         }
    
// };


var moveZeroes = function(nums) {
    let left = 0
    
    for(let i = 0; i < nums.length; i++){
        if (nums[i] !== 0) {
            let temp = nums[left]
            nums[left] = nums[i]
            nums[i] = temp
            left++
        }   
    }
    
    
}

