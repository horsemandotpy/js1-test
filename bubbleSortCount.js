// Problem:
// Write a program that takes a list of integers as input 
// and returns the minimum number of moves required to sort the list
// in ASCENDING order using bubble sort.

// Solution:
// Make array coppy
// Make Count
// For each number in array
  // For each pointer in the right of head
    // If number > pointer
    // Swap
    // Count++;
const bubbleSortCount = (array) => {
  let arr = array.slice();
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for(let j = i+ 1; j < arr.length; j++) {
      if(temp > arr[j]) {
        arr[i] = arr[j];
        arr[j] = temp;
        count++;
      }
    }
  }
  return count;
}

module.exports = bubbleSortCount;
