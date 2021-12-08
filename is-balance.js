function isBalance(input) {
  let result = null;
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    let x = input[i];

    if (x === "(" || x === "[" || x === "{") {
      stack.push(x);
      continue;
    }
    if (stack.length === 0) {
      result = false;
      return result;
    }

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check === "{" || check === "[") {
          result = false;
          return result;
        }
        break;

      case "}":
        check = stack.pop();
        if (check === "(" || check === "[") {
          result = false;
          return result;
        }
        break;

      case "]":
        check = stack.pop();
        if (check === "(" || check === "{") {
          result = false;
          return result;
        }
        break;
      default:
        return result;
    }
  }
  return stack.length === 0;
}

export default isBalance;