// if match is cancelled
// of one sided

// [0, 1, 2, [3, 4]];

let oldArr = [1, 2, [3, 4, 5], [6, 7, [8, 9]]];


// [3, 4, 5] -> [3, 4, 5]
// [6, 7, [8, 9]] -> [6, 7, 8, 9]

function myFlat(arr) {
    const res = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            const miniAns = myFlat(element);
            res.push(...miniAns);
        }
        else {
            res.push(element);
        }
    })
    return res;
}

const newArr = myFlat(oldArr);
console.log(newArr);
