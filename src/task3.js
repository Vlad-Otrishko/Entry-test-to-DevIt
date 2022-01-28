// Замена подряд идущих букв на их количество.


function repetedLetters(str) {
  const result = [];
  const allLetters = str.match(/(\w)\1*/g);
  for (let letter of allLetters) {
    if (letter.length > 1) {
      letter = letter[0] + letter.length;
    }
    result.push(letter);
  }
  return result.join('');
}
console.log('*******');
console.log('TASK C');

console.log(repetedLetters('assdssddffffrrreeeweggggg')); // => 'as2ds2d2f4r3e3weg5'
