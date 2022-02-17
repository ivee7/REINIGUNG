import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        scale: 0.6,
        modifier: 0.5,
        slideShadows: false,
    },
    loop: true,
    spaceBetween: 142,
    slidesPerView: 3,
    speed: 500,
    initialSlide: 1,
    centeredSlides: true,
    grabCursor: true,
    preventClicks: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    }
});