//tipagem de funcao
//type TypeName = (arg1: type, agr2: type, argN: type) => type(retorno da funcao)

type TypeCallbackFn = (string: string) => string;

function UpperStrings(
  strings: string[],
  formatToUpperString: TypeCallbackFn,
): string[] {
  const newArray: string[] = [];

  for (const string of strings) {
    newArray.push(formatToUpperString(string));
  }

  return newArray;
}

const strings = ['foo', 'bar', 'xyz'];

const upperStrings = UpperStrings(strings, (string) => string.toUpperCase());
