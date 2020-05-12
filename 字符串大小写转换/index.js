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

function trans(str) {
    let arra = str.split('');
    return arra.map(v => ((v.toUpperCase() === v) ? v.toLowerCase() : v.toUpperCase())).join('');
}


console.log("processString: ", trans("aBcTeET"));
console.log("transferString: ", trans("aBcTeET"));
console.log("regexString: ", trans("aBcTeET"));