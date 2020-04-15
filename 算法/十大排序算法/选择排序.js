Array.prototype.select = function select() {
    let length = this.length;
    if (!Array.isArray(this) || length <= 1) return;
    // i < this.length - 1 是因为j轮会遍历到最后一下
    // 所以这里只用遍历到倒数第二项
    for (let i = 0; i < length - 1; i++) {
        // 保持最小的下标，不用遇到小的就交换
        let min = i;
        // 从后一项开始比
        for (let j = i + 1; j < length; j++) {
            if (this[j] < this[min]) {
                // 更新最小项下标
                min = j;
            }
        }
        // 遍历完一次交换头部和最小的
        swap(this, i, min);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Array.prototype.selectSort2 = function() {
//     for(let i = 0; i< this.length - 1; i++) {
//         let min = i;
//         for(let j = i+1;j < this.length; j++) {
//             if (this[j] < this[min]) {
//                 min = j;
//             }
//         }
//         swap2(this, i, min);
//     }
// }

// function swap2(arr, i,j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

let array = [8, 23, 2, 56, 5, 34, 9, 5, 1, 18];
// array.select();
array.selectSort2();
console.log(array);





