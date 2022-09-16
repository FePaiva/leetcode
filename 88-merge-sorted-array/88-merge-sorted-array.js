/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Time complexity: O(M+N) -> have to go over the arrays
// Space complexity: O(1) -> not creating anything new.

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// create pointers. Set the first pointer to m - 1 (at index 2) , Second pointer to n - 1 (at index 2), and the i at the end of nums1.
// do a merge checking if the first value (3) is greater or equal to the second value (6). If not, replace i (0) by the second value(6) -> nums1 = [1,2,3,0,0,6]  nums2 = [2,5,_].
// Decrement second value index, and decrement i index.
// The loop will do the comparison again. If the first value (3) is greater or equal to the second value (5). If not, replace i (0) by the second value(5) -> nums1 = [1,2,3,0,5,6]  nums2 = [2,_,_].
// Decrement second value index, and decrement i index.
// The loop will do the comparison again. If the first value (3) is greater or equal to the second value (2). This time, replace i (0) by the first value(3) -> nums1 = [1,2,3,3,5,6]  nums2 = [2,_,_].
// Decrement first value index, and decrement i index.
// The loop will do the comparison again. If the first value (2) is greater or equal to the second value (2). This time, replace i (3) by the second value(2) -> nums1 = [1,2,2,3,5,6]  nums2 = [_,_,_].
// Decrement second value index, and decrement i index.
// Since the second value is out of range (decrement times = n), means that there are no remaining numbers to be added to nums1.




var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n -1;
    
    while(second >= 0){
            let firstVal = nums1[first]
            let secondVal = nums2[second]
            
        if (firstVal > secondVal){    
            nums1[i] = firstVal;
            i--;
            first--;
        } else {
            nums1[i] = secondVal;
            i--;
            second--;
        }
    }
};




