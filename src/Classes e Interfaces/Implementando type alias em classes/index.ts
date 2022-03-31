type TypePerson = {
  firstName: string;
  lastName: string;
  fullName: () => string;
};

/*
implements é tal como o extends, mas deve ser usado quando extendemos
uma classe a partir de um tipo
*/

class Person implements TypePerson {
  constructor(public firstName: string, public lastName: string) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Tiago', 'Santos');
console.log(person.fullName());
