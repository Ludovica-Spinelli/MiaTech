/* const sumDigits = (numero) => {
    if(typeof numero == "number") {
        numStr = String(numero);
        let sum = 0;
        let i = numStr - 1;
        while(i >= 0) {
            let val = Number(numStr.charAt(i));
            sum = sum + val;
            i--;
        }
        return sum;
    } else {
        throw new Error("Inserire un numero");
    }
}

const risultato = sumDigits(123456);
console.log(risultato); */

const sumDigits = (numero) => {
    if(typeof numero == "number") {
        const numStr = String(numero);
        const arrayStr = numStr.split('');
        let sum = 0;
        for (let i = 0; i < arrayStr.length; i++) {
            sum = sum + Number(arrayStr[i]);
        }
        return sum;
    } else {
        throw new Error("Inserire un numero");
    }
}

const risultato = sumDigits(12345);
console.log(risultato);

