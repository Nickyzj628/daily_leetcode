// 3174. 清除数字
// https://leetcode.cn/problems/clear-digits/

// 给你一个字符串 s 。
// 你的任务是重复以下操作删除 所有 数字字符：
// 删除 第一个数字字符 以及它左边 最近 的 非数字 字符。
// 请你返回删除所有数字字符以后剩下的字符串。

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
   // 栈
   const chars = []
   const isDigit = /\d/
   for (let char of s) {
      if (isDigit.test(char)) chars.pop()
      else chars.push(char)
   }
   return chars.join("")
}

console.log(clearDigits("abc")) // "abc"
console.log(clearDigits("cb34")) // ""
