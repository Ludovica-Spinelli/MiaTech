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

const twoSeconds = setInterval(saluto, 2000);
setTimeout(() => {
    clearInterval(twoSeconds);
}, 5000)

const oneSecond = setInterval(saluto, 1000);
setTimeout(() => {
    clearInterval(oneSecond);
}, 5000)

const divisione = (divisore, dividendo) => {
    try {
        if(dividendo == 0){
            throw new Error("Non si può dividere un numero per 0");
        } else {
            return divisore / dividendo;
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

console.log(divisione(10, 2));
divisione(10, 0);

const operazioneStringa = (str1, str2) => {
    try {
        if(!(typeof str1 == "string") && !(typeof str2 == "string")) {
            throw new Error("I valori inseriti devono essere due stringhe");
        } else if(isNaN(str1 * str2)) {
            throw new Error("Le stringhe devono essere due numeri");
        } else {
            return str1 * str2;
        }
    } catch (error) {
        console.log(error.message);
    }
}

operazioneStringa(5, 2);
operazioneStringa("5", "ciao");
console.log(operazioneStringa("5", "2")); 

const operazioneRiuscita = (valore1, valore2) => {
    try {
        if(typeof valore1 == "number" && typeof valore2 == "number" && valore1 >= 10) {
            return valore1 + valore2;
        } else {
            throw new Error("I valori devono essere dei numeri e il primo valore non può essere inferiore a 10")
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Operazione completata");
    }
} 

operazioneRiuscita("ciao", 7);
operazioneRiuscita(5, 7);
console.log(operazioneRiuscita(15, 7));