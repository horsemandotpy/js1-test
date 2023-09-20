// Problem:
// Take in an array, write function that return
// array with unique elemen in the array
// Edge Case:
//  Assume the input is only array contain primitive vale type same type
// Solution
// Use hastable to store value of elemen as a key
// Use for loop create array contain only key
const uniq = (array) => {
  let hastable = {};
  let uniq = [];
  for (let i = 0; i < array.length; i++) {
    if (!hastable[array[i]]) {
      hastable[array[i]] = true;
    }
  }
  for (const key in hastable) {
    if (typeof array[1] !== Number) {
      uniq.push(key);
    } else {
      uniq.push(parseInt(key));
    }
  }
  return uniq;
};

module.exports = uniq;
