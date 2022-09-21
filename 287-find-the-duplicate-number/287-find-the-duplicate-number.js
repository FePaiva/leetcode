/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//        return nums.find((e,i)=> nums.indexOf(e)!=i)
// };

var findDuplicate = function(nums) {
    let fast = 0;
    let slow = 0;
    
    while(true){
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if(fast === slow) {
            let pointer = 0;
            
            while(pointer !== slow){
                pointer = nums[pointer];
                slow = nums[slow];
            }
            return pointer;
        }   
    }
}