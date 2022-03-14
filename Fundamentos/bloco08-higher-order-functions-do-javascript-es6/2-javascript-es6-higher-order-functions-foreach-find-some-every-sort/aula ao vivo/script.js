const estudantes = [
    {
      nome: 'Joel',
      Projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Mica',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Hugonardo',
      Projeto: 'Trybewarts',
      status: 97,
    },
    {
      nome: 'Aninha',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Joicy',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald',
      Projeto: 'Trybewarts',
      status: 75,
    },
  ];
  
  // 1 - Aqui na Trybe estamos criando um bot que vai dar os parabéns para as pessoas que entregaram 100% dos projetos, esse bot deve imprimir uma msg do tipo: "Olá pessoa, parabéns por ter finalizado 100% do nomeDoPorjeto", para cada pessoa.
  
  // escreva sua função aqui.
// function parabensCemPC (array) {
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i].status === 100) {
// 			console.log(`Olá ${array[i].nome}, parabéns por ter finalizado 100% do ${array[i].Projeto}`);
// 		}	
// 	}  
// }
// parabensCemPC(estudantes);

estudantes.forEach(element => {
	if (element.status === 100) {
		console.log(`Olá ${element.nome}, parabéns por ter finalizado 100% do ${element.Projeto}`);
	}	
});

  
  // 2 - Depois de algumas ações focadas nas pessoas que ainda não tinham entregue o projeto conseguimos ter 100% de aprovação! As pessoas que ainda não tinham entregue conseguiram os 80% e precisamos atualizar nossos dados e imprimir o novo resultado.
  
  // escreva sua função aqui.
	estudantes.forEach(element => {
		if (element.status < 80) {
			element.status = 80;
		}
			console.log(`Olá ${element.nome}, parabéns por ter finalizado o ${element.Projeto}`);
	
	});
console.log(estudantes);
