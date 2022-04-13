function uniteObjects<T, K>(object1: T, object2: K): T & K {
  return { ...object1, ...object2 };
}

const object1 = { first_key: 'value @1' };
const object2 = { second_key: 'value @2' };

const object3 = uniteObjects(object1, object2);

console.log(object3);
