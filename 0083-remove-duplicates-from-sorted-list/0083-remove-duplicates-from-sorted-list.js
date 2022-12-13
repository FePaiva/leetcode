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
var deleteDuplicates = function(head) {
    
  let current = head;
  let prev = null;

  while (current != null) {
    // check if current element is the same as the previous element
    if (prev != null && current.val === prev.val) {
      // remove the current element from the list
      prev.next = current.next;
    } else {
      // update the previous element
      prev = current;
    }

    // move to the next element in the list
    current = current.next;
  }

  return head;

};