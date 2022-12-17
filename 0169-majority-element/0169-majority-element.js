/**
 * @param {number[]} nums
 * @return {number}
 */

// create a hashmap using reduce
// initial value is {}
// check the values of array. 
// if the value is not already in acc, put key value pair in object
// if value is in acc, increment the value of it
// get the key with biggest value -> return Object.keys(hashmap).reduce((a,b) => hashmap[a] > hashmap[b] ? a : b)
// in case there are more than 1 majority element, adjust the second reduce funciton to:
//         return Object.keys(hashmap).filter(x => {
//              return hashmap[x] == Math.max.apply(null, 
//              Object.values(hashmap))
//         })


var majorityElement = function(nums) {

    let hashmap = nums.reduce((acc, val) => {
        acc[val] = (acc[val] || 0 ) + 1
        return acc
    }, {})
    return Object.keys(hashmap).reduce((a,b) => hashmap[a] > hashmap[b] ? a : b)
};