'use strict';

const sum = (a, b) => new Promise((resolve, reject) => {
  if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject(new Error('a and b should be numbers'));
  }
});

process.on('warning', warning => {
  console.log({ warning });
});

sum(7, 'A')
  .then(data => {
    console.log(data);
  });
