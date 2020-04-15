Array.prototype.shell = function shell () {
    // 第一次步长用数组长度的一半
    let gap = Math.floor(this.length /2);
    // 步长直到缩减到1为止
    while (gap >= 1) {
        // 从步长下标开始遍历，第一次相当于一半
        for(let i = gap; i < this.length; i++) {
            // j就是分组内的前一个下标
            let j = i;
            // 每组比较两个值，后面大于前面则交换位置
            while (j-gap >= 0 && this[j] < this[j-gap] ) {
                swap(this, j, j-gap);
                j = j - gap;
            }
        }
        // 逐渐缩小步长, 继续分组
        gap = Math.floor(gap / 2);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let array = [8,23,2,56,5,34,9,5,1,18];
array.shell();
<<<<<<< HEAD
console.log(array); 




// 自己手写
Array.prototype.shell2 = function shell2 () {

}

function swap2(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let array2 = [8,23,2,56,5,34,9,5,1,18];
array2.shell2();
console.log(array2); 


var a = "aa";
function jason() {
    var name = "jason"
    function f() {
        return name;
    }
   return f();
}
jason();

var ExecuteContextStack = [
    fContext = {
        AO : {
            arguments: {
                length:0
            }
        },
        scope: [fContext.AO, jasonContext.AO, globalContext.VO],
        this: undefined
    },
    jasonContext = {
        AO : {
            name,
            f
        },
        scope: [jasonContext.AO, globalContext.VO],
        this: undefined
    },
    globalContext = {
        VO: {
            a,
            jason
        },
        scope: [globalContext.VO],
        this: globalContext.VO
    }
]
=======
console.log("1", array); 


function hillSort(array) {

    let length = array.length;
  
    // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序 
    if (!Array.isArray(array) || length <= 1) return;
  
  
    // 第一层确定增量的大小，每次增量的大小减半
    for (let gap = parseInt(length >> 1); gap >= 1; gap = parseInt(gap >> 1)) {
  
      // 对每个分组使用插入排序，相当于将插入排序的1换成了 n
      for (let i = gap; i < length; i++) {
        let temp = array[i];
        let j = i;
  
        while (j - gap >= 0 && array[j - gap] > temp) {
          array[j] = array[j - gap];
          j -= gap;
        }
        array[j] = temp;
      }
    }
  
    return array;
  }

  let array2 = [8,23,2,56,5,34,9,5,1,18];

  console.log("2",hillSort( array2));

// 自己写的
function shellSortJason(arr) {
    var length = arr.length;
    if (!Array.isArray(arr) || length <= 1) return arr;
    for (let gap = parseInt(length>>1); gap >= 1; gap =  parseInt(gap>>1)) {
        for (let i = gap; i < length; i++) {
            let j = i;
            while (j - gap >= 0 && arr[j -gap] > arr[j]) {
                swap(arr, j, j-gap);
                j -= gap;
            }
        }
    }
    return arr;
}


let array3 = [8,23,2,56,5,34,9,5,1,18];

console.log("3",shellSortJason( array2));
>>>>>>> f39810c8f1d8c58a91c4e8267a303d33b0af79b1
