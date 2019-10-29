function getTrueObj(obj) {
    if (Object.prototype.toString.call(obj) === "[object Object]") {
        return {};
    } else if (Object.prototype.toString.call(obj) === "[object Array]") {
        return [];
    } else {
        return obj;
    }
}

/**
 * 
 * @param {克隆对象} obj 
 * @param {返回对象} newObj 
 * 递归遍历，但是存在对象环重复引用问题
 */
let deepCloneDFS = (origin, target = {}) => {
    for (const key in origin) {
        if (origin.hasOwnProperty(key)) {
            const item = origin[key];
            if (typeof item === "object") {
                // 根据当前对象拿到真实的值
                target[key] = getTrueObj(item);
                deepCloneDFS(item, target[key]);
            } else {
                target[key] = item;
            }
        }
    }
    return target;
}



function deepCloneDFS1(origin) {
    let stack = [];
    let map = new Map();

    let target = getTrueObj(origin);
    if (target != origin) {
        stack.push([origin, target]);
        map.set(origin, target);
    }

    while (stack.length) {
        let [ori, tar] = stack.pop();
        for (const key in ori) {
            const item = ori[key];
            if (map.get(item)) {
                tar[key] = map.get(item);
                continue;
            }
            tar[key] = getTrueObj(item);
            if (tar[key] != item) {
                stack.push([item, tar[key]]);
                map.set(item, tar[key]);
            }
        }
    }
    return target;
}


function deepCloneBFS(origin) {
    let queue = [];
    let map = new Map();

    let target = getTrueObj(origin);
    if (target != origin) {
        queue.push([origin, target]);
        map.set(origin, target);
    }

    while (queue.length) {
        // 宽度与深度唯一不同的就是这里是队列的先进先出，真的是一个代码，两种算法呀，牛逼
        let [ori, tar] = queue.shift();
        for (const key in ori) {
            const item = ori[key];
            console.log(key,item);
            if (map.get(item)) {
                tar[key] = map.get(item);
                continue;
            }
            tar[key] = getTrueObj(item);
            if (tar[key] != item) {
                queue.push([item, tar[key]]);
                map.set(item, tar[key]);
            }
        }
    }
    return target;
}


let a = { a: 1, b: [9, 8, 7], c: { d: { e: "123" }, f: true } };
let tt = deepCloneBFS(a);
// a.c.f = 3;
// a.c.d.e = "er";
// b.c.d.e = "ddd";

console.log(a);
console.log(tt);
