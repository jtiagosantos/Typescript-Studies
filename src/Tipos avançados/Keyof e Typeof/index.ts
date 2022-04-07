const myColors = {
  vermelho: 'red',
  verde: 'green',
  azul: 'azul',
};

type Colors = typeof myColors;

type Color = keyof Colors;

function translateColor(color: Color, colors: Colors) {
  return colors[color];
}

console.log(translateColor('azul', myColors));

// typeof -> "TIPO DE"
// keyof -> "Tipo baseado nas chaves de um objeto"

export {};
