const reverse = (array) => {
  const a = [];
  for(let i = array.length - 1; i >= 0; i--) {
    a.push(array[i]);
  }
  return a;
}

module.exports = reverse;
