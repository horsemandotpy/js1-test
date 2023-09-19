// Problem
// Take in an array and an split number
// Return array that contain subarr each have split number length
// Solution
// Make array holder
// For each sub array
// Make sub array holder
// For each element in array
// Push it into sub array holder
// Push subarray into array holder
// Return array holder
const chunk = (array, number) => {
  const arr = [];
  let sub = [];
  for (let i = 0; i < array.length; i++) {
    if (sub.length < number) {
      console.log(array[i])
      sub.push(array[i]);
    } else {
      arr.push(sub);
      sub = [];
    }
  }
  return arr;
};

module.exports = chunk;
