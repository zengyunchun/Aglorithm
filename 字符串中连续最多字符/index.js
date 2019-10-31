/**
 * 编程题，找出字符串中连续出现最多的字符和个数
 * 'abcaakjbb' => {'a':2,'b':2}
 * 'abbkejsbcccwqaa' => {'c':3}
 */


 function maxStr(array) {
     //new RegExp(/ddd/)
     // 正则中\1是代表分组中第一个，这里(.)中匹配的内容，就是任意字符
     // 所以(.)\1+ : 就是匹配任意字符一个或多个
     // ref: https://segmentfault.com/q/1010000012552849
     var matchArray = array.match(/(.)\1+/g); // [ 'bb', 'ccc', 'aa' ]
     var obj = {};
     var maxLength = Math.max(...matchArray.map(i => i.length)); // 找出最大
     console.log(maxLength)
     matchArray.map(item => {
        if (item.length == maxLength) { // 等于最大才写入
            obj[item[0]] = item.length;
        }
     });
     return obj;
 }

 var str = "abbkejsbcccwqaa";
 console.log(maxStr(str));

 var str2 = "abcaakjbb";
 console.log(maxStr(str2));