/* eslint-disable prettier/prettier */

export class Pessoa {

  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) { }

  static falaOi(): void {
    console.log('OI');
  }

  // método acessando algo estático
  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // Exemplo de método para que você não precise estânciar e utilizar tudo que a classe deseja
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Paulo', 'Chico', 45, '111.222.333-44');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Barbosa');
console.log(pessoa1); 
console.log(pessoa2); 
Pessoa.falaOi(); 
pessoa1.metodoNormal();