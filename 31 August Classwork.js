// Array.prototype.myFind = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//         return this[i];
//         }
//     }
// }

// const arr = [1, 2, 3, 4, 5];
// const found = arr.myFind((element) => element > 2);
// console.log(found); 

// Array.prototype.myfilter = function(callback) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//         result.push(this[i]);
//         }
//     }
//     return result;
// }

// const arr = [1, 2, 3, 4, 5];
// const filtered = arr.myfilter((element) => element > 2);
// console.log(filtered);

class Car { 
    constructor(carname, brand) {
    this.carname = carname;
    this.brand = brand;
  }
}

class Model extends Car {
    constructor(carname, brand, model) {
    super(carname, brand);
    this.model = model;
  }
}