let num = [5,8,2,8]
num[3] = 1997
num.push(7) //Acrescenta na última posição
//num.length -> Quantas posições tem o array
//num.sort() -> Coloca o array em ordem alfabetica
//num.indexOf() -> Posição de um valor especifico do array
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`1º valor é ${num[0]}`)
console.log(`2º valor é ${num[1]}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)

}


