// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶:

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解


function maxSubArray(array) {
    let n = array.length;
    let step = Array(n);
    let res = step[0] = array[0];
    for (let i = 1; i < n; i++) {
        step[i] = Math.max(step[i-1], 0) + array[i];
        res = Math.max(res, step[i]);
    }
    return res;
}


let arra = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arra));