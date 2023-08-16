function calcular(){  
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value) 
    const resultado = document.querySelector('.res')
    const classfElement = document.getElementById('classfElement')

    if(isNaN(peso) || isNaN(altura)){
        alert('Digite os valores!')
    }else{
        const imc = peso / (altura*altura)
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}`
        if (imc <= 18.5) {
            classification = 'Abaixo do Peso'
        } else if (imc <= 24.9) {
            classification = 'Peso Ideal'
        } else if (imc <= 29.9) {
            classification = 'Levemente Acima do Peso'
        } else if (imc <= 34.9) {
            classification = 'Obesidade de Grau I'
        } else if (imc <= 39.9) {
            classification = 'Obesidade de Grau II'
        } else {
            classification = 'Obesidade de Grau III'
        }

        classfElement.innerHTML = classification
        classfElement.style.width = classification.length * 11 + 'px'
        resultado.style.backgroundColor = '#a5eaff'
        classfElement.style.backgroundColor = '#a5eaff'
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