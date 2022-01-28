// Найти в строке все числа. Учитывать дробные числа.

function findNumbers(str) {
  return str.match(/\d+\.*\d*/g);
}
console.log('*******');
console.log('TASK B');
console.log('У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.');

console.log(findNumbers('У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.'));
