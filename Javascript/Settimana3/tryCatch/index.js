const nome = "Ludovica";
const cognome = "Spinelli";
const nomeCompleto = `${nome} ${cognome}`;
console.log(nomeCompleto);

const eta = 25;
const citta = "Bucciansco";
const infoPersona = `${nome}
${cognome}
${eta}
${citta}`;
console.log(infoPersona);

const persona = {
    nome: "Ludovica",
    cognome: "Spinelli",
    eta: 25,
    citta: "Bucciansco"
};

const stampaPersona = (pers) => {
    console.log(`${pers.nome} ${pers.cognome} ${pers.eta} ${pers.citta}`)
}
stampaPersona(persona);

const numero = 8;
const stringa = "Hello world!";
const array = [5, 10, 15, 20];
const oggetto = {
    linguaggio: "javascript",
    versione: "v20.17.0"
};
console.log(numero);
console.log(stringa);
console.log(array);
console.log(oggetto);

const vero = true;
const falso = false;

const controlloVerita = (ver) => {
    if(ver) console.warn("L'affermazione risulta vera");
    else console.error("L'affermazione risulta falsa");
}

controlloVerita(vero);
controlloVerita(falso);

const persone = [{nome: "Ludovica", cognome: "Spinelli"}, {nome: "Cristina", cognome: "Lipari"}, {nome: "Danilo", cognome: "Spinelli"}];
console.table(persone);

console.group("Prima riga");
console.group("Primo rientro di riga");
console.group("Secondo rientro di riga");
console.groupEnd();
console.log("Termine primo rientro");
console.groupEnd();
console.log("Termine secondo rientro");
console.groupEnd();
console.log("Termine rientri");

const saluto = () => {
    console.log("Ciao!");
}

setTimeout(saluto, 3000);
const interval = setInterval(saluto, 2000);
clearInterval(interval);