/**
 * 腾讯面试题
 * 段落数组里面有字符和图片的节点，分别打印到纸张上面，按照行排版
 * 节点原来有宽高信息，排版后需要在节点中增加位置信息，left和top还有所在页数
 */
function generateSegement() {
    var segement = [];
    for (let index = 0; index < 50; index++) {
        let node = {};
        if ((Math.random() > 0.5)) { // 文本
            node.type = 'text';
            node.width = getRandomNum(5);
            node.height = getRandomNum(5);
        } else { // 图片
            node.type = 'img';
            node.width = getRandomNum(20);
            node.height = getRandomNum(20);
        }
        segement.push(node);
    }
    return segement;
}

function getRandomNum(base) {
    return parseInt((Math.random() * base)) + 1;
}

var pageTotal = 0;

function paint(seg) {
    var pageConfig = { // 纸张
        width: 20,
        height: 50
    };
    let left = 0, // 节点左边距
        curTop = 0, // 当前行最大高度， 每次节点排版需要判断是否更新为最大高度
        upTop = 0; // 当前页累计高度, 定义节点的下边为计算边，真正赋值的时候需要减去节点的高度
    for (let i = 0; i < seg.length; i++) {
        let s = seg[i];
        if (s.width > pageConfig.width || s.height > pageConfig.height) { // 节点尺寸大于纸张大小特殊处理
            s.left = left = 0;
            s.top = 0;
            // 简单按照宽度缩放处理，假设高度不会超出页面纸张
            var ratio = pageConfig.width / s.width;
            s.width = pageConfig.width;
            s.height = ratio * pageConfig.height;
            curTop = s.height; // 更新当前行高度为节点高度，假设小于纸张高度
            upTop = curTop;
            pageTotal++;
        } else {
            const isTurnLine = (left + s.width) > pageConfig.width; // 宽度超出换行 
            const isTurnPage = (upTop + s.height - curTop) > pageConfig.height; // 高度超出换页
            if (isTurnLine || isTurnPage) { // 换行或换页
                if (isTurnLine && !isTurnPage) { // 换行不换页
                    s.left = 0; 
                    s.top = upTop;
                    left = s.width;
                    curTop = s.height;
                    upTop = upTop + s.height;
                } else if (isTurnPage) { // 换页肯定换行
                    s.left = 0; 
                    s.top = 0;
                    left = s.width;
                    upTop = curTop = s.height;
                    pageTotal++;
                }
            } else { // 正常流
                s.left = left;
                left += s.width;
                if (s.height > curTop) { // 当前节点高度大于当前行其他节点高度
                    upTop = upTop + s.height - curTop;
                    curTop = s.height;
                }
                s.top = upTop - s.height; // 真正位置高 = 下边高 - 节点高 
            }
        }
        s.curPage = pageTotal; // 页码计数
    }
    return seg;
}

var beforSeg = generateSegement();
console.log("排版前节点:", beforSeg);
var afterSeg = paint(beforSeg);
console.log("排版后节点:", afterSeg );
console.log("排版后页数:", pageTotal);