/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let counter = 0
    for(let i = 0; i < items.length; i++){
        // console.log("type", items[i][0])
        if(ruleKey == 'type' && ruleValue == items[i][0]){
            counter++
        } else if(ruleKey == 'color' && ruleValue == items[i][1]){
            counter++
        }else if (ruleKey == 'name' && ruleValue == items[i][2]){
            counter++
        }
    }
    return counter
};