// Problem:
//    - Take in a array of numbers as input and return the second
//      largest number in that list
//    - Assume that the array only contain number value type
// Solution:
//    - Sort the decs and return array[1]
//    Take in an array
//    Make a coppy of that arrray
//    - Use bubble sort
//        For each number in array
//          For each number in half of the array
//            Make number holder
//            If number < number +1
//              arr[i + 1] = i
//              arr[i] = arr[i + 1]
//        Return array holder
const bubblesort_second = (array) => {
  const arr = array.slice();

  if (array.length < 2) return null;

  let same = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      same = false;
    }
  }

  if (same) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      let bigger = arr[i + 1];
      if (arr[i] < bigger) {
        arr[i + 1] = arr[i];
        arr[i] = bigger;
      }
    }
  }

  return arr[1];
};

// const a = [70, 11, 20, 4, 100];
// const test = bubblesort_second(a); // 2
// console.log(test);

module.exports = bubblesort_second;
