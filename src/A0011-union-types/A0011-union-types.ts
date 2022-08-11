// Quando se tem mais de um tipo de retorno, parâmetro ou variável, é possivel falar isso para o typescript
//     string | number | boolean
function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat(true, true));
