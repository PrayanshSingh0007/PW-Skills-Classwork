let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(arr1.concat(arr2)); 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let obj = new Person("Prayansh", 11);
let obj2 = new Person("Ram Prasad", 30);
Person.prototype.getfullName = 'Jai Shree Ram'; 

// prototypal Chaining
// console.log(obj.__proto__.__proto__);
console.log(obj.__proto__);

Object.getPrototypeOf(obj);
console.log(obj.getfullName);

// obj.getfullName = function() {
//     console.log(obj.name);
// }
// obj.getfullName();


// let car = new car ("Audi Q3");

// Person.prototype.getfullName = function() {
//     return this.name;
// }


// Array Length

// polyfill (custom function)
Array.prototype.mylength = function() {
   return this.length;
};

let arr = [1, 2, 3, 4, 5, 10];
array2 = [7,9]
console.log(arr.mylength());    