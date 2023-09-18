//Promblem:
// Write a program that
// takes a list of integers as input and
// returns the maximum sum of any contiguous subarray within the list.
// - Assume the array is contain ony number value type

// Solution:
// Make array sum function helper
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// Make function helper that creat subseq array
const createSubSeqs = (array) => {
  let arr = array.slice();
  let seqs = [];
  let lengthOfSeq;
  // For numer of elemen in array desc
  for (lengthOfSeq = arr.length - 1; lengthOfSeq >= 2; lengthOfSeq--) {
    // For number of elemen in subarray
    for (let numEle = 0; numEle <= arr.length - lengthOfSeq; numEle++) {
      // Make subholder
      let seq = [];
      for (let i = 0; i < lengthOfSeq; i++) {
        // Push elemen[i + j] into sub holder
        seq.push(arr[i + numEle]);
      }
      // Push subholder into arrayholder
      seqs.push(seq);
    }
  }
  // Return array holder
  return seqs;
};

// const a = [1, 2, 3];
// const test = createSubSeqs(a);
// console.log(test); // [[1,2], [2,3]]

const largest_subarr_sum = (array) => {
  // Take in array of number
  // Make a copy of that array
  // Make array holder
  const arr = array.slice();
  const subArr = [];
  // Make subseq elemen of that array
  const seqs = createSubSeqs(arr);
  // For each array in seqs
  for (let i = 0; i < seqs.length; i++) {
    //    Calculate it sum
    let sum = sumArray(seqs[i]);
    //    Use it value as index in array holder
    //    Push element into array holder
    subArr[sum] = sum;
  }
  // return array[length - 1]
  return subArr[subArr.length - 1];
};

// const b = [-2, -3, 4, -1, -2, 1, 5, -3];
// const test2 = largest_subarr_sum(b); // [4, -1, -2, 1, 5] or 7
//
// console.log(test2);
module.exports = largest_subarr_sum;
