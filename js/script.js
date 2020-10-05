$(document).ready(function () {

    const slider = document.getElementsByClassName("swiper-container")[0];

    const mySwiper = new Swiper(slider, {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        slidesPerGroup: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 100
            },
            500: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50
            },
            900: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30
            }
        },
    });

    const slider1 = document.getElementsByClassName("swiper-container1")[0];

    const revSwiper = new Swiper(slider1, {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        slidesPerGroup: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '#swiper-button-next--reviews',
            prevEl: '#swiper-button-prev--reviews',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 100
            },
            500: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50
            },
            900: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30
            }
        },
    });

    $(".nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $(".nav").toggleClass("active");
        $(".content").toggleClass("active");
    });

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
    });

    const video = $("#video");
    const play_pause = $("#play__btn");

    function togglePlayPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
    play_pause.onclick = function () {
        togglePlayPause();
    }

});