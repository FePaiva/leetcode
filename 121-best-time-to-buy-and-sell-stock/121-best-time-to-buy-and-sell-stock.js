/**
 * @param {number[]} prices
 * @return {number}
 */


// space complexity = O(1) 
// time complexity = O(N) => Iterating through the array once.

var maxProfit = function(prices) {

//buy price
    let buyPrice = prices[0];
// track profit
    let profit = 0;
    
    for (let i = 0; i < prices.length - 1; i++){
        let checkProfit = prices[i+1] - prices[i]
        if(checkProfit > 0){
            if(prices[i] < buyPrice){
                buyPrice = prices[i];
            }
            if(prices[i+1] - buyPrice > profit){
                profit = prices[i+1] - buyPrice;
            }
        }
    }
    return profit
}