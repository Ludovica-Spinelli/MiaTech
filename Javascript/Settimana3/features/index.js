const numbers = [5, 10, 15, 20, 25];

// ESERCIZIO: Estrazione elementi base
    /* const [primo, secondo] = numbers;

    console.log(primo);
    console.log(secondo); */

const [primo, ,terzo] = numbers;

console.log(primo);
console.log(terzo); 

const crepe = ["farina", "latte", "uova", "burro"];                 // spread con aggiunta di elemento con valore predefinito
const [ingr1, ingr2, ingr3, ingr4, ingr5 = "pazienza"] = crepe;

console.log(ingr1);
console.log(ingr2);
console.log(ingr3);
console.log(ingr4);
console.log(ingr5);

const user = {
    firstName: "Ludovica",
    secondName: "Spinelli",
    age: 25,
    profession: "Web Developer",
}

// ESERCIZIO: Estrazione di proprietà base
/*     const {secondName, profession} = user;

    console.log(secondName);
    console.log(profession); */

const {firstName:nome, secondName:cognome, age:eta, profession:professione} = user;     // spread con nomi di proprietà diversi dall'oggetto originale
console.log(nome);
console.log(cognome);
console.log(eta);
console.log(professione);

const volpe = {
    nome: "Volpe",
    colori: ["arancione", "bianco", "nero"],
    alimentazione: undefined,
    lunghezza: undefined,
}

const {nome: animale, colori, alimentazione = "carnivoro", lunghezza = 1.5 } = volpe;   // spread con modifica di valori undefined con valori predefiniti
console.log(animale);
console.log(colori);
console.log(alimentazione);
console.log(lunghezza);

const numbers2_0 = [...numbers];
console.log(numbers2_0);

numbers[2] = 30;
numbers[4] = 40;
console.log(numbers);

const numbersNuovo = [2, 4, 6, 8];

const numbersUnito = [...numbers, ...numbersNuovo];     // spread per unione di due array
console.log (numbersUnito);

const libro = {
    titolo: "Brisingr",
    autore: "Christopher Paolini",
    genere: "Fantasy"
}

const eragon = {...libro, pagine: 800};         // spread per copia di oggetto con aggiunta di proprietà
console.log(libro);
console.log(eragon);

const somma = (...altriValori) => {                     // rest per passare un numero indefinito di valori a una funzione
    let somma = 0;
    for(let i = 0; i < altriValori.length; i++) {
        somma = somma + Number(altriValori[i]);
    }   

    return somma;
}

console.log(somma(2, 4, 6, 8));
console.log(somma(2, 4, 6, 8, "10", "20"));
console.log(somma(2, 4, 6, 8, 10, 20, 30, 40));

const [uno, due, ...resto] = numbers;              // rest per assegnare solo alcuni indici di array in variabili e il resto in un nuovo array
console.log(uno);
console.log(due);
console.log(resto);

const {titolo, autore, ...altreInfo} = eragon;      // combinazione di spread e rest per mettere alcune proprietà in variabili e in resto in un nuovo oggetto

console.log(titolo);
console.log(autore);
console.log(altreInfo);

const str = JSON.stringify(eragon);
console.log(str);

const rettangolo = `{"base": 30,"altezza": 20}`;

console.log(rettangolo);
const objectRettangolo = JSON.parse(rettangolo);
console.log(objectRettangolo);

const persone = `[{"nome": "Ludovica", "cognome": "Spinelli"}, {"nome": "Cristina", "cognome": "Lipari"}, {"nome": "Danilo", "cognome": "Spinelli"}]`;
const objectPersone = JSON.parse(persone);
objectPersone[objectPersone.length] = {nome: "Chiara", cognome: "Spinelli"};
console.log(objectPersone);

