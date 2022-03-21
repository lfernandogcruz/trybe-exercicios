// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((a,b) => a + b);

console.log(sum(1,2,3,4,29,11));