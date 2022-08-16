export class CarrinhoDeCompra {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('camiseta', 49.9);
const produto2 = new Produto('caneca', 1.9);
const produto3 = new Produto('caneta', 0.9);

const carrinhoDeCompra = new CarrinhoDeCompra();
carrinhoDeCompra.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompra.valorTotal());
console.log(carrinhoDeCompra.quantidadeProdutos());
