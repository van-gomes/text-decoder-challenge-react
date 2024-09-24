export const encryptText = (input) => {
    return input.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
  };
  
  export const decryptText = (input) => {
    return input.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
  };
  