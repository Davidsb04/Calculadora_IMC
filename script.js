function calcular(){  
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value) 
    const resultado = document.querySelector('.res')

    if(isNaN(peso) || isNaN(altura)){
        alert('Digite os valores!')
    }else{
        const imc = peso / (altura*altura)
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}`
    }
}
function formatNumberField(input) {
    let value = input.value.replace(/\D/g, '')
    if (value.length === 1) {
        value = value + '.'
    } else if (value.length > 1) {
        value = value.substring(0, 1) + '.' + value.substring(1, 3)
    }
    input.value = value
}
function formatWeightField(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 3) {
        input.value = value;
    } else if (value.length === 4) {
        value = value.substring(0, 2) + '.' + value.substring(2, 4);
        input.value = value;
    } else if (value.length >= 5) {
        value = value.substring(0, 3) + '.' + value.substring(3, 5);
        input.value = value;
    }
}