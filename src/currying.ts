/* eslint-disable @typescript-eslint/ban-types */

function func(a: number, b: number, c: number, d: number, e: number): number;

function func(a: number, b: number, c: number, d: number, e: number) {
  return a + b + c + d + e;
}

function curry(cb: Function): Function;

function curry(myFunc: Function) {
  return function curried(this: number, ...args: number[]) {
    if (args.length >= myFunc.length) {
      return myFunc.apply(this, args);
    }
    // eslint-disable-next-line no-shadow
    return function result(this: number, ...args2: number[]) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

export const hof = curry(func);
