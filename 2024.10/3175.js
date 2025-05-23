// 3175. 找到连续赢 K 场比赛的第一位玩家
// https://leetcode.cn/problems/find-the-first-player-to-win-k-games-in-a-row/

// 有 n 位玩家在进行比赛，玩家编号依次为 0 到 n - 1 。
// 给你一个长度为 n 的整数数组 skills 和一个 正 整数 k ，其中 skills[i] 是第 i 位玩家的技能等级。skills 中所有整数 互不相同 。
// 所有玩家从编号 0 到 n - 1 排成一列。
// 比赛进行方式如下：
// 队列中最前面两名玩家进行一场比赛，技能等级 更高 的玩家胜出。
// 比赛后，获胜者保持在队列的开头，而失败者排到队列的末尾。
// 这个比赛的赢家是 第一位连续 赢下 k 场比赛的玩家。
// 请你返回这个比赛的赢家编号。

/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function (skills, k) {
    // 模拟+遍历
    let maxSkillIdx = 0;
    let win = 0;
    for (let i = 1; i < skills.length && win < k; i++) {
        // 当前玩家赢
        if (skills[i] > skills[maxSkillIdx]) {
            maxSkillIdx = i;
            win = 1;
        }
        // 上个玩家连胜
        else {
            win++;
        }
    }
    return maxSkillIdx;
};

// 一开始，队列里的玩家为 [0,1,2,3,4] 。比赛过程如下：
// 玩家 0 和 1 进行一场比赛，玩家 0 的技能等级高于玩家 1 ，玩家 0 胜出，队列变为 [0,2,3,4,1] 。
// 玩家 0 和 2 进行一场比赛，玩家 2 的技能等级高于玩家 0 ，玩家 2 胜出，队列变为 [2,3,4,1,0] 。
// 玩家 2 和 3 进行一场比赛，玩家 2 的技能等级高于玩家 3 ，玩家 2 胜出，队列变为 [2,4,1,0,3] 。
// 玩家 2 连续赢了 k = 2 场比赛，所以赢家是玩家 2 。
console.log(findWinningPlayer([4, 2, 6, 3, 9], 2)); // 2
