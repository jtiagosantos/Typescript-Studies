/* eslint-disable prefer-const */
//Maneira de dizer que um valor ou retorno de função
//pode ter mais de um tipo aceito

let value: number | boolean;

value = 2;
value = true;
//value = 'text' -> O tipo '"text"' não pode ser atribuído ao tipo 'number | boolean'.

//a variável value só aceita valores ou do tipo number ou do tipo boolean

function sumNumbersOrConcatenateStrings(
  param1: number | string,
  param2: number | string,
): number | string {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  }
  return `${param1}${param2}`;
}

export { value };
