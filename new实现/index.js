



function newObject(fn) {
    let proto = (typeof fn.prototype === "object" ) ? fn.prototype : {};
    let obj = Object.create(proto);
    
    let res =  fn.apply(obj, Array.prototype.slice.call(arguments,1));

    if (Object(res) === res) {
        return res;
    }
    return obj;
}


function Fool() {
    this.a = 1;
}

Fool.prototype.getA = function() {
    return this.a;
}

let obj = newObject(Fool);
console.log(obj.a);
console.log(obj.getA());
