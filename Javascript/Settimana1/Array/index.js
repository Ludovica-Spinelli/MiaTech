const numbers = [2, 8, 14, 26, 35];

console.log(numbers);

let somma = 0;

for( let i = 0; i < numbers.length; i++) {
    somma = somma + numbers[i];
}

console.log(somma);

const reverseNumbers = [];

for( let i = numbers.length -1; i >= 0; i--) {
    reverseNumbers.push(numbers[i]);
}

console.log(reverseNumbers);

const words = [];

for( let i = 0; i < 5; i++) {
    words[i] = prompt('Inserisci una parola');
}

console.log(words);
console.log("Parole di lunghezza dispari:");

for( let i = 0; i < words.length; i++) {
    if(words[i].length % 2 == 1) {
        console.log(words[i]);
    }
}