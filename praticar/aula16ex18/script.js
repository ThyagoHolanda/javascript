let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n) {
    if (Number(n) >=1 && Number(n) <=100) {
        //alert("isNumero true")
        return true
    }else {
        //alert("isNumero false")
        return false
    }
}

function inList(n,l){
    if (l.indexOf(Number(n)) == -1) {
        //alert("inList true")
        return true
    }else {
        //alert("inList false")
        return false
    }
}

function adicionar() {
    if (isNumero(Number(num.value)) && inList(Number(num.value),valores)) {
        //alert(`O numero ${num.value} está entre 1 e 100 e não esta na lista`)
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert("Valor invalido ou não esta na lista!")
    }
    //num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Nenhum valor adicionado. Favor adicionar um numero!")
        num.focus()
    }else {
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

        let soma = valores.reduce(function(a, b) {
            return a + b
        }) 
        /*
        Soma de todos os elementos do array
        .map() Indica que o array é tipo Number
        */

        /*
        Outra forma de fazer o MAIOR MENOR SOMA e MEDIA
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if ( valores[pos] < menor)
                menor = valores[pos]
        }
        */

        let media = soma/valores.length

        res.innerHTML = `<p>Ao todo, temos ${valores.length} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados ${media}.</p>`
    }
    
}


