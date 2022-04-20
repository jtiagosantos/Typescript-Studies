function decorator(
  prototypeClass: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(prototypeClass);
  console.log(methodName);
  console.log(descriptor);

  return {
    value: (...args: Array<any>) => {
      const [value] = args;

      return `${value} - message from decorator`;
    },
  };
}

class Person {
  constructor(
    public name: string,
    public lastname: string,
    public age: number,
  ) {}

  @decorator
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
