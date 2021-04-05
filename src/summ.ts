export function sum(a){

    if(a === undefined){
        // eslint-disable-next-line no-param-reassign
        a = 0;
    }

    let currentSum = a;
  
    function f(b:number) {
      currentSum += b;
      return f;
    }
  
    f.toString = function s() {
      return currentSum;
    };
  
    return f;
}
