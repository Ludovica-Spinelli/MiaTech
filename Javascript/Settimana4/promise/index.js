// ESERCIZI: Gestione di una promessa con catch & Promessa con finally

const  simplePromise = (cond) => {
    return new Promise((resolve, reject) =>  {
        if(cond) {
            setTimeout(() => resolve("Done"), 2000);
        } else {
            reject(new Error("Condizione falsa"))
        }
    });
}

simplePromise(false).then(
    result => {console.log(result)}
).catch(
    reject => {console.error(reject.message)}
).finally(
    console.log("Valutazione conclusa")
);

// ESERCIZIO: Catena di promesse semplici

const calcoli = (numero) => {
    return new Promise((resolve, reject) => {
        if(typeof numero == "number") {
            setTimeout(() => resolve(numero), 1000);
        } else {
            reject(new Error("Il valore inserito non è un numero"))
        }
    });
}

const raddoppia = (numero) => {
    return new Promise((resolve) => {
        resolve(numero * 2);
    });
}

const aggiungiTre = (numero) => {
    return new Promise((resolve) => {
        resolve(numero + 3);
    })
}

calcoli(5).then(
    result => raddoppia(result)
).then(
    result => aggiungiTre(result)
).then(
    result => console.log(result)
);

// ESERCIZIO: Catena di promesse con condizioni

const creaNumero = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(4), 1000);
    })
}

const oddOrEven = (numero) => {
    return new Promise((resolve) => {
        resolve(numero % 2 == 0 ? numero + 1 : numero - 1);
    })
}

creaNumero().then(
    result => oddOrEven(result)
).then(
    result => console.log(result)
);

// ESERCIZIO: Catena di promesse con gestione degli errori

const validitaValore = (numero) => {
    return new Promise((resolve, reject) => {
        if(typeof numero == "number") {
            resolve(numero);
        } else {
            reject(new Error("Il valore inserito non è un numero."));
        }
    });
}

const controlloValore = (numero) => {
    return new Promise((resolve, reject) => {
        if(numero > 10) {
            resolve(numero * 2);
        } else {
            reject(new Error("Inserire un numero più grande"));
        }
    });
}

validitaValore(12).then(
    result => controlloValore(result)
).then(
    result => console.log(result)
).catch(
    error => console.error(error)
);

// ESERCIZIO: Gestione degli errori con catch

const rifiuta = () => {
    return new Promise((resolve, reject) => {
            reject(new Error("Servizio non disponibile"));
    });
}

rifiuta().catch(
    result => console.error(result.message)
);

// ESERCIZIO: Gestione degli errori con then e catch

const verita = (condizione) => {
    return new Promise((resolve, reject) => {
        if(condizione) {
            resolve("Condizione vera");
        } else {
            reject(new Error("La condizione passata è falsa"));
        }
    });
}

verita(false).then(
    result => console.log(result)
).catch(
    result => console.error(result.message)
);

// ESERCIZIO: Gestione degli errori in una catena di promesse

const dimezza = (numero) => {
    return new Promise((resolve, reject) => {
        if(numero > 0) {
            resolve(numero / 2);
        } else {
            reject(new Error("Inserire un numero maggiore di 0"));
        }
    });
}

const dimezzaAncora = (numero) => {
    return new Promise((resolve) => {
        resolve(numero / 2)
    });
}

dimezza(10).then(
    result => dimezzaAncora(result)
).then(
    result => console.log(result)
).catch(
    result => console.error(result)
);

// ESERCIZIO: Utilizzare Promise.all

const conteggio = new Promise((resolve) => {
        setTimeout(() => resolve("3 2 1 "), 1000);
    });

const partenza = new Promise((resolve) => {
        setTimeout(() => resolve("Via!"), 4000);
    });

Promise.all([conteggio, partenza]).then(
    (values) => {console.log(values)}
);

// ESERCIZIO: Utilizzare Promise.race

Promise.race([conteggio, partenza]).then(result => console.log(result));

// ESERCIZIO: Utilizzare Promise.allSettled

const promiseRifiutata = new Promise((resolve, reject) => {
        reject(new Error("Promise Rifiutata"));
    });

Promise.allSettled([conteggio, partenza, promiseRifiutata]).then(
    result => console.log(result)
);