let x = 10; // eslint-disable-line
// eslint-disable-next-line @typescript-eslint/no-unused-vars
x = 0b1010; // possível trocar o valor de x para qualquer tipo de number

const y = 10; // tipo literal pois é 10, ou seja, ele se torna um subtipo de number

//let a: 100 = 100; // mesma coisa feita com a palavra let. "a" tem o subtipo = 100 // eslint-disable-line
// Não é aconselhavel fazer o código acima.
//let a = 100 as const; // forma correta de caso queira usar let // eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};
//pessoa.nome = 'Ana'; // -> erro

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));
// module mode
export default 1;
