var url1 = "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33"
var url2 = "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33"
var url3 = "https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33"


var result = new URLSearchParams(url3).get("elective");
console.log(result)