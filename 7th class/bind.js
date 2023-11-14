Function.prototype.bind = function (objContext, ...fixArgs) {
    const oldFn = this;
    const newFn = function (...nonFixedArgs) {
        return oldFn.call(objContext, ...fixArgs, ...nonFixedArgs);
    }
    return newFn;
}
