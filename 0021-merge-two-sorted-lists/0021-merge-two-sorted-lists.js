/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     let list3 = new ListNode()
//     let head = list3
    
//     while(list1 && list2){
//         if(list1.val <= list2.val){
//             list3.next = list1
//             list1 = list1.next
//         } else {
//             list3.next = list2
//             list2 = list2.next
//         }
//         list3 = list3.next
//     }
    
//     if(!list1)
//         list3.next = list2
//     if(!list2)
//         list3.next = list1
    
//     return head.next
    
// };

// 1) Create a dummy node and save in a variable (list3).
// 2) Create a variable (previous) pointing to the dummy node .
// 3) While list1 and list2 have a value (not empty), we can compare them.
// 4) If the value on list1 is less than or equal to list2, we point the previous.next to list1 (previous.next = list1;)
// 5) Move the previous to list1 (previous = list1;).
// 6) Than increment list1 (list1 = list1.next;).
// 7) Continue the iteration on the "else" braket. List2 is less than or equal to list1, we point the previous.next to list2 (previous.next = list2;)
// 8) Move the previous to list2 ( previous = list2;)
// 9) Than increment list2 (list2 = list2.next;)
// 10) If there are no more values in list1, we move the previous to list2 (if(!list1) previous.next = list2;)
// 11) If there are no more values in list2, we move the previous to list1 (if(!list2) previous.next = list1;)
// 12) Return the head of list3 (return list3.next;)

// TIME COMPLEXITY: O(N) -> because the iteration happened only once over the nodes.
// SPACE COMPLEXITY: 0(1) -> creating dummy node and previous pointer. No extra space besides dummy and previous. It is a constant amount of space relative to the input.


var mergeTwoLists = function(list1, list2){
    const list3 = new ListNode(-100);
    let previous = list3;
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            previous.next = list1;
            previous = list1;
            list1 = list1.next;
        } else {
            previous.next = list2;
            previous = list2;
            list2 = list2.next;
        }
    }
    if(!list1) previous.next = list2;
    if(!list2) previous.next = list1;
    
    return list3.next;
}







