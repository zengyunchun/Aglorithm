// 如果是对象/数组，返回一个空的对象/数组，
// 都不是的话直接返回原对象
// 判断返回的对象和原有对象是否相同就可以知道是否需要继续深拷贝
// 处理其他的数据类型的话就在这里加判断
function getEmpty(o) {
    if (Object.prototype.toString.call(o) === '[object Object]') {
        return {};
    }
    if (Object.prototype.toString.call(o) === '[object Array]') {
        return [];
    }
    return o;
}

function deepCopyBFS(origin) {
    let queue = [];
    let map = new Map(); // 记录出现过的对象，用于处理环

    let target = getEmpty(origin);
    if (target !== origin) {
        queue.push([origin, target]);
        map.set(origin, target);
    }

    while (queue.length) {
        let [ori, tar] = queue.shift();
        for (let key in ori) {
            // 处理环状
            if (map.get(ori[key])) {
                tar[key] = map.get(ori[key]);
                continue;
            }

            tar[key] = getEmpty(ori[key]);
            if (tar[key] !== ori[key]) {
                queue.push([ori[key], tar[key]]);
                map.set(ori[key], tar[key]);
            }
        }
    }

    return target;
}

function deepCopyDFS(origin) {
    let stack = []; // 声明一个堆栈，用于把子对象压入循环
    let map = new Map(); // 记录出现过的对象，用于处理环
    let target = getEmpty(origin);
    // 如果是引用对象则压入堆栈，记录一个map的值对象
    if (target !== origin) {
        stack.push([origin, target]);
        map.set(origin, target);
    }
    // 循环堆栈
    while (stack.length) {
        // 注意这里是pop弹出，先进后出，则会最先处理最末端的
        let [ori, tar] = stack.pop();
        for (let key in ori) {
            // 处理环状，直接赋值，不进行压入栈，这样就不会循环引用
            if (map.get(ori[key])) {
                tar[key] = map.get(ori[key]);
                continue;
            }
            // 处理引用对象
            tar[key] = getEmpty(ori[key]);
            if (tar[key] !== ori[key]) {
                stack.push([ori[key], tar[key]]);
                map.set(ori[key], tar[key]);
            }
        }
    }
    return target;
}

// test
[deepCopyBFS, deepCopyDFS].forEach(deepCopy=>{
	console.log(deepCopy({a:1}));
	console.log(deepCopy([1,2,{a:[3,4]}]))
	console.log(deepCopy(function(){return 1;}))
	console.log(deepCopy({
		x:function(){
			return "x";
		},
		val:3,
		arr: [
			1,
			{test:1}
		]
	}))

	let circle = {};
	circle.child = circle;
	console.log(deepCopy(circle));
})
