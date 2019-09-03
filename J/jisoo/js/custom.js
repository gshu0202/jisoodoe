// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    //$("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();*/

	/*작업시 추가해야할부분*/
	$("#demo01").animatedModal({
		modalTarget:"demoModal01"
	});//VDL

	$("#demo02").animatedModal({
		modalTarget:"demoModal02"
	});//고래드로잉

	$("#demo03").animatedModal({
		modalTarget:"demoModal03"
	});//타이포그라피

	$("#demo04").animatedModal({
		modalTarget:"demoModal04"
	});//포토샵페인팅

	$("#demo05").animatedModal({
		modalTarget:"demoModal05"
	});//국립현대미술관

	$("#demo06").animatedModal({
		modalTarget:"demoModal06"
	});//리치킹즈

	$("#demo07").animatedModal({
		modalTarget:"demoModal07"
	});//체리블라썸

	$("#demo08").animatedModal({
		modalTarget:"demoModal08"
	});//소그룹

	$("#demo21").animatedModal({
		modalTarget:"demoModal21"
	});//YH인터내셔널

	$("#demo22").animatedModal({
		modalTarget:"demoModal22"
	});//오설록

	$("#demo23").animatedModal({
		modalTarget:"demoModal23"
	});//뱅크다운

	$("#demo24").animatedModal({
		modalTarget:"demoModal24"
	});//펀포유

	$("#demo28").animatedModal({
		modalTarget:"demoModal28"
	});//히든클리프

	$("#demo29").animatedModal({
		modalTarget:"demoModal29"
	});//라인프렌즈

	$("#demo30").animatedModal({
		modalTarget:"demoModal30"
	});//애니위즈 리뉴얼

	$("#demo31").animatedModal({
		modalTarget:"demoModal31"
	});//KSPHM

	$("#demo32").animatedModal({
		modalTarget:"demoModal32"
	});//고래랜턴

	$("#demo33").animatedModal({
		modalTarget:"demoModal33"
	});//톡스앤필

	$("#demo34").animatedModal({
		modalTarget:"demoModal34"
	});//내사이트


    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});