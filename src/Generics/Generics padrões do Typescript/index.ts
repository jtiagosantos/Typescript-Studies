const object: Record<string, string | number> = {
  name: 'Tiago',
  lastname: 'Santos',
  age: 20,
};

// Record<tipo das chaves, tipo dos valores>

type Person = {
  name?: string;
  lastname?: string;
  age?: number;
};

type RequiredPerson = Required<Person>;

// O Required torna obrigatórios os tipos de Person, que
// está definido com propriedades opcionais

type PartialPerson = Partial<RequiredPerson>;

// O Partial torna opcionais os tipos de RequiredPerson, que
// está definido com propriedades obrigatórias

type ReadonlyPerson = Readonly<RequiredPerson>;

// O Readonlye torna readonly os tipode de RequiredPerson, que
// está definido com propriedades não readonly

type PickPerson = Pick<RequiredPerson, 'name' | 'lastname'>;

// O Pick nos permite filtrar apenas as propriedades que
// queremos de determinado tipo

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExcludeType = Exclude<ABC, CDE>;

// O Exclude filtra apenas os tipos que estão no primeiro
// argumento (tipo ABC) e não estão no segundo argumento (tipo CDE)

type ExtractType = Extract<ABC, CDE>;

// O Extract filtra apenas os tipos que estão no primeiro
// argumento (tipo ABC) e estão também no segundo
// argumento (tipo CDE)

export {};
