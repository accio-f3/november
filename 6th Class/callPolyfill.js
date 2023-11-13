delete Function.prototype.call;

let obj = {
    a: 10,
}

function test(arg1,arg2,arg3){
    console.log(this);
    console.log(arg1,arg2,arg3);
}

Function.prototype.call = function(contextObj,...restArgs){
    // 1st step was storing the function defi
    // inside object
    contextObj.tempFn = this;
    const result = contextObj.tempFn(...restArgs);
    // const result = contextObj.tempFn(restArgs[0],restArgs[1],restArgs[2]);
    delete contextObj.tempFn;
    return result;
}

console.log(obj);
test.call(obj,1,2,3); // at this point it can be
// here
console.log(obj);
