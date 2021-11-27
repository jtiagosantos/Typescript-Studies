//O tipo any não infere um tipo propriamente e,
//por isso, aceita valores de qualquer tipo

function showValue(value: any) {
  return value;
}

//nesse caso, a função vai aceitar valores de
//qualquer tipo como parâmetro

showValue(false);
showValue('Hello');
showValue(42);
showValue([1, 2, 3, 4, 5]);
