// ESERCIZIO: Funzione asincrona semplice

const benvenuto = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(console.log("Benvenuto!")), 2000);
    })
}

benvenuto();

// ESERCIZIO: Gestione degli errori con try e catch

const veroFalso = async (condizione) => {
    try {
        if(condizione){
            console.log("Risolta");
        } else {
            throw new Error("Rifiutata");
        }
    } catch (error) {
        console.error(error.message);
    }
}

const condizione = false;
veroFalso(condizione);

// ESERCIZIO: Funzioni asincrone in serie

const conteggio = async () => {
    try {
        setTimeout(() => console.log("3 2 1 "), 1000);
    } catch (error) {
        console.error(error.message);
    }
}

const partenza = async () => {
    try {
        setTimeout(() => console.log("Via!"), 4000);
    } catch (error) {
        console.error(error.message);
    }
}

const init = async () => {
    await conteggio();
    await partenza();
} 

init();

// ESERCIZIO: Eseguire una richiesta GET semplice

const fetchDataGET = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

// ESERCIZIO: Eseguire una richiesta POST

const user = {
    nome: "Ludovica",
    cognome: "Spinelli",
    eta: 25,
    citta: "Buccinasco"
}

const fetchDataPOST = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(user)
        });
        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
}

// ESERCIZIO: Gestione degli errori con async e await

const fetchGETRifiutata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/pos");
        if(!response.ok) throw new Error("Errore nel reperimento dati");
    } catch (error) {
        console.error(error.message);
    }
}

const visualizzaDati = async () => {
    await fetchDataGET();
    await fetchDataPOST();
    await fetchGETRifiutata();
}

visualizzaDati();