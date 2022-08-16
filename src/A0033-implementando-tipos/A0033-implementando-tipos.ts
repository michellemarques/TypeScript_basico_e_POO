/* eslint-disable prettier/prettier */
type TipoNome = {
  nome: string;
}

type TipoSobrenome = {
  sobrenome: string;
  nomeCompleto:() => string;
}

type TipoNomeCompleto = {
  nomeCompleto:() => string;
}

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {

  constructor(public nome: string,  public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }

}

const pessoa = new Pessoa('Maria', "Paula");
console.log(pessoa.nomeCompleto());
