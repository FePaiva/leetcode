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
var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode()
    let head = list3
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            list3.next = list1
            list1 = list1.next
        } else {
            list3.next = list2
            list2 = list2.next
        }
        list3 = list3.next
    }
    
    if(!list1)
        list3.next = list2
    if(!list2)
        list3.next = list1
    
    return head.next
    
};
//  let merge = new ListNode()
//     let head = merge
       
//     while(l1 && l2) {
//         if(l1.val < l2.val) {
//             merge.next = l1
//             l1 = l1.next
//         } else {
//             merge.next = l2
//             l2 = l2.next
//         }
//         merge = merge.next
//     }
    
//     if(!l1) merge.next = l2
//     else if(!l2) merge.next = l1
    
//     return head.next