// ending_index=n-1
let input_string = "hellohhhhhhhhhkumar";
let substring_str = "llo";

// whitespaces
console.log(input_string.lastIndexOf("h"));

let sample_string1 = "Pw Skills Hello World"
console.log(sample_string1.at("H"));

let sample_string2 = "Pw Skills Hello World";
console.log(sample_string1.at("5"));

let sample_string3 = "Pw Skills Hello World";
console.log(sample_string3.startsWith("Pw"));

let sample_string4 = "Pw Skills Hello World"
console.log(sample_string3.startsWith("Hello"));

let sample_string5 = "Pw Skills Hello World";
console.log(sample_string3.endsWith("Pw"));

let sample_string6 = "Pw Skills Hello World";
console.log(sample_string3.endsWith("World"));

// Interpolation

let age = 11;
let myname = "Prayansh";
let address = "Bangalore";         // can change here and the log will also change
console.log(`My name is ${myname} and my age is ${age}`);
console.log(`My name is ${myname} and my age is ${age}.. I live in ${address}`);
// console.log(`My name is ${myname} and my age is {age}.. I live in ${address}`);                //error

let string_val = `My name is ${myname} and my age is ${age}`;
console.log(typeof string_val);

// Arrays and Array Methods

// Array Basic

let sample_array1 = [1, 2, 3, 4, 5,];
// console.log(sample_array1(-2));         // Error because JS does not promote reverse indexing
console.log(sample_array1.at(-2));   // Reverse Indexing correct which JS does note promote using
// console.log(sample_array1(9));  // undifined error

// Methods

console.log(sample_array1.splice(0, 3));   
console.log(sample_array1.splice(1, 1));   
console.log(sample_array1.slice(0, 3));

// Ask sir 
// console.log(sample_array1.toString());
// console.log(sample_array1.join(" "));
// console.log(sample_array1.join("K"));

// Push and Pop Array Methods

let sample_array2 = [1, 2, 3, 4, 5,];
console.log(sample_array2);

// Push
sample_array2.push(100);
console.log(sample_array2);

// Pop
sample_array2.pop();
console.log(sample_array2);

// New array using pop

let sample_array3 = [1, 2, 3, 4, 5,];
let new_value = sample_array3.pop();
console.log(sample_array3);
console.log(new_value);

// Unshift and Shift

// Unshift (Add Starting)
// Shift (Remove Starting)

// Unshift

let sample_array4 = [1, 2, 3, 4, 5]
console.log(sample_array4);
sample_array4.unshift("Hello");
console.log(sample_array4);
sample_array4.unshift(20);
console.log(sample_array4);

// Shift 

sample_array4.shift();
console.log(sample_array4);

const fruits = ["Banana", "Orange", "Apple","Mango"]
// delete fruits[0];  // make a whole and should not be used
// console.log(fruits);

// Loops

// for (initilization; condition; updation;){ ... logic}

for (let d = 0; d < fruits.length; d++) {
    console.log(fruits[d]);
}

for (let b = 1; b < fruits.length; b++) {
    console.log(fruits[b]);
}

for (let a = 0; a < fruits.length -1; a++) {
    console.log(fruits[a]);
}

for (let c = 0; c <= fruits.length -1; c++) {
    console.log(fruits[c]);
}

for (let e = fruits.length -1; e>= 0; e--) {
    console.log(fruits[e]);
}

for (let f = fruits.length -1; f>= 0;) {
    console.log(fruits[f]);
    f--;
}

// for (let g = fruits.length -1; g>= 0) {           //Error
//     console.log(fruits[g]);
//     f--;
// }

const string_sample = "Pw Skills";
for (let h = 0; h < string_sample.length; h++) {
    console.log([h]);
}