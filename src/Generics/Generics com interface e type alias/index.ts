interface Person<T, U> {
  name: T;
  lastname: T;
  age: U;
}

const person: Person<string, number> = {
  name: 'Tiago',
  lastname: 'Santos',
  age: 20,
};

type Animal<T, K = number> = {
  name: T;
  weight: K;
};

const animal: Animal<string> = {
  name: 'bug',
  weight: 13.7,
};

export {};
