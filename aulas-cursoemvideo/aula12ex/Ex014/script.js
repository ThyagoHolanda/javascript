function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora <12) {
        msg.innerHTML = `Agora são ${hora} horas.<br>Bom dia!`
        img.src = 'img/manha.png'
        document.body.style.background = '#FECE74'
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML = `Agora são ${hora} horas.<br>Boa Tarde!`
        img.src = 'img/tarde.png'
        document.body.style.background = '#F28705'
    } else {
        msg.innerHTML = `Agora são ${hora} horas.<br>Boa noite!`
        img.src = 'img/noite.png'
        document.body.style.background = '#252526'
    }
}