let num = Number(document.querySelector('input#num').value)
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (n >=1 && n <=100) {
        return true
    }else {
        return false
    }
}

function inList(n,l){
    if (l.indexOf(n) !== -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumero(num) && inList(num, valores)) {
        
    }
    
}