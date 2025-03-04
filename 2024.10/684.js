// 684. 冗余连接
// https://leetcode.cn/problems/redundant-connection/

// 树可以看成是一个连通且 无环 的 无向 图。
// 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。
// 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的那个。

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    // 并查集
    const parent = Array.from({ length: edges.length + 1 }).map((v, i) => i);
    const find = (i) => {
        if (parent[i] !== i) {
            parent[i] = find(parent[i]);
        }
        return parent[i];
    };
    for (let edge of edges) {
        const [i, j] = edge;
        // 两个节点已经连通，则出现了环
        if (find(i) === find(j)) {
            return edge;
        }
        // 否则连通两个节点
        parent[find(i)] = find(j);
    }
};

console.log(
    findRedundantConnection([
        [1, 2],
        [1, 3],
        [2, 3],
    ])
); // [2,3]
