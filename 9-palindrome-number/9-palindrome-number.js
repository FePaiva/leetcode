/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let int = x.toString().split('');
    let intReverse = int.reverse();
    let intJoin = intReverse.join('');
    if (parseInt(intJoin) === x){
        return true
    } else {
        return false
    }
};