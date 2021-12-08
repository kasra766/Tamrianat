function operations(ops) {
  let result = 0;

  let strArray = ops.split(" ");

  const arr = [];

  for (let i = 0; i < strArray.length; i++) {
    switch (strArray[i]) {
      case "D":
        if (arr.length) {
          const dubble = arr[arr.length - 1] * 2;
          arr.push(dubble);
        }
        console.log(arr)
        break;
      case "R":
        if (arr.length) {
          arr.pop();
        }
        break;
      case "+":
        if (arr.length > 1) {
          const sum = Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]);
          arr.push(sum);
        }
        break;
      default:
        arr.push(strArray[i]);
        break;
    }
  }

  for (let item of arr) {
    result += Number(item);
  }
  return result;
}

export default operations;