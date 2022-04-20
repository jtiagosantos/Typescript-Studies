function decorator(prototypeClass: any, name: string | symbol): any {
  let value: any;

  return {
    get: () => value,
    set: (property: any) => {
      const isString = typeof property === 'string';

      if (isString) {
        value = property.split('').reverse().join('');

        return;
      }

      value = property;
    },
  };
}

class Person {
  @decorator
  name: string;

  @decorator
  lastname: string;

  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  sendMessage(message: string): string {
    return `${this.name} ${this.lastname}: ${message}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value: string) {
    const lastname = value.split(/\s+/g);
    const firstname = lastname.shift();

    if (!firstname) return;

    this.name = firstname;
    this.lastname = lastname.join('');
  }
}

const people = new Person('Tiago', 'Santos', 20);
const method = people.sendMessage('Wow!');
console.log(method);

export {};
