/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let output = [1,2]
    
    if(n < 3) {
        return output[n - 1]
    }
    for (let i = 2; i < n; i++){
        output.push(output[i - 2] + output[i - 1])
    }
    return output[n - 1]
};