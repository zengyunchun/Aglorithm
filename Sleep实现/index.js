// 实现一个sleep()函数


// callback版本
function sleepCallback(callback,timeout) {
    setTimeout(callback, timeout);
}

sleepCallback(()=> {
    console.log("sleepCallback")
},1000);



// promise版本
function sleepPromise (timeout) {
    return new Promise(resolve=>setTimeout(resolve, timeout));
}

sleepPromise(1000).then(()=> {
    console.log("sleepPromise");
})

// promise + generator 版本
function* sleepGenerator(timeout) {
    yield sleepPromise(timeout);
}

sleepGenerator(1000).next().value.then(()=>{
    console.log("sleepGenerator")
})

// async + promise 版本
async function sleepAsync(timeout) {
    await sleepPromise(timeout);
}

sleepAsync(1000).then(()=> {
    console.log("sleepAsync");
})

