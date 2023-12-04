const infoDots = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

infoDots.forEach((dot) => {
    dot.addEventListener("click", showHint);
})

function showHint(event){
    event.stopPropagation();
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// Закрывем подсказки по цвету по нажатию по любому месту страницы 
document.addEventListener("click", closeHints);

function closeHints(){
    infoHints.forEach((hint) => {
                hint.classList.add("none")
    })
}

// Если клик происходит внутри блока info-hint блокируем клик наверх
infoHints.forEach((hint) => {
    hint.addEventListener("click", (event) => event.stopPropagation());
})