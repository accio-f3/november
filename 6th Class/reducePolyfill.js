delete Array.prototype.reduce;

Array.prototype.reduce = function (callBackFn, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        // when i ===0
        if (accumulator === undefined) {
            accumulator = this[i]; // 0 or i
        }
        // when i>0
        else {
            accumulator = callBackFn(accumulator, this[i]);
        }
    }
    return accumulator;
}

// let arr = [9, 2, 10];

// let sum = arr.reduce((acc, item) => {
//     return acc + item;
// }, 100);

// console.log(sum);

// no initial value
let arr = [9, 2, 10];

let sum = arr.reduce((acc, item) => {
    return acc + item;
});

console.log(sum);
