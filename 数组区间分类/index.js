
/**
 * 
 * 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
 * 将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
 * 
 */

/**
 * 随机数
 * @param {最小值} min 
 * @param {最大值} max 
 */
function getRondomInt(min, max) {
    min = Math.ceil(min); // 取顶
    max = Math.floor(max); // 取地板
    // 这里加1是因为上面取值
    let random = Math.random() * (max - min + 1) + min;
    return Math.floor(random);
}

/**
 * 生成随机数组
 * @param {长度} len 
 * @param {最小值} min 
 * @param {最大值} max 
 */
function getRondomArray(len, min, max) {
    return Array.from({ length: len }, v => getRondomInt(min, max));
}

/**
 * 分割
 * @param {区间分割} space 
 */
function splitArray(space) {
    let array = getRondomArray(10, 0, 20);
    console.log(array);
    // 用一个hash表来暂存带有序列的数组
    let hash = {};
    array.sort((a, b) => a - b).map((v) => {
        const intNum = Math.floor(v / space);
        if (!hash[intNum]) hash[intNum] = [];
        hash[intNum].push(v)
    });
    // 最后再加入数组
    let newArray = [];
    for (const key in hash) {
        newArray.push(hash[key]);
    }
    return newArray;
}


function splitSpaceArray(array) {
    // 去重排序
    var newArray = Array.from(new Set(array.sort((a, b) => (a - b))));
    let res = [];
    let temp = [];
    // newArray.reduce((prev, next) => {
    //     temp.push(prev);
    //     if (next - prev === 1) {
    //         temp.push(next);
    //     } else {
    //         res.push(temp);
    //         temp = [];
    //     }
    //     return next;
    // });

    for (let i = 0; i < newArray.length; i++) {

        const cur = newArray[i];
        const next = newArray[i+1];
        // temp.push(cur);
        if (next - cur === 1) {
            temp.push(cur);
        } else {
            res.push(temp);
            temp = [];
        }
    }
    return res;
}

// console.log(splitArray(10));

let aray = [2, 10, 3, 4, 5, 11, 10, 11, 20];
console.log(splitSpaceArray(aray));
