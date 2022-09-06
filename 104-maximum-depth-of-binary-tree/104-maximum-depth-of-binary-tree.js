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

// if root is null, return null.
// 

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