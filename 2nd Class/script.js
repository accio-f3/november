let obj = {
  a: 10,
  b: 100,
  c: {
    q: 70,
  },
};

const deepClone = (oldObj) => {
    // if my oldObj is not an object
    // I just need to return it
    // no need to write any logic for
    // that
    const type = typeof oldObj;
    if (type !== "object" || !oldObj) return oldObj;

    // I want to convert my obj to array
    // of key value pairs
    // Object.enteries
    const arrayOfKeyValue = Object.entries(oldObj);
    let deepClonedVersionOfArray = arrayOfKeyValue.map((item) => [
      item[0],
      deepClone(item[1]),
    ]);
    const finalObj = Object.fromEntries(deepClonedVersionOfArray);
    return finalObj;
}

const res = deepClone(obj);
res.c.q=100;
console.log(res);
console.log(obj);
