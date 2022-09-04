/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time complexity = O(N) -> iterating only once.
// Space complexity = O(1) -> constant amount of space, having only 3 pointer no matter the size of the list.

// var reverseList = function(head) {
//   let previous = null;
//     let current = head;
    
//     while(current){
//         const next = current.next
//         current.next = previous
//         previous = current
//         current = next
//     }
//     return previous
// };

// current.next = previous -> this erase the link to the next node and points back to the previous.
// whit that, the previous becomes the current node.
// current = next -> even though it is pointing to the previous node, I would still need to iterate to the next node.
// const next = current.next -> creating a variable to update current to next.
// while(current) -> while loop so the iteration keeps going as long as it is true (same as current !== null).

var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    var previous = head;
    var current = head.next;
      
    previous.next = null;
    while (current !== null) {
        var next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    return previous;
}