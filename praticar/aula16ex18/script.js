let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n) {
    if (n >=1 && n <=100) {
        //alert("isNumero true")
        return true
    }else {
        //alert("isNumero false")
        return false
    }
}

function inList(n,l){
    if (l.indexOf(n) == -1) {
        //alert("inList true")
        return true
    }else {
        //alert("inList false")
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && inList(num.value,valores)) {
        //alert(`O numero ${num.value} está entre 1 e 100 e não esta na lista`)
        valores.push(num.value)

        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert("Valor invalido ou não esta na lista!")
    }
    
}

function finalizar() {
    let maior = Math.max(...valores)
    /*
    Outra forma de fazer o MAIOR
    valores.reduce(function(a,b) {
        return Math.MAX(a,b)
    })
    */

    let menor = Math.min(...valores)
    /*
    Outra forma de fazer o MENOR
    valores.reduce(function(a,b) {
        return Math.min(a,b)
    })
    */

    let soma = valores.map(Number).reduce(function(a, b) {
        return a + b
    }) 
    /*
    Soma de todos os elementos do array
    .map() Indica que o array é tipo Number
    */

    let media = soma/valores.length

    res.innerHTML = `<br>Ao todo, temos ${valores.length} numeros cadastrados.<br>`
    res.innerHTML += `<br>O maior valor informado foi ${maior}.<br>`
    res.innerHTML += `<br>O menor valor informado foi ${menor}.<br>`
    res.innerHTML += `<br>Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `<br>A média dos valores digitados ${media}.<br>`
}


