const fn1 = () => {
  console.log('fn1');
  return Promise.resolve(1);
}

const fn2 = () => new Promise(resolve => {
  console.log('fn2');
  setTimeout(() => resolve(2), 1000);
})

// Добавил для проверки
const fn3 = () => new Promise(resolve => {
  console.log('fn3');
  setTimeout(() => resolve(3), 500);
})

function promiseReduce(asyncFunctions, reduce, initialValue) { 
  let memo = initialValue;
  return new Promise(async (resolve) => {
    await asyncFunctions.reduce((acc, item) => {
      return acc.then(item).then((value) => {
        memo = reduce(memo, value)
      })
    }, Promise.resolve())
    await resolve(memo);
  });
}

// Решение от наставника 
// function promiseReduce(asyncFns, reducerFn, initialValue) {
//   return asyncFns.reduce(
//     (acc, curFn) => 
//       acc.then((acc) => curFn().then((res) => reducerFn(acc, res))), Promise.resolve(initialValue));
// }

promiseReduce(
  [fn1, fn2, fn3], 
  function (memo, value) {
    console.log('reduce')
    return memo * value
  }, 
  1
).then(console.log) 