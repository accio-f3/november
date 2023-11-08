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

    if (Array.isArray(oldObj)) {
      return oldObj.map((item) => deepClone(item));
    }

    // I want to convert my obj to array
    // of key value pairs
    // Object.enteries
    const arrayOfKeyValue = Object.entries(oldObj);
    console.log(arrayOfKeyValue);
    let deepClonedVersionOfArray = arrayOfKeyValue.map((item) => [
      item[0],
      deepClone(item[1]),
    ]);
    console.log(deepClonedVersionOfArray);
    const finalObj = Object.fromEntries(deepClonedVersionOfArray);
    return finalObj;
}

const res = deepClone(obj);


// sir map me curly braces hote h but in line 26 why using [ ]