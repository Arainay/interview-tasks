export default function validBrackets(str) {
  const array = [];

  const opens = {
    '(': 1,
    '[': 2,
    '{': 3
  };

  const closes = {
    ')': 1,
    ']': 2,
    '}': 3
  };

  for (const letter of str) {
    if (opens[letter]) {
      array.push(letter);
    } else if (closes[letter]) {
      if (opens[array[array.length - 1]] === closes[letter]) {
        array.pop();
      } else {
        return false;
      }
    }
  }

  return array.length === 0;
}
