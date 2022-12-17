/**
 * @param {number[][]} accounts
 * @return {number}
 */

// create variable to store the sums
// iterate through accounts - for loop
// create variable to sum
// add sum with sub array
// use Math.max to get he highest amount.


var maximumWealth = function(accounts) {
    let maxValue = 0    
    for (let i = 0; i < accounts.length; i++){
        let subArr = accounts[i];
        let sum = 0;
        for(let j = 0; j < subArr.length; j++){
            sum = sum + subArr[j];
        }
        maxValue = Math.max(maxValue, sum)
    }
    return maxValue
};