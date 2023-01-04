/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Create a hash map to count the number of occurrences of each letter
    let letterCounts = {};
    for (let i = 0; i < magazine.length; i++) {
        let letter = magazine[i];
        if (letterCounts[letter]) {
            letterCounts[letter]++;
        } else {
            letterCounts[letter] = 1;
        }
    }

    // Iterate over the ransom note and check if the magazine has enough of each letter
    for (let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i];
        if (!letterCounts[letter] || letterCounts[letter] === 0) {
            return false;
        } else {
            letterCounts[letter]--;
        }
    }

    return true;
};