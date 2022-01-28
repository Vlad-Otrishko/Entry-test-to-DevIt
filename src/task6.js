// еализовать класс очереди запросов.Методы queue, deQueue, queuing обязательно реализовать. 
// Задано количество одновременно выполняемых запросов.
// В качестве запросов использовать Promise которые резолвятся через случайное время.

class ConcurencyQueue {
  constructor() {
    this.sequence = [];
  }
  addToQueue(promise) {
    return this.sequence.push(promise);
  }
  parallelExecution(n) {
    for (let i = 0; i < n; i++) {
      this.sequence[i]().then(console.log);
    }
    this.deQueue(n);
    return this.sequence;
  }

  async sequentalExecution(n) {
    for (let i = 0; i < n; i++) {
      let result = await this.sequence[0]();
      console.log(result);
      this.deQueue(1);
    }
    return this.sequence;
  }

  deQueue(n) {
    for (let i = 0; i < n; i++) {
      this.sequence.shift();
    }
  }
}

console.log('*******');
console.log('TASK F');

const conc = new ConcurencyQueue();
let promise1 = function () {
  return new Promise((resolve, reject) => setTimeout(() => resolve('fulfilling promise 1'), 1000));
};

let promise2 = function () {
  return new Promise((resolve, reject) => setTimeout(() => resolve('fulfilling promise 2'), 2000));
};

let promise3 = function () {
  return new Promise((resolve, reject) => setTimeout(() => resolve('fulfilling promise 3'), 3000));
};

// Placing promises into queue (array):
conc.addToQueue(promise3);
conc.addToQueue(promise2);
conc.addToQueue(promise1);

// Showing promises in a queue:
console.log('Pending in the queue', conc.sequence);
// Shooting 2 proises in a sequence, one by one. Promise 3 is the slowest, but will be executed first.
conc.sequentalExecution(2);

// Shooting 2 promises from the queue concurrently. In this case, Promise 2 will be executed earlie that promise 3.
// conc.parallelExecution(2);

