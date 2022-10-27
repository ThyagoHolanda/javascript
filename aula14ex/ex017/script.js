function gerar() {
    var numero = document.querySelector('input#numero')
    var res = document.querySelector('select#tabuada')
    var num = Number(numero.value)

    if (numero.value.length == 0) {
        alert("Digite um numero!")
    }else {
        for (var i = 1; i <= 10; i++) {
            var numres = num * i
            if (i == 1) {
                res.innerHTML = `<option value="numer${i}">${num} x ${i} = ${numres}</option>`        
            }else {
                res.innerHTML += `<option value="numer${i}">${num} x ${i} = ${numres}</option>` 
            }
        }
    }

}