'use strict';

const sum = (a, b) => new Promise((resolve, reject) => {
  if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject(new Error('a and b should be numbers'));
  }
});

process.on('multipleResolves', (type, promise, reason) => {
  console.log({ multipleResolves: { type, promise, reason } });
});

sum(7, 3)
  .then(res1 => {
    console.log({ res1 });
  });
