// 节点构造函数
function Node (val) {
  this.val = val
  this.next = null
}
// 定义链表
function List (array) {
  this.head = null
  let i = 0, temp = null
  while (i < array.length) {
    if (i === 0) {
      this.head = new Node(array[i])
      temp = this.head
    } else {
      let newNode = new Node(array[i])
      temp.next = newNode
      temp = temp.next
    }
    i++
  }
  return this.head
}

// 如何反转链表， 局部反转就是 整体反转
// var reverseList = function (head) {
//   head = List(head)
//   let pre = null
//   while (head) {
//       let next = head.next
//       head.next = pre
//       pre = head
//       head = next
//   }
//   return pre
// };

// console.log(reverseList([1,2,3,4,5]))

// 他人答案

/* 迭代
let reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next =prev;
        prev = current;
        current = next;
    }

    return prev;
};
*/
// 递归
let reverseList = function (head) {
  console.log(head)
  if (!head || !head.next) return head
  let next = reverseList(head.next)
  console.log(next)
  console.log(head)
  head.next.next = head
  head.next = null
  return next
}

// 1 2 3 4 5

console.log(reverseList(List([1, 2, 3, 4, 5])))
