/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
for(let i = arr.length - 1; i >= 0; i--){
    //console.log('arr', arr[i])
    
    if(arr[i] === 0){
        for(let j = arr.length -1; j > i; j--){
            // console.log('arr[j]', arr[j])
            // console.log('arr[j-1]', arr[j-1])
            arr[j] = arr[j-1]
        }
    }
}
    
    
};