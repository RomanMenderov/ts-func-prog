// 1. Написать функцию для каррирования (https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)

// Пример использования функции


function func (a, b,
   c, d, e){return a + b + c + d + e}


// eslint-disable-next-line @typescript-eslint/ban-types
function yourFunction(myFunc){

    return function curried(...args) {
      if (args.length >= myFunc.length) {
        return myFunc.apply(this , args);
      }
        return function result(...args2) {
          return curried.apply(this, args.concat(args2));
        }

    };
  
  }

export const hof = yourFunction(func);
