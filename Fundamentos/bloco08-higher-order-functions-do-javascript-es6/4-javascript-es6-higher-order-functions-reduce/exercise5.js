// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  // escreva seu código aqui
  const aaaaa = array.join('');
  return aaaaa.split('').reduce(((acc, cur) => {
    if (cur === 'A' || cur === 'a')
      acc += 1;
    return acc;
  }), 0);
}

console.log(containsA(names));
