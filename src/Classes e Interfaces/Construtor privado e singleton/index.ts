class Database {
  private static connection: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static create(host: string, user: string, password: string): Database {
    // Factory method
    if (Database.connection) {
      return Database.connection;
    }

    Database.connection = new Database(host, user, password);
    return Database.connection;
  }

  connect() {
    console.log('Connected database');
  }
}

// Singleton - pattern em que se retorna a instancia já criada ou
//             cria-se uma nova e única instancia

// Factory Method - pattern em que um método de uma classe retorna
//                  uma instancia da propria classe

const database = Database.create('localhost', 'root', '123456');
console.log(database);

database.connect();

const database2 = Database.create('localhost', 'root', '123456');
console.log(database2);

database2.connect();

console.log(database === database2);
