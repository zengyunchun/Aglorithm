/**
 * 腾讯面试题
 * 在字符矩阵中，判断给定字符串的每个字符是否相邻，所有字符相邻则返回true
 * 相邻是指上下左右方向上的距离小于等于1
 */
board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

var word1 = "ABCCED"; // true
var word2 = "SEE"; // true
var word3 = "ABCB"; // false

function repeateUse(str) {
    let lastX, lastY;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let hasFlag = false;
        let x, y;
        for (let j = 0; j < board.length; j++) {
            const array = board[j];
            const pos = array.indexOf(char);
            if (pos !== -1) {
                hasFlag = true;
                x = j;
                y = pos;
            }
        }
        if (hasFlag) {
            if (lastX && lastY && !(x == lastX || y == lastY)) {
                return false;
            }
            lastX = x;
            lastY = y;
        } else {
            return false;
        }
    }
    return true;
}

console.log(word1, repeateUse(word1));
console.log(word2, repeateUse(word2));
console.log(word3, repeateUse(word3));  