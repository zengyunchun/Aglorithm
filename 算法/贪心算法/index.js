
let moneyArray = [
    {
        type: 1,
        count: 5,
    },
    {
        type: 5,
        count: 2,
    },
    {
        type: 10,
        count: 2,
    },
    {
        type: 50,
        count: 3,
    },
    {
        type: 100,
        count: 5,
    },
];
function solveMoney(money) {
    let num = 0;
    for (let i = moneyArray.length - 1; i >= 0; i--) {
        let m = moneyArray[i];
        let c = Math.min(Math.floor(money / m.type), m.count);
        money -= c * m.type;
        num += c;
    }
    if (money > 0) num = -1;
    return num;
}

let d = solveMoney(465);
console.log(d);