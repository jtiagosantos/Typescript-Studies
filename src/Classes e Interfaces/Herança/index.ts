export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCPF(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}
/*
Quando se extende uma classe e na classe filha deseja-se acrescentar mais atributos além
dos vindo da classe pai, deve-se passar os atributos desejados da classe pai como argumentos
do constructor da classe filha, além dos métodos específicos da classe filha. Depois, deve-se
passar os mesmos argumentos desejados da classe pai como parâmetros do método super.
*/

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public code: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getFullName(): string {
    return `Student full name: ${super.getFullName()}`;
  }
}

export class Client extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public id: string,
  ) {
    super(name, lastName, age, cpf);
  }
}

const student = new Student(
  'Tiago',
  'Santos',
  19,
  '000.000.000-00',
  'bdxc238er23bd',
);

console.log(student);
console.log(student.getFullName());

const client = new Client(
  'Pedro',
  'Miranda',
  31,
  '999.999.999-99',
  '37ery82ds7324ghr7',
);

console.log(client);
console.log(client.getFullName());
