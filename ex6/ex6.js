function areAllElementsEqual(arr) {
    return new Set(arr).size <= 1;
  }
  
  console.log(areAllElementsEqual([1, 1, 1, 1])); // true
  console.log(areAllElementsEqual([1, 2, 1, 1])); // false