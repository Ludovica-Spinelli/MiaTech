const closeClass = "close"

const renderToggleMode = () => {
    document.body.classList.toggle("dark");
    document.querySelector(".close")?.classList.remove("close");
    if(document.body.classList.contains("dark")) {
        document.querySelector("#sun").classList.add("close");
    } else {
        document.querySelector("#moon").classList.add("close");
    }
}

document.querySelector("#darkModeToggle").addEventListener("click", renderToggleMode);
