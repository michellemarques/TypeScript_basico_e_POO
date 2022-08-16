/* eslint-disable prettier/prettier */
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {};

export class Pessoa implements TipoPessoa2 {

  constructor(public nome: string,  public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }

}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  },
  nome: 'Ana',
  sobrenome: 'Biz'
}

const pessoa = new Pessoa('Maria', "Paula");
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
