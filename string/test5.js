/**
 * @url: https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1013/
 * @date: 2018-11-28
 * 运行耗时 76ms 8.2k人提交 我耗时排第三 值得鼓励，就是思考的时间略长 hahh...
 * 解答耗时 1.5h
 * 解答思路 先将多个//的情况通过正则处理，本意想写正则 将./ 给替换成空字符，但是不会用正则区分 ../的case 以及将 最后的/替换成空字符 但是无奈也不会处理 ../的case 于是通过
 *         一次遍历来解决，可以将字符倒序，保存 ..的数目，但遇到不是..的则删除数组，同理 . 的字符需要删除，直接忽略，这样一次遍历下来就能获取到想要的结果
 */

/**
 * @param {string} path
 * @return {string}
 */

// 简化路径
// 给定一个文档 (Unix-style) 的完全路径，请进行路径简化。

// 例如，
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

// 边界情况:

// 你是否考虑了 路径 = "/../" 的情况？
// 在这种情况下，你需返回 "/" 。
// 此外，路径中也可能包含多个斜杠 '/' ，如 "/home//foo/" 。
// 在这种情况下，你可忽略多余的斜杠，返回 "/home/foo" 。

var simplifyPath = function(path) {
  path = path.replace(/(\/\/+)/g, '/')  // 将 ////等转成 /
  path = path.split('/')
  let rCount = 0
  for (let i = path.length-1; i >= 0; i--) {
    if (path[i] === '' || path[i] === '.') {
      path.splice(i, 1)
      continue;
    }
    if (path[i] === '..') {
      rCount++
      path.splice(i, 1)
      continue;
    }
    if (rCount && path[i] !== '..') {
      path.splice(i, 1)
      rCount--
    }
  }
  path = '/' + path.join('/')
  
  return path
};
simplifyPath('./')

// 耗时64ms的答案，对比一下 我的耗时操作在于对一个数组的splice 而他用的是另一个数组存储，节省了消耗，思路类似
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let arr = path.split('/');
  let res = [];
  for (let p of arr) {
      if (p === '..') {
          res.pop();
      } else if (p !== '' && p !== '.') {
          res.push(p);
      }
  }
  
  return '/' + res.join('/');
};

