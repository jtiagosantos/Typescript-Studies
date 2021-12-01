//Tipo para função ou método que NUNCA retornará algo.

//Exemplos:
//#1 - loop infinito;
//#2 - error

function infinityLoop(): never {
  while (true) console.log('infinity loop');
}

infinityLoop();

function createError(): never {
  throw new Error('Message error');
}

