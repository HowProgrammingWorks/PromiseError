'use strict';

const sum = (a, b) => new Promise((resolve, reject) => {
  if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject(new Error('a and b should be numbers'));
  }
});

sum(7, 'A')
  .then(data => {
    console.log({ data });
  });

setTimeout(() => {
  console.log('after all');
}, 1000);

// UnhandledPromiseRejectionWarning: Error: a and b should be numbers
