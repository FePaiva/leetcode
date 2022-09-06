/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// MAIN IDEA FOR SOLUTION: ACCESS EACH VALUE IN CORRECT ORDER PER LEVEL AND ADD THEM TO NEW ARRAY. COUNT HOW MANY TIMES A NEW ARRAY WAS CREATED.
// if (!root) return [] -> if root is null, return empty array.
// let queue = [root]  -> initialize a queue modeled using an array
// while (queue.length != 0) -> queue contains node elements, we will run a while loop.
// let node = queue.pop() -> within the loop, we want to remove the first element from the top of the queue. This will be the current node.
// if (node.left/right) queue.unshift(node.left/right) -> check if the node has any left or right children and add those to the end of the queue.
// let subarr = [] -> define a subarray for the level, this will reset before each new level. 
// for (let i = 0; i < n; i++) -> inside the while loop (which runs till the queue is empty), we define a for-loop. The for-loop will run for each of the elements in the queue at the end of the last level. This means we will increment “i” until it reaches the queue length.
// let node = queue.pop() -> inside the for-loop, remove a node from the top of the queue.
// subarr.push(node.val) -> add the removed node to the level subarray.
// let maximumDepth = 0 -> initialize a counter to count how many times nodes from each level were added to subarr.
// maximumDepth++ -> increment by 1 each time nodes were added to subarray.
// return Math.max(maximumDepth) -> return the largest amount of maximumDepth, which will be the last level of the binary tree.


// var maxDepth = function(root) {
//     if (!root) return []      
//     let queue = [root] 
//     let maximumDepth = 0
//     while (queue.length != 0) {
//         let subarr = []    
//         const n = queue.length
//         for (let i = 0; i < n; i++) {
//             let node = queue.pop()
//             subarr.push(node.val)
//             if (node.left) queue.unshift(node.left)
//             if (node.right) queue.unshift(node.right)      
//         }
//         maximumDepth++
//     }
//     return Math.max(maximumDepth)
// }

var maxDepth = function(root) {
    if (!root) return []
    let result = []      
    let queue = [root] 
    let maximumDepth = 0
    while (queue.length != 0) {
        let subarr = []    
        const n = queue.length
        for (let i = 0; i < n; i++) {
            let node = queue.pop()
            subarr.push(node.val)
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
            
        }
        result.push(subarr)
        maximumDepth++
    }
    return Math.max(maximumDepth)
}
