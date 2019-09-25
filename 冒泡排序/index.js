// 冒泡排序，复杂度为O(n^2)
function Bubble(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                const temp = array[i];
                array[i] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}


function Bubble1(array) {
    let loopCount = 0;

    for (let i = 0; i < array.length; i++) {
        let flag = 0; // 记录没有交换则跳出循环
        for (let j = i; j < array.length; j++) {
            loopCount++;

            if (array[i] > array[j + 1]) {
                const temp = array[i];
                array[i] = array[j + 1];
                array[j + 1] = temp;
                flag = 1;
            }
        }
        if (flag === 0) {
            break;
        }
    }
    console.log("loopCount", loopCount);

    return array;
}



function Bubble2(array) {
    let k = array.length - 1;
    let loopCount = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let flag = 0; // 记录没有交换则跳出循环
        let newPos = 0;
        for (let j = i; j < k; j++) {
            loopCount++;
            if (array[i] > array[j + 1]) {
                const temp = array[i];
                array[i] = array[j + 1];
                array[j + 1] = temp;
                flag = 1;
                newPos = j;
            }
        }
        if (flag === 0) {
            break;
        }
        k = newPos;
    }
    console.log("loopCount", loopCount);
    return array;
}


const bubbleSort = arr => {
    let loopCount = 0;

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            loopCount++;

            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log("loopCount", loopCount);
    return arr;
};


let newArray = bubbleSort([6, 3, 1, 9, 2, 4, 0]);
console.log(newArray);