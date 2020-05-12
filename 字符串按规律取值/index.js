/**
 * 如果连续数字的话，就取连续的第一个数和最后一个数，中间用~隔开。如果不连续就用，隔开。
 * 输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
 */


 function splitString(str) {
     let result = "";
     let temp = str[0];
     str = str.replace(/(\s*)/g, "").split(',');
     console.log('str',str);
    //  str = str.split(',');
     str.forEach((v,i) => {
        //  temp += v;
        // if (temp[temp.length - 1] === ",") {
        //     temp += v;
        // } 
        if (str[i+1] - v === 1) {
            if (temp[temp.length - 1] !== "~") {
                temp += "~";
            }
         } else if (str[i+1] - v > 1) {
            if (temp[temp.length - 1] === "~") {
                temp += `${v},`;
            } else if(temp[temp.length - 1] === ",") {
                temp += `${v}`;
            }
         }
     });
     return temp;
 }

 let str= '1,2,3,5,7,8,10';
 var res = splitString(str);
 console.log(res);