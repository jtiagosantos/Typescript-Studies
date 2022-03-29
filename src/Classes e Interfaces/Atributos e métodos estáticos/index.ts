export class Person {
  static defaultAge = 0; // atributos estáticos
  static defaultCpf = '000.000.000-00'; // atributos estáticos

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(name: string, lastName: string): Person {
    // método estático
    return new Person(name, lastName, Person.defaultAge, Person.defaultCpf);
  }
}

// Métodos ou atributos estáticos são aqueles que podem ser acessados
// sem a necessidade de instanciar a class

const person = new Person('Tiago', 'Santos', 19, '000.000.000-00');
console.log(person);

const person2 = Person.createPerson('Pedro', 'Pereira'); // sem instanciar
console.log(person2);

console.log(Person.defaultAge, Person.defaultCpf);
