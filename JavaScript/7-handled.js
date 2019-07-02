'use strict';

const sum = (a, b) => new Promise((resolve, reject) => {
  if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject(new Error('a and b should be numbers'));
  }
});

process.on('unhandledRejection', (reason, promise) => {
  console.log({ unhandledRejection: { reason, promise } });
});

process.on('rejectionHandled', promise => {
  console.log({ rejectionHandled: { promise } });
});

const p1 = sum(7, 'A')
  .then(data => {
    console.log(data);
  });

p1.catch(err => {
  console.log({ catch1: err });
});

setTimeout(() => {
  p1.catch(err => {
    console.log({ catch2: err });
  });
}, 0);
