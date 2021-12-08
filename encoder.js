export function encoder ({inputString, repeatCount}) {
	const encodeHelper = (inputString, counter) => {
	  let result = "";

	  const lastChar = inputString.charAt(inputString.length - 1);
	  const newInputStr = lastChar + inputString.substring(0, inputString.length - 1);

	  for (let i = 0; i < newInputStr.length; i++) {
		if (newInputStr.charCodeAt(i) === 122) {
		  result += String.fromCharCode(newInputStr.charCodeAt(i) - 25);
		} else {
		  result += String.fromCharCode(newInputStr.charCodeAt(i) + 1);
		}
	  }
	  
	  if(counter === repeatCount)
		  return result;
	  else
		return encodeHelper(result, counter + 1);
	};

	const result = encodeHelper(inputString, 1);
	
	return result;
};