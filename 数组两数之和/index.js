let num = [2, 3, 5, 8, 4];
let target = 9;
let res = [2, 4];

function sumArray(array, target) {
    // 利用一个hash表保存以值为key, 索引为value的map
    let map = {};
    // let result=[];
    for (let i = 0; i < array.length; i++) {
        map[array[i]] = i;
    }

    for (let j = 0; j < array.length; j++) {
        let rest = target - array[j]; // 相减找是否有值
        if (map[rest]) {
            // result.push(j);
            // result.push(map[rest]);
            return [j, map[rest]]
        }
    }
    return new Error("Not Found");
}

console.log(sumArray(num, target));