/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     const sSorted = s.split('').sort().join('');
//     const tSorted = t.split('').sort().join('')
//         return sSorted === tSorted
// };

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false
// //define frequency tables for the strings as a hashmap.
//     const sCount = {}
//     const tCount = {}
//     const N = s.length
// //run a for loop through the characters of S and T to count how many characters
//     for(let i = 0; i < N; i++){
// //if the object sCount does not have a particular character, initialize the sCount to zero. Same with tCount.
//         if(!sCount[s[i]]) sCount[s[i]] = 0
//         if(!tCount[t[i]]) tCount[t[i]] = 0
// //increment the count of characters 
//         sCount[s[i]]++
//         tCount[t[i]]++
//     }
//     console.log(s, ":", sCount)
//     console.log(t, ":", tCount)

// //     loop through the characters in sCount. If the frequency of certain character in sCount does not match 
// // the frequency of that character in tCount, return false.
//     for(let ch in sCount) {
//         if(sCount[ch] !== tCount[ch]) return false
//     }
//     return true
// };


// sCount[ch] === tCount[ch]
// sCount[ch] - tCount[ch] === 0 -> anagram

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
//define frequency tables for the strings as a hashmap.
    const count = {}
    const N = s.length
//run a for loop through the characters of S and T to count how many characters
    for(let i = 0; i < N; i++){
//if the object sCount does not have a particular character, initialize the sCount to zero. Same with tCount.
        if(!count[s[i]]) count[s[i]] = 0
        if(!count[t[i]]) count[t[i]] = 0
//increment the count of characters 
        count[s[i]]++
        count[t[i]]--
    }

// loop through the characters. If the frequency of certain character is not Zero, return false.
    for(let ch in count) {
        if(count[ch] !== 0) return false
    }
    return true
};