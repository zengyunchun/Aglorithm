// 原型链继承
// 缺点: 
// 1. 无法向父类构造函数传递参数
// 2. 共享一个原型实例，会覆盖
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
function Student () {}
Student.prototype = new Person();

// 构造函数继承
// 解决上面传参问题
// 缺点: 
// 1. 不能继承原型方法
// 2. 每个实例都会创建父类副本
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
function Student(name) {
    Person.call(this, name);
}

// 组合继承
// 缺点： 
// 1. 一个实例调用两次父类构造函数
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
function Student () {
    Person.call(this, name); // 构造函数
}
Student.prototype = new Person(); // 原型
Student.prototype.constructor = Student; // 还原构造函数

// 原型式继承：
// 缺点：
// 1. 子类实例的属性没法复用，都是临时增加
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
function createObj(father) {
    function F() {}
    F.prototype = father;
    return new F();
}

var sup = new Person();
var student = createObj(sup);

// 寄生式继承： 给原型继承外面套个壳子
// 缺点:
// 1. 没用到原型，无法复用。
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
function createObj(father) {
    function F() {}
    F.prototype = father;
    return new F();
}
function subOject (obj) {
    var sub = createObj(obj);
    sub.age = "xiaoming";
    return sub;
}
var sup = new Person();
var sub = subOject(sup);


// 寄生式组合继承
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
function Student(name,age) {
    Person.call(this, name);
    this.age = age;
}
Student.prototype.getAge = function() {
    return this.age;
}
// 相当于 Object.create()
function createObj(father) {
    function F() {}
    F.prototype = father;
    return new F();
}
//Student.prototype = Object.create(Person.prototype);
Student.prototype = createObj(Person.prototype);
Student.prototype.constructor = Student;


// 寄生式组合继承精简版: 用Object.create()代替自己写的原型继承
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
}
function Student(name,age) {
    Person.call(this, name);
    this.age = age;
}
Student.prototype.getAge = function() {
    return this.age;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


