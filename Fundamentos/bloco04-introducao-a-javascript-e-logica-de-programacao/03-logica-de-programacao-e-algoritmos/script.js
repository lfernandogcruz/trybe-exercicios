// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:
// let soma =0;
// for ( let i=1; i<=50; i+=1 ) {
//     soma += i;
// }
// console.log(`A soma total de 1 a 50 é: ${soma}`);

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
// let player1 = 'pedra';
// let player2 = 'papel';

// if (player1 === 'papel' && player2 === 'papel') {
//     console.log('Its a tied match');
// } else if (player1 === 'papel' && player2 === 'tesoura') {
//     console.log('Player 2 Wins');
// } else if (player1 === 'papel' && player2 === 'pedra') {
//     console.log('Player 1 Wins');
// } else if (player1 === 'tesoura' && player2 === 'tesoura') {
//     console.log('Its a tied match');
// } else if (player1 === 'tesoura' && player2 === 'pedra') {
//     console.log('Player 2 Wins');
// } else if (player1 === 'tesoura' && player2 === 'papel') {
//     console.log('Player 1 Wins');
// } else if (player1 === 'pedra' && player2 === 'pedra') {
//     console.log('Its a tied match');
// } else if (player1 === 'pedra' && player2 === 'papel') {
//     console.log('Player 2 Wins');
// } else if (player1 === 'pedra' && player2 === 'tesoura') {
//     console.log('Player 1 Wins');
// }

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
// const idade = 17;
// let print = idade >= 18?'A pessoa é maior de idade':'A pessoa é menor de idade';
// console.log(print);

// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
const carolzita = 22;
const murilo = 18;
const baeta = 12;

if (carolzita < murilo && carolzita < baeta) {
    console.log('Carolzita é a pessoa mais nova.');
} else if (murilo < baeta && murilo < carolzita) {
    console.log('Murilo é a pessoa mais nova.');
} else {
    console.log('Baêta é a pessoa mais nova.');
}