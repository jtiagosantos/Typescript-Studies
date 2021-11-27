/* eslint-disable */

//Tipos básicos(ocorre inferencia de tipo)
let username: string = 'Tiago'; //:string - type annotation
let age: number = 19; //: number - type annotation
let adult: boolean = true;
let anySymbol: symbol = Symbol('any-symbol');
let bigNumber: bigint = BigInt(10);


//Array
let numbersArray: Array<number> = [1, 2, 3]; //<T> - type generic, T is type
//outra maneira é fazer da seguinte maneira:
let numbersArrayV2: number[] = [4, 5, 6]; //também indica que é um array de number
let lettersArray: Array<string> = ['a', 'b', 'c'];
let valuesArray: boolean[] = [false, false, true];
let arraysArray: Array<Array<number>> = [[1, 2], [3, 4]];


//Objetos
let people: {username: string, age: number, adult?: boolean} = {
  username: 'Tiago',
  age: 19,
  adult: true,
}
//adult? - indica que a propriedade é opcional


//Funções
const sum = (x: number, y: number) => x + y;
//a função faz inferencia do tipo que será retornado
//a partir do momento que define-se um return

//mas pode-se especificar explicitamente o tipo a ser retornado
const greet = (username: string): string => `Hello ${username};`

//Outra maneira
const sumV2: (x: number, y: number) => number = (x, y) => x + y;
