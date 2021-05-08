/* eslint-disable @typescript-eslint/ban-types */

export function sum(a?: number): Function {
  a = a || 0;

  let currentSum = a;

  function f(b: number) {
    currentSum += b;
    return f;
  }

  f.toString = function s() {
    return currentSum;
  };

  return (f as unknown) as Function;
}
