/*
Template: kivicare
Author: https://iqonic.design/
Version: 1.0
Design and Developed by: https://iqonic.design/
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Back To Top
3.Sub Menu


------------------------------------------------
Index Of Script
----------------------------------------------*/
(function(jQuery) {

    "use strict";
    
    jQuery(window).on('load', function(e) {

        jQuery('ul.page-numbers').addClass('justify-content-center');

        /*------------------------
        Page Loader
        --------------------------*/
       
        jQuery("#load").fadeOut();
        jQuery("#loading").delay(0).fadeOut("slow");

        /*------------------------
        Back To Top
        --------------------------*/
        jQuery('#back-to-top').fadeOut();
        jQuery(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > 250) {
                jQuery('#back-to-top').fadeIn(1400);
            } else {
                jQuery('#back-to-top').fadeOut(400);
            }
        });

         // scroll body to 0px on click
         jQuery('#top').on('click', function() {
            jQuery('top').tooltip('hide');
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

		/*------------------------
			Header
			--------------------------*/
            function headerHeight() {
                const height = jQuery('#main-header').height();
                jQuery('.iq-height').css('height', height + 'px');
            }
    
            jQuery(function () {
                var header = jQuery(".has-sticky"),
                    yOffset = 0,
                    triggerPoint = 80;
                headerHeight();
    
                jQuery(window).resize(headerHeight);
                jQuery(window).on('scroll', function () {
    
                    yOffset = jQuery(window).scrollTop();
    
                    if (yOffset >= triggerPoint) {
                        header.addClass("menu-sticky animated slideInDown");
                    } else {
                        header.removeClass("menu-sticky animated slideInDown");
                    }
    
                });
            });
    
    
            if (jQuery('header').hasClass('has-sticky')) {
                jQuery(window).on('scroll', function () {
                    if (jQuery(this).scrollTop() > 300) {
                        jQuery('header').addClass('menu-sticky animated slideInDown');
                        jQuery('.has-sticky .logo').addClass('logo-display');
                    } else if (jQuery(this).scrollTop() < 20) {
                        jQuery('header').removeClass('menu-sticky animated slideInDown');
                        jQuery('.has-sticky .logo').removeClass('logo-display');
                    }
                });
            }
    
    
        jQuery('.sub-menu').css('display', 'none');
        jQuery('.sub-menu').prev().addClass('isubmenu');
        jQuery(".sub-menu").before('<i class="ion-ios-arrow-down toggledrop" aria-hidden="true"></i>');


        jQuery('.widget .ion-ios-arrow-down, #main .ion-ios-arrow-down').on('click', function() {
            jQuery(this).next('.children, .sub-menu').slideToggle();
        });

        jQuery("#top-menu .menu-item .toggledrop").off("click");
        if (jQuery(window).width() < 1200) {
            jQuery('#top-menu .menu-item .toggledrop').on('click', function(e) {
                e.preventDefault();
                jQuery(this).next('.children, .sub-menu').slideToggle();
            });
        }
    });

    jQuery(document).ready(function() {
            
        /*------------------------
            Wow Animation
        --------------------------*/
           
        jQuery(window).on('resize', function() {
            "use strict";
            jQuery('.widget .ion-ios-arrow-down, #main .ion-ios-arrow-down').on('click', function() {
                jQuery(this).next('.children, .sub-menu').slideToggle();
            });

            jQuery("#top-menu .menu-item .toggledrop").off("click");
            if (jQuery(window).width() < 1200) {
                jQuery('#top-menu .menu-item .toggledrop').on('click', function(e) {
                    e.preventDefault();
                    jQuery(this).next('.children, .sub-menu').slideToggle();
                });
            }
        });

        /*------------------------
            Comment Form validation
        --------------------------*/
        if(jQuery('.validate-form').length > 0){
            jQuery('.validate-form #commentform').submit(function() {
                    jQuery('.error-msg').hide();
                    var cmnt = jQuery.trim(jQuery(".validate-form #comment").val());
                    var error = '';
                    if(jQuery(".validate-form #author").length > 0){
                        var author = jQuery.trim(jQuery(".validate-form #email").val());
                        var email = jQuery.trim(jQuery(".validate-form #author").val());
                        var url = jQuery.trim(jQuery(".validate-form #url").val());
                        jQuery(".validate-form #comment,.validate-form #author,.validate-form #email,.validate-form #url").removeClass('iq-warning');
                        
                        if (cmnt === "" ) {
                            jQuery(".validate-form #comment").addClass('iq-warning');
                            error = '1';
                        }
                        if (author === "") {
                            jQuery(".validate-form #author").addClass('iq-warning');
                            error = '1';
                        }
                        if (email === "") {
                            jQuery(".validate-form #email").addClass('iq-warning');
                            error = '1';
                        }
                        if (url === "") {
                            jQuery(".validate-form #url").addClass('iq-warning');
                            error = '1';
                        }
                        
                    }
                    else
                    {   
                        jQuery(".validate-form #comment").removeClass('iq-warning');
                        if (cmnt === "" ) {
                            jQuery(".validate-form #comment").addClass('iq-warning');
                            error = '1';
                        }
                    }
                    if(error !== '' && error === '1')
                    {   
                        jQuery('.error-msg').html('One or more fields have an error. Please check and try again.');
                        jQuery('.error-msg').slideDown();
                        return false;
                    }


            });
       }

    });
})(jQuery);
