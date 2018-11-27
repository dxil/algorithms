
/**
 * @url: https://leetcode-cn.com/problems/longest-common-prefix/
 * @date: 2018-11-26
 * 运行耗时 100ms
 * 解答耗时 30分钟
 * 解答思路: 以第一个元素为目标元素，每遍历一个字符即遍历数组中的元素，直到发现第一个不等的元素即为最长公共前缀
 */

// 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// var longestCommonPrefix = function(strs) {
//     var l = strs.length
//     var pref = ''
//     var count = 0
//     var s_l = strs[0].length
//     var pref = ''
//     var status = true
//     for (var j = 0; j < s_l; j++) {
//       if (!status) break;
//       pref += strs[0][j]
//       for (var i = 0; i < l; i++) {
//         var temp = strs[i].substring(0, j+1)
//         if (pref !== temp) {
//           pref = pref.substring(0, j)
//           status = false
//           break;
//         }
//       }
//     }
//   console.log(pref)
// };


// 最短耗时 50ms 思路： 找出第一个和第下一个的共同前缀 进行比较，然后一步步的删减共同前缀prefix
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix.length == 0) return "";
    }
  }
  console.log(prefix)
  return prefix;
};


longestCommonPrefix(["flower","flight", "flow"])