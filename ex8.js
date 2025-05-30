let array = [1, 2, 3, 'hello', 0, 5, null, 8, 2, 'test', 7, 0];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
array.forEach(function(item) {
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    if (item === 0) {
      zeroCount++;
    }
  }
});
console.log(`Количество чётных элементов: ${evenCount}`);
console.log(`Количество нечётных элементов: ${oddCount}`);
console.log(`Количество нулевых элементов: ${zeroCount}`);