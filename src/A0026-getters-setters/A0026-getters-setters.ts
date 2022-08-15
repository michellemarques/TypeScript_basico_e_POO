/* eslint-disable prettier/prettier */
// Maneira antiga de se realizar get e set
/* export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string
  ) { }

  setCpf(valor: string): void {
    this.cpf = valor;
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

}

const pessoa = new Pessoa('Paulo', 'Chico', 45, '111.222.333-44');
console.log(pessoa.getCpf());
pessoa.setCpf('123.123.123-99');
console.log(pessoa.getCpf()); */

// Maneira nova
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) { 
    this.cpf = _cpf; // <- setter
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }

}

const pessoa = new Pessoa('Paulo', 'Chico', 45, '111.222.333-44');
pessoa.cpf = ('123.123.123-99'); // <- chama o SET
console.log(pessoa.cpf); // <- chama o GET