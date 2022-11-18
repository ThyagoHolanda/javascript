/*let valores = []

console.log(valores)

function isNumero(n) {
    if (n >=1 && n <=100) {
        //console.log(`isNumero true`)
        return true
    }else {
        //console.log(`isNumero false`)
        return false
    }
}

function inList(n,l){
    if (l.indexOf(n) == -1) {
        //console.log(`inList true`)
        return true
    }else {
        //console.log(`inList false`)
        return false
    }
}

function adicionar(num) {
    if (isNumero(num) && inList(num,valores)) {
        //console.log(`O numero ${num} está entre 1 e 100 e não esta na lista`)
        valores.push(num)
    }
    
}

function finalizar() {
    let max = Math.max(...valores)

    let min = valores.reduce(function(a,b) {
        return Math.min(a,b)
    })
    console.log(`Ao todo, temos ${valores.length} numeros cadastrados.`)
    console.log(`Maior valor: ${max}.`)
    console.log(`Maior valor: ${min}.`)
}

adicionar(1)
adicionar(2)
adicionar(5)
adicionar(4)
adicionar(2)
console.log(valores)

finalizar()

*/
let num = 3
num **= 3
console.log(num)
