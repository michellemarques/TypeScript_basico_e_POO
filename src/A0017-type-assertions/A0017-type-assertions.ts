// Se vc não tiver certeza, fazer uma concidional como o exemplo (RECOMENDÁVEL)
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)
const body2 = document.querySelector('body')!; // ! -> este obj não irá ser null
body2.style.background = 'red';

// Type assertion - fazer quando se tem certeza (RECOMENDÁVEL)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMlElement (RECOMENDÁVEL)
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Subir subtipos para transformar body em número, por exemplo
const body4 = document.querySelector('body') as unknown as number;
//body4.style.background = 'red';
