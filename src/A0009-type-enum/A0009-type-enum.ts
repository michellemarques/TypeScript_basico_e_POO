enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}

/* console.log(Cores)
console.log(Cores.VERMELHO);
console.log(Cores[0]); */

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores.VERMELHO);
console.log(Cores.ROXO);
console.log(Cores);

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);
