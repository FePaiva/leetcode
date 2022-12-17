/**
 * @param {number[][]} accounts
 * @return {number}
 */




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