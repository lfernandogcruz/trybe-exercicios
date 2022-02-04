// const myName = "Luis Cruz";
// const birthCity = "Sorocaba";
// var birthYear = 1987;
//
// console.log(myName, " ", birthCity, " ",birthYear);
//
// birthYear = 2030;
//
// console.log(birthYear);
//
// birthCity = Santos;
// console.log(birthCity);
//
//
// const squirtle = "melhor pokemon inicial";
//
// console.log(!squirtle); // false
//
//exercicio 8
// const primeiroNum = 655;
// const segundoNum = 3855;
// const terceiroNum = 38689;
//
// if (primeiroNum%2 == 0 || segundoNum%2 == 0 || terceiroNum%2 == 0) {
//     console.log('um deles é par');
// } else {
//     console.log('nenhum é par');
// }
//exercicio 9
// const primeiroNum = 658;
// const segundoNum = 3858;
// const terceiroNum = 38680;
//
// if (primeiroNum%2 !== 0 || segundoNum%2 !== 0 || terceiroNum%2 !== 0) {
//     console.log('um deles é impar');
// } else {
//     console.log('nenhum é impar');
// }
//
// exercicio 10
// const custo = 165;
// const preco = 396;
// let custoTotal = custo*1.2;
// let lucro = preco-custoTotal;
//
// if (custo < 0 || preco < 0) {
//     console.log('pane no sistema alguem me desconfigurou');
// } else {
//     console.log('O lucro da venda de 1000 unidades é de', (lucro*1000), 'talqueis.');
// }
//
// exercicio 11
const salBruto = 3000;
let inss = 0;

if (salBruto > 5189.82) {
    inss = 570.88;
} else if (salBruto <= 5189.82 && salBruto >= 2594.93) {
    inss = salBruto * 0.11;
} else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
    inss = salBruto * 0.09;
} else if (salBruto <= 1556.92) {
    inss = salBruto * 0.08;
}

let salDeduzido = salBruto - inss;

if (salDeduzido <= 1903.98) {
    console.log('Salário Bruto é', salBruto, '. E o Salário líquido é de', salDeduzido);
} else if (salDeduzido <= 2826.65) {
    console.log('Salário Bruto é', salBruto, '. E o Salário líquido é de', (salDeduzido - ((salDeduzido * 0.075) - 142.80)));
} else if (salDeduzido <= 3751.05) {
    console.log('Salário Bruto é', salBruto, '. E o Salário líquido é de', (salDeduzido - ((salDeduzido * 0.15) - 354.80)));
} else if (salDeduzido <= 4664.68) {
    console.log('Salário Bruto é', salBruto, '. E o Salário líquido é de', (salDeduzido - ((salDeduzido * 0.225) - 636.13)));
} else if (salDeduzido >= 4664.68) {
    console.log('Salário Bruto é', salBruto, '. E o Salário líquido é de', (salDeduzido - ((salDeduzido * 0.275) - 869.36)));
}
