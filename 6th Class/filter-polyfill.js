delete Array.prototype.filter;

Array.prototype.filter = function (callBack) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i)) {
            result.push(this[i]);
        }
    }
    return result;
}

// let age = [20, 17, 18, 14];

// let newAge = age.filter((item) => {
//     // if (item < 18) return false;
//     // else return true;
//     return item >= 18;
// });

// console.log(newAge);


let oldArr = [false, false, false];
let newArr = oldArr.filter((item,i) => {
    console.log(i);
    return item;
});

console.log(newArr);
