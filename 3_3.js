// Problem:
// Write a program that takes a list of integers as input
// and returns the longest increasing subsequence of the numbers.
 
// Edge Case:
// Asumme that the input is number value type
 
// Solution:
// Make array holder
// For each iteration make anchor to 0
  // let count;
  // For each number from anchor + 1
    // If number > anchor
    // anchor = number
    // Count++
  // Push count into array holder index
// Return biggest elemen in arrayholder
const longest_increase_subseq = (array) => {
  let subArr = [];
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    let anchor = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (anchor < array[j]) {
        anchor = array[j];
        count++;
      }
    }
    if (count !== 1) {
      subArr[count] = count;
    }
  }
  return subArr[subArr.length - 1];
};

// const a = [50, 3, 10, 7, 40, 80];
// console.log(longest_increase_subseq(a)); // [2, 4, 3, 3];
module.exports = longest_increase_subseq;
