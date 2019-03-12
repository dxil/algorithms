
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
console.log(simplifyPath('/a/./b/../../../c/'))