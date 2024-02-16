// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import Swiper from 'swiper/swiper-bundle'; // Import Swiper from the swiper-bundle file


var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});