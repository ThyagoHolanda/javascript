function contar() {
    var inicio = window.document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')

    while (inicio <= fim) {
        
    }

    res.innerHTML = `Começa em ${inicio.value}, terminal em ${fim.value}. Indo de ${passo.value} em ${passo.value}.`
}