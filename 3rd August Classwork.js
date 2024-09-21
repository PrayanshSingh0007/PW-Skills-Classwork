// function Car(name, model , basePrice){
// //     this.name = name;
//     this.model = model;
//     this.basePrice = basePrice;
//     this.gearinfo = function(){
//         return "This is the gear info of $(this.name)";
// }
// }

// es6 2015
// let xuv = new Car("XUV700", "2021", 170000);
// object.freeze(xuv);

// xuv["ownerinfo"] = "This car is owned by Prayansh";
// // console.log(xuv,hasownProperty("ownerinfo"));

// let TharRoxx = new Car("Thar Roxx", "2024", 150000)

// console.log(xuv);
// console.log(typeof xuv);
// console.log(xuv.gearinfo())




// let obj = {
//     name: "Pw Skills",
//     gear:()=>{
//         return this.name;
//     }
// }

// let array1 = [1,2,3,4,10,12,16,18];
// console.log(array1.filter((value) => value % 2 ==0)); 
// console.log(array1.filter((value) => value % 2 !=0));



let input_array=[0,1,1,2,3,4,5,2,3,4,5,0,0,0,1,2,3]
console.log(input_array.filter((value) => value !== 0));