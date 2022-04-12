type CallbackFn<T> = (value: T, index?: T, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callbackFn: CallbackFn<T>): Array<T> {
  const newArray = [];

  for (const item of array) {
    callbackFn(item) && newArray.push(item);
  }

  return newArray;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = myFilter<number>(array, (number) => number < 5);

console.log(filteredArray);

export {};
