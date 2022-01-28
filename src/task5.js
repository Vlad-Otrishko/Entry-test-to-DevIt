// Создать функцию которая при каждом вызове вернет случайное число от 0 до 100 без повторений.
//  Если закончились варианты вернет ошибку.Реализовать через замыкание.

 function makeRandom(range) {
  const minRange = 0;
  const maxRange = range; // generated numbers will include both minimal and maximal limits of a range
  const previousGenerated = [];
  return function generate() {
    if (previousGenerated.length === range + 1) {
      return 'Error:No more unique variants left';
    }
    const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
    if (previousGenerated.includes(randomNumber)) {
      return generate(); // generates again
    } else {
      previousGenerated.push(randomNumber);
      return randomNumber;
    }
  };
}
console.log('*******');
console.log('TASK E');

const mkRandom = makeRandom(5);
console.log(mkRandom());
console.log(mkRandom());
console.log(mkRandom());
console.log(mkRandom());
console.log(mkRandom());
console.log(mkRandom());
console.log(mkRandom());
