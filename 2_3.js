// Problem:
//    - Write a program that takes two strings as input and returns the longest common subsequence of the two strings.
//    - Asume that the input is 2 string type, sometime with space, comma
// Solution:
//    Make hastable with all common in two arr
//    Make array hold word
//    Make array hold word in length order
//    Make word holder
//    For each letter in either array
//      if(letter in hastable)
//        Put into word
//      else
//        put word into array
//        reset word
//     Put word into array
//     For each word in array
//        put word in to it's length index position
//     For each words in order
//     Check if word is a substr of str1
//        Return word if true : []

// const longestSubstr = (str1, str2) => {
//   let hastable = {};
//   let words = [];
//   let word_ordered = [];
//
//   for (let i = 0; i < str1.length; i++) {
//     hastable[str1[i]] = true;
//   }
//
//   let word = ""; // Remmeber put it outside the loop or it will reset
//   for (let i = 0; i <= str2.length; i++) {
//     if (hastable[str2[i]]) {
//       word = word.concat(str2[i]);
//     }
//
//     if (!hastable[str2[i]]) {
//       words.push(word);
//       word = "";
//     }
//   }
//
//   for (let i = 0; i < words.length; i++) {
//     word_ordered[words[i].length] = words[i];
//   }
//
//   const max_seq = word_ordered[word_ordered.length - 1];
//
//   if (isSubstring(str1, max_seq)) {
//     return max_seq;
//   }
//
//   console.log(word_ordered);
//
//   for (let i = word_ordered.length - 2; i >= 0; i--) {
//     if (isSubstring(str1, word_ordered[i])) {
//       return word_ordered[i];
//     }
//   }
//
//   return "";
// };

// Check if a word is a substring of a string
// Take in a string, word
// For each round scan each sequence in a string by word length
//    Count each time value at index word == value at index string
//    For each index in word
//    If string[i + j] !== word[j] reset counter
// If counter === word.length return true
// Return false
const isSubstring = (string, word) => {
    if (!word) return false;
  
    for (let i = 0; i <= string.length - word.length; i++) {
      let counter = 0;
      for (let j = 0; j < word.length; j++) {
        // Why count need to be here if we use it with longestSubstr ?
        counter++;
        if (string[i + j] !== word[j]) {
          counter = 0;
        }
        // count++ here give us wrong string
        // counter++;
      }
      if (counter === word.length) return true;
    }
    return false;
  };
  
  // Creat all possible subseq in a string
  // Make array holder
  // For each time a seq number can be created
  //   Make a word holder
  //   For each letter in subseq length
  //      subseq add string letter
  //   put word into array holder
  // Return arrayholder
  const createSubSeq = (string, num) => {
    let seqs = [];
    for (let i = 0; i <= string.length - num; i++) {
      let seq = "";
      for (let j = 0; j < num; j++) {
        seq = seq.concat(string[i + j]);
      }
      seqs.push(seq);
    }
    return seqs;
  };
  
  // const b = createSubSeq('num', 2);
  // console.log(b) // ['nu', um]
  
  // Solution v2:
  // Caution:
  // - If the common seq is only one letter then return ""
  //
  // Put strings into smaller/bigger var
  // Check if smaller string is substring of bigger
  // Chop smaller in to everysingle sequence (number & word)
  // Iterate each sequen number descendingly
  //    For each word.length
  //      Creat array hold each seq of smaller.length
  //      Check each seq if it substring of bigger
  //        If true return it
  // Return ""
  const longestSubstr = (string1, string2) => {
    let smaller = string1;
    let bigger = string2;
  
    if (string1.length > string2.length) {
      smaller = string2;
      bigger = string1;
    }
  
    if (isSubstring(bigger, smaller)) return smaller;
  
    for (i = smaller.length - 1; i >= 2; i--) {
      let seqs = createSubSeq(smaller, i);
  
      for (let j = 0; j < seqs.length; j++) {
        
        if (isSubstring(bigger, seqs[j]) === true) {
          // let boolean = isSubstring(bigger, seqs[j]);
          // console.log(`${seqs[j]}: ${boolean}`);
          return seqs[j];
        }
      }
    }
  
    return "";
  };
  
  // const a = longestSubstr("abcdef", "abcxyzcdef");
  // console.log(`result: ${a}`); // "bcdef"(wrong) -> "cdef" (right)
  // 
  // const b = isSubstring("bcdef", "abcxyzcdef");
  // console.log(`Test bcdef: ${b}` ); // false
  
  module.exports = longestSubstr;
  
