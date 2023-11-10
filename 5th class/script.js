// // let obj1 = {
// //   a: 10,
// // };

// // console.log(obj1.b);

// // let obj2 = {
// //   b: 20,
// // };

// // obj1.__proto__ = obj2;
// // console.log(obj1.b);

// let obj1 = {
//   nam: "pc",
//   city: "blr",
//   getDetails() {
//     console.log("broken function");
//   },
// };

// let obj2 = {
//     nam:"prikshit",
//     city:"delhi",
//     getDetails(){
//         console.log(`Hi I am ${this.nam} and i am from ${this.city}`);
//     }
// }

// // obj1.getDetails(); -> error calling undefined

// obj2.getDetails();
// obj1.__proto__ = obj2;

// // this won't work because 'obj1.__proto__ = obj2;'
// // obj1.__proto__.getDetails();
// // obj2.getDetails();
// // to call getDetails with ref of obj1
// // use call

// obj2.getDetails.call(obj1);
// obj1.getDetails();

// let obj = {
//   a: 10,
// };

// console.log(obj);
// delete obj.a;
// console.log(obj);


let arr = [1, 2, 3];

delete Array.prototype.map;

arr.map((item) => console.log(item));
// map is coming from arr.__proto__
// or Array.prototype
