
//  没有考虑到数据类型为null,undefind等类型 包括数据为对象时key顺序不同的问题
// 这里再更正一下
// 判断对象
function isObj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
// 对象重整 对key进行排序
function parseObj(obj) {
    let keys = Object.keys(obj).sort()
    let newObj = {}
    for (let key of keys) {
        // 不晓得有没有有必要，反正把value为obj的情况也处理一下 - -
        obj[key] = isObj(obj[key]) ? parseObj(obj[key]) : obj[key]
        newObj[key] = obj[key]
    }
    return newObj
}

// 最后
const arr = [1, '1', { a: 1, b: "1" }, { b: '1', a: 1 }, { a: 1, b: 2 }, [1, 2, 3], null, undefined, undefined]
function passArr(arr) {
    return [...new Set(arr.map(item =>
        isObj(item) ? JSON.stringify(parseObj(item)) : (!item ? item : JSON.stringify(item))
    ))].map(item => !item ? item : JSON.parse(item))
}