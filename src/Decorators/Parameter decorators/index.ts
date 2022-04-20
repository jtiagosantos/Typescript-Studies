function decorator(
  prototypeClass: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(prototypeClass);
  console.log(methodName);
  console.log(index);
}

class Person {
  constructor(
    public name: string,
    public lastname: string,
    public age: number,
  ) {}

  sendMessage(@decorator message: string): string {
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
