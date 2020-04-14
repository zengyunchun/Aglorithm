/**
 * 快速排序的核心思想是对待排序序列通过一个「支点」
 * （支点就是序列中的一个元素，别把它想的太高大上）进行拆分，
 * 使得左边的数据小于支点，右边的数据大于支点。然后把左边和右边再做一次递归，
 * 直到递归结束。我们以 （左边index + 右边index）/ 2 来选择支点
 */

// 阮一峰老师的快排写法： http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html?bsh_bid=124324679
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



// 上面阮一峰老师的代码利于理解，但是也存在一些问题，比如递归中新增了两个数组aryLeft和aryRight, 
// 内存太大，参考文章如下，可以实现，说白了就是利用原地分区法，在不增加内存的情况下
// 选择数组最后一个当作基准值，把小于它的移动到了左边，大于它的移动到了右边
// https://www.jianshu.com/p/34209c493a79?from=timeline&isappinstalled=0
function quickSort(array) {
    let len = array.length;
    if (!Array.isArray(array) || len <= 1) return array;
    sort(array, 0, len - 1);
    return array;
}

// 原地分区函数
// 原地分区法个人实例如下：
// 初始化 index = 0, poivt = 4, i = 0
// 8 2 3 5 1 4 
// 因为 8 > 4, 所以不管, 数组不变如下, 此时  index = 0, poivt = 4, i = 1
// 8 2 3 5 1 4 
// 2 < 4 => 交换 index=0 位置的 8 和 i = 1 位置的 2 两个数， 此时 index = 1, poivt = 4, i = 2
// 2 8 3 5 1 4 
// 同理 3 < 4 , 重复上面交换操作，此时 index = 2, poivt = 4, i = 3
// 2 3 8 5 1 4 
// 5 > 4, 不做交换  此时 index = 2, poivt = 4, i = 4
// 2 3 8 5 1 4
// 1 < 4 交换， 此时 index = 3, poivt = 4, i = 5
// 2 3 1 5 8 4
// 最后交换index 和 i 最后一个的位置
// 2 3 1 4 5 8
// 然后你会神奇的发现，以 4 为分割，左边的数组小于 4 ，右边的数组大于四  231 4 58， 真tm神奇
function partition(array, left, right) {
    let index = left; // 记录交换的索引值，默认为最左边
    let pivot = array[right]; // // 取最后一个数字当做基准值，这样方便遍历
    for (let i = left; i < right; i++) {
        if (array[i] < pivot) { // i值小于基准值才交换索引值和i值
            swap(array, index, i);
            index++; // 索引值++ 是因为可以用下一位交换了
        }
    }
    swap(array, right, index); // 非常重要一步，把基准值调到中间来，才能确保左小右大
    return index;
}

function sort(array, left, right) {
    // 左边大于右边直接返回
    if (left > right) {
        return array;
    }
    // 一次原地分区, 得到中间的索引值，已经被分成两个区，小的在左边，大的在右边
    let storeIndex = partition(array, left, right);
    // 递归分小的区，注意可以不包含索引了
    sort(array, left, storeIndex - 1);
    // 递归分大的区，同样不用包含中间索引
    sort(array, storeIndex + 1, right);
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var arra2 = [8, 2, 3, 5, 1, 4];
console.log("quicksort", quickSort(arra2));