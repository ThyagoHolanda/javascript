function testmetodos(){
    var numbers = [1, 4, 9];
    var roots = numbers.reduce(function(a,b){
        return Math.max(a,b)
    });
    console.log(roots)
}

let array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
let initialValue = 0;
let sumWithInitial = (array1.reduce(function(a, b) {
  return (a+b)
}))/array1.length;

console.log(sumWithInitial);