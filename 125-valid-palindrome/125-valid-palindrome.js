/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let sToString = s.split("");
    let newS = []
    let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'
    
    for(let i of sToString){
        if(alphabet.includes(i.toLowerCase())){
            newS.push(i.toLowerCase())
        }
    }
    return(newS.join('') === newS.reverse().join(''))
}
