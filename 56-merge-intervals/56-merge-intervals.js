/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Time complexity: 0(NlogN) -> bc need to sort the array
// Space complexity: O(N) -> bc create a new array nonOverlap


var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let nonOverlap = [intervals[0]];
    for(let interval of intervals){
        let end1 = nonOverlap[nonOverlap.length -1][1];
        let start2 = interval[0];
        let end2 = interval[1];
        
        if(end1 >= start2){
            nonOverlap[nonOverlap.length - 1][1] = Math.max(end1, end2);
        } else {
            nonOverlap.push(interval)
        }
    }
    return nonOverlap;
};