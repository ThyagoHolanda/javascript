function contar() {
    let inicio = window.document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.getElementById('passo')
    let res = document.querySelector('div#res')

    //res.innerHTML = `Inicio = ${inicio}<br>Fim = ${fim}<br> Passo = ${passo}<br>`



    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        
        if (passo == 0) {
            alert('Passo inválido. Considerando passo 1')
            passo = 1
        }

        if (inicio > fim){
            for (var start = inicio;inicio >= fim ; inicio = inicio - passo){
                if (start == inicio){
                    res.innerHTML = `${inicio} \u{1F449} `
                }else {
                    res.innerHTML += `${inicio} \u{1F449} `
                }
            }
        }else {
            for (var start = inicio;inicio <= fim ; inicio = inicio + passo){
                if (start == inicio){
                    res.innerHTML = `${inicio} \u{1F449} `
                }else {
                    res.innerHTML += `${inicio} \u{1F449} `
                }
            }
        }
        res.innerHTML += `&#x1F3C1`
    }
}