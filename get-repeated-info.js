function getRepeatedInfo(number) {
  const result = {};
  const newNumber = number.toString();

  for (let currentNumber of newNumber) {
    for (let i = 0; i < currentNumber; i++)
      result[currentNumber] =
        result[currentNumber] === undefined
          ? currentNumber
          : `${result[currentNumber]}${currentNumber}`;
  }

  return result;
}

export default getRepeatedInfo;