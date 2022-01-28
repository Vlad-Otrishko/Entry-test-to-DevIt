// Реализовать функцию get. Которая по пути ищет значение в объекте или в массиве.
 function get(instance, searchPath) {
  let result = instance;
  let path = searchPath.split('.');
  for (let element of path) {
    result = result[element];
  }
  return result;
}
console.log('*******');
console.log('TASK D');
const exampleArr = [{ a: { b: [{ c: 4 }, { c: 5 }] } }, { a: { b: [{ c: 6 }, { c: 7 }] } }];
const exampleObj = { a: { b: { c: 5 } } };
console.log(get(exampleArr, '0.a.b.1.c')); // 5
console.log(get(exampleObj, 'a.b')); // {c:5}
