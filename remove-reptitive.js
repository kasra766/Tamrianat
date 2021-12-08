function removerRepetitive(string) {
  let result = "";
  if (string.length <= 1) {
    result = string;
    return result;
  }
  if (string[0] === string[1]) {
    result = removerRepetitive(string.substring(1));
    return result;
  } else {
    result = string[0] + removerRepetitive(string.substring(1));
    return result;
  }
}

export default removerRepetitive;