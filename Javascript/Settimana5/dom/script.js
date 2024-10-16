// Oggetto document
console.log(document);

// 	getElementById
const $container = document.getElementById("container");

//	querySelector
const $parLorem = document.querySelector("#lorem");

//	Modifica il testo di un paragrafo
const $welcomeP = document.querySelector("#welcome");
$welcomeP.innerText = "Ciao, Benvenuto!";

//	Cambia lo stile

/* $welcomeP.style.backgroundColor = "orange";
$welcomeP.style.fontSize = "30px"; */
$welcomeP.classList.add("welcom-parag")

// 	Modifica l'html
$welcomeP.innerHTML += "<button>Welcome</button>";

//  Crea una lista
const list = document.createElement("ul");
list.innerText = "Ingredienti pizza:"
$welcomeP.appendChild(list);

//  Crea i list items
const ingredienti = ["Pomodoro", "Mozzarella", "Prosciutto", "Funghi", "Origano"];

for(let i = 0; i < ingredienti.length; i++) {
    const elemento = document.createElement("li");
    elemento.innerText = ingredienti[i];
    list.appendChild(elemento);
}

//  submit
const $form = document.querySelector("#form");
const manageListeners = () => {
    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        if($form.name.value.trim() && $form.surname.value.trim()){
            alert("campi valorizzati");
        } else {
            alert("Valorizzare i campi prima di premere invio")
        };
        
    })
}

/* const $formInstance = new FormData($form);
$formInstance.get("name"); */

manageListeners();
