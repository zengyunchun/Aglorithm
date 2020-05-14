/**
 * 数组的拍平
 */
Array.prototype.flat = function () {
    function _flat(array) {
        return array.reduce((prev, next) => (Array.isArray(next) ? [...prev, ..._flat(next)] : [...prev, next]), []);
    };
    return _flat(this);
}

/**
 * 功能： 数组拍平，去重，升序排序
 */
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let newArr = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b);

console.log(newArr);

// 拍平
function flat(array) {
    return array.reduce((prev, next) => {
        return Array.isArray(next) ? [...prev, ...flat(next)] : [...prev, next];
    }, []);
}

// 数组去重
function deDuplicate(array) {
    return Array.from(new Set(array));
}

// 升序排列
function sortUp(array) {
    return array.sort((a, b) => a - b);
}

console.log('flat', sortUp(deDuplicate(flat(arr))));