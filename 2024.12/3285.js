// 3285. 找到稳定山的下标

// 有 n 座山排成一列，每座山都有一个高度。给你一个整数数组 height ，其中 height[i] 表示第 i 座山的高度，再给你一个整数 threshold 。
// 对于下标不为 0 的一座山，如果它左侧相邻的山的高度 严格大于 threshold ，那么我们称它是 稳定 的。我们定义下标为 0 的山 不是 稳定的。
// 请你返回一个数组，包含所有 稳定 山的下标，你可以以 任意 顺序返回下标数组。

/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
  // 遍历
  const answer = [];
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      answer.push(i);
    }
  }
  return answer;
};

// 下标为 3 的山是稳定的，因为 height[2] == 3 大于 threshold == 2 。
// 下标为 4 的山是稳定的，因为 height[3] == 4 大于 threshold == 2.
console.log(stableMountains([1, 2, 3, 4, 5], 2));  // [3,4]