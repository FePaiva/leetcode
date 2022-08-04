/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
// 1) traverse the linked list untill l1 or l2 is not null (line 29).  
// 2) if statement to find out if l1 (line 32) or l2 (line 36) is null (we do not know if they have the same length). If not null, update to the next node (lines 34 and 38).
// 3) Find the sum of the linkedlist.Since l1 or l2 could be null, define val1 (line 30) and val2(line 31) equal to zero first, and if their are not null, val = l.val (lines 33 and 37)
// 4) To account for sum > 9 (need to carry over a number), need to define carry variable (initially zero) (line 26) and add it to the sum (line 40).
// 5) Define the carried digit to be recoreded in the result (line 42).
// 6) Set up the while loop to run when l1 or l2 is not null, or the carry value is not zero (added carry to line 29).
// 7) Turn the digits to a linked list. Define currentNode to be set as ListNode with the value digit (line 45).
// 8) Define a variable to keep track of the previousNode, initially set to empty node (line 27).
// 9) Chain the nodes together by setting the value next value of previousnode to currentNode (line 46).
// 10) Update the previousNode to currentNode for the next iteration (line 47).
// 11) Since currentNode and previousNode are constantly changing, we lose the pointer to the beginning of the linkedList. Need to define a headNode equal to the previousNode (line 28), so the headNode will remain unchanged allowing us to return headNode.next (which will give the beginning of the lilnkedList) (line 50).
    
    let carry = 0;
    let previousNode = new ListNode();
    const headNode = previousNode;
    while(l1 || l2 || carry) {
        let val1 = 0;
        let val2 = 0;
        if(l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if(l2) {
            val2 = l2.val;
            l2 = l2.next;
        }
        let sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        let digit = sum % 10;
 // console.log(`${val1} + ${val2} = ${sum}`)
 // console.log("digit:", digit)
        const currentNode = new ListNode(digit);
        previousNode.next = currentNode;
        previousNode = currentNode;
        
    }
    return headNode.next;
};