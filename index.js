
// function "multiplacation"- returns the product of two values.
// Happy- input the function with 3 and 5 and would expect 15.
// unhappy- input the function with 3 and 5 and would  not expect 20.
// unhappy- input the function with 3 and 5 and would  not expect 8.
// unhappy- input the function with 3 and 5 and would  not expect 2.
// unhappy- input the function with 3 and 5 and would  not expect -2.

const multiplication = (x, y) => {
  return x * y;
};

// function "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers
// Happy- expect array 1 [1, 3, 5], and array 2 [2, 4, 6] to equal [1, 3, 5];
// unhappy-expect array 3 [11, 33, 55], and array 4 [22, 44, 66] not equal [22, 44, 66];
// unhappy-expect array 1 [1, 3, 5], and array 2 [2, 4, 6] not equal [-2, 4, 6];
// unhappy-expect array 1 [1, 3, 5], and array 2 [2, 4, 6] not equal [1, 2, 3, 4, 5];

const concatOdds = (arr1, arr2) => {
  const combinedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    combinedArray.push(arr2[i]);
  }

  const oddNumbers = [];
  for (let i = 0; i < combinedArray.length; i++) {
    if (combinedArray[i] % 2 !== 0) {
      oddNumbers.push(combinedArray[i]);
    }
  }

  oddNumbers.sort((a, b) => a - b);

  return oddNumbers;
};

module.exports = { multiplication, concatOdds };
