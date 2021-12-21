//versão longa
export class Company {
  public readonly name: string; //public é o padrão
  private readonly employees: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}

//versão curta
export class Employee {
  // eslint-disable-next-line prettier/prettier
  constructor(
    public readonly name: string,
    public readonly lastName: string
  ) {}
}

const udemy = new Company('Udemy', '11.111.111/0001-11');

const employee1 = new Employee('Tiago', 'Santos');
const employee2 = new Employee('Pedro', 'Gomes');
const employee3 = new Employee('Márcia', 'Miranda');

udemy.addEmployee(employee1);
udemy.addEmployee(employee2);
udemy.addEmployee(employee3);

console.log(udemy);
