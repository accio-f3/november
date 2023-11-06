// // // // // // // // // // // 
// Shallow copy through
// assingment operator

// let obj1 = {
//   a: 10,
// };

// let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj1.a = 70;

// console.log(obj1);
// console.log(obj2);
// // // // // // // // // // // 

// // // // // // // // // // // 
// trying deep clone using
// spread operator ('...')

// let obj1 = {
//   a: 10,
// };

// let obj2 = { ...obj1 };

// console.log(obj2);
// console.log(obj1);

// obj2.a = 100;

// console.log(obj2);
// console.log(obj1);
// // // // // // // // // // // 

// // // // // // // // // // // 
// trying deep clone on nested
// object using '...' operator

// let obj1 = {
//   a: 10,
//   b: {
//     c: 100,
//   },
// };

// let obj2 = {
//   ...obj1,
// };


// obj2.b.c = 20;

// console.log(obj1);
// console.log(obj2);

// // // // // // // // // // // 

let obj1 = {
  a: 10,
  b: {
    c: 100,
  },
};

let stringObj1 = JSON.stringify(obj1);
console.log(stringObj1);
const obj2 = JSON.parse(stringObj1);
// console.log(obj2);

obj1.b.c = 300;

console.log(obj1);
console.log(obj2);

// const test = JSON.parse('riyazz');
// console.log(test);
