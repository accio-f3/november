// this of the restOfTheArgs is not a keyword
// you can use anything in place
function abc(...restOfTheArgs) {
    console.log(restOfTheArgs);
    for (let i = 0; i < restOfTheArgs.length; i++) {
        console.log(restOfTheArgs[i]);
    }
}

abc(1, 2, 3, 4, 5, 6);


// '...' -> spread operator
// in general it's spread operator

// but if it's present in function defi parameter
// it acts differently
