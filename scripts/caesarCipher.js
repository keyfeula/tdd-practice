function caesarCipher(str, shift) {
  shift = shift % 26;
  let encodedStr = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[a-zA-Z]/)) {
      const isUpperCase = char === char.toUpperCase();
      let code = char.charCodeAt(0);
      let base = isUpperCase ? 65 : 97;

      let shiftedCode = ((code - base + shift) % 26) + base;
      encodedStr += String.fromCharCode(shiftedCode);
    } 
    else {
      encodedStr += char;
    }
  }

  return encodedStr;
}

export { caesarCipher };