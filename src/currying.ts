/* eslint-disable @typescript-eslint/no-explicit-any */

function func(a: number, b: number, c: number, d: number, e: number) {
  return a + b + c + d + e;
}

// function curry<A, B, C>
// (cb: (x: A, y: B) => C): (x: A) => (y: B) => C;
// function curry<A, B, C, D>
// (cb: (x: A, y: B, z: C) => D): (x: A) => (y: B) => (z: C) =>D;
// function curry<A, B, C, D, E>
// (cb: (x: A, y: B) => C): (x: A) => (y: B) => C;
// function curry<A, B, C, D, E, F>
// (cb: (x: A, y: B) => C): (x: A) => (y: B) => C;
// function curry<A, B, C, D, E, F, J>
// (cb: (a: A, b: B, c: C, d: D, e:E, f: F) => J):
//  (a: A) => (b: B) => (c: C) => (d:D)=> (e:E)=> (f: F) =>J;
// eslint-disable-next-line @typescript-eslint/ban-types
function curry(cb: Function): Function;

// eslint-disable-next-line @typescript-eslint/ban-types
function curry(myFunc: any) {
  return function curried(this: any, ...args: any[]) {
    if (args.length >= myFunc.length) {
      return myFunc.apply(this, args);
    }
    // eslint-disable-next-line no-shadow
    return function result(this: any, ...args2: any[]) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

export const hof = curry(func);
