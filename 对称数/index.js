// 打印1-10000之间所有的对称数
function getNum() {
    let result = [];
    for (let i = 1; i < 10; i++) {
        result.push(i); // 1 2 3 4 5 6 7 8 9
        result.push(i*11); // 11 22 33 44 55 66 ...
        for (let j = 0; j < 10; j++) {
            result.push(i*101 + j*10);// 101 111 121 ...     202 212 222 ...   303 313 323 ...
            result.push(i*1001 + j*110);// 1001 1111 1221 ...     2002 2112 2222 ...   3003 3113 3223 ...
        }
    }
    return result;
}

console.log(getNum())