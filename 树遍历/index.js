
/**
 * 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
 */
const tree = [
    {
        id: "1",
        name: "广东省",
        children: [
            {
                id: "11",
                name: "深圳市",
                children: [
                    {
                        id: "111",
                        name: "南山区",
                    },
                    {
                        id: "112",
                        name: "福田区",
                    }
                ]
            },
            {
                id: "12",
                name: "广州市",
                children: [
                    {
                        id: "121",
                        name: "天河区",
                    },
                    {
                        id: "122",
                        name: "花都区",
                    }
                ]
            },
        ]
    },
    {
        id: "2",
        name: "四川省",
        children: [
            {
                id: "21",
                name: "成都市",
                children: [
                    {
                        id: "211",
                        name: "金牛区",
                    },
                    {
                        id: "212",
                        name: "高新区",
                    }
                ]
            },
            {
                id: "22",
                name: "绵阳市",
                children: [
                    {
                        id: "221",
                        name: "涪城区",
                    },
                    {
                        id: "222",
                        name: "游仙区",
                    }
                ]
            },
        ]
    }
];

function bfs(target, id) {
    const quene = [...target]
    do {
        const current = quene.shift()
        if (current.children) {
            quene.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
        }
        if (current.id === id) {
            return current
        }
    } while (quene.length)
    return undefined
}

function dfs(target, id) {
    const stask = [...target]
    do {
        const current = stask.pop()
        if (current.children) {
            stask.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
        }
        if (current.id === id) {
            return current
        }
    } while (stask.length)
    return undefined
}

// 公共的搜索方法，默认bfs
function commonSearch(target, id, mode) {
    const staskOrQuene = [...target]
    do {
        const current = staskOrQuene[mode === 'dfs' ? 'pop' : 'shift']()
        if (current.children) {
            staskOrQuene.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
        }
        if (current.id === id) {
            return current
        }
    } while (staskOrQuene.length)
    return undefined
}


console.log(jasonDFS(tree, "112"));


function jasonDFS(target, id) {
    const stack = [...target]; // 放入stack
    console.log("stack",stack);
    do {
        const current = stack.pop(); // 弹出
        if (current.children) { // 有子节点压入stack
            stack.push(...current.children.map(v => ({ // 注意： 结构所有子节点...
                // 第一层用current.id, 下面层的时候path记录了以前的信息，这样才能拼接完整的子父关系
                ...v, path: ((current.path || current.id) + "_" + v.id) // 给每个节点增加path属性，记录子父关系
            })))
        }
        if (current.id == id) {
            return current;
        }
    } while (stack.length)
}

// 简单的深度优先遍历
function jasonDFS1 (node) {
    var stack = [];
    if (node) {
        stack = [...node];
        while(stack.length > 0) {
            var cur = stack.pop();
            console.log("jasonDFS1", cur.name);
            if (cur.children) {
                stack.push(...cur.children);
            }
        }
    }
}
jasonDFS1(tree);

var treenode = {
    id: 0,
    name: "root",
    children: tree
}

// 递归深度遍历
function jasonDFS2 (node, nodeList = []) {
    if (node != null) {
        nodeList.push(node);
        let children = node.children;
        if (children) {
            for (let i = 0; i < children.length; i++) {
                jasonDFS2(children[i], nodeList);
            }
        }
    }
    return nodeList;
}
var nodelist = jasonDFS2(treenode);
console.log("jasonDFS2", nodelist);


// 简单的广度优先遍历
function jasonBFS1 (node) {
    var queue = [];
    if (node) {
        queue = [...node];
        while(queue.length > 0) {
            var cur = queue.shift();
            console.log("jasonBFS1", cur.name);
            if (cur.children) {
                queue.push(...cur.children);
            }
        }
    }
}
jasonBFS1(tree);