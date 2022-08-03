// criando function que ira calcular nossos dados
function calcular () {
    // Pegando variaveis 

    let InputName = document.getElementById('name');
    let InputAltura = document.getElementById('altura');
    let InputPeso = document.getElementById('peso');
    // let resultado = document.getElementById('resultado');
    let textoValue = document.getElementById('textoValue');
    let textoResultado =  document.getElementById('textoResultado');

    let nameValue = InputName.value;
    let alturaValue = parseFloat(InputAltura.value);
    let pesoValue = parseFloat(InputPeso.value);

    let imc = (pesoValue / (alturaValue * alturaValue));
    Math.round(imc);

    if(imc < 18,5) {
        textoResultado.innerText = 'Seu IMC é de' + imc + 'e você está abaixo peso normal.'
        textoValue.innerText = 'Olá ' + nameValue + ' , vejo que você tem ' +
        alturaValue + ' de altura e pesa ' + pesoValue + 'kg.';
        
    } else if (imc == 18,5 || 24,9) {
        console.log('Peso normal');
    }else if (imc == 25,0 || 29,9) {
        console.log('Excesso de peso');
    }
}
