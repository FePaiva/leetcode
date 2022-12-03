/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums3 = []
    for(let i = 0; i < nums1.length; i++){
        console.log(nums1[i], nums2[i])
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] === nums2[j]){
                nums3.push(nums1[i])
            }
        }
    }
    const uniqueNums = [...new Set(nums3)]
    return uniqueNums
    
};