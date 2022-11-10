function parimpar(num) {
    if (num % 2 == 0){
        return `O número ${num} é Par!`
    }else{
        return `O número ${num} é Impar!`
    }
}
let parouimpar = parimpar(6)
console.log(parouimpar)