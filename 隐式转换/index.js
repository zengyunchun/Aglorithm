// 1. 隐式转换就是调用toString();
var a = {
    i:1,
    toString() {
        return this.i++;
    }
}

// 2. 定义getter控制
Object.defineProperty(global, "a" ,{
    get:function() {
        // console.log(this.value)
        return this.value ? (this.value += 1) : this.value = 1;
    }
});

// 3. 直接打印呀
var a = console.log(1);

// var a = ? 用什么方法打印1
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}