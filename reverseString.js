let str = 'hello there bagel';

const revStr = (str) => {
  return str.split('').reverse().join('');
};

const revStr1 = (str) => {
  const arr = str.split('');
  let x = arr.length / 2;
  for (let i = 0; i < x; i++) {
    let end = arr.length - i - 1; // second index to switch with first
    let secondChar = arr[end]; // character at second index
    let temp = arr[i]; // save first character
    arr[i] = secondChar; // reassign first character
    arr[end] = temp; // reassign second character
  }
  return arr.join('');
};

console.log(revStr1(str));
