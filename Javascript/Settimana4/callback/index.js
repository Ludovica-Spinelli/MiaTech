// ESERCIZIO: Funzione di base con callback
const feedbackSomma = () => {
    console.log("Somma eseguita");
}

const somma = (val1, val2, funct) => {
    const somma = val1 + val2;
    console.log(somma);
    funct();
}

somma(3, 7, feedbackSomma);

// ESERCIZIO: Funzione con callback e passaggio di parametri

const risultatoSomma = (result) => {
    console.log(result);
}

const somma2 = (val1, val2, funct) => {
    const somma = val1 + val2;
    funct(somma);
}

somma2(5, 10, risultatoSomma);

// ESERCIZIO: Callback annidati

const raddoppiaSomma = (val1, funct) => {
    const somma = val1 * 2;
    funct(somma);
}

const somma3 = (val1, val2, funct1, funct2) => {
    const somma = val1 + val2;
    console.log(somma);
    funct1(somma, funct2);
}

somma3(2, 4, raddoppiaSomma, risultatoSomma);


const  simplePromise = new Promise((resolve, reject) =>  {
        setTimeout(() => resolve("Done"), 2000);
});

simplePromise.then(
    result => {console.log(result)}
);