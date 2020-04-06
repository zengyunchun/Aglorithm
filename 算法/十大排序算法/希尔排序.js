Array.prototype.shell = function shell () {
    // 第一次步长用数组长度的一半
    let gap = Math.floor(this.length /2);
    // 步长直到缩减到1为止
    while (gap >= 1) {
        // 从步长下标开始遍历，第一次相当于一半
        for(let i = gap; i < this.length; i++) {
            // j就是分组内的前一个下标
            let j = i - gap;
            // 每组比较两个值，后面大于前面则交换位置
            while (j >= 0 && this[i] < this[j] ) {
                swap(this, i, j);
                j = j - gap;
            }
        }
        // 逐渐缩小步长, 继续分组
        gap = Math.floor(gap / 2);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let array = [8,23,2,56,5,34,9,5,1,18];
array.shell();
console.log(array); 