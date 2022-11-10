function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'HOMEM'
            if (idade >=0 && idade <= 10){
                //CIRANÇA
                img.setAttribute('src','img/bebe-homem.png')
            } else if (idade > 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','img/jovem-homem.png')
            } else if (idade >=21 && idade < 65) {
                //Adulto
                img.setAttribute('src','img/adulto-homem.png')
            } else if (idade >= 65) {
                //Idoso
                img.setAttribute('src','img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'MULHER' 
            if (idade >=0 && idade <= 10){
                //CIRANÇA
                img.setAttribute('src','img/bebe-mulher.png')
            } else if (idade > 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','img/jovem-mulher.png')
            } else if (idade >=21 && idade < 65) {
                //Adulto
                img.setAttribute('src','img/adulto-mulher.png')
            } else if (idade >= 65) {
                //Idoso
                img.setAttribute('src','img/idosa.png')
            }     
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }

}