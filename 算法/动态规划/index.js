/*
    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
    注意：给定 n 是一个正整数
 */
 function ClimbStairs(n) {
    let step = Array(n);
   
    step[1] = 1;
    step[2] = 2;
    for (let i = 3; i <= n; i++) {
        step[i] = step[i-1] + step[i-2]
    }
    return step[n];
 }

 console.log(ClimbStairs(7));


 function ClimbStairs2(n) {
     let step = Array(n);
    //  step[0] = 0;
     step[1] = 1;
     step[2] = 2;
     for (let i = 3; i <= n; i++){
        step[i] = step[i-1] + step[i-2];
     }
     return step[n];
 }

 console.log(ClimbStairs2(7));