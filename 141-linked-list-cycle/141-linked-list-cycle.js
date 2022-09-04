/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    
    let head1 = head
    let head2 = head
    
    while(head1.next && head2.next && head2.next.next){
        head1 = head1.next
        head2 = head2.next.next
        if(head1 === head2) return true
    }
    return false
};

// head1 and head2 -> setup 2 heads and start the iteration.
// head1.next, head2.next and head2.nex.next -> the iteration of 1 head will be faster than the other. Adding next.next so the loop does not point to undefined if the list ends in an od number.
// head1 === head2 -> identify if the faster head meets the slower head, and return true if they meet (there is a cycle)