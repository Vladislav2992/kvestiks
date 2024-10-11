const swiper = new Swiper(".reviewSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    mousewheel: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints:{
        470: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        830: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    },    
});

(function(){
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.header__menu-mobile')
    const close = menu.querySelector('.close-menu')
    console.log(burger, menu, close)
    burger.addEventListener('click', ()=> menu.classList.add('active'))
    close.addEventListener('click', ()=> menu.classList.remove('active'))
})();