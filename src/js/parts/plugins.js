import "slick-carousel";

export class Plugins {
    init() {
        this.LatestHelpAdviceSlider();
        this.TestimonialSlider();
        this.BlogOpen();
        this.FooterSlider();
        this.LogoSlider();
    }

    LatestHelpAdviceSlider() {
        $('.help-advice-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            arrows: true,
            prevArrow: ".help-advice-section .prev-arrow",
            nextArrow: ".help-advice-section .next-arrow",
        })
    }
    BlogOpen() {
        $('.blog-open-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            arrows: true,
            prevArrow: ".blog-open-content-section .prev-arrow",
            nextArrow: ".blog-open-content-section .next-arrow",
        })
    }

    FooterSlider() {
        $('.footer-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            arrows: false,
        })
    }

    LogoSlider() {
        $('.logo-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0, // No delay between slides
            speed: 2000, // Slow scrolling speed (6 seconds for full loop)
            cssEase: 'linear', // Smooth linear scrolling
            pauseOnHover: false,
            pauseOnFocus: false,
        });
    }

    TestimonialSlider() {
        function animateActiveDot() {
            $('.testimonial-slider .slick-dots li').removeClass('animate-dot');
            $('.testimonial-slider .slick-dots li.slick-active').addClass('animate-dot');
        }

        $('.testimonial-slider').on('init', function (event, slick) {
            animateActiveDot();
        });

        $('.testimonial-slider').on('afterChange', function (event, slick, currentSlide) {
            animateActiveDot();
        });

        $('.testimonial-slider').slick({
            slidesToShow: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            slidesToScroll: 1,
            prevArrow: ".testimonial-section .prev-arrow",
            nextArrow: ".testimonial-section .next-arrow",
        })
    }
}
