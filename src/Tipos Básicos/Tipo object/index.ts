const user: {
  id: string;
  readonly username: string; //readonly - indica que esta propriedade não pode ter seu valor alterado
  age: number;
  premium?: boolean; //? - indica que a propriedade é opcional
  [key: string]: unknown; //index signature - aceita qualquer chave-valor desconhecido
} = {
  id: 'jcdh32r234rd32il2x3234',
  username: 'jtiagosantos',
  age: 19,
  premium: false,
};

//user.username = 'any username'; --> Não é possível atribuir a 'username' porque é uma propriedade de somente leitura
user.premium = true;

//propriedades não definidas, mas aceitas por conta da index signature
user.company = 'Agrosmart';
user.start = 1;
