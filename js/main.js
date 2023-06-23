// const sswiper = new Swiper(".swiper", {
//     effect: "fade",
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
// });

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.onclick = function () {
    search.classList.toggle("active");
};


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});