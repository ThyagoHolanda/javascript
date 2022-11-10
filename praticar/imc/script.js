function imc(){
    let a = Number(document.querySelector('#altura').value)
    let p = Number(document.querySelector('#peso').value)
    let radsex = document.getElementsByName('radsex')
    let res = document.querySelector('section#res')

    let imc = p/(a*a)

    /*
    Menor que 18.5 - Abaixo do peso ;
    Entre 18.5 e 24.9 - Peso normal ;
    Entre 25.0 e 29.9 - Pré-obesidade ;
    Entre 30.0 e 34.9 - Obesidade Grau 1 ;
    Entre 35.0 e 39.9 - Obesidade Grau 2 ;
    Acima de 40 - Obesidade Grau 3

    ************Homens*****************
    Menor que < 20 - Abaixo do peso ;
    Entre 20 => e < 25 - Peso normal ;
    Entre 25 => e < 30 - Obesidade Grau 1;
    Entre 30 => e < 40 - Obesidade Grau 2 ;
    Acima de > 40 - Obesidade Grau 3

    ************Mulheres****************
    Menor que < 19 - Abaixo do peso ;
    Entre 19 => e < 24 - Peso normal ;
    Entre 24 => e < 29 - Obesidade Grau 1;
    Entre 29 => e < 39 - Obesidade Grau 2 ;
    Acima de > 39 - Obesidade Grau 3
    */

    if (imc < 18.5){
        res.innerHTML = `Você está abaixo do peso`
    }else if (imc >= 18.5 && imc < 25){
        res.innerHTML = `Você está no peso normal`
    }else if (imc >= 25 && imc < 30) {
        res.innerHTML = `Você está na Pré-obesidade`
    }else if (imc >= 30 && imc < 35){
        res.innerHTML = `Você está na Obesidade Grau 1`
    }else if(imc >= 35 && imc < 40) {
        res.innerHTML = `Você está na Obesidade Grau 2`
    }else {
        res.innerHTML = `Você está na Obesidade Grau 3`
    }

    res.innerHTML += `<br>Seu IMC é ${imc.toFixed(2)}`
}