var userList = [
    { name: 'user1', age: 18, province: '四川', city: '成都', district: '高新区' },
    { name: 'user2', age: 19, province: '四川', city: '成都', district: '天府新区' },
    { name: 'user3', age: 20, province: '四川', city: '南充', district: '顺庆区' },
    { name: 'user4', age: 22, province: '江苏', city: '南京', district: '鼓楼区' },
    { name: 'user5', age: 21, province: '江苏', city: '南京', district: '玄武区' },
    { name: 'user6', age: 21, province: '江苏', city: '镇江', district: '京口区' }
]


function list2treeJason(list, path) {
    let levelArray = path.split('/');
    let listById = [];
    for (let j = 0; j < levelArray.length; j++) {
        const curPath = levelArray[j];
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            let node = {};
            if (!listById.some(v => v.name == item[curPath])) {
                node.level = curPath;
                node.name = item[curPath];
                node.parentName = j == 0 ? "root" : item[levelArray[j - 1]];
                listById.push(node);
            }
        }
    }
    // 这里使用递归, 不在外层递归可以不？
    let tree = listByIdToTree(listById,"root");
    return tree;
}

function listByIdToTree(arr, parentName) {
    let temp = [];
    let treeArr = arr;
    treeArr.forEach((item, index) => {
        if (item.parentName == parentName) {
            if (listByIdToTree(treeArr, treeArr[index].name).length > 0) {
                treeArr[index].children = listByIdToTree(treeArr, treeArr[index].name);
            }
            temp.push(treeArr[index]);
        }
    });
    return temp;
}




function list2tree(list, path) {
    if (path.indexOf("/") === 0) {
        path = path.substring(1);
    }
    let levelArray = path.split('/');
    let currentPath = levelArray[0];
    let restPath = path.replace(currentPath, "");
    // if (!currentPath) return;

    let tree = {};
    if (restPath) {
        tree.children = [];
    }
    let listLen = list.length;
    for (let i = 0; i < listLen; i++) {
        let node = {};
        var item = list[i];
        let j = -1;
        tree.children.map((v, t) => {
            if (v.level === currentPath && v.name === item[currentPath]) {
                j = t;
            }
        });
        if (j > 0) {
            node = tree.children[j];
        }
        if (item[currentPath] && restPath) {
            node.children = [];
            node.children.push(list2tree(list, restPath));
        }
        node.level = currentPath;
        node.name = item[currentPath];
        if (j === -1) {
            if (restPath) {
                tree.children.push(node);
            } else {
                tree = node;
            }
        }
    }
    return tree;
};

var userTree = list2tree(userList, 'province/city/district');

console.log(userTree);
//---------------------------------------------- 需要同样适用以下数据----------------
var data = [
    { name: 'name1', a: 'a1', b: 'b1', c: 'c1', d: 'd1', e: 'e1', f: 'f1' },
    { name: 'name2', a: 'a2', b: 'b2', c: 'c2', d: 'd2', e: 'e2', f: 'f2' },
    { name: 'name2', a: 'a3', b: 'b3', c: 'c3', d: 'd3', e: 'e3', f: 'f3' },
]

var dataTree = list2tree(userList, 'a/c');




console.log(dataTree);



var userTree = {
    name: "root",
    children: [
        {
            level: "province",
            name: "四川",
            children: [
                {
                    name: "成都",
                    level: "city",
                    children: [
                        {
                            name: "高新区",
                            level: "district",
                        },
                        {
                            name: "天府新区",
                            level: "district",
                        }
                    ]
                },
                {
                    name: "南充",
                    level: "city"
                }
            ]
        },
        {
            name: "江苏",
            level: "province"
        }
    ]
}