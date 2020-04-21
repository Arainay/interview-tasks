export default function validBrackets(str) {
  const array = [];
  const opens = ['(', '[', '{'];
  const closes = [')', ']', '}',];

  for (const letter of str) {
    if (opens.includes(letter)) {
      array.push(letter);
    } else if (closes.includes(letter)) {
      const pos = closes.indexOf(letter);
      if (opens[pos] === array[array.length - 1]) {
        array.pop();
      } else {
        return false;
      }
    }
  }

  return array.length === 0;
};
