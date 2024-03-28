/**************************************************** Memoization **********************************************/
function addTo80(n) {
  console.log('long time')
  return n + 80;
}

let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  }
  else {
    console.log('LONG TIME');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log('1',memoizedAddTo80(5)); 
console.log('2',memoizedAddTo80(5)); 
console.log('3',memoizedAddTo80(6)); 

function memoizedAddTo90(n) {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    }
    else {
      console.log('LONG TIME');
      cache[n] = n + 90;
      return cache[n];
    }
  }
}
const memoized = memoizedAddTo90();

console.log('1',memoized(5));
console.log('2',memoized(5));
console.log('3',memoized(6));


/**************************************************** Fibonacci using Memoization **********************************************/
let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

fibonacci(10)
console.log(calculations, fibonacci(10));

function memoizedFibonacci(n) {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    }
    else {
      if (n < 2) {
        return n;
      }
      else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}
const memoizedFib = memoizedFibonacci();

console.log(memoizedFib(10));