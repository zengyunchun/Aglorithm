/**
 * 
 * 根据以下要求，写一个数组去重函数（蘑菇街）
    如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]
    如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
    如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
 */

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

// 由于对象属性书写时没有顺序，用set去重的时候会当做不同对象，
// 所以需要根据keys排序后重新构建对象，这样能保证对象的属性顺序是一致的
function reStructObject(obj) {
    let keys = Object.keys(obj).sort();  // 默认把对象的key排序
    var newObj = {};
    for (const key of keys) {
        newObj[key] = isObject(obj[key]) ? reStructObject(obj[key]) : obj[key]; // 深度对象递归处理
    }
    return newObj;
}

function parseArray(array) {
    var setArray = new Set(array.map(item => { // 遍历数组, 每一项转为字符串，放入set去重
        var StringKey = "";
        if (isObject(item)) { // 如果为对象， 考虑写法的时候对象属性顺序问题，
            StringKey = JSON.stringify(reStructObject(item));  // 统一处理对象的属性顺序
        } else if (item) {
            StringKey = JSON.stringify(item); // 普通值属性直接转为json
        } else {
            StringKey = item; // null 和 undefined的情况
        }
        return StringKey;
    }));
    // 结构set为数组，再parse回来成数组
    var newArray = [...setArray].map(item => item ? JSON.parse(item): item);
    return newArray;
}

console.log( parseArray([123, "meili", "123", "mogu", 123]));
console.log( parseArray([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]));
console.log( parseArray([123, {a: 1}, {a: {b: 1, c:2}}, {a: "1"}, {a: {c:2, b: 1}}, "meili"]));

