const botaoHeader = document.getElementById('botaoHeader');
const concordo = document.querySelector('#agreement');
function login() {
  const email = document.querySelector('#email');
  const senha = document.getElementById('senha');
  const emailDigitado = email.value;
  const senhaDigitada = senha.value;
  if (emailDigitado === 'tryber@teste.com' && senhaDigitada === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botaoHeader.addEventListener('click', login);
function habilitaBnt() {
  const bntEnviar = document.querySelector('#submit-btn');
  if (concordo.checked === true) {
    bntEnviar.disabled = false;
  } else {
    bntEnviar.disabled = true;
  }
}
concordo.addEventListener('click', habilitaBnt);
const textarea = document.querySelector('#textarea');
const contagem = document.querySelector('#counter');
contagem.innerText = 500;
function contador() {
  contagem.innerText = 500 - textarea.value.length;
}
textarea.addEventListener('keyup', contador);
