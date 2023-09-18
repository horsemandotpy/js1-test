// Problem:
  // Write a program that 
  // takes a list of numbers as input and 
  // returns the second smallest number in the list.
// Edge Case:
  // Assume that we only take in array of interger type value
// Solution
// Make copy array from input
// Use selection sort asc
// Return array[1]

const selection_sort = (array) => {
  const arr = array.slice();
  // For each elemen in array
  for(let i = 0; i < arr.length; i++) {
  // Set i as smallest
    for(let j = i + 1; j < arr.length; j++) {
      // Each time find smallest swap to i;
      if(arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
    }
  return arr;
}

// const a = [4,3,2,1];
// const test = selection_sort(a);
// console.log(test); // [1,2,3,4]

const second_smallest = (array) => {
  const arr = selection_sort(array);
  return arr[1];
}

module.exports = second_smallest;
