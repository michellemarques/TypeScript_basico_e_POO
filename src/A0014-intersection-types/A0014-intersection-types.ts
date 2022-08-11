type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intercecao = AB & AC & AD; // --> O que se repete

const pessoa: Pessoa = {
  idade: 25,
  nome: 'Ana',
  sobrenome: 'Maria',
};

console.log(pessoa);

// Module mode
export { pessoa };
