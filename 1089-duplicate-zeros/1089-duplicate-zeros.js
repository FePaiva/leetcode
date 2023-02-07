/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// var duplicateZeros = function(arr) {
    
// for(let i = arr.length - 1; i >= 0; i--){
//     //console.log('arr', arr[i])
    
//     if(arr[i] === 0){
//         for(let j = arr.length -1; j > i; j--){
//             // console.log('arr[j]', arr[j])
//             // console.log('arr[j-1]', arr[j-1])
//             arr[j] = arr[j-1]
//         }
//     }
// }
    
    
// };

var duplicateZeros = function(arr) {
   
    for (let i = 0; i < arr.length; i++) {   
//check if arr element is 0
        if (arr[i] == 0) {       
//insert element to arr on i position   
            arr.splice(i,0,0);    
//remove last arr element
            arr.pop();      
//increase i to jump over 0
            i++                     
        }

    }
    
};