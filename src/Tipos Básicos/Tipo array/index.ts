//formas de tipagem para array:
//  - Array<Type>
//  - Type[]

function showNumbers(...args: number[]) {
  for (const number of args) {
    console.log(number);
  }
}

showNumbers(1, 2, 3, 4, 5);

function concatenateLetters(letters: Array<string>) {
  return letters.join('');
}

const word = concatenateLetters([
  't',
  'y',
  'p',
  'e',
  's',
  'c',
  'r',
  'i',
  'p',
  't',
]);

console.log(word);
