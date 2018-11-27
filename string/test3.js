
/**
 * @url: https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1016/
 * @date: 2018-11-27
 * 运行耗时 5048ms
 * 解答耗时 2h
 * 解答思路 将s1字符串组装成一个对象，key:count形式 count是字符出现的次数，然后进行比较
 * tips： 哈希表？
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 */
// var checkInclusion = function(s1, s2) {
//   let obj = formatStrToObj(s1)
//   let cObj = JSON.parse(JSON.stringify(obj))
//   let isCover = false
//   for (let i = 0; i < s2.length; i++) {
//     if ((obj[s2[i]] === undefined) || (cObj[s2[i]] === -1)) {
//       if (validateObj(cObj)) {
//         return true
//       } else {
//         cObj = JSON.parse(JSON.stringify(obj))
//       }
//     } else {
//       --cObj[s2[i]]
//     }
//   }
//   return validateObj(cObj)
// };

// // abcds
// function formatStrToObj (s1) {
//   let obj = {}
//   for (let i = 0; i < s1.length; i++) {
//     obj[s1[i]] = 1
//     if(obj[s1[i]] !== undefined) {
//       obj[s1[i]]++
//     }else {
//       obj[s1[i]] = 0
//     }
//   }
//   return obj
// }

// function validateObj (obj) {
//   console.log(obj)
//   let isCover = true
//   for (let o in obj) {
//     if (obj[o] !== 0) {
//       isCover = false
//     }
//   }
//   return isCover
// }

// var checkInclusion = function(s1, s2) {
//   s1 = s1.split('').sort().join('')
//   let diff = s2.length - s1.length
//   for (let prio = 0; prio < diff + 1; prio++) {
//     let temp = s2.substring(prio, prio + s1.length)
//     console.log(temp)
//     temp = temp.split('').sort().join('')
//     if (temp === s1) {
//       return true
//     }
//   }
//   return false
// };

// 101ms 思路 游标 将所有字母枚举，然后 按照s1的长度进行移动窗口的比较，比如读游标第一位然后从s1.length位开始读 和我一开始转对象的思路类似，然后比较是否相等，不等则游标加1 s1.length+1 一直比到结束
var checkInclusion = function(s1, s2) {
  let len1 = s1.length
  let len2 = s2.length
  let tmp = {}
  let p = {}
  let str = 'abcdefghijklmnopqrstuvwxyz'
  function check() {
      for(let i = 0; i < 26; i++) {
         if(tmp[str[i]] !== p[str[i]]) return false
      }
      return true
  }
  for(let i = 0; i < 26; i++) {
     tmp[str[i]] = 0
     p[str[i]] = 0
  }
  for(let i = 0; i < len1; i++) tmp[s1[i]]++
  for(let i = 0; i < len2 && i < len1; i++) p[s2[i]]++
  if(check()) return true
  let pre = 0
  for(let i = len1; i < len2; i++) {
      p[s2[pre]]--
      p[s2[i]]++
      if(check()) return true
      pre++
  }
  return false
};


console.log(checkInclusion('ab', 'eidbaooo'))

