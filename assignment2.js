
// Implementation of functions to recreate native JavaScript methods 

const arr = [1,2,3,1];
const testMap = {"a":1, "b":2, "c":3};
console.log("array: ");
console.log(arr);

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
        newArray.push(callbackFn(this[i]));
    }
    return newArray;  
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)) {
            newArray.push(callbackFn(this[i]));
        }
        else continue;
    }
    return newArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this)) {
            console.log("element that is true: ", this[i]);
            console.log("index of element: ", i);
            return true;
        }
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    let i = 0;
    while (i < this.length) {
        if (callbackFn(this[i], i, this)) {
            i++;
        }
        else {
            console.log("first element that is not true: ", this[i]);
            console.log("index of element: ", i);
            return false
        }
    }
    return true;
};

// // REDUCE //
// Array.prototype.myReduce = function() {

// };

// INCLUDES //
Array.prototype.myIncludes = function(x) {
    let i = this.length;
    while (i--) {
        if (this[i] === x) return true;
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(x) {
    for (i  = 0; i < this.length; i++) {
        if (this === undefined) continue;
        if (this[i] === x) return i;
    }
    return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;

    for(let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(x) {
    let i = this.length;
    while (i--) {
        if (this === undefined) continue;
        if (this[i] === x) return i;
    }
    return -1;
};

// KEYS //
Object.grabKeys = function(x) {
    let output = [];
    for (key in x) {
        if (x === undefined) continue;
        output.push(key);
    }
    return output; 
};

// VALUES //
Object.grabValues = function(x) {
    let output = [];
    for (key in x) {
        if (x === undefined) continue;
        output.push(x[key]);
    }
    return output;
};

// ----------- METHOD TESTS  ----------- //

// // myEach //
// console.log("myEach: ") ;
// arr.myEach( x => console.log(x) );
// const isEven = (number) => console.log(number%2 === 0);
// console.log("myEach(isEven): ");
// arr.myEach(isEven);
// console.log("forEach(isEven): ");
// arr.forEach(isEven);

// // myMap //
// const twice = (number) => (number*2);
// console.log("myMap: ");
// console.log(arr.myMap(twice));
// console.log(arr);

// // myFilter //
// function greaterThan(number) {
//    if (number > 1) {
//        return number;
//    }
//  }
// console.log("myFilter: ");
// console.log(arr.myFilter(greaterThan));

// // mySome //
// const numEquals4 = (number) => (number === 4);
// const numEquals3 = (number) => (number === 3);
// console.log("mySome: ");
// console.log("element = 4");
// console.log(arr.mySome(numEquals4));
// console.log("element = 3");
// console.log(arr.mySome(numEquals3));

// // myEvery //
// const lessThan = (number) => (number < 3);
// const greaterThan = (number) => (number > 0);
// console.log("myEvery: ");
// console.log("every element is less than 3: ")
// console.log(arr.myEvery(lessThan));
// console.log("every element is greater than 0: ")
// console.log(arr.myEvery(greaterThan));

// // myIncludes //
// console.log("includes 3");
// console.log(arr.includes(3));
// console.log("myIncludes 3");
// console.log(arr.myIncludes(3));

// // myIndexOf //
// console.log("index of 1");
// console.log(arr.indexOf(1));
// console.log("myIndexOf 1");
// console.log(arr.myIndexOf(1));

// // myPush //
// console.log("myPush: ");
// arr.myPush(4,5,6);
// console.log(arr);

// // myLastIndexOf //
// console.log("last index of 1");
// console.log(arr.lastIndexOf(1));
// console.log("myLastIndexOf 1");
// console.log(arr.myLastIndexOf(3));

// // grabKeys //
// console.log("myMap keys");
// console.log(Object.keys(testMap));
// console.log("myMap grabKeys");
// console.log(Object.grabKeys(testMap));

// // grabValues //
// console.log("myMap values");
// console.log(Object.values(testMap));
// console.log("myMap getValues");
// console.log(Object.grabValues(testMap));



