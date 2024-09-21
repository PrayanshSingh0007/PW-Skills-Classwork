let a = { name: { firstName: { surname: "Singh" } } }; //falsy
let b = "PW Skills"; // truthy
let d = "Hello";

// (falsy || truthy)
// let c = d && true;
// left to right
console.log(a && a.name && a.name.firstName && a.name.firstName.surname);

// 0,false , '',null, NaN, undefined
//[],