delete Function.prototype.apply;

Function.prototype.apply = function (objContext, argsArray) {
    objContext.tempFn = this;
    const res = objContext.tempFn(...argsArray);
    delete objContext.tempFn;
    return res;
}

Function.prototype.test=function test() {
    console.log(this);
}

function abc(){
    console.log('we are inside abc');
}

abc.test();

// test is considering abc as
// an object and printing 
// the function defi
