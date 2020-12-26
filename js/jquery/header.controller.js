// phone input pattern controller

$(document).ready(function () {
    $(".phone_input").inputmask("+38 (9*[3]) 999 - 99 - 99");


    const mainSlider = $('.main_slider_container');

    mainSlider.owlCarousel({
        items: 1,
        nav: true,
        navText: [
            `<img class="arrow_left arrow_slider" src = "img/main/slider/arrow_next.png" alt="left">`,
            `<img class="arrow_right arrow_slider" src = "img/main/slider/arrow_next.png" alt="right">`,

        ],

    });




    $(".right_menu_row").click(event => {
        $(".right_menu_row").removeClass("right_menu_active");
        event.target.closest(".right_menu_row").classList.add("right_menu_active");
        Array.from($(".right_menu_row"))
            .map((elem, index) => {
            if (elem.classList.contains("right_menu_active")) {
                mainSlider.trigger('to.owl.carousel', [index, 200]);
            }
        });
    })


});

