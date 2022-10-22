function contar() {
    var inicio = Number(window.document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.querySelector('div#res')


    if (inicio >= fim){
        alert('Inicio não pode ser maior que o fim')
    }else if (passo <= 0){
        alert('Passo não pode ser menor do que 1')
    }else {
        for (var start = inicio;inicio <= fim ; inicio = inicio + passo){
            if (start == inicio){
                res.innerHTML = `${inicio} &#x1F449 `
            }else {
                res.innerHTML += `${inicio} &#x1F449 `
            }
        }

        if (inicio >= passo){
            res.innerHTML += `&#x1F3C1` 
        }   
    }
 
}