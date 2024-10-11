// ESERCIZIO: Comprendere un errore CORS

const fetchData = async () => {
    try {
        const response = await fetch("https://www.geojs.io/docs/v1/endpoints/country/");
        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
}

// ESERCIZIO: Utilizzare un proxy per bypassare CORS

const fetchData2 = async () => {
    try {
        const response = await fetch("/Javascript/Settimana4/CORS/dati.txt");
        result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// ESERCIZIO: Utilizzare un'API che supporta CORS

const fetchData3 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

// Esecuzione delle funzioni

const init = async () => {
    await fetchData();
    await fetchData2();
    await fetchData3();
}

init();