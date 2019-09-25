/**
 * 
 * @param {节点} node 
 * 基本思路： 传入节点， 找到下一层所有节点，循环递归
 * 基本逻辑： for遍历子节点， 递归
 * 1. 传入节点 node, 为空则返回, 否则拍扁记录入数组 nodeList
 * 2. 找到下面一层所有子节点 children
 * 3. 每一个递归遍历，知道遍历完为止
 */
const deepTraverse = (node, nodeList = []) => {
    if (node != null) {
        nodeList.push(node);
        let children = node.children;
        for (let index = 0; index < children.length; index++) {
            deepTraverse(children[index],nodeList);
        }
    }
    return nodeList;
}

/**
 * 
 * @param {节点} node 
 * 基本思路： 传入节点，放入队列，先进先出，循环拍平压入所有子节点
 * 基本逻辑： 两层循环，while遍历队列，for遍历子节点
 * 1. 传入节点node, 为空返回拍平数组，否则压入队列
 * 2. while套住队列，先进先出，循环子节点压入队列
 */
const widthTraverse = (node) => {
    let stack = []; // 用于循环的队列，先进先出
    let nodeList = []; // 用于打印
    if (node) {
        stack.push(node);
        while(stack.length > 0) { // 循环队列
            let item = stack.shift(); // 先进先出
            nodeList.push(item);
            let children = item.children;
            for (let index = 0; index < children.length; index++) {
                stack.push(children[index]); // 循环拍平压入所有子节点
            }
        }
    }
    return nodeList;
}


const parent = document.querySelector('.parent')
const res1 = deepTraverse(parent); // 深度遍历
const res2 = widthTraverse(parent); // 广度遍历
console.log("深度遍历",res1);
console.log("广度遍历",res2);