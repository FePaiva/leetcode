/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let counter = 0
    let answer = 0
    for(let i = 0; i < s.length; i++){
        // console.log(s[i])
        if(s[i] === 'L'){
            counter++
        } else {
            counter --
        }
        if(counter === 0){
            answer++
        }
        console.log("count", counter)
    }
    return answer
};