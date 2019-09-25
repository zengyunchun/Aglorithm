Number.prototype.add = function(i) {
    return this.valueOf() + i;
}

Number.prototype.minus = function(i) {
    return this.valueOf() - i;
}

let d = (5).add(3).minus(2);
console.log(d);