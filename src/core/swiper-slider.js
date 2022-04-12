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
    spaceBetween: 0,
    slidesPerView: 1,
    // autoHeight: true,
    // loopFillGroupWithBlank: true,
    // slidesPerGroup: 1,
    // slidesOffsetBefore: 100,
    // slidesOffsetAfter: 50,
    // setWrapperSize: true,
    breakpoints: {
        1700: {
            spaceBetween: 97,
            slidesPerView: 3,
        },
        1500: {
            spaceBetween: 60,
            slidesPerView: 3,
        },

        1300: {
            spaceBetween: 40,
            slidesPerView: 3,
        },

        1024: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        320: {
            spaceBetween: 0,
            slidesPerView: 1,
        }
    },
    speed: 400,
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