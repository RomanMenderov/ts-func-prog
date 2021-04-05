// 1. Написать функцию для каррирования (https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)

// Пример использования функции


function func (a:number, b:number,
   c:number, d:number, e:number){return a + b + c + d + e}


function yourFunction(myFunc:func){

    return function curried(...args) {
      if (args.length >= myFunc.length) {
        return myFunc.apply(this, args);
      }
        return function result(...args2) {
          return curried.apply(this, args.concat(args2));
        }

    };
  
  }

export const hof = yourFunction(func);

console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35