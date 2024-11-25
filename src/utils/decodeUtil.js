// export const encryptText = (input) => {
//     return input.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
//   };
  
//   export const decryptText = (input) => {
//     return input.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
//   };

export const encryptText = (input) => {
  let result = '';
  for (let i = 0; i < input.length; i++) {
      result += String.fromCharCode(input.charCodeAt(i) + 1);
  }
  return result;
};

export const decryptText = (input) => {
  let result = '';
  for (let i = 0; i < input.length; i++) {
      result += String.fromCharCode(input.charCodeAt(i) - 1);
  }
  return result;
};
  