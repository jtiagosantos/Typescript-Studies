//undefined type !== null type

//undefined - tipo para um valor que ainda não foi definido ou
//            que pode não ser definido

function createUser(id: string, username: string, premium?: boolean) {
  return {
    id,
    username,
    premium,
  };
}

//nesse caso acima, a propriedade pode receber um valor do tipo boolean,
//ou pode não receber um valor e, assim, ser undefined

console.log(createUser('32d2r7yd', 'jtiagosantos'));

//null - tipo usado como retorno

const squareOf = (x: any) => (typeof x === 'number' ? x * x : null);

//na função acima, como a função aceita valor de qualquer tipo, se a
//função receber um number, então pode retornar o quadrado de x; caso
//contrário, null

//const squareOf: (x: any) => number | null
