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

// 非递归法遍历
function DFS1 (node) {
    var res = [];
    var stack = []; // 利用栈，后进先出
    if (node) {
        stack.push(node);
        while(stack.length> 0) {
            let curr = stack.pop(); // 弹出最后一个
            res.push(curr.value);
            curr.right && stack.push(curr.right); // 这里要先压入右树 ！！！！
            curr.left && stack.push(curr.left); // 后压入左数所以先遍历出来
        }
    }
    return res;
}

// 递归法遍历, 其实这就是前序遍历啦
function DFS2 (node) {
    var res = [];
    function dfs2 (node) {
        if (node) {
            res.push(node.value);
            dfs2(node.left);
            dfs2(node.right);
        }
    }
    dfs2(node);
    return res;
}


console.log("DFS1",DFS1(binarayTree));
console.log("DFS2",DFS2(binarayTree));