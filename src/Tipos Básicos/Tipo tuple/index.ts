//tipagem para array com tipo definido para cada posição, bem como o tamanho

const firstUser: [string, string, number, boolean?] = [
  '3u4bd82nrhd2ed2fwf3',
  'jtiagosantos',
  19,
];

//o array acima está definido com 4 posições e cada posição tem seu tipo definido
//a ultima posição do array não é obrigatória(boolean?)

//pode-se alterar o valor das posições, desde que mantenha o mesmo tipo

firstUser[3] = true;

const secondUser: readonly [string, string, number, boolean?] = [
  'uqjn23coi2h3hrnfd2',
  'teste_@user',
  30,
  true,
];

//com o readonly, não pode-se alterar o valor de nenhuma posição do array
//inclusive não pode o seguinte:
//secondUser.pop();
//isso porque, esse código vai alterar o array, o que não é permitido por conta
//do readonly

const array: [string, ...number[]] = ['hi', 1, 2, 3, 4, 5];

//a primeira posição está definida para string;
//a partir da segunda posição está definido um rest de valores do tipo number;

export { array };
