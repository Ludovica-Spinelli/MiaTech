const setCookie = (name, value, ggScadenza) => {
    const d = new Date();
    d.setTime(d.getTime() + (ggScadenza * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + " = " + value + "; " +  expires + "; path=/";
}

setCookie("Preferenza colore", "dark", 1);
console.log(document.cookie);

const deleteCookie = () => {
    setCookie("Preferenza colore", "", -1);
    console.log(document.cookie);
}

deleteCookie();


// LocalStorage
const key = "email"; 
localStorage.setItem(key, "ludovica@test.com");
console.log(localStorage);
const item = localStorage.getItem(key);
console.log(item);
localStorage.removeItem(key);
console.log(localStorage);

// SessionStorage
const key2 = "Nome Completo"; 
sessionStorage.setItem(key2, "Ludovica Spinelli");
console.log(sessionStorage);
const item2 = sessionStorage.getItem(key2);
console.log(item2);
sessionStorage.removeItem(key2);
console.log(sessionStorage);

// LocalStorage & SessionStorage
const key3 = "Città"; 
localStorage.setItem(key3, "Buccinasco");
sessionStorage.setItem(key3, "Buccinasco");
console.log(localStorage);
console.log(sessionStorage);
const item3 = localStorage.getItem(key3);
const item4 = sessionStorage.getItem(key3);
console.log(item3);
console.log(item4);
localStorage.removeItem(key3);
sessionStorage.removeItem(key3);
console.log(localStorage);
console.log(sessionStorage);