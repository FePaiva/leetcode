/**
 * @param {number[]} nums
 * @return {number}
 */


// nums = [1,3,4,2,2]
// index : indeces -> 0 : 1 , 1 : 3 , 2 : 4 , 3 : 2 , 4 : 2 -> see this array as a graph
// 1 -> 3 -> 2 -> 4 -> 2 
//                ^----| this means that 2 is pointing back to 4, starting a cycle.
// For any value there, needs to return its index.

// let fast = 0; let slow = 0; -> setup fast and slow pointers.
// while(true) -> start a while loop for true
// fast = nums[nums[fast]]; slow = nums[slow]; -> in the while loop, increment fast 2 times, and slow one time
// if(fast === slow) -> that indicates where the cycle is
// let pointer = 0; -> setup a a third pointer
// fast and slow are in the correct postion (if(fast === slow)), so now need to increment slow (could be fast as well) along with pointer, and when slow and pointer intercept, the node where they are coming from is the answer (the index).
// while(pointer !== slow){pointer = nums[pointer];slow = nums[slow]; -> while pointer is not intercepting slow, need to increment pointer and slow.
// return pointer; -> when pointer and slow intercept, return the value that was right before they meet (slow or pointer).

// Time complexity: O(N) -> becasue iterating though the array once.
// Space complexity: O(1) -> I am creating space (fast / slow), but that is not increasing / decrrasing relative to the input.

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
            return slow;
        }   
    }
}