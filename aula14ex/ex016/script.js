function contar() {
    var inicio = window.document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.getElementById('passo').value
    var res = document.querySelector('div#res')

    //res.innerHTML = `Inicio = ${inicio}<br>Fim = ${fim}<br> Passo = ${passo}<br>`

    if (passo == 0) {
        alert('Passo inválido. Considerando passo 1')
        passo = 1
    }

    if (inicio == "" || fim == "") {
        res.innerHTML = "Impossível contar!"
    } else {
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if (inicio > fim){
            for (var start = inicio;inicio >= fim ; inicio = inicio - passo){
                if (start == inicio){
                    res.innerHTML = `${inicio} &#x1F449 `
                }else {
                    res.innerHTML += `${inicio} &#x1F449 `
                }
            }
        }else {
            for (var start = inicio;inicio <= fim ; inicio = inicio + passo){
                if (start == inicio){
                    res.innerHTML = `${inicio} &#x1F449 `
                }else {
                    res.innerHTML += `${inicio} &#x1F449 `
                }
            }
        }
        res.innerHTML += `&#x1F3C1`
    }
}