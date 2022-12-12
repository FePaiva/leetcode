/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
// Will count the length of the word
    let count = 0;
    
// Start from the end as want the last word
    for (let i = s.length - 1; i >= 0; i--) {
// Check if its empty and count is great than 0. If count is greater, then we already saw a word
        if (s[i] === " " && count > 0) 
            return count;
// If it's an empty string at the end. We want to just conitnue down instead of adding it as a letter
        if (s[i] === " ") 
            continue;
// If it isn't an empty string, it means we are on the final word. Add it to the count and move on to the next index
        count++;
    }
   
// return the length of the last word  
    return count;
    
    
};