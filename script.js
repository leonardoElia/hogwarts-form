const botaoHeader = document.getElementById('botaoHeader');

function login(){
    const email = document.querySelector('#email');
    const senha = document.getElementById('senha');
    const emailDigitado = email.value;
    const senhaDigitada = senha.value;

    if(emailDigitado == 'tryber@teste.com' && senhaDigitada == '123456'){
     alert('Olá, Tryber!');
    }else{
        alert('Email ou senha inválidos.');
    }



}


botaoHeader.addEventListener('click', login)