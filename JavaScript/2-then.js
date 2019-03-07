'use strict';

const sum = (a, b) => new Promise((resolve, reject) => {
  if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject(new Error('a and b should be numbers'));
  }
});

sum(7, 'A')
  .then(
    data => {
      console.log({ data });
    },
    err => {
      console.log({ messageThen: err.message });
      throw new Error('Oh, no!');
    }
  )
  .catch(err => {
    console.log({ messageCatch1: err.message });
    throw new Error('Oh, noo!');
  })
  .then(() => {}, err => {
    console.log({ messageThen2: err.message });
    throw new Error('Oh, nooo!');
  })
  .catch(err => {
    console.log({ messageCatch2: err.message });
  });
