function gerar() {
    var numero = Number(document.querySelector('input#numero').value)
    var res = document.querySelector('select#tabuada')

    for (var contar = 1; contar <= 10; contar++) {
        var num2 = numero * contar
        if (contar == 1) {
            res.innerHTML = `<option value="numer${contar}">${numero} x ${contar} = ${num2}</option>`        
        }else {
            res.innerHTML += `<option value="numer${contar}">${numero} x ${contar} = ${num2}</option>` 
        }
    }
}