// 原始 list 如下
let list = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
];
//const result = convert(list);

// 转换后的结果如下
let result = [
    {
        id: 1,
        name: '部门A',
        parentId: 0,
        children: [
            {
                id: 3,
                name: '部门C',
                parentId: 1,
                children: [
                    {
                        id: 6,
                        name: '部门F',
                        parentId: 3
                    }, {
                        id: 16,
                        name: '部门L',
                        parentId: 3
                    }
                ]
            },
            {
                id: 4,
                name: '部门D',
                parentId: 1,
                children: [
                    {
                        id: 8,
                        name: '部门H',
                        parentId: 4
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: '部门B',
        parentId: 0
    },
];


const map = list.reduce((res, v) => {
    let a = res[v.id] = v;
    let c = res;
    let d =(a, c);  // 小括号运算符，返回最后一个值，没有啥特殊用法，还以为是es6的语法，怀疑人生
    console.log("这是a:",a);
    console.log("这是c:",c);
    console.log("这是d:",d);
    return d;
}, {});
console.log(map);