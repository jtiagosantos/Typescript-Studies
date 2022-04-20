function decorator<T extends new (...args: Array<any>) => any>(target: T): T {
  // target é a classe em que o decorator é usado
  return class extends target {
    color: string;
    name: string;

    constructor(...args: Array<any>) {
      super(...args);

      // altera as propriedades passadas na instância da classe
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@decorator
class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('pug', 'brown');
console.log(animal);
