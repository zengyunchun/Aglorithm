function binaraySerach(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else if (array[mid] > target) {
            right = mid - 1;
        }
    }
}
var ary=[1,4,7,8,12,34,67,88,99,100];
console.log(binaraySerach(ary,12));
