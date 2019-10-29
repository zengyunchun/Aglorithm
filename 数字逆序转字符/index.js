/**
 * 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，
 * 返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
 */


// 用除数和余数来分割数字
 function reserveNumber(num) {
    var num1 = num / 10;
    var num2 = num % 10;
    if (num1 < 1) {
        return num;
    } else {
        num1 = Math.floor(num1); // 向下取整
        return `${num2}${reserveNumber(num1)}`;
    }
 }

 console.log(reserveNumber(1234));