var agora = new Date()
var diasem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/
switch (diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 2:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO: Dia da semana inválido')
        break
}

console.log(diasem)

if (diasem == 0) {
    console.log('Domingo')
}else if (diasem == 1){
    console.log('Segunda')
}else if (diasem == 2){
    console.log('Terça')
}else if (diasem == 3){
    console.log('Quarta')
}else if (diasem == 4){
    console.log('Quinta')
}else if (diasem == 5){
    console.log('Sexta')
}else if (diasem == 6){
    console.log('Sábado')
}else{
    console.log('ERRO: Dia da semana inválido')
}