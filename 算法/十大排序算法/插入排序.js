/**
 * 1. 把数组分为两组，默认第一项为A组，后面为B组
 * 2. 每次从B组里面选开头一张temp和A组里面最后一张比，从后往前循环
 * 3. 如果发现A组里面的比temp大，则把A组那张向后移动覆盖当前temp的位置
 * 4. 一直比较到在A组前面没有大的了，再把A组里面那张恢复为temp的值
 */
Array.prototype.insert = function insert() {
    // 从第一项开始循环后面的数组B
    for (let i = 1; i < this.length; i++) {
        // 覆盖不用担心，因为temp这张牌缓存了
        let temp = this[i];
        let j; // 注意声明在这里因为外面可以用，作用域问题
        // 这里相当于从后往前循环前面的数组A
        for (j = i - 1; j >= 0; j--) {
            // 如果A组的值大于temp
            if (this[j] > temp) {
                // 则把前面一个值移到后面
                this[j + 1] = this[j];
            } else {
                break;
            }
        }
        // 这里j+1是因为上面循环如果有移动的话，下标肯定会减一项
        // 恢复为比较的值
        this[j + 1] = temp;
    }
}
let array = [8,23,2,56,5,34,9,5,1,18];
array.insert();
console.log(array); 

