type GetValueByKeyFn = <T, K extends keyof T>(object: T, key: K) => T[K];

// K extends keyof T -> K é no máximo uma chave de T

const getValueByKey: GetValueByKeyFn = (object, key) => object[key];

const animal = {
  color: 'pink',
  vaccines: ['vaccine @1', 'vaccine @2'],
  age: 10,
};

const color = getValueByKey(animal, 'color');
const vaccines = getValueByKey(animal, 'vaccines');
const age = getValueByKey(animal, 'age');

console.log(color, vaccines, age);

export {};
