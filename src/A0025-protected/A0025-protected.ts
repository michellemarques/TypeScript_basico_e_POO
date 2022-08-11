/* eslint-disable prettier/prettier */
export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  /*   Para add o colaborador a empresa, criar um método
       PUBLIC. Não é necessário escrever essa palavra  */
  public addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(this.colaboradores);
    };
  }

  public getNome(): string {
    return this.nome;
  }
}

/*  forma mais enxuta de declarar uma classe */
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) { }
}

export class Udemy extends Empresa {
  constructor() {
    super ('Udemy', '123.45.15-85');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if(colaborador) return colaborador;
    return null;
  }
}


const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Paulo', 'Costa');
const colaborador3 = new Colaborador('Marina', 'Silva');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
console.log(empresa1);

const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
