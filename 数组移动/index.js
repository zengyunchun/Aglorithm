// 数组移动步数，会改变数组
function moveArray(array, step) {
    step = step % array.length;
    return array.splice(-step).concat(array);
}




let arr = [1,2,3,4,5,6]
console.log(moveArray(arr, 2));
console.log(arr);