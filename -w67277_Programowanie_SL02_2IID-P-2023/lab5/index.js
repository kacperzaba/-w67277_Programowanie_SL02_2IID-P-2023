//zad 1
let variable_a = prompt("Podaj swój wiek: ")
if (variable_a >= 18) {
    window.alert('Jesteś pełnoletni')
} else {
    window.alert('Jesteś niepełnoletni')
}


//zad 2
let temperature = prompt('Podaj temperature: ')
let farenheit = temperature*2 + 32 
console.log(farenheit)


//zad 3
let collection = [12, 3, 4, -11, 43, 21, 8, 3]
const sum = collection.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); //72

collection.forEach(function(number) {
    if (number % 2 == 0) {
        console.log(number)
    }
});

collection.forEach(function(number) {
    console.log(number*3)
 }) 

collection.push(67277)
const findedElem = collection.indexOf(67277)
console.log(findedElem);

const average = sum / collection.length
console.log(average)

console.log(Math.max(...collection))

const count = collection.reduce((acc, val) => {
    if (val == 3) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0);
console.log(count);


//zad 4
const fib = [0,1];

for (let i = 2;i < 100; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib)
