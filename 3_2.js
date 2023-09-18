// Problem:
// Write a program that takes a list of integers as input
// and returns the maximum difference between any two elements in the list.
// Edge Case:
// Assume the input type is interger
// Result depend on ANY two elements in the array

// Solution:
// Make function helper create combine of any two ele
const combineOfTwo = (array) => {
  const arr = array.slice();
  const combine = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        combine.push([arr[i], arr[j]]);
      }
    }
  }

  return combine;
};

// Make function helper return number diff
// Make copy of array
// Make bigger
// Make smaller
// Return bigger - smaller
const diff_two = (arr) => {
  let smaller = arr[0];
  let bigger = arr[1];
  if (smaller > bigger) {
    smaller = arr[0];
    bigger = arr[1];
  }

  return bigger - smaller;
};

const largest_diff = (array) => {
  const arr = combineOfTwo(array);
  let diffArr = [];
  for (let i = 0; i < arr.length; i++) {
    let index = diff_two(arr[i]);
    diffArr[index] = arr[i];
  }
  let maxDiff = diffArr.length - 1;
  return maxDiff;
};

module.exports = { combineOfTwo, diff_two, largest_diff };
