/**
 * @param {string} s
 * @return {string}
 */

// 1. create splitArray by splitting s.
// 2. create an orderedSentence.
// 3. loop through splitArray
// 4. get index value by slicing the current word by -1, then minus 1.
// 5. update orderedSentence [idx] to current word slice (0, -1).
// 6. return orderedSentence joined as a string

// time complexity: O(N) -> since I have to iterate a few times.
// space complexity: O(N) -> creating space a few times.

var sortSentence = function(s) {
    let splitArray = s.split(" ");
    const orderedSentence = []
    // console.log(splitArray)
    for(let i = 0; i < splitArray.length; i++){
        const idx = splitArray[i].slice(-1) -1
        // console.log("idx", idx)
        orderedSentence[idx] = splitArray[i].slice(0, -1)
        // console.log("ordered", orderedSentence)
    }
    return orderedSentence.join(' ')
};