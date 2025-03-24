import "slick-carousel";

export class Plugins {
	init() {
		this.LatestHelpAdviceSlider();
		this.TestimonialSlider();
	}

	LatestHelpAdviceSlider() {
        $('.help-advice-slider').slick({
            slidesToShow:3,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            arrows: true,
            prevArrow: ".help-advice-section .prev-arrow",
            nextArrow: ".help-advice-section .next-arrow",
        })
    }
	TestimonialSlider() {

        function animateActiveDot() {
            $('.testimonial-slider .slick-dots li').removeClass('animate-dot');
            $('.testimonial-slider .slick-dots li.slick-active').addClass('animate-dot');
        }
        
        $('.testimonial-slider').on('init', function(event, slick){
            animateActiveDot();
        });
        
        $('.testimonial-slider').on('afterChange', function(event, slick, currentSlide){
            animateActiveDot(); 
        });
        
        $('.testimonial-slider').slick({
            slidesToShow:1,
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            arrows: true,
            slidesToScroll: 1,
            prevArrow: ".testimonial-section .prev-arrow",
            nextArrow: ".testimonial-section .next-arrow",
        })
    }
}
