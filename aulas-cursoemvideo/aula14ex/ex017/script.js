function gerar() {
    let numero = document.querySelector('input#numero')
    let res = document.querySelector('select#tabuada')
    let num = Number(numero.value)

    if (numero.value.length == 0) {
        alert("Digite um numero!")
    }else {
        res.innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            res.appendChild(item)
            }
        }
    
    /*if (numero.value.length == 0) {
        alert("Digite um numero!")
    }else {
        for (let i = 1; i <= 10; i++) {
            let numres = num * i
            if (i == 1) {
                res.innerHTML = `<option value="numer${i}">${num} x ${i} = ${numres}</option>`        
            }else {
                res.innerHTML += `<option value="numer${i}">${num} x ${i} = ${numres}</option>` 
            }
        }
    }*/

}