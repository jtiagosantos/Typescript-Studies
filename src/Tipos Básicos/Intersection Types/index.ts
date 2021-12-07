//Interseccao de tipos para criar um novo tipo

type Name = { name: string };
type LastName = { lastname: string };
type Age = { age: number };
type Person = Name & LastName & Age;

const person: Person = {
  name: 'Tiago',
  lastname: 'Santos',
  age: 19,
};

export type { Age };
