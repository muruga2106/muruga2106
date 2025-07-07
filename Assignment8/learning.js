
//hoisting - hoisting is a process of moving the function or variable to the top of their scope ( either global or local/block )
// in otherwords we can use the variables before declaration..

// console.log(x); // gives undefined.. we can use but the value is not initialized

var x = 10;

// console.log(x);

// sayHello();

function sayHello() {
    console.log("Hello world !");
}

// console.log(y); will go to temporal dead zone

let y = 20;

// console.log(y);


// scope

//global scope
let global1 = 1;
const global2 = 2;
var global3 = 3;

function checkScope(){

    //function scope
    let func1 = 1;
    var func2 = 2;
    const func3 = 3;
    
    console.log(global1, global2, global3)

    console.log(func1, func2, func3);

    //block scope
    {
        let block1 = 1;
        var block2 = 2;
        const block3 = 3;

        console.log(block1, block2, block3)
    }

    // console.log(block1) let cant used outside the block scope
    console.log(block2)// var we can use outside the block scope
    // console.log(block3) const we cant use outside the block scope



}

// checkScope();

// console.log(func1); we cant use here.. since let declaration has only functional or block scope
// console.log(func2); functional scope - cant run outside the function
// console.log(func3); funcional scope - cant run outside the function



var greeting = "hello";
let helper = "helper";

var temp = 5;

if(temp <= 10){
    var greeting = "world";
    let helper = "muruga";
}

// console.log(greeting);// we will get world.. let fixes this issue..
// console.log(helper)



//constructor..
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greeting = () => {
        console.log("Hello", this.name);
    }
    this.showThis = function() {
        console.log(this);
    }
}

//prototype
Person.prototype.sayBye = function () {
    console.log('Bye from', this.name)
}

const user1 = new Person("Muruga", 20);

var name = "abc";
// console.log(user1.name);
// console.log(user1.age);
// user1.greeting();
// user1.sayBye();

// console.log(this)

function showThis() {
    console.log(this);
}

function fu(){
    // let name = "alice";
    greet();
}


this.name = 'test';

function test () {
    this.greet = () => {
        console.log("hello", this.name)
    }
}

function call() {
    const ob = new test();
    // ob.name = 'test2';
    ob.greet();
}

// call();

function sayThis(name){
    this.name = name;
    console.log("func", this);
    arrowSayThis();
}

const arrowSayThis = () => {
    this.a = 'hello'
    console.log("arr:", this)
}

function Constructor(){
    this.name = "muruga";
    console.log(this);
}

// console.log(this);
// Constructor();
// arrowSayThis();

const newarr = () => {
    console.log(this.a)
}

// newarr();


// let obj = new Constructor();
// console.log(obj.name)

// sayThis('test');


function test (cb) {
    cb();
}


const obj = {
    name: "muruga",
    foo: function() {
        console.log(this.name);
        const self = this;
        test(()=>{
            console.log(this)
        });
    }
};

// obj.foo();

// const fu = obj.foo;
// fu();



let ob = new Entity('muruga', 'perumal', 20);
// Object.assign(target, source)
let newOb = {extra:'extra'};

Object.assign(newOb, ob);

let ob2 = Object.create(ob);

const entries = [['name', 'Alice'], ['age', 30]];
const ob3 = Object.fromEntries(entries);

const arr = Object.entries(ob);

// const people = [
    //     { name: 'Alice', age: 21 },
    //     { name: 'Bob', age: 25 },
    //     { name: 'Charlie', age: 21 },
    //   ];
    
    //   const grouped = people.groupBy(person => person.age);
    
    //   console.log(grouped);
    
    
function Entity(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

Entity.prototype.greet = () => {
    console.log("Hello world..!");
}

const mur = new Entity('muruga','perumal', 20);


const hello = Object.create(mur);

// hello.greet();

// console.log(Entity.prototype)


function Animal(){
    this.name = "animal"
}

Animal.prototype.speak = function(){
    console.log("Hello from", this.name);
}

function Dog(){
    this.name = "Dog";
}

Dog.prototype = {
    __proto__ : Animal.prototype
}

let animal = new Animal();
let dog = new Dog();

// console.log(Animal.prototype.__proto__);
// dog.speak();
// console.log(animal.speak)


let user = {
    name: "muruga"
}

// let newuser = Object.create(user);

let newuser = {
    __proto__ : {
        ...user
    }
}

// console.log(newuser.__proto__)



//array methods..

let array = [];
let array2 = [1,2,3,4,5];

// console.log(array.length);

array.push(1);
array.push({name:"muruga"});

// console.log(array.toString());

// console.log(array.at(1));

array.shift();
// array.unshift(...array)

// array = array.concat(array2);

array2 = array2.copyWithin(1, 0, 5);

// array.delete(2);

console.log(array2);
// console.log(array.join('|'));