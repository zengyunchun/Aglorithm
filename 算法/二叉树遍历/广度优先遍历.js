/**
 * 广度优先搜索(Breadth-First-Search), 简称BFS，是一种比较常见的二叉树搜索方式
 * 
 */

/* 
                      58
                   /      \
                  30       88
                 /  \     /  \
               15   38   63  92
                   /  \     /  \
                  32  44   90  100
*/
var binarayTree = {
    value: "58",
    left: {
        value: '30',
        left: {
            value: '15',
        },
        right: {
            value: '38',
            left: {
                value: '32',
            },
            right: {
                value: '44',
            }
        }
    },
    right: {
        value: '88',
        left: {
            value: '63',
        },
        right: {
            value: '92',
            left: {
                value: '90',
            },
            right: {
                value: '100',
            }
        }
    }
}

// 非递归实现广度优先遍历
function BFS1(node) {
    var res = [];
    var queue = []; // 先生成队列，先进先出
    if (node) {
        queue.push(node); // 先把节点放入队列
        // 当队列为空时跳出循环
        while (queue.length > 0) {
            let curr = queue.shift(); // 队列节点先出
            res.push(curr.value);
            curr.left && queue.push(curr.left); //把左节点加入队列
            curr.right && queue.push(curr.right); //把右节点加入队列
        }
    }
    return res;
}

// 递归实现广度优先遍历
function BFS2(node) {
    var res = [];
    var queue = [];
    queue.push(node);
    // 内部用递归代替循环，所以要在外部声明队列, 才能操作同一个队列
    function bfs2() {
        if (queue.length > 0) {
            let curr = queue.shift();
            res.push(curr.value);
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
            bfs2();
        }
    }
    bfs2();
    return res;
}


console.log("BFS1", BFS1(binarayTree));
console.log("BFS2", BFS2(binarayTree));