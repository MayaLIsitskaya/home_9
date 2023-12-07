import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', '.pagination', {
    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },
    pagination: {
        el: '.slider__pagination',
    },
    direction: 'horizontal',
    scrollbar: {
        el: '.scroll-scrollbar',
    },
});

export default swiper;