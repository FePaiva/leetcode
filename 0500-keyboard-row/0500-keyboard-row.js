/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

     // Create an array to hold the words that can be typed using letters of only one row
    let oneRowWords = [];
    // Create regular expressions for each row of the American keyboard
    let row1 = /^[qwertyuiop]+$/;
    let row2 = /^[asdfghjkl]+$/;
    let row3 = /^[zxcvbnm]+$/;
    // Iterate through each word in the input array
    for (let i = 0; i < words.length; i++) {
        // Convert the word to lowercase
        let word = words[i].toLowerCase();
        // Check if the word matches any of the regular expressions
        if (row1.test(word) || row2.test(word) || row3.test(word)) {
            // If the word matches a regular expression, add it to the oneRowWords array
            oneRowWords.push(words[i]);
        }
    }
    // Return the oneRowWords array
    return oneRowWords;
}