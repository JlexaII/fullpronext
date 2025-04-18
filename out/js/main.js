var swiper4 = new Swiper(".info-slider", {
    spaceBetween: 5,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
});
var swiper1 = new Swiper(".slider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    thumbs: {
        swiper: swiper4,
    },
});
var swiper3 = new Swiper(".tovar", {
    slidesPerView: "auto",
    slidesPerGroup: 3,
    spaceBetween: 20,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            spaceBetween: 8,
        },
        576: {
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".nav-slider", {
    spaceBetween: 6,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            direction: "vertical",
        },
    },
});
var swiper2 = new Swiper(".img-slider", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
$(document).ready(function ($) {
    $('.popup-open').click(function () {
        $('.popup-fade').fadeIn();
        $('.popup-fade-reg').fadeOut();
        return false;
    });
    $('.popup-open-reg').click(function () {
        $('.popup-fade-reg').fadeIn();
        $('.popup-fade').fadeOut();
        return false;
    });
    $('.popup-close').click(function () {
        $(this).parents('.popup-fade').fadeOut();
        $(this).parents('.popup-fade-reg').fadeOut();
        return false;
    });
    $('.popup-fade').click(function (e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
    $('.popup-fade-reg').click(function (e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
            $('.popup-fade-reg').fadeOut();
        }
    });
    $('.sec-11 .like').click(function () {
        $(this).toggleClass('active');
        return false;
    });
    $('.sec-6 .like').click(function () {
        $(this).toggleClass('active');
        return false;
    });
    $('.sec-14 .like').click(function () {
        $(this).toggleClass('active');
        return false;
    });
    $('.sec-15 .like').click(function () {
        $(this).toggleClass('active');
        return false;
    });
    $('.info-dostavka .close').click(function () {
        $('.info-dostavka').toggleClass('active');
        $('body').toggleClass('active');
        return false;
    });
    $('.sec-18 .eng a').click(function () {
        $('.sec-18 .eng a').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.sec-18 .ru a').click(function () {
        $('.sec-18 .ru a').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.sec-18 .cifr a').click(function () {
        $('.sec-18 .cifr a').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.sec-18 .top a').click(function () {
        $('.sec-18 .top a').removeClass('active');
        $(this).toggleClass('active');
        return false;
    });
    $('.sec-18 .top #cifr').click(function () {
        $('.sec-18 .top a').removeClass('active');
        $('.sec-18 .ru').slideUp();
        $('.sec-18 .eng').slideUp();
        $(this).addClass('active');
        $('.sec-18 .cifr').slideDown();
        return false;
    });
    $('.sec-18 .top #ru').click(function () {
        $('.sec-18 .top a').removeClass('active');
        $('.sec-18 .cifr').slideUp();
        $('.sec-18 .eng').slideUp();
        $(this).addClass('active');
        $('.sec-18 .ru').slideDown();
        return false;
    });
    $('.sec-18 .top #eng').click(function () {
        $('.sec-18 .top a').removeClass('active');
        $('.sec-18 .cifr').slideUp();
        $('.sec-18 .ru').slideUp();
        $(this).addClass('active');
        $('.sec-18 .eng').slideDown();
        return false;
    });
    $('header .search').click(function () {
        $('.popup-search').slideToggle();
        return false;
    });
    $('.popup-search .close').click(function () {
        $('.popup-search').slideToggle();
        return false;
    });
    $('.popup-search input').click(function () {
        $('.popup-search').addClass('active');
        $('.search-popup-ini').slideDown();
        return false;
    });
    $('.search-popup-ini .close-ini').click(function () {
        $('.popup-search').removeClass('active');
        $('.search-popup-ini').slideUp();
        return false;
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.search-popup-ini').length == 0) {
            $('.search-popup-ini').slideUp();
        }
    });
    $('.search').click(function () {
        $(this).addClass('active');
        $('.search-popup').slideDown();
        return false;
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.search').length == 0) {
            $('.search').removeClass('active');
            $('.search-popup').slideUp();
        }
    });
    $('.search-popup .close').click(function () {
        $('.search').removeClass('active')
        $('.search-popup').slideUp();
        return false;
    });
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.menu').slideToggle();
        $('header').toggleClass('active');
        return false;
    });
    $('.btn-filter').click(function () {
        $(this).next('form').slideToggle();
        return false;
    });
    $('.select-btn').click(function () {
        $(this).toggleClass('active');
        $('.select-btn').not(this).removeClass('active');
        $('.select-popup').hide();
        $('.select-popup').slideDown(300);
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.select-btn').length == 0) {
            $('.select-btn').removeClass('active');
        }
    });
    $('.panel-heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
        return false;
    });
    if ($(window).width() < 575) {
        $('footer .item .zag').click(function () {
            $(this).toggleClass('active');
            $(this).next('ul').slideToggle();
            return false;
        });
    }
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if($( "body" ).hasClass( "active" )) {
            if (height > 80) {
                $('header').addClass('header-fixed');
            } else {
                $('header').removeClass('header-fixed');
            }
        }else{
            if (height > 128) {
                $('header').addClass('header-fixed');
            } else {
                $('header').removeClass('header-fixed');
            }
        }
    });
    $('.select2').select2();
    $('.select2').on('select2:open', function (e) {
        $('.select2-dropdown').hide();
        $('.select2-dropdown').slideDown(300);
    });

    jQuery('#copy1').click(function () {
        var $temp = jQuery("<input>");
        jQuery("body").append($temp);
        $temp.val(jQuery('#div1').text()).select();
        document.execCommand("copy");
        $temp.remove();
        setTimeout(function(){
            $('.info-copy').removeClass('active');
        }, 5000);
        $('.info-copy').addClass('active');
        return false;
    });
});
jQuery(function ($) {
    $("input[name='phone']").mask("+7 (999) 999-99-99", {placeholder: "+7 (___) ___-__-__"});
    $("input[name='promo']").mask("999 - 999 - 999 - 999", {placeholder: "___ - ___ - ___ - ___"});
});
function countup(className){
    var countBlockTop = jQuery("."+className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;
    if(show && (countBlockTop < jQuery(window).scrollTop() + windowHeight)){
        show = false;
        jQuery('.'+className).spincrement({
            from: 0,
            duration: 4000,
            thousandSeparator: ' ',
        });
    }
}
jQuery(function() {
    countup("count", jQuery(".count").text());
});