// 2535. 数组元素和与数字和的绝对差
// https://leetcode.cn/problems/difference-between-element-sum-and-digit-sum-of-an-array/

// 给你一个正整数数组 nums 。
// 元素和 是 nums 中的所有元素相加求和。
// 数字和 是 nums 中每一个元素的每一数位（重复数位需多次求和）相加求和。
// 返回 元素和 与 数字和 的绝对差。
// 注意：两个整数 x 和 y 的绝对差定义为 |x - y| 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    // 元素和不可能小于数位和，不用加绝对值
    let answer = 0
    for (let num of nums) {
        // +元素和
        answer += num
        // -数位和
        while (num) {
            answer -= num % 10
            num = Math.trunc(num / 10)
        }
    }
    return answer
}

// nums 的元素和是 1 + 15 + 6 + 3 = 25 。
// nums 的数字和是 1 + 1 + 5 + 6 + 3 = 16 。
// 元素和与数字和的绝对差是 |25 - 16| = 9 。
console.log(differenceOfSum([1, 15, 6, 3])) // 9
