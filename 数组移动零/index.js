function moveZero(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] === 0) {
            array.push(0);
            array.splice(i,1)
            i--; // 移动后索引应该不变
            len--; // 移动后总长度减少
        }        
    }
    return array;
}

console.log(moveZero([0,1])) 
console.log(moveZero([0,1,0,0,0,0,3,0,25,0,4])) 