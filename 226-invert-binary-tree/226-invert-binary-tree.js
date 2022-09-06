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
 * @return {TreeNode}
 */

// if root is null, return null
// create temp variable and assign it to root left.
// change root.left to root.right
// change root.right to root.left
// call invertTree(root.left)
// call invertTree(root.right)
// return root

// Time complexity = O(N) -> bc loop through each node
// Space complexity = O(N) -> bc we create a call stack (create a new function to call it)

var invertTree = function(root) {
    if(root === null) return null        
    let side = root.left;
    root.left = root.right;
    root.right = side;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root
}