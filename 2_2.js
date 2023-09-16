// Problem:
//  - Write a program that takes a list of strings as input
//    and returns the longest string in the list.
//  - Assume the input is array with only string value type
// Solution:
//   - Create new array by shallow copy the input
//   - Use Insertion Sort to sort array by string length asc
//      // For each time it swap a value
//            For each time it point to left
//            Mark it  index
//            Mart left index position
//            Create temp hold it length
//              If element length < closest left
//                string[position] = string[index]
//                string[position + 1] = temp;
//          Return arr.length[0]
const selection_sort_second = (array) => {
  const arr = array.slice();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      let position = j - 1;
      let temp = arr[j];
      if (arr[j].length > arr[position].length) {
        arr[position + 1] = arr[position];
        arr[position] = temp;
      }
      position--;
    }
  }
  return arr[0];
};

// const test = ["c", "abc", "abcd", "ab"];
// const a = selection_sort_second(test); // ab
//
// console.log(a);

module.exports = selection_sort_second;
