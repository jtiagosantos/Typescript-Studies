//tipo para indicar enumeração de valores
//usado para criar uma estrutura com dados
//enum <name>

//Exemplo:

enum Colors {
  RED,
  GREEN,
  BLUE,
}

console.log(Colors);
//{ '0': 'RED', '1': 'GREEN', '2': 'BLUE', RED: 0, GREEN: 1, BLUE: 2 }
//retorna um objeto com a enumeração dos valores possíveis da estrutura Colors

console.log(Colors.BLUE);
console.log(Colors[1]);

//Esse exemplo acima é de um enum numérico

//É possível especificar uma chave para cada valor possível do enum

enum Names {
  Maria = 1,
  Joao = 2,
  Pedro = 3,
  Roberta = 4,
}

console.log(Names);

//É possível também unir estruturas enum. Para isso, basta reatribuir valores
//para um enum já existente

enum Names {
  Tiago = 5,
  Micaela = 100,
  Diego,
  Thaissa,
}

console.log(Names);
