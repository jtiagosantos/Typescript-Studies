export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }
}

const person = new Person('Tiago', 'Santos', 19, '000.000.000-00');

person.setCpf('000.000.000-99'); //novo valor para o atributo cpf

console.log(person.getCpf());

// Motivos para usar Getters:
// 1 - Tratar atributo antes de retorná-lo
// 2 - Encapsulamento(segurança)

// Uso de Setter:
// 1 - atribuição de valores para um atributo

// Maneira de fazer Getters e Setter no JS/TS:

export class PersonClass {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected _cpf: string, // _cpf para remover duplicação
  ) {}

  set cpf(cpf: string) {
    // atua como atributo da class
    this._cpf = cpf;
  }

  get cpf(): string {
    // atua como atributo da class
    return this._cpf;
  }
}

const person2 = new PersonClass('Tiago', 'Santos', 19, '000.000.000-00');

person2.cpf = '000.000.000-99';

console.log(person2.cpf);
