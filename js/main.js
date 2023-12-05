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

// Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    freeMode: true,

    slidesPerView: 4,
    spaceBetween: 42,

    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },
    
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
  });