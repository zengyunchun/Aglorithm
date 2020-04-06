/**
    这三种遍历的顺序是十分好记的：
    前序：根左右
    中序：左根右
    后序：左右根
    其实这三种遍历方式都是深度优先遍历的一类，只是在获取数据的时间点不同
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


 // 前序遍历： 根左右
 function preorder (root) {
    var stack = [];
    function helper (node) {
        if (!node) return;
        stack.push(node.value); // 一开始打印
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return stack;
 };

 console.log("preorder", preorder(binarayTree)); 

  // 中序遍历： 左根右
  function inorder (root) {
    var stack = [];
    function helper (node) {
        if (!node) return;
        helper(node.left);
        stack.push(node.value); // 中间打印
        helper(node.right);
    }
    helper(root);
    return stack;
 };

 console.log("inorder", inorder(binarayTree)); 

 
  // 中序遍历： 左根右
  function postorder (root) {
    var stack = [];
    function helper (node) {
        if (!node) return;
        helper(node.left);
        helper(node.right);
        stack.push(node.value); // 最后打印
    }
    helper(root);
    return stack;
 };

 console.log("postorder", postorder(binarayTree)); 
