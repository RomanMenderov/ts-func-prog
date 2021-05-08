export const spiral = (mySpiral: number[][]): number[] => {
  const linedArray: number[] = [];
  for (let i = 0; i <= mySpiral.length; i++) {
    i = 0;
    const str = mySpiral.shift();
    (str as number[]).map((el) => linedArray.push(el));
    mySpiral.map((el: number[]) => linedArray.push(el.pop() as number));
    mySpiral = mySpiral.map((row) => row.reverse()).reverse();
  }

  return linedArray;
};
