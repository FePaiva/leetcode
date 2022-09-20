/**
 * @param {string} s
 * @return {string}
 */

// let vowels = {} -> create an empty hash table
// for(const char of "aeiouAEIOU"){vowels[char] = true} -> fill the hash table with vowels
// let sString = s.split('') -> strings are imutable. Need to convert to array before changing the vowels.
// let left = 0; let right = s.length - 1 -> using 2 pointers, set "left" to the very fist character of the string, and "right" to the very last.
// while(left < right) -> keep the left pointer always smaller (to the left) than the right pointer.
// while(left < right && (s[left] in vowels === false)){left +=1} -> move the left pointer to the right if the left pointer is not a vowel.
// while(left < right && (s[right] in vowels === false)){right -=1} -> move the right pointer to the left if the right pointer is not a vowel.
// function swap(arr, i, j) -> create a helper function for the swapping, having an array, i and j as paramethers (which will be s, left, right).
// let temp = arr[i] -> create a variable to store i temporarilly, so the swap can be done. Otherwise arr[i] and arr[j] would be always equals.
// swap(characters, left, right); left +=1; right -=1 -> add the helper function passing the paramenthers. Increase left and decrease right once the swap happens.
// return characters.join('') -> convert characters back to string and return it.

// Time complexity: O(N) -> N is the number of characters iin string. Have to loop through them.
// Space complexity: O(N) -> An array was created for the input string.

var reverseVowels = function(s) {
    
    if(s.length === 1 || s === null ) {
        return s;
    }
    
    let vowels = {};
    for(const char of "aeiouAEIOU"){
        vowels[char] = true;
        // console.log("vowels:", vowels)
    }
    
    let characters = s.split("");
    // console.log("characters:", characters)
    
    let left = 0;
    let right = s.length - 1;
    
    while(left < right){
        while(left < right && !(s[left] in vowels)){
            left += 1;
        }
            while(left < right && (s[right] in vowels === false)){
                right -=1;
        }
            
            swap(characters, left, right)
            left +=1
            right -=1
    }
        return characters.join('')
};
    
    function swap(arr, i, j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }