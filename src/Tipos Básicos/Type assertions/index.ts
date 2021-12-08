//Uso da keyword 'as'

const id = 42 as number; //const id: number

const array = [] as string[]; //const array: string[]

type User = {
  id: number;
  name: string;
};

const user = {
  id: 999,
  name: 'jtiagosantos',
} as User; //const user: User

const body = document.querySelector('body') as HTMLBodyElement;
//aqui tendo certeza de que existe o body, pois, sem a assercao, body
//pode ser do tipo null

export { array };
