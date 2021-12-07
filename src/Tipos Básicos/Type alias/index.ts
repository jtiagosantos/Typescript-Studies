//criar proprios tipos
//Por convencao, deve-se criar os tipos com inicial maiuscula

type Age = number;

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  createaAt?: Date;
};

type Users = User[]; //Array<User>

const myAge: Age = 19;

const myUser: User = {
  id: 999,
  username: 'jtigosantos',
  email: 'jtiagantos@email.com',
  password: '123abcXYZ',
};
