//valor como tipo

let a = 5; //eslint-disable-line
//let a: number -> tipo number

const number = 42; //const number: 42 -> tipo 42
//como é uma const, então o único valor e tipo aceito é 42

//O mesmo efeito pode ser feito com let da seguinte maneira:
let b: 100 = 100; //eslint-disable-line
//let b: 100 -> tipo 100

//de outra maneira(mais aconselhável):
let c = 999 as const; //eslint-disable-line
//let c: 999 -> tipo 999

//as const -> asserção para tornar um valor um tipo
