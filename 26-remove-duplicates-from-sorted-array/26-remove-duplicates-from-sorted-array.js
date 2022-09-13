/**
 * @param {number[]} nums
 * @return {number}
 */

// time complexity: O(N) -> because we are iterating over the input array only once and n is the total number of elements in that array.
// space complexity: O(1) -> because we are not using any extra space.

// 1) Return 0 if the given array is empty.
// 2) Declare two pointers, i and j, and set them to 0 and 1, respectively.
// 3) Use a while loop to check if the number with index j is equal to the number with index i.
// 4) If not, increment i by 1 and copy the value of the number with index j to the element at the index i and then increment j by 1.
// 5) If they are equal, increment j to skip the duplicate.
// 6) After the loop finishes, return the length of the unique numbers, which equals to i + 1.

var removeDuplicates = function(nums) {
   if(nums.length === 0) return 0
    let i = 0;
    let j = 1
    
    while(j < nums.length){
        if(nums[j] !== nums[i]){
            i++
            nums[i] = nums[j]
            j++
        } else
            j++
    }
    return i + 1
}
