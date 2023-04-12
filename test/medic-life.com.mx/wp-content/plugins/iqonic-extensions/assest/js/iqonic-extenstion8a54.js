/*----------------------------------------------
Index Of Script
------------------------------------------------
*/
(function (jQuery) {

	"use strict";

	jQuery(window).on('load', function () {

		jQuery('#iq-timeline-vertical-1.timeline ').timeline({
			forceVerticalMode: 800,
			mode: 'vertical',
			visibleItems: 2,
		});
	});

	jQuery(document).ready(function () {
		/*------------------------
		Progress Bar
		--------------------------*/
		jQuery('.iq-progress-bar > span').each(function () {
			var jQuerythis = jQuery(this);
			var width = jQuery(this).data('percent');
			jQuerythis.css({
				'transition': 'width 2s'
			});
			setTimeout(function () {
				jQuerythis.appear(function () {
					jQuerythis.css('width', width + '%');
				});
			}, 500);
		});

		/*------------------------
				skrollr
		--------------------------*/
		if (jQuery(window).width() > 992) {
			skrollr.init({ forceHeight: false });
		}
		/*------------------------
		Count Down
		--------------------------*/

		jQuery('.iq-data-countdown-timer').each(function () {

			var future_date = jQuery(this).attr('data-date');
			var label = jQuery(this).attr('data-labels');
			var displayFormat = jQuery(this).attr('data-format');
			var l = true;
			if (label == "true") {
				l = true;
			} else {
				l = false;
			}
			jQuery(this).countdowntimer({
				dateAndTime: future_date,
				labelsFormat: l,
				displayFormat: displayFormat,

			});

		});

		jQuery('.iq-accordion .iq-accordion-block .accordion-details').hide();
		jQuery('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
		jQuery('.iq-accordion .iq-accordion-block').on("click", function () {
			if (jQuery(this).children('div.accordion-details ').is(':hidden')) {
				jQuery('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
				jQuery(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
			}
		});
		/*------------------------
		Add to cart with plus minus
		--------------------------*/

		jQuery(document).on('click', 'button.plus, button.minus', function () {

			jQuery('button[name="update_cart"]').removeAttr('disabled');

			var qty = jQuery(this).closest('.quantity').find('.qty');


			if (qty.val() == '') {
				qty.val(0);
			}
			var val = parseFloat(qty.val());

			var max = parseFloat(qty.attr('max'));
			var min = parseFloat(qty.attr('min'));
			var step = parseFloat(qty.attr('step'));

			// Change the value if plus or minus
			if (jQuery(this).is('.plus')) {

				if (max && (max <= val)) {
					qty.val(max);
				} else {
					qty.val(val + step);
				}
			} else {
				if (min && (min >= val)) {

					qty.val(min);
				} else if (val >= 1) {

					qty.val(val - step);
				}
			}


		});



		/*---------------------------
		Sidebar
		---------------------------*/
		jQuery("#menu-btn-side-open").click(function () {
			jQuery("body").toggleClass("side-bar-open");

		});

		jQuery("#menu-btn-side-close").click(function () {
			jQuery("body").toggleClass("side-bar-open");
		});

		jQuery('body').mouseup(function (e) {
			if (jQuery(e.target).closest(".iq-menu-side-bar").length === 0) {
				jQuery("body").removeClass("side-bar-open");
			}
		});

		jQuery(".iq-menu-side-bar").mouseenter(function () {
			jQuery("body").addClass("body-scroll-hidden");
		});

		jQuery(".iq-menu-side-bar").mouseleave(function () {
			jQuery("body").removeClass("body-scroll-hidden");
		});

		jQuery(window).scroll(function () {
			let scroll = jQuery(window).scrollTop();
			if (scroll >= 10 && jQuery("body").hasClass("side-bar-open")) {
				jQuery("body").removeClass("side-bar-open");
			}
		});



		/*------------------------
		Owl Carousel
		--------------------------*/

		if (jQuery('.owl-carousel').length > 0) {
			jQuery('.owl-carousel').each(function () {

				var jQuerycarousel = jQuery(this);
				jQuerycarousel.owlCarousel({
					items: jQuerycarousel.data("items"),
					loop: jQuerycarousel.data("loop"),
					margin: jQuerycarousel.data("margin"),
					nav: jQuerycarousel.data("nav"),
					dots: jQuerycarousel.data("dots"),
					autoplay: jQuerycarousel.data("autoplay"),
					autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
					navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
					responsiveClass: true,
					responsive: {
						// breakpoint from 0 up
						0: {
							items: jQuerycarousel.data("items-mobile-sm"),
							nav: false,
							dots: true
						},
						// breakpoint from 480 up
						480: {
							items: jQuerycarousel.data("items-mobile"),
							nav: false,
							dots: true
						},
						// breakpoint from 786 up
						786: {
							items: jQuerycarousel.data("items-tab")
						},
						// breakpoint from 1023 up
						1023: {
							items: jQuerycarousel.data("items-laptop")
						},
						1199: {
							items: jQuerycarousel.data("items")
						}
					}
				});
			});
		}

		/*------------------------
		Slick Slider
		--------------------------*/
		jQuery('.slider.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			centerMode: true,
			focusOnSelect: true,
			asNavFor: '.slider-nav',

		});

		jQuery('.slider.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			arrows: true,
			centerMode: true,
			focusOnSelect: true,
			responsive: [{
				breakpoint: 992,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '30',
					slidesToShow: 3
				}
			}, {
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '15',
					slidesToShow: 1
				}
			}],
		});
		var sliders = [];

		if (jQuery('.swiper-container').length > 0) {
			jQuery('.swiper-container').each(function (index, element) {

				jQuery(this).addClass('s' + index);
				var slider = new Swiper('.s' + index, {
					slidesPerView: jQuery(this).data('items'),
					loopedSlides: 3,
					speed: 1500,
					autoplay: jQuery(this).data('autoplay'),
					loop: jQuery(this).data('loop'),
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction',
						renderFraction: function (currentClass, totalClass) {
							return '<span class="' + currentClass + '"></span>' +
								' <span class="iq-swiper-line"></span> ' +
								'<span class="' + totalClass + '"></span>';
						},
					},

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					breakpoints: {
						// when window width is >= 320px
						280: {
							slidesPerView: jQuery(this).data("items-mobile"),

						},
						// when window width is >= 480px
						786: {
							slidesPerView: jQuery(this).data("items-tab"),

						},
						// when window width is >= 640px
						1023: {
							slidesPerView: jQuery(this).data("items-laptop"),

						},
						1199: {
							slidesPerView: jQuery(this).data("items"),

						}
					}


				});
				sliders.push(slider);

			});
		}
	});

})(jQuery);