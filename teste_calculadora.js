import { soma, subtracao, multiplicacao } from './calculadora.js';

console.log(soma(10,20));
console.log(soma(11,22));
console.log(subtracao(41,22));

let soma_quatro = soma( soma(2,4), soma(8,12));
console.log(soma_quatro);

let numero1 = 5;
let numero2 = 10;
// argumentos: numero1, numero2
let soma1 = soma(numero1, numero2);
console.log(soma1);

console.log('Multiplicação:', multiplicacao(10,2));

let resultado = soma(10,2) - multiplicacao(15,5) + subtracao(9,2);
console.log('Resultado equação', resultado);