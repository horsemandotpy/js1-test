// Problem: 
// Write a program that takes a list of numbers as input 
// and returns the sum of the numbers 
// that are divisible by both 3 and 5.
// - Assume that the input is an array contain 
// only interger nummber value type
// Solution:
// Create Array holder
// Create sumholder
// For each number in array
//    if(number divisible by 3 & divisible by 5) {
//      Push number into array holder
//  }
//  For each number in array holder 
//    Sum = sum + number
//  Return sum;

const fizzBuzzSum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let currNum = array[i];
    if (currNum % 3 === 0 && currNum % 5 === 0) {
      sum += currNum;
    }
  }
  return sum;
}

// const a = [1,3,5, 15]
// const test = fizzBuzzSum(a);
// console.log(test) // 15;
module.exports = fizzBuzzSum;
