/* eslint-disable prettier/prettier */
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) { }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('-> Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' HEYYYYYYY';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem de CLIENTE = ${this.nome} ${this.sobrenome}`
  }
}

const pessoa = new Pessoa('Paulo', 'Chico', 45, '111.222.333-44');
const aluno = new Aluno('Ana', 'Maria', 10, '111.222.333-44', '506B');
const cliente = new Cliente('Antônio', 'Freitas', 20, '111.222.333-44');
console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())
console.log(pessoa)
console.log(aluno)