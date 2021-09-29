

const arr = [1,2,3];

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// TEST
console.log("myEach: ") ;
arr.myEach( x => console.log(x) );

console.log("forEach: ");
arr.forEach( x => console.log(x) );

const isEven = (number) => console.log(number%2 === 0);

console.log("myEach(isEven): ");
arr.myEach(isEven);

console.log("forEach(isEven): ");
arr.forEach(isEven);

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        (callbackFn(this[i], i, this));
        newArray.push(callbackFn(this[i]));  
    }
    return newArray;  
};

// TEST 
const twice = (number) => (number*2);
console.log("myMap: ");
console.log(arr.myMap(twice));
console.log(arr);

// // FILTER //
// Array.prototype.myFilter = function() {

// };

// // SOME //
// Array.prototype.mySome = function() {

// };

// // EVERY //
// Array.prototype.myEvery = function() {

// };

// // REDUCE //
// Array.prototype.myReduce = function() {

// };

// // INCLUDES //
// Array.prototype.myIncludes = function() {

// };

// // INDEXOF //
// Array.prototype.myIndexOf = function() {

// };

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

// TEST //
console.log("myPush: ");
arr.myPush(4,5,6);
console.log(arr);

// // LASTINDEXOF //
// Array.prototype.myLastIndexOf = function() {

// };

// // KEYS //
// Object.grabKeys = function() {

// };

// // VALUES //
// Object.grabValues = function() {

// };
