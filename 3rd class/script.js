// call,bind & apply will work
// only with normal functions
// not with arrow functions

// Call method
// // // // // // // // //
let obj = {
  age: 24,
  nestedObj: {
    myAge: 70,
  },
};

function intro(){
    console.log(this.age);
}

// intro(); // here `myAge` is binded with
// // window obj
console.log(obj);
intro.call(obj);
console.log(obj);
// // // // // // // // // //

// call method with functions
// that have args
// let obj = {
//   firstName: "Rohit",
// };

// function intro(lastName) {
//   console.log(`hi i am ${this.firstName} ${lastName}`);
// }

// intro("Sharma");

// intro.call(obj);
// intro.call(obj, "sharma");

// function sum(arg1, arg2, arg3) {
//   console.log(this);
//   return arg1 + arg2 + arg3;
// }

// const args = [10, 20, 56];

// // this is known as spreading of array
// // args[0],args[1],args[2]

// console.log(sum(...args));

// console.log(sum.call(obj,...args));

// console.log(sum.apply(obj,args));

// call takes obj as 1st argument
// and rest of the arguments
// so in total we have -> ( obj +  args ) as total arguments


// apply takes obj as 1st argumnet
// it takes array of arguments
// so intotal apply accepts only 2 arguments


// call and apply they 
// bind functions momentarily 