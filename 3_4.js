// Problem:
// Write a program that takes a list of strings as input
// and returns the two strings with the largest overlap of characters.

// Edge Case:
// Assume that the input is array with string value type only
// The two string should have the most OVERLAP of character
// Overlap score formula is number of overlap/string.length

// Solution:
// Creat array of anagrams from strings in array.
// Create array holder
// For each ele in array
// For each ele in left of ele[0]
// Push both ele and ele + 1 into holder
// Return array holder
const create_anagrams = (array) => {
  const anagrams = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      anagrams.push([array[i], array[j]]);
    }
  }
  return anagrams;
};

// Create array hold number of character that overlap in anag pair.
// Create hastable from ele[0]
// Make count
// For each elemen in ele[1]
// If in hastable and value != 0 count++
// Value of that char in hastable -1
// Return count/ele[0].length + count/ele[1].length
const overlap_of_two = (array) => {
  let count = 0;
  let hastable = {};
  for (let i = 0; i < array[0].length; i++) {
    if (hastable[array[0][i]] === 1) {
      hastable[array[0][i]]++;
    } else {
      hastable[array[0][i]] = 1;
    }
  }
  for (let i = 0; i < array[1].length; i++) {
    if (hastable[array[1][i]] && hastable[array[1][i]] > 0) {
      count++;
      hastable[array[1][i]]--;
    }
  }

  return count;
};

// Return the most overlap pair.
const maximumOverlapString = (array) => {
  const ana = create_anagrams(array);
  const overlapScore = [];
  for (let i = 0; i < ana.length; i++) {
    let indexScore = overlap_of_two(ana[i]);
    overlapScore[indexScore] = ana[i];
  }
  return overlapScore[overlapScore.length - 1];
};

module.exports = { create_anagrams, overlap_of_two, maximumOverlapString };
