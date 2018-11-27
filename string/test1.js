/**
 * @url: https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1012/
 * @date: 2018-11-26
 * 运行耗时 800ms
 * 解答耗时1小时30分钟
 * 解答思路 从第一个字符开始扫描，然后遇到第一个重复的字符为止，保存下子串，接着移除第一个字符，从第二个字符开始扫描，以此类推，每次保存最长的子串，暴力破解
 */

function lengthOfLongestSubstring (s) {
  var l = s.length
  s = s.split('')
  var temp = ''
  var str = ''
  var p = 0
  if (l === 1) return 1
  var f = function () {
    let flag = s.some((_s, index) => {
      if (isRepeat(str, _s)) {
        if (str.length > temp.length) {
          temp = str
        }
        p++
        s.shift()
        str = ''
        return true
      }
      str += _s
      return false
    })
    if (flag && (l !== p)) {
      return f()
    }

    if (!flag) {
      if (str.length > temp.length) {
        temp = str
      }
    }
    console.log(temp)
    return temp.length
  }
  return f()
}

function isRepeat(str, s) {
  if (!str) return false
  return ~str.indexOf(s)
}

let ll = lengthOfLongestSubstring('aab')
console.log(ll)

// 最快的答案 80ms 找到相等的就截断字符串 思路： 优化的移动窗口
// 分析： https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/
var lengthOfLongestSubstring = function(s) {
  let substr = '', maxLength = 0;
  // find the next substring that longeer than previous to replace previous substring
  for (var i = 0; i < s.length; i++) {
      let findIndex = substr.indexOf(s[i]);
      if (~findIndex) {
          substr = substr.substring(findIndex + 1);
      }
      substr += s[i];
      if (substr.length > maxLength) {
          maxLength = substr.length;
      }
  }
  return maxLength;
};

// 浅析 暴力法 移动窗口法 优化的移动窗口法