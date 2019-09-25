// 把下面代码改造成输出1-9
for (var index = 0; index < 10; index++) {
    setTimeout(() => {
        console.log(index);
    }, 0);
    
}

// 直接输出
for (var index = 0; index < 10; index++) {
    console.log("1-: ",index);    
}

// 闭包
for (var index = 0; index < 10; index++) {
    (i => {
        setTimeout(()=> {
            console.log("2--: ",i)
        })
    })(index)
}

// let作用域
for (let index = 0; index < 10; index++) {
    setTimeout(()=> {
        console.log("3---: ",index);
    })
}

// setTimeout传参
for (var index = 0; index < 10; index++) {
    setTimeout((i)=> {
        console.log("4----: ",i);
    },0,index)
}

// try catch
for (let index = 0; index < 10; index++) {
    try {
        throw index;
    } catch (i) {
        setTimeout(()=> {
            console.log("5-----: ",i);
        })
    }
}