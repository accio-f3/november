
// item -> 1 (0th iteration)
// item -> 2 (1st iteration)
// item -> 3 (2nd iteration)
let arr = [1, 2, 3];
// delete Array.prototype.map;

Array.prototype.myMap = function (callBackFn) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callBackFn(this[i], i));
  }
  return res;
};
const arr1 = arr.map((item) => {
  return item * 10;
});
// arr.map((item) => console.log(item));
const arr2 = arr.myMap((item) => {
  return item * 10;
});

console.log(arr1);
console.log(arr2);

// let arr1=[];
// let arr2=[];
// let arr3=[];
// arr.map();
// map is coming from arr.__proto__
// or Array.prototype

// polyfill is writting our own method
// if brower engine is not capable of
// generating it
