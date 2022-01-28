function _sum (x, y) {
  return x + y;
}

const curry = (func) => {
  const next = (...args) => {
    return x => {
      if (!x) {
        return args.reduce((acc, curr) => func.call(func, acc, curr), 0)
      }
      return next(...args, x);
    };
  };

  return next();
}

const sum = curry(_sum);

console.log(sum(1)(2)(3)(4)(20)());

