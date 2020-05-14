// 数组移动步数，会改变数组
function moveArray(array, step) {
    step = step % array.length; // 取余数，避免超出数组长度
    return array.splice(-step).concat(array); // splice倒着截取元素，用负号
}

let arr = [1,2,3,4,5,6]
console.log(moveArray2(arr, 2));
console.log(arr);
