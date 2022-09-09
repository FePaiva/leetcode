/**
 * @param {number[]} nums
 * @return {number[]}
 */


// isolate nums[i] and find out the product of elements in each side of nums[i].
// leftCalc / rightCalc -> create 2 arrays to store the elements from both sides

// example -> nums = [1,2,3,4]
// leftCalc = [1,1,2,6] -> position [0] start with 1 bc there is nothing to the left.
                        // position [1] the # 1 is to the left. 1*1 = 1
                        // position [2] numbers 1 and 2 are on the left. 1*2 = 2
                        // position [3] numbers 1, 2 and 3 are on the left. 1*2*3 = 6

// for the right side, need to do backwards. So position [0] is the last number.
// rightCalc = [24,12,4,1] ->  position [0] start with 1 bc there is nothing to the right.
                            // position [1] the # 4 is to the right. 4*1 = 4
                            // position [2] numbers 4 and 3 are on the right. 4*3 = 12
                            // position [3] numbers 4, 3 and 2 are on the right. 4*3*2 = 24

// let answer -> create an array to store the product of leftCalc * rightCalc


var productExceptSelf = function(nums) {
    let leftCalc = [];
    let rightCalc = [];
    let answer = [];
    
// populate leftCalc
    for (let i = 0; i < nums.length; i++) {
        if(leftCalc.length === 0) {
            leftCalc.push(1);
        } else {
            leftCalc.push(leftCalc[i-1] * nums[i-1]);
        }
// console.log("left", leftCalc)
    }
// populate rightCalc
    for (let i = nums.length - 1; i > -1; i--){
        if(rightCalc.length === 0) {
            rightCalc.push(1);
        } else {
            rightCalc.unshift((rightCalc[0] * nums[i+1]))
        } 
// console.log("right", rightCalc)
    } 
// populate answer
    for (let i = 0; i < leftCalc.length; i++){
        answer.push(leftCalc[i] * rightCalc[i])
    }
    return answer
};