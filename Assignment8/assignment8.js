// get date and print the day it falls on...

let date = new Date();

const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday"
}

var dayNumber = date.getDay();
console.log(days[dayNumber]);


//splice method

let arr = [1, 2, 3, 4, 5, 6, 7];

let removed = arr.splice(1, 2, 8, 9);

console.log("The elements removed from the array using slice method :", removed);
console.log("The updated array after using slice method :", arr);

arr.push({name: "muruga"});

console.log("The example for array can store different values :", arr);

let str = "Hello, this is a cat, cat is sleeping under the table.. the cat is sleeping in the cat bed";

let updatedStr = str.replaceAll("cat", "dog");

console.log(updatedStr);


//get an object as an input and print it in valid json format..

console.log("-----------------------------------");

const obj = { a: 1, b: 2, c: {d: { e : 1}} };

function printJson(obj, tabCount){
    let tab = ' ';
    console.log(tab.repeat(tabCount) ,'{');
    tabCount++;
    for(let key of Object.keys(obj)){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            console.log(tab.repeat(tabCount), key);
            printJson(obj[key], tabCount);
        }
        else console.log( tab.repeat(tabCount), key, ':', obj[key]);
    }
    tabCount--;
    console.log(tab.repeat(tabCount), '}');
}

// printJson(obj, 0);


console.log(JSON.stringify(obj, null, 2))