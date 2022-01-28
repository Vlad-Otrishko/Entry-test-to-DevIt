// Заполнить массив заданной длины различными простыми числами. 
// Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.
 function primeArray(arrayLeng) {
    const result = [];
    let simpleNumber = 2;
    loop1:
    while (result.length < arrayLeng) {
        for (let j = 2; j < simpleNumber; j++) {
            if (simpleNumber % j === 0) {
                simpleNumber++; continue loop1;
            }
        };
        result.push(simpleNumber);
        simpleNumber++;
        }
    return result;
    };
console.log('TASK A');
console.log(primeArray(5)) // [2,3,5,7,11];
console.log(primeArray(7)) // [2,3,5,7,11,13,17];