function fatorial(n) {
    let res = n
    for (; n > 1; n--) {
        res *= (n-1)
    }
    return res
}

/*
let n = 6
let res = n
for (; n > 1; n--) {
    res *= (n-1)
}
*/

console.log(fatorial(4))