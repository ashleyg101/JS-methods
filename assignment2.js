

const arr = [1,2,3];

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// // TEST
// console.log("myEach: ") ;
// arr.myEach( x => console.log(x) );

// console.log("forEach: ");
// arr.forEach( x => console.log(x) );

// const isEven = (number) => console.log(number%2 === 0);

// console.log("myEach(isEven): ");
// arr.myEach(isEven);

// console.log("forEach(isEven): ");
// arr.forEach(isEven);

// console.log("includes 3");
// console.log(arr.includes(3));

// console.log("myIncludes 3");
// console.log(arr.myIncludes(3));


// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function(x) {
    let i = this.length;
    while (i--) {
        if (this[i] === x) return true;
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
