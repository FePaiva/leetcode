/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let output = [1,2]
    
//     if(n < 3) {
//         return output[n - 1]
//     }
//     for (let i = 2; i < n; i++){
//         output.push(output[i - 2] + output[i - 1])
//     }
//     return output[n - 1]
// };

// Time complexity = O(N) -> bc we have to iterate once.
// Space complexity = O(N) -> which is the size of the memoization array.
var climbStairs = function(n) {
 const memo = [1,1,2];
    
    for(let i = 3; i <= n; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n]
}

// in order to climb N steps, we add the results of n-1 and n-2 steps.
// n=1 -> 1 -> 1 way to climb
// n=2 -> 11,2 -> 2 ways to climb
// n=3 -> 111,21,12 -> 3 ways to climb (result of n-2 + n-1)
// n=4 -> 1111, 22, 211, 112, 121 -> 5 ways to climb (result of n-3 + n-2)
// n=5 -> 11111, 221, 122, 212, 2111, 1211, 1121, 1112 -> 8 ways to climb (result of n-4 + n-3)

// memo[i] = memo[i-1] + memo[i-2] 
// inside the loop, add the first 2 values to ge the value.
//  const memo = [1,1,2] -> the initial value is 1,1,2. Do not need to care about the first "1" because 
// N is supposed to be greater than 1.