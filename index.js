

const multiplication = (x, y) => {
  return x * y;
};


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
