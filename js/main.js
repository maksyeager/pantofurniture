const infoDots = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// Клик по кнопкам с подсказками
infoDots.forEach((dot) => {
    dot.addEventListener("click", function(event){
        event.stopPropagation();

        // Закрываем все кнопки
        infoHints.forEach((hint) => {
            hint.classList.add("none");
        });

        // Открываем только нужную
        this.parentNode.querySelector(".info-hint").classList.toggle("none");
    });
})


// Закрывем подсказки по цвету по нажатию по любому месту страницы 
document.addEventListener("click", () => {
    infoHints.forEach((hint) => {
                hint.classList.add("none");
    });
});

// Если клик происходит внутри блока info-hint блокируем клик наверх
infoHints.forEach((hint) => {
    hint.addEventListener("click", function(event){
        event.stopPropagation();
    });
})

// Swiper
const swiper = new Swiper('.swiper', {
	// loop: true,
	// freeMode: true,

	slidesPerView: 1,
	spaceBetween: 42,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
})

// Tabs
const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

tabsBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        // Убираем активный класс у всех кнопок
        for (let btn of tabsBtns){
            btn.classList.remove("tab-controls__btn--active");
        }

        // Добавляем активный класс на нажатую кнопку
        this.classList.add("tab-controls__btn--active");

        // Получаем значение категории товаров, которые нужно включить
        const value = this.dataset.tab;

        // Отображаем нужные товары и скрываем ненужные товары
        tabsProducts.forEach(function(product){
            if(value === "all"){
                product.classList.remove("none");
            }else{
                if(product.dataset.tabValue === value){
                    product.classList.remove("none");
                }else{
                    product.classList.add("none");
                }
            }           
        })

        swiper.update();
    })
})

// Mobile Nav
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavBtnOpen = document.querySelector("#open-mobile-nav-btn");
const mobileNavBtnClose = document.querySelector("#close-mobile-nav-btn");

mobileNavBtnOpen.addEventListener("click", function(){
    mobileNav.classList.add("mobile-nav--open");
})

mobileNavBtnClose.addEventListener("click", function(){
    mobileNav.classList.remove("mobile-nav--open");
})

// Dropdown Links work with Slider
// Mobile Dropdown Links work with Slider and close Mobile Nav
const navDropdownLink = document.querySelectorAll(".dropdown-menu__link");
const mobileNavDropdownLink = document.querySelectorAll(".mobile-nav-dropdown__link");
 
mobileNavDropdownLink.forEach((link) => {
    link.addEventListener("click", function(){
        mobileNav.classList.remove("mobile-nav--open");
        const type = this.dataset.furnitureType;
        console.log(type)

        tabsProducts.forEach(function(product){
            if(product.dataset.tabValue === type){
                product.classList.remove("none");
            }else{
                product.classList.add("none");
            }          
        })

        tabsBtns.forEach(function(btn){
            if(btn.dataset.tab === type){
                btn.classList.add("tab-controls__btn--active");
            }else{
                btn.classList.remove("tab-controls__btn--active");
            }  
        })
    })
})