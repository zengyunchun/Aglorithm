/**
 * 快速排序的核心思想是对待排序序列通过一个「支点」
 * （支点就是序列中的一个元素，别把它想的太高大上）进行拆分，
 * 使得左边的数据小于支点，右边的数据大于支点。然后把左边和右边再做一次递归，
 * 直到递归结束。我们以 （左边index + 右边index）/ 2 来选择支点
 */
Array.prototype.quick = function quick() {
    // 4.结束递归（当数组中小于等于一项，则不用处理）
    if (this.length <= 1) {
        return this;
    }
    // 1.找到数组的中间项，在原有的数组中把它移除
    let middleIndex = Math.floor(this.length / 2);
    let middleValue = this.splice(middleIndex, 1)[0];
    // 2.准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组中，反之放到右边数组中
    let aryLeft = [],
        aryRight = [];
    for (let i = 0; i < this.length; i++) {
        let item = this[i];
        item < middleValue ? aryLeft.push(item) : aryRight.push(item);
    }
    // 3.递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序为止
    //  （最后让左边+中间+右边拼接成为最后的结果）
    return aryLeft.quick().concat(middleValue, aryRight.quick());
}
let ary = [12, 8, 15, 16, 1, 24];
ary = ary.quick();
console.log(ary);
