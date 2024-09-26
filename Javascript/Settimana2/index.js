class Automobile {
    #contatoreChiamate
    constructor(marca, modello, anno, chilometraggio, contatoreChiamate = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno; 
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = contatoreChiamate;
    }

    descrizione() {
        return `L'automezzo è una ${this.marca} ${this.modello} del ${this.anno}`;
    }

    aggiungiChilometri = (km) => {
        this.#incrementaContatore();
        this.chilometraggio = this.chilometraggio + km;
    }

    mostraChilometraggio = () => {
        return this.chilometraggio;
    }

    #calcolaEta = () => {
        const today = new Date(Date.now());
        return  today.getFullYear() - this.anno;
    }

    mostraEta = () => {
        console.log(this.#calcolaEta());
    }

    _controllaChilometri = (limite) => {
        if(this.chilometraggio > limite) {
            console.log("Attenzione è stato superato il limite di km");
        } 
    }

    static confrontaChilometraggio = (auto1, auto2) => {
        if(auto1.chilometraggio > auto2.chilometraggio) {
            return `L'auto con più chilometri è ${auto1.marca} ${auto1.modello} con ${auto1.chilometraggio}km`;
        } else if(auto1.chilometraggio < auto2.chilometraggio) {
            return `L'auto con più chilometri è ${auto2.marca} ${auto2.modello} con ${auto2.chilometraggio}km`;
        } else {
            return "Le auto hanno lo stesso chilometraggio";
        } 
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraContatoreChiamate = () => {
        return this.#contatoreChiamate;
    }

    get getChilometraggioAttuale() {
        return this.chilometraggio;
    }

    set setChilometraggio(km) {
        if(km >= this.chilometraggio) this.chilometraggio = km;
    }

    static verificaIstanza(obj, classe) {
        if(obj instanceof classe) return `L'oggetto passato è un'istanza di ${classe.name}`;
        else return `L'oggetto passato NON è un'istanza di ${classe.name}`;
    }
}

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `${super.descrizione()}, con autonomia di ${this.autonomia}km`;
    }

    ricarica = (km) => {
        this.autonomia = this.autonomia + km;
    }
}

class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, contatoreChiamate = 0, caricoMassimo, caricoAttuale) {
        super(marca, modello, anno, chilometraggio, contatoreChiamate);
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = caricoAttuale;
    }

    descrizione() {
        return `${super.descrizione()}, con carico massimo di ${this.caricoMassimo}kg`;
    }

    carica = (kg) => {
        if(kg <= this.caricoMassimo && (this.caricoAttuale + kg) <= this.caricoMassimo) {
            this.caricoAttuale = this.caricoAttuale + kg;
        }
    }
}

const modus = new Automobile ("Renault", "Modus", 2009);

console.log(modus.descrizione());
modus.chilometraggio = 100000;
modus.aggiungiChilometri(30000);
console.log(modus.mostraChilometraggio());

const austral = new Elettrica ("Renault", "Austral", 2024, 20000, 600);
console.log(austral.descrizione());
austral.ricarica(100);

Automobile.prototype.saluta = function() {
    return `Buongiorno sono l'automezzo ${this.marca} ${this.modello}`;
}

console.log(modus.saluta());
console.log(austral.saluta());
modus.mostraEta();
austral._controllaChilometri(austral.autonomia);

const p208 = new Automobile ("Peugeot", "208 GT line", 2020, 39000);

console.log(Automobile.confrontaChilometraggio(modus, p208));

modus.aggiungiChilometri(30000);
console.log(modus.mostraContatoreChiamate());
modus.setChilometraggio = 200000;
console.log(modus.getChilometraggioAttuale);

const camion = new Camion("Fiat", "Modello", 2017, 80000, undefined, 700, 0);

console.log(camion.descrizione());
camion.carica(500);
console.log(camion.caricoAttuale);
camion.carica(100);
console.log(camion.caricoAttuale)
camion.carica(400);
console.log(camion.caricoAttuale);

console.log(modus instanceof Automobile);
console.log(camion instanceof Camion);

console.log(Automobile.verificaIstanza(modus, Automobile));
console.log(Automobile.verificaIstanza(modus, Camion));