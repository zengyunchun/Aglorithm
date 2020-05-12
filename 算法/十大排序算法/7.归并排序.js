 function  mergeSort(arr) {
     var len = arr.length;
     if (!Array.isArray(arr) || len <= 1 ) return arr;
     
     // 根据中间位置，分成两半，左边右边
     let mid = Math.floor(len/2);
     let left = arr.slice(0,mid);
     let right = arr.slice(mid);
     // 递归分半，一直到lengh == 1为止
     // 然后再通过merge合并，所谓先递归，再合并，叫做归并
     return merge (mergeSort(left), mergeSort(right));
 }

function merge(left, right) {
    var res = [];
    // 通过长度循环，因为shift长度减少，会退出循环
    // 注意可能肯定会出现有一边先push完，另一边数组还有长度，需要下面的操作
    while (left.length> 0 && right.length >0) {
        // 取两组开头第一个元素比较，谁小先push谁
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else  {
            res.push(right.shift());
        }
    }
    // 如果剩余的是左边还没有push完，继续
    while (left.length) {
        res.push(left.shift());
    }
    // 同理右边
    while (right.length) {
        res.push(right.shift());
    }
    return res;
}

let array = [8,23,2,56,5,34,9,5,1,18];

console.log("mergeSort",mergeSort( array));