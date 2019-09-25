/**
 * 大写转小写，小写转大写
 * @param {字符串} str 
 */
// 字符串遍历
function transferString(str) {
    let newStr = "";
    for (let index = 0; index < str.length; index++) {
        const s = str.charAt(index);
        newStr += (s.toUpperCase() === s) ? s.toLowerCase() : s.toUpperCase();
    }
    return newStr;
}

// 转为数组遍历
function processString(str) {
    let arr = str.split("");
    let newArra = arr.map((v, i) => {
        return (v.toUpperCase() === v) ? v.toLowerCase() : v.toUpperCase();
    });
    return newArra.join("");
}

// 正则匹配
function regexString(str) {
    return str.replace(/[a-zA-Z]/g, (a) => {
        return /[a-z]/.test(a) ? a.toUpperCase() : a.toLowerCase();
    })
}

console.log("processString: ", processString("aBcTeET"));
console.log("transferString: ", transferString("aBcTeET"));
console.log("regexString: ", regexString("aBcTeET"));