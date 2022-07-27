/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let int = 0;
    
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i])
        const currentRoman = roman[s[i]];
        const nextRoman = roman[s[i+1]];
        
        if (currentRoman < nextRoman) {
            int += nextRoman - currentRoman
            i++
        } else {
            int += currentRoman
        }     
    } 
    return int;
};