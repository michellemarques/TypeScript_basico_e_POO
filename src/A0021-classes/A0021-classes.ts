/* eslint-disable prettier/prettier */
export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  /*   Para add o colaborador a empresa, criar um método
       PUBLIC. Não é necessário escrever essa palavra  */
  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColaboradores(): void {
    for(const colaborador of this.colaboradores) {
      console.log(this.colaboradores);
    };
  }
  
}


/*  forma mais enxuta de declarar uma classe */
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) { }
}


const empresa1 = new Empresa('Udemy', '123.45.15-85');
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Paulo', 'Costa');
const colaborador3 = new Colaborador('Marina', 'Silva');
//console.log(empresa1);
/* empresa1.nome = 'Instagram'; 
// nome é readonly ou seja, não é possível alterar seu valor
 */
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
//console.log(empresa1);
empresa1.showColaboradores();