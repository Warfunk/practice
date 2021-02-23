const firstRecurringNumber = (array) => {
  const set = {};
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (set[number]) {
      return number;
    }
    set[array[i]];
  }
  return 'No repeated numbers';
};

const arr = [2, 5, 1, 3, 6, 2, 4];
const answer = firstRecurringNumber(arr);
console.log(answer);
