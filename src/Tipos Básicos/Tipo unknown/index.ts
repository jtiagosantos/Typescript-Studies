//O tipo unknowm é como tipo any, porém mais seguro

let value: unknown;

value = 'user';
value = 2;
value = false;

//posso atribuir valores de diferentes tipos, porém
//não deixa fazer qualquer tipo de operação antes de checar

//console.log(value + 5); -> error

if (typeof value === 'number') {
  console.log(value + 42);
  //embora value seja do tipo unknown, se entrar ness if, então
  //obrigatoriamente o value é number, o que permite a operaçã de soma, por exemplo
}

if (typeof value === 'boolean') {
  console.log(value && true);
}
