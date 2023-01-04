/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    while(num !==0){
        if(num % 2 === 0){
            num = num/2
        } else {
            num = num - 1
        }
        steps++
    }
    return steps
};


// The time complexity -> O(n), where n is the number of steps required to reach 0. This is because the loop will run for a maximum of n iterations, and each iteration has a constant time complexity (O(1)).

// The space complexity -> O(1), because the only variables that are being used are num and steps, which have a constant size regardless of the input size.