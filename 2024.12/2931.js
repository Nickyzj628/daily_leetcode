// 2931. 购买物品的最大开销
// https://leetcode.cn/problems/maximum-spending-after-buying-items/

// 给你一个下标从 0 开始大小为 m * n 的整数矩阵 values ，表示 m 个不同商店里 m * n 件不同的物品。每个商店有 n 件物品，第 i 个商店的第 j 件物品的价值为 values[i][j] 。除此以外，第 i 个商店的物品已经按照价值非递增排好序了，也就是说对于所有 0 <= j < n - 1 都有 values[i][j] >= values[i][j + 1] 。
// 每一天，你可以在一个商店里购买一件物品。具体来说，在第 d 天，你可以：
// 选择商店 i 。
// 购买数组中最右边的物品 j ，开销为 values[i][j] * d 。换句话说，选择该商店中还没购买过的物品中最大的下标 j ，并且花费 values[i][j] * d 去购买。
// 注意，所有物品都视为不同的物品。比方说如果你已经从商店 1 购买了物品 0 ，你还可以在别的商店里购买其他商店的物品 0 。
// 请你返回购买所有 m * n 件物品需要的 最大开销 。

/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function (values) {
  // 排序，从小买到大
  values = values.flat().sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < values.length; i++) {
    answer += values[i] * (i + 1);
  }
  return answer;
};

// 第一天，从商店 1 购买物品 2 ，开销为 values[1][2] * 1 = 1 。
// 第二天，从商店 0 购买物品 2 ，开销为 values[0][2] * 2 = 4 。
// 第三天，从商店 2 购买物品 2 ，开销为 values[2][2] * 3 = 9 。
// 第四天，从商店 1 购买物品 1 ，开销为 values[1][1] * 4 = 16 。
// 第五天，从商店 0 购买物品 1 ，开销为 values[0][1] * 5 = 25 。
// 第六天，从商店 1 购买物品 0 ，开销为 values[1][0] * 6 = 36 。
// 第七天，从商店 2 购买物品 1 ，开销为 values[2][1] * 7 = 49 。
// 第八天，从商店 0 购买物品 0 ，开销为 values[0][0] * 8 = 64 。
// 第九天，从商店 2 购买物品 0 ，开销为 values[2][0] * 9 = 81 。
// 所以总开销为 285 。
// 285 是购买所有 m * n 件物品的最大总开销。
console.log(maxSpending([[8, 5, 2], [6, 4, 1], [9, 7, 3]]));  // 285

console.log(maxSpending([[10, 8, 6, 4, 2], [9, 7, 5, 3, 2]])); // 386