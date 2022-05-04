let sendButton = document.getElementById('send');
let nome = document.getElementById('input-name');
let email = document.getElementById('input-email');
let texto = document.getElementById('texto');

let elementoNome = nome.value;
let elementoEmail = email.value;
let elementoTexto = texto.value;

sendButton.addEventListener('click', function (event) {
	console.log('nome: ', elementoNome.length);
	console.log('email: ', elementoEmail.length);
	console.log('texto: ', elementoTexto.length);
	event.preventDefault();
	if (elementoNome.length >= 10 && elementoNome.length <= 40 && elementoEmail.length >= 10 && elementoEmail.length <= 50 && elementoTexto.length <= 500) {
		alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
	} else {
		alert('Dados Inválidos');
	};
});