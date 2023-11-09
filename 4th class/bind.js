let obj = {
  a: 10,
  b: 100,
};

function test(a, b, c) {
  console.log(this);
  return a + b + c;
}

console.log(obj);
const newTest = test.bind(obj);
console.log(obj);
console.log(newTest(10,20,30));

// so the newTest is having the exact same defi
// as of test fn but in this function
// value of this keyword is obj

// problem is -> you want to run this
// test fn again & again
// but with diff values of a,b,c
// but it should be always binded with obj

// console.log(test.call(obj, 10, 20, 30));
// console.log(test.call(obj, 60, 25, 33));
// console.log(test.call(obj, 40, 22, 36));
// console.log(test.call(obj, 0, 20, 0));
// console.log(test.call(obj, 0, 20, 30));

// bind method is a syntactical sugar over
// call method 
