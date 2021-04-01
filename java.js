// 1. NaN
// Question: Comment your answer in your js file: What does NaN stand for?
//NaN is Not a Number it checks if something is a number or not

// Check if "hello" is NaN.
console.log(isNaN("hello"))


// Check if 3 is NaN.
console.log(isNaN(3))




// What is the type of NaN?
//NaN returns a Boolean

// 2. Rounding
// The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.
let num=0.1 * 0.2
console.log(num.toFixed(2));



// 3. Infinity

// Divide Infinity by 0.
console.log(Number.POSITIVE_INFINITY/0)

// Divide Infinity by Infinity.
console.log(Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY)

// Divide 1 by 0.
console.log(1/0)