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


//   const maxProfit = (prices, profit = 0) => {

//   const sellPrice = prices.pop();
// //   sellPrice = 4 / 6 / 3 / 5 / 1
//   const currProfit = sellPrice - Math.min(...prices);
// // currProfit = (4-1) = 3 / (6-1) = 5 / (3-1) = 2 / (5-1) = 4 /
//   if(prices.length < 1) {
//     return profit;
//   }

//   if(currProfit > profit) {
//     profit = currProfit; 
// //   3 / 5 
//   }

//   return maxProfit(prices, profit);

// }

