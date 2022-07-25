let botao = document.getElementById('botao');



botao.addEventListener("click", function (e) {
    e.preventDefault

    // Pegando o valor digitado no input
    let inputName = document.getElementById('nome');
    let nameValue = inputName.value;
    
    let inputSenha = document.getElementById('senha');
    let senhaValue = inputSenha.value;

    if (nameValue.value <= 5) {
        console.log('Menor que 5')
    }else {
        console.log('Maior que 5')
    }

    // console.log(senhaValue);
    // console.log(nameValue);
    console.log(typeof(senhaValue));
    console.log(typeof(nameValue));
})

