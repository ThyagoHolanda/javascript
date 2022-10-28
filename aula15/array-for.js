let num = [5,2,8,5,8,6,3,2,2,5,4,8,9,6,3]

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos}º tem valor é ${num[pos]}`)
}
*/
num.sort()
for(let pos in num){
    console.log(`A posição ${pos}º tem o valor ${num[pos]}`)
}