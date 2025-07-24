class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    /* constructor(name){
        this._name = name;
        this._age = "unknown"
    } */

    get age(){
        return this._age;
    }

    get name(){
        return this._name;
    }

    set age(age){
        this._age = age;
    }

    set name(name){
        this._name = name;
    }

    *testing() {
        yield this._name,
        yield this._age,
        yield this._name,
        yield this._age
    }

}

Person.prototype.getName = function () {
    return this._name;
}

class Male extends Person {
    constructor(name, age){
        super(name, age);
        this._gender = "Male";
    }

    /* constructor(name){
        super(name);
        this._gender = "Male";
    }
 */
    sayHello = () => {
        console.log(super.name);
    }

    getName () {
        return this._name;
    }
    
}

let newPerson = new Male("Muruga", 22);

const iterator = newPerson.testing();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// newPerson.sayHello();

// let newPerson = new Person("Muruga", 22);


/* console.log(newPerson)
console.log(newPerson.getAge()) */

//old class in object

function Car (name, year) {
    this.name = name;
    this.year = year;
    this.func = function () {
        console.log(this.name, this.year);
    }
}

Car.prototype.getYear = function() {
    return this.year;
}

let newCar = new Car("toyota", 2015);

// let func = newCar.func;
// func()

// console.log(newCar.getYear());

// newCar.name = "Supra"
// console.log(newCar.name);



// es module common js moudule diff





//function closure..


function outer () {
    let a = 10;

    function inner () {
        let b = 20;
        console.log( "a :", a , "b :", b);
        a--;
    }

    return inner;
}

let x = outer();
let y = outer();

x();
x();
y();
y();