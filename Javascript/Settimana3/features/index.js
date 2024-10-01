const numbers = [5, 10, 15, 20, 25];

// ex Estrazione elementi base
    /* const [primo, secondo] = numbers;

    console.log(primo);
    console.log(secondo); */

const [primo, ,terzo] = numbers;

console.log(primo);
console.log(terzo); 

const crepe = ["farina", "latte", "uova", "burro"];
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

// ex Estrazione di proprietà base
/*     const {secondName, profession} = user;

    console.log(secondName);
    console.log(profession); */

const {firstName:nome, secondName:cognome, age:eta, profession:professione} = user;
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

const {nome: animale, colori, alimentazione = "carnivoro", lunghezza = 1.5 } = volpe;
console.log(animale);
console.log(colori);
console.log(alimentazione);
console.log(lunghezza);