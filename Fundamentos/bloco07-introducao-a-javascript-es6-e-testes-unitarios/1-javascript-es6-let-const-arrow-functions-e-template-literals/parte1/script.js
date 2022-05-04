// exercicio de fixacao 1
// refatorar codigo abaixo usando arrow function e template literals
// function testingScope(escopo) {
// 	if (escopo === true) {
// 		var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// 		ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
// 		console.log(ifScope);
// 	} else {
// 		var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// 		console.log(elseScope);
// 	}
// 	console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// resolucao ex 1
// const testingScope = (escopo) => (escopo === true) ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`;

// console.log(testingScope(false));

// .
// exercicio de fixacao 2
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
