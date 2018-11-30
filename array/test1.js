/**
 * @url: https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1013/
 * @date: 2018-11-29
 * 运行耗时 超出系统运行时间
 * 解答耗时 1h
 * 解答思路 递归并插入法，将数组 [1,2,3]拆为 1与[2,3]的插入， 【2,3】的插入理解为 2插入[3] 可以有 [2,3] [3,2]两种方法 但是耗时太严重 无法提交答案,如何用动态规划解决？
 * 参考答案 https://blog.csdn.net/sinat_35261315/article/details/78412805 该答案先通过k来缩小计算范围得到目标数所在的范围
 */

// 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

// 说明：

// 给定 n 的范围是 [1, 9]。
// 给定 k 的范围是[1,  n!]。
// 示例 1:

// 输入: n = 3, k = 3
// 输出: "213"
// 示例 2:

// 输入: n = 4, k = 9
// 输出: "2314"

var getPermutation = function(n, k) {
  let arr = []
  for (let i = 1; i < n+1; i++) {
    arr.push(i)
  }
  var computed = function (_arr) {
    if (_arr.length <= 1) {
      return [_arr]
    }
    return insert(_arr[0], computed(_arr.splice(1)))
  }
  return computed(arr)
};

function insert (val, arr) {
  let _arr = []
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr[i].length; j++ ) {
      _arr.push(arr[i].slice(0, j).concat([val]).concat(arr[i].slice(j)))
    }
  }
  return _arr
}

console.log(getPermutation(4, 2))

