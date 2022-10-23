function contar() {
    var inicio = Number(window.document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.querySelector('div#res')

    if (passo == 0) {
        alert('Passo inválido. Considerando passo 1')
        passo = 1
    }

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