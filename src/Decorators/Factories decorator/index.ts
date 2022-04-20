function decorator(param1: string, param2: string) {
  return function <T extends new (...args: Array<any>) => any>(target: T): T {
    // target é a classe em que o decorator é usado
    return class extends target {
      color: string;
      name: string;

      constructor(...args: Array<any>) {
        super(...args);

        // altera as propriedades passadas na instância da classe
        this.name = this.reverse(param1);
        this.color = this.reverse(param2);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('');
      }
    };
  };
}

@decorator('decorator-value-1', 'decorator-value-2')
class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('pug', 'brown');
console.log(animal);

export {};
