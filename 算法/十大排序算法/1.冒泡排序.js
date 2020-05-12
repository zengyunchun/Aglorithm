/* 
 * (N-1)+(N-2)+...+1 = N*(N-1)/2 
 * => N^2/2 - N/2
 * => N^2/2 只取最高阶
 * => N^2 去除常量
 * => O(n^2)
 */
Array.prototype.bubble = function bubble() {
    if (!Array.isArray(this) || length <= 1) return;
    // 外层循环I控制比较的轮数
    for (let i = 0; i < this.length - 1; i++) {
        // 内层循环控制每一层比较的次数J
        var flag = true;
        for (let j = 0; j < this.length - i - 1; j++) {
            // 当前项大于后一项, 交换位置
            if (this[j] > this[j + 1]) {
                flag = false;
                swap(this, j, j + 1);
            }
        }
        // 当内层遍历一次都没有替换的话，证明已经是排好序的了，直接跳出循环
        if (flag) break;
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let array = [8,23,2,56,5,34,9,5,1,18];
array.bubble();
console.log(array); 
// [ 1, 2, 5, 5, 8, 9, 18, 23, 34, 56 ]