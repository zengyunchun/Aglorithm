// 其中注释部分
// 注释 1：第一次调用获取函数 fn 参数的长度，后续调用获取 fn 剩余参数的长度
// 注释 2：currying 包裹之后返回一个新函数，接收参数为 ...args
// 注释 3：新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
// 注释 4：满足要求，执行 fn 函数，传入新函数的参数
// 注释 5：不满足要求，递归 currying 函数，新的 fn 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），新的 length 为 fn 剩余参数的长度

function curry(fn, length) { // length的意义在于递归时候更新长度，第一次就是函数的参数
    length = length || fn.length; // 获取函数的参数
    return function (...args) {
        return args.length >= length ?  // 是否达到函数的参数个数，大于等于的时候调用函数
            fn.apply(this, args) :  //  参数传完了，调用真实函数
            // 绑定this的意思： 在函数第一次调用的时候，此时的this就指定好了，以后不会改变
            curry(fn.bind(this, ...args), length - args.length) // 参数没有传递完, 递归等待传递完, 同时更新函数参数长度
    }
}

const jasonCurry = fn =>
    judge = (...args) =>
        args.length >= fn.length ?
            fn(...args) :
            (...subArgs) => judge(...args, ...subArgs); // 利用箭头函数缓存this, 解构传入参数，就是所有的参数, 所以不用更新参数长度了，每次参数都是累加的



// 任意个参数累加
function add1(...args) {
    return args.reduce((prev, next) => prev + next, 0);
}


// 指定参数累加
function addBase(a, b, c) {
    return a + b + c;
}

//console.log(add1(1,2,3,4,5,6)); 


let add = curry(addBase);
// let add = jasonCurry(addBase);

console.log(add(1)); 			// 1
console.log(add(1)(2)); 	// 3
console.log(add(1)(2)(3));// 6
console.log(add(1)(2, 3)); // 6
console.log(add(1, 2)(3)); // 6
console.log(add(1, 2, 3)); // 6