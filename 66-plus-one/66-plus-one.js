/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Time complexity: O(N) -> becasue the for loop has to go through the array.
// Space complexity: O(1)

// Work thourhg the array backwards, bc as we add 1, if there is a carry, we have to move to the left to add the carry.
// if(digits[i] < 9) -> condition when there will be no carry operation.
// else {digits[i] = 0} -> condition when the digit is equal to 9, convert the digit[i] to zero
// Up to this point, the for loop + if else would cover 99% of the cases. The else would turn the 9 to 0, the for loop runs againg and carry the 1 to the previous element.

// IMPORTANT:
// digits.unshift(1); return digits; -> In case there is an array [9,9]. If the for loop finishes because it never returned the digits as is, the digits array will be [0,0] instead of [1,0,0]. In that case, the unshift is adding the number 1 to the beginning of the array.

var plusOne = function(digits) {
    
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i] = digits[i] + 1;
            return digits;
        } else {
              digits[i] = 0  
        }
    }
    
    digits.unshift(1);
    return digits;
};