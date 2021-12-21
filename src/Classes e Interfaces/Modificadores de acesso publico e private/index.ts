export class Company {
  public readonly name: string;
  //public indica que o atributo/método pode ser acessado dentro da classe,
  //fora da classe e em qualquer subclasse(herança)
  private readonly employees: Employee[] = [];
  //private indica que o atributo/método fica acessível apenas à classe

  constructor(name: string) {
    this.name = name;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}

export class Employee {
  // eslint-disable-next-line prettier/prettier
  constructor(
    public readonly name: string,
    public readonly lastName: string
  ) {}
}
